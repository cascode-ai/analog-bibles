# Detailed solution - G269

The auxiliary amplifier $A_1$ senses the source of $M_2$ (node $X$, the drain of $M_1$) and drives the gate of $M_2$ to hold $X$ still, which multiplies the output resistance of the cascode. Use Blackman's formula with $A_1$'s gain $a$ as the reference element: $R_{out}=R_{out}(a{=}0)\,[1+\mathcal R(\text{short})]/[1+\mathcal R(\text{open})]$. The voltage gain then follows because the ideal current-source load leaves the output open.

### Step 1 — Small-signal parameters

Both transistors carry $I_D=100\ \mu$A with $V_{ov}=0.3$ V. From the square law, $g_m=2I_D/V_{ov}$:

$$
g_m=\frac{2(100\ \mu\mathrm A)}{0.3\ \mathrm V}=0.667\ \mathrm{mA/V},\qquad r_o=\frac1{\lambda I_D}=\frac1{(0.03\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=333\ \mathrm{k\Omega},\qquad g_mr_o=222 .
$$

### Step 2 — Output resistance with the amplifier disabled

With $a=0$ the gate of $M_2$ is at ac ground and the circuit is an ordinary cascode: $M_2$ with source resistance $r_{o1}$. Applying a test current at the drain,

$$
R_{out}(a{=}0)=r_{o1}+r_{o2}+g_{m2}r_{o2}r_{o1}=333\ \mathrm{k\Omega}+333\ \mathrm{k\Omega}+(222)(333\ \mathrm{k\Omega})=74.7\ \mathrm{M\Omega}.
$$

### Step 3 — Return ratios

The amplifier output is $-a\,v_X$ (it compares $v_X$ with the fixed $V_{BIAS}$). Replace it by a test voltage $v_t$ at the gate of $M_2$, with $v_i=0$.

- Output port shorted: $M_2$ is a source follower driving $r_{o1}\parallel r_{o2}$ (its drain is grounded), so KCL at $X$ gives $g_{m2}(v_t-v_X)=v_X(1/r_{o1}+1/r_{o2})$:

$$
v_X=v_t\,\frac{g_{m2}}{g_{m2}+2/r_o},\qquad \mathcal R(\text{short})=\frac{a\,v_X}{v_t}=\frac{a\,g_{m2}}{g_{m2}+2/r_o}=(1000)(0.991)=991 .
$$

- Output port open: no current can flow through $M_2$ and hence through $r_{o1}$, so $v_X=0$ and $\mathcal R(\text{open})=0$.

### Step 4 — Output resistance

$$
R_{out}=R_{out}(a{=}0)\,\frac{1+991}{1+0}=(74.7\ \mathrm{M\Omega})(992)=7.41\times10^{10}\ \Omega\approx74\ \mathrm{G\Omega}.
$$

This equals the direct result $r_{o1}+r_{o2}+(1+a)g_{m2}r_{o2}r_{o1}$: the feedback raises the effective transconductance of $M_2$ by $1+a$.

### Step 5 — Voltage gain

With an ideal current-source load the output is open, so the small-signal current through $M_1$ and $M_2$ is zero. At node $X$: $g_{m1}v_i+v_X/r_{o1}=0$, so $v_X=-g_{m1}r_{o1}v_i$. For $M_2$, $v_{gs2}=-av_X-v_X=-(1+a)v_X$, and zero drain current requires $g_{m2}v_{gs2}+(v_o-v_X)/r_{o2}=0$:

$$
v_o=v_X\left[1+(1+a)g_{m2}r_{o2}\right],\qquad
\frac{v_o}{v_i}=-g_{m1}r_{o1}\left[1+(1+a)g_{m2}r_{o2}\right]=-(222)\left[1+(1001)(222)\right]=-4.94\times10^{7}.
$$

Equivalently $v_o/v_i\approx-g_{m1}R_{out}=-(0.667\ \mathrm{mA/V})(74\ \mathrm{G\Omega})$: the inverting gain is about $(g_mr_o)^2a$.
