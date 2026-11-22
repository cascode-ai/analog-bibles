# Detailed solution - G156

Find three low-frequency small-signal gains of the same circuit, each with only one source active: from the gate input, from $v_{dd}$ and from $v_{ss}$. Use the small-signal model of the transistor in saturation (body tied to source, so no $g_{mb}$): a current $g_mv_{gs}$ from drain to source in parallel with $r_o$. The key difference is that $v_{dd}$ reaches the output only through the passive divider $R$–$r_o$, whereas $v_{ss}$ moves the source and therefore changes $v_{gs}$ exactly as the input does.

### Step 1 — Signal gain

With $v_{dd}=v_{ss}=0$, the source is at ac ground and $v_{gs}=v_i$; $R$ and $r_o$ are in parallel at the output:

$$
A_{dm}=\frac{v_o}{v_i}=-g_m\left(R\parallel r_o\right).
$$

### Step 2 — Gain from $v_{dd}$

With $v_i=v_{ss}=0$, gate and source are at ac ground, so $v_{gs}=0$ and the controlled source is idle. $R$ (from $v_{dd}$) and $r_o$ (to ground) form a divider:

$$
A^+=\frac{v_o}{v_{dd}}=\frac{r_o}{R+r_o},\qquad
PSRR^+=\frac{A_{dm}}{A^+}=\frac{-g_m\dfrac{Rr_o}{R+r_o}}{\dfrac{r_o}{R+r_o}}=-g_mR .
$$

### Step 3 — Gain from $v_{ss}$

With $v_i=v_{dd}=0$, the gate is at ground and the source moves with $v_{ss}$, so $v_{gs}=-v_{ss}$. KCL at the output, summing the currents leaving the node through $R$, the controlled source and $r_o$:

$$
\frac{v_o}{R}+g_m\left(-v_{ss}\right)+\frac{v_o-v_{ss}}{r_o}=0
\ \Rightarrow\
A^-=\frac{v_o}{v_{ss}}=\left(1+g_mr_o\right)\frac{R}{R+r_o}.
$$

For $g_mr_o\gg1$ this is about $g_m(R\parallel r_o)$, as large as the signal gain. Hence

$$
PSRR^-=\frac{A_{dm}}{A^-}=\frac{-g_m\dfrac{Rr_o}{R+r_o}}{\left(1+g_mr_o\right)\dfrac{R}{R+r_o}}=-\frac{g_mr_o}{1+g_mr_o}\approx-1 .
$$

### Step 4 — Interpretation

- $|PSRR^+|=g_mR$, about the amplifier's own gain magnitude when $r_o\gg R$: a ripple on $V_{DD}$ reaches the output with roughly unity gain, while the signal is amplified by $g_mR$.
- $|PSRR^-|\approx1$ (0 dB): no rejection at all. A change of $V_{SS}$ is a change of $v_{gs}$ of opposite sign, so the transistor amplifies it like the input.

For $r_o\to\infty$: $A^+=1$, $PSRR^+=-g_mR$; $A^-=g_mR$, $|PSRR^-|=1$.
