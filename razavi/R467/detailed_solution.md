# Detailed solution - R467

**Approach.** Compute the first-stage gain to nodes X and Y, then the second-stage gain to each output. The new feature is that the pull-up device $M_7$ is not a fixed current source: through the mirror $M_9 \to M_{11} \to M_7$ its current follows node Y, which moves opposite to X. When $M_5$ pulls harder (X rises), $M_7$ pushes less (Y falls), so the two signal currents *add*. The output stage's effective transconductance becomes $g_{m5} + Kg_{m9}$.

### Step 1 — Reading the circuit

From the figure:

- **First stage:** PMOS input pair $M_1$ (drain at X) and $M_2$ (drain at Y) with a tail current source from $V_{DD}$; NMOS current-source loads $M_3$ (at X) and $M_4$ (at Y), gates at $V_b$.
- **Left output ($V_{out1}$):** NMOS $M_5$ with its gate at X pulls down; PMOS $M_7$ pulls up. $M_7$ mirrors the diode-connected PMOS $M_{11}$ (ratio $K = (W/L)_7/(W/L)_{11}$), and $M_{11}$'s current is set by the NMOS $M_9$, **whose gate is at Y** (the crossed wire).
- **Right output ($V_{out2}$):** symmetric. $M_6$ (gate at Y) pulls down, and $M_8$ mirrors $M_{12}$, whose current is set by $M_{10}$ with its **gate at X**.

At low frequency, X and Y drive only gates, so the second stage does not load the first.

### Step 2 — First-stage gain

For a differential input ($v_{g1} = +v_{in}/2$, $v_{g2} = -v_{in}/2$) the common source node of the PMOS pair is a virtual ground. Each half is a common-source stage whose output node sees $r_{O1}$ (the input device) in parallel with $r_{O3}$ (the current-source load, whose gate is at the fixed bias $V_b$). KCL at X:

$$
\begin{aligned}
g_{m1}v_{sg1} &= \frac{v_X}{r_{O1}\parallel r_{O3}}, \qquad v_{sg1} = 0 - \frac{v_{in}}{2}\\
v_X &= -g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_{in}}{2},\\
v_Y &= +g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_{in}}{2} = -v_X .
\end{aligned}
$$

(For a PMOS, raising the gate lowers the current, so X falls when $v_{g1}$ rises.) The key fact for the second stage is that **$v_Y = -v_X$**.

### Step 3 — The active pull-up path ($M_9$, $M_{11}$, $M_7$)

$M_9$ (gate at Y, source grounded) changes its drain current by $g_{m9}v_Y$. That current is drawn from the diode-connected $M_{11}$. The diode presents a low resistance, about $1/g_{m11}$, much smaller than $r_{O9}$, so essentially all of $g_{m9}v_Y$ flows through $M_{11}$. Its gate voltage moves by

$$v_A \approx -\frac{g_{m9}v_Y}{g_{m11}},$$

where A is the common gate node of $M_{11}$ and $M_7$. $M_7$ has the same source-gate voltage as $M_{11}$ and is $K$ times larger, so $g_{m7} = Kg_{m11}$ and its current into $V_{out1}$ changes by

$$i_7 = g_{m7}(-v_A) = Kg_{m11}\cdot\frac{g_{m9}v_Y}{g_{m11}} = Kg_{m9}v_Y .$$

So $M_7$ delivers $K$ times the current change of $M_9$: it is a current source whose value follows Y.

### Step 4 — Second-stage gain at $V_{out1}$

**Small-signal model of the left output (in words).** At node $V_{out1}$: $M_5$ draws $g_{m5}v_X$ to ground; $M_7$ injects $Kg_{m9}v_Y$ from $V_{DD}$; $r_{O5}$ and $r_{O7}$ connect the node to AC ground. (The model also contains $M_9$, the diode $M_{11}$, and the mirror node A, as in Step 3.)

<!-- diagram: diagram-01.cir -->

KCL at $V_{out1}$ (current injected = current leaving):

$$
\begin{aligned}
Kg_{m9}v_Y &= g_{m5}v_X + \frac{v_{out1}}{r_{O5}\parallel r_{O7}}\\
v_{out1} &= (r_{O5}\parallel r_{O7})\left(Kg_{m9}v_Y - g_{m5}v_X\right).
\end{aligned}
$$

Substitute $v_Y = -v_X$:

$$v_{out1} = -(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_X .$$

The two transconductances **add**. When X rises, $M_5$ sinks more current *and*, because Y falls at the same time, $M_7$ sources less. Both effects pull $V_{out1}$ down. With a fixed current-source load only $g_{m5}$ would act.

By symmetry, at the right output ($M_6$ driven by Y, $M_8$ controlled by X through $M_{10}$/$M_{12}$):

$$v_{out2} = -(g_{m6} + Kg_{m10})(r_{O6}\parallel r_{O8})\,v_Y = +(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_X .$$

### Step 5 — Overall differential gain

$$
\begin{aligned}
v_{out1} - v_{out2} &= -2(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_X\\
&= -2(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\left[-g_{m1}(r_{O1}\parallel r_{O3})\frac{v_{in}}{2}\right]\\
&= g_{m1}(r_{O1}\parallel r_{O3})\,(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_{in} .
\end{aligned}
$$

So

$$A_v = \frac{v_{out1} - v_{out2}}{v_{in}} = g_{m1}(r_{O1}\parallel r_{O3})\cdot(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7}).$$

**Symmetric design.** If $M_9$ is biased at the same overdrive as $M_5$ and $K$ is chosen so that $M_7$'s bias current $K I_{D9}$ equals $I_{D5}$, then $Kg_{m9} = K(2I_{D9}/V_{ov}) = 2I_{D5}/V_{ov} = g_{m5}$, and

$$A_v = 2\,g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5}(r_{O5}\parallel r_{O7}),$$

twice the gain of the same op amp with ordinary current-source loads in the output stage, at no cost in output resistance.

### Result

$$|A_v| = g_{m1}(r_{O1}\parallel r_{O3})\cdot(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7}),$$

and with $Kg_{m9} = g_{m5}$ the second-stage transconductance doubles: $|A_v| = 2g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5}(r_{O5}\parallel r_{O7})$. (The approximation $i_9$ fully reaching $M_{11}$ uses $1/g_{m11} \ll r_{O9}$; the pole at the mirror node A is ignored at low frequencies.)

**Common mistake.** Ignoring the active load and writing the second-stage gain as $g_{m5}(r_{O5}\parallel r_{O7})$. That treats $M_7$ as a fixed current source, which is exactly what this circuit avoids.

**Common mistake.** Assuming $M_7$'s current change opposes $M_5$'s (subtracting $Kg_{m9}$). That would be true if $M_9$ were driven by X. The crossed connection drives $M_9$ from Y, which moves opposite to X, so the pull-up current falls while the pull-down current rises and the effects add.

**Common mistake.** Treating the first-stage loads as diode-connected (resistance $1/g_{m3}$). $M_3$ and $M_4$ are current sources with their gates at $V_b$, so the first-stage load is $r_{O1}\parallel r_{O3}$.
