# Detailed solution - R510

**Approach.** Use the standard result for any amplifier with a high-impedance output: low-frequency gain $= G_m R_{out}$. Here $G_m$ is the short-circuit transconductance (signal current delivered into an AC-grounded output) and $R_{out}$ the output resistance. With a differential input both tail nodes are virtual grounds, so we can follow the signal along each path by hand. The two paths, the main one through $M_2$ and the secondary one through $M_A$ and $M_7$, inject current into the same folding node P, and their currents add.

### Step 1 — Reading the circuit

From the figure:

- **Main folded cascode.** NMOS input pair $M_1$–$M_2$ with its own tail current source. The drain of $M_1$ goes to node Q and the drain of $M_2$ to node P.
- **PMOS current sources** $M_7$ (drain at P) and $M_8$ (drain at Q), sources at $V_{DD}$. Their gates are *not* at fixed bias: the gate of $M_7$ is node X and the gate of $M_8$ is node Y.
- **Cascodes.** PMOS common-gate devices $M_5$ (source P) and $M_6$ (source Q) carry the folded currents to the two outputs. Each output is loaded by an NMOS cascode current source ($M_3$ over $M_9$ on the left, $M_4$ over $M_{10}$ on the right).
- **Secondary (gray) path.** A second NMOS pair, $M_A$ (gate tied to the gate of $M_1$, drain at X) and $M_B$ (gate tied to the gate of $M_2$, drain at Y), with its own tail source and ideal current-source loads $I_1$ (at X) and $I_2$ (at Y).

The output is taken differentially between the drain of $M_5$ ("left output") and the drain of $M_6$ ("right output"). We define $V_{out} = V_{left} - V_{right}$ and $V_{in} = V_{G1} - V_{G2}$.

Symbols used below: $g_{mk}$ is the transconductance and $r_{Ok}$ the output resistance of transistor $M_k$, with $g_{mA}$ and $r_{OA}$ for the gray input devices. Body effect is neglected, as instructed.

### Step 2 — Differential excitation and virtual grounds

Apply $+V_{in}/2$ to the gates of $M_1$ and $M_A$, and $-V_{in}/2$ to the gates of $M_2$ and $M_B$.

- In each pair the two halves receive equal and opposite gate signals. The common source node of each pair therefore does not move: it is a **virtual ground** for small signals. Every input transistor then works as a common-source device with a grounded source.
- The circuit is symmetric, so the right output moves by exactly the opposite amount of the left output. It is enough to find $v_{left}$; then $V_{out} = v_{left} - v_{right} = 2v_{left}$.

The left output is fed from node P, and P receives signal from **two** transistors:
- $M_2$ (main path), whose gate carries $-V_{in}/2$;
- $M_7$ (secondary path), whose gate X is driven by $M_A$, whose gate carries $+V_{in}/2$.

**Small-signal model of this path.** Each MOSFET becomes a voltage-controlled current source $g_m v_{gs}$ from drain to source in parallel with $r_O$:
- node X: a source $g_{mA}(V_{in}/2)$ pulling current from X to ground, in parallel with $r_{OA}$. The ideal source $I_1$ is an open circuit and the gate of $M_7$ draws no current.
- node P: a source $g_{m7}v_X$ (from $M_7$, whose source sits at $V_{DD}$, i.e. AC ground), a source $g_{m1}(-V_{in}/2)$ from $M_2$, and the resistances $r_{O7}$ and $r_{O2}$ to ground.
- between P and the output: $M_5$ as a common-gate stage (gate at AC ground), i.e. a source $g_{m5}v_P$ from P toward the output in parallel with $r_{O5}$.
- the output: the lower cascode, which looks like a resistance $R_{down}$ to ground.

<!-- diagram: diagram-01.cir -->

### Step 3 — Secondary path: the voltage at node X

**KCL at node X.** The small-signal drain current of $M_A$, $g_{mA}v_{gsA} = g_{mA}(V_{in}/2)$, flows out of X through $M_A$. The only other element at X is $r_{OA}$ (from X to the virtual-ground source of $M_A$), because $I_1$ is ideal and has no small-signal current:

$$\frac{v_X}{r_{OA}} + g_{mA}\frac{V_{in}}{2} = 0
\quad\Longrightarrow\quad
v_X = -g_{mA}r_{OA}\,\frac{V_{in}}{2}.$$

