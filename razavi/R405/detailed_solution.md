# Detailed solution - R405

**Approach.** Model each stage of [Fig. 1] as a transconductor whose two outputs are loaded by $R_0$ to ground. $G_{m2}$ turns the input voltage into a voltage across its loads ($R_0\parallel C_1$), and $G_{m1}$ senses that output and injects a current back into the input nodes that opposes the input. This shunt feedback divides the open-loop input resistance by $1 + T(s)$; we find $Z_{in}$ by KCL on a differential half circuit.

### Step 1 — Stage model and loop polarity

For a differential input $v_d$, each output node of a stage receives $\mp G_mv_d/2$ and is loaded by $R_0$, so $v_{out,d} = -G_mR_0\,v_d$. Name the input terminals of Fig. 2 A (top) and B (bottom) and the outputs $O_1$ (top) and $O_2$ (bottom). Each output node has $R_0$ and $C_1$ to ground; each of A and B has $R_0$ to ground (the output resistance of $G_{m1}$).

Raising $v_A$ (and lowering $v_B$) makes $G_{m2}$ pull $O_1$ down and $O_2$ up; $G_{m1}$ then pulls current *out of* A and pushes current into B, opposing the input. The loop is negative, and $G_{m1}$ returns a **current** to the input nodes (shunt mixing), which lowers the input impedance.

### Step 2 — Differential half circuit

Drive a test current $I_t$ into A and out of B, so that $v_A = +v_{in}/2$, $v_B = -v_{in}/2$ and, by symmetry, $v_{O2} = -v_{O1}$. Then:

- **Node A:** $I_t$ flows in, $R_0$ goes to ground, and $G_{m1}$ injects $G_{m1}\dfrac{v_{O1} - v_{O2}}{2} = G_{m1}v_{O1}$.
- **Node $O_1$:** $R_0$ and $C_1$ go to ground, and $G_{m2}$ draws out $G_{m2}\dfrac{v_A - v_B}{2} = G_{m2}v_A$.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL equations

With the load impedance at each output

$$Z(s) = R_0\ \Big\|\ \frac{1}{sC_1} = \frac{R_0}{1 + sR_0C_1} ,$$

**KCL at $O_1$** (the current extracted by $G_{m2}$ must come from the load):

$$
\begin{aligned}
\frac{v_{O1}}{Z} &= -G_{m2}v_A\\
v_{O1} &= -G_{m2}Z\,v_A .
\end{aligned}
$$

**KCL at A:**

$$I_t + G_{m1}v_{O1} = \frac{v_A}{R_0} .$$

**Substitute $v_{O1}$:**

$$
\begin{aligned}
I_t - G_{m1}G_{m2}Z\,v_A &= \frac{v_A}{R_0}\\
I_t &= v_A\left(\frac{1}{R_0} + G_{m1}G_{m2}Z\right)\\
\frac{v_A}{I_t} &= \frac{R_0}{1 + G_{m1}G_{m2}R_0Z} .
\end{aligned}
$$

### Step 4 — Differential input impedance

With $v_{in} = v_A - v_B = 2v_A$:

$$Z_{in} = \frac{v_{in}}{I_t} = \frac{2R_0}{1 + T(s)}, \qquad T(s) = G_{m1}G_{m2}R_0Z = \frac{G_{m1}G_{m2}R_0^2}{1 + sR_0C_1} ,$$

the open-loop $2R_0$ divided by one plus the loop gain, which is $G_{m2}Z$ (input to output, per side) times $G_{m1}R_0$ (output back to input). Inserting $Z(s)$ and multiplying through by $1 + sR_0C_1$:

$$Z_{in} = \frac{2R_0}{1 + \dfrac{G_{m1}G_{m2}R_0^2}{1 + sR_0C_1}} = \frac{2R_0\,(1 + sR_0C_1)}{1 + G_{m1}G_{m2}R_0^2 + sR_0C_1} .$$

**Equivalent network.** The admittance is

$$\frac{1}{Z_{in}} = \frac{1}{2R_0} + \frac{G_{m1}G_{m2}R_0}{2(1 + sR_0C_1)} = \frac{1}{2R_0} + \frac{1}{\dfrac{2}{G_{m1}G_{m2}R_0} + s\dfrac{2C_1}{G_{m1}G_{m2}}} ,$$

