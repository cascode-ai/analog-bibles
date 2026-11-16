# Golden Solution - G048

## Reference answer

Process B: two chips (≈ USD 2.8 for the pair vs ≈ USD 4.1 for one chip). Process A: one chip, marginally (≈ USD 2.1 vs ≈ USD 2.4). Process C: two chips by a wide margin (≈ USD 4.1 vs ≈ USD 10.6).

- Cost per good finished unit: $C = \dfrac{C_w}{NY_{ws}Y_{df}Y_{ft}} + \dfrac{C_p}{Y_{ft}}$ ($C_w$ wafer cost, $N$ gross dice per wafer, $C_p$ packaging/test cost per packaged die); here $Y_{df}Y_{ft} = 0.72$ and $C_p/Y_{ft} = 0.75$ USD.
- 4-inch wafer: $N \approx 1.2\times10^7\ \mathrm{mil^2}/A$ → $N \approx 300$ for 40,000 mil², ≈ 600 for 20,000 mil².
- Wafer-sort yields read from the curves (40k / 20k mil²): A ≈ 34% / 53%; B ≈ 14% / 36%; C ≈ 4.7% / 17.5%.
- B: one chip $100/(300\times0.14\times0.72) + 0.75 = 4.06$ USD; two chips $2\times[100/(600\times0.36\times0.72) + 0.75] = 2\times 1.39 = 2.79$ USD → two chips.
- A: one chip $100/(300\times0.34\times0.72) + 0.75 = 2.11$ USD; two chips $2\times[100/(600\times0.53\times0.72) + 0.75] = 2\times 1.19 = 2.37$ USD → one chip (≈ 10% cheaper; the doubled packaging cost outweighs the yield gain).
- C: one chip $100/(300\times0.047\times0.72) + 0.75 = 10.6$ USD; two chips $2\times 2.07 = 4.15$ USD → two chips.

## Grading notes

Three cases (B, A, C), a third of the credit each. Readings from the plots vary: accept yields within ±15% of those above and $N$ of 280–330 / 560–660; costs within ±20%. Conclusions: B two chips, C two chips, A one chip (or "about equal, one chip slightly cheaper"). For A, a two-chip conclusion is acceptable only if it follows from a stated 40k-mil² yield reading below about 0.29; otherwise count that case wrong. +2: all three conclusions with the correct cost model (wafer cost divided by good finished units plus packaging cost divided by $Y_{ft}$, and two packages for the two-chip option). +1: two of three right, or all three right with the packaging cost not divided by $Y_{ft}$. 0: correct method with readings off enough to flip two conclusions, or only one case done. −2 (asserted as fact): the two-chip option costed with one package/one die cost, gross dice not doubled for the half-size die, or yields applied multiplicatively to the cost instead of dividing.
