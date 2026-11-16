# Golden Solution - A556

## Reference answer

$N(f) = \dfrac{\Delta}{\sqrt{6f_s}}\left|1 + e^{-j4\pi f/f_s}\right| = \dfrac{2\Delta}{\sqrt{6f_s}}\left|\cos\dfrac{2\pi f}{f_s}\right|$; $n_o^2 \approx \dfrac{\pi^2\Delta^2}{36M^3}$, i.e. $n_o = \dfrac{\pi\Delta}{6M^{3/2}}$; for 14 bits at $f_s$ = 10 MHz, $M \approx 960$ and $f_B \approx 5.2$ kHz.

- Loop: $Y = z^{-2}\left(X + \dfrac{Y}{1 + z^{-2}}\right) + Q$, so $Y\dfrac{1}{1 + z^{-2}} = z^{-2}X + Q$ and $Y = (1 + z^{-2})(z^{-2}X + Q)$. NTF $= 1 + z^{-2}$, with zeros at $z = \pm j$, i.e. at $f_s/4 = f_o$.
- $|\mathrm{NTF}| = |1 + e^{-j2\theta}| = 2|\cos\theta|$, $\theta = 2\pi f/f_s$. Near $f_o$, with $f = f_o + u$: $|\cos\theta| = |\sin(2\pi u/f_s)| \approx 2\pi|u|/f_s$.
- $n_o^2 = \int_{f_1}^{f_2}|N|^2df \approx \dfrac{4\Delta^2}{6f_s}\int_{-f_B/2}^{f_B/2}\left(\dfrac{2\pi u}{f_s}\right)^2du = \dfrac{2\pi^2\Delta^2}{9}\left(\dfrac{f_B}{f_s}\right)^3 = \dfrac{\pi^2\Delta^2}{36M^3}$ (the same as a first-order low-pass modulator with the same $M$).
- 14 bits: $\dfrac{\pi\Delta}{6M^{1.5}} \le \dfrac{\Delta}{2^{14}\sqrt{12}}$ gives $M^{1.5} \ge \dfrac{\pi}{6}2^{14}\sqrt{12} = 2.97\times10^4$, so $M \ge 960$ and $f_B = f_s/(2M) \le 5.2$ kHz.

## Grading notes

+2: NTF = $1 + z^{-2}$, $|N(f)| = (2\Delta/\sqrt{6f_s})|\cos(2\pi f/f_s)|$, $n_o^2 ≈ \pi^2\Delta^2/(36M^3)$ (any equivalent form, e.g. $(2\pi^2/9)\Delta^2(f_B/f_s)^3$), and $f_B$ ≈ 5.2 kHz (±5 %). +1: correct NTF and $n_o$ expression with a numerical slip in $f_B$ (within ±15 %), or correct $f_B$ with the $N(f)$ expression missing. 0: correct NTF and integral but a different resolution criterion than stated (rms ≤ Δ/2^14 gives ≈ 11.9 kHz), reasoning shown. −2 (asserted as fact): NTF with zeros at dc (low-pass shaping) for this circuit, integration of $|N|$ instead of $|N|^2$, or a bandwidth off by more than a factor of 3.
