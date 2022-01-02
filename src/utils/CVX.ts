import { getWETHDecimals, getWETHPrice } from "./WETH";
import { CVX, CVX_WETH_SLP, WONDERLAND_ETH_TREASURY } from "./../constants";
import { ERC20 } from "./../../generated/Bentobox/ERC20";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { toDecimal } from "../Decimals";
import { UniswapV2Pair } from "../../generated/sOHM/UniswapV2Pair";

export const getCVXDecimals = (): number => {
  return ERC20.bind(Address.fromString(CVX)).decimals();
};

export const getCVXPrice = (): BigDecimal => {
  const pairContract = UniswapV2Pair.bind(Address.fromString(CVX_WETH_SLP));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve0 = result.value.value0; // cvx
  const reserve1 = result.value.value1; // weth

  const totCvx = toDecimal(reserve0, getCVXDecimals());
  const totWeth = toDecimal(reserve1, getWETHDecimals());

  const usdValueOfWethInPool = totWeth.times(getWETHPrice());
  const cvxPrice = usdValueOfWethInPool.div(totCvx);
  return cvxPrice;
};

export const getTreasuryCVXBalance = (): BigDecimal => {
  const cvxContract = ERC20.bind(Address.fromString(CVX));
  const balance = cvxContract.balanceOf(Address.fromString(WONDERLAND_ETH_TREASURY));
  return toDecimal(balance, getCVXDecimals());
};

export const getTreasuryCVXValue = (): BigDecimal => {
  return getTreasuryCVXBalance().times(getCVXPrice());
};
