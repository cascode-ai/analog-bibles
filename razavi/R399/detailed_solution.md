# Detailed solution - R399

**Approach.** The circuit is a common-source stage $M_1$ with capacitive shunt–shunt feedback: $C_2$ senses the output voltage and returns a current to the gate G, and $C_1$ couples the input to G. With an ideal current-source load and $\lambda = 0$, the output node has no resistive path of its own, so the loop gain is infinite. To apply feedback formulas safely we temporarily add a resistance $R_L$ at the output, use Blackman's impedance formula $Z = Z_0(1 + T_{sc})/(1 + T_{oc})$, and let $R_L \to \infty$. Each result is confirmed by direct KCL.

### Step 1 — The circuit and its small-signal model

Reading the figure: $V_{in}$ drives the gate node G of $M_1$ through $C_1$; $C_2$ connects G to the output (drain of $M_1$); the source of $M_1$ is grounded; the load is the ideal current source $I_1$ from $V_{DD}$.

**Small-signal model in words.** Nodes: in, G and out.

- $C_1$ between in and G; $C_2$ between G and out.
- The gate draws no current.
- $M_1$: a controlled current $g_{m1}v_G$ from out to ground, where $g_{m1}$ is its transconductance; no $r_O$ ($\lambda = 0$).
- $I_1$: an open circuit. (Auxiliary: a resistance $R_L$ from out to ground, eventually $R_L \to \infty$.)

<!-- diagram: diagram-01.cir -->

**Feedback topology.** $C_2$ is connected in shunt with the output (it senses $v_{out}$) and in shunt with G (it returns a current there): **shunt–shunt feedback**. Its sign is negative: $v_G\uparrow$ → $v_{out}\downarrow$ → current pulled out of G through $C_2$ → $v_G\downarrow$.

**Blackman's formula.** The impedance at a port of a feedback circuit is

$$Z = Z_0\,\frac{1 + T_{sc}}{1 + T_{oc}},$$

where $Z_0$ is the port impedance with the transistor's controlled source turned off ($g_{m1} = 0$), $T_{sc}$ is the loop gain with the port shorted, and $T_{oc}$ is the loop gain with the port open. (Loop gains are found by breaking the loop at the controlled source.)

### Step 2 — Impedance looking into the gate node G

Take the port between G and ground (excluding $C_1$).

- **$Z_0$** ($g_{m1} = 0$): from G, the path goes through $C_2$ to the output and through $R_L$ to ground: $Z_0 = \dfrac{1}{sC_2} + R_L$.
- **$T_{sc}$** (G shorted to ground): $v_G = 0$ whatever $M_1$ does, so $T_{sc} = 0$.
- **$T_{oc}$** (G open): replace $g_{m1}v_G$ by a test source $g_{m1}\cdot1$. It draws $g_{m1}$ from the output, so $v_{out} = -g_{m1}R_L$. No current flows in $C_2$ (G is open), so G follows the output: $v_G = -g_{m1}R_L$. The returned value is $-g_{m1}R_L$, so $T_{oc} = g_{m1}R_L$.

$$Z_G = \frac{1/(sC_2) + R_L}{1 + g_{m1}R_L} \;\xrightarrow{R_L\to\infty}\; \frac{1}{g_{m1}}.$$

**Direct check by KCL** (with $R_L \to \infty$). Inject a current $i$ into G.

- KCL at G: all of $i$ flows through $C_2$ toward the output: $i = sC_2(v_G - v_{out})$.
- KCL at the output: the only other element is $M_1$, so the current arriving through $C_2$ must be absorbed by it: $sC_2(v_G - v_{out}) = g_{m1}v_G$.

Therefore $i = g_{m1}v_G$ and

$$Z_G = \frac{v_G}{i} = \frac{1}{g_{m1}}\quad\text{exactly, at all frequencies.}$$

The output node simply moves to whatever voltage makes the $C_2$ current equal $g_{m1}v_G$; this is the effect of the infinite loop gain.

### Step 3 — Input impedance

Looking in from $V_{in}$, $C_1$ is in series with the gate node:

$$Z_{in} = \frac{1}{sC_1} + Z_G = \frac{1}{sC_1} + \frac{1}{g_{m1}}.$$

At low frequencies the $1/(sC_1)$ term dominates; at high frequencies the input looks like the resistance $1/g_{m1}$.

### Step 4 — Output impedance

Now set $V_{in} = 0$, so $C_1$ connects G to ground, and take the port at the output.

