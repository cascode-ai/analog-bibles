# Detailed solution - R698

**Approach.** $M_1$ is a MOS (decoupling) capacitor: the gate is the top plate and the inverted channel, contacted at both ends by the grounded source and drain, is the bottom plate. The gate charge enters the channel all along its length while the current leaves only at the two ends, so the equivalent series resistance (ESR) is a fraction of the source-to-drain channel resistance. Find the bias, compute the channel resistance in deep triode, then find the ESR from the power dissipated in the channel.

### Step 1 — Bias point of $M_1$

The inductor drops no DC voltage, so the gate (node X) sits at $V_{DD} = 3$ V. Source, drain and bulk are grounded, so $V_{GS} = 3$ V, $V_{DS} = 0$, $V_{SB} = 0$ and $V_{TH} = V_{TH0} = 0.7$ V:

$$V_{ov} = V_{GS} - V_{TH} = 3 - 0.7 = 2.3\ \mathrm{V}.$$

The surface is strongly inverted, and with $V_{DS} = 0 < V_{ov}$ the device is in **deep triode** with a **uniform** channel charge.

### Step 2 — Source-to-drain channel resistance $R_{tot}$

In deep triode the channel is a resistor between source and drain, with $W/L = 100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 200$:

$$R_{tot} = \frac{1}{\mu_nC_{ox}\dfrac{W}{L}(V_{GS} - V_{TH})} = \frac{1}{(134\times10^{-6}\ \mathrm{A/V^2})(200)(2.3\ \mathrm{V})} = \frac{1}{0.06164\ \mathrm{A/V}} = 16.2\ \Omega .$$

This is **not** the series resistance of the capacitor, because the capacitor current does not flow from one end of the channel to the other.

### Step 3 — How the capacitor current flows in the channel

A change of $V_X$ drives a displacement current through the oxide, which is spread uniformly along the channel, so the current enters the channel **uniformly along its length** (at frequencies where the drop along the channel is small compared with the voltage across the oxide). It then travels **along the channel** to the grounded source and drain. The channel is therefore a **distributed RC line**: a resistive strip of total resistance $R_{tot}$, grounded at both ends, coupled to the gate by many small oxide capacitors.

<!-- diagram: diagram-01.cir -->

By symmetry, the current entering the left half exits through the source and that entering the right half through the drain; no current crosses the middle of the channel.

### Step 4 — Equivalent series resistance by the power method

Let the total small-signal current into the gate be $I$, and let $x$ run from the source ($x = 0$) to the drain ($x = L$). The current entering per unit length is $I/L$ and the resistance per unit length is $r = R_{tot}/L$. In the left half, the current flowing toward the source at $x$ is the current that entered between $x$ and $L/2$:

$$i(x) = \frac{I}{L}\left(\frac{L}{2} - x\right), \qquad 0 \le x \le \frac{L}{2},$$

falling linearly from $I/2$ at the source to 0 at the middle. The power dissipated in the left half is

$$P_{left} = \int_0^{L/2} i(x)^2\,r\,dx = \frac{I^2}{L^2}\cdot\frac{R_{tot}}{L}\int_0^{L/2}\left(\frac{L}{2} - x\right)^2dx .$$

With $u = L/2 - x$:

$$\int_0^{L/2}\left(\frac{L}{2} - x\right)^2dx = \int_0^{L/2}u^2\,du = \frac{1}{3}\left(\frac{L}{2}\right)^3 = \frac{L^3}{24},$$

so

$$P_{left} = \frac{I^2R_{tot}}{L^3}\cdot\frac{L^3}{24} = \frac{I^2R_{tot}}{24}.$$

The right half dissipates the same, so

$$P = 2P_{left} = \frac{I^2R_{tot}}{12}.$$

Setting this equal to the power $I^2R_S$ in a series resistance $R_S$:

$$R_S = \frac{R_{tot}}{12}.$$

(The same result follows from the impedance of an open-ended distributed RC line, $Z \approx R/3 + 1/(j\omega C)$ at low frequency: each half has $R = R_{tot}/2$, so its series resistance is $R_{tot}/6$, and the two halves in parallel give $R_{tot}/12$.)

### Step 5 — Numerical result and a simpler estimate

$$R_S = \frac{R_{tot}}{12} = \frac{16.2\ \Omega}{12} = 1.35\ \Omega .$$

**Lumped estimate.** If all the gate charge entered at the centre of the channel, the current $I/2$ would flow through each half-channel resistance $R_{tot}/2$, with the two halves in parallel:

$$R_S \approx \frac{R_{tot}}{2}\parallel\frac{R_{tot}}{2} = \frac{R_{tot}}{4} = \frac{16.2}{4} = 4.06\ \Omega .$$

This overestimates the ESR by a factor of 3, because much of the charge actually enters close to the contacts.

**For perspective** (not needed for the answer): with $C_{ox} \approx 3.84\ \mathrm{fF/\mu m^2}$, $C \approx WLC_{ox} = (100\times0.5\ \mu\mathrm{m^2})(3.84\ \mathrm{fF/\mu m^2}) = 192$ fF and $R_SC = (1.35\ \Omega)(192\ \mathrm{fF}) \approx 0.26$ ps, so the ESR is negligible for decoupling at practical frequencies.

### Result

$M_1$ operates in deep triode with $V_{GS} = V_{DD} = 3$ V and $V_{ov} = 2.3$ V, giving a source-to-drain channel resistance

$$R_{tot} = \frac{1}{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})} = 16.2\ \Omega .$$

Because the channel is a distributed RC line contacted at both ends, the equivalent series resistance of the MOS capacitor is

$$R_S = \frac{R_{tot}}{12} \approx 1.35\ \Omega$$

(the cruder lumped estimate $R_{tot}/4 \approx 4.06\ \Omega$ is an upper bound).

**Common mistake.** Taking the full channel resistance $R_{tot} \approx 16.2\ \Omega$ as the ESR. The capacitor current enters through the oxide all along the channel and leaves through *both* grounded ends, so only a fraction of $R_{tot}$ is in series.

**Common mistake.** Treating $M_1$ as saturated and using $1/g_m$. With $V_{DS} = 0$ the device is in deep triode, where its channel is a uniform resistor.

**Common mistake.** Using a gate voltage other than $V_{DD}$, for example subtracting an inductor drop. An inductor has no DC voltage across it, so $V_X = V_{DD} = 3$ V and $V_{ov} = 2.3$ V.
