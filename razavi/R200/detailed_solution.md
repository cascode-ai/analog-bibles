# Detailed solution - R200

**Approach.** The PMOS gates are tied to node N, the midpoint of the resistor string $R_1$–$R_2$ between the outputs. For a differential signal the outputs move equally and oppositely, so N does not move: it is an ac ground. $M_3$ and $M_4$ then act as current sources ($r_{O3}$), and each output sees $R_1$ to ac ground. The half circuit gives the gain; a full three-node analysis confirms it and proves $v_N = 0$.

### Step 1 — Half circuit and KCL

Call the left output (drains of $M_1$, $M_3$) X, the right output Y, the junction of $R_1$ and $R_2$ (the PMOS gates) N and the common source node of $M_1$, $M_2$ P. Apply $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$ with $v_d = v_{in1} - v_{in2}$; by symmetry $v_Y = -v_X$ and P is a virtual ground. The gates draw no current, so the currents in $R_1$ and $R_2$ are equal:

$$\frac{v_X - v_N}{R_1} = \frac{v_N - v_Y}{R_1}\quad\Longrightarrow\quad v_N = \frac{v_X + v_Y}{2} = 0 .$$

So $M_3$, with gate (N) and source ($V_{DD}$) at ac ground, presents only $r_{O3}$, and $R_1$, from X to the ac-ground node N, appears in full from X to ground. Node X carries $g_{m1}v_d/2$ drawn by $M_1$, and $r_{O1}$, $r_{O3}$ and $R_1$ to ground:

<!-- diagram: diagram-01.cir -->

KCL at X:

$$g_{m1}\frac{v_d}{2} + \frac{v_X}{r_{O1}} + \frac{v_X}{r_{O3}} + \frac{v_X}{R_1} = 0 \quad\Longrightarrow\quad v_X = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel R_1\right)\frac{v_d}{2}.$$

With $v_{out} = v_X - v_Y = 2v_X$:

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel R_1\right).$$

### Step 2 — Full analysis (confirms $v_N = 0$)

Keep $v_N$ as an unknown. $M_3$'s drain-to-source current, leaving X, is $g_{m3}v_{gs3} + v_{ds3}/r_{O3}$ with $v_{gs3} = v_N$ and $v_{ds3} = v_X$. With $v_P = 0$:

- KCL at X: $\;g_{m1}\dfrac{v_d}{2} + \dfrac{v_X}{r_{O1}} + g_{m3}v_N + \dfrac{v_X}{r_{O3}} + \dfrac{v_X - v_N}{R_1} = 0$
- KCL at Y: $\;-g_{m1}\dfrac{v_d}{2} + \dfrac{v_Y}{r_{O1}} + g_{m3}v_N + \dfrac{v_Y}{r_{O3}} + \dfrac{v_Y - v_N}{R_1} = 0$
- KCL at N: $\;\dfrac{v_N - v_X}{R_1} + \dfrac{v_N - v_Y}{R_1} = 0 \;\Rightarrow\; v_N = \dfrac{v_X + v_Y}{2}$

**Adding** the X and Y equations:

$$(v_X + v_Y)\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{1}{R_1}\right) + 2g_{m3}v_N - \frac{2v_N}{R_1} = 0 ,$$

and with $2v_N = v_X + v_Y$:

$$(v_X + v_Y)\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + g_{m3}\right) = 0\quad\Longrightarrow\quad v_X + v_Y = 0,\quad v_N = 0 .$$

**Subtracting** the Y equation from the X equation (the $g_{m3}v_N$ terms cancel):

$$
\begin{aligned}
g_{m1}v_d + (v_X - v_Y)\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{1}{R_1}\right) &= 0\\
\frac{v_X - v_Y}{v_d} &= -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{1}{R_1}} ,
\end{aligned}
$$

matching Step 1. The "add" equation also shows that for a **common-mode** signal the loads present the large conductance $g_{m3}$, like diode-connected devices: the string senses the output common mode and feeds it back to the PMOS gates, so the load sets its own output common-mode level while the differential gain is set by $R_1$.

### Step 3 — Comparison and numbers

With a single resistor $R_1$ directly between the outputs each side would see $R_1/2$; here the outputs are joined by $R_1 + R_2 = 2R_1$, so each side sees $R_1$.

*Numerical feel:* with $g_{m1} = 1$ mS, $r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$ and $R_1 = 10\ \mathrm{k}\Omega$:

$$
\begin{aligned}
r_{O1}\parallel r_{O3}\parallel R_1 &= \frac{1}{\frac{1}{50} + \frac{1}{50} + \frac{1}{10}}\ \mathrm{k}\Omega = \frac{1}{0.14}\ \mathrm{k}\Omega = 7.14\ \mathrm{k}\Omega,\\
A_v &= -(1\ \mathrm{mS})(7.14\ \mathrm{k}\Omega) = -7.1 .
\end{aligned}
$$

### Result

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel R_1\right).$$

The gates of $M_3$, $M_4$ connect to the midpoint of $R_1$–$R_2$, which does not move for differential signals (ac ground). Hence $M_3$, $M_4$ act as current sources ($r_{O3}$), and each output sees $R_1$ to ac ground.

**Common mistake.** Treating $M_3$/$M_4$ as diode-connected and putting $1/g_{m3}$ into the differential load. Their gates are at N, which is fixed for differential signals, so $g_{m3}$ matters only for the common mode.

**Common mistake.** Using $R_1/2$ per side, by analogy with a single resistor between the outputs. Here $R_1$ runs from the output to the virtual-ground node N, so the full $R_1$ loads each side.

**Common mistake.** Placing $R_1$ in series with the load, or omitting one of the $r_O$'s. $r_{O1}$, $r_{O3}$ and $R_1$ all connect X to ac ground, in parallel.
