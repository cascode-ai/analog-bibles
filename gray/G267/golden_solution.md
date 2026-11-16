# Golden Solution - G267

## Reference answer

The overall gain changes by only about +0.05% (its magnitude rises slightly, −25.677 → −25.690); the output resistance rises by only a few percent (exact small-signal: ≈ +2.3%, 14.3 → 14.6 MΩ).

- With $I_{C1}$ up 20%, $g_{m1}$ rises 20% and $r_{\pi1}$ falls, so the input node resistance $(R_E+R_F)\|r_{\pi1}$ drops from 2.6 kΩ to 2.36 kΩ; also $r_{o1}$ falls slightly. Net $a$ rises ≈ 7.5% ($T$: 133 → 143).
- Gain: $\Delta A/A \approx 7.5\%/(1+T) \approx 0.056\%$.
- Output resistance: a first-order two-port argument ($Z_{out} = (1+T)z_{oa}$) would predict ≈ +7.5% (≈ +8% including the small change of $z_{oa}$). But the output resistance of this pair is already near the ceiling set by the base current of $Q_2$ (which the feedback does not sense, limit $(\beta+1)r_{o2}$), so the exact small-signal result rises only ≈ 2.3%.

## Grading notes

+2: gain change ≈ +0.05% (0.03–0.08%, magnitude increasing) with the $1/(1+T)$ argument, and output resistance increasing by a few percent with a sound argument (exact ≈ +2%, or the $(1+T)$ estimate ≈ +7–8% accompanied by a remark that the base-current/(β+1)r_o limit makes the real increase smaller). Exact small-signal results for both quantities (gain ≈ +0.05%, output resistance ≈ +2–3%, 14.3 → 14.6 MΩ) earn +2 even without the $(\beta+1)r_{o2}$ remark. +1: gain change right and the output resistance said to increase ≈ 7–8% in proportion to $1+T$ without qualification. 0: only one of the two quantities right. This includes the common shortcut in which $a$ and $T$ rise by the full 20% with $g_{m1}$ (ignoring that $r_{\pi1}$, which here equals $R_F + R_E = 5.2$ kΩ at the input node, falls at the same time), giving a gain change of ≈ 0.12–0.15% and an output resistance ≈ +20% (16–17 MΩ): the gain part is right in substance (a change far below 1%, set by $1/(1+T)$), but the output-resistance change is about ten times too large. −2 (asserted as fact): gain changes by ~20% or ~7%, or the output resistance decreases.
