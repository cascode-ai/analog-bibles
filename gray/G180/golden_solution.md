# Golden Solution - G180

## Reference answer

The MOS version's transconductance varies because MOS $g_m$ grows only as the square root of the bias current. A constant total current then does not give a constant total $g_m$: in the transition region, where the current is shared, the stage transconductance rises by up to about √2 (≈ 41 %).

- Bipolar: each pair's $G_m = I_{pair}/(2V_T)$ is proportional to its tail current. With $I_p + I_n = I$ constant, the total $G_m = (I_p + I_n)/(2V_T) = I/(2V_T)$ for any split, so it is independent of $V_{IC}$.
- MOS in strong inversion: a pair's $G_m = \sqrt{k'(W/L)I_{pair}}$. With the pairs sized for equal $k'(W/L)$, $G_{m,tot} = \sqrt{k'(W/L)}\,(\sqrt{I_p} + \sqrt{I_n})$ with $I_p + I_n = I$:
  - one pair active ($V_{IC}$ far from the transition): $\sqrt{k'(W/L)I}$;
  - equal split (middle of the transition): $2\sqrt{k'(W/L)I/2} = \sqrt2\sqrt{k'(W/L)I}$.
- The split of the current between the pairs changes with $V_{IC}$, so $G_m$ (and the op amp's gain and unity-gain frequency) varies with the common-mode input. If the n and p pairs do not have equal $k'W/L$ (e.g. because $\mu_n \neq \mu_p$), $G_m$ also differs between the two ends of the range. The constant-$G_m$ property relied on the linear $g_m$–$I$ relation (or on weak inversion, where MOS $g_m \propto I$ as well).

## Grading notes

+2: explanation that MOS strong-inversion $g_m \propto \sqrt{I}$ (not $\propto I$), so with a constant total current the sum $\sqrt{I_p} + \sqrt{I_n}$ depends on how the current is split, which changes with $V_{IC}$; the bipolar case is constant because $g_m \propto I$. Saying that $G_m$ peaks (≈ √2 higher) when both pairs conduct equally is a plus but not required, since the question asks only why. +1: $g_m \propto \sqrt{I}$ stated without linking it to the split of a constant total current, or only the mobility (n vs p) mismatch mentioned together with a vague √I remark. 0: only "the n and p devices have different mobilities" (a valid but secondary effect) with no √I argument. -2 (asserted as fact): claims that MOS $g_m$ is proportional to current, that the transconductance decreases (rather than increases) in the transition region for matched pairs, or that the variation is due to the body effect alone.
