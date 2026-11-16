# Golden Solution - G142

## Reference answer

$V_o^- = -V_{SS} + V_{ov6} + |V_{gs2}|$, where $V_{ov6} = V_{GS6} - V_{t6} = \sqrt{2|I_{D3}|/(k_n'(W/L)_6)}$ and $|V_{gs2}| = |V_{t2}| + |V_{ov2}|$ is the source–gate voltage of $M_2$ at the current it sinks at that output.
- For $V_o < 0$, $M_2$ acts as a source follower and $M_1$ is (nearly) off: $V_o = V_{g2} + |V_{gs2}|$, and the gate of $M_2$ is the drain of $M_6$.
- $V_{g2}$ falls as $V_i$ rises, but $M_6$ must stay in the active region to act as the driver: $V_{DS6} \ge V_{ov6}$. Since $M_3$, $M_4$, $M_5$ and $M_6$ are in series and the gates draw no current, $M_6$ carries the fixed current $|I_{D3}|$, which sets $V_{ov6}$. Hence $V_{g2,min} = -V_{SS} + V_{ov6}$.
- $|V_{gs2}|$ is evaluated at $|I_{d2}| \approx |V_o^-|/R_L$ (plus any residual $M_1$ current) and includes the body effect: the n-well of $M_2$ is at $V_{DD}$, so $V_{BS2} = V_{DD} - V_o$ is large at negative outputs and raises $|V_{t2}|$.
- As on the positive side, this limit is much farther from the rail than in the bipolar version because $|V_{gs2}|$ contains a threshold (raised by body effect) and a square-root overdrive. (Driving $M_6$ into triode lets the output fall a little further, toward $-V_{SS} + |V_{gs2}|$, at the cost of losing the driver's gain.)

## Grading notes

+2: $V_o^- = -V_{SS} + V_{ov6} + |V_{gs2}|$ (or the equivalent $-V_{SS} + V_{DS6(\min)} + V_{sg2}$), justified like the given $V_o^+$: the $M_6$ saturation edge $V_{DS6} \ge V_{ov6}$ sets the lowest gate voltage of $M_2$, and the p-channel follower adds $|V_{gs2}|$ at the output current. Tying $V_{ov6}$ to the fixed current $|I_{D3}|$ and mentioning the body effect of $M_2$ are pluses, not requirements. +1: $-V_{SS} + |V_{gs2}|$ with the triode/active distinction for $M_6$ left out, or the correct expression with no justification. 0: correct structure with a sign slip in one term that is noted as uncertain. −2 (asserted as fact): limit placed at $-V_{SS} + V_{CE(\text{sat})}$-style values without $V_{gs2}$, use of $M_3$'s overdrive for the negative limit, or $M_1$ identified as the device setting the negative limit.
