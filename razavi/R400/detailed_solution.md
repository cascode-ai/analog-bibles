# Detailed solution - R400

**Approach.** The CMOS inverter $M_1$–$M_2$ is a high-gain inverting amplifier, and $C_2$ feeds a current from its output back to its input node. We reduce the inverter to one transconductance and one resistance, then find each impedance as "impedance without the controlled source, divided by $(1 + \text{loop gain})$" (Blackman's impedance formula), and confirm each result with a direct KCL calculation.

### Step 1 — Small-signal model of the inverter

Reading the figure: the gates of $M_1$ (NMOS, source at ground) and $M_2$ (PMOS, source at $V_{DD}$) are tied together; call this node G. The drains are tied together at $V_{out}$. $C_1$ connects $V_{in}$ to G, and $C_2$ connects G to $V_{out}$.

In the small-signal model $V_{DD}$ and ground are both ac ground. Let $v_G$ be the small-signal voltage of node G.

- $M_1$ conducts a drain current $g_{m1}v_G$ that flows **out of** the output node toward ground, and its output resistance $r_{O1}$ connects the output to ground.
- $M_2$ (PMOS) conducts a current $g_{m2}v_{SG} = g_{m2}(0 - v_G)$ **into** the output node. That is the same as a current $g_{m2}v_G$ flowing **out of** the output node. Its output resistance $r_{O2}$ connects the output to ac ground ($V_{DD}$).

Both controlled sources and both resistances are in parallel, so the inverter reduces to

$$G_m = g_{m1} + g_{m2}, \qquad R = r_{O1}\parallel r_{O2} = \frac{r_{O1}r_{O2}}{r_{O1} + r_{O2}},$$

namely a current source $G_mv_G$ pulling current out of the output node, in parallel with $R$ to ground. With nothing else attached, the inverter's voltage gain is $v_{out}/v_G = -G_mR$. The gates draw no current, so the only element that carries current into or out of node G is a capacitor ($C_1$ or $C_2$).

<!-- diagram: diagram-01.cir -->

The equivalent circuit is: $V_{in}$ → $C_1$ → node G; $C_2$ from G to the output; and at the output, $G_mv_G$ and $R$ to ground.

### Step 2 — The feedback structure and the formula we use

$C_2$ **senses the output voltage** (it is connected across the output, a shunt connection) and **returns a current to node G** (again a shunt connection). This is shunt–shunt feedback around an inverting amplifier, so it is negative feedback. Shunt connections **lower** the impedance seen at the node where they are made, by the factor $(1 + \text{loop gain})$.

To apply this exactly we use Blackman's impedance formula for the impedance $Z$ seen at a port:

$$Z = Z_0\,\frac{1 + T_{sc}}{1 + T_{oc}} .$$

- $Z_0$ is the port impedance with the controlled source set to zero ($G_m = 0$).
- $T_{sc}$ is the loop gain (return ratio) with the port **short-circuited**.
- $T_{oc}$ is the loop gain with the port **open-circuited**.

To find a loop gain we replace the controlled source $G_mv_G$ by an independent test current $i_t$ in the same direction (out of the output node), compute the resulting $v_G$, and take $T = -G_mv_G/i_t$.

### Step 3 — Impedance $Z_G$ looking into node G (feedback method)

$Z_{in}$ consists of $C_1$ in series with whatever is seen looking from node G into the rest of the circuit. Call that impedance $Z_G$.

**$Z_0$ (with $G_m = 0$).** From G we see $C_2$ in series with $R$ to ground:

$$Z_0 = \frac{1}{sC_2} + R = \frac{1 + sRC_2}{sC_2}.$$

**$T_{sc}$ (node G shorted to ground).** Then $v_G = 0$, so the controlled source produces nothing whatever $i_t$ is:

$$T_{sc} = 0 .$$

**$T_{oc}$ (node G open).** Only $C_2$ is connected to G, and an open node accepts no current, so no current flows in $C_2$ and $v_G = v_{out}$. KCL at the output node with the test source:

$$
\begin{aligned}
i_t + \frac{v_{out}}{R} &= 0\\
v_{out} &= -i_tR\\
v_G &= v_{out} = -i_tR .
\end{aligned}
$$

The controlled source would deliver $G_mv_G = -G_mR\,i_t$, so

$$T_{oc} = -\frac{G_mv_G}{i_t} = G_mR .$$

$T_{oc}$ is positive, which confirms that the feedback is negative.

**Result.**

$$Z_G = Z_0\,\frac{1 + 0}{1 + G_mR} = \frac{1 + sRC_2}{sC_2\,(1 + G_mR)} = \frac{R}{1 + G_mR} + \frac{1}{sC_2\,(1 + G_mR)} .$$

### Step 4 — Check $Z_G$ by direct nodal analysis

Apply a test voltage $v_G$ at node G and find the current $i_G$ that flows into G. The only path is through $C_2$, so $i_G = sC_2(v_G - v_{out})$.

**KCL at the output node** (currents leaving the node through $G_mv_G$, through $R$, and through $C_2$ toward G):

$$
\begin{aligned}
G_mv_G + \frac{v_{out}}{R} + sC_2(v_{out} - v_G) &= 0\\
v_{out}\left(\frac1R + sC_2\right) &= v_G\,(sC_2 - G_m)\\
v_{out} &= v_G\,\frac{R\,(sC_2 - G_m)}{1 + sRC_2} .
\end{aligned}
$$

**Current into G:**

$$
\begin{aligned}
i_G &= sC_2\,v_G\left[1 - \frac{R\,(sC_2 - G_m)}{1 + sRC_2}\right]\\
&= sC_2\,v_G\,\frac{1 + sRC_2 - sRC_2 + G_mR}{1 + sRC_2}\\
&= sC_2\,v_G\,\frac{1 + G_mR}{1 + sRC_2} .
\end{aligned}
$$

Therefore

$$Z_G = \frac{v_G}{i_G} = \frac{1 + sRC_2}{sC_2\,(1 + G_mR)},$$

which is identical to Step 3. (The feedback result is exact here because Blackman's formula makes no approximation.)

### Step 5 — Input impedance $Z_{in}$

$C_1$ is in series with $Z_G$, so

$$Z_{in} = \frac{1}{sC_1} + \frac{R}{1 + G_mR} + \frac{1}{sC_2\,(1 + G_mR)} .$$

**Interpretation.**

- The last term is the impedance of a capacitor $(1 + G_mR)\,C_2$: this is the **Miller effect**. A voltage change $v_G$ at the gate produces $-G_mR\,v_G$ at the output, so the voltage across $C_2$ is $(1 + G_mR)$ times larger than $v_G$ and $C_2$ draws $(1 + G_mR)$ times more current.
- The middle term is $R/(1 + G_mR) = R\parallel(1/G_m) \approx 1/G_m$ for $G_mR \gg 1$. At high frequencies $C_2$ is a short, which ties the gates to the drains and makes the inverter "diode-connected", and a diode-connected device looks like $1/G_m$.
- So $Z_{in}$ is $C_1$ in series with a resistance of about $1/G_m$ and the Miller capacitance $(1 + G_mR)C_2$. At low frequencies it is essentially $C_1$ in series with $(1 + G_mR)C_2$.

### Step 6 — Output impedance $Z_{out}$ (feedback method)

Set $V_{in} = 0$. The left plate of $C_1$ is then grounded, so node G connects to ground through $C_1$ and to the output through $C_2$.

**$Z_0$ (with $G_m = 0$).** From the output we see $R$ in parallel with the series pair $C_2$–$C_1$. The series combination of two capacitors is

$$C_s = \frac{C_1C_2}{C_1 + C_2}, \qquad \frac{1}{sC_1} + \frac{1}{sC_2} = \frac{1}{sC_s},$$

so

$$Z_0 = R\parallel\frac{1}{sC_s} .$$

**$T_{sc}$ (output shorted to ground).** Then both $C_1$ and $C_2$ go from G to ground, nothing drives G, and $v_G = 0$, so $T_{sc} = 0$.

**$T_{oc}$ (output open).** The test current $i_t$ leaves the output node and must be supplied by $Z_0$, so $v_{out} = -i_tZ_0$. G sits at the middle of the capacitive divider $C_2$ (top) and $C_1$ (bottom):

$$v_G = v_{out}\,\frac{1/(sC_1)}{1/(sC_1) + 1/(sC_2)} = v_{out}\,\frac{C_2}{C_1 + C_2} .$$

Hence

$$
\begin{aligned}
G_mv_G &= -i_t\,G_mZ_0\,\frac{C_2}{C_1 + C_2}\\
T_{oc} &= G_mZ_0\,\frac{C_2}{C_1 + C_2} .
\end{aligned}
$$

**Result.**

$$
\begin{aligned}
Z_{out} &= \frac{Z_0}{1 + G_mZ_0\,C_2/(C_1 + C_2)}\\
&= \frac{1}{1/Z_0 + G_mC_2/(C_1 + C_2)}\\
&= \frac{1}{\dfrac1R + sC_s + \dfrac{G_mC_2}{C_1 + C_2}} .
\end{aligned}
$$

### Step 7 — Check $Z_{out}$ directly and simplify

Apply $v_X$ at the output with $V_{in} = 0$ and add the currents $I_X$ drawn from the test source:

- through $R$: $v_X/R$;
- through the controlled source: $G_mv_G = G_mv_X\,C_2/(C_1 + C_2)$ (the divider of Step 6);
- through the series capacitors $C_2$–$C_1$: $sC_sv_X$.

$$I_X = v_X\left[\frac1R + \frac{G_mC_2}{C_1 + C_2} + \frac{sC_1C_2}{C_1 + C_2}\right].$$

Put everything over the common denominator $R(C_1 + C_2)$:

$$
\begin{aligned}
\frac{I_X}{v_X} &= \frac{(C_1 + C_2) + G_mRC_2 + sRC_1C_2}{R\,(C_1 + C_2)}\\
Z_{out} = \frac{v_X}{I_X} &= \frac{R\,(C_1 + C_2)}{C_1 + C_2 + C_2R\,(G_m + sC_1)} .
\end{aligned}
$$

This agrees with Step 6. It is three branches in parallel:

$$Z_{out} = R\ \Big\|\ \frac{C_1 + C_2}{G_mC_2}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)} .$$

