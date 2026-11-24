# Golden Solution - R013

## Reference answer

Use the square-law model ($\lambda=0$), an ideal sink, and negligible junction currents. Let $\beta=\mu_nC_{ox}W/L$, $V_{ov}=2\,\mathrm V-V_S-V_{TH}(V_S)$, with the stated body-effect law and $V_{SB}=V_S$.

$$I_X=I_1-\frac{V_{DS}}{R_1},\qquad V_{DS}=V_X-V_S.$$

| Region | Current and intrinsic transconductance |
|---|---|
| Triode: $0\le V_{DS}<V_{ov}$ | $I_X=\beta(V_{ov}V_{DS}-V_{DS}^2/2)$ decreases; $g_m=\beta V_{DS}$ rises. |
| Saturation: $V_{DS}\ge V_{ov}>0$ | $I_X=\beta V_{ov}^2/2$ decreases; $g_m=\sqrt{2\beta I_X}$ falls. |
| Cutoff: $V_{ov}\le0$ | $I_X=g_m=0$. |

At $V_X=0$ the channel-only model gives triode operation and $0<I_X<I_1$, not necessarily $I_X\approx I_1$. The $g_m$ maximum occurs at $V_X=2\,\mathrm V-V_{TH}(V_S)$; its value depends on $R_1,I_1,\beta$.

$$2\,\mathrm V-V_{S,off}=V_{TH}(V_{S,off}),\quad V_{X,off}=1.0918\,\mathrm V+I_1R_1.$$

Cutoff is reached only if this is at most 3 V. $I_X$ reaches zero with zero slope. At low input $V_S<0$: junction current and sink compliance require verification. Dashed curves are conditional continuations; plot parameters are illustrative.

![Model curves and validity limits](/q/R013/solution-r013.svg)

## Grading notes

+2: Correct drain–source shunt KCL, parameter-dependent initial current, triode-to-saturation boundary, decreasing current, rising then falling intrinsic transconductance, and conditional cutoff within 0–3 V. State the model and low-input validity limit. Numerical plot parameters are not mandatory data; a clearly identified no-body-effect approximation gives $V_{S,off}=1.3\,\mathrm V$. +1: Correct current and region reasoning but incomplete transconductance or validity discussion. 0: Substantial region or source-voltage error despite a decreasing-current trend. -2 (asserted as fact): increasing current, $I_X=I_1$ throughout, or misidentified circuit connections. Do not require a unique physical curve in the forward-biased interval without junction and sink data.
