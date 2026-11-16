# Detailed solution - R647

**Approach.** Convert the inductor's loss (given as a quality factor) into an equivalent parallel resistance $R_P$ across each tank. In steady state the cross-coupled pair switches the whole tail current from side to side, so each tank is driven by a square-wave current between 0 and $I_{SS}$. The tank passes only the fundamental of that current, whose amplitude is $(2/\pi)I_{SS}$, and converts it to a voltage through $R_P$. That gives the swing.

### Step 1 — Equivalent parallel resistance of the tank

The quality factor of the inductor is $Q = \omega L_P/R_S$, where $R_S$ is its series loss resistance. At $f = 1$ GHz:

$$\omega L_P = (2\pi\times10^9\ \mathrm{s^{-1}})(5\times10^{-9}\ \mathrm{H}) = 31.4\ \Omega,$$

so

$$R_S = \frac{\omega L_P}{Q} = \frac{31.4\ \Omega}{4} = 7.85\ \Omega .$$

Near resonance, a series $R_S$–$L_P$ branch is equivalent to an inductor in parallel with a resistance

$$R_P = R_S(1 + Q^2) \approx Q^2R_S = Q\,\omega L_P .$$

Numerically:

$$R_P \approx Q\,\omega L_P = 4\times31.4\ \Omega = 126\ \Omega$$

(the exact conversion gives $7.85\ \Omega\times(1 + 16) = 134\ \Omega$; the difference is small, and we use 126 Ω). Since only the inductor losses are considered, $R_P$ is the only loss in each tank.

### Step 2 — Drain currents in steady state

The tail current $I_{SS} = 1$ mA is shared by the cross-coupled transistors: $I_{D1} + I_{D2} = I_{SS}$. Once the oscillation has grown, the differential voltage $V_X - V_Y$ drives the pair hard enough to steer essentially all of $I_{SS}$ to one transistor during each half cycle. Each drain current is then approximately a square wave between 0 and $I_{SS}$:

$$I_{D1}(t) \approx \frac{I_{SS}}{2} + \frac{2I_{SS}}{\pi}\left[\cos\omega t - \frac13\cos3\omega t + \frac15\cos5\omega t - \dots\right],$$

and $I_{D2}(t) = I_{SS} - I_{D1}(t)$. The amplitude of the fundamental is $\frac4\pi\cdot\frac{I_{SS}}{2} = \frac{2}{\pi}I_{SS}$:

$$I_1 = \frac{2}{\pi}(1\ \mathrm{mA}) = 0.637\ \mathrm{mA}.$$

### Step 3 — From current to voltage: the tank as a filter

Each tank is driven by its drain current:

<!-- diagram: diagram-01.cir -->

The diagram shows one side: the switched current $i_{D1}(t)$ is drawn from node X, which connects to $V_{DD}$ through $L_P$ and $R_P$ and has the node capacitance (parasitics plus varactor) to ground.

- **DC component** ($I_{SS}/2$): flows through the inductor with no drop, so X and Y are centred at $V_{DD}$.
- **Fundamental** (at the resonance frequency, 1 GHz): $L_P$ and the node capacitance cancel, and the tank impedance is $R_P$.
- **Harmonics**: the tank impedance is much smaller there (the capacitance shunts them), so they contribute little voltage.

The amplitude of each node's swing is therefore

$$A = I_1R_P = \frac{2}{\pi}I_{SS}R_P = (0.637\ \mathrm{mA})(126\ \Omega) = 80\ \mathrm{mV}.$$

So

$$V_X(t) \approx V_{DD} - A\cos\omega t, \qquad V_Y(t) \approx V_{DD} + A\cos\omega t .$$

### Step 4 — Single-ended and differential swing

X and Y move in opposite directions, so:

| Quantity | Amplitude (peak) | Peak-to-peak |
|---|---|---|
| Each node, $V_X$ or $V_Y$ | ≈ 80 mV | ≈ 160 mV |
| Differential, $V_X - V_Y$ | ≈ 160 mV | ≈ 320 mV |

(With the exact $R_P = 134\ \Omega$, the values are about 6 % larger: 85 mV single-ended amplitude.)

### Step 5 — Plausibility and limitations

- **Why so small?** With $Q = 4$ the tank resistance is only 126 Ω; at 1 mA the swing cannot be large. A higher-$Q$ inductor gives a proportionally larger $R_P$ and a larger swing for the same current.
- **Start-up.** The oscillator starts only if $g_mR_P \ge 1$, i.e. $g_m \ge 1/(126\ \Omega) = 7.96$ mS at 0.5 mA per transistor. This requires an overdrive of at most $2I_D/g_m = 1\ \mathrm{mA}/7.96\ \mathrm{mS} = 0.126$ V (a wide device).
- **Is the switching complete?** The pair steers all of the current once $|V_X - V_Y|$ exceeds $\sqrt2\,(V_{GS} - V_{TH})_{eq} \approx \sqrt2\times0.126 = 0.18$ V, which is comparable to the estimated 160-mV differential amplitude. The switching is therefore only partial, the fundamental current is somewhat below $(2/\pi)I_{SS}$, and the actual swing may be somewhat smaller than 80 mV. Losses in the varactors and transistors, neglected here, would reduce it further.

The estimate, about 80 mV per node, is thus an upper-end value of the right order.

### Result

$$R_P \approx Q\,\omega L_P = 4\times2\pi(10^9)(5\ \mathrm{nH}) \approx 126\ \Omega,$$

and, with the tail current fully switched, each drain current is a 0-to-1-mA square wave whose fundamental has amplitude $(2/\pi)I_{SS} = 0.64$ mA. The tank converts it to

$$A \approx \frac{2}{\pi}I_{SS}R_P \approx 80\ \mathrm{mV}$$

per node (≈ 160 mV peak-to-peak), sinusoidal around $V_{DD}$. The differential output $V_X - V_Y$ has an amplitude of about $(4/\pi)I_{SS}R_P \approx 160$ mV (≈ 320 mV peak-to-peak).

**Common mistake.** Taking the tank resistance as the series resistance $\omega L_P/Q \approx 7.9\ \Omega$, or as $Q^2\omega L_P$. The tank's loss at resonance is represented by the parallel resistance $R_P = Q\omega L_P \approx 126\ \Omega$.

**Common mistake.** Multiplying the whole tail current by $R_P$ and quoting $I_{SS}R_P \approx 126$ mV as the single-ended amplitude. A current that switches between 0 and $I_{SS}$ has a fundamental of only $(2/\pi)I_{SS}$, and only the fundamental develops a voltage across the tank.

**Common mistake.** Leaving the answer ambiguous: the single-ended amplitude (80 mV), the differential amplitude (160 mV) and the corresponding peak-to-peak values (160 mV and 320 mV) differ by factors of 2, so the quantity must be labelled.
