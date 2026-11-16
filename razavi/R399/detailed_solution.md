# Detailed solution - R399

**Approach.** $M_1$ is a common-source stage with capacitive shunt–shunt feedback: $C_2$ senses the output and returns a current to the gate, and $C_1$ couples the input to the gate. With an ideal current-source load and $\lambda = 0$ the output node has no resistive path, so the loop gain is infinite. Temporarily add a resistance $R_L$ at the output, apply Blackman's formula, let $R_L \to \infty$, and confirm each result by direct KCL.

### Step 1 — Small-signal model and method

Call the gate node G. Then:

- $C_1$ between in and G; $C_2$ between G and out; the gate draws no current;
- $M_1$: $g_{m1}v_G$ from out to ground (no $r_O$);
- $I_1$: an open circuit (auxiliary $R_L$ from out to ground, eventually $R_L \to \infty$).

<!-- diagram: diagram-01.cir -->

$C_2$ senses $v_{out}$ and returns a current to G (**shunt–shunt feedback**), and the loop is negative: $v_G\uparrow$ → $v_{out}\downarrow$ → current pulled out of G through $C_2$ → $v_G\downarrow$.

Blackman's formula gives a port impedance as

$$Z = Z_0\,\frac{1 + T_{sc}}{1 + T_{oc}},$$

with $Z_0$ the port impedance for $g_{m1} = 0$ and $T_{sc}$, $T_{oc}$ the loop gains (loop broken at the controlled source) with the port shorted and open.

### Step 2 — Impedance looking into the gate node G

For the port between G and ground (excluding $C_1$):

- $Z_0$: through $C_2$ to the output and $R_L$ to ground, $Z_0 = \dfrac{1}{sC_2} + R_L$;
- $T_{sc}$: with G shorted, $v_G = 0$ whatever $M_1$ does, so $T_{sc} = 0$;
- $T_{oc}$: a test source $g_{m1}\cdot1$ draws $g_{m1}$ from the output, so $v_{out} = -g_{m1}R_L$; with G open no current flows in $C_2$, so $v_G = -g_{m1}R_L$ and $T_{oc} = g_{m1}R_L$.

$$Z_G = \frac{1/(sC_2) + R_L}{1 + g_{m1}R_L} \;\xrightarrow{R_L\to\infty}\; \frac{1}{g_{m1}}.$$

**Direct check** ($R_L \to \infty$). A current $i$ injected into G flows through $C_2$, $i = sC_2(v_G - v_{out})$, and at the output only $M_1$ can absorb it, $sC_2(v_G - v_{out}) = g_{m1}v_G$. So $i = g_{m1}v_G$ and

$$Z_G = \frac{v_G}{i} = \frac{1}{g_{m1}}\quad\text{exactly, at all frequencies;}$$

the output simply moves until the $C_2$ current equals $g_{m1}v_G$.

### Step 3 — Input impedance

From $V_{in}$, $C_1$ is in series with the gate node:

$$Z_{in} = \frac{1}{sC_1} + Z_G = \frac{1}{sC_1} + \frac{1}{g_{m1}}.$$

At low frequencies $1/(sC_1)$ dominates; at high frequencies the input looks like $1/g_{m1}$.

### Step 4 — Output impedance

With $V_{in} = 0$ ($C_1$ from G to ground), at the output port:

- $Z_0$: $R_L$ in parallel with $C_2$ and $C_1$ in series; with $C_s = C_1C_2/(C_1 + C_2)$,
$$Z_0 = R_L\parallel\frac{1}{sC_s} \equiv Z_p ;$$
- $T_{sc}$: with the output shorted, $v_G = 0$, so $T_{sc} = 0$;
- $T_{oc}$: a test current $g_{m1}$ drawn from the output gives $v_{out} = -g_{m1}Z_p$, and G sits on the capacitive divider,
$$v_G = \frac{C_2}{C_1 + C_2}v_{out} = \beta v_{out}, \qquad \beta = \frac{C_2}{C_1 + C_2},$$
so $T_{oc} = g_{m1}\beta Z_p$.

$$Z_{out} = \frac{Z_p}{1 + g_{m1}\beta Z_p} = \frac{1}{1/Z_p + g_{m1}\beta}.$$

With $1/Z_p = 1/R_L + sC_s \to sC_s$:

$$
\begin{aligned}
Z_{out} &= \frac{1}{sC_s + g_{m1}\beta} = \frac{1}{\dfrac{sC_1C_2}{C_1 + C_2} + \dfrac{g_{m1}C_2}{C_1 + C_2}}\\
&= \frac{C_1 + C_2}{C_2\,(g_{m1} + sC_1)}.
\end{aligned}
$$

**Direct check.** With $v_X$ at the output, $v_G = v_XC_2/(C_1 + C_2)$, and the test current feeds $M_1$ and the series capacitors:

$$I_X = g_{m1}\frac{C_2}{C_1 + C_2}v_X + s\frac{C_1C_2}{C_1 + C_2}v_X = \frac{C_2(g_{m1} + sC_1)}{C_1 + C_2}v_X,$$

the same $Z_{out}$ ✓. It is a resistance in parallel with a capacitance,

$$Z_{out} = \frac{1 + C_1/C_2}{g_{m1}}\ \Big\|\ \frac{1}{s\,C_1C_2/(C_1 + C_2)} ,$$

where $1/(g_{m1}\beta)$ is the infinite open-loop resistance divided by the infinite loop gain $g_{m1}\beta R_L$, and the capacitance is the feedback network (series $C_2$–$C_1$) loading the output. At low frequencies $Z_{out} \approx (1 + C_1/C_2)/g_{m1}$.

### Result

$$Z_{in} = \frac{1}{sC_1} + \frac{1}{g_{m1}}, \qquad Z_{out} = \frac{C_1 + C_2}{C_2(g_{m1} + sC_1)} = \frac{1 + C_1/C_2}{g_{m1}}\ \Big\|\ \frac{1}{s\,C_1C_2/(C_1 + C_2)},$$

i.e. $Z_{out} \approx (1 + C_1/C_2)/g_{m1}$ at low frequencies. The gate node looks exactly like $1/g_{m1}$ because the infinite loop gain forces the current through $C_2$ to equal $g_{m1}v_G$; the output resistance is $1/(g_{m1}\beta)$ with $\beta = C_2/(C_1 + C_2)$, in parallel with the series capacitance of $C_1$ and $C_2$.

**Common mistake.** Treating $C_2$ as a Miller capacitance and writing $Z_{in} = 1/(sC_1) + 1/[sC_2(1 + A)]$, or just $1/(sC_1)$. The exact KCL shows that the gate node is resistive, $1/g_{m1}$.

**Common mistake.** Concluding that $Z_{out}$ is infinite because of the ideal load and $\lambda = 0$. The feedback makes $M_1$ draw a current proportional to the output voltage.

**Common mistake.** Inverting the divider and writing $(1 + C_2/C_1)/g_{m1}$. The fraction of the output reaching G is $C_2/(C_1 + C_2)$, so the resistance is $(1 + C_1/C_2)/g_{m1}$.
