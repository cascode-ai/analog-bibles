# Detailed solution - G320

Replace the ideal current buffer with the actual small-signal behavior of the common-gate transistor: its source presents a resistance $1/g_{m11}$. The current fed back through $C$ then depends on $v_o$ through an $RC$ network instead of being exactly $sCv_o$. Find this current, write the two node equations, and eliminate $v_1$. The factor that makes the feedback current low-pass appears in the numerator as a zero.

### Step 1 — Current through the common-gate stage

The gate of $M_{11}$ is at a fixed bias, which is ac ground. With $r_{o11}=\infty$ and $\gamma=0$, a small-signal current $i_c$ into its source changes the source voltage by
$$
v_s=\frac{i_c}{g_{m11}},
$$
and the whole of $i_c$ leaves the drain into node ①. Let $i_c$ flow from the output, through $C$, into the source. Then
$$
i_c=sC\,(v_o-v_s)=sC\left(v_o-\frac{i_c}{g_{m11}}\right)
\quad\Rightarrow\quad
i_c=\frac{sC\,v_o}{1+sC/g_{m11}} .
$$
For $g_{m11}\to\infty$, this reduces to the ideal buffer, $i_c=sCv_o$. For finite $g_{m11}$, $C$ in series with $1/g_{m11}$ makes $i_c$ roll off with time constant $C/g_{m11}$.

### Step 2 — Node equations

Use the conventions of the given model: $i_s$ leaves node ①, and $M_6$ draws $g_mv_1$ from the output node. KCL gives
$$
\begin{aligned}
\text{node 1:}&\quad -i_s=\left(\frac1{R_1}+sC_1\right)v_1-i_c,\\
\text{output:}&\quad 0=g_mv_1+\left(\frac1{R_2}+sC_2\right)v_o+i_c .
\end{aligned}
$$
Write $D_c=1+sC/g_{m11}$, so that $i_c=sCv_o/D_c$.

### Step 3 — Eliminate $v_1$

From the output equation,
$$
v_1=-\frac{v_o}{g_m}\left(\frac{1+sR_2C_2}{R_2}+\frac{sC}{D_c}\right).
$$
Substituting into the node-1 equation, with $(1/R_1+sC_1)=(1+sR_1C_1)/R_1$:
$$
-i_s=-\frac{v_o}{g_mR_1R_2}\left[(1+sR_1C_1)\left(1+sR_2C_2+\frac{sR_2C}{D_c}\right)+\frac{g_mR_1R_2\,sC}{D_c}\right].
$$
Multiplying the bracket by $D_c$ and inverting:
$$
\frac{v_o}{i_s}=\frac{g_mR_1R_2\left(1+sC/g_{m11}\right)}{(1+sR_1C_1)\left[(1+sR_2C_2)(1+sC/g_{m11})+sR_2C\right]+g_mR_1R_2\,sC} .
$$
A symbolic check confirms this result.

### Step 4 — The zero and the limit

The numerator vanishes at
$$
1+\frac{sC}{g_{m11}}=0\quad\Rightarrow\quad s=-\frac{g_{m11}}{C},
$$
a zero in the left half-plane. It comes from the feedback path. Since $v_o=i_cD_c/(sC)$, at $s=-g_{m11}/C$ the circuit can carry a finite current $i_c$ while $v_o=0$, which is exactly what a zero of $v_o/i_s$ means. The denominator is now third order, so the finite input impedance also adds a third pole. As $g_{m11}\to\infty$, $C/g_{m11}\to0$, and the expression reduces to the given second-order result
$$
\frac{v_o}{i_s}=\frac{g_mR_1R_2}{1+s\left[R_1C_1+R_2(C+C_2)+g_mR_1R_2C\right]+s^2R_1R_2C_1(C_2+C)},
$$
with no zero.
