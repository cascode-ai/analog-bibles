# Golden Solution - R645

## Reference answer

$\dfrac{f_{max}}{f_{min}} = \sqrt{\dfrac{C_0 + C_1}{0.62\,C_0 + C_1}}$, so the tuning range is $\sqrt{\dfrac{1 + C_1/C_0}{0.62 + C_1/C_0}} - 1$: 27% for $C_1 = 0$, 19.6% for $C_1/C_0 = 0.25$, 15.5% for 0.5, 11.0% for 1, 6.9% for 2 (≈ $0.19\,C_0/C_1$ for $C_1 \gg C_0$). The fixed capacitance always shrinks the range.

Derivation:
- $C_{var}(2\ \mathrm{V}) = C_0/(1 + 2/0.7)^{0.35} = C_0/3.857^{0.35} = 0.62\,C_0$ (0.624).
- $f_{min} = 1/[2\pi\sqrt{L(C_0 + C_1)}]$ at $V_R = 0$; $f_{max} = 1/[2\pi\sqrt{L(0.62C_0 + C_1)}]$ at $V_R = 2$ V.
- Ratio as above; for $C_1 = 0$ it is $1/\sqrt{0.62} = 1.27$, the 27% obtained without the inductor capacitance.

## Grading notes

+2: correct expression (ratio or percentage) with $C_{var}(2\ \mathrm{V}) \approx 0.62C_0$ (±0.01) and $C_1$ added at both extremes; any sample values consistent with it. Tuning range expressed as $(f_{max} - f_{min})/f_{min}$ or relative to the center frequency, if stated, both fine. +1: correct method with a minor slip, or correct numerical examples without the general expression. 0: only the $C_1 = 0$ result (27%) with $C_1$ not handled. -2 (asserted as fact): $C_1$ placed in series or added at only one extreme, the capacitance ratio used without the square root (e.g., 61%), $m = 0.5$ substituted, or a claim that $C_1$ widens the range.
