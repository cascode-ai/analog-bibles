# Detailed solution - G084

First find the bias current from the load. $M_2$ has $V_{GS2}=0$, so its current depends only on its threshold, and that threshold is raised by the body effect because its source sits at the 1-V output. Then find $g_{m1}$ from the same current and set up the small-signal output node. Since $v_{gs2}=0$, the load contributes only its body transconductance and $r_{o2}$, and the gain is $-g_{m1}$ times the total resistance at the output.

### Step 1 — Load device $M_2$: threshold and bias current

The source of $M_2$ is the output, so $V_{SB2}=V_O=1$ V:

$$
V_{t2}=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{SB}}-\sqrt{2\phi_f}\right)=-1\ \mathrm V+(0.28\ \mathrm V^{1/2})\left(\sqrt{1.66\ \mathrm V}-\sqrt{0.66\ \mathrm V}\right)=-0.867\ \mathrm V .
$$

With $V_{GS2}=0$, the overdrive is $V_{ov2}=0-V_{t2}=0.867$ V. Since $V_{DS2}=V_{DD}-V_O=2\ \mathrm V>V_{ov2}$, $M_2$ is saturated, and

$$
I_D=\frac{k'}2\frac W{L_{\text{eff}}}V_{ov2}^2=\frac{194\ \mu\mathrm{A/V^2}}2\cdot\frac{10}{0.82}\cdot(0.867\ \mathrm V)^2=0.889\ \mathrm{mA}.
$$

The factor $1+\lambda V_{DS}$ is left out of the bias calculation; it raises the current by about 5 % and changes the gain by about 1 %.

### Step 2 — Driver $M_1$: overdrive and transconductance

$M_1$ carries the same current, with its source and body grounded, so $V_{t1}=0.6$ V. With $W/L_{\text{eff}}=100/0.82=121.95$,

$$
V_{ov1}=\sqrt{\frac{2I_D}{k'(W/L_{\text{eff}})}}=\sqrt{\frac{2(0.889\ \mathrm{mA})}{(194\ \mu\mathrm{A/V^2})(121.95)}}=0.274\ \mathrm V .
$$

$V_{DS1}=1\ \mathrm V>V_{ov1}$, so $M_1$ is saturated (the input dc level is $V_{t1}+V_{ov1}=0.874$ V), and

$$
g_{m1}=\frac{2I_D}{V_{ov1}}=\frac{2(0.889\ \mathrm{mA})}{0.274\ \mathrm V}=6.48\ \mathrm{mA/V}.
$$

### Step 3 — Small-signal parameters of the load

$$
g_{m2}=\frac{2I_D}{V_{ov2}}=2.05\ \mathrm{mA/V},\qquad
\chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB2}}}=\frac{0.28}{2\sqrt{1.66}}=0.109,\qquad
g_{mb2}=\chi g_{m2}=0.223\ \mathrm{mA/V},
$$

$$
r_{o1}=r_{o2}=\frac1{\lambda I_D}=\frac1{(0.0244\ \mathrm{V^{-1}})(0.889\ \mathrm{mA})}=46.1\ \mathrm{k\Omega}.
$$

### Step 4 — Output node and gain

The gate of $M_2$ is tied to its source, so $v_{gs2}=0$ and the $g_{m2}$ source carries no current. Its drain is at $V_{DD}$, an ac ground, so $r_{o2}$ runs from the output to ground. The body is grounded and the source is the output, so $v_{bs2}=-v_o$. The body source therefore drives $g_{mb2}v_{bs2}=-g_{mb2}v_o$ into the output, which is a conductance $g_{mb2}$ to ground. The output node thus has $g_{m1}v_i$ pulled down by $M_1$ and three resistances to ground: $r_{o1}$, $r_{o2}$ and $1/g_{mb2}$.

<!-- diagram: diagram-01.cir -->

KCL at the output gives

$$
g_{m1}v_i+\left(\frac1{r_{o1}}+\frac1{r_{o2}}+g_{mb2}\right)v_o=0
\quad\Rightarrow\quad
\frac{v_o}{v_i}=-g_{m1}\left(r_{o1}\,\|\,r_{o2}\,\|\,\frac1{g_{mb2}}\right).
$$

With $1/g_{mb2}=4.49\ \mathrm{k\Omega}$ and $r_{o1}\|r_{o2}=23.1\ \mathrm{k\Omega}$, the load is $3.76\ \mathrm{k\Omega}$:

$$
\frac{v_o}{v_i}=-(6.48\ \mathrm{mA/V})(3.76\ \mathrm{k\Omega})=-24.4 .
$$

The body effect sets the gain: without the $r_o$'s it would be $-g_{m1}/g_{mb2}=-29$, and the two $r_o$'s lower it to $-24$. Including $1+\lambda V_{DS}$ in the bias currents gives $-24.1$.
