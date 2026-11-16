# Golden Solution - A541

## Reference answer

$k = 1$: $|N(f)| = \dfrac{2\Delta}{\sqrt{6f_s}}\sin\dfrac{\pi f}{f_s}$, and $f_B \approx 33$ kHz (oversampling ratio $M = f_s/2f_B \approx 151$).
$k = 0.5$: $|N(f)| = \dfrac{\Delta}{\sqrt{6f_s}}\cdot\dfrac{2\sin(\pi f/f_s)}{\sqrt{1.25 - \cos(2\pi f/f_s)}}$, and $f_B \approx 21$ kHz ($M \approx 240$).

Derivation:
- $V_{out} = Q + \dfrac{k}{z-1}(V_{in} - V_{out})$, so $V_{out} = \dfrac{k}{z-1+k}V_{in} + \dfrac{z-1}{z-1+k}Q$, and $\mathrm{NTF} = \dfrac{z-1}{z-1+k}$.
- $k = 1$: NTF $= 1 - z^{-1}$ (STF $= z^{-1}$), $|\mathrm{NTF}| = 2\sin(\pi f/f_s)$. In-band noise: $n_0^2 = \dfrac{\Delta^2}{12}\dfrac{2}{f_s}\int_0^{f_B}4\sin^2\dfrac{\pi f}{f_s}df \approx \dfrac{\Delta^2}{12}\dfrac{\pi^2}{3}\left(\dfrac{2f_B}{f_s}\right)^3$.
- Requirement $n_0^2 \le \Delta^2/(12\cdot 2^{20})$: $(2f_B/f_s)^3 \le 3/(\pi^2 2^{20}) = 2.9\times10^{-7}$, so $2f_B/f_s \le 6.62\times10^{-3}$ and $f_B \le 33.1$ kHz.
- $k = 0.5$: NTF $= (z-1)/(z-0.5)$, $|\mathrm{NTF}|^2 = \dfrac{2(1-\cos\theta)}{1.25-\cos\theta}$ with $\theta = 2\pi f/f_s$. At low frequency $|\mathrm{NTF}| \approx 4\pi f/f_s$, twice the $k = 1$ value, so the in-band noise power is 4 times larger and $f_B$ shrinks by $4^{1/3} = 1.59$: $f_B \approx 20.8$ kHz. (The STF $0.5/(z - 0.5)$ is unity at dc. At $f_s/2$, $|\mathrm{NTF}|$ is 4/3 instead of 2.)

## Grading notes

+2: correct NTFs ($1 - z^{-1}$ for $k = 1$, $(z-1)/(z-0.5)$ for $k = 0.5$), output noise magnitudes as above (any equivalent form), and $f_B$ ≈ 33 kHz and ≈ 21 kHz (±5 %), with the k = 0.5 case shown to have 4× the low-frequency noise power. +1: both NTFs and the k = 1 bandwidth right, k = 0.5 bandwidth off through an approximation slip (within ±15 %), or both bandwidths right with the noise-magnitude expression for k = 0.5 missing. 0: correct NTFs and noise spectra but bandwidths from a different, stated criterion (e.g., rms noise ≤ Δ/2^10 gives ≈ 76 kHz and ≈ 48 kHz) contrary to the one given. −2 (asserted as fact): NTF taken as $1/(1 + k/(z-1))$ evaluated incorrectly so that k = 0.5 is claimed to reduce the noise, bandwidths in the MHz range (≈ fs/7 or more), or the noise treated as unshaped.
