# Golden Solution - R106

## Reference answer

$I_X = I_{D1} - I_1$ (KCL at the node $P$ joining $I_1$, the drain of $M_1$ and the source of $M_2$). $I_X$ is negative at $V_X = 0$, rises through zero, and saturates at $I_B - I_1$ once $M_1$ saturates ($V_P = V_{b2} - 0.7$ V); $M_2$ may still be in triode then and saturates later, at $V_X = V_{b1} - V_{TH2}(V_P)$, without a visible kink in $I_X$.

- Large $V_X$ ($V_X \ge V_{b1} - V_{TH2}(V_P)$): $M_2$ saturated as a cascode, $V_P = V_{b1} - V_{TH2}(V_P) - \sqrt{2(I_B - I_1)/\beta_2}$; if this is above $V_{b2} - 0.7$ V, $M_1$ is saturated and $I_X = I_B - I_1$, constant (the folded-cascode current).
- If $V_{b1}$ is too low for this ($\tfrac12\beta_2[V_{b1} - (V_{b2} - 0.7) - V_{TH2}(V_{b2} - 0.7)]^2 < I_B - I_1$), $M_2$ saturates first while $M_1$ is still in triode, and the plateau is lower than $I_B - I_1$, set by $\tfrac12\beta_2[V_{b1} - V_P - V_{TH2}(V_P)]^2 + I_1 = \beta_1[(V_{b2} - 0.7)V_P - V_P^2/2]$.
- Lower $V_X$: $M_2$ in triode, $V_P$ follows $V_X$ down; once $V_P < V_{b2} - 0.7$ V, $M_1$ is in triode and its current falls: $I_X = I_{D1}(V_P) - I_1$ decreases.
- $I_X = 0$ at $V_X = V_{P0}$, where $M_1$ in triode carries exactly $I_1$: $\beta_1[(V_{b2} - 0.7)V_{P0} - V_{P0}^2/2] = I_1$ (then $M_2$ has $V_{DS} = 0$).
- $V_X < V_{P0}$: $I_X < 0$ — the part of $I_1$ that $M_1$ cannot sink flows out through $M_2$ (now conducting with $V_X$ as its source) into the voltage source. At $V_X = 0$: $I_X = -(I_1 - I_{D1}(V_P))$, with $V_P$ set by $M_1$ and $M_2$ both in triode sharing $I_1$.
- Transition points: $V_X = V_{P0}$ (zero crossing), $V_P = V_{b2} - 0.7$ V ($M_1$ saturates), $V_X = V_{b1} - V_{TH2}(V_P)$ ($M_2$ saturates; no kink in $I_X$ if $M_1$ is already saturated), plateau $I_B - I_1$.
- (If instead $I_B < I_1$, the excess $I_1 - I_B$ can only leave through $M_2$ toward the source, so $I_X = -(I_1 - I_B)$ for low $V_X$, and for $V_X$ above about $V_{b1} - V_{TH}$ no path remains and node $P$ is pushed to the compliance limit of the current source.)

## Grading notes

+2: $I_X = I_{D1} - I_1$ (folded current), plateau $I_B - I_1$ once $M_1$ is saturated (or a correctly derived lower plateau when $M_2$ saturates first), decreasing $I_X$ as $M_2$ then $M_1$ leave saturation, negative $I_X$ at small $V_X$ with reversed conduction of $M_2$. +1: plateau and upper transitions right, low-$V_X$ (negative) region missing or vague. 0: plateau value wrong in sign or magnitude (e.g., $I_B$ or $I_1$) but transitions qualitatively right. -2 (asserted as fact): $I_X = I_{D1} + I_1$, $I_1$ treated as flowing into $X$, or $I_X$ decreasing with $V_X$.
