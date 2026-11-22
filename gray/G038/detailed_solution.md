# Detailed solution - G038

The parasitic capacitance of a diffused resistor is the zero-bias capacitance of its base–epi junction: the area of the diffused region (bottom plus sidewall) times the capacitance per unit area. Find the resistor length from the required number of squares, add the two contact heads, and model the sidewalls as quarter-cylinders of radius equal to the junction depth.

### Step 1 — Capacitance per unit area

The base is much more heavily doped than the epi, so the junction is one-sided and the depletion region lies in the epi:

$$
\frac{C_{j0}}A=\sqrt{\frac{q\epsilon N_D}{2\psi_0}}=\sqrt{\frac{(1.6\times10^{-19}\ \mathrm C)(1.04\times10^{-12}\ \mathrm{F/cm})(10^{15}\ \mathrm{cm^{-3}})}{2(0.55\ \mathrm V)}}=1.23\times10^{-8}\ \mathrm{F/cm^2}=1.23\times10^{-4}\ \mathrm{pF/\mu m^2}.
$$

The usual nomograph value is about $10^{-4}\ \mathrm{pF/\mu m^2}$; both are given below.

### Step 2 — Geometry of the 6-µm resistor

$R=R_\square L/W$, so $10\ \mathrm{k\Omega}$ at 100 Ω/□ needs 100 squares: $L=100W=600\ \mu$m (contact-head contributions to the resistance neglected).

- Bottom area: body plus two heads, $(600)(6)+2(26)^2=3600+1352=4952\ \mu\mathrm m^2$.
- Perimeter: the body's two long sides plus each head's outline less the 6-µm neck where it joins the body, $2(600)+2(4\times26-6)=1396\ \mu$m.
- Sidewall area: $(1396\ \mu\mathrm m)(3\ \mu\mathrm m)(\pi/2)=6578\ \mu\mathrm m^2$.

$$
A=4952+6578=11{,}530\ \mu\mathrm m^2,\qquad
C=(11{,}530\ \mu\mathrm m^2)(10^{-4}\ \mathrm{pF/\mu m^2})=1.15\ \mathrm{pF}\quad(1.42\ \mathrm{pF\ with}\ 1.23\times10^{-4}).
$$

### Step 3 — The 12-µm resistor

Now $L=100(12\ \mu\mathrm m)=1200\ \mu$m. Bottom area $=(1200)(12)+1352=15{,}752\ \mu$m², perimeter $=2(1200)+2(104-12)=2584\ \mu$m, sidewall $=12{,}177\ \mu$m²:

$$
A=27{,}930\ \mu\mathrm m^2,\qquad C=2.8\ \mathrm{pF}\quad(3.4\ \mathrm{pF\ with}\ 1.23\times10^{-4}).
$$

| Width | $L$ (µm) | Bottom (µm²) | Sidewall (µm²) | $C$ at $10^{-4}$ (pF) | $C$ at $1.23\times10^{-4}$ (pF) |
|---|---|---|---|---|---|
| 6 µm | 600 | 4952 | 6578 | 1.15 | 1.42 |
| 12 µm | 1200 | 15,752 | 12,177 | 2.8 | 3.4 |

### Step 4 — Comparison

Doubling the width at constant resistance doubles the length too, so the body area quadruples; with the fixed heads and the sidewall, the total grows by about 2.4×. For the narrow resistor the sidewall is more than half the total, so ignoring it would badly underestimate the capacitance.
