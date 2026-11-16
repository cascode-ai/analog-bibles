# Detailed solution - R510

**Approach.** The low-frequency gain is $G_mR_{out}$, with $G_m$ the short-circuit transconductance and $R_{out}$ the output resistance. With a differential input both tail nodes are virtual grounds. The main path (through $M_2$) and the secondary path (through $M_A$ and $M_7$) inject current into the same folding node P, and their currents add.

### Step 1 — Differential excitation and the signal path

Apply $+V_{in}/2$ to the gates of $M_1$ and $M_A$ and $-V_{in}/2$ to the gates of $M_2$ and $M_B$, so $V_{in} = V_{G1} - V_{G2}$; the source node of each pair is a virtual ground. Take $V_{out} = v_{left} - v_{right}$, the drain of $M_5$ minus the drain of $M_6$. By symmetry $v_{right} = -v_{left}$, so $V_{out} = 2v_{left}$.

The left output is fed from P, which receives signal from $M_2$ (gate at $-V_{in}/2$) and from $M_7$, whose gate X is driven by $M_A$ (gate at $+V_{in}/2$). In the small-signal model:
- at X: $g_{mA}(V_{in}/2)$ pulled from X to ground, in parallel with $r_{OA}$; the ideal $I_1$ is an open circuit and the gate of $M_7$ draws no current;
- at P: $g_{m7}v_X$ from $M_7$ (source at $V_{DD}$, i.e. AC ground), $g_{m1}(-V_{in}/2)$ from $M_2$, and $r_{O7}$ and $r_{O2}$ to ground;
- from P to the output: $M_5$ as a common-gate stage, $g_{m5}v_{gs5}$ in parallel with $r_{O5}$, loaded by the lower cascode, a resistance $R_{down}$ to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — Secondary path: the voltage at node X

The drain current of $M_A$, $g_{mA}(V_{in}/2)$, flows out of X, and the only other element at X is $r_{OA}$ (since $I_1$ is ideal). KCL at X:

$$\frac{v_X}{r_{OA}} + g_{mA}\frac{V_{in}}{2} = 0
\quad\Longrightarrow\quad
v_X = -g_{mA}r_{OA}\,\frac{V_{in}}{2}.$$

X is a common-source output with an ideal load, so it has the full intrinsic gain $g_{mA}r_{OA}$ (and the high impedance that causes the pole).

$M_7$ has its source at AC ground and its gate at X, so its small-signal current from source to drain, i.e. **into** P, is

$$i_7 = g_{m7}\,v_{sg7} = g_{m7}\,(0 - v_X) = g_{m7}g_{mA}r_{OA}\,\frac{V_{in}}{2}.$$

X falls, so $|V_{GS7}|$ increases and $M_7$ pushes **more** current into P.

### Step 3 — Main path: the current of $M_2$

With its gate at $-V_{in}/2$ and a virtual-ground source, $M_2$ changes the current it pulls **out of** P by

$$i_{d2} = g_{m2}\left(-\frac{V_{in}}{2}\right) = -g_{m1}\frac{V_{in}}{2}\qquad (g_{m2} = g_{m1}\ \text{by symmetry}),$$

which is the same as injecting $+g_{m1}V_{in}/2$ into P. The total signal current injected into P is

$$i_{inj} = i_7 - i_{d2} = \frac{V_{in}}{2}\left(g_{m1} + g_{m7}g_{mA}r_{OA}\right).$$

The two paths **add**: $M_2$ takes less current out of P while $M_7$ pushes more into it.

### Step 4 — Short-circuit transconductance $G_m$

Short the left output to AC ground. With the drain and gate of $M_5$ grounded, the current from P through $M_5$ is

$$i_5 = g_{m5}v_P + \frac{v_P}{r_{O5}} = \left(g_{m5} + \frac{1}{r_{O5}}\right)v_P ,$$

and KCL at P gives

$$i_{inj} = \frac{v_P}{r_{O2}\parallel r_{O7}} + \left(g_{m5} + \frac{1}{r_{O5}}\right)v_P .$$

Solving,

$$
\begin{aligned}
v_P &= \frac{i_{inj}}{g_{m5} + 1/r_{O5} + 1/(r_{O2}\parallel r_{O7})},\\
i_5 &= i_{inj}\,\frac{g_{m5} + 1/r_{O5}}{g_{m5} + 1/r_{O5} + 1/(r_{O2}\parallel r_{O7})} \approx i_{inj},
\end{aligned}
$$

