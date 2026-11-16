# Detailed solution - R419

**Approach.** Trace the loop from the input node through $M_1$, the diode-connected $M_3$ (shunted by $C_1$) and the mirror device $M_2$ back to the input node, and show that the returned current is in phase with the input voltage (positive feedback). Then compute $Z_{in}$ from $Z_{in} = Z_{open}/(1 - T)$, check it by direct KCL, and examine what element $C_1$ turns into at the input: it is not actually a negative capacitance.

### Step 1 — Small-signal model

Call the input node (gate of $M_1$, drain of $M_2$, top of $I_1$) X, and the drain of $M_1$ (gates of $M_2$, $M_3$) D. With $\lambda = \gamma = 0$, the ideal $I_1$ is open and $V_{DD}$ is ac ground:

- $M_1$: a current $g_{m1}v_X$ from D to ground.
- $M_3$ (diode-connected): a conductance $g_{m3}$ from D to ac ground; with $C_1$, the admittance at D is $Y_D = g_{m3} + sC_1$.
- $M_2$: delivers $g_{m2}v_{SG2} = g_{m2}(0 - v_D)$ into X.

Nothing else is attached to X, so the open-loop impedance at X is infinite.

<!-- diagram: diagram-01.cir -->

### Step 2 — The loop and its sign

$$
\begin{aligned}
\text{KCL at D:}\quad Y_Dv_D + g_{m1}v_X &= 0\ \Longrightarrow\ v_D = -\frac{g_{m1}}{g_{m3} + sC_1}\,v_X,\\
\text{current from } M_2 \text{ into X:}\quad i_{2} &= -g_{m2}v_D = \frac{g_{m1}g_{m2}}{g_{m3} + sC_1}\,v_X .
\end{aligned}
$$

At low frequencies $i_2$ has the same sign as $v_X$: raising X makes $M_1$ pull D down, which turns $M_2$ on harder and pushes *more* current into X. This is **positive feedback**.

**Return ratio.** Place a temporary resistor $R$ from X to ground, so $Z_{open} = R$, and break the loop at the $M_2$ current: a test current $i_t$ into X gives $v_X = Ri_t$, and the loop returns $i_2 = \dfrac{g_{m1}g_{m2}}{g_{m3} + sC_1}Ri_t$ into X, *in the same direction*. With the positive-feedback sign,

$$T(s) = \frac{g_{m1}g_{m2}R}{g_{m3} + sC_1} .$$

### Step 3 — $Z_{in}$ from the feedback relation

With the returned current *adding* to the injected one,

$$Z_{in} = \frac{Z_{open}}{1 - T(s)} = \frac{R}{1 - \dfrac{g_{m1}g_{m2}R}{g_{m3} + sC_1}} = \frac{R\,(g_{m3} + sC_1)}{g_{m3} + sC_1 - g_{m1}g_{m2}R} .$$

Removing the temporary resistor ($R \to \infty$):

$$Z_{in} = \lim_{R\to\infty}\frac{g_{m3} + sC_1}{(g_{m3} + sC_1)/R - g_{m1}g_{m2}} = -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}} .$$

The complex $T(s)$ must be kept; its magnitude alone would lose the frequency-dependent term.

### Step 4 — Check by direct KCL

Apply $v_X$ and let $I_X$ be the current the test source pushes into X. The only other current into X is $i_2$, and nothing leaves (gate and ideal $I_1$):

$$
\begin{aligned}
I_X + \frac{g_{m1}g_{m2}}{g_{m3} + sC_1}\,v_X &= 0\\
I_X &= -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1}\,v_X\\
Z_{in} = \frac{v_X}{I_X} &= -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}},\qquad Y_{in} = -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1} .
\end{aligned}
$$

The test source must *absorb* current when it raises the node: the hallmark of a negative impedance.

### Step 5 — What element does $C_1$ become?

$$Z_{in} = \underbrace{-\frac{g_{m3}}{g_{m1}g_{m2}}}_{\text{negative resistance}} + \underbrace{s\left(-\frac{C_1}{g_{m1}g_{m2}}\right)}_{sL,\ L\,=\,-C_1/(g_{m1}g_{m2})} .$$

- The first term is a **negative resistance** $-\dfrac{1}{g_{m1}}\cdot\dfrac{g_{m3}}{g_{m2}}$ (for a 1:1 mirror, $-1/g_{m1}$).
- The second term is proportional to $s$: an **inductance** $L = -C_1/(g_{m1}g_{m2})$ (units F/S² = H), which is negative.

So $C_1$ becomes a **negative inductance**, not a negative capacitance: the loop acts like a gyrator that inverts the admittance at D ($g_{m3} + sC_1$) into an impedance at X, with a minus sign from the positive feedback. Its reactance $-\omega C_1/(g_{m1}g_{m2})$ is negative like a capacitor's but grows with $\omega$, whereas a capacitor's $-1/(\omega C)$ shrinks; a *negative* capacitance would have reactance $+1/(\omega|C|)$. Neither fits.

**Parallel view.** For $\omega C_1 \ll g_{m3}$:

$$Y_{in} = -\frac{g_{m1}g_{m2}}{g_{m3}}\cdot\frac{1}{1 + sC_1/g_{m3}} \approx -\frac{g_{m1}g_{m2}}{g_{m3}} + s\,\frac{g_{m1}g_{m2}C_1}{g_{m3}^2},$$

a negative conductance in parallel with a **positive** capacitance. In neither description does the circuit as drawn present a negative capacitance: $C_1$ across the diode makes the returned current *fall* with frequency, which gives an inductive term. (A negative capacitance would need the returned current to *grow* as $s\,v_X$, e.g. with the capacitor coupling the input-driven signal into a low-impedance node.)

### Result

$$Z_{in} = -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}} = -\frac{g_{m3}}{g_{m1}g_{m2}} - \frac{sC_1}{g_{m1}g_{m2}},\qquad Y_{in} = -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1}.$$

The positive feedback (loop transmission $T = g_{m1}g_{m2}R/(g_{m3} + sC_1)$ with a temporary resistor $R$ at the input, $Z_{in} = R/(1 - T)$ for $R \to \infty$) produces a negative resistance $-g_{m3}/(g_{m1}g_{m2})$ in series with a **negative inductance** $L = -C_1/(g_{m1}g_{m2})$. The circuit as drawn does not produce a negative capacitance: the component created from $C_1$ has a reactance proportional to $\omega$. Equivalently, at low frequencies the input is a negative conductance $-g_{m1}g_{m2}/g_{m3}$ in parallel with a positive capacitance $g_{m1}g_{m2}C_1/g_{m3}^2$.

**Common mistake.** Assuming negative feedback and obtaining a positive $Z_{in}$. $M_1$ inverts once and the PMOS mirror inverts again, so the current returned to X is in phase with $v_X$.

**Common mistake.** Missing that $M_3$ is diode-connected. Leaving out its $g_{m3}$ loses the negative resistance and changes the frequency dependence.

**Common mistake.** Calling $-sC_1/(g_{m1}g_{m2})$ a "negative capacitance $C_1/(g_{m1}g_{m2})$". A term proportional to $s$ in an *impedance* is an inductance (in henries), here a negative one.
