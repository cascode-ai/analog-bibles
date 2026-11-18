$N(f) = \dfrac{\Delta}{\sqrt{6f_s}}\left|1 + e^{-j4\pi f/f_s}\right| = \dfrac{2\Delta}{\sqrt{6f_s}}\left|\cos\dfrac{2\pi f}{f_s}\right|$；$n_o^2 \approx \dfrac{\pi^2\Delta^2}{36M^3}$，即 $n_o = \dfrac{\pi\Delta}{6M^{3/2}}$；对于 $f_s$ = 10 MHz 下的 14 位，$M \approx 960$，$f_B \approx 5.2$ kHz。

- 环路：$Y = z^{-2}\left(X + \dfrac{Y}{1 + z^{-2}}\right) + Q$，因此 $Y\dfrac{1}{1 + z^{-2}} = z^{-2}X + Q$，$Y = (1 + z^{-2})(z^{-2}X + Q)$。NTF $= 1 + z^{-2}$，零点位于 $z = \pm j$，即位于 $f_s/4 = f_o$。
- $|\mathrm{NTF}| = |1 + e^{-j2\theta}| = 2|\cos\theta|$，$\theta = 2\pi f/f_s$。在 $f_o$ 附近，令 $f = f_o + u$：$|\cos\theta| = |\sin(2\pi u/f_s)| \approx 2\pi|u|/f_s$。
- $n_o^2 = \int_{f_1}^{f_2}|N|^2df \approx \dfrac{4\Delta^2}{6f_s}\int_{-f_B/2}^{f_B/2}\left(\dfrac{2\pi u}{f_s}\right)^2du = \dfrac{2\pi^2\Delta^2}{9}\left(\dfrac{f_B}{f_s}\right)^3 = \dfrac{\pi^2\Delta^2}{36M^3}$（与具有相同 $M$ 的一阶低通调制器相同）。
- 14 位：由 $\dfrac{\pi\Delta}{6M^{1.5}} \le \dfrac{\Delta}{2^{14}\sqrt{12}}$ 得 $M^{1.5} \ge \dfrac{\pi}{6}2^{14}\sqrt{12} = 2.97\times10^4$，因此 $M \ge 960$，$f_B = f_s/(2M) \le 5.2$ kHz。
