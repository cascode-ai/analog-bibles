# Detailed solution - R713

**Approach.** Compute the wire's total resistance and capacitance (parallel-plate plus fringe), evaluate the wire's delay as a distributed RC line, $T_D = \tfrac12 R_{wire}C_{wire}$ (Elmore delay), and compare it with the lumped time constant $R_SC_{wire}$ set by the 500-Ω driver.

### Step 1 — Wire resistance and capacitance

The wire has $L/W = 1000\ \mu\mathrm{m}/1\ \mu\mathrm{m} = 1000$ squares:

$$R_{wire} = R_\square\frac{L}{W} = (0.04\ \Omega/\square)(1000) = 40\ \Omega .$$

Per unit length, the parallel-plate capacitance is $c_{pp} = (7.0\ \mathrm{aF/\mu m^2})(1\ \mu\mathrm{m}) = 7.0\ \mathrm{aF/\mu m}$ and the fringe (both edges) $c_{fr} = 30\ \mathrm{aF/\mu m}$:

$$c = c_{pp} + c_{fr} = 37\ \mathrm{aF/\mu m}, \qquad C_{wire} = cL = (37\ \mathrm{aF/\mu m})(1000\ \mu\mathrm{m}) = 37{,}000\ \mathrm{aF} = 37\ \mathrm{fF}.$$

For this narrow wire the fringe component (30 fF) dominates the parallel-plate part (7 fF).

### Step 2 — Delay of the wire itself (distributed RC line)

The wire's resistance and capacitance are spread uniformly along it, with $r = R_{wire}/L$ and $c = C_{wire}/L$ per unit length.

<!-- diagram: diagram-01.cir -->

The Elmore delay sums each capacitance times the resistance between the source and it; the element $c\,dx$ at distance $x$ is charged through $r\,x$:

$$T_D = \int_0^L (r\,x)(c\,dx) = rc\int_0^L x\,dx = \frac{rcL^2}{2} = \frac12(rL)(cL) = \frac12R_{wire}C_{wire} .$$

On average the capacitance is charged through half the wire's resistance. **Numbers:**

$$T_D = \tfrac12(40\ \Omega)(37\times10^{-15}\ \mathrm{F}) = \tfrac12(1.48\times10^{-12}\ \mathrm{s}) = 0.74\ \mathrm{ps}.$$

(The exact 50 % step delay of a distributed line is about $0.38R_{wire}C_{wire} = 0.56$ ps; either way it is well below 1 ps.)

### Step 3 — Lumped time constant set by the driver

With the source resistance charging the whole wire capacitance (wire resistance neglected):

$$\tau_{lumped} = R_SC_{wire} = (500\ \Omega)(37\times10^{-15}\ \mathrm{F}) = 18.5\times10^{-12}\ \mathrm{s} = 18.5\ \mathrm{ps}.$$

### Step 4 — Comparison

$$\frac{R_SC_{wire}}{T_D} = \frac{18.5\ \mathrm{ps}}{0.74\ \mathrm{ps}} = 25 ,$$

simply because the wire resistance is far smaller than the driver's: $R_SC/(\tfrac12RC) = 2R_S/R_{wire} = 2(500)/40 = 25$.

**Combined (Elmore) delay.** $R_S$ is upstream of every capacitor, so it multiplies the total capacitance, and the wire adds its distributed term:

$$T_{total} = R_SC_{wire} + \tfrac12R_{wire}C_{wire} = 18.5 + 0.74 = 19.2\ \mathrm{ps}.$$

The wire's own RC is only about 4 % of the total: for this 1-mm metal-4 line, the delay is set by the driver charging the wire capacitance. (Wire resistance would matter for much longer lines, since $T_D \propto L^2$, or for more resistive layers.)

### Result

- Wire: $R_{wire} = 40\ \Omega$, $C_{wire} = 7\ \mathrm{fF} + 30\ \mathrm{fF} = 37$ fF.
- Distributed wire delay: $T_D = \tfrac12R_{wire}C_{wire} \approx 0.74$ ps (about 0.56 ps for the 50 % point of a step).
- Lumped time constant: $R_SC_{wire} = 500\ \Omega\times37\ \mathrm{fF} = 18.5$ ps, about **25 times larger**.

The wire's own distributed delay is negligible; the delay is dominated by the 500-Ω source driving the wire capacitance (total ≈ 19.2 ps).

**Common mistake.** Ignoring the fringe capacitance. With only the 7-fF parallel-plate part, both delays come out more than five times too small (0.14 ps and 3.5 ps).

**Common mistake.** Inverting the number of squares ($W/L = 10^{-3}$ instead of $L/W = 1000$). A long narrow wire has *many* squares.

**Common mistake.** Using the source resistance in the distributed-line formula, or claiming that the wire's delay is comparable to $R_SC$. The distributed term involves only the wire's own 40 Ω, much smaller than $R_S$.