At low frequencies the capacitive branch is an open circuit, and

$$Z_{out} \approx \frac{R}{1 + G_mR\,\dfrac{C_2}{C_1 + C_2}} \approx \frac{1}{G_m}\left(1 + \frac{C_1}{C_2}\right) \quad\text{when } G_mR\,\frac{C_2}{C_1 + C_2} \gg 1 .$$

Intuition: only the fraction $C_2/(C_1 + C_2)$ of the output voltage reaches the gates, so the circuit behaves like a diode-connected inverter whose transconductance is reduced by that factor. The open-loop resistance $R$ is divided by $1 + G_mR\,C_2/(C_1 + C_2)$, the low-frequency loop gain.

### Result

With $G_m = g_{m1} + g_{m2}$ and $R = r_{O1}\parallel r_{O2}$ (inverter gain $-G_mR$):

$$Z_{in} = \frac{1}{sC_1} + \frac{R}{1 + G_mR} + \frac{1}{sC_2\,(1 + G_mR)},$$

that is, $C_1$ in series with a resistance $R/(1 + G_mR) \approx 1/G_m$ and the Miller capacitance $(1 + G_mR)C_2$.

$$Z_{out} = \frac{R\,(C_1 + C_2)}{C_1 + C_2 + C_2R\,(G_m + sC_1)} = R\ \Big\|\ \frac{C_1 + C_2}{G_mC_2}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)},$$

which at low frequencies is $R/[1 + G_mRC_2/(C_1 + C_2)]$: the open-loop $R$ divided by one plus the loop gain $G_mRC_2/(C_1 + C_2)$.

**Common mistake.** Treating $M_2$ as a passive current-source load and using only $g_{m1}$. Both gates are driven by node G, so both devices convert $v_G$ into output current, and the effective transconductance is $g_{m1} + g_{m2}$.

**Common mistake.** Writing the Miller capacitance as $G_mRC_2$ instead of $(1 + G_mR)C_2$, or ignoring the feedback altogether and quoting $Z_{out} = R$. The voltage across $C_2$ is $v_G - v_{out} = (1 + G_mR)v_G$, and at the output the divider returns part of $v_{out}$ to the gates, which lowers the impedance.

**Common mistake.** Inverting the divider ratio at the output. With $V_{in} = 0$, $C_2$ is the "upper" capacitor (output to G) and $C_1$ the "lower" one (G to ground), so $v_G/v_{out} = C_2/(C_1 + C_2)$, not $C_1/(C_1 + C_2)$.
