# Detailed solution - R648

**Approach.** Model the multiplier as $V_{out} = K_mV_1V_2$, where $K_m$ is its gain constant. This is how a Gilbert cell behaves when both inputs are small. Feed it two sinusoids of the same frequency and use the product-to-sum identity: the output is a DC term that depends only on the phase difference, plus a component at twice the input frequency that a low-pass filter (or averaging) removes. The DC term is a cosine of the phase difference, which answers the linearity question.

### Step 1 — The inputs and the multiplier model

Let the two sinusoids have the same angular frequency $\omega$, amplitudes $A$ and $B$, and phase difference $\Delta\phi$:

$$V_1(t) = A\cos\omega t, \qquad V_2(t) = B\cos(\omega t + \Delta\phi).$$

With small input swings, the Gilbert cell operates in its linear region in both inputs, and its (differential) output is proportional to the product of the inputs:

$$V_{out}(t) = K_m\,V_1(t)\,V_2(t) = K_mAB\cos\omega t\,\cos(\omega t + \Delta\phi).$$

### Step 2 — Product-to-sum

Use the identity

$$\cos a\cos b = \frac12\left[\cos(a - b) + \cos(a + b)\right],$$

with $a = \omega t$ and $b = \omega t + \Delta\phi$:

$$
\begin{aligned}
a - b &= -\Delta\phi \quad\Longrightarrow\quad \cos(a - b) = \cos\Delta\phi\ \ (\text{cosine is even}),\\
a + b &= 2\omega t + \Delta\phi .
\end{aligned}
$$

Therefore

$$V_{out}(t) = \frac{K_mAB}{2}\cos\Delta\phi + \frac{K_mAB}{2}\cos(2\omega t + \Delta\phi).$$

The output contains:

- a **DC term**, $\tfrac12K_mAB\cos\Delta\phi$, which does not depend on time;
- a term at **twice the input frequency**, $2\omega$, with constant amplitude $\tfrac12K_mAB$.

### Step 3 — Averaging: the phase-detector output

Pass $V_{out}$ through a low-pass filter whose bandwidth is well below $2\omega$ (in a PLL, the loop filter does this). The $2\omega$ term averages to zero over each period $\pi/\omega$:

$$\frac{\omega}{\pi}\int_0^{\pi/\omega}\cos(2\omega t + \Delta\phi)\,dt = 0 .$$

What remains is the average output

$$\overline{V_{out}} = \frac{K_mAB}{2}\cos\Delta\phi .$$

For given amplitudes, this is a function of $\Delta\phi$ alone: it encodes the phase difference between the two sinusoids. **The multiplier followed by averaging is therefore a phase detector**, which is what was to be shown. Note that the phase information is in the DC component, not in the $2\omega$ component, whose amplitude does not depend on $\Delta\phi$.

(If the two inputs had different frequencies $\omega_1 \ne \omega_2$, the "DC" term would become a beat at $|\omega_1 - \omega_2|$ with zero average. The detector works for inputs of equal frequency, which is the situation in a locked loop.)

### Step 4 — The input–output characteristic

The characteristic $\overline{V_{out}}(\Delta\phi) = \tfrac12K_mAB\cos\Delta\phi$, normalised to $\tfrac12K_mAB$:

| $\Delta\phi$ | 0 | 30° | 60° | 90° | 120° | 150° | 180° |
|---|---|---|---|---|---|---|---|
| $\cos\Delta\phi$ | 1 | 0.866 | 0.5 | 0 | −0.5 | −0.866 | −1 |

It is a **cosine**, periodic in $2\pi$: maximum $+\tfrac12K_mAB$ at $\Delta\phi = 0$, zero at $\Delta\phi = \pm90^\circ$, and minimum $-\tfrac12K_mAB$ at $180^\circ$.

### Step 5 — Is it linear?

**No.** The gain of the phase detector is the slope of the characteristic:

$$K_{PD} = \frac{d\overline{V_{out}}}{d\Delta\phi} = -\frac{K_mAB}{2}\sin\Delta\phi .$$

It changes with $\Delta\phi$:

- it is largest in magnitude, $\tfrac12K_mAB$ per radian, at $\Delta\phi = \pm90^\circ$ (quadrature), where the output crosses zero;
- it falls to zero at $\Delta\phi = 0$ and $180^\circ$, where the characteristic is flat;
- it reverses sign as $\Delta\phi$ passes through 0 or $180^\circ$.

**Approximately linear near quadrature.** Let $\Delta\phi = \pi/2 + \epsilon$. Then $\cos(\pi/2 + \epsilon) = -\sin\epsilon$, and

$$\overline{V_{out}} = -\frac{K_mAB}{2}\sin\epsilon \approx -\frac{K_mAB}{2}\,\epsilon \quad(|\epsilon| \ll 1).$$

The error of this linear approximation is $(\epsilon - \sin\epsilon)/\epsilon$: about 1.1 % at $\epsilon = 15^\circ$ and 4.5 % at $\epsilon = 30^\circ$ ($\sin30^\circ = 0.5$ versus $\pi/6 = 0.524$). So the detector is reasonably linear only within a few tens of degrees of $90^\circ$, which is why a multiplier-based PLL operates near quadrature.

**Amplitude dependence.** The gain is also proportional to the input amplitudes $A$ and $B$, so it changes whenever they do. By contrast, a Gilbert cell driven with large swings acts as an XOR gate: its average output is a triangle with constant slope $V_0/\pi$ (for output levels 0 and $V_0$), linear between 0 and $180^\circ$ and independent of the input amplitudes.

### Result

With $V_1 = A\cos\omega t$ and $V_2 = B\cos(\omega t + \Delta\phi)$:

$$V_{out} = K_mV_1V_2 = \frac{K_mAB}{2}\left[\cos\Delta\phi + \cos(2\omega t + \Delta\phi)\right] \quad\Longrightarrow\quad \overline{V_{out}} = \frac{K_mAB}{2}\cos\Delta\phi$$

after low-pass filtering. The average output depends only on the phase difference, so the multiplier is a phase detector. Its characteristic is **not linear**: it is a cosine, with gain $-\tfrac12K_mAB\sin\Delta\phi$ that varies with $\Delta\phi$ and vanishes at 0 and $180^\circ$. It is approximately linear only near $\Delta\phi = 90^\circ$, where the output crosses zero and the gain magnitude is largest ($\tfrac12K_mAB$ per radian), and its gain also scales with the input amplitudes.

**Common mistake.** Claiming that the characteristic is linear over the whole range, like the triangular XOR characteristic. That holds only for hard-switched (large) inputs; for small sinusoidal inputs the product gives a cosine.

**Common mistake.** Looking for the phase information in the $2\omega$ component. Its amplitude, $\tfrac12K_mAB$, is independent of $\Delta\phi$; only its phase shifts. The useful output is the DC term, which is why the multiplier is followed by a low-pass filter.

**Common mistake.** Concluding that the average output is independent of $\Delta\phi$, or dropping the factor $\tfrac12$ from the product-to-sum identity. The DC term is $\tfrac12K_mAB\cos\Delta\phi$.
