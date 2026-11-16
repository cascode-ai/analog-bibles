# Detailed solution - R419

**Approach.** Trace the loop from the input node through $M_1$, the diode-connected $M_3$ (shunted by $C_1$) and the mirror device $M_2$ back to the input node, and show that the returned current is in phase with the input voltage (positive feedback). Then compute $Z_{in}$ with the feedback relation $Z_{in} = Z_{open}/(1 - T)$ and check it by direct KCL. Finally, we examine what kind of element $C_1$ turns into at the input; it is not actually a negative capacitance.

### Step 1 — Reading the circuit

- The input node X is the gate of $M_1$, the drain of $M_2$, and the top of the ideal current source $I_1$.
- $M_1$ (NMOS, source at ground) has its drain at node D.
- $M_3$ (PMOS, source at $V_{DD}$) has its gate and drain both at D, so it is **diode-connected**. $C_1$ goes from D to ground.
- $M_2$ (PMOS, source at $V_{DD}$) has its gate at D, so $M_2$ and $M_3$ form a current mirror whose output (the drain of $M_2$) is the input node X.

### Step 2 — Small-signal model

With $\lambda = \gamma = 0$, the ideal $I_1$ is an open circuit and $V_{DD}$ is ac ground.

- $M_1$: a current $g_{m1}v_X$ flowing from D to ground.
- $M_3$ (diode): a conductance $g_{m3}$ from D to ac ground; together with $C_1$ the admittance at D is $Y_D = g_{m3} + sC_1$.
- $M_2$: it delivers a current $g_{m2}v_{SG2} = g_{m2}(0 - v_D)$ into node X.
- Node X has nothing else attached (gate of $M_1$, ideal $I_1$), so the "open-loop" impedance at X is infinite.

<!-- diagram: diagram-01.cir -->

### Step 3 — The loop and its sign

Follow a voltage $v_X$ around the loop:

$$
\begin{aligned}
\text{KCL at D:}\quad Y_Dv_D + g_{m1}v_X &= 0\ \Longrightarrow\ v_D = -\frac{g_{m1}}{g_{m3} + sC_1}\,v_X,\\
\text{current from } M_2 \text{ into X:}\quad i_{2} &= -g_{m2}v_D = \frac{g_{m1}g_{m2}}{g_{m3} + sC_1}\,v_X .
\end{aligned}
$$

At low frequencies $i_2$ has the same sign as $v_X$: raising X makes $M_1$ pull D down, which turns $M_2$ on harder and pushes *more* current into X, raising it further. This is **positive feedback**: it reinforces the voltage at the input instead of opposing it.

**Return ratio.** To use a feedback formula, place a temporary resistor $R$ from X to ground, so that the open-loop impedance is $Z_{open} = R$. Break the loop at the $M_2$ current: inject a test current $i_t$ into X, so $v_X = Ri_t$, and the loop returns $i_2 = \dfrac{g_{m1}g_{m2}}{g_{m3} + sC_1}Ri_t$ into X, *in the same direction*. The loop transmission (with positive-feedback sign) is

$$T(s) = \frac{g_{m1}g_{m2}R}{g_{m3} + sC_1} .$$

### Step 4 — $Z_{in}$ from the feedback relation

For shunt feedback at a node, with a returned current that *adds* to the injected one, the closed-loop impedance is

$$Z_{in} = \frac{Z_{open}}{1 - T(s)} = \frac{R}{1 - \dfrac{g_{m1}g_{m2}R}{g_{m3} + sC_1}} = \frac{R\,(g_{m3} + sC_1)}{g_{m3} + sC_1 - g_{m1}g_{m2}R} .$$

Now remove the temporary resistor, i.e. let $R \to \infty$. Divide numerator and denominator by $R$:

$$Z_{in} = \lim_{R\to\infty}\frac{g_{m3} + sC_1}{(g_{m3} + sC_1)/R - g_{m1}g_{m2}} = -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}} .$$

The complex $T(s)$ must be kept here; using only its magnitude would lose the frequency-dependent term.

### Step 5 — Check by direct KCL

Apply a test voltage $v_X$ and let $I_X$ be the current the test source pushes into X. The only other current entering X is $i_2$ from $M_2$, and nothing leaves (gate and ideal $I_1$), so KCL at X gives

