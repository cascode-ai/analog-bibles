# Detailed solution - A285

Both supplies and the bias battery ride on $v_{ground}$, so the whole op amp moves with it. Shifting every node voltage by $-v_{ground}$ makes the supplies and bias quiet again; in that frame the ground disturbance appears instead as a signal of $-v_{ground}$ on the grounded input and on the bottom of $C_L$. Solve the two-node model in the shifted frame and add $v_{ground}$ back.

### Step 1 — Shifted frame

Define $v'=v-v_{ground}$ for every node. Then $V_{DD}$, $V_{SS}$ and $V_{BIAS}$ are constant (M5 and M7 keep their gate–source voltages), and

- the M1 gate (noninverting input, at signal ground) is at $-v_{ground}$;
- the M2 gate is tied to the output, at $v'_{out}=v_{out}-v_{ground}$;
- the bottom of $C_L$ is at $-v_{ground}$, so the current in $C_L$ is $sC_L(v'_{out}+v_{ground})$.

The differential input of the op amp is therefore $v_{id}=-v_{ground}-v'_{out}$.

### Step 2 — Node equations

With $V_1$ the first-stage output in the shifted frame, KCL at the first-stage node and at the output gives

$$
\begin{aligned}
(G_I+sC_c)V_1-sC_cv'_{out}+g_{mI}v_{id}&=0,\\
G_{II}v'_{out}+sC_L(v'_{out}+v_{ground})+sC_c(v'_{out}-V_1)+g_{mII}V_1&=0 .
\end{aligned}
$$

### Step 3 — Transfer function

Solving for $v'_{out}$ and forming $v_{out}=v'_{out}+v_{ground}$:

$$
\frac{v_{out}}{v_{ground}}=\frac{G_IG_{II}+sC_c(g_{mII}+G_I+G_{II})}{g_{mI}g_{mII}+G_IG_{II}+s\left[C_c(g_{mII}-g_{mI}+G_I+G_{II})+C_LG_I\right]+s^2C_cC_L}.
$$

### Step 4 — Low-frequency gain and roots

At dc,

$$
\frac{v_{out}}{v_{ground}}(0)=\frac{G_IG_{II}}{g_{mI}g_{mII}+G_IG_{II}}\approx\frac{G_IG_{II}}{g_{mI}g_{mII}}=\frac1{A_v(0)},
$$

in phase with $v_{ground}$. With $g_{mII}\gg G_I,G_{II}$, the numerator root is

$$
z\approx-\frac{G_IG_{II}}{g_{mII}C_c}=-|p_1|,
$$

the open-loop dominant pole. The denominator is approximately $s^2C_cC_L+sC_c(g_{mII}-g_{mI})+g_{mI}g_{mII}$; for $g_{mII}\gg g_{mI}$ and widely spaced roots it factors as $g_{mI}g_{mII}(1+sC_c/g_{mI})(1+sC_L/g_{mII})$, giving the poles

$$
p_A\approx-\frac{g_{mI}}{C_c}=-GB,\qquad p_B\approx-\frac{g_{mII}}{C_L}=-|p_2| ,
$$

the closed-loop poles of the follower. Altogether,

$$
\frac{v_{out}}{v_{ground}}\approx\frac1{A_v(0)}\cdot\frac{1+s/|p_1|}{(1+s/GB)(1+s/|p_2|)} .
$$

### Step 5 — Shape

The response is $1/A_v(0)$ at dc, rises at +20 dB/decade from $|p_1|$, is about 1 (0 dB) between $GB$ and $|p_2|$, and falls at −20 dB/decade above $|p_2|$, where $C_L$ ties the output to the signal ground. Ground noise is thus suppressed by the loop gain at low frequency but passes almost unattenuated between $GB$ and $|p_2|$.
