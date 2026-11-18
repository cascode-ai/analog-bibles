$\overline{v_o^2}/\Delta f \approx 4.65\times10^{-19}$ V²/Hz（≈ 0.68 nV/√Hz）；100 kHz 内的总噪声 ≈ $4.65\times10^{-14}$ V²，即 ≈ 0.22 µV rms。

- 偏置：$I_D = (10-0.7)/20\text{ k} = 0.465$ mA，$r_d = kT/qI_D = 55.9\ \Omega$；该节点的阻抗为 $r_d \parallel 20\text{ k} = 55.8\ \Omega$。
- 注入该节点的噪声电流：二极管散粒噪声（shot noise）$2qI_D = 1.49\times10^{-22}$ A²/Hz，电阻热噪声（thermal noise）$4kT/20\text{ k} = 8.3\times10^{-25}$ A²/Hz（仅占总量的 0.6%）。
- $\overline{v_o^2}/\Delta f = (2qI_D + 4kT/R)(r_d\parallel R)^2 = 1.496\times10^{-22}\times(55.8)^2 = 4.65\times10^{-19}$ V²/Hz。（注意 $2qI_D r_d^2 = 2kT\,r_d$：二极管的噪声相当于电阻 $r_d$ 热噪声的一半。）
- 该噪声谱是白噪声，因此在 100 kHz 内：$4.65\times10^{-19}\times10^5 = 4.65\times10^{-14}$ V²，$v_o \approx 0.216\ \mu$V rms。
