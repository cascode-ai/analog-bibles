[图 1] 所示共源级（common-source stage）的设计参数为 $W/L = 200\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$，$I = 1$ mA，$R_D = 2\ \mathrm{k\Omega}$（$V_{DD} = 3$ V）。它被用作 [图 2] 所示反馈系统的前向放大器（forward amplifier），$\beta = 0.2$（极性的安排使反馈为负反馈），系统的输入为峰值幅度 10 mV 的正弦信号。计算输出端的总谐波失真（THD）。

对于该环路中的前向放大器 $y = \alpha_1x + \alpha_2x^2$ 和输入 $V_m\cos\omega t$，输出二次谐波（second harmonic）与基波（fundamental）之比近似为 $\dfrac ba = \dfrac{\alpha_2V_m}{2\alpha_1}\cdot\dfrac{1}{(1+\beta\alpha_1)^2}$，这似乎表明，若开环增益（open-loop gain）$\alpha_1$ 增大而其他参数保持不变，谐波失真（harmonic distortion）会急剧下降。采用更宽的器件正是为了获得更高的开环增益：将你的结果与采用 $W/L = 50\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$ 的同一设计进行比较，并解释结果。

采用平方律（square law）模型，$\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$，晶体管保持在饱和区（saturation region），并忽略沟道长度调制（channel-length modulation）。
