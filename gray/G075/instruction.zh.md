为设计一个具有以下两个特性的 n 沟道源极耦合对（source-coupled pair），求所需的尾偏置电流和器件尺寸。第一，差模输入电压为零时的小信号跨导（transconductance）$d(I_{d1} - I_{d2})/dV_{id}$（在 $V_{id} = 0$ 处）应为 1.0 mA/V。第二，0.2 V 的差模输入电压应使差模输出电流 $I_{d1} - I_{d2}$ 达到其最大值的 85%。采用 1 µm 的版图沟道长度。忽略沟道长度调制（channel-length modulation）和体效应（body effect），并采用平方律 $I_D = \frac{k'}{2}\frac{W}{L_{\text{eff}}}(V_{GS} - V_t)^2$。

工艺参数：$k'_n = \mu_n C_{ox} = 194\ \mu\mathrm{A/V^2}$（$\mu_n = 450$ cm²/V·s，$t_{ox} = 8$ nm），$V_t = 0.6$ V，横向扩散 $L_d = 0.09\ \mu$m，$X_d = 0$，故 $L_{\text{eff}} = L_{\text{drwn}} - 2L_d - X_d$。
