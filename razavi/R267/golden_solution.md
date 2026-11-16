# Golden Solution - R267

## Reference answer

At $t = 0^+$, $M_1$ (source at 0 V) copies $I_{REF}$: $V_X = V_b - V_{GS3}(I_{REF})$ and $V_Y = V_{DD} - R_1I_{REF}$. The current then charges $C_1$, $M_1$'s source rises toward $V_{GS2} - V_{TH1}$, and its current dies out (≈ $I_{REF}/(1+t/\tau)^2$, $\tau = 2C_1/\sqrt{2\beta I_{REF}}$, ignoring body effect). Consequently $V_Y$ rises back toward $V_{DD}$ and $V_X$ rises toward $V_b - V_{TH3}(V_X)$, both quickly at first and then slowly.

- $V_{GS3} = V_{TH3}(V_{SB} = V_X) + \sqrt{2I_{D}/\beta}$ shrinks to $V_{TH3}$ as the current vanishes, so $V_X$ increases by slightly less than $\sqrt{2I_{REF}/\beta}$: $\Delta V_X = \sqrt{2I_{REF}/\beta} - [V_{TH3}(V_{X,\infty}) - V_{TH3}(V_{X,0})]$, since the higher $V_X$ raises $V_{TH3}$ through body effect.
- The final source voltage of $M_1$ is $V_{GS2} - V_{TH1}(V_{S1})$, a little below the overdrive of $M_2$ because of body effect.

## Grading notes

+2: initial values $V_X = V_b - V_{GS3}(I_{REF})$, $V_Y = V_{DD} - R_1I_{REF}$; $C_1$ charged by $M_1$'s decaying current; $V_Y$ rising to $V_{DD}$ and $V_X$ rising to $V_b - V_{TH3}$. +1: correct trends but one final value missing. 0: $V_Y$ right but $V_X$ claimed constant. -2 (asserted as fact): $V_Y$ falling with time, $V_X$ falling to 0, or the circuit claimed to keep $I_{REF}$ flowing indefinitely.
