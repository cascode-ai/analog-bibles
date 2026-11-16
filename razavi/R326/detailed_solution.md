# Detailed solution - R326

**Approach.** Because the stages do not interact (no stage loads the previous one), the overall transfer function is the product of the $N$ identical stage transfer functions. We compute the magnitude of that product at $s = j\omega$, set it equal to $1/\sqrt2$ of its dc value (the definition of the −3-dB frequency), and solve for $\omega$.

### Step 1 — Transfer function of the cascade

Each stage has

$$H_1(s) = \frac{A_0}{1 + s/\omega_p},$$

where $A_0$ is the dc gain of one stage and $\omega_p$ its pole. "Non-interacting" means that the output of each stage is not affected by the stage that follows it, so the transfer functions simply multiply:

$$H(s) = \underbrace{H_1(s)\,H_1(s)\cdots H_1(s)}_{N\ \text{times}} = \frac{A_0^N}{\left(1 + s/\omega_p\right)^N}.$$

The overall dc gain is $H(0) = A_0^N$, and the cascade has an $N$-th-order pole at $s = -\omega_p$.

### Step 2 — Magnitude response

Set $s = j\omega$. The magnitude of one stage is

$$|H_1(j\omega)| = \frac{A_0}{\left|1 + j\omega/\omega_p\right|} = \frac{A_0}{\sqrt{1 + (\omega/\omega_p)^2}} .$$

The magnitude of a product is the product of the magnitudes, so

$$|H(j\omega)| = |H_1(j\omega)|^N = \frac{A_0^N}{\left[1 + (\omega/\omega_p)^2\right]^{N/2}} .$$

### Step 3 — The −3-dB condition

The −3-dB bandwidth $\omega_{-3dB}$ is the frequency at which the magnitude has fallen to $1/\sqrt2$ of its dc value (the output power halves; $20\log_{10}(1/\sqrt2) = -3.01$ dB):

$$|H(j\omega_{-3dB})| = \frac{A_0^N}{\sqrt2}.$$

Substitute the magnitude from Step 2:

$$\frac{A_0^N}{\left[1 + (\omega_{-3dB}/\omega_p)^2\right]^{N/2}} = \frac{A_0^N}{\sqrt2}.$$

Cancel $A_0^N$ and invert both sides:

$$\left[1 + \left(\frac{\omega_{-3dB}}{\omega_p}\right)^2\right]^{N/2} = \sqrt2 = 2^{1/2}.$$

### Step 4 — Solve for $\omega_{-3dB}$

Raise both sides to the power $2/N$ (both sides are positive, so this is allowed and keeps the equality):

$$1 + \left(\frac{\omega_{-3dB}}{\omega_p}\right)^2 = \left(2^{1/2}\right)^{2/N} = 2^{1/N} = \sqrt[N]{2}.$$

Subtract 1:

$$\left(\frac{\omega_{-3dB}}{\omega_p}\right)^2 = \sqrt[N]{2} - 1 .$$

Take the positive square root (a frequency is positive, and $\sqrt[N]{2} > 1$, so the right side is positive):

$$\omega_{-3dB} = \sqrt{\sqrt[N]{2} - 1}\;\omega_p .$$

This completes the proof.

### Step 5 — Checks and how fast the bandwidth shrinks

| $N$ | $\sqrt[N]{2}$ | $\omega_{-3dB}/\omega_p$ |
|---|---|---|
| 1 | 2 | 1 |
| 2 | 1.414 | 0.644 |
| 3 | 1.260 | 0.510 |
| 4 | 1.189 | 0.435 |
| 5 | 1.149 | 0.386 |
| 10 | 1.072 | 0.268 |

