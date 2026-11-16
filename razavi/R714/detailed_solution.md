# Detailed solution - R714

**Approach.** Find the wire's total resistance (sheet resistance × number of squares) and total capacitance (parallel-plate term, which scales with width, plus fringe term, which does not), evaluate the delay of the wire as a distributed RC line, $T_D = \tfrac12R_{wire}C_{wire}$, and compare it with the lumped time constant $R_SC_{wire}$ of the 500-Ω driver.

### Step 1 — Wire resistance

Number of squares along the current path:

$$\frac{L}{W} = \frac{1000\ \mu\mathrm{m}}{2\ \mu\mathrm{m}} = 500 .$$

$$R_{wire} = R_\square\frac{L}{W} = (0.04\ \Omega/\square)(500) = 20\ \Omega .$$

Doubling the width halves the number of squares, and hence the resistance.

### Step 2 — Wire capacitance

Per unit length:

- **parallel-plate** (bottom face, proportional to the width):
$$c_{pp} = (7.0\ \mathrm{aF/\mu m^2})(2\ \mu\mathrm{m}) = 14\ \mathrm{aF/\mu m};$$
- **fringe** (both edges together, independent of width):
$$c_{fr} = 30\ \mathrm{aF/\mu m}.$$

Total:

$$c = 14 + 30 = 44\ \mathrm{aF/\mu m}, \qquad C_{wire} = cL = (44\ \mathrm{aF/\mu m})(1000\ \mu\mathrm{m}) = 44\ \mathrm{fF}.$$

### Step 3 — Delay of the wire itself (distributed RC line)

The wire's resistance and capacitance are spread uniformly along it, so it behaves as a distributed RC line: a chain of small sections $r\,dx$, $c\,dx$, with $r = R_{wire}/L$ and $c = C_{wire}/L$.

<!-- diagram: diagram-01.cir -->

**Elmore delay** (sum over all capacitances of capacitance × resistance between the source and that capacitance): the element $c\,dx$ at distance $x$ is charged through the wire resistance $rx$, so

$$T_D = \int_0^L (rx)(c\,dx) = \frac{rcL^2}{2} = \frac12R_{wire}C_{wire}.$$

**Numbers:**

$$T_D = \tfrac12(20\ \Omega)(44\times10^{-15}\ \mathrm{F}) = \tfrac12(0.88\ \mathrm{ps}) = 0.44\ \mathrm{ps}.$$

(With the 50 %-of-a-step definition, $\approx 0.38R_{wire}C_{wire} = 0.33$ ps.)

### Step 4 — Lumped time constant of the driver

$$\tau_{lumped} = R_SC_{wire} = (500\ \Omega)(44\times10^{-15}\ \mathrm{F}) = 22\ \mathrm{ps}.$$

### Step 5 — Comparison

$$\frac{R_SC_{wire}}{T_D} = \frac{22\ \mathrm{ps}}{0.44\ \mathrm{ps}} = 50 = \frac{2R_S}{R_{wire}} = \frac{2(500)}{20}.$$

The total Elmore delay from the source to the end of the wire is

$$T_{total} = R_SC_{wire} + \tfrac12R_{wire}C_{wire} = 22 + 0.44 = 22.4\ \mathrm{ps},$$

of which the wire's own resistance accounts for only 2 %. The delay is set by the driver charging the wire capacitance.

**Comparison with a 1-µm-wide wire** (same length and layer): $R_{wire} = 40\ \Omega$, $C_{wire} = 7 + 30 = 37$ fF, $T_D = 0.74$ ps, $R_SC = 18.5$ ps, total 19.2 ps.

| Width | $R_{wire}$ | $C_{wire}$ | $\tfrac12R_{wire}C_{wire}$ | $R_SC_{wire}$ | total |
|---|---|---|---|---|---|
| 1 µm | 40 Ω | 37 fF | 0.74 ps | 18.5 ps | 19.2 ps |
| 2 µm | 20 Ω | 44 fF | 0.44 ps | 22 ps | 22.4 ps |

Widening the wire halves its resistance but raises its capacitance by only 19 % (the fringe part does not grow with width), so the wire's own delay falls. With a 500-Ω driver, however, the delay is dominated by $R_SC$, which *increases* with the extra capacitance: the wider wire is slower overall. Widening pays off only when the wire resistance is comparable to the driver resistance.

### Result

- $R_{wire} = 20\ \Omega$, $C_{wire} = 14 + 30 = 44$ fF.
- Distributed wire delay $T_D = \tfrac12R_{wire}C_{wire} \approx 0.44$ ps (≈ 0.33 ps at the 50 % point).
- Lumped time constant $R_SC_{wire} = 22$ ps, about **50 times larger**; total source-to-end delay ≈ 22.4 ps.

The wire's own delay is negligible; the driver dominates.

**Common mistake.** Scaling the fringe capacitance with the width (giving 60 aF/µm). The fringe field comes from the two edges of the wire; it is given per unit length and does not change when the wire is widened. Only the parallel-plate part doubles.

**Common mistake.** Thinking that a wider wire has more resistance, or using $W/L$ for the number of squares. A wider wire has *fewer* squares ($L/W = 500$), hence half the resistance of the 1-µm wire.

**Common mistake.** Concluding that widening the wire speeds up the signal. It reduces the small distributed term, but the dominant term $R_SC_{wire}$ grows with the added capacitance.
