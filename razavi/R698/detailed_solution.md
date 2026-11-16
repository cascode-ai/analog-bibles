# Detailed solution - R698

**Approach.** $M_1$ is used as a MOS (decoupling) capacitor: its gate is the top plate and its inverted channel, contacted at both ends by the grounded source and drain, is the bottom plate. The channel has a resistance, and because the gate charge enters the channel all along its length while the current leaves only at the two ends, the effective series resistance is a fraction of the source-to-drain channel resistance. We find the bias, compute the channel resistance from the deep-triode formula, then find the equivalent series resistance (ESR) by an energy (power-dissipation) argument.

### Step 1 — Bias point of $M_1$

- **Gate.** The gate is at node X. An inductor drops no DC voltage ($V_L = L\,dI/dt = 0$ for a constant current), so the DC level of X equals $V_{DD} = 3$ V. Hence $V_G = 3$ V.
- **Source, drain, bulk.** All are grounded, so $V_{GS} = 3$ V, $V_{DS} = 0$ and $V_{SB} = 0$.
- **Threshold.** With $V_{SB} = 0$ there is no body effect: $V_{TH} = V_{TH0} = 0.7$ V.
- **Overdrive** (the excess of gate–source voltage over threshold):
$$V_{ov} = V_{GS} - V_{TH} = 3 - 0.7 = 2.3\ \mathrm{V}.$$

Since $V_{GS} > V_{TH}$, the surface is strongly inverted: a channel of electrons extends from source to drain. Since $V_{DS} = 0 < V_{ov}$, the device is in the **deep triode region**, and because there is no drain–source voltage the channel charge is **uniform** along its length.

### Step 2 — Source-to-drain channel resistance $R_{tot}$

In deep triode, the drain current is $I_D \approx \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})V_{DS}$, so the channel behaves as a resistor between source and drain:

$$R_{tot} = \frac{1}{\mu_nC_{ox}\dfrac{W}{L}(V_{GS} - V_{TH})} .$$

Aspect ratio:

$$\frac{W}{L} = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 .$$

Substitute:

$$R_{tot} = \frac{1}{(134\times10^{-6}\ \mathrm{A/V^2})(200)(2.3\ \mathrm{V})} = \frac{1}{0.06164\ \mathrm{A/V}} = 16.2\ \Omega .$$

This is the resistance one would measure from source to drain. It is **not** the series resistance of the capacitor, because in the capacitor the current does not flow from one end of the channel to the other.

### Step 3 — How the capacitor current flows in the channel

When the voltage at X changes, a displacement current flows through the gate oxide into the channel. The oxide capacitance is spread uniformly along the channel, so this current enters the channel **uniformly along its length** (at frequencies where the drop along the channel is small compared with the voltage across the oxide). The current must then travel **along the channel** to the source or drain contacts, both grounded.

We can therefore model the channel as a **distributed RC line**: the gate connects through many small oxide capacitors to successive points of the channel, which is a resistive strip of total resistance $R_{tot}$ grounded at both ends.

<!-- diagram: diagram-01.cir -->

By symmetry, the current entering the left half of the channel exits through the source and that entering the right half exits through the drain. No current crosses the middle of the channel.

### Step 4 — Equivalent series resistance by the power method

Let the total small-signal current into the gate be $I$, and let $x$ run along the channel from the source ($x = 0$) to the drain ($x = L$).

- Current entering per unit length: $I/L$.
- Resistance per unit length: $r = R_{tot}/L$.
- In the left half, the current flowing toward the source at position $x$ is the current that entered between $x$ and the midpoint $L/2$:
$$i(x) = \frac{I}{L}\left(\frac{L}{2} - x\right), \qquad 0 \le x \le \frac{L}{2}.$$
It falls linearly from $I/2$ at the source to 0 at the middle.

**Power dissipated in the left half** (Joule heating $i^2r\,dx$ in each slice):

