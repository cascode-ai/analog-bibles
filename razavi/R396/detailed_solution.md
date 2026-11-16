# Detailed solution - R396

**Approach.** $M_1$ is a common-source amplifier from node N to the output, and the common-gate PMOS $M_2$ (source at the output, drain at N) senses the output voltage and injects a proportional current into N: shunt–shunt (voltage–current) feedback. Find the open-loop impedances (with loading) and the loop gain $T = g_{m1}R_S$, divide by $1 + T$, and check each result by direct KCL.

### Step 1 — Small-signal model

Call the node to the right of $R_S$ (gate of $M_1$, drain of $M_2$) N. Then:

- $R_S$ between in and N;
- $M_2$: gate at ac ground, so $v_{sg2} = v_{out}$, and it carries $g_{m2}v_{out}$ from out to N;
- $M_1$: $g_{m1}v_N$ from out to ground;
- both current sources are open circuits; no $r_O$, no body effect, no gate currents.

<!-- diagram: diagram-01.cir -->

The two KCL equations used throughout (plus any test current):

$$\text{out:}\quad g_{m1}v_N + g_{m2}v_{out} = 0,$$
$$\text{N:}\quad \frac{V_{in} - v_N}{R_S} + g_{m2}v_{out} = 0.$$

### Step 2 — Topology and loop gain

$M_2$ senses $v_{out}$ through its source and delivers $g_{m2}v_{out}$ into N: **shunt–shunt feedback**. It is negative: $v_N\uparrow$ → $M_1$ draws more → $v_{out}\downarrow$ → $M_2$ injects less into N → $v_N\downarrow$.

Break the loop at the gate of $M_1$ (exact, no gate current), drive it with $v_t$, and set $V_{in} = 0$. $M_1$ draws $g_{m1}v_t$ from the output, which sees only the source of $M_2$, $1/g_{m2}$, so $v_{out} = -g_{m1}v_t/g_{m2}$. $M_2$ passes $g_{m2}v_{out} = -g_{m1}v_t$ into N, whose only path is $R_S$, so $v_N = -g_{m1}R_Sv_t$:

$$T = -\frac{v_N}{v_t} = g_{m1}R_S .$$

### Step 3 — Output impedance

With the loop opened, the output sees the source of $M_2$, $R_{out,open} = 1/g_{m2}$; voltage sensing divides it by $1 + T$:

$$Z_{out} = \frac{1/g_{m2}}{1 + g_{m1}R_S} = \frac{1}{g_{m2}(1 + g_{m1}R_S)}.$$

**Direct check.** With $V_{in} = 0$ and $v_X$ at the output, KCL at N gives $-v_N/R_S + g_{m2}v_X = 0$, so $v_N = g_{m2}R_Sv_X$; KCL at the output gives $I_X = g_{m1}v_N + g_{m2}v_X = g_{m2}v_X(1 + g_{m1}R_S)$. Hence $Z_{out} = 1/[g_{m2}(1 + g_{m1}R_S)]$ ✓.

### Step 4 — Input impedance

With the loop opened, the resistance at N (including $R_S$) is just $R_S$, since the drain of $M_2$ and the current source are open. Shunt feedback divides it by $1 + T$:

$$R_{N,closed} = \frac{R_S}{1 + g_{m1}R_S} = R_S\parallel\frac{1}{g_{m1}},$$

which is $R_S$ in parallel with the impedance looking into N alone, so

$$Z_{in} = \frac{1}{g_{m1}}.$$

**Direct check.** With a test current $i_x$ into N (excluding $R_S$), KCL at the output gives $g_{m2}v_{out} = -g_{m1}v_N$, and KCL at N gives $i_x + g_{m2}v_{out} = 0$, so $i_x = g_{m1}v_N$ and $Z_{in} = 1/g_{m1}$ ✓: the loop returns $-g_{m1}v_N$ to N, like a resistor $1/g_{m1}$ to ground.

### Step 5 — Voltage gain

With the Norton equivalent of the source (current $V_{in}/R_S$ into N, $R_S$ in parallel), the open-loop transimpedance is $R_S$ times the N-to-output gain $-g_{m1}/g_{m2}$:

$$R_{T,open} = \frac{v_{out}}{i_{in}} = R_S\cdot\left(-\frac{g_{m1}}{g_{m2}}\right) = -\frac{g_{m1}R_S}{g_{m2}}.$$

Closing the loop:

$$R_{T,closed} = \frac{-g_{m1}R_S/g_{m2}}{1 + g_{m1}R_S}, \qquad \frac{V_{out}}{V_{in}} = \frac{R_{T,closed}}{R_S} = -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}.$$

**Direct check.** KCL at the output gives $v_{out} = -(g_{m1}/g_{m2})v_N$; KCL at N gives $(V_{in} - v_N)/R_S = -g_{m2}v_{out} = g_{m1}v_N$, so $v_N = V_{in}/(1 + g_{m1}R_S)$ and

$$\frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m2}}\cdot\frac{1}{1 + g_{m1}R_S} = -\frac{1/g_{m2}}{R_S + 1/g_{m1}}.\ \checkmark$$

$V_{in}$ drives a current through $R_S$ into the input resistance $1/g_{m1}$, and that current reappears at the output across $1/g_{m2}$.

### Result

$$Z_{in} = \frac{1}{g_{m1}}, \qquad Z_{out} = \frac{1}{g_{m2}(1 + g_{m1}R_S)}, \qquad \frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)} = -\frac{1/g_{m2}}{R_S + 1/g_{m1}}.$$

The circuit uses shunt–shunt feedback with loop gain $T = g_{m1}R_S$: open-loop output resistance $1/g_{m2}$ and input-node resistance $R_S$, both divided by $1 + g_{m1}R_S$.

**Common mistake.** Treating $M_2$ as a source follower (or as an NMOS). With its gate at $V_b$, source at the output and drain at N, it is a common-gate PMOS that converts $v_{out}$ into $g_{m2}v_{out}$ delivered to N.

**Common mistake.** Taking $Z_{out} = 1/g_{m2}$, the open-loop value; the loop gain lowers it by $1 + g_{m1}R_S$.

**Common mistake.** Concluding that $Z_{in}$ is infinite because N connects only to a gate, a drain and an ideal current source. Through the loop, any $v_N$ produces a returned current $-g_{m1}v_N$, so N looks like $1/g_{m1}$.
