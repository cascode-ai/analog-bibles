# Golden Solution - A101

## Reference answer

$r_{out} = R \,\Big\|\, \dfrac{R_1 + R_2 + R_1R_2/r_\pi}{1 + g_mR_1(1 + 1/\beta)} \;\approx\; \dfrac{R_1 + R_2}{1 + g_mR_1} \approx \dfrac{1}{g_m}\left(1 + \dfrac{R_2}{R_1}\right) = \dfrac{1}{g_m}\dfrac{V_{REF}}{V_{EB}}$

- Apply $v_{out}$ (with $V_{DD}$ at ac ground). Let $v_{eb}$ be the emitter–base signal. At the base node: $v_{eb}/R_1 + v_{eb}/r_\pi = (v_{out} - v_{eb})/R_2$, so $v_{eb} = v_{out}/[R_2(1/R_1 + 1/r_\pi + 1/R_2)]$.
- Current drawn from the output: $v_{eb}/R_1 + g_m(1 + 1/\beta)v_{eb}$ (divider current plus emitter current), plus $v_{out}/R$.
- For large β ($r_\pi \gg R_2$): $v_{eb} = v_{out}R_1/(R_1 + R_2)$ and the transistor part is $(R_1 + R_2)/(1 + g_mR_1) \approx (1/g_m)(1 + R_2/R_1)$, the "$V_{BE}$ multiplier" value: $1/g_m$ multiplied by $V_{REF}/V_{EB}$. $R$ (usually much larger) is in parallel.
- With a small β, $r_\pi$ loads the divider and raises $r_{out}$ (the factor $R_1R_2/r_\pi$).

## Grading notes

+2: an expression equivalent to $[(R_1 + R_2)/(1 + g_mR_1)] \| R$ (with or without the $r_\pi$ correction), i.e. ≈ $(1/g_m)(1 + R_2/R_1)$. +1: the multiplier form right but $R$ omitted, or a minor slip in the $r_\pi$ term. 0: $r_{out} \approx 1/g_m$ (missing the $1 + R_2/R_1$ factor), or a correct method left unfinished. −2 (asserted as fact): $r_{out} \approx R_1 + R_2$, $r_{out} \approx R$, $r_{out} \approx r_\pi$, or the divider ratio inverted ($1 + R_1/R_2$).
