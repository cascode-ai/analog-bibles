# Detailed solution - R204

**Approach.** In the differential half circuit the tail node P is a virtual ground. The key is the **cross-coupled** load: the gate of $M_3$ is driven by the *opposite* output, which moves by $-v_X$ for a differential signal, so seen from X, $M_3$ is a **negative** resistance $-1/g_{m3}$. KCL at X gives the gain, whose sign then needs interpreting.

### Step 1 — Small-signal model of the half circuit

Call the left output (drains of $M_1$, $M_3$; gate of $M_4$) X and the right output (drains of $M_2$, $M_4$; gate of $M_3$) Y. With $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$, symmetry gives $v_Y = -v_X$, and P stays at ac ground. At X:

- **$M_1$** (gate at $v_d/2$, source at ac ground): the current leaving X through $M_1$ is $g_{m1}v_d/2 + v_X/r_{O1}$.
- **$M_3$** (source at ac ground, drain at X, gate at Y): its drain-to-source current, leaving X, is
$$g_{m3}v_{gs3} + \frac{v_{ds3}}{r_{O3}} = g_{m3}v_Y + \frac{v_X}{r_{O3}} = -g_{m3}v_X + \frac{v_X}{r_{O3}} .$$

The term $-g_{m3}v_X$ has the "wrong" sign: when X rises, $M_3$ pushes *more* current into X. So it acts as a resistance $-1/g_{m3}$ from X to ac ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at X and the gain

The currents leaving X sum to zero:

$$g_{m1}\frac{v_d}{2} + \frac{v_X}{r_{O1}} - g_{m3}v_X + \frac{v_X}{r_{O3}} = 0 .$$

Solving:

$$
\begin{aligned}
v_X\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} - g_{m3}\right) &= -g_{m1}\frac{v_d}{2}\\
v_X &= -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} - g_{m3}}\cdot\frac{v_d}{2}.
\end{aligned}
$$

With $v_{out} = v_X - v_Y = 2v_X$:

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} - g_{m3}} = -g_{m1}\left[r_{O1}\,\Big\|\,r_{O3}\,\Big\|\left(-\frac{1}{g_{m3}}\right)\right].$$

### Step 3 — Check with the full two-node equations

Without assuming $v_Y = -v_X$, KCL at X and at Y give:

$$
\begin{aligned}
&g_{m1}\frac{v_d}{2} + \frac{v_X}{r_{O1}} + g_{m3}v_Y + \frac{v_X}{r_{O3}} = 0,\\
-&g_{m1}\frac{v_d}{2} + \frac{v_Y}{r_{O1}} + g_{m3}v_X + \frac{v_Y}{r_{O3}} = 0.
\end{aligned}
$$

**Subtracting** gives $g_{m1}v_d + (v_X - v_Y)(1/r_{O1} + 1/r_{O3} - g_{m3}) = 0$, the same differential gain. **Adding** gives $(v_X + v_Y)(1/r_{O1} + 1/r_{O3} + g_{m3}) = 0$, so $v_X + v_Y = 0$: for common-mode signals the cross-coupled pair looks like a pair of diodes ($+g_{m3}$), for differential signals like a negative resistance ($-g_{m3}$).

### Step 4 — Interpreting the result: negative resistance and instability

The denominator is the total small-signal conductance at each output:

$$G_{net} = \frac{1}{r_{O1}} + \frac{1}{r_{O3}} - g_{m3}.$$

**Normal case: $g_{m3} > 1/r_{O1} + 1/r_{O3}$**, i.e. $g_{m3}(r_{O1}\parallel r_{O3}) > 1$, almost always true since $g_mr_O$ is typically 10–100. Then $G_{net} < 0$: the differential load resistance is negative and the formula even gives a "gain" of the wrong sign. With the node capacitance $C$, a differential disturbance obeys $C\,dv_X/dt = -G_{net}v_X$ with $-G_{net} > 0$, so it **grows exponentially**; the loop $X \to M_4 \to Y \to M_3 \to X$ has gain $[g_{m3}(r_{O1}\parallel r_{O3})]^2 > 1$. The symmetric bias point is **unstable** and the circuit regenerates to one of two states: it is a **latch**, and the small-signal "gain" describes an equilibrium it cannot stay at.

*Numerical feel:* with $g_{m1} = g_{m3} = 1$ mS and $r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$:

$$
\begin{aligned}
G_{net} &= 0.02 + 0.02 - 1 = -0.96\ \mathrm{mS},\\
A_v &= -\frac{1\ \mathrm{mS}}{-0.96\ \mathrm{mS}} = +1.04\quad\text{(formal value at an unstable point)}.
\end{aligned}
$$

**Weak cross-coupled devices: $g_{m3} < 1/r_{O1} + 1/r_{O3}$.** $G_{net}$ is small and positive, the circuit is stable, and the gain is very large because the negative resistance cancels most of the output conductance. For example, $g_{m3} = 0.03$ mS gives $G_{net} = 0.01$ mS and $A_v = -1\ \mathrm{mS}/0.01\ \mathrm{mS} = -100$. Only here is the formula a meaningful amplifier gain.

### Result

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} - g_{m3}} = -g_{m1}\left[r_{O1}\,\Big\|\,r_{O3}\,\Big\|\left(-\frac{1}{g_{m3}}\right)\right].$$

For differential signals the right output moves by $-v_X$, so $M_3$ (gate at the right output) injects $+g_{m3}v_X$ into the left node: the cross-coupled pair presents a negative resistance $-1/g_{m3}$ per side.

Normally $g_{m3} > 1/r_{O1} + 1/r_{O3}$. The total differential load resistance is then negative, the "gain" changes sign, and the symmetric bias point is unstable (the circuit latches). The formula is a meaningful small-signal gain, a very large one, only if $g_{m3} < 1/r_{O1} + 1/r_{O3}$.

**Common mistake.** Treating the cross-coupled devices as diode loads, $-g_{m1}(r_{O1}\parallel r_{O3}\parallel 1/g_{m3})$. The gate is at the *opposite* output, which moves the other way for differential signals, so the sign of the $g_{m3}$ term flips.

**Common mistake.** Treating $M_3$/$M_4$ as current sources, $-g_{m1}(r_{O1}\parallel r_{O3})$. Their gates are driven by the outputs, so their transconductance enters the load.

**Common mistake.** Presenting the result as a large stable gain without checking the sign of the denominator. When $g_{m3}(r_{O1}\parallel r_{O3}) > 1$, the circuit is a latch, not an amplifier.
