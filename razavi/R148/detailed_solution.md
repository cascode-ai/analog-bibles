# Detailed solution - R148

**Approach.** Label the seven terminals of the structure. Use the basic rules: an NMOS conducts from drain to source and a PMOS from source to drain; the source of an NMOS is its lower-potential diffusion and the source of a PMOS its higher-potential one; a signal can enter at a gate, a source or a bulk; the output must be a drain or a source. Then list every arrangement that can be biased and gives gain, for each way of orienting the two devices. The total depends on how variants are counted, so the counting convention is stated.

### Step 1 — Terminals, notation and ground rules

Label the structure as drawn:

- $T$: the top terminal (source of the PMOS $M_2$);
- $X$: the middle node (the joined drains of $M_2$ and of the NMOS $M_1$);
- $Y$: the bottom terminal (source of $M_1$);
- $G_1$, $G_2$: the gates; $B_1$, $B_2$: the bulks. Being separate terminals, the bulks can be tied to the supplies, to their own sources (no body effect) or driven by a signal.

Symbols: $g_m$ is the transconductance, $g_{mb}$ the body transconductance, $r_O$ the output resistance from channel-length modulation, $V_b$ a fixed bias voltage (an AC ground). Added non-transistor elements (resistors, capacitors, voltage and current sources) are allowed; a third transistor is not.

**Rule 1 — DC path.** The NMOS carries current from drain to source and its source is the lower of its two diffusion terminals. The PMOS carries current from source to drain and its source is the *higher* of its two terminals. Every device's bias current needs a complete path from the supply to ground.

**Rule 2 — inputs.** Gate (common source or follower, via $g_m$), source (common gate) or bulk (via $g_{mb}$).

**Rule 3 — outputs.** A drain or a source. A gate or bulk not tied to a drain/source carries no current and cannot be an output.

**Rule 4 — impedance of a device used as a load.** Looking into the **drain** of a device whose source and gate are at fixed potentials, we see $r_O$: a current source. Looking into the **source** of a device whose gate and drain are at fixed potentials, we see a low resistance. For a test voltage $v_x$ at the source, $v_{gs} = v_{bs} = v_{ds} = -v_x$, so the drain-to-source current is $i_d = -(g_m + g_{mb} + 1/r_O)v_x$ and

$$R_{source} = \frac{v_x}{-i_d} = \frac{1}{g_m + g_{mb}}\parallel r_O .$$

All voltages and currents reverse for a PMOS, so the same result holds for it. A diode-connected device (gate tied to drain) presents $\approx 1/g_m$. A device with a very large $|V_{GS}|$ is in triode and acts as a resistor $R_{on} = 1/[\mu C_{ox}(W/L)(|V_{GS}| - |V_{TH}|)]$.

### Step 2 — The four orientations

| Case | $M_2$ (PMOS) | $M_1$ (NMOS) | Current flow | Character |
|---|---|---|---|---|
| A (as drawn) | S = $T$, D = $X$ | D = $X$, S = $Y$ | $T\to X\to Y$ | inverter-type stack, drains joined, $T$ at $V_{DD}$ |
| A′ (both swapped) | S = $X$, D = $T$ | S = $X$, D = $Y$ | $Y\to X\to T$ | stack with sources joined: $Y$ at $V_{DD}$, $T$ at ground |
| B ($M_1$ swapped) | S = $T$, D = $X$ | S = $X$, D = $Y$ | $T\to X$ and $Y\to X$ | both currents enter $X$ |
| C ($M_2$ swapped) | S = $X$, D = $T$ | D = $X$, S = $Y$ | $X\to T$ and $X\to Y$ | both currents leave $X$ |

- In **A** and **A′**, one DC current flows through both devices, so each device can serve as the load, bias source or degeneration of the other. Unlike two NMOS devices, A′ is *not* a relabelling of A: it puts the NMOS on top with its source at $X$ and the PMOS below with its source at $X$.
- In **B**, $X$ needs a pull-down element (a bias current sink or resistor to ground). In **C**, $X$ needs a pull-up element (a bias current source from $V_{DD}$). With only voltage sources these two cases cannot be biased.

### Step 3 — Case A: common-source stages

$T$ at $V_{DD}$, $Y$ at ground, output at $X$.

