$Y(z) = z^{-1}X(z) + (1 + z^{-2})Q(z)$；$N(f) = \dfrac{2\Delta}{\sqrt{6f_s}}\left|\cos\dfrac{2\pi f}{f_s}\right|$；$n_o = \dfrac{\pi\Delta}{6M^{3/2}}$；对于 100 MHz 下的 12 位，$M \approx 381$，$f_B \approx 131$ kHz。

- 谐振器（resonator）：内环给出 $V = z^{-1}(U - z^{-1}V)$，因此 $V = \dfrac{z^{-1}}{1 + z^{-2}}U$，其中 $U = X + z^{-1}Y$，$Y = V + Q$。
- 因此 $Y\left(1 - \dfrac{z^{-2}}{1 + z^{-2}}\right) = \dfrac{z^{-1}X}{1 + z^{-2}} + Q$，故 $Y = z^{-1}X + (1 + z^{-2})Q$：STF $= z^{-1}$，NTF $= 1 + z^{-2}$，零点位于 $f_s/4 = f_o$。
- $|N(f)| = \dfrac{\Delta}{\sqrt{6f_s}}|1 + e^{-j4\pi f/f_s}| = \dfrac{2\Delta}{\sqrt{6f_s}}|\cos(2\pi f/f_s)|$，在 $f_o$ 附近 $\approx \dfrac{2\Delta}{\sqrt{6f_s}}\cdot\dfrac{2\pi|f - f_o|}{f_s}$。
- $n_o^2 = \int_{f_1}^{f_2}|N|^2df \approx \dfrac{2\pi^2\Delta^2}{9}\left(\dfrac{f_B}{f_s}\right)^3 = \dfrac{\pi^2\Delta^2}{36M^3}$。
- 12 位：$M^{1.5} \ge \dfrac{\pi}{6}2^{12}\sqrt{12} = 7.43\times10^3$，因此 $M \ge 381$，$f_B = f_s/(2M) \le 131$ kHz。
