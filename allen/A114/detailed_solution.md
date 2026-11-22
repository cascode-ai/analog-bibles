# Detailed solution - A114

Find both ends of the output range as functions of $\beta_1/\beta_2$, form the swing, and see whether 80 % of $V_{DD}$ can be reached. The upper end is fixed by the threshold of the diode-connected load; the lower end comes from balancing the triode current of M1 against the saturation current of M2 at $v_{IN}=V_{DD}$. The gain follows from the small-signal model in the amplifying region.

### Step 1 — Maximum output

M2 is diode-connected, so it is saturated whenever it conducts. When M1 is off, the output rises until M2's current falls to zero at $v_{SG2}=|V_{T2}|$:

$$
v_{OUT}(\max)=V_{DD}-V_T=V_{DD}-0.2V_{DD}=0.8V_{DD}.
$$

The output can never exceed 80 % of $V_{DD}$.

### Step 2 — Minimum output

At $v_{IN}=V_{DD}$, M1 is in the triode region and M2 is saturated with $v_{SG2}=V_{DD}-v_{OUT}$:

$$
\beta_1\left[(V_{DD}-V_T)v_{OUT}-\frac{v_{OUT}^2}{2}\right]=\frac{\beta_2}{2}(V_{DD}-V_T-v_{OUT})^2 .
$$

With $u=V_{DD}-V_T-v_{OUT}$ this reduces to $\beta_1[(V_{DD}-V_T)^2-u^2]=\beta_2u^2$, so

$$
v_{OUT}(\min)=(V_{DD}-V_T)\left[1-\frac1{\sqrt{1+\beta_2/\beta_1}}\right]>0\quad\text{for any finite }\beta_1/\beta_2 .
$$

### Step 3 — Swing and the 80 % requirement

$$
\text{swing}=v_{OUT}(\max)-v_{OUT}(\min)=\frac{V_{DD}-V_T}{\sqrt{1+\beta_2/\beta_1}}=\frac{0.8V_{DD}}{\sqrt{1+\beta_2/\beta_1}}<0.8V_{DD}.
$$

An 80 % swing needs $v_{OUT}(\min)=0$ while $v_{OUT}(\max)=0.8V_{DD}$, which happens only in the limit $\beta_2/\beta_1\to0$, i.e. $\beta_1/\beta_2\to\infty$. No finite ratio gives an 80 % swing; it is approached only asymptotically.

### Step 4 — Small-signal gain

In the amplifying region both transistors are saturated. With $g_{ds}$ neglected, the output node sees the controlled current $g_{m1}v_{in}$ and the load conductance $g_{m2}$ of the diode-connected M2. The two devices carry the same current $I$, so with $g_m=\sqrt{2\beta I}$,

$$
A_v=-\frac{g_{m1}}{g_{m2}}=-\sqrt{\frac{\beta_1}{\beta_2}} .
$$

This grows without bound as $\beta_1/\beta_2\to\infty$, so no finite gain corresponds to the 80 % swing either. Nearby feasible designs show the trade-off:

| $\beta_1/\beta_2$ | $v_{OUT}(\min)/V_{DD}$ | Swing / $V_{DD}$ | $A_v=-\sqrt{\beta_1/\beta_2}$ |
|---|---|---|---|
| 3.27 | 0.100 | 0.700 | −1.81 |
| 10 | 0.037 | 0.763 | −3.16 |
| 39 | 0.010 | 0.790 | −6.24 |
| 100 | 0.004 | 0.796 | −10.0 |
| → ∞ | → 0 | → 0.800 | → −∞ |

The ratio 3.27 is what one obtains by placing the swing between $0.1V_{DD}$ and $0.9V_{DD}$; that design is not valid here, because the output cannot rise above $V_{DD}-V_T=0.8V_{DD}$, and it actually gives only a 70 % swing.

If the gain is evaluated instead at the low-output point $v_{IN}=V_{DD}$, M1 is in triode with $g_{m1}=\beta_1v_{OUT}$ and $g_{ds1}=\beta_1(V_{DD}-V_T-v_{OUT})$, and

$$
A_v=-\frac{g_{m1}}{g_{m2}+g_{ds1}}=-q(1-q),\qquad q=\sqrt{\frac{\beta_1/\beta_2}{1+\beta_1/\beta_2}},
$$

which tends to 0 in the same limit. Either way, an 80 % swing is not attainable with a diode-connected PMOS load when $V_T=0.2V_{DD}$.
