≈ 80 µV 均方根值（以 1/f 噪声为主）。

- $B_N = KF_N/(2C_{ox}K'_N) = 7.36\times10^{-22}$ V²·m²，$B_P = 2.02\times10^{-22}$ V²·m²。
- 1/f 噪声：$e_{n1}^2 = B_N/(fW_1L_1) = 7.36\times10^{-22}/(3\ \mu\mathrm{m}^2\cdot f) = 2.45\times10^{-10}/f$。负载项 $(g_{m3}/g_{m1})^2(e_{n3}^2/e_{n1}^2) = \dfrac{K'_PB_P}{K'_NB_N}\left(\dfrac{L_1}{L_3}\right)^2 = \dfrac{50\times2.02}{110\times7.36} = 0.125$ → $e_{eq}^2 = 2(2.45\times10^{-10})(1.125)/f = 5.52\times10^{-10}/f$ V²/Hz。
- 热噪声：$g_{m1} = \sqrt{2\cdot110\ \mu\cdot3\cdot15\ \mu} = 99.5$ µS，$g_{m3} = \sqrt{2\cdot50\ \mu\cdot15\cdot15\ \mu} = 150$ µS；$e_{eq}^2 = 2\,[8kT/(3g_{m1})](1 + g_{m3}/g_{m1}) = 2(1.11\times10^{-16})(2.51) = 5.56\times10^{-16}$ V²/Hz（23.6 nV/√Hz）；转折频率 ≈ 1 MHz，高于该频带。
- 均方值 rms² = $5.52\times10^{-10}\ln(10^5) + 5.56\times10^{-16}\times10^5 = 6.36\times10^{-9} + 5.6\times10^{-11} = 6.41\times10^{-9}$ V² → 80 µV（仅 1/f 噪声为 79.7 µV；若去掉 M3/M4 的 1/f 项则为 75.3 µV）。
