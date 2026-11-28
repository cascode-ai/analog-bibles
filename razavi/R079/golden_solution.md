# Golden Solution - R079

## Reference answer

The reverse body bias is $V_{SB}=V_S-V_B=1\ \mathrm V$. The body-effect equation gives

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right)
\approx 0.893375\ \mathrm V.$$

Thus $V_{ov}=V_{GS}-V_{TH}\approx 0.306625\ \mathrm V$, and the boundary occurs at $V_{DS}=V_{ov}$.

The leading-order gain is

$$A_0(V_{DS})=
\begin{cases}
V_{DS}/(V_{ov}-V_{DS}), & 0\le V_{DS}<V_{ov},\\
2/(\lambda V_{ov})=65.2, & V_{ov}\le V_{DS}\le 3\ \mathrm V.
\end{cases}$$

The dashed curve omits channel-length modulation in triode and uses the leading-order saturation approximation. Its triode branch diverges as $V_{DS}$ approaches $V_{ov}$ from below. The solid curve applies the same factor $(1+\lambda V_{DS})$ to both current branches. It starts at zero, joins continuously at 67.2 V/V, and reaches 84.8 V/V at 3 V. The leading-order saturation gain increases from 40 V/V at zero bulk bias to 65.2 V/V.

![Intrinsic gain g_m r_ds versus V_DS](/q/R079/solution-intrinsic-gain.svg)

## Grading notes

- +2 for $V_{TH}\approx 0.89\ \mathrm V$ (±0.02 V), a boundary near 0.31 V, small and rising triode values, and a saturation gain above the zero-bulk-bias case (about 65–85 depending on the model convention).
- +1 for including the body effect with only a qualitative description of one region.
- 0 for otherwise sound analysis using the zero-bulk-bias curve.
- −2 for asserting that negative bulk bias lowers $V_{TH}$, deriving a lower saturation gain than for zero bulk bias by a formula error, or adding $g_{mb}$ to $g_m$ in a way that changes the result.