since $g_{m5}(r_{O2}\parallel r_{O7}) \gg 1$: the cascode source ($\approx 1/g_{m5}$) takes essentially all of the folded current. Therefore

$$i_{out,sc} = G_m\frac{V_{in}}{2},\qquad G_m = g_{m1} + g_{m7}g_{mA}r_{OA}.$$

### Step 5 — Output resistance $R_{out}$

With the inputs at zero, $M_A$ injects nothing into X, so $v_X = 0$ and $M_7$ is just $r_{O7}$; $M_2$ is $r_{O2}$. Looking up into the drain of $M_5$, a cascode with $R_S = r_{O2}\parallel r_{O7}$ at its source:

$$R_{up} = (1 + g_{m5}r_{O5})(r_{O2}\parallel r_{O7}) + r_{O5} \approx g_{m5}r_{O5}\,(r_{O2}\parallel r_{O7}).$$

Looking down into the drain of $M_3$ (cascode over $M_9$, $R_S = r_{O9}$):

$$R_{down} = (1 + g_{m3}r_{O3})\,r_{O9} + r_{O3} \approx g_{m3}r_{O3}r_{O9}.$$

Hence

$$R_{out} = R_{up}\parallel R_{down} \approx \left[g_{m5}r_{O5}(r_{O2}\parallel r_{O7})\right]\parallel\left[g_{m3}r_{O3}r_{O9}\right].$$

The right output has the same value with $M_6$, $M_1$, $M_8$, $M_4$, $M_{10}$ in place of $M_5$, $M_2$, $M_7$, $M_3$, $M_9$.

### Step 6 — Voltage gain

Each output is a Norton source $\pm G_mV_{in}/2$ driving $R_{out}$:

$$v_{left} = G_mR_{out}\,\frac{V_{in}}{2},\qquad v_{right} = -G_mR_{out}\,\frac{V_{in}}{2},\qquad V_{out} = v_{left} - v_{right} = G_mR_{out}V_{in},$$

$$\boxed{A_v = \frac{V_{out}}{V_{in}} \approx \left(g_{m1} + g_{m7}g_{mA}r_{OA}\right)\left\{\left[g_{m5}r_{O5}(r_{O2}\parallel r_{O7})\right]\parallel\left[g_{m3}r_{O3}r_{O9}\right]\right\}.}$$

Without the gray section the gain is $g_{m1}R_{out}$, so the secondary path multiplies it by

$$\frac{g_{m1} + g_{m7}g_{mA}r_{OA}}{g_{m1}} = 1 + \frac{g_{m7}}{g_{m1}}\,g_{mA}r_{OA}.$$

If $g_{m7}$ and $g_{m1}$ are comparable, that is roughly one extra intrinsic gain $g_{mA}r_{OA}$ (for example $\approx 20$–$50$): the secondary path is a common-source pre-amplifier ($M_A$ with an ideal load) in front of the transconductor $M_7$. The price is the high-impedance node X, which adds a low-frequency pole.

### Result

$$A_v = \frac{V_{out}}{V_{in}} \approx \left(g_{m1} + g_{m7}g_{mA}r_{OA}\right)R_{out},\qquad R_{out} \approx \left[g_{m5}r_{O5}\,(r_{O2}\parallel r_{O7})\right]\parallel\left[g_{m3}r_{O3}\,r_{O9}\right]$$

for the differential output, and symmetrically for the other side. The short-circuit transconductance $G_m = g_{m1} + g_{m7}g_{mA}r_{OA}$ combines the main path ($M_2$ steering current at P) and the secondary path ($M_A$ amplifying at X, then $M_7$ converting $v_X$ into current at P); the two contributions add. A single-ended output (one output to ground) has half this gain.

**Common mistake.** Subtracting the two paths. Raising the gate of $M_A$ *lowers* X, which *increases* the current of $M_7$ into P, while $M_2$ (driven with the opposite polarity) draws *less* current out of P. Both push current into the cascode $M_5$, so they add.

**Common mistake.** Taking the resistance at X as $r_{OA}\parallel r_{O,I1}$ with a finite current-source resistance. Channel-length modulation in $I_1$ and $I_2$ is neglected, so X sees only $r_{OA}$; dropping $r_{OA}$ as well would make $v_X$, and the gain, infinite.

**Common mistake.** Misreading the connections, for example letting $M_7$ feed node Q or $M_1$ drive node P. $M_7$ and $M_2$ both act at P (which feeds $M_5$); $M_8$ and $M_1$ both act at Q (which feeds $M_6$).
