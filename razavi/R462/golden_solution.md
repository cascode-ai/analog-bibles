# Golden Solution - R462

## Reference answer

$\overline{V^2_{n,in}} \approx 8kT\cdot\tfrac23\left(\dfrac{1}{g_{m1}} + \dfrac{g_{m3}}{g_{m1}^2}\right) \approx 1.9\times10^{-17}\ \mathrm{V^2/Hz}$, i.e. ≈ 4.4 nV/√Hz; the second stage adds < 0.1%.

- First stage: $g_{m1} = 2.81$ mS → $1/g_{m1} = 356\ \Omega$; $g_{m3} = 2(0.5\ \mathrm{mA})/0.25\ \mathrm{V} = 4$ mS → $g_{m3}/g_{m1}^2 = 506\ \Omega$. $8kT\cdot\tfrac23 = 2.21\times10^{-20}$; × 862 Ω → $1.90\times10^{-17}\ \mathrm{V^2/Hz}$ → 4.36 nV/√Hz. The tail $M_7$ contributes only common-mode noise.
- Second stage: noise of $M_5$ and $M_6$ referred to the gate of $M_5$, $4kT\cdot\tfrac23(g_{m5}+g_{m6})/g_{m5}^2$ with $g_{m5} = g_{m6} = 8$ mS, is $2.8\times10^{-18}\ \mathrm{V^2/Hz}$; divided by $A_1^2 = 18.75^2$ it becomes $7.9\times10^{-21}$, negligible.
- The NMOS load $M_3$/$M_4$ contributes more than the input pair because $g_{m3} > g_{m1}$ (a larger overdrive for $M_3$/$M_4$ would reduce it).

## Grading notes

+2: the first-stage expression $8kT\gamma(1/g_{m1} + g_{m3}/g_{m1}^2)$ with $g_{m3} = 4$ mS, a value of 4.1–4.6 nV/√Hz (1.7–2.1 × 10⁻¹⁷ V²/Hz), and the second stage argued negligible. +1: correct expression with a slip, or the second stage omitted without comment. 0: factor-of-2 error or the load term weighted incorrectly but the input-pair term right. -2 (asserted as fact): the second stage claimed to dominate, the load term weighted by $1/g_{m3}$, or the tail $M_7$ counted as a differential contributor.
