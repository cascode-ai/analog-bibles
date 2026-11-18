$t_p = 0.5\ \mu$s（500 ns）；该响应受压摆率限制。
- 分辨率 $V_{in}(\min) = 1\ \mathrm{V}/10^4 = 0.1$ mV，因此 $k = 10\ \mathrm{mV}/0.1\ \mathrm{mV} = 100$。
- 线性（单极点）估算：$t_p = \tau_c\ln\dfrac{2k}{2k-1} = 10\ \mu\mathrm{s}\times\ln(200/199) = 50.1$ ns。
- 但线性响应的起始斜率为 $A_v(0)V_{in}\,\omega_c = 100\ \mathrm{V}\times10^5\ \mathrm{s^{-1}} = 10$ V/µs > SR = 1 V/µs，因此输出发生压摆：$t_p = \dfrac{V_{OH}-V_{OL}}{2\,SR} = \dfrac{1\ \mathrm{V}}{2\times1\ \mathrm{V/\mu s}} = 0.5\ \mu$s。应取较大的（受压摆限制的）值。
