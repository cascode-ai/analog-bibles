# Golden Solution - G306

## Reference answer

(Positions given as $s/2\pi$.)
- $f = 10^{-3}$ ($T_0 = 100$): poles at −10.3 kHz and −98.1 kHz (still real); zero at −120 kHz.
- $f = 1$ ($T_0 = 10^5$): poles at −120.3 kHz and −8.31 MHz; zero at −120 kHz.

Root locus: poles of $T$ at −100 Hz and −100 kHz, zero at −120 kHz. Real-axis segments: between −100 Hz and −100 kHz, and to the left of −120 kHz. The two poles move toward each other and break away at −71.0 kHz ($T_0 = 504$, $f = 5.0 \times 10^{-3}$); the complex branches follow a circle centred on the zero (−120 kHz) with radius $\sqrt{(120 - 0.1)(120 - 100)}$ = 49.0 kHz and rejoin the real axis at −169.0 kHz ($T_0 = 2854$, $f = 0.0285$). From there one branch moves right to the zero at −120 kHz and the other left to −∞. The poles are complex only for $5.0 \times 10^{-3} < f < 0.0285$.

Closed-loop poles from $(1 + s/0.1)(1 + s/100) + T_0(1 + s/120) = 0$ (kHz units):
- $T_0 = 100$: $s^2 + 108.4s + 1010 = 0$ → −10.3, −98.1 kHz.
- $T_0 = 10^5$: $s^2 + 8433s + 1.0 \times 10^6 = 0$ → −120.3 kHz, −8.31 MHz.

## Grading notes

+2: correct locus with break-away ≈ −71 kHz and break-in ≈ −169 kHz joined by a complex-conjugate section that encircles the zero (this section is the circle centred on the zero with radius ≈ 49 kHz; giving both break points correctly is enough, the word "circle" is not required), and both pole sets within ±3% with the zero at −120 kHz. +1: pole values right with the locus shape only qualitatively right (break points missing or wrong), or locus right with one pole set off by a slip. 0: correct pole values but a locus that stays real throughout (missing the complex section), or vice versa. −2 (asserted as fact): complex poles claimed at $f = 10^{-3}$ or $f = 1$, the zero claimed to change with feedback, or a locus identical to the case with the zero below the second pole.