Node X is a common-source output with an ideal current-source load, so it has the full intrinsic gain $g_{mA}r_{OA}$ (and the high impedance that will cause trouble at high frequency).

**Current delivered by $M_7$.** $M_7$ is a PMOS with its source at $V_{DD}$ (AC ground) and its gate at X. Its small-signal current flowing from source to drain, i.e. **into** P, is

$$i_7 = g_{m7}\,v_{sg7} = g_{m7}\,(0 - v_X) = g_{m7}g_{mA}r_{OA}\,\frac{V_{in}}{2}.$$

X falls, so $|V_{GS7}|$ increases and $M_7$ pushes **more** current into P.

### Step 4 — Main path: the current of $M_2$

$M_2$ has gate voltage $-V_{in}/2$ and a virtual-ground source. Its drain current, which it pulls **out of** P, changes by

$$i_{d2} = g_{m2}\left(-\frac{V_{in}}{2}\right) = -g_{m1}\frac{V_{in}}{2}\qquad (g_{m2} = g_{m1}\ \text{by symmetry}).$$

Pulling $g_{m1}V_{in}/2$ *less* current out of P is the same as **injecting** $+g_{m1}V_{in}/2$ into P.

**Total signal current injected into P:**

$$i_{inj} = i_7 - i_{d2} = \frac{V_{in}}{2}\left(g_{m1} + g_{m7}g_{mA}r_{OA}\right).$$

The two paths **add**: $M_2$ takes less current out of P while $M_7$ pushes more into it.

### Step 5 — Short-circuit transconductance $G_m$

Short the left output to AC ground and find the current that reaches it.

**KCL at P.** The injected current $i_{inj}$ divides between the resistance $r_{O2}\parallel r_{O7}$ to ground and the source of $M_5$. With the drain of $M_5$ grounded and its gate at AC ground, the current flowing from P through $M_5$ is

$$i_5 = g_{m5}v_P + \frac{v_P}{r_{O5}} = \left(g_{m5} + \frac{1}{r_{O5}}\right)v_P .$$

KCL at P:

$$i_{inj} = \frac{v_P}{r_{O2}\parallel r_{O7}} + \left(g_{m5} + \frac{1}{r_{O5}}\right)v_P .$$

Solve for $v_P$, then for $i_5$:

$$
\begin{aligned}
v_P &= \frac{i_{inj}}{g_{m5} + 1/r_{O5} + 1/(r_{O2}\parallel r_{O7})},\\
i_5 &= i_{inj}\,\frac{g_{m5} + 1/r_{O5}}{g_{m5} + 1/r_{O5} + 1/(r_{O2}\parallel r_{O7})} \approx i_{inj}.
\end{aligned}
$$

The approximation holds because $g_{m5}(r_{O2}\parallel r_{O7}) \gg 1$: the source of the cascode is a low-impedance point ($\approx 1/g_{m5}$) compared with $r_{O2}\parallel r_{O7}$, so essentially all of the folded signal current goes into the cascode. Therefore

$$i_{out,sc} = G_m\frac{V_{in}}{2},\qquad G_m = g_{m1} + g_{m7}g_{mA}r_{OA}.$$

### Step 6 — Output resistance $R_{out}$

Set the inputs to zero. Then $M_A$ produces no signal current and nothing else injects current into X, so $v_X = 0$: $M_7$ behaves as a plain resistance $r_{O7}$. $M_2$ likewise behaves as $r_{O2}$. The output node sees two resistances in parallel.

**Looking up into the drain of $M_5$** (common-gate device with resistance $R_S = r_{O2}\parallel r_{O7}$ at its source). Apply a test voltage $V_t$ at the drain and let $I_t$ flow in the drain and out of the source:
- the source voltage is $v_P = I_tR_S$;
- the gate is at AC ground, so $v_{gs5} = -I_tR_S$;
- the current through the device is the controlled source plus the current in $r_{O5}$:
$$I_t = g_{m5}(-I_tR_S) + \frac{V_t - I_tR_S}{r_{O5}} .$$

Collect the $I_t$ terms:

