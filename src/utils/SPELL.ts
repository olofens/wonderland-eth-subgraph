import { getWETHDecimals, getWETHPrice } from "./WETH";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../generated/Degenbox/ERC20";
import { UniswapV2Pair } from "../../generated/sOHM/UniswapV2Pair";
import { SPELL, SPELL_WETH_SLP } from "../constants";
import { toDecimal } from "../Decimals";

export const getSPELLDecimals = (): number => {
  return ERC20.bind(Address.fromString(SPELL)).decimals();
};

export const getSPELLPrice = (): BigDecimal => {
  const pairContract = UniswapV2Pair.bind(Address.fromString(SPELL_WETH_SLP));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve0 = result.value.value0; // spell
  const reserve1 = result.value.value1; // weth

  const totSpell = toDecimal(reserve0, getSPELLDecimals());
  const totWeth = toDecimal(reserve1, getWETHDecimals());

  const usdValueOfWethInPool = totWeth.times(getWETHPrice());
  const spellPrice = usdValueOfWethInPool.div(totSpell);
  return spellPrice;
};
