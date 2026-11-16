# Detailed solution - R396

**Approach.** $M_1$ is a common-source amplifier from node N to the output. The common-gate PMOS $M_2$, with its source at the output and its drain at N, senses the output voltage and injects a proportional current into N: shunt–shunt (voltage–current) feedback. We find the open-loop impedances (with loading) and the loop gain $T = g_{m1}R_S$, then divide by $1 + T$. Each result is also checked by direct KCL.

### Step 1 — The circuit and its small-signal model

Reading the figure:

- $V_{in}$ drives node N through $R_S$; $Z_{in}$ is the impedance looking into N (to the right of $R_S$).
- Node N connects to the gate of $M_1$, the drain of $M_2$, and an ideal current source $I_1$ to ground.
- $M_1$ (NMOS): source grounded, drain = $V_{out}$, loaded by an ideal current source $I_1$ from $V_{DD}$.
- $M_2$ (PMOS): gate at the fixed bias $V_b$ (AC ground), source at $V_{out}$, drain at N. It is a **common-gate** device.

**Small-signal model in words.** Nodes: in, N and out.

- $R_S$ between in and N.
- $M_2$: gate at AC ground, so $v_{sg2} = v_{out}$, and it carries $g_{m2}v_{out}$ from its source (out) to its drain (N).
- $M_1$: a controlled current $g_{m1}v_N$ from out to ground.
- Both current sources are open circuits; no $r_O$ ($\lambda = 0$), no body effect ($\gamma = 0$); gates draw no current.

Here $g_{m1}$ and $g_{m2}$ are the transconductances.

<!-- diagram: diagram-01.cir -->

The two KCL equations used throughout:

$$\text{out:}\quad g_{m1}v_N + g_{m2}v_{out} = 0 \quad(\text{plus any test current}),$$
$$\text{N:}\quad \frac{V_{in} - v_N}{R_S} + g_{m2}v_{out} = 0 \quad(\text{plus any test current}).$$

### Step 2 — Topology and loop gain

**Topology.** $M_2$ is connected in shunt with the output (it senses $v_{out}$ through its source) and in shunt with N (it delivers a current $g_{m2}v_{out}$ there). This is **shunt–shunt (voltage–current) feedback**.

**Sign.** $v_N\uparrow$ → $M_1$ draws more current → $v_{out}\downarrow$ → $M_2$ injects less current into N → $v_N\downarrow$. The feedback is negative.

**Loop gain.** Break the loop at the gate of $M_1$ (exact, since the gate draws no current): drive it with $v_t$ and set $V_{in} = 0$.

- $M_1$ draws $g_{m1}v_t$ from the output node. That node sees only the source of $M_2$, whose impedance (gate at AC ground, $\lambda = 0$) is $1/g_{m2}$. So $v_{out} = -g_{m1}v_t/g_{m2}$.
- $M_2$ passes the current $g_{m2}v_{out} = -g_{m1}v_t$ into N, where the only path is $R_S$ (the drain of $M_2$ and $I_1$ are open). So $v_N = -g_{m1}R_Sv_t$.

$$T = -\frac{v_N}{v_t} = g_{m1}R_S .$$

### Step 3 — Output impedance

**Feedback view.** With the loop opened, the output node sees the source of $M_2$:

$$R_{out,open} = \frac{1}{g_{m2}}.$$

Voltage sensing at the output divides this by $1 + T$:

$$Z_{out} = \frac{1/g_{m2}}{1 + g_{m1}R_S} = \frac{1}{g_{m2}(1 + g_{m1}R_S)}.$$

**Direct check.** Set $V_{in} = 0$, apply $v_X$ at the output and let it supply $I_X$. KCL at N: $-v_N/R_S + g_{m2}v_X = 0$, so $v_N = g_{m2}R_Sv_X$. KCL at the output: $I_X = g_{m1}v_N + g_{m2}v_X = g_{m2}v_X(1 + g_{m1}R_S)$. Hence $Z_{out} = 1/[g_{m2}(1 + g_{m1}R_S)]$. ✓

