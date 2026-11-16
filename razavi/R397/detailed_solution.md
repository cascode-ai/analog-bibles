# Detailed solution - R397

**Approach.** $M_1$ is a common-gate (non-inverting) amplifier from node N to the output, and the PMOS common-source device $M_2$ senses the output voltage and drives a current back into N (inverting). Together they form a shunt–shunt (voltage–current) negative-feedback loop. With ideal current sources and $\lambda = 0$, the output node has infinite open-loop resistance, so the loop gain is infinite and N is a virtual ground. This gives $Z_{in}$ and the gain directly. $Z_{out}$ follows as $R_{out,open}/(1 + T)$ in the limit, and each result is confirmed by KCL.

### Step 1 — The circuit and its small-signal model

Reading the figure:

- $V_{in}$ drives node N through $R_S$; $Z_{in}$ is the impedance looking into N (to the right of $R_S$).
- Node N connects to the source of $M_1$, the drain of $M_2$, and an ideal current source $I_1$ to ground.
- $M_1$ (NMOS): gate at the fixed bias $V_b$ (AC ground), source at N, drain = $V_{out}$. It is a **common-gate** device.
- $M_2$ (PMOS): source at $V_{DD}$, gate at $V_{out}$, drain at N. It is a **common-source** device.
- The output is loaded only by the ideal current source $I_1$ from $V_{DD}$.

**Small-signal model in words.** Nodes: in, N and out.

- $R_S$ between in and N.
- $M_1$: $v_{gs1} = -v_N$, so it carries $g_{m1}v_{gs1} = -g_{m1}v_N$ from out (drain) to N (source). Equivalently, a current $g_{m1}v_N$ flows from N up into the output node.
- $M_2$: source at AC ground, $v_{sg2} = -v_{out}$, so it carries $-g_{m2}v_{out}$ from $V_{DD}$ into N.
- Both current sources are open; no $r_O$, no body effect; gates draw no current.

Here $g_{m1}$ and $g_{m2}$ are the transconductances.

<!-- diagram: diagram-01.cir -->

KCL equations (before adding any test source):

$$\text{out:}\quad -g_{m1}v_N = 0, \qquad\qquad \text{N:}\quad \frac{V_{in} - v_N}{R_S} - g_{m2}v_{out} - g_{m1}v_N = 0 .$$

### Step 2 — Topology, sign and loop gain

**Topology.** $M_2$'s gate is in shunt with the output (voltage sensing), and its drain delivers a current into N (current return in shunt with the input): **shunt–shunt feedback**.

**Sign.** $v_N\uparrow$ → $M_1$'s $V_{GS}$ falls → $M_1$ pulls less current from the output → $v_{out}\uparrow$ → $M_2$'s $V_{SG}$ falls → $M_2$ injects less current into N → $v_N\downarrow$. The feedback is negative.

**Loop gain.** The output node is connected only to the ideal current source, the drain of $M_1$ ($\lambda = 0$) and the gate of $M_2$, so its open-loop resistance is infinite. To keep the limits clear, imagine a resistance $R_L$ from the output to ground and let $R_L \to \infty$ at the end. Breaking the loop at the gate of $M_2$ (exact) with a test voltage $v_t$ and $V_{in} = 0$:

- $M_2$ injects $-g_{m2}v_t$ into N, which sees $R_S$ in parallel with the source of $M_1$ ($1/g_{m1}$): $v_N = -g_{m2}v_t\,R_S/(1 + g_{m1}R_S)$.
- $M_1$ passes $g_{m1}v_N$ up into the output: $v_{out} = g_{m1}R_Lv_N$.

$$T = -\frac{v_{out}}{v_t} = \frac{g_{m1}g_{m2}R_LR_S}{1 + g_{m1}R_S} \;\xrightarrow{R_L\to\infty}\; \infty .$$

### Step 3 — Input impedance: a virtual ground

