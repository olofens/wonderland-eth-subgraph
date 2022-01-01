import { getUSDCDecimals } from "./USDC";
import { UniswapV2Pair } from "./../../generated/sOHM/UniswapV2Pair";
import { UNI_V2_USDC_WETH_PAIR, WETH } from "./../constants";
import { ERC20 } from "./../../generated/Bentobox/ERC20";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { toDecimal } from "../Decimals";

export const getWETHDecimals = (): number => {
  return ERC20.bind(Address.fromString(WETH)).decimals();
};

// Read the USD price from the USDC-WETH univ2 pair
export const getWETHPrice = (): BigDecimal => {
  const pairContract = UniswapV2Pair.bind(Address.fromString(UNI_V2_USDC_WETH_PAIR));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve0 = result.value.value0; // usdc
  const reserve1 = result.value.value1; // weth

  const totUsdc = toDecimal(reserve0, getUSDCDecimals());
  const totWeth = toDecimal(reserve1, getWETHDecimals());

  const wethRate = totUsdc.div(totWeth);
  return wethRate;
};
