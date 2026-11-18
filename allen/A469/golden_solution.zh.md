$R_9 = 16R$，$R_{10} = R$，此时 $v_{out} = V_{REF}\sum_{i=0}^{7} b_i/2^{i+1}$。

推导：
- 左上方的反相求和器（输入 $b_4$–$b_7$ 经 $R_5$–$R_8$ 接 $V_{REF}$，反馈电阻 R）：$V_A = -V_{REF}\left(\frac{b_4}{2} + \frac{b_5}{4} + \frac{b_6}{8} + \frac{b_7}{16}\right)$。
- 下方的反相放大器（输入电阻 $R_{10}$ 接 $V_{REF}$，反馈电阻 R）：$V_B = -\frac{R}{R_{10}}V_{REF}$；它驱动 $b_0$–$b_3$。
- 输出求和器（反馈电阻 R）：$v_{out} = -R\left[\frac{V_A}{R_9} + V_B\left(\frac{b_0}{2R} + \frac{b_1}{4R} + \frac{b_2}{8R} + \frac{b_3}{16R}\right)\right] = \frac{R}{R_{10}}V_{REF}\left(\frac{b_0}{2} + \cdots + \frac{b_3}{16}\right) + \frac{R}{R_9}V_{REF}\left(\frac{b_4}{2} + \cdots + \frac{b_7}{16}\right)$。
- 理想 8 位 DAC 要求低四位的权重为高四位的 1/16，即 $R/R_9 = \frac{1}{16}R/R_{10}$，亦即 $R_9 = 16R_{10}$；再取通常的满量程 $v_{out} = V_{REF}\sum b_i/2^{i+1}$，得 $R/R_{10} = 1$，$R/R_9 = 1/16$。
