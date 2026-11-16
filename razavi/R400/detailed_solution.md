# Detailed solution - R400

**Approach.** Reduce the CMOS inverter $M_1$–$M_2$ to one transconductance and one resistance. $C_2$ closes a shunt–shunt negative-feedback loop around it, so each impedance follows from Blackman's impedance formula; each result is then confirmed by direct KCL.

### Step 1 — Small-signal model and feedback structure

Call the tied gates node G. $M_1$ draws $g_{m1}v_G$ out of the output node, and the PMOS $M_2$ pushes $g_{m2}(0 - v_G)$ into it, i.e. also draws $g_{m2}v_G$ out; $r_{O1}$ and $r_{O2}$ both go to ac ground. The inverter is therefore a current source $G_mv_G$ pulling current out of the output, in parallel with $R$ to ground:

$$G_m = g_{m1} + g_{m2}, \qquad R = r_{O1}\parallel r_{O2} = \frac{r_{O1}r_{O2}}{r_{O1} + r_{O2}},$$

with gain $v_{out}/v_G = -G_mR$ when nothing else is attached. The gates draw no current, so only $C_1$ and $C_2$ carry current at G.

<!-- diagram: diagram-01.cir -->

$C_2$ senses $v_{out}$ and returns a current to G: shunt–shunt negative feedback around an inverting amplifier, which lowers the impedance at both ports. Each impedance follows from Blackman's formula

$$Z = Z_0\,\frac{1 + T_{sc}}{1 + T_{oc}},$$

where $Z_0$ is the port impedance with $G_m = 0$, and $T_{sc}$, $T_{oc}$ are the loop gains with the port shorted and open. A loop gain is found by replacing $G_mv_G$ with a test current $i_t$ in the same direction (out of the output node): $T = -G_mv_G/i_t$.

### Step 2 — Impedance $Z_G$ looking into node G (feedback method)

$Z_{in}$ is $C_1$ in series with the impedance $Z_G$ seen from node G into the rest of the circuit.

**$Z_0$ ($G_m = 0$).** From G we see $C_2$ in series with $R$ to ground:

$$Z_0 = \frac{1}{sC_2} + R = \frac{1 + sRC_2}{sC_2}.$$

**$T_{sc}$ (G shorted to ground).** Then $v_G = 0$, so the controlled source produces nothing: $T_{sc} = 0$.

**$T_{oc}$ (G open).** No current flows in $C_2$, so $v_G = v_{out}$. KCL at the output with the test source:

$$
\begin{aligned}
i_t + \frac{v_{out}}{R} &= 0\\
v_G = v_{out} &= -i_tR .
\end{aligned}
$$

The controlled source would deliver $G_mv_G = -G_mR\,i_t$, so $T_{oc} = -G_mv_G/i_t = G_mR$ (positive: negative feedback).

**Result.**

$$Z_G = Z_0\,\frac{1 + 0}{1 + G_mR} = \frac{1 + sRC_2}{sC_2\,(1 + G_mR)} = \frac{R}{1 + G_mR} + \frac{1}{sC_2\,(1 + G_mR)} .$$

### Step 3 — Check $Z_G$ by direct nodal analysis

Apply $v_G$ at node G. The current into G flows only through $C_2$: $i_G = sC_2(v_G - v_{out})$. KCL at the output (currents leaving through $G_mv_G$, $R$ and $C_2$):

$$
\begin{aligned}
G_mv_G + \frac{v_{out}}{R} + sC_2(v_{out} - v_G) &= 0\\
v_{out}\left(\frac1R + sC_2\right) &= v_G\,(sC_2 - G_m)\\
v_{out} &= v_G\,\frac{R\,(sC_2 - G_m)}{1 + sRC_2} .
\end{aligned}
$$

Then

$$
\begin{aligned}
i_G &= sC_2\,v_G\left[1 - \frac{R\,(sC_2 - G_m)}{1 + sRC_2}\right]\\
&= sC_2\,v_G\,\frac{1 + sRC_2 - sRC_2 + G_mR}{1 + sRC_2}\\
&= sC_2\,v_G\,\frac{1 + G_mR}{1 + sRC_2} ,
\end{aligned}
$$

so

$$Z_G = \frac{v_G}{i_G} = \frac{1 + sRC_2}{sC_2\,(1 + G_mR)},$$

