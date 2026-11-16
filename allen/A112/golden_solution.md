# Golden Solution - A112

## Reference answer

$v_{OUT}(\max) = 5$ V and $v_{OUT}(\min) \approx 0.5$ V.

- Load line: $i_D = (5 - v_{OUT})/10\ \mathrm{k\Omega}$, a straight line from (5 V, 0) to (0, 0.5 mA); each intersection with the M1 curve for a given $v_{IN}$ is one point of the transfer curve.
- $v_{IN} \le 0.7$ V: M1 is off, no current flows in the resistor, $v_{OUT} = V_{DD} = 5$ V. Unlike a PMOS diode load, the resistor has no threshold drop, so the output reaches the full 5 V.
- M1 saturated (neglecting λ): $v_{OUT} = 5 - 10\ \mathrm{k\Omega}\cdot 110\ \mu(v_{IN}-0.7)^2 = 5 - 1.1(v_{IN}-0.7)^2$: 4.90 V at $v_{IN} = 1$ V, 4.30 V at 1.5 V, 3.14 V at 2 V. M1 enters the triode region where $v_{OUT} = v_{IN} - 0.7$, that is at $v_{IN} \approx 2.43$ V, $v_{OUT} \approx 1.73$ V. The slope there is the steepest, ≈ −3.8 V/V.
- Triode: $220\ \mu[(v_{IN}-0.7)v_{OUT} - v_{OUT}^2/2] = (5 - v_{OUT})/10\ \mathrm{k}$ gives 1.01 V at $v_{IN} = 3$ V, 0.66 V at 4 V and 0.505 V at 5 V. The curve flattens toward this minimum.
- With the $(1+\lambda v_{DS})$ factor in saturation the points move down slightly (≈ 2.9 V at $v_{IN} = 2$ V), and $v_{OUT}(\min)$ stays ≈ 0.5 V.

## Grading notes

+2: $v_{OUT}(\max) = 5$ V and $v_{OUT}(\min)$ = 0.45–0.55 V, with a transfer curve of the right shape (flat at 5 V up to $v_{IN} = V_T$, falling quadratically while M1 is saturated, triode tail flattening toward ≈ 0.5 V). Breakpoint values within ±10 % are fine. +1: both extremes right but the transfer curve only roughly described, or a small slip in the intermediate points. 0: only one extreme right, or the right method with a computational slip in $v_{OUT}(\min)$. −2 (asserted as fact): $v_{OUT}(\max) = V_{DD} - V_T = 4.3$ V (carrying over the PMOS-load result), $v_{OUT}(\min) = 0$, or M1 treated as saturated at $v_{IN} = 5$ V, giving a negative or zero output.
