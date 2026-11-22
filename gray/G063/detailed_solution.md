# Detailed solution - G063

The drain current is fixed at 200 µA, so the overdrive is fixed; the body effect only raises $V_t$, which depends on the unknown output through $V_{SB}=V_O$. Solve that one nonlinear equation for the bias point, then include $g_{mb}$ in the follower gain.

### Step 1 — Overdrive from the fixed current

With $R\to\infty$ all 200 µA flows through the transistor. In saturation $I_D=\tfrac12\mu_nC_{ox}(W/L)(V_{GS}-V_t)^2$, so

$$
V_{GS}-V_t=\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}}=\sqrt{\frac{2(200\ \mu\mathrm A)}{(90\ \mu\mathrm{A/V^2})(10)}}=0.6667\ \mathrm V ,
$$

independent of the body effect.

### Step 2 — Bias equation with the body effect

The body is grounded and the source is at $V_O$, so $V_{SB}=V_O$. With the gate at 3 V,

$$
V_O=3\ \mathrm V-0.6667\ \mathrm V-V_t,\qquad
V_t=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_O}-\sqrt{2\phi_f}\right).
$$

Substitute $w=\sqrt{2\phi_f+V_O}=\sqrt{0.61\ \mathrm V+V_O}$, so that $V_O=w^2-0.61$ (all voltages in volts, $\sqrt{0.61}=0.78102$):

$$
\begin{aligned}
w^2-0.61&=2.3333-0.7-0.19w+0.19(0.78102)\\
w^2+0.19w-2.39173&=0 .
\end{aligned}
$$

The positive root is

$$
w=\frac{-0.19+\sqrt{0.19^2+4(2.39173)}}{2}=1.45444\ \mathrm{V^{1/2}},
\qquad V_O=w^2-0.61=1.505\ \mathrm V .
$$

Then $V_t=0.7+0.19(1.45444-0.78102)=0.828$ V; the body effect raises the threshold by 0.128 V and lowers $V_O$ from 1.633 V to 1.505 V. Check: $V_{DS}=5-1.505=3.5$ V $>0.667$ V, so the device is saturated.

### Step 3 — Small-signal parameters

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(90\ \mu\mathrm{A/V^2})(10)(200\ \mu\mathrm A)}=0.600\ \mathrm{mA/V}.
$$

The body transconductance follows from differentiating $V_t$ with respect to $V_{SB}$:

$$
\chi=\frac{g_{mb}}{g_m}=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.19\ \mathrm{V^{1/2}}}{2(1.45444\ \mathrm{V^{1/2}})}=0.0653,
\qquad g_{mb}=\chi g_m=39.2\ \mu\mathrm{A/V}.
$$

### Step 4 — Follower gain with the body effect

The gate is driven by $v_i$, the body is at ground and the source is $v_o$, so $v_{gs}=v_i-v_o$ and $v_{bs}=-v_o$. With $R\to\infty$, an ideal current source and $\lambda=0$, no small-signal current can leave the source node, so the drain current change must vanish:

$$
g_m(v_i-v_o)-g_{mb}v_o=0
\quad\Rightarrow\quad
\frac{v_o}{v_i}=\frac{g_m}{g_m+g_{mb}}=\frac1{1+\chi}=\frac1{1.0653}=0.939 .
$$

The body effect makes the source track the gate imperfectly: as $v_o$ rises, $V_t$ rises with it, so $v_{gs}$ must grow to keep the current constant. The answers are $V_O=1.50$ V (with $V_t=0.83$ V) and $v_o/v_i=0.94$.
