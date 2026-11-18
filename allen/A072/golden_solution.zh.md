$W/L \approx 2.64$（例如 $W = 2.64\ \mu$m，$L = 1\ \mu$m）。

- 该响应为单极点响应：在 20 MHz 转折频率（corner frequency）之前为 0 dB，此后以 −20 dB/十倍频程（−6 dB/倍频程）下降。电路是一个 RC 低通网络，$v_{out}/v_{in} = 1/(1 + s r_{ON} C)$。
- 所需 $r_{ON} = 1/(2\pi \times 20\ \mathrm{MHz} \times 2\ \mathrm{pF}) = 3.98\ \mathrm{k\Omega}$。
- 偏置：沟道两端均为 3 V（$v_{DS} = 0$），$V_{GS} = 2$ V，$V_{SB} = 3$ V，$V_T = 0.7 + 0.4(\sqrt{3.7} - \sqrt{0.7}) = 1.135$ V，因此 $V_{GS} - V_T = 0.865$ V。
- $r_{ON} = 1/[K'(W/L)(V_{GS} - V_T)]$ → $W/L = 1/(110\ \mu\mathrm{A/V^2} \times 0.865\ \mathrm{V} \times 3979\ \Omega) = 2.64$。
