# Golden Solution - A278

## Reference answer

(1) $z_1 = p_2$ requires $R_z - \dfrac{1}{g_{m6A}} = \dfrac{C_L}{g_{m6A}C_c}$, i.e. $\dfrac{1}{g_{m6B}} = \dfrac{1}{g_{m6A}}\cdot\dfrac{C_c + C_L}{C_c}$. With $g_{m6B} = \sqrt{2K'_P(W_{6B}/L_{6B})I_8}$ and $g_{m6A} = \sqrt{2K'_P(W_{6A}/L_{6A})I_6}$:

$\dfrac{W_{6B}}{L_{6B}} = \dfrac{W_{6A}}{L_{6A}}\cdot\dfrac{I_6}{I_8}\left(\dfrac{C_c}{C_c + C_L}\right)^2$, equivalently $\dfrac{W_{6A}}{L_{6A}} = \dfrac{W_{6B}}{L_{6B}}\cdot\dfrac{I_8}{I_6}\left(\dfrac{C_c + C_L}{C_c}\right)^2$ ($I_6 = I_7$).

(2) Design:
- $W_{6B}/L_{6B} = 94 \times \dfrac{95}{15} \times \left(\dfrac{3}{13}\right)^2 = 31.7 \approx 32$.
- M8 = M9: same $V_{GS}$ as M5 (4.5 at 30 µA) → $S_8 = S_9 = 4.5 \times 15/30 = 2.25$; M10 = M11 equal (any convenient size, e.g. comparable to M6B's current density), so $I_{11} = I_{10} = I_9 = I_8 = 15$ µA.
- $R_z = 1/g_{m6B} = 1/\sqrt{2(50\ \mu)(31.7)(15\ \mu)} = 4.59$ kΩ ($V_{SG6B}$ ≈ 0.84 V).
- $g_{m6A} = \sqrt{2(50\ \mu)(94)(95\ \mu)} = 945\ \mu$S: $p_2 = -g_{m6A}/C_L = -94.5\times10^6$ rad/s (−15.0 MHz); $z_1 = -1/[3\ \mathrm p\,(4.59\ \mathrm k - 1.06\ \mathrm k)] = -94.5\times10^6$ rad/s (−15.0 MHz) — the zero cancels $p_2$ (with $W_{6B}/L_{6B}$ rounded to 32: $R_z$ = 4.56 kΩ, $z_1$ = −15.1 MHz).
- Because $g_{m6B}$ and $g_{m6A}$ are both p-channel square-law transconductances, their ratio — and hence the cancellation — tracks process and temperature.

## Grading notes

Two parts. +2: correct sizing law ($W_{6B}/L_{6B} \propto (W_{6A}/L_{6A})(I_6/I_8)[C_c/(C_c + C_L)]^2$ or the equivalent inverse form) and the design $W_{6B}/L_{6B}$ ≈ 32, $R_z$ ≈ 4.6 kΩ, $z_1 \approx p_2 \approx -9.45\times10^7$ rad/s (≈ −15 MHz), M8/M9 consistent with 15 µA. +1: part (1) right, part (2) with one slip, or (2) right with (1) only stated. 0: one part right. −2 (asserted as fact): the condition $R_z = 1/g_{m6A}$ (zero to infinity) used as the cancellation condition, the ratio not squared, or the zero placed in the RHP.
