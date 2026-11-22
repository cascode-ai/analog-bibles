# Detailed solution - A086

The output transistors M1 and M2 are the same in both circuits, so their output characteristics are identical if their gate voltages are the same. Those gate voltages are set by the diode-connected M3 and M4; with half the bias current, M3 and M4 must have half the aspect ratio to keep the same $V_{GS}$, i.e. the same current density.

### Step 1 — Gate voltages in [Fig. 2]

A diode-connected transistor carrying $I$ has $V_{GS}=V_T+\sqrt{2I/[K'(W/L)]}$, which depends only on the current density $I/(W/L)$. In [Fig. 2]:

$$
V_{GS3}=0.7\ \mathrm V+\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(4)}}=0.7+0.213=0.913\ \mathrm V,
\qquad
V_{GS4}=0.7\ \mathrm V+\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(1)}}=0.7+0.426=1.126\ \mathrm V .
$$

M1 (4/1) has the same $V_{GS}$ as M3, so it carries $i_{OUT}=10\ \mu$A. M2 (4/1) at 10 µA needs $V_{GS2}=0.913$ V, so its source, the drain of M1, sits at $1.126-0.913=0.213\ \mathrm V=V_{ON}$: M1 is just saturated, and the circuit is a high-swing cascode with $v_{OUT}(\min)=2V_{ON}=0.43$ V.

### Step 2 — Condition for identical output characteristics

In [Fig. 1], M1 and M2 are unchanged (4/1). If their gates receive the same 0.913 V and 1.126 V, every operating point of the output branch, including $i_{OUT}$, the minimum output voltage and the output resistance, is the same as in [Fig. 2]. M3 and M4 must therefore produce the same $V_{GS}$ at 5 µA as before at 10 µA, which requires equal current density:

$$
\frac{I_{new}}{(W/L)_{new}}=\frac{I_{old}}{(W/L)_{old}}
\quad\Rightarrow\quad
\Big(\frac WL\Big)_{new}=\frac{5\ \mu\mathrm A}{10\ \mu\mathrm A}\Big(\frac WL\Big)_{old}.
$$

### Step 3 — Sizes of M3 and M4

$$
\Big(\frac WL\Big)_3=\frac12\Big(\frac41\Big)=\frac21,\qquad
\Big(\frac WL\Big)_4=\frac12\Big(\frac11\Big)=\frac12 .
$$

Check: M3 (2/1) at 5 µA gives $V_{GS3}=0.7+\sqrt{2(5)/(110\times2)}=0.913$ V, so M1 (4/1) mirrors $10\ \mu$A with a current gain of 2; M4 (1/2) at 5 µA gives $V_{GS4}=0.7+\sqrt{2(5)(2)/110}=1.126$ V. With $L=1\ \mu$m for M3, $W_3=2\ \mu$m; M4 can be drawn as $W_4=1\ \mu$m, $L_4=2\ \mu$m. The output is again $i_{OUT}=10\ \mu$A, with the same minimum output voltage and output resistance as [Fig. 2], while the two reference branches draw half the current.
