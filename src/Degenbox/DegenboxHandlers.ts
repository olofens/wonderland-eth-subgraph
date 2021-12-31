import { ERC20 } from "../../generated/Degenbox/ERC20";
import { CAULDRON_V2_ADDRESS, WONDERLAND_ETH_TREASURY } from "../constants";
import { USTCauldron } from "../../generated/Degenbox/USTCauldron";
import { Degenbox } from "../../generated/Degenbox/Degenbox";

import { Address, BigInt } from "@graphprotocol/graph-ts";
import { loadOrCreateUSTDegenboxMetric } from "./USTDegenboxMetric";
import { toDecimal } from "../Decimals";

export function logUstMetric(dateStr: string, timestamp: BigInt): void {
  let ustMetric = loadOrCreateUSTDegenboxMetric(dateStr, timestamp);

  // each cauldron has a bentobox (degenbox) attached to it.
  const cauldronContract = USTCauldron.bind(Address.fromString(CAULDRON_V2_ADDRESS));
  const degenboxContract = Degenbox.bind(cauldronContract.bentoBox());
  const collateralAddress = cauldronContract.collateral(); // this is address to UST
  const decimals = ERC20.bind(collateralAddress).decimals();
  const wonderlandAddress = Address.fromString(WONDERLAND_ETH_TREASURY);

  // Please see the Calculation readmes/Abracadabra collateral... readme file for explanation
  const collateral = degenboxContract.toAmount(
    collateralAddress,
    cauldronContract.userCollateralShare(wonderlandAddress),
    false
  );

  const readableCollateral = toDecimal(collateral, decimals);

  const totalBorrow = cauldronContract.totalBorrow();
  const elastic = totalBorrow.value0;
  const base = totalBorrow.value1;

  if (elastic.equals(BigInt.fromString("0")) || base.equals(BigInt.fromString("0"))) {
    return;
  }
  const debtMultiplier = elastic.divDecimal(base.toBigDecimal()); // something like 1.00305934
  const debt = cauldronContract.userBorrowPart(wonderlandAddress);
  const readableDebt = toDecimal(debt, decimals).times(debtMultiplier);

  ustMetric.collateral = readableCollateral;
  ustMetric.debt = readableDebt;

  ustMetric.save();
}
