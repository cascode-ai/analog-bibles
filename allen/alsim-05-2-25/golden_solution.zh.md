这是一道开放式设计题。下面给出一种可行的方案及其手工分析估算值，仿真结果应与之大致相符（LEVEL-1 模型：KP = 25u/10u，VTO = ±0.75，LAMBDA = 0.01/0.02，GAMMA = 0.8/0.4，PHI = 0.6，所有电容参数为零，TNOM = 27 °C）。

拓扑：NMOS 输入对 M1–M2（$W/L = 100$），尾电流沉 M5（$W/L = 20$），PMOS 电流镜负载（current-mirror load）M3–M4（$W/L = 50$）；输出端为一个二极管连接的 PMOS M6（$W/L \approx 2.3$，源极接 $V_{DD}$，栅极 = 漏极 = 输出）加一个 NMOS 电流沉 M7（$W/L = 10$），用来吸收 M6 的直流电流。
- 这样增益就是跨导之比，$A_v = g_{m1}/(g_{m6} + g_{ds2} + g_{ds4} + g_{ds6} + g_{ds7}) \approx \sqrt{K'_N(W/L)_1I_1/(K'_P(W/L)_6I_6)}$。由于 $K'_N$ 与 $K'_P$ 随温度的变化规律相同，增益几乎与温度无关；取 $(W/L)_1/(W/L)_6 \approx 40$–44 且 $I_6 = I_1$，可得约 10。
- 偏置：采用仅由 MOSFET 构成的基准，例如四个二极管连接的 PMOS（$W/L = 1$，阱接各自源极）与一个二极管连接的 NMOS M8（$W/L = 5$）串联跨接在 10 V 电源上，得到 $I_{REF} \approx 10.6\ \mu$A。M8 以 ×4 镜像到 M5（$I_{SS} \approx 43\ \mu$A），以 ×2 镜像到 M7（约 21 µA = $I_1$）。

27 °C 下的手工估算：
- $g_{m1} = \sqrt{2 \cdot 25\ \mu \cdot 100 \cdot 21.3\ \mu} \approx 326\ \mu$S，$g_{m6} \approx 31\ \mu$S。输出电导（output conductance）约 32.6 µS，因此 $A_v \approx 10.0$。
- 输出极点 $\approx 32.6\ \mu\mathrm{S}/(2\pi \cdot 1\ \mathrm{pF}) \approx 5.2$ MHz。电流镜节点（约 $g_{m3}/2\pi$·1 pF ≈ 23 MHz，并在其两倍频率处有一个零点）使其略有降低，因此 $f_{-3\,\mathrm{dB}} \approx 4.8$ MHz。
- $P_{diss} \approx 10\ \mathrm{V} \times (10.6 + 42.6 + 21.3)\ \mu\mathrm{A} \approx 0.75$ mW。
- $V_{IC}(\min) = -5 + V_{DS5}(\mathrm{sat}) + V_{GS1} \approx -5 + 0.41 + 1.07 \approx -3.5$ V（计入体效应，此时 $V_{T1} \approx 0.94$ V）。
- $V_{IC}(\max)$ 受 M2 限制：输出位于 $V_{DD} - V_{SG6} \approx 2.9$ V 附近，且在 $\gamma = 0.8$ 时 $V_{T2}$ 升至约 2.4 V，由此得到约 5.3 V。受电源范围限制，$V_{IC}(\max) \approx 5$ V，ICMR ≈ 8.5 V。

预期得分 ≈ 8.5（ICMR）+ 7–9（整个温度范围内增益在 10 的 ±0.1–0.3 以内）+ 4.5–5（带宽）+ 10（功耗）≈ 30–32。

温度：$K' \propto T^{-1.5}$，且 $V_T$ 随 T 升高而下降，因此在 0 到 55 °C 之间偏置电流、$g_m$ 和 $f_{-3\,\mathrm{dB}}$ 大约变化 ±5–10 %，而由跨导之比决定的增益变化不超过百分之几。
