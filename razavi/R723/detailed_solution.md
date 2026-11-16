# Detailed solution - R723

**Approach.** The bond-wire inductance $L_b$ and the pad capacitance $C_{pad}$ form a second-order low-pass network at the input, whose bandwidth scales with $\omega_0 = 1/\sqrt{L_bC_{pad}}$. Find how $C_{pad}$ scales with the pad size (essentially with its area) and how $L_b$ scales with the wire diameter (only logarithmically), then compare the $L_bC_{pad}$ products of the two cases.

### Step 1 — The input network and its bandwidth

The source $V_s$, with resistance $R_S$, drives the input node through the bond-wire inductance $L_b$, and the pad and its surroundings load that node with $C_{pad}$ to ground ($L_b$ and $C_{pad}$ are labelled $L$ and $C$ in the diagram).

<!-- diagram: diagram-01.cir -->

The divider between $R_S + sL_b$ and $1/(sC_{pad})$ gives

$$\frac{V_{pad}}{V_s} = \frac{1/(sC_{pad})}{R_S + sL_b + 1/(sC_{pad})} = \frac{1}{s^2L_bC_{pad} + sR_SC_{pad} + 1},$$

a second-order low-pass with $\omega_0 = 1/\sqrt{L_bC_{pad}}$ and damping set by $R_S$. For a given damping the −3-dB bandwidth is proportional to $\omega_0$:

$$\text{BW} \propto \frac{1}{\sqrt{L_bC_{pad}}} ,$$

so the better case has the smaller $L_bC_{pad}$. (If $R_S$ makes the network overdamped, the bandwidth approaches $1/(R_SC_{pad})$, which favours a small $C_{pad}$ even more.)

### Step 2 — Pad capacitance versus pad size

A square pad of side $a$ has a **parallel-plate (area) term** $C_A a^2$ and a **fringe (edge) term** $C_F\cdot4a$, with $C_A$ per unit area and $C_F$ per unit length of edge. Halving the side ($a = 100 \to 50\ \mu$m) divides the area term by 4 and the fringe term by 2.

**Illustration** with top-metal values similar to those used for metal 4 earlier ($C_A = 7$ aF/µm², $C_F \approx 15$ aF/µm per edge):

$$
\begin{aligned}
\text{(a)}\ a = 100\ \mu\mathrm{m}:&\quad C_{pad} = (7)(10^4) + (15)(400)\ \mathrm{aF} = 70 + 6 = 76\ \mathrm{fF},\\
\text{(b)}\ a = 50\ \mu\mathrm{m}:&\quad C_{pad} = (7)(2500) + (15)(200)\ \mathrm{aF} = 17.5 + 3 = 20.5\ \mathrm{fF}.
\end{aligned}
$$

$$\frac{C_{pad}^{(b)}}{C_{pad}^{(a)}} = \frac{20.5}{76} = 0.27,$$

about **3.7 times less** capacitance, close to the factor 4 of the dominant area term.

### Step 3 — Bond-wire inductance versus diameter

For a round wire of radius $r$ at height $h \gg r$ above a ground plane, image theory gives the inductance per unit length

$$L_b' = \frac{\mu_0}{2\pi}\ln\frac{2h}{r} = 0.2\ln\frac{2h}{r}\ \ \mathrm{nH/mm},$$

which depends on $r$ only through a **logarithm**. Halving the diameter (case (a): $r = 25\ \mu$m; case (b): $r = 12.5\ \mu$m) at constant $h$ adds

$$\Delta L_b' = 0.2\left[\ln\frac{2h}{r/2} - \ln\frac{2h}{r}\right] = 0.2\ln2 = 0.139\ \mathrm{nH/mm},$$

independent of $h$. A typical bond wire has $L_b' \approx 1$ nH/mm (i.e. $\ln(2h/r) \approx 5$), so

$$\frac{L_b^{(b)}}{L_b^{(a)}} = \frac{1 + 0.139}{1} = 1.14,$$

an increase of only about **14 %** (roughly 10–20 % for other heights). The isolated-wire formula $L_b = (\mu_0\ell/2\pi)[\ln(2\ell/r) - 0.75]$ gives the same picture: for $\ell = 4$ mm, 4.0 nH for $r = 25\ \mu$m versus 4.6 nH for $r = 12.5\ \mu$m (+14 %).

### Step 4 — Comparing $L_bC_{pad}$ and the bandwidth

$$\frac{(L_bC_{pad})^{(b)}}{(L_bC_{pad})^{(a)}} = \frac{L_b^{(b)}}{L_b^{(a)}}\cdot\frac{C_{pad}^{(b)}}{C_{pad}^{(a)}} = 1.14\times0.27 = 0.31 ,$$

$$\frac{\text{BW}^{(b)}}{\text{BW}^{(a)}} = \frac{1}{\sqrt{0.31}} = 1.8 .$$

Case (b) has roughly **1.8 times** the bandwidth of case (a): the capacitance drops almost fourfold while the inductance rises only slightly.

### Step 5 — How robust is the conclusion?

- **If other capacitances dominate.** The input node also carries ESD-protection and input-device capacitance, which do not shrink with the pad. Even if the total input capacitance only halves, the $L_bC_{pad}$ ratio is $1.14\times0.5 = 0.57$ and the bandwidth still improves by $1/\sqrt{0.57} = 1.3$; only if the pad's own capacitance were negligible would (b) lose slightly (by $1/\sqrt{1.14} = 0.94$).
- **Overdamped case.** If the bandwidth is set by $R_SC_{pad}$, the improvement is the full capacitance ratio (≈ 3.7×).
- **Side issues of case (b).** The thinner wire has a higher series resistance (about 2× at high frequency, where skin effect confines the current to the surface, and 4× at DC), adding loss and thermal noise at a sensitive input; it carries less current before fusing and is mechanically weaker; and a 50-µm pad requires finer-pitch, more accurate bonding.

### Result

**Case (b) is preferable.** Bandwidth scales as $1/\sqrt{L_bC_{pad}}$. Halving the pad side reduces the pad capacitance by about 4× (≈ 3.7× including fringe), whereas halving the wire diameter increases the bond-wire inductance only logarithmically, $\Delta L_b' = 0.2\ln2 \approx 0.14$ nH/mm (≈ 10–20 %). The $L_bC_{pad}$ product falls to about 0.3 of its value, so the input bandwidth rises by roughly 1.7–1.9×.

**Common mistake.** Assuming the inductance scales like $1/r$ or $1/r^2$ (e.g. quadrupling, so that $L_bC_{pad}$ stays the same and the two cases look equivalent). A wire's inductance depends on its radius only through $\ln(2h/r)$; halving the diameter changes it by about 14 %.

**Common mistake.** Choosing case (a) because the thicker wire has lower inductance. The small inductance gain is overwhelmed by the four times larger pad capacitance.

**Common mistake.** Treating the pad capacitance as proportional to the perimeter only (factor 2) or ignoring it. The dominant term is the parallel-plate capacitance, proportional to the pad area.
