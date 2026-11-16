# Detailed solution - R397

**Approach.** $M_1$ is a common-gate (non-inverting) amplifier from node N to the output, and the PMOS common-source device $M_2$ senses the output and drives a current back into N (inverting): shunt–shunt negative feedback. With ideal current sources and $\lambda = 0$ the output node has infinite open-loop resistance, so the loop gain is infinite and N is a virtual ground, which gives $Z_{in}$ and the gain directly; $Z_{out}$ follows as the limit of $R_{out,open}/(1 + T)$, and each result is confirmed by KCL.

### Step 1 — Small-signal model

Call the node to the right of $R_S$ (source of $M_1$, drain of $M_2$) N. Then:

- $R_S$ between in and N;
- $M_1$: $v_{gs1} = -v_N$, so a current $g_{m1}v_N$ flows from N up into the output;
- $M_2$: source at ac ground, $v_{sg2} = -v_{out}$, so it carries $-g_{m2}v_{out}$ from $V_{DD}$ into N;
- both current sources are open; no $r_O$, no body effect, no gate currents.

<!-- diagram: diagram-01.cir -->

KCL (before adding any test source):

$$\text{out:}\quad -g_{m1}v_N = 0, \qquad\qquad \text{N:}\quad \frac{V_{in} - v_N}{R_S} - g_{m2}v_{out} - g_{m1}v_N = 0 .$$

### Step 2 — Topology, sign and loop gain

$M_2$'s gate senses the output voltage and its drain returns a current into N: **shunt–shunt feedback**. It is negative: $v_N\uparrow$ → $M_1$ pulls less current from the output → $v_{out}\uparrow$ → $M_2$ injects less into N → $v_N\downarrow$.

The output node sees only the ideal current source, the drain of $M_1$ and the gate of $M_2$, so its open-loop resistance is infinite; imagine $R_L$ from the output to ground and let $R_L \to \infty$ at the end. Breaking the loop at the gate of $M_2$ (exact) with $v_t$ and $V_{in} = 0$, $M_2$ injects $-g_{m2}v_t$ into N, which sees $R_S\parallel(1/g_{m1})$, and $M_1$ passes $g_{m1}v_N$ up into $R_L$:

$$v_N = -g_{m2}v_t\,\frac{R_S}{1 + g_{m1}R_S}, \qquad v_{out} = g_{m1}R_Lv_N,$$

$$T = -\frac{v_{out}}{v_t} = \frac{g_{m1}g_{m2}R_LR_S}{1 + g_{m1}R_S} \;\xrightarrow{R_L\to\infty}\; \infty .$$

### Step 3 — Input impedance: a virtual ground

**Feedback view.** With the loop opened, the impedance into N is the source of $M_1$, $1/g_{m1}$. With a current drive, N sees only $1/g_{m1}$, so $v_N = -g_{m2}v_t/g_{m1}$, $v_{out} = -g_{m2}R_Lv_t$ and $T' = g_{m2}R_L$:

$$Z_{in} = \frac{1/g_{m1}}{1 + g_{m2}R_L} \;\xrightarrow{R_L\to\infty}\; 0 .$$

**Direct check.** With $i_x$ injected into N, KCL at the output gives $g_{m1}v_N = 0$, so $v_N = 0$ for any $i_x$, and KCL at N gives $i_x = g_{m2}v_{out}$: the output moves so that $M_2$ removes the injected current, while $M_1$'s small-signal current is forced to zero. N is a **virtual ground** ($Z_{in} = 0$; with $R_S$, the source sees just $R_S$).

### Step 4 — Voltage gain

With $v_N = 0$, the current $V_{in}/R_S$ entering N must be absorbed by $M_2$ ($M_1$ and the current source carry none). KCL at N:

$$
\begin{aligned}
\frac{V_{in}}{R_S} - g_{m2}V_{out} &= 0\\
\frac{V_{out}}{V_{in}} &= +\frac{1}{g_{m2}R_S}.
\end{aligned}
$$

The gain is **positive**: to absorb current flowing into N, $M_2$ must inject *less*, so its gate (the output) must rise.

### Step 5 — Output impedance

**Direct calculation.** With $V_{in} = 0$ ($R_S$ from N to ground) and $v_X$ at the output, KCL at N:

$$
\begin{aligned}
-\frac{v_N}{R_S} - g_{m2}v_X - g_{m1}v_N &= 0\\
v_N &= -\frac{g_{m2}R_S}{1 + g_{m1}R_S}\,v_X .
\end{aligned}
$$

The test current flows down through $M_1$, whose drain-to-source current is $-g_{m1}v_N$:

$$I_X = -g_{m1}v_N = \frac{g_{m1}g_{m2}R_S}{1 + g_{m1}R_S}\,v_X ,$$

$$Z_{out} = \frac{v_X}{I_X} = \frac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}.$$

**Feedback view.** With $R_{out,open} = R_L$ and $T$ from Step 2:

$$Z_{out} = \frac{R_L}{1 + \dfrac{g_{m1}g_{m2}R_LR_S}{1 + g_{m1}R_S}} \;\xrightarrow{R_L\to\infty}\; \frac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S},$$

the same finite result: $R_{out,open}$ grows at the same rate as $T$.

### Result

$$Z_{in} = 0\ (\text{virtual ground}), \qquad Z_{out} = \frac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}, \qquad \frac{V_{out}}{V_{in}} = +\frac{1}{g_{m2}R_S}.$$

$M_1$ (common gate, non-inverting) and $M_2$ (PMOS common source, inverting) form a shunt–shunt loop with infinite loop gain. N is held at ac ground, the input current $V_{in}/R_S$ is absorbed by $M_2$, and the output impedance is the limit of $R_{out,open}/(1 + T)$.

**Common mistake.** Reporting an inverting gain. The input current is cancelled by a *reduction* of $M_2$'s current, which needs a rising output: $V_{out}/V_{in} = +1/(g_{m2}R_S)$.

**Common mistake.** Giving $Z_{in} = 1/g_{m1}$, the open-loop impedance into the source of $M_1$; the infinite loop gain reduces it to zero.

**Common mistake.** Misidentifying $M_2$ as a source follower, or concluding that $Z_{out}$ is infinite because of the ideal current-source load. $M_2$'s gate senses the output and its drain drives N, so the loop makes $Z_{out}$ finite.
