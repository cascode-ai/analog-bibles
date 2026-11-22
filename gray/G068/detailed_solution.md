# Detailed solution - G068

Compute $g_m$, $g_{mb}$ and $r_o$ from the square-law model, then solve the small-signal circuit at the internal node $X$ (drain of $M_1$ = source of $M_2$): once with the output shorted for $G_m$, once with the input grounded for $R_o$. The open-circuit gain is $-G_mR_o$.

### Step 1 — Small-signal parameters

Both devices carry 250 µA with $W/L=100$, so

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(90\ \mu\mathrm{A/V^2})(100)(250\ \mu\mathrm A)}=2.121\ \mathrm{mA/V},
$$

$$
r_o=\frac1{\lambda I_D}=\frac1{(0.1\ \mathrm{V^{-1}})(250\ \mu\mathrm A)}=40\ \mathrm{k\Omega},\qquad
g_{mb2}=\chi g_{m2}=0.2121\ \mathrm{mA/V}.
$$

$M_1$ has its source on the grounded body, so it has no body effect; $M_2$'s source is at node $X$, above ground, so $v_{bs2}=-v_x$.

### Step 2 — Input resistance

The input drives the gate of $M_1$, which draws no low-frequency current:

$$
R_i\to\infty .
$$

### Step 3 — Transconductance (output shorted)

With the drain of $M_2$ at ground and its gate at ac ground, $v_{gs2}=v_{bs2}=-v_x$. The current flowing down through $M_2$ into node $X$ is $-(g_{m2}+g_{mb2})v_x-v_x/r_{o2}$, and the current leaving $X$ through $M_1$ is $g_{m1}v_i+v_x/r_{o1}$. Equating them,

$$
v_x=-\frac{g_{m1}v_i}{g_{m2}+g_{mb2}+1/r_{o1}+1/r_{o2}} .
$$

The output current (into the drain of $M_2$) is the current through $M_2$:

$$
i_o=-\left(g_{m2}+g_{mb2}+\frac1{r_{o2}}\right)v_x
\quad\Rightarrow\quad
G_m=\frac{i_o}{v_i}=g_{m1}\left[1-\frac1{1+(g_{m2}+g_{mb2})r_{o1}+r_{o1}/r_{o2}}\right].
$$

The bracket is the fraction of $M_1$'s current that does not leak into $r_{o1}$. Numerically, $(g_{m2}+g_{mb2})r_{o1}=(2.333\ \mathrm{mA/V})(40\ \mathrm{k\Omega})=93.34$, so

$$
G_m=2.121\ \mathrm{mA/V}\left(1-\frac1{95.34}\right)=2.099\ \mathrm{mA/V}\approx g_{m1}.
$$

### Step 4 — Output resistance (input grounded)

With $v_i=0$, $M_1$ is the resistance $r_{o1}$ from $X$ to ground. Drive the output with $v_t$; the test current $i_t$ flows through $M_2$ and then through $r_{o1}$, so $v_x=i_tr_{o1}$. KCL for the current through $M_2$:

$$
i_t=-(g_{m2}+g_{mb2})v_x+\frac{v_t-v_x}{r_{o2}}
\quad\Rightarrow\quad
R_o=\frac{v_t}{i_t}=r_{o1}+r_{o2}+(g_{m2}+g_{mb2})r_{o1}r_{o2}.
$$

$$
R_o=40\ \mathrm{k\Omega}+40\ \mathrm{k\Omega}\left[1+(2.333\ \mathrm{mA/V})(40\ \mathrm{k\Omega})\right]=40\ \mathrm{k\Omega}+40\ \mathrm{k\Omega}(94.34)=3.81\ \mathrm{M\Omega}.
$$

The body effect helps: it adds $g_{mb2}$ to the feedback that holds the current of $M_2$ constant. Without it, $R_o$ would be 3.47 MΩ.

### Step 5 — Maximum open-circuit voltage gain

With an infinite load, the short-circuit current flows into $R_o$, and a rising $v_i$ pulls the output down:

$$
A_v=-G_mR_o=-(2.099\ \mathrm{mA/V})(3.814\ \mathrm{M\Omega})=-8.00\times10^3 .
$$

Equivalently, $A_v=-g_{m1}r_{o1}\left[(g_{m2}+g_{mb2})r_{o2}+1\right]=-(84.85)(94.34)=-8005$, roughly the square of the single-device intrinsic gain $g_mr_o=84.9$. The results are $R_i\to\infty$, $G_m=2.10$ mA/V, $R_o=3.81\ \mathrm{M\Omega}$ and $A_v=-8.00\times10^3$.