**(1) NMOS CS with a PMOS load.** Input $G_1$; $M_1$ is the amplifying device, and $M_2$ is the load, in one of three versions:

- *current source* ($G_2$ at $V_b$; its source $T$ is fixed, so it presents $r_{O2}$): $A_v = -g_{m1}(r_{O1}\parallel r_{O2})$;
- *diode-connected* ($G_2$ tied to $X$; bulk at $V_{DD}$ = source, so no body effect): $A_v = -g_{m1}\left(\dfrac{1}{g_{m2}}\parallel r_{O1}\parallel r_{O2}\right) \approx -\dfrac{g_{m1}}{g_{m2}} = -\sqrt{\dfrac{\mu_n(W/L)_1}{\mu_p(W/L)_2}}$ (equal currents);
- *triode resistor* ($G_2$ at ground): $A_v = -g_{m1}(R_{on2}\parallel r_{O1})$.

Each follows from KCL at $X$. For the current-source load, the small-signal current $g_{m1}v_{in}$ drawn by $M_1$ must come from the two output resistances:

$$
\begin{aligned}
g_{m1}v_{in} + v_{out}\left(\frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right) &= 0\\
A_v = \frac{v_{out}}{v_{in}} &= -g_{m1}(r_{O1}\parallel r_{O2}).
\end{aligned}
$$

**(2) PMOS CS with an NMOS load.** The mirror image: input $G_2$, output $X$; $M_1$ is a current source ($G_1$ at $V_b$), diode ($G_1$ tied to $X$) or triode resistor ($G_1$ at $V_{DD}$):

$$A_v = -g_{m2}(r_{O1}\parallel r_{O2}), \qquad A_v \approx -\frac{g_{m2}}{g_{m1}}, \qquad A_v = -g_{m2}(R_{on1}\parallel r_{O2}).$$

**(3) Complementary CS (CMOS inverter used as an amplifier).** Both gates are driven by the input, biased near the trip point (for example by a large resistor from $X$ back to the gates, with capacitive coupling of the signal). Both devices are transconductors. A rise $v_{in}$ makes $M_1$ sink $g_{m1}v_{in}$ more, while $M_2$ ($v_{sg2} = -v_{in}$) supplies $g_{m2}v_{in}$ less. KCL at $X$:

$$
\begin{aligned}
g_{m1}v_{in} + g_{m2}v_{in} + v_{out}\left(\frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right) &= 0\\
A_v &= -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2}).
\end{aligned}
$$

For the same bias current this gives more gain than (1) because both devices amplify.

### Step 4 — Case A: common-gate stages