$$I_t\left(1 + g_{m5}R_S + \frac{R_S}{r_{O5}}\right) = \frac{V_t}{r_{O5}}
\quad\Longrightarrow\quad
R_{up} = \frac{V_t}{I_t} = r_{O5} + R_S + g_{m5}r_{O5}R_S = (1 + g_{m5}r_{O5})(r_{O2}\parallel r_{O7}) + r_{O5}.$$

Since $g_{m5}r_{O5} \gg 1$,

$$R_{up} \approx g_{m5}r_{O5}\,(r_{O2}\parallel r_{O7}).$$

**Looking down into the drain of $M_3$** (cascode over $M_9$; the same derivation with $R_S = r_{O9}$):

$$R_{down} = (1 + g_{m3}r_{O3})\,r_{O9} + r_{O3} \approx g_{m3}r_{O3}r_{O9}.$$

**Output resistance:**

$$R_{out} = R_{up}\parallel R_{down} \approx \left[g_{m5}r_{O5}(r_{O2}\parallel r_{O7})\right]\parallel\left[g_{m3}r_{O3}r_{O9}\right].$$

The right output has the same value with $M_6$, $M_1$, $M_8$, $M_4$, $M_{10}$ in place of $M_5$, $M_2$, $M_7$, $M_3$, $M_9$.

### Step 7 — Voltage gain

The output node behaves as a Norton source $G_mV_{in}/2$ driving $R_{out}$:

$$v_{left} = G_mR_{out}\,\frac{V_{in}}{2},\qquad v_{right} = -G_mR_{out}\,\frac{V_{in}}{2}.$$

The differential output is

$$V_{out} = v_{left} - v_{right} = G_mR_{out}V_{in},$$

$$\boxed{A_v = \frac{V_{out}}{V_{in}} \approx \left(g_{m1} + g_{m7}g_{mA}r_{OA}\right)\left\{\left[g_{m5}r_{O5}(r_{O2}\parallel r_{O7})\right]\parallel\left[g_{m3}r_{O3}r_{O9}\right]\right\}.}$$

**How much is gained.** Without the gray section the folded cascode has $A_v = g_{m1}R_{out}$. The secondary path multiplies the gain by

$$\frac{g_{m1} + g_{m7}g_{mA}r_{OA}}{g_{m1}} = 1 + \frac{g_{m7}}{g_{m1}}\,g_{mA}r_{OA}.$$

If $g_{m7}$ and $g_{m1}$ are comparable, the boost is roughly one extra intrinsic gain $g_{mA}r_{OA}$ (for example $\approx 20$–$50$). The secondary path is simply a common-source pre-amplifier ($M_A$ with an ideal load) in front of the transconductor $M_7$. The price is the high-impedance node X, which adds a low-frequency pole.

### Result

$$A_v = \frac{V_{out}}{V_{in}} \approx \left(g_{m1} + g_{m7}g_{mA}r_{OA}\right)R_{out},\qquad R_{out} \approx \left[g_{m5}r_{O5}\,(r_{O2}\parallel r_{O7})\right]\parallel\left[g_{m3}r_{O3}\,r_{O9}\right]$$

for the differential output, and symmetrically for the other side. The short-circuit transconductance $G_m = g_{m1} + g_{m7}g_{mA}r_{OA}$ combines the main path ($M_2$ steering current at P) and the secondary path ($M_A$ amplifying at X, then $M_7$ converting $v_X$ into current at P); the two contributions add. A single-ended output (one output to ground) has half this gain.

**Common mistake.** Subtracting the two paths. Raising the gate of $M_A$ *lowers* X, which *increases* $|V_{GS7}|$ and the current of $M_7$ into P. At the same time $M_2$ (driven with the opposite polarity) draws *less* current out of P. Both effects push current into the cascode $M_5$, so they add.

**Common mistake.** Taking the resistance at X as $r_{OA}\parallel r_{O,I1}$ with a finite current-source resistance. The problem says to neglect channel-length modulation in $I_1$ and $I_2$, so X sees only $r_{OA}$. Dropping $r_{OA}$ as well would make $v_X$, and the gain, infinite.

**Common mistake.** Misreading the connections, for example letting $M_7$ feed node Q or $M_1$ drive node P. $M_7$ and $M_2$ both act at P (which feeds $M_5$); $M_8$ and $M_1$ both act at Q (which feeds $M_6$).
