# Detailed solution - R718

**Approach.** Each bond wire forms a circuit with the ground plane, which carries its return current. By image theory, the plane can be replaced by an image wire carrying the opposite current at the same distance below the plane. The mutual inductance per unit length is the magnetic flux that wire 1 (together with its image) links through wire 2's circuit, per ampere. We derive it with the two-dimensional vector potential, evaluate it, and multiply by the 4-mm length.

### Step 1 — Geometry and image theory

Place the ground plane at $y = 0$. Wire 1 is at $(0, h)$ and wire 2 at $(d, h)$, with

$$h = 5\ \mathrm{mm}\ \text{(height above the plane)}, \qquad d = 1\ \mathrm{mm}\ \text{(centre-to-centre spacing)}.$$

A current $I$ in wire 1 returns through the perfectly conducting plane. The field above the plane is exactly that of wire 1 plus an **image** wire at $(0, -h)$ carrying $-I$: this pair makes the tangential electric field (and the normal magnetic field) vanish on the plane, as a perfect conductor requires.

Distances from wire 2 to the two sources:

$$r_1 = d = 1\ \mathrm{mm}\ \ (\text{to wire 1}), \qquad r_1' = \sqrt{d^2 + (2h)^2} = \sqrt{1^2 + 10^2}\ \mathrm{mm} = \sqrt{101}\ \mathrm{mm} = 10.05\ \mathrm{mm}\ \ (\text{to the image}).$$

### Step 2 — Flux linked by wire 2's circuit

Wire 2's circuit is the loop formed by wire 2 and its return path in the ground plane. The flux per unit length through this loop is the difference of the magnetic vector potential $A_z$ between wire 2 and the plane.

For a long straight wire carrying current $I$, the vector potential at distance $r$ is $A_z = -\dfrac{\mu_0I}{2\pi}\ln r + \text{const}$. For wire 1 plus its image:

$$A_z(P) = \frac{\mu_0I}{2\pi}\left[-\ln r_1 + \ln r_1'\right] = \frac{\mu_0I}{2\pi}\ln\frac{r_1'}{r_1}.$$

On the plane, every point is equidistant from wire 1 and its image, so $A_z = 0$ there. The flux per unit length linking wire 2's circuit is therefore

$$\Phi' = A_z(\text{wire 2}) - A_z(\text{plane}) = \frac{\mu_0I}{2\pi}\ln\frac{\sqrt{d^2 + (2h)^2}}{d}.$$

### Step 3 — Mutual inductance per unit length

Dividing by $I$:

$$M' = \frac{\Phi'}{I} = \frac{\mu_0}{2\pi}\ln\frac{\sqrt{d^2 + (2h)^2}}{d} = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right].$$

(The second form follows from $\ln\sqrt{x} = \tfrac12\ln x$ and $(d^2 + 4h^2)/d^2 = 1 + (2h/d)^2$.)

A convenient constant: $\mu_0/(4\pi) = 10^{-7}\ \mathrm{H/m} = 0.1\ \mathrm{nH/mm}$.

**Numbers:**

$$
\begin{aligned}
\frac{2h}{d} &= \frac{10\ \mathrm{mm}}{1\ \mathrm{mm}} = 10,\\
1 + \left(\frac{2h}{d}\right)^2 &= 1 + 100 = 101,\\
\ln 101 &= 4.615,\\
M' &= (0.1\ \mathrm{nH/mm})(4.615) = 0.4615\ \mathrm{nH/mm}.
\end{aligned}
$$

**Physical meaning.** The wires are much closer to each other ($d = 1$ mm) than to the plane ($2h = 10$ mm between a wire and its image), so the field of wire 1 is only weakly cancelled by its image at wire 2, and the coupling is strong. Since $2h \gg d$, $M' \approx (\mu_0/2\pi)\ln(2h/d) = 0.2\ln10 = 0.4605$ nH/mm, nearly the same.

### Step 4 — Total mutual inductance

With end effects neglected, $M$ is the per-unit-length value times the length $\ell = 4$ mm:

$$M = M'\ell = (0.4615\ \mathrm{nH/mm})(4\ \mathrm{mm}) = 1.85\ \mathrm{nH}.$$

(With the approximation $0.2\ln(2h/d)$: $0.4605\times4 = 1.84$ nH.)

For comparison, the self-inductance of a bond wire is roughly 1 nH/mm, so a mutual inductance of about 0.46 nH/mm means the two wires are strongly coupled: a fast current in one induces a large voltage in the other (as the companion question on the induced voltage shows).

**Remark on validity.** The infinite-wire model is what the problem prescribes. For wires only 4 mm long at a height of 5 mm, the ends matter in reality, and a finite-length (Neumann-integral) estimate gives roughly half this value (about 0.9 nH). The long-wire result is an upper estimate.

### Result

Using image theory for long wires above a perfect ground plane,

$$M = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right]\ell = (0.1\ \mathrm{nH/mm})\ln(101)\times4\ \mathrm{mm} \approx 1.85\ \mathrm{nH}.$$

**Common mistake.** Ignoring the ground plane and using a free-space formula for two parallel wires. In free space the mutual inductance of infinitely long wires is not even defined (it diverges logarithmically); the ground plane provides the return path, and its image current is what makes $M'$ finite.

**Common mistake.** Interchanging $h$ and $d$, e.g. computing $0.1\ln[1 + (d/2h)^2]$, which gives about 0.004 nH. The argument of the logarithm is the ratio of the distance to the image ($\sqrt{d^2 + 4h^2}$) to the distance to the other wire ($d$), which is large here.

**Common mistake.** Using a self-inductance formula, or forgetting to multiply the per-unit-length value by the 4-mm length.
