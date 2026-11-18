一种可行的设计：无补偿两级比较器（n 沟道输入对管 M1–M2，p 沟道电流镜 M3–M4，尾电流管 M5，p 沟道输出管 M6，n 沟道电流沉 M7，偏置二极管 M8，参考电流 20 µA），所有 $L = 1\ \mu$m：
$(W/L)_1 = (W/L)_2 = 4$，$(W/L)_3 = (W/L)_4 = 2$，$(W/L)_5 = (W/L)_8 = 4$（$I_5 = 20\ \mu$A），$(W/L)_6 = 20$，$(W/L)_7 = 20$（$I_6 = I_7 = 100\ \mu$A）。

验证：
- 功耗：$3\ \mathrm{V}\times(20+20+100)\ \mu\mathrm{A} = 0.42$ mW < 2 mW。
- 增益：$g_{m1} = \sqrt{2\cdot110\cdot4\cdot10}\ \mu\mathrm{S} = 93.8\ \mu$S，$g_{ds2}+g_{ds4} = 10\ \mu\mathrm{A}(0.09) = 0.9\ \mu$S → 104；$g_{m6} = \sqrt{2\cdot50\cdot20\cdot100}\ \mu\mathrm{S} = 447\ \mu$S，$g_{ds6}+g_{ds7} = 9\ \mu$S → 49.7；$A_{v0} \approx 5200 > 2200$。（$V_{SG6} = V_{SG4} = 1.147$ V，因此电流镜是平衡的：$(W/L)_6/(W/L)_4 = 2I_6/I_5$。）
- ICMR：$V_{icm}(\max) = V_{DD}-V_{SG3}+V_{TN} = 3-1.147+0.7 = 2.55$ V ≥ 2.5 V；$V_{icm}(\min) = V_{DS5}(\mathrm{sat})+V_{GS1} = 0.30+0.91 = 1.21$ V ≤ 1.5 V。
- 输出摆幅：$V_{OL} \approx 0$ V（M6 截止）；$V_{OH} \approx 2.84$–2.94 V，取决于共模电平（M6 处于线性区，对抗 100 µA）——距任一电源轨都远在 1.5 V 以内。
- 延迟（压摆，后级负载在 1.5 V 处翻转）：第二级翻转点 $V_{TRP2} = 3-1.147 = 1.85$ V；$C_I \approx C_{gs6}+$ 漏极电容 ≈ 0.05–0.1 pF。输出上升：$t_{fo1} \approx 0.1\ \mathrm{pF}\times1.15\ \mathrm{V}/20\ \mu\mathrm{A} \approx 6$ ns，$t_{r,out} \approx 3\ \mathrm{pF}\times1.5\ \mathrm{V}/(\approx 0.35-0.1)\ \mathrm{mA} \approx 18$ ns；输出下降：$t_{ro1} \approx 4$ ns，$t_{f,out} = 3\ \mathrm{pF}\times1.5\ \mathrm{V}/100\ \mu\mathrm{A} = 45$ ns。平均值 ≈ 37 ns ≪ 1 µs。线性（小过驱动）响应：极点 ≈ $0.9\ \mu\mathrm{S}/0.1\ \mathrm{pF} = 9\times10^6$ 和 $9\ \mu\mathrm{S}/3\ \mathrm{pF} = 3\times10^6$ rad/s，10 倍过驱动时约为 60 ns，仍远低于 1 µs。
