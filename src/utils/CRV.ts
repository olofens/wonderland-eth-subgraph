import { getWETHDecimals, getWETHPrice } from "./WETH";
import { CRV, UNI_V2_CRV_WETH_PAIR, WONDERLAND_ETH_TREASURY } from "./../constants";
import { ERC20 } from "./../../generated/Bentobox/ERC20";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { toDecimal } from "../Decimals";
import { UniswapV2Pair } from "../../generated/sOHM/UniswapV2Pair";

export const getCRVDecimals = (): number => {
  return ERC20.bind(Address.fromString(CRV)).decimals();
};

export const getCRVPrice = (): BigDecimal => {
  const pairContract = UniswapV2Pair.bind(Address.fromString(UNI_V2_CRV_WETH_PAIR));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve0 = result.value.value0; // crv
  const reserve1 = result.value.value1; // weth

  const totCrv = toDecimal(reserve0, getCRVDecimals());
  const totWeth = toDecimal(reserve1, getWETHDecimals());

  const usdValueOfWethInPool = totWeth.times(getWETHPrice());
  const crvPrice = usdValueOfWethInPool.div(totCrv);
  return crvPrice;
};

export const getTreasuryCRVBalance = (): BigDecimal => {
  const crvContract = ERC20.bind(Address.fromString(CRV));
  const balance = crvContract.balanceOf(Address.fromString(WONDERLAND_ETH_TREASURY));
  return toDecimal(balance, getCRVDecimals());
};

export const getTreasuryCRVValue = (): BigDecimal => {
  return getTreasuryCRVBalance().times(getCRVPrice());
};
