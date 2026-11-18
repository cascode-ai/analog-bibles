$R_i \approx 14.6$ kΩ，$v_o/v_i \approx +137$（同相），$R_o = 10$ kΩ。

- 偏置：发射极位于 −0.7 V，因此 $I_{R_{\text{TAIL}}} = (15 - 0.7)/10\ \mathrm{k} = 1.43$ mA，平均分配：$I_E = 0.715$ mA，$I_C = 0.711$ mA。$g_m = 27.4$ mA/V，$r_\pi = 7.31$ kΩ。
- 输入电阻：$Q_1$ 是以 $R_{\text{TAIL}} \| r_{e2}$ 为负载的射极跟随器（emitter follower），其中 $r_{e2} = r_\pi/(\beta_0+1) = 36.4\ \Omega$：$R_i = r_{\pi1} + (\beta_0+1)(10\ \mathrm{k} \| 36.4\ \Omega) = 7.31\ \mathrm{k} + 7.28\ \mathrm{k} = 14.6$ kΩ（$\approx 2r_\pi$；也可等价地写成 $2(r_\pi \| R_{ic})$，其中 $R_{ic} = r_\pi + 2(\beta_0+1)R_{\text{TAIL}}$）。
- 增益：发射极节点跟随输入，$v_e/v_i = \dfrac{(\beta_0+1)/r_\pi}{2(\beta_0+1)/r_\pi + 1/R_{\text{TAIL}}} = 0.499$；$Q_2$（共基）给出 $i_{c2} = -g_m v_e$，因此 $v_o = g_m R_C v_e$：$v_o/v_i = 27.4\ \mathrm{mA/V} \times 10\ \mathrm{k} \times 0.499 = 136.6$（≈ $g_m R_C/2$，即差分对的单端输出，再减去一个极小的共模项）。
- 输出电阻：忽略 $r_o$，因此 $Q_2$ 的集电极为理想电流源，$R_o = R_C = 10$ kΩ。