so

$$Z_{in} = 2R_0\ \Big\|\ \left[\frac{2}{G_{m1}G_{m2}R_0} + s\,\frac{2C_1}{G_{m1}G_{m2}}\right],$$

i.e. $2R_0$ in parallel with a small resistor in series with an **inductor** $L = 2C_1/(G_{m1}G_{m2})$. The two transconductors and $C_1$ form a *gyrator*: a capacitor at one port appears as an inductor at the other.

### Step 5 — Sketch of $|Z_{in}|$

- **Low frequencies:** $Z_{in} = \dfrac{2R_0}{1 + G_{m1}G_{m2}R_0^2} \approx \dfrac{2}{G_{m1}G_{m2}R_0}$ (each stage has gain $G_mR_0 \gg 1$), very small because the loop gain is large.
- **Zero** at $\omega_z = \dfrac{1}{R_0C_1}$, where $C_1$ starts to short the output loads and the loop gain begins to fall.
- **Between the zero and the pole** $|Z_{in}|$ rises at **+20 dB/decade**, like the inductor: $|Z_{in}| \approx \omega L$.
- **Pole** at $\omega_p = \dfrac{1 + G_{m1}G_{m2}R_0^2}{R_0C_1} \approx \dfrac{G_{m1}G_{m2}R_0}{C_1}$, where the loop gain has fallen to about 1.
- **High frequencies:** $Z_{in} \to 2R_0$: $C_1$ shorts the outputs, $G_{m1}$ receives no signal and the feedback is gone.

Normalized example with $G_{m1}G_{m2}R_0^2 = 99$ (plateaus a factor of 100 apart):

| $\omega R_0C_1$ | $\lvert Z_{in}\rvert/(2R_0)$ | region |
|---|---|---|
| 0.1 | 0.010 | low plateau $\approx 2/(G_{m1}G_{m2}R_0)$ |
| 1 | 0.014 | zero $\omega_z$ (+3 dB) |
| 10 | 0.10 | +20 dB/dec, inductive |
| 100 | 0.71 | pole $\omega_p$ (−3 dB from top) |
| 1000 | 0.995 | high plateau $2R_0$ |

The feedback lowers $Z_{in}$ by $1 + T(s)$, and $T(s)$ falls at 20 dB/dec above $1/(R_0C_1)$, so $Z_{in}$ climbs back toward the open-loop $2R_0$.

### Result

$$Z_{in} = \frac{2R_0\,(1 + sR_0C_1)}{1 + G_{m1}G_{m2}R_0^2 + sR_0C_1} = 2R_0\ \Big\|\ \left[\frac{2}{G_{m1}G_{m2}R_0} + s\,\frac{2C_1}{G_{m1}G_{m2}}\right]$$

(per side, i.e. from one input node to ground under differential drive, half of this: $R_0\parallel[1/(G_{m1}G_{m2}R_0) + sC_1/(G_{m1}G_{m2})]$).

$|Z_{in}|$ has a low-frequency plateau $2R_0/(1 + G_{m1}G_{m2}R_0^2) \approx 2/(G_{m1}G_{m2}R_0)$, a zero at $\omega_z = 1/(R_0C_1)$, a +20 dB/dec (inductive) rise, a pole at $\omega_p = (1 + G_{m1}G_{m2}R_0^2)/(R_0C_1) \approx G_{m1}G_{m2}R_0/C_1$, and a high-frequency plateau $2R_0$.

**Common mistake.** Ignoring the feedback and answering $Z_{in} = 2R_0$ at all frequencies. At low frequencies $Z_{in}$ is smaller than $2R_0$ by the full loop gain $1 + G_{m1}G_{m2}R_0^2$.

**Common mistake.** Drawing $|Z_{in}|$ falling with frequency because "there is a capacitor". $C_1$ sits at the *output* of $G_{m2}$ and reduces the loop gain, so $|Z_{in}|$ *rises*: the gyrator turns $C_1$ into an inductance.

**Common mistake.** Mixing the per-side and differential impedances. Each input node moves by only $v_{in}/2$ while the same $I_t$ flows, so the terminal-to-terminal impedance is twice the per-side value; either is fine if stated.
