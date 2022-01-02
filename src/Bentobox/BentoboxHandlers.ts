import { CVXCRVTRICRYPTO2_CAULDRON, WONDERLAND_ETH_TREASURY } from "./../constants";
import { Abracvxtricrypto2 } from "./../../generated/Bentobox/Abracvxtricrypto2";
import { loadOrCreateCvxcrvtricrypto2BentoboxMetric } from "./Cvxcrvtricrypto2BentoboxMetric";
import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import { getCvxCrvTriCryptoSharePrice } from "../utils/cvxcrv3crypto";
import { toDecimal } from "../Decimals";

export function logTricrypto2CauldronMetric(dateStr: string, timestamp: BigInt): void {
  let tricrypto2Metric = loadOrCreateCvxcrvtricrypto2BentoboxMetric(dateStr, timestamp);

  const cauldron = Abracvxtricrypto2.bind(Address.fromString(CVXCRVTRICRYPTO2_CAULDRON));
  const decimals = 18;
  const wonderlandAddress = Address.fromString(WONDERLAND_ETH_TREASURY);

  const collateralCoins = toDecimal(cauldron.userCollateralShare(wonderlandAddress), decimals);
  const collateralPrice = getCvxCrvTriCryptoSharePrice();
  const collateral = collateralCoins.times(collateralPrice);

  const totalBorrow = cauldron.totalBorrow();
  const elastic = totalBorrow.value0;
  const base = totalBorrow.value1;

  if (elastic.equals(BigInt.fromString("0")) || base.equals(BigInt.fromString("0"))) {
    return;
  }
  const debtMultiplier = elastic.divDecimal(base.toBigDecimal()); // something like 1.00305934
  const debt = cauldron.userBorrowPart(wonderlandAddress);
  const readableDebt = toDecimal(debt, decimals).times(debtMultiplier);

  tricrypto2Metric.collateral = collateral;
  tricrypto2Metric.debt = readableDebt;
  tricrypto2Metric.price = collateralPrice;
  tricrypto2Metric.coins = collateralCoins;

  tricrypto2Metric.save();
}
