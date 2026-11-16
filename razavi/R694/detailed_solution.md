# Detailed solution - R694

**Approach.** First derive the output impedance of the NMOS cascode current source and identify what can make it small: a lower transistor output resistance $r_O$ (which enters squared) or a leakage path in parallel with the output. Then examine each fabrication error and ask whether it produces one of these two effects.

### Step 1 — Output impedance of the cascode

Call the bottom (current-source) transistor $M_1$ and the cascode transistor $M_2$. The drain of $M_1$ and the source of $M_2$ meet at node X; the drain of $M_2$ is the output. Both gates are held at fixed bias voltages, so both are at AC ground.

**Small-signal model.**

- $M_1$: its gate is at AC ground and its source at ground, so $v_{gs1} = 0$ and its controlled source is inactive. It reduces to its output resistance $r_{O1}$ from X to ground.
- $M_2$: gate at AC ground, source at X, so $v_{gs2} = -v_X$; its bulk is the grounded substrate, so $v_{bs2} = -v_X$. It contributes a current $g_{m2}v_{gs2} + g_{mb2}v_{bs2}$ from out to X (drain to source), in parallel with $r_{O2}$.
- A test voltage $V_X$ is applied at the output and draws a current $I_X$.
- For later use, a parasitic leakage resistance $R_{leak}$ from the output to ground is also shown (it is infinite in a healthy circuit).

<!-- diagram: diagram-01.cir -->

**Derivation** (with $R_{leak} = \infty$). The whole current $I_X$ flows down through $M_2$ and then through $r_{O1}$, so

$$v_X = I_Xr_{O1}.$$

KCL at the output node: the current entering equals the controlled-source current plus the current in $r_{O2}$:

$$I_X = g_{m2}(-v_X) + g_{mb2}(-v_X) + \frac{V_X - v_X}{r_{O2}} .$$

Substitute $v_X = I_Xr_{O1}$:

$$I_X = -(g_{m2} + g_{mb2})r_{O1}I_X + \frac{V_X - I_Xr_{O1}}{r_{O2}} .$$

Multiply by $r_{O2}$:

$$I_Xr_{O2} = -(g_{m2} + g_{mb2})r_{O1}r_{O2}I_X + V_X - I_Xr_{O1} .$$

Solve for $V_X$:

$$V_X = I_X\big[r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2}\big],$$

$$R_{out} = \frac{V_X}{I_X} = r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2} \approx g_{m2}r_{O2}r_{O1},$$

where the approximation uses $g_{m2}r_{O2} \gg 1$ and neglects the body effect.

**What can make $R_{out}$ much smaller than expected.**

1. **A lower $r_O$.** Since $R_{out} \propto r_O^2$, halving $r_O$ divides $R_{out}$ by four. Example: $g_{m2} = 1$ mS and $r_{O1} = r_{O2} = 50\ \mathrm{k}\Omega$ give $R_{out} \approx 10^{-3}\times(5\times10^4)^2 = 2.5\ \mathrm{M}\Omega$; with $r_O = 25\ \mathrm{k}\Omega$ it is only $0.63\ \mathrm{M}\Omega$.
2. **A parallel leakage path.** Any resistance $R_{leak}$ from the output to another node simply appears in parallel: $R_{out,eff} = R_{out}\parallel R_{leak}$. Because $R_{out}$ is so large, even a weak leak dominates: $R_{leak} = 1\ \mathrm{M}\Omega$ in parallel with 2.5 MΩ gives 0.71 MΩ.

(A *lower* $g_{m2}$ would also reduce $R_{out}$, but only linearly.)

### Step 2 — (a) Channeling during the source/drain implant: **can cause it**

**What channeling is.** In ion implantation, ions travelling along a major crystal axis of the silicon lattice can slip down the open "channels" between rows of atoms and suffer far fewer collisions. They penetrate much deeper than the intended projected range. (It is normally suppressed by tilting the wafer about 7° or by a screen oxide.)

**Consequence for the transistors.** The source/drain dopants end up much deeper than intended, so the junctions are **deep**, and the lateral spread under the gate grows with depth. Then:

- the effective channel length $L_{eff} = L_{drawn} - 2L_D$ is shorter (here $L_D$ is the lateral diffusion under the gate);
- with deep junctions, the drain's field reaches farther into the channel and the gate has less control over the channel potential, so **short-channel effects** become much stronger: drain-induced barrier lowering (DIBL), stronger channel-length modulation, and a tendency toward punch-through.

All of these make the drain current depend more strongly on $V_{DS}$, i.e. they **reduce $r_O$**. Both $r_{O1}$ and $r_{O2}$ drop, and since $R_{out} \approx g_{m2}r_{O2}r_{O1}$ depends on their product, the output impedance falls substantially. **Verdict: yes.**

