# Detailed solution - R672

**Approach.** Derive the input impedance of a common-gate (CG) stage with finite $r_O$, body effect and a current-source load. It depends only on $g_{m1}$, $g_{mb1}$, $r_{O1}$ and $r_{O2}$. Then show how each of these scales under ideal scaling: $g_m$ and $r_O$ are exactly invariant, and $g_{mb}$ is invariant in the ideal theory (slightly smaller in reality). The input impedance therefore stays at about 50 Ω.

### Step 1 — Small-signal model

Let $M_1$ be the CG transistor (input at its source, gate at AC ground) and $M_2$ the current-source load at its drain. The load presents its output resistance $r_{O2}$ from the drain of $M_1$ (node `out`) to AC ground.

Model of $M_1$, between the source (node `in`) and the drain (node `out`):

- a controlled current source $g_{m1}v_{gs}$ from drain to source, with $v_{gs} = 0 - v_{in}$;
- a body-effect source $g_{mb1}v_{bs}$ in parallel with it, with $v_{bs} = 0 - v_{in}$ (bulk at AC ground);
- the output resistance $r_{O1}$ from drain to source.

Apply a test voltage $v_x$ at the source and let $i_x$ be the current it delivers into the source node.

<!-- diagram: diagram-01.cir -->

### Step 2 — Derive the input impedance

**Drain voltage.** The current $i_x$ entering the source node can only leave through $M_1$ to the drain, and from there through $r_{O2}$ to ground. So $i_x$ flows down through $r_{O2}$:

$$v_{out} = i_xr_{O2}.$$

**KCL at the source node.** The current flowing from drain to source inside $M_1$ is the sum of the two controlled sources and the current in $r_{O1}$:

$$i_{DS} = g_{m1}(-v_x) + g_{mb1}(-v_x) + \frac{v_{out} - v_x}{r_{O1}}.$$

This current arrives at the source node, and together with $i_x$ it must sum to zero (nothing else is connected), so $i_x = -i_{DS}$:

$$i_x = (g_{m1} + g_{mb1})\,v_x + \frac{v_x - v_{out}}{r_{O1}}.$$

Substitute $v_{out} = i_xr_{O2}$:

$$
\begin{aligned}
i_x &= (g_{m1} + g_{mb1})\,v_x + \frac{v_x}{r_{O1}} - \frac{i_xr_{O2}}{r_{O1}}\\
i_x\left(1 + \frac{r_{O2}}{r_{O1}}\right) &= v_x\left(g_{m1} + g_{mb1} + \frac{1}{r_{O1}}\right).
\end{aligned}
$$

Multiply both sides by $r_{O1}$ and divide:

$$R_{in} = \frac{v_x}{i_x} = \frac{r_{O1} + r_{O2}}{1 + (g_{m1} + g_{mb1})\,r_{O1}} .$$

For $(g_{m1} + g_{mb1})r_{O1} \gg 1$ this is approximately $\dfrac{1}{g_{m1} + g_{mb1}}\left(1 + \dfrac{r_{O2}}{r_{O1}}\right)$: the load matters because a current through $r_{O2}$ raises the drain voltage, which pushes current back to the source through $r_{O1}$.

**Example design at 50 Ω.** With $r_{O1} = r_{O2} = 5\ \mathrm{k}\Omega$ and $g_{mb1} = 0.2g_{m1}$, choosing $g_{m1} = 33.2$ mS ($g_{mb1} = 6.63$ mS) gives

$$R_{in} = \frac{10\ \mathrm{k}\Omega}{1 + (39.8\ \mathrm{mS})(5\ \mathrm{k}\Omega)} = \frac{10\,000}{200}\ \Omega = 50\ \Omega .$$

### Step 3 — Scaling of $g_m$

Ideal scaling: $W$, $L$, $t_{ox}$ divided by $\alpha$ (so $W/L$ unchanged and $C_{ox}$ multiplied by $\alpha$), all voltages divided by $\alpha$ (so the overdrive $V_{ov} = V_{GS} - V_{TH}$ is divided by $\alpha$), mobility unchanged:

$$g_m' = \mu\,(\alpha C_{ox})\,\frac{W}{L}\,\frac{V_{ov}}{\alpha} = \mu C_{ox}\frac{W}{L}V_{ov} = g_m .$$

$g_{m1}$ is **unchanged**. Along the way, the drain current scales as $I_D' = \frac12\mu(\alpha C_{ox})(W/L)(V_{ov}/\alpha)^2 = I_D/\alpha$.

### Step 4 — Scaling of $r_O$

Channel-length modulation: $r_O = 1/(\lambda I_D)$, with $\lambda \approx (\Delta L/L)/V_{DS}$, where $\Delta L$ is the length of the pinched-off region near the drain.