- **$Z_0$** ($g_{m1} = 0$): $R_L$ in parallel with the series combination of $C_2$ and $C_1$ to ground. Writing $C_s = C_1C_2/(C_1 + C_2)$ for that series capacitance:
$$Z_0 = R_L\parallel\frac{1}{sC_s} \equiv Z_p .$$
- **$T_{sc}$** (output shorted): $v_{out} = 0$, so $v_G = 0$ and $T_{sc} = 0$.
- **$T_{oc}$** (output open): a test current $g_{m1}$ drawn from the output gives $v_{out} = -g_{m1}Z_p$. The gate draws no current, so G sits on the capacitive divider:
$$v_G = \frac{C_2}{C_1 + C_2}v_{out} = \beta v_{out}, \qquad \beta = \frac{C_2}{C_1 + C_2}.$$
Hence $T_{oc} = g_{m1}\beta Z_p$.

$$Z_{out} = \frac{Z_p}{1 + g_{m1}\beta Z_p} = \frac{1}{1/Z_p + g_{m1}\beta}.$$

With $1/Z_p = 1/R_L + sC_s \to sC_s$ as $R_L \to \infty$:

$$
\begin{aligned}
Z_{out} &= \frac{1}{sC_s + g_{m1}\beta} = \frac{1}{\dfrac{sC_1C_2}{C_1 + C_2} + \dfrac{g_{m1}C_2}{C_1 + C_2}}\\
&= \frac{C_1 + C_2}{C_2\,(g_{m1} + sC_1)}.
\end{aligned}
$$

**Direct check by KCL.** Apply $v_X$ at the output and let it supply $I_X$. The gate draws no current, so $v_G = v_XC_2/(C_1 + C_2)$. The test current feeds $M_1$ and the series capacitors:

$$I_X = g_{m1}\frac{C_2}{C_1 + C_2}v_X + s\frac{C_1C_2}{C_1 + C_2}v_X = \frac{C_2(g_{m1} + sC_1)}{C_1 + C_2}v_X,$$

which gives the same $Z_{out}$. ✓

**Interpretation.** $Z_{out}$ is a resistance in parallel with a capacitance:

$$Z_{out} = \frac{1 + C_1/C_2}{g_{m1}}\ \Big\|\ \frac{1}{s\,C_1C_2/(C_1 + C_2)} .$$

The resistive part, $1/(g_{m1}\beta)$, is what an infinite open-loop resistance becomes when divided by an infinite loop gain $g_{m1}\beta R_L$. The capacitive part is the feedback network itself (the series $C_2$–$C_1$) loading the output. At low frequencies $Z_{out} \approx (1 + C_1/C_2)/g_{m1}$.

### Result

$$Z_{in} = \frac{1}{sC_1} + \frac{1}{g_{m1}}, \qquad Z_{out} = \frac{C_1 + C_2}{C_2(g_{m1} + sC_1)} = \frac{1 + C_1/C_2}{g_{m1}}\ \Big\|\ \frac{1}{s\,C_1C_2/(C_1 + C_2)},$$

i.e. $Z_{out} \approx (1 + C_1/C_2)/g_{m1}$ at low frequencies. The gate node looks exactly like $1/g_{m1}$ because the infinite loop gain forces the current through $C_2$ to equal $g_{m1}v_G$; the output resistance is $1/(g_{m1}\beta)$ with $\beta = C_2/(C_1 + C_2)$, in parallel with the series capacitance of $C_1$ and $C_2$.

**Common mistake.** Treating $C_2$ as a Miller capacitance and writing $Z_{in} = 1/(sC_1) + 1/[sC_2(1 + A)]$, or just $1/(sC_1)$. The open-loop gain here is infinite and frequency dependent through $C_2$ itself; the exact KCL shows that the gate node is resistive, $1/g_{m1}$.

**Common mistake.** Concluding that $Z_{out}$ is infinite because the load is an ideal current source and $\lambda = 0$. The feedback through $C_2$ and $C_1$ makes $M_1$ draw a current proportional to the output voltage, giving the finite resistance $(1 + C_1/C_2)/g_{m1}$.

**Common mistake.** Inverting the divider and writing $(1 + C_2/C_1)/g_{m1}$. The fraction of the output that reaches the gate is $C_2/(C_1 + C_2)$ (the larger the coupling capacitor $C_2$, the more of the output reaches G), so the resistance is $(C_1 + C_2)/(g_{m1}C_2) = (1 + C_1/C_2)/g_{m1}$.
