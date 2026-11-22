# Detailed solution - G069

Find the bias currents of the two transistors from KCL, compute $g_{m1}$, $g_{m2}$ and $r_{o1}$ with the effective channel length, then hold the output at ac ground and follow the signal from the gate of $M_1$ to the drain current of $M_2$. Node 2 denotes the drain of $M_1$ (gate of $M_2$).

### Step 1 — Bias currents

The ideal source $I_2$ is the only dc path from node 2 to ground (the gate of $M_2$ draws no current), so $M_1$ carries $I_{D1}=I_2=100\ \mu$A. At the output node, $I_1$ splits between $M_1$ and $M_2$:

$$
I_{D2}=I_1-I_{D1}=200\ \mu\mathrm A-100\ \mu\mathrm A=100\ \mu\mathrm A .
$$

### Step 2 — Small-signal parameters

With $L_{\text{eff}}=0.12\ \mu$m, $W_1/L_{\text{eff}}=250$ and $W_2/L_{\text{eff}}=83.33$. In the active region $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$:

$$
g_{m1}=\sqrt{2(65\ \mu\mathrm{A/V^2})(250)(100\ \mu\mathrm A)}=1.803\ \mathrm{mA/V},\qquad
g_{m2}=\sqrt{2(194\ \mu\mathrm{A/V^2})(83.33)(100\ \mu\mathrm A)}=1.798\ \mathrm{mA/V}.
$$

For the p-channel $M_1$,

$$
\lambda_p=\frac{0.04\ \mu\mathrm{m/V}}{0.12\ \mu\mathrm m}=0.333\ \mathrm{V^{-1}},\qquad
r_{o1}=\frac1{\lambda_pI_{D1}}=\frac1{(0.333\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=30\ \mathrm{k\Omega}.
$$

### Step 3 — Node 2 with the output shorted

The source of $M_1$ is the output node, now at ac ground, so $v_{sg1}=-v_i$; the body effect is ignored, and in any case $v_{sb1}=0$. The small-signal current flowing from source to drain of $M_1$ into node 2 is

$$
i_{d1}=g_{m1}v_{sg1}+\frac{0-v_2}{r_{o1}}=-g_{m1}v_i-\frac{v_2}{r_{o1}} .
$$

Node 2 is connected otherwise only to the ideal source $I_2$ (infinite resistance) and the gate of $M_2$, so $i_{d1}=0$:

$$
v_2=-g_{m1}r_{o1}v_i .
$$

Node 2 is a high-impedance node, so $M_1$ acts as a common-source amplifier with gain $g_{m1}r_{o1}=54$ from $v_i$ to $v_2$.

### Step 4 — Output current

With $v_o=0$, $r_{o2}$ and the ideal source $I_1$ carry no signal current, and $M_1$ carries none either (Step 3). The only signal current at the output node is the drain current of $M_2$:

$$
i_{d2}=g_{m2}v_2=-g_{m1}g_{m2}r_{o1}v_i .
$$

For a positive $v_i$ the current drawn by $M_2$ falls, so current flows out of the output node into the short. The magnitude of the short-circuit transconductance is

$$
|G_m|=g_{m1}g_{m2}r_{o1}=(1.803\ \mathrm{mA/V})(1.798\ \mathrm{mA/V})(30\ \mathrm{k\Omega})=97.2\ \mathrm{mA/V}.
$$

This is $g_{m2}r_{o1}=54$ times the $g_{m1}$ of a simple source follower: the local feedback through $M_2$ keeps the current of $M_1$ constant and supplies the output current with gain. With a finite resistance $r_2$ at node 2 instead of the ideal $I_2$, the same steps give $G_m=g_{m1}(r_{o1}\|r_2)(g_{m2}+1/r_2)$.
