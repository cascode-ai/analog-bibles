# Golden Solution - R458

## Reference answer

$V_{OD} = 1/3$ V; $(W/L)_5 \approx 134$, $(W/L)_6 \approx 469$.

- $A_2 = g_{m5}(r_{O5}\|r_{O6}) = \dfrac{2I_D}{V_{OD}}\cdot\dfrac{1}{(\lambda_n + \lambda_p)I_D} = \dfrac{2}{V_{OD}(\lambda_n+\lambda_p)} = 20$ → $V_{OD} = 2/(20 \times 0.3) = 0.333$ V.
- $(W/L)_5 = 2(1\ \mathrm{mA})/(134\ \mu \times 0.111) = 134$; $(W/L)_6 = 2(1\ \mathrm{mA})/(38.4\ \mu \times 0.111) = 469$.

## Grading notes

+2: $V_{OD} \approx 0.33$ V and $(W/L)_5 \approx 134$, $(W/L)_6 \approx 469$ (±5%). +1: right method with a slip in one ratio. 0: correct gain equation set up but solved incorrectly. -2 (asserted as fact): gain written with $r_{O5}$ or $r_{O6}$ alone, the PMOS sized with $\mu_nC_{ox}$, or the gain assumed independent of overdrive so that sizes are arbitrary.
