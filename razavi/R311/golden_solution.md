# Golden Solution - R311

## Reference answer

$$Z_X = \frac{1 + R_DC_1s}{g_{m2}(1 + g_{m1}R_D + R_DC_1s)}$$
- $|Z_X|$ starts at $\dfrac{1}{g_{m2}(1 + g_{m1}R_D)}$ (low frequencies), rises with +20 dB/dec between the zero $\omega_z = 1/(R_DC_1)$ and the pole $\omega_p = (1 + g_{m1}R_D)/(R_DC_1)$, and flattens at $1/g_{m2}$ at high frequencies: an inductive impedance.
- Equivalent network: $R_0 = \dfrac{1}{g_{m2}(1+g_{m1}R_D)}$ in series with a resistor $\dfrac{1}{g_{m2}} - R_0$ in parallel with an inductor $L = \dfrac{g_{m1}R_D^2C_1}{g_{m2}(1 + g_{m1}R_D)^2} \approx \dfrac{C_1}{g_{m1}g_{m2}}$.

Derivation: the test current enters the source of $M_2$ (node X, also the gate of $M_1$); $I_1$ is ideal, so $i_X = g_{m2}(v_X - v_D)$, where D is the drain of $M_1$. At D: $v_D(1/R_D + C_1s) = -g_{m1}v_X$. Hence $i_X = g_{m2}v_X[1 + g_{m1}R_D/(1 + R_DC_1s)]$.
Intuition: at low frequencies the loop $M_1$–$M_2$ (gain $g_{m1}R_D$) divides the follower's $1/g_{m2}$; at high frequencies $C_1$ kills the loop gain and only $1/g_{m2}$ remains.

## Grading notes

+2: correct $Z_X$ (any equivalent form) and a sketch/description rising from $1/[g_{m2}(1 + g_{m1}R_D)]$ to $1/g_{m2}$, with the zero $1/(R_DC_1)$ and pole $(1+g_{m1}R_D)/(R_DC_1)$ (inductive behaviour). +1: correct expression with an incomplete sketch (e.g., levels right, corner frequencies missing), or a sketch right with a slip in the expression. 0: only one asymptote right. -2 (asserted as fact): $|Z_X|$ decreasing with frequency (capacitive), low-frequency value $1/g_{m2}$ or $1/g_{m1}$, or $M_2$ misread as a common-source device.
