# Golden Solution - grsim-05-09

## Reference answer

$HD_2 \approx 0.40\%$ (and $HD_3 \approx 0$).
- Both devices saturated with equal $k'W/L$, so $I_{D1} = I_{D2}$ gives $V_i - V_{t1} = -V_{t2}(V_o)$, i.e. $V_i = 0.6 + 0.6 - 0.5\left(\sqrt{0.6 + V_o} - \sqrt{0.6}\right)$.
- At $V_o = 1$ V: $V_{t2} = -0.355$ V, $I_D = \tfrac12(200\ \mu)(100)(0.355)^2 = 1.26$ mA, dc input $V_I = 0.955$ V; both devices saturated ($V_{DS1} = 1$ V, $V_{DS2} = 2$ V > 0.355 V).
- Inverting: $\sqrt{0.6 + V_o} = 2(C - V_i)$ with $C = 1.2 + 0.5\sqrt{0.6}$, so $V_o = 4(C - V_i)^2 - 0.6$ — exactly quadratic. About the operating point $C - V_I = 0.5\sqrt{1.6} = 0.632$: $a_1 = -8(0.632) = -5.06$, $a_2 = 4$, $a_3 = 0$.
- $HD_2 = \tfrac12|a_2/a_1|\hat v_i = \tfrac12(4/5.06)(0.01) = 0.0040$; no third harmonic.

## Grading notes

A correct simulation (operating point $V_I \approx 0.955$ V for $V_O = 1$ V, transient with a 10 mV sine and Fourier analysis) shows a small-signal gain ≈ −5.1, $HD_2$ ≈ 0.4% (0.35–0.45%) and $HD_3$ negligible (< 0.01%). +2: hand result 0.40% (±10%) with the quadratic transfer (body effect of $M_2$ as the source of nonlinearity) and a simulation consistent with it; +1: correct $HD_2$ but the dc input or the simulation set-up missing; 0: right method with a factor-of-2 slip; −2: distortion claimed zero because both devices obey the same square law (body effect ignored) or a value off by an order of magnitude asserted.
