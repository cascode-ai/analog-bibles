# Detailed solution - R718

**Approach.** Each bond wire returns its current through the ground plane, which by image theory can be replaced by an image wire carrying the opposite current at the same distance below the plane. The mutual inductance per unit length is the flux that wire 1 (with its image) links through wire 2's circuit, per ampere; multiply it by the 4-mm length.

### Step 1 — Geometry and image theory

With the plane at $y = 0$, wire 1 is at $(0, h)$ and wire 2 at $(d, h)$, with $h = 5$ mm and $d = 1$ mm. A current $I$ in wire 1 produces above the plane the same field as wire 1 plus an **image** at $(0, -h)$ carrying $-I$. Distances from wire 2:

$$r_1 = d = 1\ \mathrm{mm}\ \ (\text{to wire 1}), \qquad r_1' = \sqrt{d^2 + (2h)^2} = \sqrt{1^2 + 10^2}\ \mathrm{mm} = \sqrt{101}\ \mathrm{mm} = 10.05\ \mathrm{mm}\ \ (\text{to the image}).$$

### Step 2 — Mutual inductance per unit length

The flux per unit length through wire 2's loop (wire 2 and its return in the plane) is the difference of the vector potential $A_z$ between wire 2 and the plane. With $A_z = -(\mu_0I/2\pi)\ln r + \text{const}$ for each line current, wire 1 and its image give

$$A_z(P) = \frac{\mu_0I}{2\pi}\left[-\ln r_1 + \ln r_1'\right] = \frac{\mu_0I}{2\pi}\ln\frac{r_1'}{r_1},$$

which vanishes on the plane (equidistant from wire 1 and its image). Hence

$$M' = \frac{\Phi'}{I} = \frac{\mu_0}{2\pi}\ln\frac{\sqrt{d^2 + (2h)^2}}{d} = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right].$$

With $\mu_0/(4\pi) = 10^{-7}\ \mathrm{H/m} = 0.1\ \mathrm{nH/mm}$:

$$
\begin{aligned}
\frac{2h}{d} &= \frac{10\ \mathrm{mm}}{1\ \mathrm{mm}} = 10,\\
1 + \left(\frac{2h}{d}\right)^2 &= 1 + 100 = 101,\\
\ln 101 &= 4.615,\\
M' &= (0.1\ \mathrm{nH/mm})(4.615) = 0.4615\ \mathrm{nH/mm}.
\end{aligned}
$$

The wires are much closer to each other ($d = 1$ mm) than a wire is to its image ($2h = 10$ mm), so the image only weakly cancels wire 1's field at wire 2 and the coupling is strong. Since $2h \gg d$, $M' \approx (\mu_0/2\pi)\ln(2h/d) = 0.2\ln10 = 0.4605$ nH/mm, nearly the same.

### Step 3 — Total mutual inductance

With end effects neglected, for $\ell = 4$ mm:

$$M = M'\ell = (0.4615\ \mathrm{nH/mm})(4\ \mathrm{mm}) = 1.85\ \mathrm{nH}.$$

(With the approximation $0.2\ln(2h/d)$: $0.4605\times4 = 1.84$ nH.)

A bond wire's self-inductance is roughly 1 nH/mm, so 0.46 nH/mm of mutual inductance means strong coupling: a fast current in one wire induces a large voltage in the other.

**Validity.** The infinite-wire model is what the problem prescribes. For 4-mm wires at a height of 5 mm the ends matter in reality, and a finite-length (Neumann-integral) estimate gives roughly half this value (about 0.9 nH); the long-wire result is an upper estimate.

### Result

Using image theory for long wires above a perfect ground plane,

$$M = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right]\ell = (0.1\ \mathrm{nH/mm})\ln(101)\times4\ \mathrm{mm} \approx 1.85\ \mathrm{nH}.$$

**Common mistake.** Ignoring the ground plane and using a free-space formula for two parallel wires. For infinitely long wires in free space $M$ diverges logarithmically; the image current of the return path is what makes $M'$ finite.

**Common mistake.** Interchanging $h$ and $d$, e.g. $0.1\ln[1 + (d/2h)^2] \approx 0.004$ nH. The logarithm's argument is the distance to the image ($\sqrt{d^2 + 4h^2}$) over the distance to the other wire ($d$), large here.

**Common mistake.** Using a self-inductance formula, or forgetting to multiply the per-unit-length value by the 4-mm length.