- $\Delta L$ is a depletion-type width, $\propto\sqrt{V/N}$, which ideal scaling divides by $\alpha$ (voltage ÷ α, doping × α). $L$ is also divided by $\alpha$, so $\Delta L/L$ is unchanged.
- $V_{DS}$ is divided by $\alpha$.

Hence

$$\lambda' = \frac{\Delta L/L}{V_{DS}/\alpha} = \alpha\lambda,$$

and

$$r_O' = \frac{1}{(\alpha\lambda)(I_D/\alpha)} = \frac{1}{\lambda I_D} = r_O .$$

Both $r_{O1}$ and $r_{O2}$ are **unchanged**. Equivalently, the Early voltage $V_A = 1/\lambda$ is divided by $\alpha$ like every other voltage, and so is the current, so $r_O = V_A/I_D$ stays the same.

**General principle.** Ideal scaling maps the whole I–V characteristic onto itself with every voltage divided by $\alpha$ and every current divided by $\alpha$. Any incremental resistance or conductance, being a ratio of a voltage change to a current change, is therefore invariant.

### Step 5 — Scaling of $g_{mb}$

Write $g_{mb} = \eta g_m$, with

$$\eta = \frac{C_d}{C_{ox}} = \frac{\gamma}{2\sqrt{2\phi_F + V_{SB}}}, \qquad \gamma = \frac{\sqrt{2q\epsilon_{si}N_{sub}}}{C_{ox}},$$

where $C_d$ is the depletion capacitance per unit area under the channel, $\phi_F$ the bulk Fermi potential and $V_{SB}$ the source–bulk voltage.

**Ideal theory.** All depletion widths scale by $1/\alpha$, so $C_d = \epsilon_{si}/W_{dep}$ rises by $\alpha$, like $C_{ox}$. Then $\eta$ is unchanged and $g_{mb}' = g_{mb}$. With $g_m$, $g_{mb}$, $r_{O1}$ and $r_{O2}$ all invariant,

$$R_{in}' = R_{in} = 50\ \Omega .$$

**Refinement.** In reality $2\phi_F$ does not scale (it changes only logarithmically with doping). Then:

- $\gamma \to \sqrt{\alpha}/\alpha = \gamma/\sqrt\alpha$;
- $V_{SB} \to V_{SB}/\alpha$, but $2\phi_F$ stays;
- so $\eta$ falls by a factor between 1 (if $V_{SB} \gg 2\phi_F$) and $\sqrt\alpha$ (if $V_{SB} \ll 2\phi_F$).

$g_{mb}$ therefore drops a little, $(g_{m1} + g_{mb1})$ drops a little, and $R_{in}$ rises slightly. Worst case for the example above ($\alpha = 2$, $V_{SB} \approx 0$, $\eta$: $0.2 \to 0.2/\sqrt2 = 0.141$):

$$R_{in}' = \frac{10\ \mathrm{k}\Omega}{1 + (33.2\ \mathrm{mS})(1.141)(5\ \mathrm{k}\Omega)} = \frac{10\,000}{190.4}\ \Omega \approx 52.5\ \Omega .$$

A rise of a few percent, not a change by a power of $\alpha$.

### Result

$$R_{in} = \frac{r_{O1} + r_{O2}}{1 + (g_{m1} + g_{mb1})\,r_{O1}}$$

Under ideal scaling $g_m$ is unchanged ($C_{ox} \times\alpha$, $V_{ov} \div\alpha$), $r_{O1}$ and $r_{O2}$ are unchanged ($\lambda \times\alpha$, $I_D \div\alpha$), and $g_{mb}$ is unchanged in the ideal theory. The input impedance therefore remains **≈ 50 Ω**. Because $2\phi_F$ does not scale, $g_{mb}$ actually decreases slightly, which raises $R_{in}$ by a few percent (about 52–53 Ω for $\alpha = 2$ and $g_{mb} \approx 0.2g_m$).

**Common mistake.** Treating $\lambda$ as a fixed process constant, so that $r_O = 1/(\lambda I_D)$ rises by $\alpha$ (or assuming $r_O$ falls by $\alpha$ because the channel is shorter). In ideal scaling both $\Delta L$ and $L$ shrink by $\alpha$ while $V_{DS}$ shrinks by $\alpha$, so $\lambda$ rises by exactly $\alpha$ and cancels the drop in current.

**Common mistake.** Concluding that the input impedance changes by a power of $\alpha$. Every quantity in the $R_{in}$ expression is a small-signal conductance or resistance, and ideal scaling divides voltages and currents by the same factor, so these ratios are invariant.

**Common mistake.** Overstating the body-effect deviation. Only the non-scaling $2\phi_F$ term breaks the invariance, and it changes $g_{mb}$ (already a fraction of $g_m$) by at most $\sqrt\alpha$, so $R_{in}$ moves by only a few percent.
