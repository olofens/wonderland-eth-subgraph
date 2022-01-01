import { getDAIDecimals } from "./DAI";
import { UniswapV2Pair } from "./../../generated/sOHM/UniswapV2Pair";
import { UNI_V2_WBTC_DAI_PAIR, WBTC } from "./../constants";
import { ERC20 } from "./../../generated/Bentobox/ERC20";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { toDecimal } from "../Decimals";

export const getWBTCDecimals = (): number => {
  return ERC20.bind(Address.fromString(WBTC)).decimals();
};

// Read the USD price of WBTC from the WBTC-DAI univ2 pair
export const getWBTCPrice = (): BigDecimal => {
  const pairContract = UniswapV2Pair.bind(Address.fromString(UNI_V2_WBTC_DAI_PAIR));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve0 = result.value.value0; // wbtc
  const reserve1 = result.value.value1; // dai

  const totWbtc = toDecimal(reserve0, getWBTCDecimals());
  const totDai = toDecimal(reserve1, getDAIDecimals());

  const wbtcRate = totDai.div(totWbtc);
  return wbtcRate;
};
