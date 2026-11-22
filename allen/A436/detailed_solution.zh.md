# 详细步骤 - A436

先找出 DAC 可能需要完成的最大输出阶跃，再要求受压摆率限制的运放在允许时间内走完这一阶跃。

### 第 1 步 — 给定码字的输出电压

反相输入端为虚地（virtual ground），被选中的电流沉的电流全部流过反馈电阻 $R$，输出电压升高 $R$ 乘以该电流：

$$
v_{OUT}=R\sum_{i=0}^{7}b_i\,\frac{I}{2^{i}}=RI\sum_{i=0}^{7}\frac{b_i}{2^{i}} .
$$

由 $RI=(1\ \mathrm{k\Omega})(0.5\ \mathrm{mA})=0.5$ V，LSB（$b_7$）为 $0.5\ \mathrm V/128=3.906$ mV $=1\ \mathrm V/256$，满量程范围为 $2RI=1$ V。

### 第 2 步 — 最坏情况阶跃

最大的变化发生在全 0 与全 1 之间：

$$
\Delta v_{OUT,\max}=RI\sum_{i=0}^{7}2^{-i}=RI\left(2-2^{-7}\right)=(0.5\ \mathrm V)(1.9921875)=0.99609\ \mathrm V=\frac{255}{256}\ \mathrm V .
$$

其他任何码字跳变都更小，因此由这一阶跃决定最坏情况转换时间。

### 第 3 步 — 所需压摆率

除压摆外运放是理想的（增益和带宽无穷大），输出按斜率 SR 线性上升，斜坡结束时恰好到达终值，没有额外的线性建立过程。因此转换时间为 $\Delta v_{OUT,\max}/\mathrm{SR}$，要求 $T\le2\ \mu\mathrm s$，即

$$
\mathrm{SR}\ge\frac{\Delta v_{OUT,\max}}{T}=\frac{0.99609\ \mathrm V}{2\ \mu\mathrm s}=0.498\ \mathrm{V/\mu s}\approx0.5\ \mathrm{V/\mu s}.
$$
