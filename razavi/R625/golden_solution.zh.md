约 0.5 mV。
- 失调消除后，整体失调为 $V_{OS}/(1+A_v) \approx V_{OS}/A_v$（忽略 $C_{in}$ 和电荷注入）。
- 在电流不变的情况下把输入对管的 W 加倍：阈值失配（threshold mismatch）$\Delta V_{TH} \propto 1/\sqrt{WL}$ 减小 √2 倍，过驱动电压（overdrive voltage）也减小 √2 倍（负载失配项和 W/L 失配项都与它成正比），因此放大器本身的失调 $V_{OS}$ 减小 √2 倍。
- 增益 $A_v = g_m\times(\text{load})$ 增大为原来的 √2 倍，因为 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D} \propto \sqrt W$。
- 总体：$1\ \mathrm{mV}/(\sqrt2\cdot\sqrt2) = 0.5$ mV（$A_v$ 很大时）。
