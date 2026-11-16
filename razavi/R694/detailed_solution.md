# Detailed solution - R694

**Approach.** The cascode output impedance becomes small if the transistor output resistance $r_O$ (which enters squared) falls or if a leakage path appears in parallel with the output. Examine each fabrication error for one of these two effects.

### Step 1 — Output impedance of the cascode

Call the bottom (current-source) transistor $M_1$ and the cascode transistor $M_2$, meeting at node X; both gates are at ac ground, so $M_1$ reduces to $r_{O1}$ from X to ground, and $M_2$ has $v_{gs2} = v_{bs2} = -v_X$. A parasitic leakage resistance $R_{leak}$ from the output to ground is also shown for later use (infinite in a healthy circuit).

<!-- diagram: diagram-01.cir -->

With $R_{leak} = \infty$, the test current $I_X$ flows through $r_{O1}$, so $v_X = I_Xr_{O1}$, and KCL at the output gives the standard cascode result:

$$I_X = -(g_{m2} + g_{mb2})v_X + \frac{V_X - v_X}{r_{O2}} \quad\Longrightarrow\quad R_{out} = \frac{V_X}{I_X} = r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2} \approx g_{m2}r_{O2}r_{O1},$$

using $g_{m2}r_{O2} \gg 1$ and neglecting the body effect. So $R_{out}$ falls substantially in two ways:

1. **A lower $r_O$.** Since $R_{out} \propto r_O^2$, halving $r_O$ divides $R_{out}$ by four. Example: $g_{m2} = 1$ mS and $r_{O1} = r_{O2} = 50\ \mathrm{k}\Omega$ give $R_{out} \approx 10^{-3}\times(5\times10^4)^2 = 2.5\ \mathrm{M}\Omega$; with $r_O = 25\ \mathrm{k}\Omega$ it is only $0.63\ \mathrm{M}\Omega$.
2. **A parallel leakage path.** $R_{out,eff} = R_{out}\parallel R_{leak}$, and because $R_{out}$ is so large, even a weak leak dominates: $R_{leak} = 1\ \mathrm{M}\Omega$ in parallel with 2.5 MΩ gives 0.71 MΩ.

(A *lower* $g_{m2}$ would also reduce $R_{out}$, but only linearly.)

### Step 2 — (a) Channeling during the source/drain implant: **can cause it**

In channeling, ions travelling along a major crystal axis slip between rows of atoms and penetrate far deeper than the intended range (normally prevented by a 7° tilt or a screen oxide). The source/drain junctions therefore end up **deep**, with a lateral spread under the gate that grows with depth. Then:

- the effective channel length $L_{eff} = L_{drawn} - 2L_D$ is shorter ($L_D$: the lateral diffusion under the gate);
- the drain's field reaches farther into the channel and the gate loses control of the channel potential, so **short-channel effects** become much stronger: drain-induced barrier lowering (DIBL), stronger channel-length modulation, and a tendency toward punch-through.

All of these make the drain current depend more strongly on $V_{DS}$, i.e. they **reduce $r_O$**. Both $r_{O1}$ and $r_{O2}$ drop, and $R_{out} \approx g_{m2}r_{O2}r_{O1}$ falls with their product. **Verdict: yes.**

### Step 3 — (b) Omission of the channel-stop implant: **can cause it**

An interconnect line over the field oxide forms a **parasitic field MOSFET** with the n+ regions on either side; the channel-stop implant (extra p-type doping under the NMOS field oxide) raises its threshold well above $V_{DD}$. Without it, the field threshold may fall within the supply range, so a line at a high potential (for example $V_{DD}$, or a signal near it) can **invert the surface** and connect two neighbouring n+ regions; isolation between adjacent n+ regions is weakened even without a line above them.

In a **large circuit** many lines cross the field regions near any device, so it is very likely that some high-potential line passes between the output (drain) diffusion of the cascode and a nearby n+ region at another potential, e.g. a grounded source or another circuit's node. The parasitic transistor then conducts a current that depends on $V_{out}$: a resistance $R_{leak}$ in parallel with the output, which dominates the very high cascode $R_{out}$ (Step 1, point 2). **Verdict: yes.**

### Step 4 — (c) Insufficient gate-oxide growth: **cannot cause it**

A thinner gate oxide means a larger $C_{ox} = \varepsilon_{ox}/t_{ox}$. **At the intended bias current** (the usual case, since a current source is biased by mirroring a reference current), the transconductance rises:

$$g_{m2} = \sqrt{2\mu_nC_{ox}\Big(\frac{W}{L}\Big)_2I_D} \;\propto\; \sqrt{C_{ox}} .$$

$r_O = 1/(\lambda I_D)$ is set by the current and $\lambda$; if anything, a thinner oxide gives the gate *better* control of the channel relative to the drain, reducing short-channel effects and raising $r_O$. Hence

$$R_{out} \approx g_{m2}r_{O2}r_{O1}$$

**increases**, not decreases.

**If the gate voltages were fixed instead** (so the current rises in proportion to $C_{ox}$), then $g_m = \mu C_{ox}(W/L)V_{ov} \propto C_{ox}$ and $r_O = 1/(\lambda I_D) \propto 1/C_{ox}$, so $R_{out} \propto C_{ox}\cdot(1/C_{ox})^2 = 1/C_{ox}$: a modestly thinner oxide lowers $R_{out}$ only by a modest factor, nothing like the collapse caused by (a) or (b).

Only an oxide so thin that it breaks down or leaks would cause a gross failure, and that is a different defect (a gate fault), not a low output impedance. **Verdict: no.**

### Result

- **(a) Channeling during the S/D implant — yes.** Deep junctions shorten $L_{eff}$ and strengthen short-channel effects (DIBL, channel-length modulation, punch-through), lowering $r_O$; since $R_{out} \approx g_{m2}r_{O2}r_{O1} \propto r_O^2$, the output impedance drops substantially.
- **(b) Omission of the channel-stop implant — yes.** The field threshold becomes low, so interconnect lines at high potential (many in a large circuit) invert the field surface and create parasitic field transistors between the output n+ region and neighbouring n+ regions; this leakage path in parallel with the very large $R_{out}$ dominates it.
- **(c) Insufficient gate-oxide growth — no.** A thinner oxide increases $C_{ox}$ and hence $g_m$ at the same current (and improves gate control), which *raises* $R_{out}$.

**Common mistake.** Choosing (c) with the argument "a thin oxide lowers $g_m$". It is the opposite: $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ grows with $C_{ox} = \varepsilon_{ox}/t_{ox}$.

**Common mistake.** Explaining (b) as punch-through *under the gate*. The channel stop sits under the **field oxide**, between devices; its absence creates leakage between neighbouring diffusions through parasitic field transistors.

**Common mistake.** Underestimating how strongly a cascode reacts. In $R_{out} = g_{m2}r_{O2}r_{O1}$ a moderate loss of $r_O$ is squared, and a large $R_{out}$ is easily dominated by even a high-resistance leakage path.
