一种可行的设计：$I_6 = I_7 = 750\ \mu$A，$I_5 = 100\ \mu$A；$(W/L)_6 = 120$，$(W/L)_7 = 55$，$(W/L)_3 = (W/L)_4 = 8$，$(W/L)_1 = (W/L)_2 = 15$，$(W/L)_5 = 20$（均为 $L = 1\ \mu$m）；$C_I \approx 0.3$ pF；预计 $t_p \approx 22$ ns。

- 极点要求：在小时间范围内两极点响应为 $v_{out} \approx A_v(0)V_{in}|p_1p_2|t^2/2$；它在 $t_p = 1/\sqrt{k|p_1p_2|}$ 时达到摆幅的一半。取相等极点（$m = 1$）且 $k = 10$：$|p_I| = |p_{II}| = 1/(t_p\sqrt{10}) = 1.265\times10^7$ rad/s。
- 输出级：$|p_{II}| = I_7(\lambda_N+\lambda_P)/C_{II}$ → $I_7 = 1.265\times10^7\cdot5\ \mathrm{pF}/0.09 = 703\ \mu$A → 取 750 µA。$V_{SD6}(\mathrm{sat}) = V_{DD}-V_{OH} = 0.5$ V：$(W/L)_6 = 2\cdot750/(50\cdot0.25) = 120$；$V_{DS7}(\mathrm{sat}) = V_{OL}-V_{SS} = 0.5$ V：$(W/L)_7 = 2\cdot750/(110\cdot0.25) = 54.5 \to 55$。
- 第一级：$|p_I| = (I_5/2)(0.09)/C_I$；相等极点要求 $I_5 = 2I_7C_I/C_{II}$。仅 $C_{gs6} = \tfrac23(120)(1)(2.47\ \mathrm{fF}) + 0.22(120)\ \mathrm{fF} = 224$ fF，因此需要假设 $C_I \approx 0.3$ pF（0.2 pF 太小）：$I_5 = 2\cdot750\cdot0.3/5 = 90\ \mu$A → 取 100 µA。
- $V_{SG3} = V_{DD}-V_{icm}^++V_{TN} = 1.2$ V：$(W/L)_3 = I_5/[K'_P(0.5)^2] = 100/12.5 = 8$。
- 增益 $A_v(0) = (V_{OH}-V_{OL})/V_{in}(\min) = 4000$；$g_{m6} = \sqrt{2\cdot50\cdot120\cdot750}\ \mu\mathrm{S} = 3.0$ mS；$g_{m1} = A_v(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})/g_{m6} = 4000\cdot4.5\ \mu\mathrm{S}\cdot67.5\ \mu\mathrm{S}/3\ \mathrm{mS} = 405\ \mu$S；$(W/L)_1 = g_{m1}^2/(K'_NI_5) = 405^2/(110\cdot100) = 14.9 \to 15$。
- 核验 $C_I$：$C_{gd2} \approx 3.3$ fF，$C_{gd4} \approx 1.8$ fF，$C_{gs6} \approx 224$ fF，$C_{bd2} \approx 48$ fF，$C_{bd4} \approx 21$ fF → ≈ 0.30 pF，与假设一致。
- 尾电流管：$V_{GS1} = 0.7+\sqrt{2\cdot50/(110\cdot15)} = 0.946$ V；$V_{DS5}(\mathrm{sat}) = V_{icm}^- - V_{GS1} - V_{SS} = 0.304$ V；$(W/L)_5 = 2\cdot100/(110\cdot0.304^2) = 19.7 \to 20$。
- 验证：$|p_I| = 4.5\ \mu\mathrm{S}/0.30\ \mathrm{pF} = 1.5\times10^7$，$|p_{II}| = 67.5\ \mu\mathrm{S}/5\ \mathrm{pF} = 1.35\times10^7$ rad/s → $t_p \approx 1/\sqrt{10\cdot1.5\times10^7\cdot1.35\times10^7} \approx 22$ ns < 25 ns；$A_v = (405/4.5)(3000/67.5) = 4000$。M5 和 M7 需要各自独立的偏置支路（$V_{GS}$ 不同）。
