# Golden Solution - A557

## Reference answer

$Y(z) = z^{-1}X(z) + (1 + z^{-2})Q(z)$; $N(f) = \dfrac{2\Delta}{\sqrt{6f_s}}\left|\cos\dfrac{2\pi f}{f_s}\right|$; $n_o = \dfrac{\pi\Delta}{6M^{3/2}}$; for 12 bits at 100 MHz, $M \approx 381$ and $f_B \approx 131$ kHz.

- Resonator: the inner loop gives $V = z^{-1}(U - z^{-1}V)$, so $V = \dfrac{z^{-1}}{1 + z^{-2}}U$, with $U = X + z^{-1}Y$ and $Y = V + Q$.
- Hence $Y\left(1 - \dfrac{z^{-2}}{1 + z^{-2}}\right) = \dfrac{z^{-1}X}{1 + z^{-2}} + Q$, so $Y = z^{-1}X + (1 + z^{-2})Q$: STF $= z^{-1}$, NTF $= 1 + z^{-2}$ with zeros at $f_s/4 = f_o$.
- $|N(f)| = \dfrac{\Delta}{\sqrt{6f_s}}|1 + e^{-j4\pi f/f_s}| = \dfrac{2\Delta}{\sqrt{6f_s}}|\cos(2\pi f/f_s)|$, which near $f_o$ is $\approx \dfrac{2\Delta}{\sqrt{6f_s}}\cdot\dfrac{2\pi|f - f_o|}{f_s}$.
- $n_o^2 = \int_{f_1}^{f_2}|N|^2df \approx \dfrac{2\pi^2\Delta^2}{9}\left(\dfrac{f_B}{f_s}\right)^3 = \dfrac{\pi^2\Delta^2}{36M^3}$.
- 12 bits: $M^{1.5} \ge \dfrac{\pi}{6}2^{12}\sqrt{12} = 7.43\times10^3$, so $M \ge 381$ and $f_B = f_s/(2M) \le 131$ kHz.

## Grading notes

+2: $Y = z^{-1}X + (1 + z^{-2})Q$, $|N(f)|$ as above, $n_o = \pi\Delta/(6M^{1.5})$ (or equivalent), and $f_B$ ≈ 131 kHz (±5 %). +1: correct transfer functions and $n_o$ with a numerical slip in $f_B$ (within ±15 %). 0: correct analysis but a different resolution criterion than stated (rms ≤ Δ/2^12 gives ≈ 301 kHz), reasoning shown. −2 (asserted as fact): low-pass (dc-zero) noise shaping claimed for this circuit, a wrong NTF such as $1 - z^{-2}$ or $1 + z^{-1}$, or a bandwidth off by more than a factor of 3.
