# Detailed solution - R648

**Approach.** With small inputs a Gilbert cell is a multiplier, $V_{out} = K_mV_1V_2$, where $K_m$ is its gain constant. For two sinusoids of the same frequency the product is a dc term that depends only on the phase difference plus a component at twice the input frequency, which a low-pass filter removes. The dc term is a cosine of the phase difference, which answers the linearity question.

### Step 1 — The product of two sinusoids

Let the inputs have the same angular frequency $\omega$, amplitudes $A$ and $B$, and phase difference $\Delta\phi$:

$$V_1(t) = A\cos\omega t, \qquad V_2(t) = B\cos(\omega t + \Delta\phi),$$

$$V_{out}(t) = K_m\,V_1(t)\,V_2(t) = K_mAB\cos\omega t\,\cos(\omega t + \Delta\phi).$$

With $\cos a\cos b = \tfrac12[\cos(a - b) + \cos(a + b)]$, $a - b = -\Delta\phi$ and $a + b = 2\omega t + \Delta\phi$:

$$V_{out}(t) = \frac{K_mAB}{2}\cos\Delta\phi + \frac{K_mAB}{2}\cos(2\omega t + \Delta\phi),$$

a **dc term** $\tfrac12K_mAB\cos\Delta\phi$ plus a term at **$2\omega$** of constant amplitude $\tfrac12K_mAB$.

### Step 2 — Averaging: the phase-detector output

A low-pass filter with bandwidth well below $2\omega$ (in a PLL, the loop filter) removes the $2\omega$ term, which averages to zero, leaving

$$\overline{V_{out}} = \frac{K_mAB}{2}\cos\Delta\phi .$$

For given amplitudes this depends on $\Delta\phi$ alone, so **the multiplier followed by averaging is a phase detector**. The phase information is in the dc component; the amplitude of the $2\omega$ component does not depend on $\Delta\phi$.

(With different input frequencies $\omega_1 \ne \omega_2$, the "dc" term becomes a beat at $|\omega_1 - \omega_2|$ with zero average; the detector works for inputs of equal frequency, as in a locked loop.)

### Step 3 — The input–output characteristic

Normalised to $\tfrac12K_mAB$:

| $\Delta\phi$ | 0 | 30° | 60° | 90° | 120° | 150° | 180° |
|---|---|---|---|---|---|---|---|
| $\cos\Delta\phi$ | 1 | 0.866 | 0.5 | 0 | −0.5 | −0.866 | −1 |

It is a **cosine**, periodic in $2\pi$: maximum $+\tfrac12K_mAB$ at $\Delta\phi = 0$, zero at $\Delta\phi = \pm90^\circ$, minimum $-\tfrac12K_mAB$ at $180^\circ$.

### Step 4 — Is it linear?

**No.** The detector gain is the slope

$$K_{PD} = \frac{d\overline{V_{out}}}{d\Delta\phi} = -\frac{K_mAB}{2}\sin\Delta\phi ,$$

which varies with $\Delta\phi$: its magnitude is largest, $\tfrac12K_mAB$ per radian, at $\Delta\phi = \pm90^\circ$ (quadrature), where the output crosses zero; it falls to zero at $\Delta\phi = 0$ and $180^\circ$, where the characteristic is flat; and it reverses sign there.

**Approximately linear near quadrature.** With $\Delta\phi = \pi/2 + \epsilon$, $\cos(\pi/2 + \epsilon) = -\sin\epsilon$, so

$$\overline{V_{out}} = -\frac{K_mAB}{2}\sin\epsilon \approx -\frac{K_mAB}{2}\,\epsilon \quad(|\epsilon| \ll 1).$$

The error of this approximation, $(\epsilon - \sin\epsilon)/\epsilon$, is about 1.1 % at $\epsilon = 15^\circ$ and 4.5 % at $\epsilon = 30^\circ$ ($\sin30^\circ = 0.5$ versus $\pi/6 = 0.524$), so the detector is reasonably linear only within a few tens of degrees of $90^\circ$, which is why a multiplier-based PLL operates near quadrature.

**Amplitude dependence.** The gain is also proportional to $A$ and $B$. By contrast, a Gilbert cell driven with large swings acts as an XOR gate, whose average output is a triangle with constant slope $V_0/\pi$ (for output levels 0 and $V_0$), linear between 0 and $180^\circ$ and independent of the input amplitudes.

### Result

With $V_1 = A\cos\omega t$ and $V_2 = B\cos(\omega t + \Delta\phi)$:

$$V_{out} = K_mV_1V_2 = \frac{K_mAB}{2}\left[\cos\Delta\phi + \cos(2\omega t + \Delta\phi)\right] \quad\Longrightarrow\quad \overline{V_{out}} = \frac{K_mAB}{2}\cos\Delta\phi$$

after low-pass filtering. The average output depends only on the phase difference, so the multiplier is a phase detector. Its characteristic is **not linear**: it is a cosine, with gain $-\tfrac12K_mAB\sin\Delta\phi$ that varies with $\Delta\phi$ and vanishes at 0 and $180^\circ$. It is approximately linear only near $\Delta\phi = 90^\circ$, where the output crosses zero and the gain magnitude is largest ($\tfrac12K_mAB$ per radian), and its gain also scales with the input amplitudes.

**Common mistake.** Claiming the characteristic is linear over the whole range, like the triangular XOR characteristic. That holds only for hard-switched inputs; for small sinusoidal inputs the product gives a cosine.

**Common mistake.** Looking for the phase information in the $2\omega$ component, whose amplitude $\tfrac12K_mAB$ is independent of $\Delta\phi$. The useful output is the dc term, hence the low-pass filter.

**Common mistake.** Concluding that the average output is independent of $\Delta\phi$, or dropping the factor $\tfrac12$ of the product-to-sum identity. The dc term is $\tfrac12K_mAB\cos\Delta\phi$.