identical to Step 2 (Blackman's formula makes no approximation).

### Step 4 — Input impedance $Z_{in}$

With $C_1$ in series with $Z_G$:

$$Z_{in} = \frac{1}{sC_1} + \frac{R}{1 + G_mR} + \frac{1}{sC_2\,(1 + G_mR)} .$$

- The last term is a capacitor $(1 + G_mR)\,C_2$, the **Miller effect**: the voltage across $C_2$ is $v_G - v_{out} = (1 + G_mR)\,v_G$.
- The middle term is $R/(1 + G_mR) = R\parallel(1/G_m) \approx 1/G_m$ for $G_mR \gg 1$: at high frequencies $C_2$ shorts the gates to the drains and the inverter is "diode-connected".
- So $Z_{in}$ is $C_1$ in series with a resistance of about $1/G_m$ and the Miller capacitance $(1 + G_mR)C_2$; at low frequencies it is essentially $C_1$ in series with $(1 + G_mR)C_2$.

### Step 5 — Output impedance $Z_{out}$ (feedback method)

Set $V_{in} = 0$: node G connects to ground through $C_1$ and to the output through $C_2$.

**$Z_0$ ($G_m = 0$).** From the output we see $R$ in parallel with the series pair $C_2$–$C_1$:

$$C_s = \frac{C_1C_2}{C_1 + C_2}, \qquad \frac{1}{sC_1} + \frac{1}{sC_2} = \frac{1}{sC_s}, \qquad Z_0 = R\parallel\frac{1}{sC_s} .$$

**$T_{sc}$ (output shorted).** $C_1$ and $C_2$ both go from G to ground and nothing drives G, so $v_G = 0$ and $T_{sc} = 0$.

**$T_{oc}$ (output open).** The test current $i_t$ leaving the output must be supplied by $Z_0$, so $v_{out} = -i_tZ_0$, and G is the tap of the divider $C_2$ (top), $C_1$ (bottom):

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

### Step 6 — Check $Z_{out}$ directly and simplify

Apply $v_X$ at the output with $V_{in} = 0$. The test source supplies $v_X/R$ through $R$, $G_mv_G = G_mv_X\,C_2/(C_1 + C_2)$ through the controlled source (the divider of Step 5), and $sC_sv_X$ through the series capacitors:

$$I_X = v_X\left[\frac1R + \frac{G_mC_2}{C_1 + C_2} + \frac{sC_1C_2}{C_1 + C_2}\right].$$

Over the common denominator $R(C_1 + C_2)$:

$$
\begin{aligned}
\frac{I_X}{v_X} &= \frac{(C_1 + C_2) + G_mRC_2 + sRC_1C_2}{R\,(C_1 + C_2)}\\
Z_{out} = \frac{v_X}{I_X} &= \frac{R\,(C_1 + C_2)}{C_1 + C_2 + C_2R\,(G_m + sC_1)} ,
\end{aligned}
$$

in agreement with Step 5. It is three branches in parallel:

$$Z_{out} = R\ \Big\|\ \frac{C_1 + C_2}{G_mC_2}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)} .$$

At low frequencies the capacitive branch is open, and

$$Z_{out} \approx \frac{R}{1 + G_mR\,\dfrac{C_2}{C_1 + C_2}} \approx \frac{1}{G_m}\left(1 + \frac{C_1}{C_2}\right) \quad\text{when } G_mR\,\frac{C_2}{C_1 + C_2} \gg 1 .$$

Only the fraction $C_2/(C_1 + C_2)$ of $v_{out}$ reaches the gates, so the circuit acts like a diode-connected inverter with its transconductance reduced by that factor: $R$ is divided by one plus the low-frequency loop gain $G_mR\,C_2/(C_1 + C_2)$.

### Result

With $G_m = g_{m1} + g_{m2}$ and $R = r_{O1}\parallel r_{O2}$ (inverter gain $-G_mR$):

$$Z_{in} = \frac{1}{sC_1} + \frac{R}{1 + G_mR} + \frac{1}{sC_2\,(1 + G_mR)},$$

that is, $C_1$ in series with a resistance $R/(1 + G_mR) \approx 1/G_m$ and the Miller capacitance $(1 + G_mR)C_2$.

$$Z_{out} = \frac{R\,(C_1 + C_2)}{C_1 + C_2 + C_2R\,(G_m + sC_1)} = R\ \Big\|\ \frac{C_1 + C_2}{G_mC_2}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)},$$

which at low frequencies is $R/[1 + G_mRC_2/(C_1 + C_2)]$: the open-loop $R$ divided by one plus the loop gain $G_mRC_2/(C_1 + C_2)$.

**Common mistake.** Treating $M_2$ as a passive current-source load and using only $g_{m1}$. Both gates are driven by node G, so the effective transconductance is $g_{m1} + g_{m2}$.

**Common mistake.** Writing the Miller capacitance as $G_mRC_2$ instead of $(1 + G_mR)C_2$ (the voltage across $C_2$ is $(1 + G_mR)v_G$), or ignoring the feedback and quoting $Z_{out} = R$.

**Common mistake.** Inverting the divider ratio at the output. With $V_{in} = 0$, $C_2$ runs from the output to G and $C_1$ from G to ground, so $v_G/v_{out} = C_2/(C_1 + C_2)$, not $C_1/(C_1 + C_2)$.
