# Detailed solution - R200

**Approach.** The PMOS gates are tied to node N, the midpoint of the resistor string $R_1$–$R_2$ between the two outputs. For a differential signal the outputs move equally and oppositely, so N does not move: it is an AC ground. $M_3$ and $M_4$ then act as current sources ($r_{O3}$), and each output sees $R_1$ to AC ground. We get the gain from the half circuit and then confirm it with a full three-node analysis, which also proves that $v_N = 0$.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: NMOS differential pair with sources at node P and tail transistor $M_5$ (gate at $V_b$).
- $M_3$, $M_4$: PMOS with sources at $V_{DD}$. **Their gates are tied together to node N.**
- X is the left output (drain of $M_1$/$M_3$) and Y the right output (drain of $M_2$/$M_4$).
- $R_1$ runs from X to N, and $R_2 = R_1$ from N to Y.
- $V_{out} = V_X - V_Y$; all transistors are saturated, $\lambda \ne 0$.

### Step 2 — Virtual grounds for a differential input

Apply $v_{in1} = +v_d/2$ and $v_{in2} = -v_d/2$, with $v_d = v_{in1} - v_{in2}$. By symmetry $v_Y = -v_X$.

- **Node P:** the signal currents of $M_1$ and $M_2$ into P cancel, so $v_P = 0$.
- **Node N:** the gates draw no current, so the current in $R_1$ equals the current in $R_2$:
$$\frac{v_X - v_N}{R_1} = \frac{v_N - v_Y}{R_1}\quad\Longrightarrow\quad v_N = \frac{v_X + v_Y}{2} = 0 .$$
- **$M_3$:** its gate (N) and source ($V_{DD}$) are both at AC ground, so $v_{gs3} = 0$, its controlled source is inactive, and it presents only $r_{O3}$ from X to ground.
- **$R_1$:** it connects X to N, which is AC ground, so the full $R_1$ appears from X to ground.

### Step 3 — Half-circuit KCL

Node X carries:

- the current $g_{m1}v_d/2$ drawn by $M_1$;
- $r_{O1}$ to ground;
- $r_{O3}$ to ground;
- $R_1$ to ground.

<!-- diagram: diagram-01.cir -->

KCL at X:

$$g_{m1}\frac{v_d}{2} + \frac{v_X}{r_{O1}} + \frac{v_X}{r_{O3}} + \frac{v_X}{R_1} = 0 .$$

Solve for $v_X$:

$$v_X = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel R_1\right)\frac{v_d}{2}.$$

With $v_{out} = v_X - v_Y = 2v_X$:

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel R_1\right).$$

### Step 4 — Full analysis (confirms $v_N = 0$)

Now keep $v_N$ as an unknown and use the small-signal model of each PMOS. The drain-to-source current of $M_3$ is $g_{m3}v_{gs3} + v_{ds3}/r_{O3}$, with $v_{gs3} = v_N$ (gate at N, source at AC ground) and $v_{ds3} = v_X$. This current leaves node X through $M_3$. With $v_P = 0$:

- KCL at X: $\;g_{m1}\dfrac{v_d}{2} + \dfrac{v_X}{r_{O1}} + g_{m3}v_N + \dfrac{v_X}{r_{O3}} + \dfrac{v_X - v_N}{R_1} = 0$
- KCL at Y: $\;-g_{m1}\dfrac{v_d}{2} + \dfrac{v_Y}{r_{O1}} + g_{m3}v_N + \dfrac{v_Y}{r_{O3}} + \dfrac{v_Y - v_N}{R_1} = 0$
- KCL at N: $\;\dfrac{v_N - v_X}{R_1} + \dfrac{v_N - v_Y}{R_1} = 0 \;\Rightarrow\; v_N = \dfrac{v_X + v_Y}{2}$

**Add** the X and Y equations:

$$
\begin{aligned}
(v_X + v_Y)\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{1}{R_1}\right) + 2g_{m3}v_N - \frac{2v_N}{R_1} &= 0 .
\end{aligned}
$$

Substitute $2v_N = v_X + v_Y$:

$$(v_X + v_Y)\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + g_{m3}\right) = 0\quad\Longrightarrow\quad v_X + v_Y = 0,\quad v_N = 0 .$$

**Subtract** the Y equation from the X equation. The $g_{m3}v_N$ terms cancel:

$$
\begin{aligned}
g_{m1}v_d + (v_X - v_Y)\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{1}{R_1}\right) &= 0\\
\frac{v_X - v_Y}{v_d} &= -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{1}{R_1}} .
\end{aligned}
$$

This matches Step 3.

*Side remark.* The "add" equation shows that for a **common-mode** signal the loads present the large conductance $g_{m3}$, i.e. they behave like diode-connected devices. The resistor string senses the output common mode and feeds it back to the PMOS gates, so this load sets its own output common-mode level while still giving a well-defined differential gain set by $R_1$.

### Step 5 — Comparison and numbers

Compare with a single resistor $R_1$ connected directly between the outputs, where each side sees $R_1/2$. Here the total resistance between the outputs is $R_1 + R_2 = 2R_1$, so each side sees $R_1$.

*Numerical feel:* with $g_{m1} = 1$ mS, $r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$ and $R_1 = 10\ \mathrm{k}\Omega$:

$$
\begin{aligned}
r_{O1}\parallel r_{O3}\parallel R_1 &= \frac{1}{\frac{1}{50} + \frac{1}{50} + \frac{1}{10}}\ \mathrm{k}\Omega = \frac{1}{0.14}\ \mathrm{k}\Omega = 7.14\ \mathrm{k}\Omega,\\
A_v &= -(1\ \mathrm{mS})(7.14\ \mathrm{k}\Omega) = -7.1 .
\end{aligned}
$$

### Result

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel R_1\right).$$

The gates of $M_3$, $M_4$ connect to the midpoint of $R_1$–$R_2$, which does not move for differential signals (AC ground). Hence $M_3$, $M_4$ act as current sources ($r_{O3}$), and each output sees $R_1$ to AC ground.

**Common mistake.** Treating $M_3$/$M_4$ as diode-connected and putting $1/g_{m3}$ into the differential load. Their gates are at N, not at their own drains. N is fixed for differential signals, so $g_{m3}$ drops out of the differential gain; it matters only for the common mode.

**Common mistake.** Using $R_1/2$ per side, by analogy with a single resistor between the outputs. Here $R_1$ runs from the output to the virtual-ground node N, so the full $R_1$ loads each side.

**Common mistake.** Placing $R_1$ in series with the load, or omitting one of the $r_O$'s. $r_{O1}$, $r_{O3}$ and $R_1$ all connect node X to AC ground and are therefore in parallel.
