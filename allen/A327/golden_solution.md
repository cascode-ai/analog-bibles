# Golden Solution - A327

## Reference answer

Required $g_m = 1/R_1 = 1/3.2\ \mathrm{k\Omega} = 312.5\ \mu$S. One design: a p-channel source-coupled pair with tail current $I_{SS}$ = 100 µA and $W/L$ = 20 µm/1 µm, loaded by an n-channel current mirror (e.g., 5 µm/1 µm), its output (the mirror-output drain) tied to the current-amplifier input node.

- With a current-mirror load the output current is $i_o = g_m v_{id}$, where $g_m$ is the transconductance of one input device at $I_{SS}/2$: $g_m = \sqrt{2K'(W/L)(I_{SS}/2)} = \sqrt{K'(W/L)I_{SS}}$.
- $g_m = 312.5\ \mu$S → $(W/L)I_{SS} = g_m^2/K'_P = (312.5\ \mu)^2/50\ \mu = 1.95$ mA → $I_{SS}$ = 100 µA, W/L ≈ 19.5 ≈ 20 ($g_m$ = 316 µS). (An n-channel pair would need $(W/L)I_{SS}$ = 0.89 mA, e.g., W/L ≈ 9 at 100 µA.)
- The transconductor then plays the role of $v_{in}/R_1$: gain $= -g_mR_2A_o/(1+A_o) = -(312.5\ \mu)(352\ \mathrm{k})(0.1/1.1) = -10$ (sign set by which input is used), now with a high-impedance differential input.
- Checks: output resistance of the transconductor $r_{ds}\|r_{ds}$ ≈ 1/[(0.04 + 0.05)(50 µA)] ≈ 220 kΩ ≫ 451 Ω, so nearly all of its current enters the current amplifier; dc: the output node at ≈ −1.7 V leaves the n-channel mirror device with $V_{DS}$ ≈ 1.3 V (saturated), and with the inputs near 0 V the p-channel input devices have $V_{SD}$ ≈ 2.8 V (saturated). With an n-channel pair the input common-mode level would have to be kept below about −1 V.

## Grading notes

Accept any design with $g_m$ = 312.5 µS (±5%) correctly derived for a current-mirror-loaded pair (full $g_m$ of one input device, $g_m = \sqrt{K'(W/L)I_{SS}}$), with sizes and bias current consistent with it. +2: correct target, correct $g_m$ expression, a consistent size/current choice, and the output connected to the current-amplifier input; dc compatibility or output-resistance remarks are a plus. +1: correct target and sizing with a factor-of-√2 slip in the $g_m$ expression, or no device-level details for the load. 0: correct target $g_m$ = 1/$R_1$ only. −2 (asserted as fact): $g_m$ = 1/(2$R_1$) or $R_1$ = 1/$g_m$ with $R_1$ taken as a different value (e.g., 10 kΩ), or the mirror-loaded pair's output current taken as $g_mv_{id}/2$ and sized accordingly without saying so.
