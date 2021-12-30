Thank you to Mélen from the Abra team who provided me with this information.

### Miscalculation in the way DeBank shows the collateral amount and the debt of abracadabra positions.

Regarding the collateral:

DeBank shows the number of shares of a token (obtained via userCollateralShare in the cauldron) but forgets to transform the number of shares to a number of tokens. Because 1 share ≠ 1 token, this leads to the wrong data being showed to the user.
For every cauldron, you have a bentobox address, that handles the accounting among other things, what you display to the user is userCollateralShare. What should be done is take userCollateralShare, and then pass it as an argument in the "toAmont" function of the bentobox (provided by the cauldron) with :

- the collateral address (available in the cauldron too)
- the number of shares
- false (rounding up the number)

This will convert the amount of shares to the actual amount of tokens help by the user, since, because of strategies, this amount will grow over time.

Regarding the Debt:

The debt of a user is technically rebasing, as the interests accrue over time. the user holds some debt, which is shown in userBorrowPart (that is what you show) but it isn't the whole picture.
That number should be multiplied by a multiplier that you obtain by doing totalBorrow.ellastic/totalBorrow.base in the totalBorrow[] of each cauldron.

If the debt held by the user is 100 and the multiplier is 1.1, the user actually has 110 of debt, but you only showed 100.

I hope this is clear, if you have any questions, don't hesitate and shoot our collaborator Melen a DM in telegram: melenXYZ
