# Detailed solution - R674

**Approach.** Use current continuity: in steady state the same drain current flows through every cross-section of the channel, and it equals (charge per unit length) × (carrier velocity). Since carrier velocity is finite (it saturates at $v_{sat}$), the charge can never be zero. Then show that the square-law "zero charge at pinch-off" is an artefact of the gradual-channel approximation, and describe what physically happens between the pinch-off point and the drain.

### Step 1 — Current continuity along the channel

Let $x$ run from the source ($x = 0$) to the drain ($x = L$), and let $Q_d(x)$ be the magnitude of the mobile (inversion) charge per unit area at position $x$. A sheet of charge of width $W$ moving with velocity $v(x)$ carries the current

$$I_D = W\,Q_d(x)\,v(x).$$

In steady state no charge piles up anywhere, so (by charge conservation, i.e. KCL applied to a thin slice of the channel) **$I_D$ is the same at every $x$**. Solving for the charge:

$$Q_d(x) = \frac{I_D}{W\,v(x)}.$$

### Step 2 — Finite velocity forces a nonzero charge

The carrier velocity cannot grow without limit. At low fields $v = \mu E$ (mobility × lateral field), but at high fields scattering limits it to the saturation velocity, $v_{sat} \approx 10^7$ cm/s for electrons in silicon. With $v(x) \le v_{sat}$:

$$Q_d(x) = \frac{I_D}{W\,v(x)} \;\ge\; \frac{I_D}{W\,v_{sat}} > 0 .$$

A charge density of exactly zero at some point would require an *infinite* velocity there to carry the finite current, which is impossible. So the mobile charge can become small, but never zero, as long as current flows.

**Numerical illustration.** $I_D = 100\ \mu$A, $W = 10\ \mu\mathrm{m} = 10^{-3}$ cm:

$$Q_{d,min} = \frac{10^{-4}\ \mathrm{A}}{(10^{-3}\ \mathrm{cm})(10^7\ \mathrm{cm/s})} = 10^{-8}\ \mathrm{C/cm^2} \;\approx\; \frac{10^{-8}}{1.6\times10^{-19}} = 6\times10^{10}\ \text{electrons/cm}^2 .$$

At the source end, with $t_{ox} = 5$ nm ($C_{ox} = 6.9\times10^{-7}\ \mathrm{F/cm^2}$) and an overdrive of 0.3 V, $Q_d = C_{ox}V_{ov} = 2.1\times10^{-7}\ \mathrm{C/cm^2}$. So at the "pinch-off" point the charge falls to roughly 5 % of its source-end value, not to zero.

### Step 3 — Why the square law predicts zero charge

The square-law model uses the **gradual-channel approximation**: the vertical field (set by the gate) is assumed to dominate, so the local charge is determined only by the local gate-to-channel voltage,

$$Q_d(x) = C_{ox}\,[V_{GS} - V(x) - V_{TH}],$$

where $V(x)$ is the channel potential. The current is then pure drift, $I_D = W\,Q_d(x)\,\mu\,dV/dx$. In saturation this charge reaches zero at the point where $V(x) = V_{GS} - V_{TH}$.

But look at the lateral field there. From $I_D = W\mu Q_d\,dV/dx$:

$$E(x) = \frac{dV}{dx} = \frac{I_D}{W\,\mu\,Q_d(x)} \;\to\; \infty\quad\text{as } Q_d \to 0 .$$

(Solving the model explicitly at the edge of saturation gives $V(x) = V_{ov}(1 - \sqrt{1 - x/L})$ and $E = V_{ov}/(2L\sqrt{1 - x/L})$, which indeed diverges at $x = L$.) An infinite lateral field contradicts the very assumption that the lateral field is small compared with the vertical one. So the zero-charge point is an artefact of the approximation, which also neglects:

- the lateral field's contribution to the charge balance (two-dimensional electrostatics near the drain);
- the diffusion current, which can carry current where the drift picture fails;
- velocity saturation, which caps $v$ and therefore sets the minimum charge of Step 2.

