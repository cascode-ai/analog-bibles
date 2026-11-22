# Detailed solution - G431

Refer every device's noise to the DM input through the DM half circuit. With the output shorted, the noise of each device produces an output current; dividing by the input pair's transconductance gives an equivalent gate voltage. With $r_o\to\infty$, only $M_1$, $M_{11}$ and $M_3$ contribute: the cascodes pass their source currents unchanged, and the tail noise is common mode. Finally add the two uncorrelated half circuits.

### Step 1 — Which devices contribute in the DM half circuit

Short the output and look at the current delivered to it.
- $M_1$: its gate noise $\overline{v_1^2}$ produces $g_{m1}v_1$ at the folding node, which $M_{1A}$ passes to the output.
- $M_{11}$: a noise current $g_{m11}v_{11}$ into the folding node; with $r_o\to\infty$ it also flows through $M_{1A}$ to the output.
- $M_3$: a noise current $g_{m3}v_3$ that $M_{3A}$ passes to the output.
- Cascodes $M_{1A}$, $M_{3A}$: with $r_o\to\infty$ their sources see only current sources, so their own noise voltage changes no current; they contribute nothing.
- Tail $M_5$, $M_6$: their noise splits equally between the two halves and is common mode; it does not appear in $v_{od}$.

### Step 2 — Half-circuit input-referred noise

The three uncorrelated output currents add in power. Dividing by $g_{m1}^2$:

$$
\frac{\overline{v_{eqH}^2}}{\Delta f}=\frac{\overline{v_1^2}}{\Delta f}+\left(\frac{g_{m11}}{g_{m1}}\right)^2\frac{\overline{v_{11}^2}}{\Delta f}+\left(\frac{g_{m3}}{g_{m1}}\right)^2\frac{\overline{v_3^2}}{\Delta f},
\qquad \frac{g_{m11}}{g_{m1}}=1.6,\quad \frac{g_{m3}}{g_{m1}}=1.2 .
$$

### Step 3 — Flicker noise of each device

Each device's flicker term is $\overline{v_i^2}/\Delta f=K_f/(WLC_{ox}f)$, with gate area $WL=m(40\ \mu\mathrm m)(0.3\ \mu\mathrm m)=12m\ \mu\mathrm m^2$. For $M_1$ ($m=10$, $WL=120\ \mu\mathrm m^2$):

$$
\frac{\overline{v_1^2}}{\Delta f}=\frac{4.8\times10^{-25}\ \mathrm{V^2F}}{(6.9\times10^{-15}\ \mathrm{F/\mu m^2})(120\ \mu\mathrm m^2)f}=\frac{5.80\times10^{-13}}{f}\ \mathrm{V^2/Hz}.
$$

| Device | Type | $WL$ (μm²) | $\overline{v_i^2}/\Delta f$ (V²/Hz) | Weight | Contribution (V²/Hz) |
|---|---|---|---|---|---|
| $M_1$ | NMOS | 120 | $5.80\times10^{-13}/f$ | 1 | $5.80\times10^{-13}/f$ |
| $M_{11}$ | PMOS | 528 | $2.28\times10^{-14}/f$ | $1.6^2=2.56$ | $0.58\times10^{-13}/f$ |
| $M_3$ | NMOS | 144 | $4.83\times10^{-13}/f$ | $1.2^2=1.44$ | $6.96\times10^{-13}/f$ |

Summing,

$$
\frac{\overline{v_{eqH}^2}}{\Delta f}=\frac{(5.80+0.58+6.96)\times10^{-13}}{f}=\frac{1.33\times10^{-12}}{f}\ \mathrm{V^2/Hz}.
$$

### Step 4 — Total DM input-referred noise

The two half circuits contain different transistors, so their noise is uncorrelated and the DM input noise is twice the half-circuit value:

$$
\frac{\overline{v_{eq}^2}}{\Delta f}=2\,\frac{\overline{v_{eqH}^2}}{\Delta f}=\frac{2.67\times10^{-12}}{f}\ \mathrm{V^2/Hz}\quad(f\ \text{in Hz}).
$$

At 1 kHz this is $2.7\times10^{-15}$ V²/Hz, or 52 nV/√Hz. The NMOS current sources $M_3$, $M_4$ contribute more than the input pair: they have higher $g_m$ than $M_1$, and the NMOS $K_f$ is about six times the PMOS value. The large PMOS $M_{11}$ contributes little.
