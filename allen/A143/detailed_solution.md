# Detailed solution - A143

A common-mode input changes both input currents equally, by an amount set by the finite output resistance $r_{ds5}$ of the tail source. With a perfect mirror the output would simply follow the diode node of M3, which already gives a small negative common-mode gain. The 5 % excess mirror gain adds a positive term: M4 delivers 5 % more signal current than M2 sinks, and the difference flows into the high output resistance. The two terms are of the same size and nearly cancel, so the result has to come from a complete small-signal analysis with a stated model for the 1.05.

### Step 1 — Small-signal parameters

At balance M5 carries 100 µA and M1–M4 carry 50 µA each:

$$
g_{m1}=g_{m2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S,\qquad
g_{m3}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=70.7\ \mu\mathrm S,
$$

$$
g_{ds1}=g_{ds2}=2\ \mu\mathrm S,\qquad g_{ds3}=g_{ds4}=2.5\ \mu\mathrm S,\qquad
g_{ds5}=(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=4\ \mu\mathrm S\ (r_{ds5}=250\ \mathrm{k\Omega}).
$$

Model the mirror error as $g_{m4}=1.05\,g_{m3}$, with $g_{ds4}$ kept separately.

### Step 2 — Node equations

Let $v_s$ be the common source node, $v_a$ the diode node of M3 (drain of M1, gates of M3 and M4), and $v_o$ the output; $V_{DD}$ and M5's gate are ac ground and both gates of M1, M2 carry $v_{ic}$. The drain currents of M1 and M2 are

$$
i_1=g_{m1}(v_{ic}-v_s)+g_{ds1}(v_a-v_s),\qquad
i_2=g_{m2}(v_{ic}-v_s)+g_{ds2}(v_o-v_s).
$$

KCL at the three nodes (M5 has a fixed gate, so it acts as $g_{ds5}$; M3 is a diode, conductance $g_{m3}+g_{ds3}$; M4 is driven by $v_a$):

$$
\begin{aligned}
\text{source node:}\quad & i_1+i_2=g_{ds5}v_s,\\
\text{diode node:}\quad & -(g_{m3}+g_{ds3})v_a=i_1,\\
\text{output:}\quad & -g_{m4}v_a-g_{ds4}v_o=i_2 .
\end{aligned}
$$

### Step 3 — The two parts of the result

Before solving exactly, the structure is clear from two approximations.

- Common-mode current: the source node follows the input almost exactly, and the tail resistance sets the current, $i_1=i_2\approx g_{m1}v_{ic}/(1+2g_{m1}r_{ds5})\approx v_{ic}/(2r_{ds5})=1.97\ \mu\mathrm S\cdot v_{ic}$.
- Matched mirror ($g_{m4}=g_{m3}$): by symmetry the output equals the diode-node voltage, $v_o=v_a=-i_1/(g_{m3}+g_{ds3})$, so $A_{cm,0}\approx-g_{ds5}/[2(g_{m3}+g_{ds3})]=-0.027$.
- Mirror error: M4 delivers $1.05$ times the matched current while M2 sinks $i_2=i_1$; the net $\approx0.05\,i_1$ flows into $R_{out}=1/(g_{ds2}+g_{ds4})=222$ kΩ, adding $\approx+0.05(1.97\ \mu\mathrm S)(222\ \mathrm{k\Omega})=+0.022$.

The two parts are $-0.027$ and $+0.022$, so the net gain is small and sensitive to details.

### Step 4 — Exact solution

Solving the three node equations with the values of Step 1 for $v_{ic}=1$ V gives $v_s=0.9735$ V, $v_a=-0.0263$ V and

$$
\frac{v_{out}}{v_{ic}}=A_{cm}=-0.0056\ \mathrm{V/V}\approx-0.006 ,
$$

(−0.0055 if $g_{ds4}$ is also scaled by 1.05). With the differential gain $A_d=g_{m1}/(g_{ds2}+g_{ds4})=33$ V/V, the CMRR is about $33/0.0056\approx6000$ (75 dB).

### Step 5 — Dependence on how the 1.05 is modeled

Because of the near cancellation, other reasonable readings of "the mirror output is 5 % larger than its input" change the value and even the sign. Solving the same three node equations:

| Model of the 1.05 | Output-node equation | $A_{cm}$ |
|---|---|---|
| $g_{m4}=1.05\,g_{m3}$, $g_{ds4}$ separate | as in Step 2 | −0.0056 |
| Short-circuit current gain $g_{m4}/(g_{m3}+g_{ds3})=1.05$, $g_{ds4}$ separate | $g_{m4}=1.05(g_{m3}+g_{ds3})$ | +0.0096 |
| $i_{d4}=1.05\,i_{d3}$ for M4's whole small-signal current | $-1.05(g_{m3}+g_{ds3})v_a=i_2$ | +0.022 |

In every case $|A_{cm}|$ is of order $10^{-2}$, set jointly by the tail conductance $g_{ds5}$, the diode node of M3 and the mirror error; neglecting either part, for example treating the matched amplifier's common-mode gain as zero, misses one of two comparable terms.
