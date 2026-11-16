# Detailed solution - R651

**Approach.** The average output of an XOR phase detector is a triangle in the phase difference whose mid-scale point, the detector's null, lies at 90°. In static lock the filtered detector output must supply exactly the control voltage that sets the VCO frequency equal to the input frequency, so the phase difference deviates from the null by the frequency offset divided by $K_{PD}K_{VCO}$, which is negligible for a large loop gain.

### Step 1 — Average output of an XOR phase detector

For 50 %-duty square-wave inputs of period $T$ and phase difference $\Delta\phi = \phi_{in} - \phi_{out}$ ($0 \le \Delta\phi \le \pi$), the inputs differ during two intervals of $\frac{\Delta\phi}{2\pi}T$ per period, so the output is high ($V_0$) for

$$2\cdot\frac{\Delta\phi}{2\pi}T = \frac{\Delta\phi}{\pi}T$$

per period, and its average, which the low-pass filter passes, is

$$\overline{V_{PD}} = V_0\,\frac{\Delta\phi}{\pi}, \qquad 0 \le \Delta\phi \le \pi .$$

For $\pi \le \Delta\phi \le 2\pi$, $\overline{V_{PD}} = V_0(2\pi - \Delta\phi)/\pi$: the characteristic is a **triangle**, periodic in $2\pi$,

| $\Delta\phi$ | 0 | 45° | 90° | 135° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|
| $\overline{V_{PD}}/V_0$ | 0 | 0.25 | 0.5 | 0.75 | 1 | 0.5 | 0 |

with slope magnitude

$$K_{PD} = \frac{V_0}{\pi}\ \text{per radian}.$$

### Step 2 — Where the detector can be used: the null at 90°

At $\Delta\phi = 0$ (and $\pi$) the slope reverses sign: near 0 the output depends only on $|\Delta\phi|$, so the detector cannot tell lead from lag, and beyond the corner the feedback has the wrong polarity. Lock cannot be held robustly at these corners. Between 0 and $\pi$ the characteristic is linear and monotonic, centred at $\Delta\phi = 90^\circ$, where the output is at mid-scale, $V_0/2$, with 90° of linear range on either side.

Measured from this mid-level (what a differential XOR, such as a Gilbert cell, produces directly):

$$V_{PD} = \overline{V_{PD}} - \frac{V_0}{2} = K_{PD}\left(\Delta\phi - \frac{\pi}{2}\right), \qquad 0 < \Delta\phi < \pi ,$$

so the **null** of the XOR detector is at $\Delta\phi = 90^\circ$, not at 0.

### Step 3 — Static lock condition

Let $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$, with $V_{cont}$ measured from the same mid-level, so that $\omega_0$ is the VCO frequency when the detector sits at its null (the centre of the tuning range). In lock $\omega_{out} = \omega_{in}$ and the phase difference is constant, so the filter (dc gain 1) passes $V_{cont} = V_{PD} = K_{PD}(\Delta\phi - \pi/2)$:

$$\omega_{in} = \omega_0 + K_{VCO}K_{PD}\left(\Delta\phi - \frac{\pi}{2}\right),$$

$$\Delta\phi = \frac{\pi}{2} + \frac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} .$$

The detector moves away from its null just enough to produce the control voltage $(\omega_{in} - \omega_0)/K_{VCO}$ that shifts the VCO from its centre frequency to the input frequency.

### Step 4 — Large loop gain

For large $K_{PD}K_{VCO}$,

$$\frac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} \to 0 \quad\Longrightarrow\quad \Delta\phi \to \frac{\pi}{2} = 90^\circ .$$

**Example.** Take $V_0 = 1$ V, so $K_{PD} = 1\ \mathrm{V}/\pi = 0.318$ V/rad, and an offset $\omega_{in} - \omega_0 = 2\pi\times10$ MHz.

- With $K_{VCO} = 2\pi\times100$ MHz/V: $K_{PD}K_{VCO} = 2.0\times10^8\ \mathrm{s^{-1}}$, and the deviation is $6.28\times10^7/2.0\times10^8 = 0.31$ rad $= 18^\circ$, so $\Delta\phi = 108^\circ$.
- With $K_{VCO} = 2\pi\times1$ GHz/V the deviation is only $1.8^\circ$, so $\Delta\phi \approx 92^\circ$.

A large loop gain cannot push $\Delta\phi$ toward 0°: it only pulls the operating point toward the null, and reaching 0° would require the detector's most negative output, i.e. the extreme of the tuning range, at the corner where the gain reverses. A multiplier (analog Gilbert-cell) detector, whose average output is proportional to $\cos\Delta\phi$, also has its null at 90° and likewise locks near quadrature.

### Result

The averaged XOR output is a triangle, $\overline{V_{PD}} = V_0\Delta\phi/\pi$ for $0 \le \Delta\phi \le \pi$, with slope $K_{PD} = V_0/\pi$. Its gain reverses at 0 and $\pi$, and its null (mid-scale, zero differential output, centre of the linear range) is at 90°: referred to the mid-level, $V_{PD} = K_{PD}(\Delta\phi - \pi/2)$. In lock the detector must supply the control voltage that moves the VCO from its centre frequency $\omega_0$ to $\omega_{in}$:

$$K_{PD}\left(\Delta\phi - \frac{\pi}{2}\right) = \frac{\omega_{in} - \omega_0}{K_{VCO}} \quad\Longrightarrow\quad \Delta\phi = \frac{\pi}{2} + \frac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} .$$

For a large $K_{PD}K_{VCO}$ the second term vanishes, so the loop locks with $\phi_{in} - \phi_{out} \approx 90^\circ$, in the middle of the detector's linear range, with ±90° of margin before the gain reverses.

**Common mistake.** Explaining the 90° by maximum gain or maximum output. The XOR's gain is the same everywhere between 0 and 180°, and its maximum output is at 180°; 90° is the null, the mid-scale point that corresponds to the VCO's centre frequency.

**Common mistake.** Claiming that a large $K_{PD}K_{VCO}$ drives the phase difference to 0°, as if the output were referenced to its minimum. A large loop gain drives it toward the detector's null, which for an XOR is at 90°; at 0° the XOR cannot distinguish lead from lag.

**Common mistake.** Stating only that "90° is the middle of the XOR's linear range" without the lock condition. The middle matters because the static deviation from it, $(\omega_{in} - \omega_0)/(K_{PD}K_{VCO})$, becomes small when the loop gain is large.
