# Golden Solution - A083

## Reference answer

$r_{out} \approx 19.2$ MΩ.

- $g_m = \sqrt{2K'(W/L)I_D} = \sqrt{2\times110\ \mu\times2\times10\ \mu} = 66.3\ \mu\mathrm{A/V}$; $r_{ds} \approx 1/(\lambda I_D) = 1/(0.04\times10\ \mu) = 2.5$ MΩ; $r = 100$ kΩ.
- $r_{out} = r + r_{ds} + g_m r_{ds} r = 0.1 + 2.5 + 66.3\ \mu\times2.5\ \mathrm{M}\times100\ \mathrm{k} = 0.1 + 2.5 + 16.6 = 19.2$ MΩ ($\approx g_m r_{ds} r$ = 16.6 MΩ to first order).

## Grading notes

+2: 18–20 MΩ from $r + r_{ds}(1 + g_m r)$ (the approximation $g_m r_{ds} r$ ≈ 16.6 MΩ is fine if stated as approximate); including $(1 + \lambda V_{DS})$ in $r_{ds}$ with a stated $V_{DS}$ (up to ≈ 22 MΩ) is accepted. +1: correct expression with an arithmetic slip, or the body effect included ($g_{mbs}$ with $V_{SB}$ = 1 V, ≈ 21.7 MΩ) although the question excludes it. 0: correct expression with no numerical value. −2 (asserted as fact): $r_{out} = r_{ds}$ (2.5 MΩ), $r + r_{ds}$, $g_m r$ alone, or the degeneration said to reduce the output resistance.
