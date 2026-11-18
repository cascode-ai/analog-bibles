$v_o/v_i \approx -183$（视细节不同为 −180 到 −185）。加入速度饱和负反馈（$R_{SX1} = 11.1\ \Omega$，$R_{SX2} = 167\ \Omega$）后：$v_o/v_i \approx -145$，约低 20%。

- 偏置支路：从 5 V 经 $10\ \mathrm{k\Omega}$ 流入二极管连接（diode-connected）的 $Q_2$ 和 $M_2$：$I \approx 0.325$ mA，$V_{BE2} \approx 0.75$ V，$V_{GS,M2} = 0.6 + \sqrt{2I/(200\ \mu \times 20)} \approx 1.00$ V，因此 $Q_1$ 的基极电位为 $V_X \approx 1.75$ V。
- 自洽的工作点（$V_{G1} = V_O$）：$V_O \approx 0.98$ V，$I_{D1} \approx 4.3$ mA（≈ 4.0 mA 来自 $R_{L1}$，加上 $I_{E1}$），$I_{C1} \approx 0.31$ mA，$V_{C1} \approx 1.76$ V（$Q_1$ 恰好处于饱和边缘，$V_{CB} \approx 0$），$I_{C3} \approx 0.97$ mA。
- 小信号：$g_{m1} = \sqrt{2(200\ \mu)(300)(4.32\ \mathrm{m})} = 22.8$ mA/V。$M_1$ 的漏极电流在 $R_{L1} = 1$ kΩ 与 $Q_1$ 的发射极（$r_{e1} \approx 82$–88 Ω）之间分配：约 0.92 的部分进入 $Q_1$，其中 $\alpha \approx 0.99$ 到达 $Q_1$ 的集电极。$Q_1$ 集电极处的负载：$R_{L2} \| R_{i3} = 10\ \mathrm{k} \| 100\ \mathrm{k} = 9.1$ kΩ，其中 $R_{i3} = r_{\pi3} + 101(1\ \mathrm{k}\|30\ \mathrm{k}) \approx 100$ kΩ。射极跟随器（emitter follower）$Q_3$：增益 $101 \times 968/100.4\ \mathrm{k} = 0.973$。
- $v_o/v_i \approx -22.8\ \mathrm{m} \times 0.92 \times 0.99 \times 9.1\ \mathrm{k} \times 0.973 \approx -183$。（输入为理想电压源时，30 kΩ 电阻只对输出端构成负载。）
- 速度饱和：$R_{SX1} = 1/(1.5\times10^6 \times 200\ \mu \times 300\ \mu) = 11.1\ \Omega$ 使 $M_1$ 的有效跨导降为 $g_{m1}/(1 + g_{m1}R_{SX1}) \approx 18$ mA/V；$R_{SX2} = 167\ \Omega$ 使 $V_{GS,M2}$ 升高约 50 mV，偏置略有偏移。增益降至 ≈ −145。
