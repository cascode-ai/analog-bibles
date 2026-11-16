# Detailed solution - R674

**Approach.** In steady state the same drain current flows through every cross-section of the channel, and it equals charge per unit length times carrier velocity. Since the velocity saturates at $v_{sat}$, the charge can never be zero. Then show that the square-law "zero charge at pinch-off" is an artefact of the gradual-channel approximation, and describe what happens between the pinch-off point and the drain.

### Step 1 — Current continuity along the channel

With $x$ from the source ($x = 0$) to the drain ($x = L$), $Q_d(x)$ the mobile charge per unit area and $v(x)$ the carrier velocity,

$$I_D = W\,Q_d(x)\,v(x)$$

is the same at every $x$ (no charge piles up in steady state), so

$$Q_d(x) = \frac{I_D}{W\,v(x)}.$$

### Step 2 — Finite velocity forces a nonzero charge

At high fields scattering limits the velocity to $v_{sat} \approx 10^7$ cm/s for electrons in silicon, so with $v(x) \le v_{sat}$:

$$Q_d(x) = \frac{I_D}{W\,v(x)} \;\ge\; \frac{I_D}{W\,v_{sat}} > 0 .$$

Zero charge at some point would need an *infinite* velocity there to carry the finite current. The mobile charge can become small, but never zero, while current flows.

**Numerical illustration.** $I_D = 100\ \mu$A, $W = 10\ \mu\mathrm{m} = 10^{-3}$ cm:

$$Q_{d,min} = \frac{10^{-4}\ \mathrm{A}}{(10^{-3}\ \mathrm{cm})(10^7\ \mathrm{cm/s})} = 10^{-8}\ \mathrm{C/cm^2} \;\approx\; \frac{10^{-8}}{1.6\times10^{-19}} = 6\times10^{10}\ \text{electrons/cm}^2 .$$

At the source end, with $t_{ox} = 5$ nm ($C_{ox} = 6.9\times10^{-7}\ \mathrm{F/cm^2}$) and an overdrive of 0.3 V, $Q_d = C_{ox}V_{ov} = 2.1\times10^{-7}\ \mathrm{C/cm^2}$. So at the "pinch-off" point the charge falls to roughly 5 % of its source-end value, not to zero.

### Step 3 — Why the square law predicts zero charge

The **gradual-channel approximation** assumes the vertical field dominates, so the local charge is set by the local gate-to-channel voltage,

$$Q_d(x) = C_{ox}\,[V_{GS} - V(x) - V_{TH}],$$

and the current is pure drift, $I_D = W\,Q_d(x)\,\mu\,dV/dx$. In saturation this charge reaches zero where $V(x) = V_{GS} - V_{TH}$. But there the lateral field

$$E(x) = \frac{dV}{dx} = \frac{I_D}{W\,\mu\,Q_d(x)} \;\to\; \infty\quad\text{as } Q_d \to 0 .$$

(At the edge of saturation, $V(x) = V_{ov}(1 - \sqrt{1 - x/L})$ and $E = V_{ov}/(2L\sqrt{1 - x/L})$, which diverges at $x = L$.) An infinite lateral field contradicts the assumption that the lateral field is small, so the zero-charge point is an artefact. The approximation also neglects the two-dimensional electrostatics near the drain, the diffusion current, and velocity saturation, which sets the minimum charge of Step 2. With these included, the charge near the drain end of the inverted channel becomes small but stays finite.

### Step 4 — What happens beyond the pinch-off point

When $V_{DS} > V_{GS} - V_{TH}$, the point where the gate-to-channel voltage falls to $V_{TH}$ moves toward the source, to $L - \Delta L$.

- **No strong inversion layer near the drain.** Between $L - \Delta L$ and $L$ the gate-to-channel voltage is below threshold, so this short region is essentially a depletion region, the extension of the drain–substrate junction.
- **Very high lateral field.** The inverted channel carries about $V_{GS} - V_{TH}$; the rest, $V_{DS} - (V_{GS} - V_{TH})$, drops across the short distance $\Delta L$.
- **Carriers are swept into the drain.** Electrons arriving at the end of the inverted channel travel at (close to) $v_{sat}$, spread away from the surface into the silicon, and are swept into the drain, like carriers reaching the edge of a reverse-biased junction's depletion region: the region does not block the current, it transports whatever arrives.

So the current does **not** stop at pinch-off; it is set by how many carriers the inverted channel delivers to the pinch-off point per second.

### Step 5 — Consequences: saturation and channel-length modulation

**Saturation.** The inverted channel has length $L - \Delta L$ and voltage $V_{GS} - V_{TH}$ across it, independent of $V_{DS}$:

$$I_D \approx \frac12\,\mu C_{ox}\,\frac{W}{L - \Delta L}\,(V_{GS} - V_{TH})^2 .$$

Raising $V_{DS}$ only adds voltage across the pinched-off region, so $I_D$ is (nearly) independent of $V_{DS}$.

**Channel-length modulation.** $\Delta L$ grows with $V_{DS}$, so the effective channel shortens and the current rises slightly. For $\Delta L \ll L$,

$$\frac{1}{L - \Delta L} = \frac{1}{L}\cdot\frac{1}{1 - \Delta L/L} \approx \frac{1}{L}\left(1 + \frac{\Delta L}{L}\right),$$

and with $\Delta L/L \approx \lambda V_{DS}$,

$$I_D \approx \frac12\,\mu C_{ox}\,\frac{W}{L}\,(V_{GS} - V_{TH})^2\,(1 + \lambda V_{DS}),$$

which gives the saturated device its finite output resistance $r_O = 1/(\lambda I_D)$.

### Result

- The mobile charge cannot drop to exactly zero because the current $I_D = WQ_d(x)v(x)$ must be the same at every point of the channel, and the carrier velocity is finite ($v \le v_{sat} \approx 10^7$ cm/s). Hence $Q_d \ge I_D/(Wv_{sat}) > 0$. The zero-charge "pinch-off" of the square law is an artefact of the gradual-channel approximation, which breaks down there (it would require an infinite lateral field and velocity).
- Beyond the pinch-off point there is a short, depleted, high-field region of length $\Delta L$ in which the gate holds no inversion layer. The few carriers arriving there travel at (near) saturated velocity, spread away from the surface and are swept into the drain, much as in a reverse-biased junction. The current is set by the inverted part of the channel, so it saturates; and since $\Delta L$ grows with $V_{DS}$, the effective length shortens and $I_D$ rises slightly: channel-length modulation and finite $r_O$.

**Common mistake.** Concluding that no carriers reach the drain once the channel "pinches off", so the current stops. The high-field region beyond pinch-off carries every arriving carrier to the drain, which is why the current saturates instead of vanishing.

**Common mistake.** Accepting $Q_d = 0$ at the pinch-off point at face value. Zero charge with nonzero current would need infinite carrier velocity; the result only shows that the gradual-channel approximation fails near the drain.
