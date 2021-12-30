import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { CVXCRVTRICRYPTO2_ORACLE } from "../constants";
import { toDecimal } from "../Decimals";
import { CurvePoolOracle } from "./../../generated/Bentobox/CurvePoolOracle";

const decimals = 18; // hardcoded into the LP contract

export const getCvxCrvTriCryptoSharePrice = (): BigDecimal => {
  const contract = CurvePoolOracle.bind(Address.fromString(CVXCRVTRICRYPTO2_ORACLE));
  return toDecimal(contract.lp_price(), decimals);
};
