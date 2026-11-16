# Golden Solution - R219

## Reference answer

Yes. Both sources sit at the same node P and both bulks at ground, so both devices always have the same $V_{SB}$; body effect acts identically on the two sides.
- Small signal: $\Delta I_1 = g_m(\Delta V_{in1} - \Delta V_P) - g_{mb}\Delta V_P$, $\Delta I_2 = g_m(\Delta V_{in2} - \Delta V_P) - g_{mb}\Delta V_P$, and the tail forces $\Delta I_1 + \Delta I_2 = 0$: $g_m(\Delta V_{in1} + \Delta V_{in2}) = 2(g_m + g_{mb})\Delta V_P$. For $\Delta V_{in1} = -\Delta V_{in2}$, $\Delta V_P = 0$.
- Thevenin view: each half looks like $\dfrac{g_m}{g_m + g_{mb}}V_{in}$ behind $\dfrac{1}{g_m + g_{mb}}$; equal resistances and opposite sources leave P unchanged.
- Body effect would matter only for a CM input ($\Delta V_P = g_mv_{CM}/(g_m + g_{mb})$) or if the two devices had different body-effect coefficients.

## Grading notes

+2: "yes" with a correct reason (identical $V_{SB}$ for both devices; small-signal equations or Thevenin equivalents showing $\Delta V_P = 0$). +1: "yes" by a symmetry argument without addressing why $g_{mb}$ does not break it. 0: "yes" without reasoning, or a hedged answer with partly correct analysis. -2 (asserted as fact): "no, body effect makes P move for differential inputs".
