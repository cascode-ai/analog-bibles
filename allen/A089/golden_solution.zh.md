$i_O(\min) \approx 13.9\ \mu$A，$i_O(\max) \approx 28.5\ \mu$A（标称值 20 µA）。

- 标称值：$V_{GS} = 0.7 + \sqrt{2\times20\ \mu/(110\ \mu\times3)} = 1.048$ V。
- 最大值：M1 取弱、M2 取强。M1 取 $K'$ −5%、$W$ −5%、$L$ +5%、$V_T$ +5 mV：$\beta_1 = 110\times0.95\times3\times0.95/1.05 = 283.6\ \mu\mathrm{A/V^2}$，因此 $V_{GS} = 0.705 + \sqrt{40/283.6} = 1.0806$ V。M2 取 $K'$ +5%、$W$ +5%、$L$ −5%、$V_T$ −5 mV：$\beta_2 = 383.0\ \mu\mathrm{A/V^2}$，$i_O = \tfrac12\times383.0\ \mu\times(1.0806 - 0.695)^2 = 28.5\ \mu$A。
- 最小值：情况相反。$\beta_1 = 383.0$：$V_{GS} = 0.695 + \sqrt{40/383.0} = 1.0182$ V；$\beta_2 = 283.6$，$V_T = 0.705$ V：$i_O = \tfrac12\times283.6\ \mu\times(0.3132)^2 = 13.9\ \mu$A。
- 一阶检验：$i_O/i_I \approx 1 + \Delta K'/K' + \Delta(W/L)/(W/L) - 2\Delta V_T/(V_{GS} - V_T)$ ≈ 1 ± (0.10 + 0.20 + 0.057)，即 ±36%，与精确结果 −30%/+42% 相符。
- 若两管的参数变化相同（完全相关），则镜像比不变，$i_O$ 保持 20 µA。
