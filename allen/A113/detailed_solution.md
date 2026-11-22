# Detailed solution - A113

The two given expressions come from the two ends of the transfer curve: at low input the diode-connected load turns off one threshold below $V_{DD}$, and at $v_{IN}=V_{DD}$ the triode current of M1 balances the saturation current of M2. Evaluate the device gains $\beta_i=K'_iW_i/L_i$ and substitute.

### Step 1 — Maximum output

M2 is diode-connected ($v_{SD2}=v_{SG2}$), so it is saturated whenever it conducts. When $v_{IN}<V_{TN}$, M1 is off and the output rises until M2's current falls to zero, which happens when $v_{SG2}=|V_{TP}|$:

$$
v_{OUT}(\max)\cong V_{DD}-|V_{TP}|=5\ \mathrm V-0.7\ \mathrm V=4.3\ \mathrm V .
$$

### Step 2 — Origin of the minimum-output expression

At $v_{IN}=V_{DD}$, M1 is in the triode region and M2 is saturated with $v_{SG2}=V_{DD}-v_{OUT}$. Equating the currents, with $V_{T1}=|V_{T2}|=V_T$,

$$
\beta_1\left[(V_{DD}-V_T)v_{OUT}-\frac{v_{OUT}^2}{2}\right]=\frac{\beta_2}{2}(V_{DD}-V_T-v_{OUT})^2 .
$$

With $u=V_{DD}-V_T-v_{OUT}$ this becomes $\beta_1[(V_{DD}-V_T)^2-u^2]=\beta_2u^2$, so $u=(V_{DD}-V_T)/\sqrt{1+\beta_2/\beta_1}$, which is the given expression:

$$
v_{OUT}(\min)=V_{DD}-V_T-\frac{V_{DD}-V_T}{\sqrt{1+\beta_2/\beta_1}} .
$$

### Step 3 — Device gains

$$
\beta_1=K'_N\frac{W_1}{L_1}=(110\ \mu\mathrm{A/V^2})(5)=550\ \mu\mathrm{A/V^2},\qquad
\beta_2=K'_P\frac{W_2}{L_2}=(50\ \mu\mathrm{A/V^2})(1)=50\ \mu\mathrm{A/V^2},
$$

$$
\frac{\beta_2}{\beta_1}=0.0909,\qquad \sqrt{1+\beta_2/\beta_1}=\sqrt{1.0909}=1.0445 .
$$

### Step 4 — Minimum output

$$
v_{OUT}(\min)=4.3\ \mathrm V-\frac{4.3\ \mathrm V}{1.0445}=4.3-4.117\ \mathrm V=0.183\ \mathrm V .
$$

So the inverter swings from $v_{OUT}(\min)\approx0.183$ V to $v_{OUT}(\max)=4.3$ V. The low level is small because M1 is much stronger than the load ($\beta_1/\beta_2=11$); the high level is limited by the threshold of the diode-connected load.
