# Detailed solution - R651

**Approach.** Derive the average output of an XOR phase detector as a function of the phase difference: it is a triangle whose mid-scale point, the detector's null, lies at 90°. Then write the static lock condition: the filtered detector output must supply exactly the control voltage that sets the VCO frequency equal to the input frequency. The deviation of the phase difference from the null is the frequency offset divided by $K_{PD}K_{VCO}$, which becomes negligible for a large loop gain.

### Step 1 — Average output of an XOR phase detector

Let the input and the VCO output be square waves with 50 % duty cycle, period $T$ and phase difference $\Delta\phi = \phi_{in} - \phi_{out}$. The XOR output is high ($V_0$) whenever the two inputs differ and low (0) when they are equal.

For $0 \le \Delta\phi \le \pi$, the two waveforms differ during two intervals per period (one after each edge of the leading signal), each of length $\frac{\Delta\phi}{2\pi}T$. The output is therefore high for a total of

$$2\cdot\frac{\Delta\phi}{2\pi}T = \frac{\Delta\phi}{\pi}T$$

per period, and its average, which is what the low-pass filter passes, is

$$\overline{V_{PD}} = V_0\,\frac{\Delta\phi}{\pi}, \qquad 0 \le \Delta\phi \le \pi .$$

For $\pi \le \Delta\phi \le 2\pi$ the overlap starts to grow again, and $\overline{V_{PD}} = V_0(2\pi - \Delta\phi)/\pi$. The characteristic is a **triangle**, periodic in $2\pi$:

| $\Delta\phi$ | 0 | 45° | 90° | 135° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|
| $\overline{V_{PD}}/V_0$ | 0 | 0.25 | 0.5 | 0.75 | 1 | 0.5 | 0 |

Its slope, the phase-detector gain, has magnitude

$$K_{PD} = \frac{V_0}{\pi}\ \text{per radian}.$$

### Step 2 — Where the detector can be used: the null at 90°

- **At $\Delta\phi = 0$** (and at $\pi$) the slope reverses sign. The output is the same for a lead and for an equal lag ($\overline{V_{PD}}$ depends only on $|\Delta\phi|$ near 0), so the detector cannot tell which way to correct, and on the other side of the corner the feedback has the wrong polarity. Lock cannot be held robustly at these corners.
- **Between 0 and $\pi$** the characteristic is linear and monotonic. Its centre, $\Delta\phi = 90^\circ$, is where the output is at mid-scale, $V_0/2$, with 90° of linear range available on either side.

Measured from its mid-level, which is what a differential XOR (for example a Gilbert cell with a differential output) produces directly, the detector output is

$$V_{PD} = \overline{V_{PD}} - \frac{V_0}{2} = K_{PD}\left(\Delta\phi - \frac{\pi}{2}\right), \qquad 0 < \Delta\phi < \pi .$$

So the **null** of the XOR detector (zero differential output) is at $\Delta\phi = 90^\circ$, not at 0.

### Step 3 — Static lock condition

Let the VCO be characterised by

$$\omega_{out} = \omega_0 + K_{VCO}V_{cont},$$

where $V_{cont}$ is measured from the same mid-level as $V_{PD}$, so that $\omega_0$ is the VCO frequency when the detector sits at its null (the centre of the VCO tuning range). In lock:

- the output frequency equals the input frequency, $\omega_{out} = \omega_{in}$;
- the phase difference is constant, so the filter's output is the DC value of the detector output (DC gain 1): $V_{cont} = V_{PD} = K_{PD}(\Delta\phi - \pi/2)$.

Substitute into the VCO equation:

$$\omega_{in} = \omega_0 + K_{VCO}K_{PD}\left(\Delta\phi - \frac{\pi}{2}\right).$$

Solve for the phase difference:

$$\Delta\phi = \frac{\pi}{2} + \frac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} .$$

**Interpretation.** The detector must move away from its null by just enough to produce the control voltage $(\omega_{in} - \omega_0)/K_{VCO}$ that shifts the VCO from its centre frequency to the input frequency.

### Step 4 — Large loop gain

The deviation from 90° is the frequency offset divided by the loop gain $K_{PD}K_{VCO}$. For large $K_{PD}K_{VCO}$,

$$\frac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} \to 0 \quad\Longrightarrow\quad \Delta\phi \to \frac{\pi}{2} = 90^\circ .$$

**Example.** Take $V_0 = 1$ V, so $K_{PD} = 1\ \mathrm{V}/\pi = 0.318$ V/rad, and an offset $\omega_{in} - \omega_0 = 2\pi\times10$ MHz.

- With $K_{VCO} = 2\pi\times100$ MHz/V: $K_{PD}K_{VCO} = 2.0\times10^8\ \mathrm{s^{-1}}$, and the deviation is $6.28\times10^7/2.0\times10^8 = 0.31$ rad $= 18^\circ$, so $\Delta\phi = 108^\circ$.
- With $K_{VCO} = 2\pi\times1$ GHz/V the deviation is only $1.8^\circ$, so $\Delta\phi \approx 92^\circ$.

**Why a large loop gain cannot push $\Delta\phi$ toward 0°.** The lock point is set by the detector's *null*, where its output equals the level corresponding to the VCO's centre frequency. A large loop gain only pulls the operating point closer to this null. Reaching $\Delta\phi = 0$ would require the most negative output the detector can give, i.e. the extreme of the tuning range rather than its centre, and that point is the corner where the detector gain reverses.

**Same behaviour for other detectors.** A multiplier (analog Gilbert-cell) phase detector has an average output proportional to $\cos\Delta\phi$, which is also zero at 90°, so it too locks near quadrature for a large loop gain.

### Result

The averaged XOR output is a triangle, $\overline{V_{PD}} = V_0\Delta\phi/\pi$ for $0 \le \Delta\phi \le \pi$, with slope $K_{PD} = V_0/\pi$. Its gain reverses at 0 and $\pi$, and its null (mid-scale, zero differential output, centre of the linear range) is at 90°: referred to the mid-level, $V_{PD} = K_{PD}(\Delta\phi - \pi/2)$. In lock the detector must supply the control voltage that moves the VCO from its centre frequency $\omega_0$ to $\omega_{in}$:

$$K_{PD}\left(\Delta\phi - \frac{\pi}{2}\right) = \frac{\omega_{in} - \omega_0}{K_{VCO}} \quad\Longrightarrow\quad \Delta\phi = \frac{\pi}{2} + \frac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} .$$

For a large $K_{PD}K_{VCO}$ the second term vanishes, so the loop locks with $\phi_{in} - \phi_{out} \approx 90^\circ$, in the middle of the detector's linear range, with ±90° of margin before the gain reverses.

**Common mistake.** Explaining the 90° by saying the XOR has its maximum gain or maximum output there. Its gain is the same everywhere between 0 and 180°, and its maximum output occurs at 180°. The reason is that 90° is the detector's null, the mid-scale point that corresponds to the VCO's centre frequency.

**Common mistake.** Claiming that a large $K_{PD}K_{VCO}$ drives the phase difference to 0°, as if the detector's output were referenced to its minimum. A large loop gain drives the phase difference toward the detector's null, and for an XOR the null is at 90°. At 0° the XOR cannot distinguish lead from lag.

**Common mistake.** Stating only that "90° is the middle of the XOR's linear range" without the lock condition. The middle of the range matters because the static phase deviation from it, $(\omega_{in} - \omega_0)/(K_{PD}K_{VCO})$, becomes small when the loop gain is large.