### Step 3 — (b) Omission of the channel-stop implant: **can cause it**

**What the channel stop does.** Between transistors lies the thick field oxide. Any interconnect line (poly or metal) running over it forms, together with the n+ regions on either side, a **parasitic "field" MOSFET**: the line is its gate, the field oxide is its gate oxide, and two neighbouring n+ diffusions are its source and drain. Because the field oxide is thick, its threshold is already higher than that of a real device; the channel-stop implant (extra p-type doping under the field oxide in the NMOS regions) raises it further, well above $V_{DD}$, so these parasitic devices never turn on.

**Without the channel stop.** The surface under the field oxide keeps the light substrate doping, so the field threshold may fall within the supply range. A line at a high potential (for example $V_{DD}$, or any signal near it) running over the field region can then **invert the surface** and connect two neighbouring n+ regions. This also weakens isolation between adjacent n+ regions even without a line above them.

**Why a "large circuit" matters.** In a large layout many lines cross the field regions near any given device, so it is very likely that some line at a high potential passes between the output (drain) diffusion of the cascode and a nearby n+ region at a different potential, e.g. a grounded source or another circuit's node.

**Effect on the current source.** The parasitic field transistor conducts a current that depends on $V_{out}$, i.e. it acts as a resistance $R_{leak}$ in parallel with the output. A cascode is designed to have a very high $R_{out}$, so even a modest leakage conductance dominates (Step 1, point 2). **Verdict: yes.**

### Step 4 — (c) Insufficient gate-oxide growth: **cannot cause it**

**What changes.** A thinner gate oxide means a larger oxide capacitance $C_{ox} = \varepsilon_{ox}/t_{ox}$.

**At the intended bias current** (the usual situation: a current source is biased by mirroring a reference current), the transconductance rises:

$$g_{m2} = \sqrt{2\mu_nC_{ox}\Big(\frac{W}{L}\Big)_2I_D} \;\propto\; \sqrt{C_{ox}} .$$

$r_O = 1/(\lambda I_D)$ is set by the current and $\lambda$; if anything, a thinner oxide gives the gate *better* control of the channel relative to the drain, which reduces short-channel effects and raises $r_O$. Hence

$$R_{out} \approx g_{m2}r_{O2}r_{O1}$$

**increases**, not decreases.

**If the gate voltages were fixed instead** (so that the current rises in proportion to $C_{ox}$), then $g_m = \mu C_{ox}(W/L)V_{ov} \propto C_{ox}$ and $r_O = 1/(\lambda I_D) \propto 1/C_{ox}$, so $R_{out} \propto C_{ox}\cdot(1/C_{ox})^2 = 1/C_{ox}$. A modestly thinner oxide then lowers $R_{out}$ only in proportion, by a modest factor, nothing like the substantial collapse caused by (a) or (b).

Only an oxide so thin that it breaks down or leaks through the gate would cause a gross failure, and that is a different defect (a gate fault), not a low output impedance. **Verdict: no.**

### Result

- **(a) Channeling during the S/D implant — yes.** Deep junctions shorten $L_{eff}$ and strengthen short-channel effects (DIBL, channel-length modulation, punch-through), lowering $r_O$; since $R_{out} \approx g_{m2}r_{O2}r_{O1} \propto r_O^2$, the output impedance drops substantially.
- **(b) Omission of the channel-stop implant — yes.** The field threshold becomes low, so interconnect lines at high potential (many in a large circuit) invert the field surface and create parasitic field transistors between the output n+ region and neighbouring n+ regions; this leakage path in parallel with the very large $R_{out}$ dominates it.
- **(c) Insufficient gate-oxide growth — no.** A thinner oxide increases $C_{ox}$ and hence $g_m$ at the same current (and improves gate control), which *raises* $R_{out}$.

**Common mistake.** Choosing (c) with the argument "a thin oxide lowers $g_m$". It is the opposite: $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ grows with $C_{ox} = \varepsilon_{ox}/t_{ox}$, so a thinner oxide improves the cascode.

**Common mistake.** Explaining (b) as punch-through between the source and drain *under the gate*. The channel stop sits under the **field oxide**, between devices, not under the gate; its absence creates leakage between neighbouring diffusions through parasitic field transistors.

**Common mistake.** Overlooking how strongly a cascode reacts to these errors. Because $R_{out}$ is the product $g_{m2}r_{O2}r_{O1}$, a moderate loss of $r_O$ is squared, and because $R_{out}$ is so large, even a high-resistance leakage path in parallel takes over.
