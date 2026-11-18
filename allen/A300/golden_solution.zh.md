一种设计：$W_1 = W_2 = 90\ \mu$m；$W_3 = W_4 = W_6 = W_7 = W_8 = 40\ \mu$m；$W_9 = W_{10} = W_{11} = 18\ \mu$m（留裕量可取 19 µm）；$W_5 = 11\ \mu$m；$I_5 = 250\ \mu$A；$P_{diss} = 2.5$ mW；$A_{vd} \approx 1.7\times10^4$ V/V；$V_{BP} = 3.3$ V；$V_{BN} = 1.7$ V。

- 拓扑：二极管负载 M3、M4 分别与 M8、M6 组成 1:1 电流镜；M8 的电流经 M9/M10 反转方向；M7 和 M11 是输出共源共栅（cascode）管。增益 $A_{vd} = g_{m1}R_{out}$（电流镜增益为 1）。
- 压摆率：输入过驱动时，$I_5$ 全部流入一个二极管连接管并以 1:1 镜像到输出端，因此 $I_5 = SR\cdot C_L = 10\ \mathrm{V/\mu s}\times25$ pF = 250 µA；静态时每条支路 125 µA。
- $V_{out}(\max) = 4$ V：$V_{SD6}(\mathrm{sat}) + V_{SD7}(\mathrm{sat}) = 1$ V，在最大（压摆）电流 250 µA 下各为 0.5 V：$S = 2(250)/(50\cdot0.25) = 40$ → $W_6 = W_7 = 40$ µm；为构成 1:1 电流镜，$W_3 = W_4 = W_8 = 40$ µm。
- $V_{out}(\min) = 1$ V：$V_{DS10}(\mathrm{sat}) + V_{DS11}(\mathrm{sat}) = 1$ V：$S = 2(250)/(110\cdot0.25) = 18.2$ → M9、M10、M11 取 18–19 µm。
- $GB = g_{m1}/C_L$：$g_{m1} = 2\pi(10\ \mathrm{MHz})(25\ \mathrm{pF}) = 1.571$ mS，电流为 125 µA → $S_1 = g_{m1}^2/(2K'_N\cdot125\,\mu) = 89.7$ → 90 µm。
- $V_{ic}(\max) = V_{DD} - V_{SG3} + V_{TN} = 5 - (0.7 + \sqrt{2\cdot125/(50\cdot40)}) + 0.7 = 4.65$ V ≥ 4 V ✓。
- $V_{ic}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = V_{DS5}(\mathrm{sat}) + 0.7 + 0.159 = 1.5$ V → $V_{DS5}(\mathrm{sat}) = 0.64$ V → $S_5 = 2(250)/(110\cdot0.641^2) = 11.1$ → 11 µm。
- 偏置电压：$V_{BP} = V_{DD} - V_{SD6}(\mathrm{sat}) - V_{SG7} = 5 - 0.5 - 1.2 = 3.3$ V；$V_{BN} = V_{DS10}(\mathrm{sat}) + V_{GS11} = 0.5 + 1.2 = 1.7$ V。
- 功耗：$5\ \mathrm{V}\times(I_5 + I_9 + I_{10}) = 5\times(250+125+125)\ \mu\mathrm{A} = 2.5$ mW。
- 125 µA 下的增益：$g_{m1} = 1.573$ mS；$R_{out} = (g_{m11}r_{ds11}r_{ds10})\,\|\,(g_{m7}r_{ds7}r_{ds6}) = (704\,\mu\cdot200\,\mathrm{k}\cdot200\,\mathrm{k} = 28.1\ \mathrm{M\Omega})\,\|\,(707\,\mu\cdot160\,\mathrm{k}\cdot160\,\mathrm{k} = 18.1\ \mathrm{M\Omega}) = 11.0$ MΩ → $A_{vd} \approx 1.73\times10^4$。