### Step 4 — Input impedance

**Feedback view.** With the loop opened, the resistance at node N (including the source resistance) is just $R_S$, since the drain of $M_2$ and the current source are open. Shunt feedback at the input divides it by $1 + T$:

$$R_{N,closed} = \frac{R_S}{1 + g_{m1}R_S} = R_S\parallel\frac{1}{g_{m1}}.$$

This is $R_S$ in parallel with the impedance looking into N alone, so

$$Z_{in} = \frac{1}{g_{m1}}.$$

**Direct check.** Inject a test current $i_x$ into N (excluding $R_S$). KCL at the output gives $g_{m2}v_{out} = -g_{m1}v_N$. KCL at N: $i_x + g_{m2}v_{out} = 0$, so $i_x = g_{m1}v_N$ and $Z_{in} = v_N/i_x = 1/g_{m1}$. ✓ The loop returns a current $-g_{m1}v_N$ to N, exactly like a resistor $1/g_{m1}$ to ground.

### Step 5 — Voltage gain

**Feedback view.** Replace $V_{in}$ and $R_S$ by their Norton equivalent: a current $V_{in}/R_S$ into N with $R_S$ in parallel. The open-loop transimpedance from that current to the output is

$$R_{T,open} = \frac{v_{out}}{i_{in}} = R_S\cdot\left(-\frac{g_{m1}}{g_{m2}}\right) = -\frac{g_{m1}R_S}{g_{m2}}$$

(the current develops $R_Si_{in}$ at N, and the stage from N to the output has gain $-g_{m1}/g_{m2}$). Closing the loop:

$$R_{T,closed} = \frac{-g_{m1}R_S/g_{m2}}{1 + g_{m1}R_S}, \qquad \frac{V_{out}}{V_{in}} = \frac{R_{T,closed}}{R_S} = -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}.$$

**Direct check.** From KCL at the output, $v_{out} = -(g_{m1}/g_{m2})v_N$. KCL at N: $(V_{in} - v_N)/R_S = -g_{m2}v_{out} = g_{m1}v_N$, so $v_N = V_{in}/(1 + g_{m1}R_S)$ and

$$\frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m2}}\cdot\frac{1}{1 + g_{m1}R_S} = -\frac{1/g_{m2}}{R_S + 1/g_{m1}}.\ \checkmark$$

The last form has a clear meaning: $V_{in}$ drives a current through $R_S$ into the input resistance $1/g_{m1}$, and that current reappears at the output across $1/g_{m2}$.

### Result

$$Z_{in} = \frac{1}{g_{m1}}, \qquad Z_{out} = \frac{1}{g_{m2}(1 + g_{m1}R_S)}, \qquad \frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)} = -\frac{1/g_{m2}}{R_S + 1/g_{m1}}.$$

The circuit uses shunt–shunt feedback with loop gain $T = g_{m1}R_S$: open-loop output resistance $1/g_{m2}$ and input-node resistance $R_S$, both divided by $1 + g_{m1}R_S$.

**Common mistake.** Treating $M_2$ as a source follower (or as an NMOS). Its gate is fixed at $V_b$, its source is at the output and its drain at N: it is a common-gate PMOS that converts $v_{out}$ into a current $g_{m2}v_{out}$ delivered to N.

**Common mistake.** Taking $Z_{out} = 1/g_{m2}$, i.e. forgetting the feedback. That is only the open-loop value; the loop gain $g_{m1}R_S$ lowers it by $1 + g_{m1}R_S$.

**Common mistake.** Concluding that $Z_{in}$ is infinite because N connects only to a gate, a drain and an ideal current source. The drain of $M_2$ is driven by the loop: any voltage at N produces, through $M_1$ and $M_2$, a returned current $-g_{m1}v_N$, so N looks like $1/g_{m1}$. The gain is negative, as befits an inverting CS stage.
