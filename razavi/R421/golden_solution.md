# Golden Solution - R421

## Reference answer

Triode ($V_{DS} < V_{OD}$), from $I_D = \mu C_{ox}\frac{W}{L}\left[V_{OD}V_{DS} - \tfrac12 V_{DS}^2\right]$:
- $g_m = \partial I_D/\partial V_{GS} = \mu C_{ox}\frac{W}{L}V_{DS}$
- $r_O = (\partial I_D/\partial V_{DS})^{-1} = \dfrac{1}{\mu C_{ox}\frac{W}{L}(V_{GS} - V_{TH} - V_{DS})}$
- $g_m r_O = \dfrac{V_{DS}}{V_{OD} - V_{DS}}$

Saturation ($V_{DS} \ge V_{OD}$), from $I_D = \tfrac12\mu C_{ox}\frac{W}{L}V_{OD}^2(1+\lambda V_{DS})$: $g_m = \mu C_{ox}\frac{W}{L}V_{OD}(1+\lambda V_{DS}) \approx 2I_D/V_{OD}$, $r_O \approx 1/(\lambda I_D)$ with $I_D \approx \tfrac12\mu C_{ox}\frac{W}{L}V_{OD}^2$, and $g_m r_O \approx 2/(\lambda V_{OD})$ (times $1+\lambda V_{DS}$ if kept).

Plots versus $V_{DS}$:
- $g_m$: rises linearly from 0 at $V_{DS} = 0$ to $\mu C_{ox}(W/L)V_{OD}$ at $V_{DS} = V_{OD}$, then stays nearly constant (slight rise with $1+\lambda V_{DS}$).
- $r_O$: starts at the on-resistance $1/[\mu C_{ox}(W/L)V_{OD}]$ at $V_{DS} = 0$ and rises as $1/(V_{OD} - V_{DS})$ as the edge of saturation is approached; in saturation it is roughly constant at $1/(\lambda I_D)$, much larger. (The pure triode formula diverges at $V_{DS} = V_{OD}$; if λ is also kept in the triode equation, $r_O$ joins the saturation value continuously.)
- $g_m r_O$: zero at $V_{DS} = 0$, small through most of the triode region (≈ $V_{DS}/V_{OD}$ for small $V_{DS}$), climbing steeply in the last tens of millivolts before $V_{DS} = V_{OD}$, and then flat at ≈ $2/(\lambda V_{OD})$ in saturation. Example: $V_{OD} = 0.5$ V, λ = 0.1 V⁻¹: $g_m r_O$ = 9 at 50 mV inside the triode region versus 40 in saturation. The intrinsic gain collapses as soon as the device enters the triode region.

## Grading notes

+2: triode $g_m = \mu C_{ox}(W/L)V_{DS}$ and $r_O = 1/[\mu C_{ox}(W/L)(V_{GS}-V_{TH}-V_{DS})]$ (or the equivalent with λ kept in the triode equation), saturation values ($g_m \approx \mu C_{ox}(W/L)V_{OD}$, $r_O \approx 1/(\lambda I_D)$, $g_m r_O \approx 2/(\lambda V_{OD})$), and plots with the right shapes: $g_m$ linear then flat; $r_O$ rising from $R_{on}$ toward the saturation value; $g_m r_O$ small in triode and rising steeply to its plateau at the edge of saturation. +1: expressions right with one plot feature missing or vague (e.g., the behaviour of $r_O$ at the boundary not addressed). 0: the triode expressions right but the plots or the saturation part largely missing, or plots right with a slip in one expression. -2 (asserted as fact): $g_m$ in triode proportional to $V_{GS}-V_{TH}$ or constant, triode $r_O$ given as $1/(\lambda I_D)$, $r_O$ or $g_m r_O$ drawn as decreasing toward the edge of saturation, or $g_m r_O$ claimed to be larger in triode than in saturation.
