# Detailed solution - R716

**Approach.** Switching from aluminium to copper of the same dimensions halves the resistivity, hence halves every layer's sheet resistance, while the capacitances (set by geometry and dielectric only) stay the same. We recompute the resistance, capacitance and distributed-line delay $T_D = \tfrac12R_{wire}C_{wire}$ of a 1000-µm wire in each layer at its minimum width, and pick the layer with the smallest delay.

### Step 1 — New sheet resistances

Sheet resistance is $R_\square = \rho/t$ (resistivity over film thickness). The thickness is unchanged ("same dimensions") and $\rho_{Cu} \approx \tfrac12\rho_{Al}$, so

$$R_{\square,Cu} = \tfrac12R_{\square,Al}:$$

- metals 1–3: $\tfrac12(80\ \mathrm{m}\Omega/\square) = 40\ \mathrm{m}\Omega/\square$;
- metal 4: $\tfrac12(40\ \mathrm{m}\Omega/\square) = 20\ \mathrm{m}\Omega/\square$.

The capacitances to the substrate depend only on the wire geometry, its height and the dielectric, none of which changes, so they keep their values.

### Step 2 — Formulas

For a wire of length $L = 1000\ \mu$m and width $W$:

$$R_{wire} = R_\square\frac{L}{W}, \qquad C_{wire} = (C_{pp}W + C_f)\,L,$$

where $C_{pp}$ is the parallel-plate capacitance per unit area and $C_f$ the fringe capacitance per unit length (both edges). The Elmore delay of a distributed RC line (each element $c\,dx$ at distance $x$ charged through the upstream resistance $rx$) is

$$T_D = \int_0^L (rx)(c\,dx) = \frac{rcL^2}{2} = \frac12R_{wire}C_{wire}.$$

### Step 3 — Metal 1 ($W = 0.35\ \mu$m, 40 mΩ/□)

$$
\begin{aligned}
R &= 0.04\ \Omega\times\frac{1000}{0.35} = 114.3\ \Omega,\\
C &= (30\times0.35 + 80)\ \mathrm{aF/\mu m}\times1000\ \mu\mathrm{m} = (10.5 + 80)\ \mathrm{fF} = 90.5\ \mathrm{fF},\\
T_D &= \tfrac12(114.3\ \Omega)(90.5\ \mathrm{fF}) = 5.17\ \mathrm{ps}.
\end{aligned}
$$

### Step 4 — Metal 2 ($W = 0.45\ \mu$m, 40 mΩ/□)

$$
\begin{aligned}
R &= 0.04\ \Omega\times\frac{1000}{0.45} = 88.9\ \Omega,\\
C &= (15\times0.45 + 50)\ \mathrm{fF} = (6.75 + 50)\ \mathrm{fF} = 56.75\ \mathrm{fF},\\
T_D &= \tfrac12(88.9\ \Omega)(56.75\ \mathrm{fF}) = 2.52\ \mathrm{ps}.
\end{aligned}
$$

### Step 5 — Metal 3 ($W = 0.50\ \mu$m, 40 mΩ/□)

$$
\begin{aligned}
R &= 0.04\ \Omega\times\frac{1000}{0.5} = 80\ \Omega,\\
C &= (9.0\times0.5 + 40)\ \mathrm{fF} = (4.5 + 40)\ \mathrm{fF} = 44.5\ \mathrm{fF},\\
T_D &= \tfrac12(80\ \Omega)(44.5\ \mathrm{fF}) = 1.78\ \mathrm{ps}.
\end{aligned}
$$

### Step 6 — Metal 4 ($W = 0.60\ \mu$m, 20 mΩ/□)

$$
\begin{aligned}
R &= 0.02\ \Omega\times\frac{1000}{0.6} = 33.3\ \Omega,\\
C &= (7.0\times0.6 + 30)\ \mathrm{fF} = (4.2 + 30)\ \mathrm{fF} = 34.2\ \mathrm{fF},\\
T_D &= \tfrac12(33.3\ \Omega)(34.2\ \mathrm{fF}) = 0.57\ \mathrm{ps}.
\end{aligned}
$$

### Step 7 — Comparison

| Layer | $R$ (Cu) | $C$ | $T_D$ (Cu) | $T_D$ (Al, for reference) |
|---|---|---|---|---|
| metal 1 | 114.3 Ω | 90.5 fF | 5.2 ps | 10.3 ps |
| metal 2 | 88.9 Ω | 56.8 fF | 2.5 ps | 5.0 ps |
| metal 3 | 80.0 Ω | 44.5 fF | 1.8 ps | 3.6 ps |
| metal 4 | 33.3 Ω | 34.2 fF | **0.57 ps** | 1.14 ps |

**Metal 4 still gives the minimum delay.** The reason is structural: copper multiplies every layer's resistance by the same factor $\tfrac12$ and leaves every capacitance unchanged, so every delay is exactly halved and the ranking cannot change. Metal 4 remains the layer with both the lowest resistance (thickest film, widest minimum width) and the lowest capacitance per unit length (farthest from the substrate). In formula form,

$$T_D = \tfrac12R_\square L^2\left(C_{pp} + \frac{C_f}{W}\right),$$

and halving $R_\square$ for all layers simply scales all $T_D$ values by $\tfrac12$.

### Result

**Metal 4** remains the best choice. With copper the sheet resistances halve (40 mΩ/□ for metals 1–3, 20 mΩ/□ for metal 4) and the capacitances are unchanged, so the delays become about **0.57 ps** (metal 4), 1.8 ps (metal 3), 2.5 ps (metal 2) and 5.2 ps (metal 1): all half the aluminium values, with the same ranking.

**Common mistake.** Assuming the capacitances change when the metal changes. Wire capacitance depends on geometry and on the surrounding dielectric, not on the conductor's resistivity; copper changes only $R$.

**Common mistake.** Thinking that the lower resistance of copper could favour a lower metal layer. Because the improvement is the same factor for every layer, relative positions are preserved; metal 4 wins on both $R$ and $C$.

**Common mistake.** Computing the resistance with $W/L$ instead of $L/W$ squares, which makes the long wires appear almost resistance-free and the delays meaningless.