**(4) NMOS common gate.** Input at $Y$ (the source of $M_1$; the input source must also carry $M_1$'s DC current to ground); $G_1$ at $V_b$; output $X$; $M_2$ is the load (current source or diode). With $v_g = v_b = 0$ and $v_s = v_{in}$, $M_1$'s drain current changes by $-(g_{m1} + g_{mb1})v_{in}$ (for large $r_{O1}$), and it flows through the load. With a diode load:

$$A_v \approx \frac{g_{m1} + g_{mb1}}{g_{m2}},$$

and with a current-source load, $A_v \approx (g_{m1} + g_{mb1})(r_{O1}\parallel r_{O2})$. The gain is non-inverting.

**(5) PMOS common gate.** Input at $T$ (the source of $M_2$, which must also supply its DC current); $G_2$ at $V_b$; output $X$; $M_1$ is the load (current source or diode). By symmetry, $A_v \approx (g_{m2} + g_{mb2})/g_{m1}$ with a diode load, or $(g_{m2} + g_{mb2})(r_{O1}\parallel r_{O2})$ with a current-source load.

### Step 5 — Case A′: followers and degenerated stages (sources joined at $X$)

Here $Y$ (drain of $M_1$) connects to $V_{DD}$ and $T$ (drain of $M_2$) to ground; the NMOS sits on top and the PMOS below, with both sources at $X$.

**(6) NMOS source follower with a PMOS follower-type load.** Input $G_1$, output $X$, $G_2$ at $V_b$. By Rule 4, $M_2$ presents $1/(g_{m2} + g_{mb2})$ at $X$, not a constant current, because its $V_{SG}$ follows the output. KCL at $X$, with $r_O$ neglected:

$$
\begin{aligned}
g_{m1}(v_{in} - v_{out}) - g_{mb1}v_{out} &= (g_{m2} + g_{mb2})v_{out}\\
A_v &= \frac{g_{m1}}{g_{m1} + g_{mb1} + g_{m2} + g_{mb2}} \approx \frac{g_{m1}}{g_{m1} + g_{m2}}\ \text{(bulks tied to sources)}.
\end{aligned}
$$

**(7) PMOS source follower with an NMOS follower-type load.** Input $G_2$, output $X$, $G_1$ at $V_b$: $A_v = g_{m2}/(g_{m2} + g_{mb2} + g_{m1} + g_{mb1})$.

**(8) Complementary (push-pull) follower.** Both gates are driven by the input through two DC level-shifting voltage sources, $V_{G1} = v_{in} + V_{B1}$ and $V_{G2} = v_{in} - V_{B2}$, which set the quiescent current (class AB). Both devices are followers. KCL at $X$ gives

$$A_v = \frac{g_{m1} + g_{m2}}{g_{m1} + g_{m2} + g_{mb1} + g_{mb2}} \approx 1\ \text{(bulks tied to } X\text{)}.$$

The output can both source current (through $M_1$) and sink it (through $M_2$).

**(9) NMOS CS degenerated by the PMOS.** Input $G_1$; output $Y$ with a load $R_D$ to $V_{DD}$; $G_2$ at $V_b$, $T$ at ground. $M_2$ is a degeneration resistance $R_S = 1/(g_{m2} + g_{mb2})$ at $X$. With $v_X$ the voltage at $X$ and $M_1$'s bulk grounded, the drain current of $M_1$ is

$$
\begin{aligned}
i &= g_{m1}(v_{in} - v_X) - g_{mb1}v_X, \qquad v_X = iR_S\\
i\left[1 + (g_{m1} + g_{mb1})R_S\right] &= g_{m1}v_{in}\\
A_v = -\frac{iR_D}{v_{in}} &= -\frac{g_{m1}R_D}{1 + (g_{m1} + g_{mb1})/(g_{m2} + g_{mb2})},
\end{aligned}
$$

which is $-g_mR_D/2$ for equal $g_m$ and no body effect.

**(10) PMOS CS degenerated by the NMOS.** Input $G_2$; output $T$ with $R_D$ to ground; $G_1$ at $V_b$, $Y$ at $V_{DD}$. By symmetry, $A_v = -g_{m2}R_D/[1 + (g_{m2} + g_{mb2})/(g_{m1} + g_{mb1})]$.

### Step 6 — Cases B and C: folded cascodes

**(11) Folded cascode with NMOS input (case C).** Turn $M_2$ around so that its source is $X$ and its drain $T$. $M_1$ is a CS device (input $G_1$, $Y$ grounded); $M_2$ is a common-gate cascode ($G_2$ at $V_b$). A bias current source $I_B > I_{D1}$ feeds $X$ from $V_{DD}$, and the output $T$ has a load $R_D$ to ground.

<!-- diagram: diagram-01.cir -->

KCL at $X$: $I_{D2} = I_B - I_{D1}$. A rise $v_{in}$ increases $I_{D1}$ by $g_{m1}v_{in}$. $X$ is a low-impedance node (it looks into $M_2$'s source), so $I_{D2}$ falls by the same amount, and

$$v_{out} = R_D\,\Delta I_{D2} = -g_{m1}R_Dv_{in}, \qquad A_v \approx -g_{m1}R_D .$$

**(12) Folded cascode with PMOS input (case B).** The mirror image: turn $M_1$ around (source at $X$, drain $Y$ as the output with a load to $V_{DD}$). $M_2$ is the CS input device (input $G_2$, $T$ at $V_{DD}$), $M_1$ is the NMOS cascode ($G_1$ at $V_b$), and a bias current sink from $X$ to ground carries both currents. $A_v \approx -g_{m2}R_D$.

### Step 7 — Bulk-driven versions, invalid arrangements, and the count

**(13) Bulk-driven family.** Any of the stages above can be driven at a bulk ($B_1$ or $B_2$) with that device's gate at a fixed bias. The input device's $g_m$ is then replaced by $g_{mb} = \eta g_m$ ($\eta \approx 0.2$–$0.4$). For example, the bulk-driven version of (1) has $A_v = -g_{mb1}(r_{O1}\parallel r_{O2})$. The source–bulk junction must stay off.

**Arrangements that do not work:**

- A PMOS whose source would have to be the most negative node of the circuit, used as a conducting load. A PMOS conducts only from a higher-potential source to a lower-potential drain.
- An output taken at an isolated gate or bulk.
- An input applied to the joined drains with the output taken at a source. A saturated MOSFET hardly responds to its drain voltage, so the gain is only about $1/(g_mr_O)$.
- Cases B and C without the extra bias element at $X$: both device currents then enter (or leave) $X$ and no DC operating point exists.

**Counting convention.** A topology is a distinct combination of input device and type, input terminal, output terminal and device roles. The load variants (current source, diode, triode) of the same stage are grouped, and the bulk-driven versions form one family. This gives:

- 5 stages in case A: (1)–(5);
- 5 stages in case A′: (6)–(10);
- 2 folded cascodes: (11), (12);
- 1 bulk-driven family: (13).

That is 13 in total. Listing each load variant of (1) and (2) separately raises this to 17. Counting only the single-stage CS/CG stages of the as-drawn structure gives about 9.

### Result

There is no unique number. With the convention above there are **about 13 topologies** (about 10 or more under any reasonable convention):

| # | Topology | Input | Output | $M_1$ (NMOS) | $M_2$ (PMOS) |
|---|---|---|---|---|---|
| 1 | NMOS CS | $G_1$ | $X$ | CS device | current-source / diode / triode load |
| 2 | PMOS CS | $G_2$ | $X$ | current-source / diode / triode load | CS device |
| 3 | CMOS inverter amplifier | $G_1 = G_2$ | $X$ | CS device | CS device |
| 4 | NMOS common gate | $Y$ | $X$ | CG device | load |
| 5 | PMOS common gate | $T$ | $X$ | load | CG device |
| 6 | NMOS follower (both swapped) | $G_1$ | $X$ | follower | follower-type load $\approx 1/(g_{m2} + g_{mb2})$ |
| 7 | PMOS follower (both swapped) | $G_2$ | $X$ | follower-type load | follower |
| 8 | Push-pull follower (both swapped) | $G_1$, $G_2$ via level shifts | $X$ | follower | follower |
| 9 | NMOS CS, PMOS degeneration (both swapped) | $G_1$ | $Y$ ($R_D$ to $V_{DD}$) | CS device | degeneration |
| 10 | PMOS CS, NMOS degeneration (both swapped) | $G_2$ | $T$ ($R_D$ to ground) | degeneration | CS device |
| 11 | Folded cascode ($M_2$ swapped, $I_B$ into $X$) | $G_1$ | $T$ | CS input device | CG cascode |
| 12 | Folded cascode ($M_1$ swapped, $I_B$ out of $X$) | $G_2$ | $Y$ | CG cascode | CS input device |
| 13 | Bulk-driven versions | $B_1$ or $B_2$ | as above | as above | as above |

Key gains: $-g_{m1}(r_{O1}\parallel r_{O2})$ for the CS stage with a current-source load, $-g_{m1}/g_{m2}$ with a diode load, $-(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})$ for the inverter, $(g_m + g_{mb})(r_{O1}\parallel r_{O2})$ for a common gate with a current-source load, $g_{m1}/(g_{m1} + g_{m2})$ for the follower with a follower-type load, and $-g_mR_D$ for the folded cascodes.

**Common mistake.** Treating the device below a source follower in case A′ (for example the PMOS in (6), with its gate at a bias) as a constant current sink. Its source is the output node, so its $V_{SG}$ follows the output and it presents only about $1/g_{m2}$. The follower gain is then about $g_{m1}/(g_{m1} + g_{m2})$, roughly 1/2, not 1.

**Common mistake.** Drawing a folded cascode with only the two transistors and supply connections. When one device is turned around, both drain currents enter (or leave) $X$. A separate bias current source (or resistor) at $X$, and a load at the output, are indispensable.

**Common mistake.** Using a PMOS "upside down" (source at the lowest potential) as a conducting load, or taking the output at a gate or bulk. A PMOS conducts only from its higher-potential terminal, and an output needs a drain or source node where signal current turns into voltage.
