(a) $\overline{v_{iB}^2}/\Delta f \approx 4kT/(2g_{m1}) = 4kT(13\ \Omega) = 2.2\times10^{-19}$ V²/Hz（略有上升，在 150 MHz 时 ≈ $4kT(15\ \Omega)$）。$\overline{i_{iB}^2}/\Delta f \approx 2q(I_{B1} + I_{B2}) + \dfrac{4kT}{5\text{ k}} + 2q(I_{C1} + I_{C2})\left(\dfrac{1}{\beta_0^2} + \dfrac{f^2}{f_T^2}\right) \approx 9.8\times10^{-24} + 6.4\times10^{-22}\left(\dfrac{f}{400\text{ MHz}}\right)^2$ A²/Hz（150 MHz 时 ≈ $1.0$–$1.1\times10^{-22}$）。

(b) $i_S \approx 0.25$–$0.26\ \mu$A rms。

- (a) 共基组态的噪声源与该晶体管共射组态的噪声源相同；由于电流增益 ≈ 1，$Q_1$ 集电极处的所有噪声电流（5-kΩ 负载、$Q_2$ 的输入噪声电流）都原样折合到发射极（严格说要除以 $|\alpha|^2$，在 150 MHz 时相差百分之几）。在 $f_T/\beta_0 = 4$ MHz 以上，每个晶体管折合的集电极噪声按 $2qI_C f^2/f_T^2$ 上升。
- (b) 0–150 MHz 内的总等效输入噪声电流（含 $4kT/R_S$）：白噪声部分 $(2q\cdot20\ \mu\text{A} + 2\times3.32\times10^{-24} + 6.4\times10^{-26})\times1.5\times10^8 \approx 2.0\times10^{-15}$ A²；上升部分 $2q\cdot2\text{ mA}\cdot\dfrac{B^3}{3f_T^2} = 6.4\times10^{-22}\times7.0\times10^6 = 4.5\times10^{-15}$ A²；总计 ≈ $6.5\times10^{-15}$ A² → 80 nA rms（完整的小信号计算给出 83 nA）。
- SNR = 10 dB：$i_S = \sqrt{10}\times80$–$83$ nA ≈ 0.25–0.26 µA rms。