$$
\begin{aligned}
I_X + \frac{g_{m1}g_{m2}}{g_{m3} + sC_1}\,v_X &= 0\\
I_X &= -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1}\,v_X\\
Z_{in} = \frac{v_X}{I_X} &= -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}},\qquad Y_{in} = -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1} .
\end{aligned}
$$

The test source has to *absorb* current when it raises the node: the hallmark of a negative impedance.

### Step 6 — What element does $C_1$ become?

Split $Z_{in}$ into two series terms:

$$Z_{in} = \underbrace{-\frac{g_{m3}}{g_{m1}g_{m2}}}_{\text{negative resistance}} + \underbrace{s\left(-\frac{C_1}{g_{m1}g_{m2}}\right)}_{sL,\ L\,=\,-C_1/(g_{m1}g_{m2})} .$$

- The first term is a **negative resistance** $-\dfrac{1}{g_{m1}}\cdot\dfrac{g_{m3}}{g_{m2}}$ (for a 1:1 mirror, $-1/g_{m1}$).
- The second term is proportional to $s$, so it is the impedance of an **inductance** $L = -C_1/(g_{m1}g_{m2})$, which is negative. Its units are F/S² = H.

So the component created from $C_1$ is a **negative inductance**, not a negative capacitance. The loop acts like a gyrator, which inverts the admittance at D ($g_{m3} + sC_1$) into an impedance at X, with a minus sign from the positive feedback. Its reactance, $-\omega C_1/(g_{m1}g_{m2})$, is negative as a capacitor's would be, but it grows in proportion to $\omega$, whereas a capacitor's reactance $-1/(\omega C)$ shrinks with $\omega$. A *negative* capacitance would have reactance $+1/(\omega|C|)$. Neither description fits.

**Parallel (admittance) view.** At low frequencies, $\omega C_1 \ll g_{m3}$, expand $Y_{in}$:

$$Y_{in} = -\frac{g_{m1}g_{m2}}{g_{m3}}\cdot\frac{1}{1 + sC_1/g_{m3}} \approx -\frac{g_{m1}g_{m2}}{g_{m3}} + s\,\frac{g_{m1}g_{m2}C_1}{g_{m3}^2},$$

i.e. a negative conductance in parallel with a **positive** capacitance. So in neither the series nor the parallel description does the circuit as drawn present a negative capacitance. The premise that it does is not borne out by the analysis: $C_1$, placed across the diode-connected device, makes the returned current *fall* with frequency, which yields an inductive (here negative-inductive) term. (A negative capacitance would require the returned current to *grow* in proportion to $s\,v_X$, for example with the capacitor coupling the input-driven signal into a low-impedance node.)

### Result

$$Z_{in} = -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}} = -\frac{g_{m3}}{g_{m1}g_{m2}} - \frac{sC_1}{g_{m1}g_{m2}},\qquad Y_{in} = -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1}.$$

The positive feedback (loop transmission $T = g_{m1}g_{m2}R/(g_{m3} + sC_1)$ with a temporary resistor $R$ at the input, $Z_{in} = R/(1 - T)$ for $R \to \infty$) produces a negative resistance $-g_{m3}/(g_{m1}g_{m2})$ in series with a **negative inductance** $L = -C_1/(g_{m1}g_{m2})$. The circuit as drawn does not produce a negative capacitance: the component created from $C_1$ has a reactance proportional to $\omega$. Equivalently, at low frequencies the input is a negative conductance $-g_{m1}g_{m2}/g_{m3}$ in parallel with a positive capacitance $g_{m1}g_{m2}C_1/g_{m3}^2$.

**Common mistake.** Assuming negative feedback and obtaining a positive $Z_{in}$. Tracing the signal shows that $M_1$ inverts once and the PMOS mirror $M_2$ inverts again, so the current returned to X is in phase with $v_X$: the feedback is positive, and the impedance is negative.

**Common mistake.** Missing that $M_3$ is diode-connected. Its gate and drain are both at D, so it presents a conductance $g_{m3}$ in parallel with $C_1$; leaving out $g_{m3}$ loses the negative resistance and changes the frequency dependence.

**Common mistake.** Calling the term $-sC_1/(g_{m1}g_{m2})$ a "negative capacitance $C_1/(g_{m1}g_{m2})$". A term proportional to $s$ in an *impedance* is an inductance (its units are henries), and here it is a negative one.
