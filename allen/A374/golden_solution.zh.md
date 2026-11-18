$V_{OH} \approx 2.43$ V，$V_{OL} = V_{SS} = -2.5$ V，$A_v(0) \approx 3300$ V/V，$V_{in}(\min) \approx 1.5$ mV，$p_1 = -6.75\times10^6$ rad/s（1.07 MHz），$p_2 = -4.21\times10^6$ rad/s（0.67 MHz）。

- $V_{OH}$：M6 处于线性区，$V_{SG6} = 2.5$ V，M7 吸收 $I_7 = 234\ \mu$A：$V_{OH} = V_{DD} - (V_{DD}-V_{G6}-|V_{TP}|)\left[1-\sqrt{1-\dfrac{2I_7}{\beta_6(V_{DD}-V_{G6}-|V_{TP}|)^2}}\right]$，其中 $\beta_6 = 50\times38 = 1900\ \mu\mathrm{A/V^2}$：$2.5 - 1.8\,[1-\sqrt{1-0.0760}] = 2.5 - 0.070 = 2.43$ V。
- $V_{OL}$：M6 截止，M7 将输出拉到 $V_{SS} = -2.5$ V。
- 增益：$g_{m1} = \sqrt{2\cdot110\cdot3\cdot15}\ \mu\mathrm{S} = 99.5\ \mu$S，$g_{ds2}+g_{ds4} = 15\ \mu\mathrm{A}(0.04+0.05) = 1.35\ \mu$S → 第一级 73.7；$g_{m6} = \sqrt{2\cdot50\cdot38\cdot234}\ \mu\mathrm{S} = 943\ \mu$S，$g_{ds6}+g_{ds7} = 234\ \mu\mathrm{A}(0.09) = 21.1\ \mu$S → 第二级 44.8；$A_v(0) \approx 3300$。
- $V_{in}(\min) = (2.43+2.5)/3300 \approx 1.49$ mV。
- $p_1 = -(g_{ds2}+g_{ds4})/C_I = -1.35\ \mu\mathrm{S}/0.2\ \mathrm{pF} = -6.75\times10^6$ rad/s；$p_2 = -(g_{ds6}+g_{ds7})/C_{II} = -21.06\ \mu\mathrm{S}/5\ \mathrm{pF} = -4.21\times10^6$ rad/s。
