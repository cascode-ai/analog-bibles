# Detailed solution - A087

Draw the small-signal circuit, choose the transconductance $g_{m2}$ of M2 as the controlled source $k$ of Blackman's formula, and compute the output resistance with $g_{m2}=0$ and the two return ratios (output port shorted and open). Then specialize to identical devices.

### Step 1 — Small-signal circuit

With $v_{IN}=0$, M1's gate and source are both at ac ground, so its controlled source is inactive and M1 is just $r_{ds1}$ from node X (the source of M2) to ground. The dc source $V_{GS2}$ is an ac short, so M2's gate is at the divider midpoint, $v_{g2}=v_{out}/2$ (the gate draws no current). M2 contributes $g_{m2}v_{gs2}$ from the output to X, with $v_{gs2}=v_{g2}-v_X$, in parallel with $r_{ds2}$. The two resistors $R$ in series give $2R$ from the output to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — Output resistance with $g_{m2}=0$

With the controlled source removed, the output sees $2R$ in parallel with $r_{ds2}+r_{ds1}$:

$$
R_{out}(k=0)=2R\,\big\|\,(r_{ds1}+r_{ds2})=\frac{2R\,(r_{ds1}+r_{ds2})}{2R+r_{ds1}+r_{ds2}} .
$$

### Step 3 — Return ratio with the port shorted

Replace $g_{m2}v_{gs2}$ by an independent current $g_{m2}v_c'$ and short the output ($v_{out}=0$). Then $v_{g2}=0$, and the injected current flows into X, which sees $r_{ds1}\parallel r_{ds2}$ to ground: $v_X=g_{m2}v_c'(r_{ds1}\parallel r_{ds2})$ and $v_c=v_{g2}-v_X=-v_X$. Hence

$$
RR(\text{short})=-\frac{v_c}{v_c'}=g_{m2}\frac{r_{ds1}r_{ds2}}{r_{ds1}+r_{ds2}} .
$$

### Step 4 — Return ratio with the port open

With $i_{out}=0$, KCL at the output and at X gives

$$
\frac{v_{out}}{2R}+g_{m2}v_c'+\frac{v_{out}-v_X}{r_{ds2}}=0,\qquad
g_{m2}v_c'+\frac{v_{out}-v_X}{r_{ds2}}=\frac{v_X}{r_{ds1}} .
$$

Subtracting, $v_{out}=-2Rv_X/r_{ds1}$, so $v_c=v_{out}/2-v_X=-v_X(1+R/r_{ds1})$. Solving the second equation for $v_X$, $v_X=g_{m2}v_c'\,r_{ds1}r_{ds2}/(r_{ds1}+r_{ds2}+2R)$, and therefore

$$
RR(\text{open})=-\frac{v_c}{v_c'}=g_{m2}r_{ds2}\,\frac{r_{ds1}+R}{r_{ds1}+r_{ds2}+2R} .
$$

### Step 5 — Blackman's formula and simplification

$$
R_{out}=\Big[2R\,\big\|\,(r_{ds1}+r_{ds2})\Big]\,
\frac{1+g_{m2}r_{ds1}r_{ds2}/(r_{ds1}+r_{ds2})}{1+g_{m2}r_{ds2}(r_{ds1}+R)/(r_{ds1}+r_{ds2}+2R)} .
$$

For identical devices ($r_{ds1}=r_{ds2}=r_{ds}$, $g_{m2}=g_m$) both return ratios equal $g_mr_{ds}/2$, so they cancel:

$$
R_{out}=2R\,\big\|\,2r_{ds}=\frac{2Rr_{ds}}{R+r_{ds}},
$$

independent of $g_m$. With $g_m>g_{ds}>1/R$, i.e. $R\gg r_{ds}$,

$$
R_{out}\approx2r_{ds}.
$$

Physically, half of any output-voltage change reaches M2's gate. Since the drop across M1 equals that across M2, the source of M2 also moves by half, so $v_{gs2}$ stays at zero and M2 provides no cascode multiplication: the stack looks like $r_{ds1}+r_{ds2}$, in parallel with the divider. Treating M2's gate as an ac ground would give the ordinary cascode value $\approx g_mr_{ds}^2$, which does not apply here.
