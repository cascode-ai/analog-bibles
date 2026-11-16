# Golden Solution - R088

## Reference answer

A non-inverting (common-gate) characteristic: $V_{out}$ rises monotonically from a low value at $V_{in} = 0$ to $V_{DD}$ at $V_{in} = V_{DD}$; $M_1$ goes from triode (if strongly driven) to saturation to cutoff, and above cutoff the curve is the straight line of the $R_D$–$R_F$ divider.

- $M_1$ (gate $V_b$, source = $V_{in}$, drain = $V_{out}$) is off for $V_{in} \ge V_{in,off}$, where $V_b - V_{in,off} = V_{TH}(V_{in,off})$, $V_{TH}(V) = 0.7 + 0.45(\sqrt{0.9+V} - \sqrt{0.9})$ (body effect, $V_{SB} = V_{in}$; cutoff slightly below $V_b - 0.7$).
- Off: $V_{out} = V_{in} + (V_{DD} - V_{in})\dfrac{R_F}{R_D+R_F} = \dfrac{R_FV_{DD} + R_DV_{in}}{R_D+R_F}$, a straight line of slope $R_D/(R_D+R_F)$ ending at $(V_{DD}, V_{DD})$.
- On: $M_1$ sinks current from the output node into the input source, so $V_{out}$ lies below that line: $(V_{DD} - V_{out})/R_D = (V_{out} - V_{in})/R_F + I_{D1}$, with $V_{in} \le V_{out}$.
- Saturation for $V_{out} \ge V_b - V_{TH}(V_{in})$: $I_{D1} = \tfrac12\beta(V_b - V_{in} - V_{TH})^2$; slope $dV_{out}/dV_{in} = (g_m + g_{mb} + 1/R_F)(R_D\|R_F)$, larger than $R_D/(R_D+R_F)$ and falling to it at cutoff (the curve joins the line tangentially).
- Triode for $V_{out} < V_b - V_{TH}(V_{in})$ — typically near $V_{in} = 0$ if β is large: $V_{out}(0)$ from $(V_{DD} - V_{out})/R_D = V_{out}/R_F + \beta[(V_b - 0.7)V_{out} - V_{out}^2/2]$; the slope is small there and grows toward the triode/saturation boundary, where the curve is steepest.
- Transition points: $V_{out} = V_b - V_{TH}$ (triode → saturation), $V_{in} = V_{in,off}$ (cutoff, $V_{out} = (R_FV_{DD} + R_DV_{in,off})/(R_D+R_F)$), end point $(V_{DD}, V_{DD})$.

## Grading notes

+2: monotonic rise from a low $V_{out}(0)$ to $V_{DD}$, cutoff at $V_{in} \approx V_b - V_{TH}$ (body effect from $V_{SB} = V_{in}$ mentioned or included), the straight divider line of slope $R_D/(R_D+R_F)$ above cutoff, and the triode/saturation boundary at $V_{out} = V_b - V_{TH}$. +1: shape and cutoff right but the divider line or the triode region missing, or body effect ignored. 0: rising curve but above cutoff $V_{out}$ claimed equal to $V_{DD}$ (ignoring $R_F$), or regions mislabelled while the trend is right. -2 (asserted as fact): inverting characteristic, $V_{in}$ treated as a gate input, or $R_F$ read as connected to ground or to the gate.
