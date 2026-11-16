# Golden Solution - R442

## Reference answer

Gate of $M_3$ (= node X): $V_{GS3} \approx 0.79$ V. Gate of $M_2$: $V_X + V_{GS2} \approx 1.84$ V (≈ 1.68 V if the body effect of $M_2$ is ignored).

- $M_3$ (source grounded) carries $I_1 = 100\ \mu$A: $V_{GS3} = 0.7 + \sqrt{2(100\ \mu)/(134\ \mu \cdot 200)} = 0.7 + 0.086 = 0.786$ V. The loop forces X to this value.
- $M_2$ carries $I_2 = 0.5$ mA with its source at $V_X$: $V_{OD2} = \sqrt{2(0.5\ \mathrm{m})/(134\ \mu \cdot 200)} = 0.193$ V; $V_{TH2} = 0.7 + 0.45(\sqrt{0.9 + 0.786} - \sqrt{0.9}) = 0.857$ V; $V_{G2} = 0.786 + 0.857 + 0.193 = 1.84$ V.
- Checks: $M_1$ ($V_{DS} = 0.79$ V > 0.19 V) and $M_3$ ($V_{DS} = 1.84$ V) are saturated; the PMOS source $I_1$ (|V_OD| = 0.23 V) has ample headroom.

## Grading notes

+2: $V_{G3} \approx 0.79$ V and $V_{G2} \approx 1.84$ V (±0.03 V) with the body effect of $M_2$ included. +1: body effect ignored ($V_{G2} \approx 1.68$ V) with the rest right, or a W/L slip (W/L = 100: 0.82 V and ≈ 1.96 V). 0: only one of the two voltages right. -2 (asserted as fact): X taken as set by $M_1$'s gate or by $V_{in}$, $V_{G2}$ computed with the source of $M_2$ at ground, or $M_3$ treated as carrying $I_2$.
