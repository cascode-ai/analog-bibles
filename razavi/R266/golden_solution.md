# Golden Solution - R266

## Reference answer

Both $V_X$ and $V_Y$ are constant: $V_X = V_{DD}$ for all $t$, and $V_Y$ stays at the level set by $M_1$ with $V_{GS1} = V_{DD}$ against $R_1$: low, with $M_1$ in triode, $(V_{DD}-V_Y)/R_1 = \beta[(V_{DD}-0.7)V_Y - V_Y^2/2]$, for usual values ($\beta R_1 > 0.265\ \mathrm{V^{-1}}$); otherwise $M_1$ is saturated and $V_Y = V_{DD} - \tfrac{\beta R_1}{2}(2.3\ \mathrm{V})^2 \ge 2.3$ V. The only transient is internal: $C_1$ discharges through $M_2$.

- $M_2$'s source connects only to $C_1$, whose other plate is at X. Whatever current $M_2$ draws from X returns to X through $C_1$, so $R_1$ carries no current and $V_X = V_{DD}$ (the gate of $M_1$ draws nothing either).
- Inside the loop, $C_1$ sits directly across $V_{GS2}$ ($V_{GS2} = V_{DS2}$ = capacitor voltage). If $V_0 > V_{TH2}$, $M_2$ discharges $C_1$ until its voltage equals $V_{TH2}$, raised by the body effect ($V_{SB2} = V_{DD} - V_C$): $V_C = 0.7 + 0.45(\sqrt{3.9 - V_C} - \sqrt{0.9})$ gives ≈ 1.03 V. The source of $M_2$ rises from $V_{DD} - V_0$ to ≈ 1.97 V. If $V_0$ is below that threshold, nothing happens at all.
- $M_1$ sees $V_{GS} = V_{DD}$ from $t = 0$ on, so $V_Y$ is constant.

## Grading notes

+2: $V_X = V_{DD}$ constant because $M_2$'s current circulates through $C_1$ (no net current in $R_1$), and $V_Y$ constant at the level set by $M_1$ (gate at $V_{DD}$) against $R_1$: low with $M_1$ in triode for usual values; a correctly stated saturated, high-$V_Y$ branch for small $\beta R_1$ is equally correct. Describing $C_1$'s internal discharge toward $V_{TH2}$ (≈ 1.03 V with body effect) is a plus but not required; a wrong end value there is a minor slip (+1). +1: $V_X = V_{DD}$ and $V_Y$ constant stated without a valid reason (the circulating current through $C_1$ not identified). 0: $C_1$ discharge right but $V_X$ claimed to vary. -2 (asserted as fact): $V_X$ following the capacitor voltage or decaying to $V_{TH}$, $C_1$ read as connected to ground, or $V_Y$ rising to $V_{DD}$.
