# Detailed solution - R467

**Approach.** Compute the first-stage gain to X and Y, then the second-stage gain to each output. The pull-up $M_7$ is not a fixed source: through the mirror $M_9 \to M_{11} \to M_7$ its current follows Y, which moves opposite to X. When $M_5$ pulls harder (X rises), $M_7$ pushes less (Y falls), so the two signal currents *add* and the output stage's effective transconductance becomes $g_{m5} + Kg_{m9}$.

### Step 1 — First-stage gain

$M_7$ mirrors the diode-connected $M_{11}$ (ratio $K$), whose current is set by $M_9$ with its gate at **Y**; symmetrically, $M_8$ mirrors $M_{12}$, set by $M_{10}$ with its gate at **X**. At low frequency X and Y drive only gates, so the second stage does not load the first.

For $v_{g1} = +v_{in}/2$, $v_{g2} = -v_{in}/2$, the common source node of the PMOS pair is a virtual ground, and each drain sees $r_{O1}\parallel r_{O3}$ ($M_3$, $M_4$ are current sources). KCL at X:

$$
\begin{aligned}
g_{m1}v_{sg1} &= \frac{v_X}{r_{O1}\parallel r_{O3}}, \qquad v_{sg1} = 0 - \frac{v_{in}}{2}\\
v_X &= -g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_{in}}{2},\\
v_Y &= +g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_{in}}{2} = -v_X .
\end{aligned}
$$

The key fact for the second stage is that **$v_Y = -v_X$**.

### Step 2 — The active pull-up path ($M_9$, $M_{11}$, $M_7$)

$M_9$ (gate at Y) changes its drain current by $g_{m9}v_Y$, drawn from the diode-connected $M_{11}$. The diode's resistance, about $1/g_{m11}$, is far below $r_{O9}$, so essentially all of it flows through $M_{11}$, and the common gate node A of $M_{11}$ and $M_7$ moves by

$$v_A \approx -\frac{g_{m9}v_Y}{g_{m11}} .$$

$M_7$ has the same source-gate voltage as $M_{11}$ and is $K$ times larger, so $g_{m7} = Kg_{m11}$ and its current into $V_{out1}$ changes by

$$i_7 = g_{m7}(-v_A) = Kg_{m11}\cdot\frac{g_{m9}v_Y}{g_{m11}} = Kg_{m9}v_Y .$$

### Step 3 — Second-stage gain at $V_{out1}$

At $V_{out1}$, $M_5$ draws $g_{m5}v_X$ to ground, $M_7$ injects $Kg_{m9}v_Y$, and $r_{O5}$, $r_{O7}$ connect the node to ac ground.

<!-- diagram: diagram-01.cir -->

KCL at $V_{out1}$:

$$
\begin{aligned}
Kg_{m9}v_Y &= g_{m5}v_X + \frac{v_{out1}}{r_{O5}\parallel r_{O7}}\\
v_{out1} &= (r_{O5}\parallel r_{O7})\left(Kg_{m9}v_Y - g_{m5}v_X\right).
\end{aligned}
$$

With $v_Y = -v_X$:

$$v_{out1} = -(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_X .$$

The transconductances **add**: when X rises, $M_5$ sinks more *and* $M_7$ sources less, both pulling $V_{out1}$ down; a fixed current-source load would leave only $g_{m5}$. By symmetry ($M_6$ driven by Y, $M_8$ controlled by X):

$$v_{out2} = -(g_{m6} + Kg_{m10})(r_{O6}\parallel r_{O8})\,v_Y = +(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_X .$$

### Step 4 — Overall differential gain

$$
\begin{aligned}
v_{out1} - v_{out2} &= -2(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_X\\
&= -2(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\left[-g_{m1}(r_{O1}\parallel r_{O3})\frac{v_{in}}{2}\right]\\
&= g_{m1}(r_{O1}\parallel r_{O3})\,(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})\,v_{in} ,
\end{aligned}
$$

so

$$A_v = \frac{v_{out1} - v_{out2}}{v_{in}} = g_{m1}(r_{O1}\parallel r_{O3})\cdot(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7}).$$

If $M_9$ has the same overdrive as $M_5$ and $K$ makes $M_7$'s bias current $KI_{D9}$ equal $I_{D5}$, then $Kg_{m9} = K(2I_{D9}/V_{ov}) = 2I_{D5}/V_{ov} = g_{m5}$ and

$$A_v = 2\,g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5}(r_{O5}\parallel r_{O7}),$$

twice the gain with ordinary current-source loads, at no cost in output resistance.

### Result

$$|A_v| = g_{m1}(r_{O1}\parallel r_{O3})\cdot(g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7}),$$

and with $Kg_{m9} = g_{m5}$ the second-stage transconductance doubles: $|A_v| = 2g_{m1}(r_{O1}\parallel r_{O3})\,g_{m5}(r_{O5}\parallel r_{O7})$. (The approximation $i_9$ fully reaching $M_{11}$ uses $1/g_{m11} \ll r_{O9}$; the pole at the mirror node A is ignored at low frequencies.)

**Common mistake.** Writing the second-stage gain as $g_{m5}(r_{O5}\parallel r_{O7})$, treating $M_7$ as a fixed current source, which is exactly what this circuit avoids.

**Common mistake.** Subtracting $Kg_{m9}$, as would be right if $M_9$ were driven by X. The crossed connection drives $M_9$ from Y, which moves opposite to X, so the effects add.

**Common mistake.** Treating the first-stage loads as diode-connected ($1/g_{m3}$). $M_3$ and $M_4$ are current sources, so the load is $r_{O1}\parallel r_{O3}$.
