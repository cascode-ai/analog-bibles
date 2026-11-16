# Golden Solution - R123

## Reference answer

$V_Y$ starts at 0 and rises monotonically, fast at first and then ever more slowly, toward $V_Y(\infty) = \min(V_{b1} - V_{TH1},\ V_{b2} - V_{TH2})$; $V_X$ rises toward $V_{b1} - V_{TH1}$. $C_1$ only partially discharges.

- $C_1$ sits between $V_{DD}$ (+) and $Y$ (−) with $V_{DD}$ across it, so $V_Y(0) = 0$. Current flows $V_{DD} \to M_1 \to M_2 \to Y$ and charges node $Y$ upward: $C_1\,dV_Y/dt = I$. It stops only when one transistor cuts off. Body effect: $V_{TH1}$ at $V_{SB} = V_X$, $V_{TH2}$ at $V_{SB} = V_Y$.
- Case $V_{b2} - V_{TH2} < V_{b1} - V_{TH1}$: $M_2$ is the limiting device, saturated and acting as a source follower charging $C_1$: $I = \tfrac12\beta_2(V_{b2} - V_Y - V_{TH2})^2$. $V_Y$ rises with initial slope $I(0)/C_1$ and approaches $V_{b2} - V_{TH2}$ asymptotically (square-law tail ∝ 1/t; ignoring the change of $V_{TH2}$, $V_Y(t) = V_\infty[1 - 1/(1 + \beta_2V_\infty t/(2C_1))]$, $V_\infty = V_{b2} - V_{TH2}$). $M_1$ (drain at $V_{DD}$) is a saturated follower: $V_X = V_{b1} - V_{TH1} - \sqrt{2I/\beta_1}$, rising toward $V_{b1} - V_{TH1}$ as $I \to 0$ (if $X$ starts below $V_{b2} - V_{TH2}$, $M_2$ is briefly in triode at the start).
- Case $V_{b1} - V_{TH1} < V_{b2} - V_{TH2}$: $M_1$ limits (saturated follower); $M_2$ is in triode with a small $V_{DS}$, so $V_X$ is just above $V_Y$ and both rise together toward $V_{b1} - V_{TH1}$.
- In both cases: monotonic, saturating rises; final $C_1$ voltage $V_{DD} - V_Y(\infty)$ (subthreshold conduction would continue very slowly).

## Grading notes

+2: $V_Y(0) = 0$ and $V_Y$ rising (current charging node $Y$), slowing down and settling at the lower of $V_{b1} - V_{TH1}$ and $V_{b2} - V_{TH2}$ (both cases or a clearly stated assumption), $V_X$ rising toward $V_{b1} - V_{TH1}$ (equal to $V_Y$ in the $M_1$-limited case). +1: correct behaviour for one case only without stating the condition, or body effect ignored. 0: correct initial value and direction but wrong final value. -2 (asserted as fact): $V_Y$ starting at $V_{DD}$ or decreasing, $C_1$ fully discharging to zero, or $Y$ read as grounded.