With these included, the charge near the drain end of the inverted channel becomes small but stays finite.

### Step 4 — What happens beyond the pinch-off point

When $V_{DS} > V_{GS} - V_{TH}$, the point where the gate-to-channel voltage falls to $V_{TH}$ moves from the drain toward the source, to a position $L - \Delta L$.

- **No strong inversion layer near the drain.** Between $L - \Delta L$ and $L$ the gate-to-channel voltage is below threshold, so the gate no longer holds a surface inversion layer there. This short region is essentially a depletion region, the extension of the drain–substrate junction.
- **Very high lateral field.** The inverted part of the channel carries a voltage of about $V_{GS} - V_{TH}$ along it; the rest, $V_{DS} - (V_{GS} - V_{TH})$, drops across the short distance $\Delta L$. The lateral field there is very large.
- **Carriers are swept into the drain.** The electrons arriving at the end of the inverted channel are accelerated by this field, travel at (close to) the saturation velocity, spread away from the surface into the silicon, and are swept into the drain. This is like carriers that diffuse to the edge of a reverse-biased pn junction's depletion region and are then collected across it: the region does not block the current, it simply transports whatever arrives at its edge.

So the current does **not** stop at pinch-off. It is set by how many carriers the inverted channel delivers to the pinch-off point per second.

### Step 5 — Consequences: saturation and channel-length modulation

**Saturation.** The inverted channel has length $L - \Delta L$ and voltage $V_{GS} - V_{TH}$ across it, independent of $V_{DS}$. Applying the square law to that part only:

$$I_D \approx \frac12\,\mu C_{ox}\,\frac{W}{L - \Delta L}\,(V_{GS} - V_{TH})^2 .$$

Raising $V_{DS}$ further only adds voltage across the pinched-off region, so $I_D$ is (nearly) independent of $V_{DS}$: the device is saturated.

**Channel-length modulation.** $\Delta L$ grows with $V_{DS}$ (the depletion region widens with reverse bias), so the effective channel shortens and the current rises slightly. For $\Delta L \ll L$:

$$\frac{1}{L - \Delta L} = \frac{1}{L}\cdot\frac{1}{1 - \Delta L/L} \approx \frac{1}{L}\left(1 + \frac{\Delta L}{L}\right),$$

and modelling $\Delta L/L \approx \lambda V_{DS}$,

$$I_D \approx \frac12\,\mu C_{ox}\,\frac{W}{L}\,(V_{GS} - V_{TH})^2\,(1 + \lambda V_{DS}).$$

This is the familiar channel-length-modulation term, which gives the saturated device its finite output resistance $r_O = 1/(\lambda I_D)$.

### Result

- The mobile charge cannot drop to exactly zero because the current $I_D = WQ_d(x)v(x)$ must be the same at every point of the channel, and the carrier velocity is finite ($v \le v_{sat} \approx 10^7$ cm/s). Hence $Q_d \ge I_D/(Wv_{sat}) > 0$. The zero-charge "pinch-off" of the square law is an artefact of the gradual-channel approximation, which breaks down there (it would require an infinite lateral field and velocity).
- Beyond the pinch-off point there is a short, depleted, high-field region of length $\Delta L$ in which the gate holds no inversion layer. The few carriers arriving there travel at (near) saturated velocity, spread away from the surface and are swept into the drain, much as in a reverse-biased junction. The current is set by the inverted part of the channel, so it saturates; and since $\Delta L$ grows with $V_{DS}$, the effective length shortens and $I_D$ rises slightly: channel-length modulation and finite $r_O$.

**Common mistake.** Concluding that no carriers reach the drain once the channel "pinches off", so the current stops. Pinch-off does not block the current; the high-field region beyond it carries every arriving carrier to the drain, which is why the current saturates instead of vanishing.

**Common mistake.** Accepting $Q_d = 0$ at the pinch-off point at face value. Zero charge with nonzero current would need infinite carrier velocity; the result only shows that the gradual-channel approximation fails near the drain.