$$P_{left} = \int_0^{L/2} i(x)^2\,r\,dx = \frac{I^2}{L^2}\cdot\frac{R_{tot}}{L}\int_0^{L/2}\left(\frac{L}{2} - x\right)^2dx .$$

The integral, with $u = L/2 - x$:

$$\int_0^{L/2}\left(\frac{L}{2} - x\right)^2dx = \int_0^{L/2}u^2\,du = \frac{1}{3}\left(\frac{L}{2}\right)^3 = \frac{L^3}{24}.$$

So

$$P_{left} = \frac{I^2R_{tot}}{L^3}\cdot\frac{L^3}{24} = \frac{I^2R_{tot}}{24}.$$

**Total power** (the right half dissipates the same by symmetry):

$$P = 2P_{left} = \frac{I^2R_{tot}}{12}.$$

**Equivalent series resistance.** A capacitor with series resistance $R_S$ carrying current $I$ dissipates $I^2R_S$. Setting $I^2R_S = P$:

$$R_S = \frac{R_{tot}}{12}.$$

(The same result follows from the impedance of an open-ended distributed RC line, $Z \approx R/3 + 1/(j\omega C)$ at low frequency: each half has $R = R_{tot}/2$, so its series resistance is $R_{tot}/6$, and the two halves in parallel give $R_{tot}/12$.)

### Step 5 — Numerical result and a simpler estimate

$$R_S = \frac{R_{tot}}{12} = \frac{16.2\ \Omega}{12} = 1.35\ \Omega .$$

**Lumped estimate.** If one assumes, more crudely, that all the gate charge enters at the centre of the channel, then the current $I/2$ flows through each half-channel resistance $R_{tot}/2$, and the two halves act in parallel:

$$R_S \approx \frac{R_{tot}}{2}\parallel\frac{R_{tot}}{2} = \frac{R_{tot}}{4} = \frac{16.2}{4} = 4.06\ \Omega .$$

This overestimates the ESR by a factor of 3, because in reality much of the charge enters close to the contacts and travels only a short distance.

**For perspective** (not needed for the answer): with $C_{ox} \approx 3.84\ \mathrm{fF/\mu m^2}$, the capacitance is $C \approx WLC_{ox} = (100\times0.5\ \mu\mathrm{m^2})(3.84\ \mathrm{fF/\mu m^2}) = 192$ fF, and the intrinsic time constant is $R_SC = (1.35\ \Omega)(192\ \mathrm{fF}) \approx 0.26$ ps. The ESR is therefore negligible for decoupling purposes at practical frequencies.

### Result

$M_1$ operates in deep triode with $V_{GS} = V_{DD} = 3$ V and $V_{ov} = 2.3$ V, giving a source-to-drain channel resistance

$$R_{tot} = \frac{1}{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})} = 16.2\ \Omega .$$

Because the channel is a distributed RC line contacted at both ends, the equivalent series resistance of the MOS capacitor is

$$R_S = \frac{R_{tot}}{12} \approx 1.35\ \Omega$$

(the cruder lumped estimate $R_{tot}/4 \approx 4.06\ \Omega$ is an upper bound).

**Common mistake.** Taking the full channel resistance $R_{tot} \approx 16.2\ \Omega$ as the ESR. The capacitor current does not flow from source to drain; it enters through the oxide all along the channel and leaves through *both* grounded ends, so only a fraction of $R_{tot}$ is in series.

**Common mistake.** Treating $M_1$ as saturated and using $1/g_m$. With $V_{DS} = 0$, the device is in deep triode, where its channel is a uniform resistor; saturation-region quantities such as $g_m$ do not describe a MOS capacitor.

**Common mistake.** Using a gate voltage other than $V_{DD}$, for example subtracting an inductor drop. An inductor has no DC voltage across it, so the DC level of X is exactly $V_{DD} = 3$ V and $V_{ov} = 2.3$ V.
