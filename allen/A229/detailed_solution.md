# Detailed solution - A229

At each extreme of the input one common-source device is off and the other is driven hard with its full gate drive. Because the load returns to ground, the conducting device ends up with a small drain–source voltage and operates in the nonsaturation (triode) region, so the output is set by a divider between its channel resistance and $R_L$. Write KCL with the triode current, solve the quadratic, and simplify. Both sources sit at their bulks, so no body effect enters; $V_{T1}$ and $|V_{T2}|$ are the device thresholds, distinct from the battery voltages $V_{TR1}$ and $V_{TR2}$.

### Step 1 — Which device conducts at each extreme

- $v_{IN}=V_{SS}$: M1's gate is at $V_{SS}-V_{TR1}$, so $V_{GS1}=-V_{TR1}<V_{T1}$ and M1 is off. M2's gate is at $V_{SS}+V_{TR2}$, so $V_{SG2}=V_{DD}-V_{SS}-V_{TR2}$, its largest value. This gives the **maximum** output.
- $v_{IN}=V_{DD}$: M2's gate is at $V_{DD}+V_{TR2}$, so $V_{SG2}=-V_{TR2}$ and M2 is off. M1's gate drive is $V_{GS1}=V_{DD}-V_{TR1}-V_{SS}$. This gives the **minimum** output.

Define the overdrives at these extremes:

$$
V_2=V_{DD}-V_{SS}-V_{TR2}-|V_{T2}|,\qquad V_1=V_{DD}-V_{SS}-V_{TR1}-V_{T1}.
$$

### Step 2 — Region of the conducting device

At the maximum, $v_{OUT}\ge0$ because $R_L$ returns to ground, so $V_{SD2}=V_{DD}-v_{OUT}\le V_{DD}$. M2 is in nonsaturation when $V_{SD2}<V_2$, which is guaranteed whenever $V_{DD}<V_2$, i.e. $|V_{SS}|>V_{TR2}+|V_{T2}|$, the usual dual-supply case. Likewise M1 is in nonsaturation at the minimum when $V_{DD}>V_{TR1}+V_{T1}$.

### Step 3 — Maximum output

The triode current of M2 flows entirely into $R_L$ ($G_L=1/R_L$). With $x=V_{SD2}=V_{DD}-v_{OUT}$:

$$
\frac{v_{OUT}}{R_L}=\beta_2\Big[V_2(V_{DD}-v_{OUT})-\frac{(V_{DD}-v_{OUT})^2}{2}\Big]
\;\Rightarrow\;
\frac{\beta_2}{2}x^2-(\beta_2V_2+G_L)x+G_LV_{DD}=0 .
$$

The physical root is the smaller one ($x<V_2$):

$$
v_{OUT}(\max)=V_{DD}-\frac{(\beta_2V_2+G_L)-\sqrt{(\beta_2V_2+G_L)^2-2\beta_2G_LV_{DD}}}{\beta_2}.
$$

For small $V_{SD2}$ the $x^2$ term is negligible and M2 acts as a resistor $1/(\beta_2V_2)$ in a divider with $R_L$:

$$
v_{OUT}(\max)\approx V_{DD}\frac{\beta_2V_2}{\beta_2V_2+G_L}=\frac{V_{DD}}{1+\dfrac{1}{\beta_2R_L(V_{DD}-V_{SS}-V_{TR2}-|V_{T2}|)}} .
$$

### Step 4 — Minimum output

M1's triode current is drawn out of $R_L$. With $y=V_{DS1}=v_{OUT}-V_{SS}$:

$$
-\frac{v_{OUT}}{R_L}=\beta_1\Big[V_1(v_{OUT}-V_{SS})-\frac{(v_{OUT}-V_{SS})^2}{2}\Big]
\;\Rightarrow\;
\frac{\beta_1}{2}y^2-(\beta_1V_1+G_L)y-G_LV_{SS}=0,
$$

$$
v_{OUT}(\min)=V_{SS}+\frac{(\beta_1V_1+G_L)-\sqrt{(\beta_1V_1+G_L)^2+2\beta_1G_LV_{SS}}}{\beta_1}
\approx\frac{V_{SS}}{1+\dfrac{1}{\beta_1R_L(V_{DD}-V_{SS}-V_{TR1}-V_{T1})}} .
$$

### Step 5 — Interpretation

For $\beta R_LV\gg1$ both limits approach the rails, within a channel-resistance drop. This is the advantage of the common-source push–pull stage over the source follower, which loses a body-effect-enlarged threshold at each end. Only with a very small supply on the opposite side and a heavy load could the conducting device stay saturated; then $v_{OUT}(\max)=\beta_2R_LV_2^2/2$ (valid while it does not exceed $V_{DD}-V_2$) and $v_{OUT}(\min)=-\beta_1R_LV_1^2/2$ (valid while it is not below $V_{SS}+V_1$).
