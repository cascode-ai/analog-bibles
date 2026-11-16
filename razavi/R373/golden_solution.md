# Golden Solution - R373

## Reference answer

Circuit of [Fig. 1]:
$$\overline{V_{n,in}^2} = 8kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{(1+g_{m1}R_S)^2}{g_{m1}^2R_1}\right] + \frac{2K_N}{C_{ox}(WL)_1f}$$
Circuit of [Fig. 2]:
$$\overline{V_{n,in}^2} = 8kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{(1+g_{m1}R_S)^2}{g_{m1}^2R_1}\right] + 8kT\gamma g_{m3}R_S^2 + \frac{2K_N}{C_{ox}f}\left[\frac{1}{(WL)_1} + \frac{g_{m3}^2R_S^2}{(WL)_3}\right]$$
[Fig. 2] is noisier by the current-source terms; [Fig. 1] is quieter, while [Fig. 2] avoids the dc drop across the degeneration resistors (more headroom).

- Both have the same differential transconductance $g_{m1}/(1+g_{m1}R_S)$ (the midpoint of $2R_S$ is a virtual ground for differential signals), so the input pair, $R_S$ (two $R_S$ or one $2R_S$: same $8kTR_S$) and $R_1$ contribute identically: twice the half-circuit result of a degenerated CS stage.
- [Fig. 1]: the tail noise current splits equally between the two halves (common mode) and cancels in the differential output.
- [Fig. 2]: KCL gives $I_{D1} - I_{D2} = (I_{n3} - I_{n4})\dfrac{g_{m1}R_S}{1+g_{m1}R_S}$ for the current-source noise, which refers to the input as $(I_{n3} - I_{n4})R_S$: thermal $2\times4kT\gamma g_{m3}R_S^2$, flicker $2g_{m3}^2R_S^2K_N/(C_{ox}(WL)_3f)$.
- Trade-off: [Fig. 1] has $I_{D1}R_S$ of dc drop in each $R_S$; [Fig. 2] has none but adds noise proportional to $g_{m3}R_S^2$ (keep $g_{m3}$ small, i.e., large overdrive, to reduce it).

## Grading notes

+2: identical common part for both circuits (factor 2 for the pair, $R_S$ term, $R_1$ term with $(1+g_{m1}R_S)^2$), tail noise cancelling in [Fig. 1], the extra $8kT\gamma g_{m3}R_S^2$ (and the corresponding flicker term) in [Fig. 2], and the correct noise comparison ([Fig. 1] quieter). Mentioning that [Fig. 2] avoids the dc drop across $R_S$ (better headroom) is welcome but not required, since the question asks only to compare the noise results. +1: correct conclusion with a slip in one coefficient (e.g., the current-source term with $R_S^2/4$ or $4R_S^2$), or flicker part omitted for one circuit. 0: one circuit fully right and the other wrong, or both expressions right with no comparison. -2 (asserted as fact): the tail source of [Fig. 1] said to add differential noise, the current sources of [Fig. 2] said to cancel, [Fig. 2] claimed quieter, or the two-$R_S$ vs $2R_S$ noise claimed to differ.
