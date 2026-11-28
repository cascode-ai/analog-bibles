# Golden Solution - R078

## Reference answer

With $V_{SB}=0$, $V_{TH}=V_{TH0}=0.7\ \mathrm V$. The overdrive $V_{ov}=V_{GS}-V_{TH}=0.5\ \mathrm V$ sets the triode/saturation boundary at $V_{DS}=V_{ov}$.

The leading-order gain is

$$A_0(V_{DS})=
\begin{cases}
V_{DS}/(V_{ov}-V_{DS}), & 0\le V_{DS}<V_{ov},\\
2/(\lambda V_{ov})=40, & V_{ov}\le V_{DS}\le 3\ \mathrm V.
\end{cases}$$

The dashed curve omits channel-length modulation in triode and uses the leading-order saturation approximation. Its triode branch diverges as $V_{DS}$ approaches $V_{ov}$ from below. The solid curve applies the same factor $(1+\lambda V_{DS})$ to both current branches. It starts at zero, joins continuously at 42 V/V, and reaches 52 V/V at 3 V.

![Intrinsic gain g_m r_ds versus V_DS](/q/R078/solution-intrinsic-gain.svg)

## Grading notes

- +2 for a boundary at 0.5 V, small and rising triode values consistent with $V_{DS}/(V_{ov}-V_{DS})$ or an equivalent model, and a saturation gain around 40–52 depending on the model convention.
- +1 for the correct saturation gain and boundary with only a vague description of triode.
- 0 for getting only one region right.
- −2 for asserting a large gain in triode and a small gain in saturation, choosing 1.2 V or 0.7 V as the boundary, or making a saturation formula error that yields a value such as 20 or 80.
