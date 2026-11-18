$\Delta V_{out}(t) = \dfrac{g_{m1}}{g_{m3}}\Delta V_{in}\left(e^{t/\tau_L}-1\right)$，其中 $\tau_L = C/g_{m3}$；$t_p = \tau_L\ln 6 \approx 17.9$ ns。
- 对差模半边电路列 KCL（忽略输出电导）：$sC\,\Delta V_{out} = g_{m3}\Delta V_{out} + g_{m1}\Delta V_{in}$，因此 $\Delta V_{out}(s) = \dfrac{g_{m1}\Delta V_{in}(s)}{sC-g_{m3}}$。
- 阶跃输入 $\Delta V_{in}/s$：$\Delta V_{out}(s) = \dfrac{g_{m1}}{g_{m3}}\Delta V_{in}\left[\dfrac{1}{s-g_{m3}/C}-\dfrac1s\right]$ → $\Delta V_{out}(t) = \dfrac{g_{m1}}{g_{m3}}\Delta V_{in}(e^{g_{m3}t/C}-1)$。
- 数值：$\tau_L = 1\ \mathrm{pF}/100\ \mu\mathrm{S} = 10$ ns，$g_{m1}/g_{m3} = 10$。令 $10\times0.01(V_{OH}-V_{OL})(e^{t/\tau_L}-1) = 0.5(V_{OH}-V_{OL})$：$e^{t/\tau_L} = 6$，$t_p = 10\ \mathrm{ns}\times\ln 6 = 17.9$ ns。
