# Golden Solution - A115

## Reference answer

$V_{in} \approx 1.30$ V, $A_v \approx -2.2$ V/V (−2.35 V/V if $g_{ds}$ is neglected), $R_{out} \approx 6.65$ kΩ (7.07 kΩ $= 1/g_{m2}$ if $g_{ds}$ is neglected).

- $100\ \mu\mathrm{A} = \frac{110\ \mu \times 5}{2}(V_{in}-0.7)^2$, so $V_{in} - 0.7 = 0.603$ V and $V_{in} = 1.303$ V. With the $(1+\lambda v_{DS})$ factor at $v_{OUT} = 5 - V_{SG2} = 5 - (0.7 + 1.414) = 2.89$ V, $V_{in} \approx 1.27$ V. M1 is saturated, since $v_{DS1} = 2.89$ V > 0.6 V.
- $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 5 \cdot 100\ \mu} = 331.7\ \mu$S, $g_{m2} = \sqrt{2 \cdot 50\ \mu \cdot 2 \cdot 100\ \mu} = 141.4\ \mu$S, $g_{ds1} = 4\ \mu$S, $g_{ds2} = 5\ \mu$S.
- $A_v = -g_{m1}/(g_{m2} + g_{ds1} + g_{ds2}) = -331.7/150.4 = -2.20$ ($\approx -g_{m1}/g_{m2} = -2.35$).
- $R_{out} = 1/(g_{m2} + g_{ds1} + g_{ds2}) = 6.65$ kΩ ($\approx 1/g_{m2} = 7.07$ kΩ).
- Carrying the $(1+\lambda v_{DS})$ factor through the dc solution self-consistently ($V_{SD2}$ = 2.05 V, $v_{OUT}$ = 2.95 V, $V_{OV2}$ = 1.347 V, $V_{OV1}$ = 0.570 V, $g_m = 2I_D/V_{OV}$: $g_{m1}$ = 351 µS, $g_{m2}$ = 148.5 µS) gives $V_{in}$ = 1.27 V, $A_v \approx -2.23$ to $-2.24$ and $R_{out} \approx 6.35$–6.4 kΩ; this is equally correct.

## Grading notes

+2: $V_{in}$ = 1.26–1.31 V, $A_v$ between −2.15 and −2.40 and $R_{out}$ = 6.3–7.1 kΩ, either including $g_{ds}$ or approximating by $g_{m1}/g_{m2}$ and $1/g_{m2}$ (6.35–6.4 kΩ results from carrying the $(1+\lambda v_{DS})$ factor through the dc solution, with $g_m = 2I_D/V_{OV}$ and $V_{OV2}$ = 1.347 V; this is equally correct). +1: one quantity off by a slip. 0: $V_{in}$ right but the gain or output resistance computed with a wrong but stated assumption, or only $V_{in}$ given; a critical error confined to one of the three quantities ($V_{in}$ computed from the PMOS equation, or the gain given as $g_{m2}/g_{m1}$) also caps the score at 0. −2 (asserted as fact): the diode-connected load treated as a current source (gain ≈ −37, $R_{out} \approx 111$ kΩ), which makes both the gain and the output resistance wrong.