**Feedback view.** With the loop opened, the impedance looking into N is the source of $M_1$, $1/g_{m1}$ (the drain of $M_2$ and the current source are open). With the input driven by a current, the loop gain is $T' = g_{m2}R_L$ (now N sees only $1/g_{m1}$, so $v_N = -g_{m2}v_t/g_{m1}$ and $v_{out} = -g_{m2}R_Lv_t$). Shunt feedback divides the input impedance:

$$Z_{in} = \frac{1/g_{m1}}{1 + g_{m2}R_L} \;\xrightarrow{R_L\to\infty}\; 0 .$$

**Direct check.** Inject $i_x$ into N. KCL at the output (no test source there) gives $g_{m1}v_N = 0$, so $v_N = 0$ for any $i_x$: $Z_{in} = 0$. KCL at N then gives $i_x = g_{m2}v_{out}$, i.e. the output moves so that $M_2$ removes the injected current. $M_1$'s small-signal current is forced to zero.

N is a **virtual ground** (including $R_S$, the source sees just $R_S$).

### Step 4 — Voltage gain

With $v_N = 0$, the current entering N through $R_S$ is $V_{in}/R_S$. $M_1$ carries no small-signal current and the current source carries none, so $M_2$ must absorb it. KCL at N:

$$
\begin{aligned}
\frac{V_{in}}{R_S} - g_{m2}V_{out} &= 0\\
\frac{V_{out}}{V_{in}} &= +\frac{1}{g_{m2}R_S}.
\end{aligned}
$$

The gain is **positive**: when current flows into N, $M_2$ must inject *less* current, which requires its gate (the output) to rise.

### Step 5 — Output impedance

**Direct calculation.** Set $V_{in} = 0$ ($R_S$ from N to ground), apply $v_X$ at the output and let it supply $I_X$.

KCL at N (current from $R_S$, from $M_2$ and from $M_1$ sum to zero):

$$
\begin{aligned}
-\frac{v_N}{R_S} - g_{m2}v_X - g_{m1}v_N &= 0\\
v_N &= -\frac{g_{m2}R_S}{1 + g_{m1}R_S}\,v_X .
\end{aligned}
$$

KCL at the output: the test current flows down through $M_1$, whose drain-to-source current is $-g_{m1}v_N$:

$$I_X = -g_{m1}v_N = \frac{g_{m1}g_{m2}R_S}{1 + g_{m1}R_S}\,v_X .$$

$$Z_{out} = \frac{v_X}{I_X} = \frac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}.$$

**Feedback view.** The open-loop output resistance is $R_L$ and the loop gain is $T$ from Step 2:

$$Z_{out} = \frac{R_L}{1 + \dfrac{g_{m1}g_{m2}R_LR_S}{1 + g_{m1}R_S}} \;\xrightarrow{R_L\to\infty}\; \frac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S},$$

the same finite result: although $T \to \infty$, $R_{out,open}$ grows at the same rate.

### Result

$$Z_{in} = 0\ (\text{virtual ground}), \qquad Z_{out} = \frac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}, \qquad \frac{V_{out}}{V_{in}} = +\frac{1}{g_{m2}R_S}.$$

$M_1$ (common gate, non-inverting) and $M_2$ (PMOS common source, inverting) form a shunt–shunt loop with infinite loop gain. N is held at AC ground, the input current $V_{in}/R_S$ is absorbed by $M_2$, and the output impedance is the limit of $R_{out,open}/(1 + T)$.

**Common mistake.** Reporting an inverting gain. The forward path is a common-gate stage (non-inverting), and the input current must be cancelled by a *reduction* of $M_2$'s current, which needs a rising output: $V_{out}/V_{in} = +1/(g_{m2}R_S)$.

**Common mistake.** Giving $Z_{in} = 1/g_{m1}$, the impedance looking into the source of the common-gate device. That is the open-loop value; the infinite loop gain reduces it to zero.

**Common mistake.** Misidentifying the devices (e.g. $M_2$ as a source follower) or concluding that $Z_{out}$ is infinite because of the ideal current-source load. $M_2$'s gate senses the output and its drain drives N, so the loop lowers the output impedance to the finite value above.
