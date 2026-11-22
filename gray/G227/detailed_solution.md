# Detailed solution - G227

Treat the stage as a transconductor ($M_1$) followed by a current buffer ($M_2$): find the current $M_1$ produces, then follow it through $M_2$ into $R_L$.

### Step 1 — Signal current of the input device

At low frequency no current flows in $R_S$, so $v_{gs1}=v_i$. In saturation the square law gives $g_m=\sqrt{2k_n'(W/L)I_D}$, with $W/L=100/1.6=62.5$:

$$
g_{m1}=\sqrt{2\left(60\ \mu\mathrm{A/V^2}\right)(62.5)(0.5\ \mathrm{mA})}=1.936\ \mathrm{mA/V},\qquad
i_{d1}=g_{m1}v_i .
$$

Since $\lambda=0$, $r_{o1}\to\infty$, so this current does not depend on the voltage at the drain of $M_1$.

### Step 2 — Current transfer through the common-gate device

$M_2$ has its gate at ac ground and $\lambda=\gamma=0$, so its only small-signal element is $g_{m2}v_{gs2}$ between drain and source. KCL at its source (the drain of $M_1$) gives

$$
g_{m2}v_{gs2}+g_{m1}v_i=0\;\Rightarrow\;v_{s2}=-v_{gs2}=\frac{g_{m1}}{g_{m2}}v_i ,
$$

and the drain current of $M_2$ is $g_{m2}v_{gs2}=-g_{m1}v_i$: the whole signal current of $M_1$ reaches $R_L$, a current gain of exactly 1. The small swing $v_{s2}$ (here $v_{s2}=v_i$, since $g_{m1}=g_{m2}$) does not reduce the output current.

### Step 3 — Voltage gain

The output current flows through $R_L$, giving

$$
\frac{v_o}{v_i}=-g_{m1}R_L=-(1.936\ \mathrm{mA/V})(20\ \mathrm{k\Omega})=-38.7 .
$$

With a resistive load and $\lambda=0$, the cascode device leaves the gain equal to that of the plain common-source stage; its benefits appear in output resistance and in reducing the Miller effect on $C_{gd1}$.