- $N = 1$ gives $\omega_{-3dB} = \omega_p$, as it must for a single pole.
- **Large $N$.** Write $\sqrt[N]{2} = e^{(\ln2)/N}\approx 1 + \dfrac{\ln2}{N}$ for large $N$. Then
$$\omega_{-3dB}\approx\omega_p\sqrt{\frac{\ln2}{N}}\approx\frac{0.83\,\omega_p}{\sqrt N}.$$
For $N = 10$ this gives $0.263\,\omega_p$, close to the exact $0.268\,\omega_p$.

**Intuition.** At $\omega = \omega_p$ each stage is already down by 3 dB, so $N$ stages would be down by $3N$ dB. The overall −3-dB point must therefore lie below $\omega_p$, where each stage contributes only $3/N$ dB of attenuation. The bandwidth shrinks roughly as $1/\sqrt N$, not as $1/N$: near dc each pole's magnitude rolls off quadratically, $1 + (\omega/\omega_p)^2$, so the $N$ small losses add up as $N(\omega/\omega_p)^2$.

### Step 6 — The role of "non-interacting", and why cascades are still used

**Non-interacting.** The product $H = H_1^N$ is valid only if connecting stage $k+1$ does not change the response of stage $k$ (for example, each stage is driven by a voltage source and presents no load to the previous one, or any loading is already included in $\omega_p$). If the stages interact, the input capacitance of one stage loads the output of the previous one, the poles move, and the formula no longer applies directly.

**Why cascade at all.** Although the bandwidth shrinks with $N$, the *gain per stage* needed for a given total gain falls quickly. Suppose each stage has a fixed gain–bandwidth product $A_0\omega_p = \omega_{GBW}$ and the total gain must be $G = A_0^N = 1000$:

- $N = 1$: $A_0 = 1000$, $\omega_p = \omega_{GBW}/1000$, bandwidth $0.001\,\omega_{GBW}$;
- $N = 2$: $A_0 = 31.6$, $\omega_p = 0.0316\,\omega_{GBW}$, bandwidth $0.644\times0.0316 = 0.020\,\omega_{GBW}$;
- $N = 3$: $A_0 = 10$, $\omega_p = 0.1\,\omega_{GBW}$, bandwidth $0.510\times0.1 = 0.051\,\omega_{GBW}$.

So three modest stages give about 50 times the bandwidth of a single stage with the same total gain, even after the $\sqrt{2^{1/N} - 1}$ shrinkage.

### Result

For $N$ identical non-interacting stages,

$$|H(j\omega)| = \frac{A_0^N}{\left[1 + (\omega/\omega_p)^2\right]^{N/2}},$$

and setting $|H(j\omega_{-3dB})| = A_0^N/\sqrt2$ gives $1 + (\omega_{-3dB}/\omega_p)^2 = 2^{1/N}$, i.e.

$$\omega_{-3dB} = \sqrt{\sqrt[N]{2} - 1}\;\omega_p .$$

Examples: $N = 1$: $\omega_p$; $N = 2$: $0.644\,\omega_p$; $N = 3$: $0.51\,\omega_p$; for large $N$, $\omega_{-3dB}\approx\omega_p\sqrt{\ln2/N}\approx0.83\,\omega_p/\sqrt N$.

**Common mistake.** Claiming that the bandwidth is exactly $\omega_p/N$ or $\omega_p/\sqrt N$. The exact result is $\sqrt{2^{1/N} - 1}\,\omega_p$; the $1/\sqrt N$ behaviour is only its large-$N$ trend, with a coefficient $\sqrt{\ln2}\approx0.83$.

**Common mistake.** Setting the magnitude to half of the dc gain instead of $1/\sqrt2$ of it. "−3 dB" refers to the half-power point, i.e. a magnitude ratio of $1/\sqrt2$; using 1/2 (−6 dB) would give $\sqrt{4^{1/N} - 1}\,\omega_p$, a different, wrong answer.

**Common mistake.** Using the phase instead of the magnitude, e.g. defining the bandwidth where the total phase reaches $-45^\circ$. That gives $\omega_p\tan(45^\circ/N)$, which is not the −3-dB frequency; the bandwidth is defined purely by the magnitude.
