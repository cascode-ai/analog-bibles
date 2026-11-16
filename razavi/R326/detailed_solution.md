# Detailed solution - R326

**Approach.** Non-interacting stages multiply, so the overall transfer function is the $N$-th power of one stage's. Compute its magnitude at $s = j\omega$, set it equal to $1/\sqrt2$ of its dc value, and solve for $\omega$.

### Step 1 — Transfer function and magnitude of the cascade

Each stage has $H_1(s) = A_0/(1 + s/\omega_p)$. Since no stage loads the previous one,

$$H(s) = \underbrace{H_1(s)\,H_1(s)\cdots H_1(s)}_{N\ \text{times}} = \frac{A_0^N}{\left(1 + s/\omega_p\right)^N},$$

with dc gain $H(0) = A_0^N$ and an $N$-th-order pole at $s = -\omega_p$. At $s = j\omega$,

$$|H_1(j\omega)| = \frac{A_0}{\left|1 + j\omega/\omega_p\right|} = \frac{A_0}{\sqrt{1 + (\omega/\omega_p)^2}} , \qquad |H(j\omega)| = |H_1(j\omega)|^N = \frac{A_0^N}{\left[1 + (\omega/\omega_p)^2\right]^{N/2}} .$$

### Step 2 — The −3-dB condition and its solution

At $\omega_{-3dB}$ the magnitude has fallen to $1/\sqrt2$ of its dc value ($20\log_{10}(1/\sqrt2) = -3.01$ dB):

$$|H(j\omega_{-3dB})| = \frac{A_0^N}{\sqrt2}\quad\Longrightarrow\quad \frac{A_0^N}{\left[1 + (\omega_{-3dB}/\omega_p)^2\right]^{N/2}} = \frac{A_0^N}{\sqrt2}.$$

Cancelling $A_0^N$ and inverting:

$$\left[1 + \left(\frac{\omega_{-3dB}}{\omega_p}\right)^2\right]^{N/2} = \sqrt2 = 2^{1/2}.$$

Raising both (positive) sides to the power $2/N$:

$$1 + \left(\frac{\omega_{-3dB}}{\omega_p}\right)^2 = \left(2^{1/2}\right)^{2/N} = 2^{1/N} = \sqrt[N]{2},$$

$$\left(\frac{\omega_{-3dB}}{\omega_p}\right)^2 = \sqrt[N]{2} - 1 .$$

Since $\sqrt[N]{2} > 1$, the positive root gives

$$\omega_{-3dB} = \sqrt{\sqrt[N]{2} - 1}\;\omega_p ,$$

which completes the proof.

### Step 3 — Checks and how fast the bandwidth shrinks

| $N$ | $\sqrt[N]{2}$ | $\omega_{-3dB}/\omega_p$ |
|---|---|---|
| 1 | 2 | 1 |
| 2 | 1.414 | 0.644 |
| 3 | 1.260 | 0.510 |
| 4 | 1.189 | 0.435 |
| 5 | 1.149 | 0.386 |
| 10 | 1.072 | 0.268 |

- $N = 1$ gives $\omega_{-3dB} = \omega_p$, as it must for a single pole.
- **Large $N$.** With $\sqrt[N]{2} = e^{(\ln2)/N}\approx 1 + \dfrac{\ln2}{N}$,
$$\omega_{-3dB}\approx\omega_p\sqrt{\frac{\ln2}{N}}\approx\frac{0.83\,\omega_p}{\sqrt N},$$
which for $N = 10$ gives $0.263\,\omega_p$, close to the exact $0.268\,\omega_p$.

At $\omega_p$ each stage is already 3 dB down, so the overall −3-dB point lies lower, where each stage loses only $3/N$ dB. The bandwidth shrinks roughly as $1/\sqrt N$, not $1/N$, because near dc each stage's loss grows quadratically, $1 + (\omega/\omega_p)^2$, so the $N$ small losses add up as $N(\omega/\omega_p)^2$.

### Step 4 — The role of "non-interacting", and why cascades are still used

**Non-interacting.** $H = H_1^N$ holds only if connecting stage $k+1$ does not change the response of stage $k$ (e.g. each stage presents no load to the previous one, or any loading is already included in $\omega_p$). Otherwise the input capacitance of one stage loads the previous output, the poles move, and the formula does not apply directly.

**Why cascade at all.** For a fixed gain–bandwidth product per stage, $A_0\omega_p = \omega_{GBW}$, and a total gain $G = A_0^N = 1000$:

- $N = 1$: $A_0 = 1000$, $\omega_p = \omega_{GBW}/1000$, bandwidth $0.001\,\omega_{GBW}$;
- $N = 2$: $A_0 = 31.6$, $\omega_p = 0.0316\,\omega_{GBW}$, bandwidth $0.644\times0.0316 = 0.020\,\omega_{GBW}$;
- $N = 3$: $A_0 = 10$, $\omega_p = 0.1\,\omega_{GBW}$, bandwidth $0.510\times0.1 = 0.051\,\omega_{GBW}$.

Three modest stages give about 50 times the bandwidth of a single stage with the same total gain, even after the $\sqrt{2^{1/N} - 1}$ shrinkage.

### Result

For $N$ identical non-interacting stages,

$$|H(j\omega)| = \frac{A_0^N}{\left[1 + (\omega/\omega_p)^2\right]^{N/2}},$$

and setting $|H(j\omega_{-3dB})| = A_0^N/\sqrt2$ gives $1 + (\omega_{-3dB}/\omega_p)^2 = 2^{1/N}$, i.e.

$$\omega_{-3dB} = \sqrt{\sqrt[N]{2} - 1}\;\omega_p .$$

Examples: $N = 1$: $\omega_p$; $N = 2$: $0.644\,\omega_p$; $N = 3$: $0.51\,\omega_p$; for large $N$, $\omega_{-3dB}\approx\omega_p\sqrt{\ln2/N}\approx0.83\,\omega_p/\sqrt N$.

**Common mistake.** Claiming the bandwidth is exactly $\omega_p/N$ or $\omega_p/\sqrt N$. The exact result is $\sqrt{2^{1/N} - 1}\,\omega_p$; $1/\sqrt N$ is only its large-$N$ trend, with coefficient $\sqrt{\ln2}\approx0.83$.

**Common mistake.** Setting the magnitude to half the dc gain instead of $1/\sqrt2$ of it. −3 dB is the half-power point; using 1/2 (−6 dB) gives $\sqrt{4^{1/N} - 1}\,\omega_p$, which is wrong.

**Common mistake.** Defining the bandwidth by the phase, e.g. where the total phase reaches $-45^\circ$, which gives $\omega_p\tan(45^\circ/N)$. The −3-dB bandwidth is defined by the magnitude alone.
