# Golden Solution - R105

## Reference answer

$I_X = I_{D1} - I_{D2}$, where $I_{D2}$ is the current coming down through $M_3$–$M_2$: $I_X$ starts at $-I_3$ (or at $-\tfrac12\beta_2(V_{b1} - 0.7)^2$ if $M_2$ is the weaker device), rises as $M_1$'s triode current grows and later as $M_2$'s current falls, and ends flat at $I_1 = \tfrac12\beta_1(V_{b2} - 0.7)^2$ once $M_2$ is off.

- KCL at $X$: $I_X + I_{D2} = I_{D1}$.
- $M_1$: triode for $V_X < V_{b2} - 0.7$ V (current rising from 0), then saturated at $I_1$.
- $M_3$–$M_2$ branch: $M_3$ can supply at most $I_3 = \tfrac12\beta_3(V_{DD} - V_{b3} - 0.8)^2$; $M_2$ (gate $V_{b1}$, source $X$, body effect $V_{SB} = V_X$) can pass at most $\tfrac12\beta_2(V_{b1} - V_X - V_{TH2})^2$. For small $V_X$ the branch current is $\min\{I_3, \tfrac12\beta_2(V_{b1} - V_X - V_{TH2})^2\}$: typically $I_3$ ($M_3$ saturated, $M_2$ triode); once $V_X > V_{b1} - V_{TH2} - \sqrt{2I_3/\beta_2}$ it is $M_2$'s saturation current ($M_3$ now in triode), which falls quadratically to zero at $V_X = V_{b1} - V_{TH2}(V_X)$.
- Hence $I_X(0) = -\min\{I_3, \tfrac12\beta_2(V_{b1} - 0.7)^2\}$ ($= -I_3$ when $M_3$ is the limiting device); $I_X$ rises while $M_1$ is in triode, may be flat at $I_1 - I_3$ if $M_1$ saturates before $M_2$ starts limiting, rises again as $I_{D2}$ falls, and equals $I_{D1}$ for $V_X \ge V_{b1} - V_{TH2}$, i.e. the plateau $I_1$ (flat to 3 V) once $V_X$ also exceeds $V_{b2} - 0.7$ V.
- Transition points: $V_X = V_{b2} - 0.7$ V; $V_X = V_{b1} - V_{TH2} - \sqrt{2I_3/\beta_2}$; $V_X = V_{b1} - V_{TH2}$. Their order depends on the bias voltages.

## Grading notes

+2: $I_X = I_{D1} - I_{D2}$; $I_X(0) = -I_3$, or the equivalent $-\min\{I_3, M_2\text{'s saturation current}\}$ form; $M_1$ triode then constant $I_1$; the upper branch limited by $M_3$ ($I_3$) at low $V_X$ and by $M_2$'s shrinking $V_{GS}$ at higher $V_X$, vanishing at $V_X \approx V_{b1} - V_{TH2}$ (body effect noted); final plateau $I_1$. +1: one transition missing (e.g., the $M_3$ limit). 0: only $M_1$'s current or only the upper branch handled. -2 (asserted as fact): upper branch current independent of $V_X$ for all $V_X$ (ignoring $M_2$ cutoff), $I_X$ ending at $I_1 - I_3$ asserted, or $X$ read as the drain of $M_2$.
