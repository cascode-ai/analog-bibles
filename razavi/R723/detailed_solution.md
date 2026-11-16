# Detailed solution - R723

**Approach.** The bond-wire inductance $L$ and the pad capacitance $C$ form a second-order low-pass network at the input, whose bandwidth scales with the resonance frequency $\omega_0 = 1/\sqrt{LC}$. We find how $C$ scales with the pad size (essentially with its area) and how $L$ scales with the wire diameter (only logarithmically), then compare the $LC$ products of the two cases.

### Step 1 — The input network and its bandwidth

The signal source, with resistance $R_S$, reaches the chip through the bond wire (inductance $L$); the pad and its surroundings load the input node with a capacitance $C$ to ground.

<!-- diagram: diagram-01.cir -->

**Transfer function.** By the voltage divider between the series branch ($R_S + sL$) and the capacitor ($1/sC$):

$$\frac{V_{pad}}{V_s} = \frac{1/(sC)}{R_S + sL + 1/(sC)} = \frac{1}{s^2LC + sR_SC + 1}.$$

This is a second-order low-pass with natural frequency

$$\omega_0 = \frac{1}{\sqrt{LC}}$$

and damping set by $R_S$. For a given damping, the −3-dB bandwidth is proportional to $\omega_0$, so the figure of merit is

$$\text{BW} \propto \frac{1}{\sqrt{LC}} .$$

The better case is the one with the smaller product $LC$. (If $R_S$ is large enough that the network is overdamped, the bandwidth approaches $1/(R_SC)$, which favours a small $C$ even more strongly.)

### Step 2 — Pad capacitance versus pad size

A pad is a square metal plate of side $a$ above the substrate. Its capacitance has:

- a **parallel-plate (area) term** $C_A a^2$, with $C_A$ the capacitance per unit area;
- a **fringe (edge) term** $C_F\cdot4a$, with $C_F$ the fringe capacitance per unit length of edge.

Halving the side ($a = 100 \to 50\ \mu$m) divides the area term by 4 and the fringe term by 2.

**Illustration** with top-metal values similar to those used for metal 4 earlier ($C_A = 7$ aF/µm², $C_F \approx 15$ aF/µm per edge):

$$
\begin{aligned}
\text{(a)}\ a = 100\ \mu\mathrm{m}:&\quad C = (7)(10^4) + (15)(400)\ \mathrm{aF} = 70 + 6 = 76\ \mathrm{fF},\\
\text{(b)}\ a = 50\ \mu\mathrm{m}:&\quad C = (7)(2500) + (15)(200)\ \mathrm{aF} = 17.5 + 3 = 20.5\ \mathrm{fF}.
\end{aligned}
$$

$$\frac{C_b}{C_a} = \frac{20.5}{76} = 0.27,$$

i.e. about **3.7 times less** capacitance (close to the factor 4 of the dominant area term).

### Step 3 — Bond-wire inductance versus diameter

For a round wire of radius $r$ at height $h$ above a ground plane ($h \gg r$), the inductance per unit length is (image theory)

$$L' = \frac{\mu_0}{2\pi}\ln\frac{2h}{r} = 0.2\ln\frac{2h}{r}\ \ \mathrm{nH/mm}.$$

It depends on $r$ only through a **logarithm**. Halving the diameter (case (a): $r = 25\ \mu$m; case (b): $r = 12.5\ \mu$m) at constant $h$ adds

$$\Delta L' = 0.2\left[\ln\frac{2h}{r/2} - \ln\frac{2h}{r}\right] = 0.2\ln2 = 0.139\ \mathrm{nH/mm},$$

independent of $h$. A typical bond wire has $L' \approx 1$ nH/mm (i.e. $\ln(2h/r) \approx 5$), so

$$\frac{L_b}{L_a} = \frac{1 + 0.139}{1} = 1.14,$$

an increase of only about **14 %** (roughly 10–20 % for other heights). The isolated-wire formula $L = (\mu_0\ell/2\pi)[\ln(2\ell/r) - 0.75]$ gives the same picture: for $\ell = 4$ mm, 4.0 nH for $r = 25\ \mu$m versus 4.6 nH for $r = 12.5\ \mu$m (+14 %).

### Step 4 — Comparing $LC$ and the bandwidth

$$\frac{(LC)_b}{(LC)_a} = \frac{L_b}{L_a}\cdot\frac{C_b}{C_a} = 1.14\times0.27 = 0.31 .$$

$$\frac{\text{BW}_b}{\text{BW}_a} = \frac{1}{\sqrt{0.31}} = 1.8 .$$

Case (b) has roughly **1.8 times** the bandwidth of case (a): the capacitance drops almost fourfold while the inductance rises only slightly.

### Step 5 — How robust is the conclusion?

- **If other capacitances dominate.** In practice the input node also carries ESD-protection and input-device capacitance, which do not shrink with the pad. Even if the total $C$ only halves, $(LC)_b/(LC)_a = 1.14\times0.5 = 0.57$ and the bandwidth still improves by $1/\sqrt{0.57} = 1.3$. Only if the pad's own capacitance were negligible would (b) lose slightly (by $1/\sqrt{1.14} = 0.94$).
- **Overdamped case.** If the bandwidth is set by $R_SC$, the improvement is the full capacitance ratio (≈ 3.7×).
- **Side issues of case (b).** The thinner wire has a higher series resistance (larger by about 2× at high frequency, where skin effect confines the current to the surface, and 4× at DC), which adds loss and thermal noise at a sensitive input; it carries less current before fusing and is mechanically weaker; and a 50-µm pad requires finer-pitch, more accurate bonding.

### Result

**Case (b) is preferable.** Bandwidth scales as $1/\sqrt{LC}$. Halving the pad side reduces the pad capacitance by about 4× (≈ 3.7× including fringe), whereas halving the wire diameter increases the bond-wire inductance only logarithmically, $\Delta L' = 0.2\ln2 \approx 0.14$ nH/mm (≈ 10–20 %). The $LC$ product falls to about 0.3 of its value, so the input bandwidth rises by roughly 1.7–1.9×.

**Common mistake.** Assuming the inductance scales like $1/r$ or $1/r^2$ (e.g. quadrupling, so that $LC$ stays the same and the two cases look equivalent). The inductance of a wire depends on its radius only through $\ln(2h/r)$; halving the diameter changes it by about 14 %.

**Common mistake.** Choosing case (a) because the thicker wire has lower inductance. The small inductance gain is overwhelmed by the four times larger pad capacitance.

**Common mistake.** Treating the pad capacitance as proportional to the perimeter only (factor 2) or ignoring it altogether. The dominant term is the parallel-plate capacitance, proportional to the pad area.
