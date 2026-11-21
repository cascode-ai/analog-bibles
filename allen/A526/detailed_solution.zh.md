# 详细步骤 - A526

全并行转换器的转换速率受最慢的比较器判决限制，而最慢的判决出现在过驱动最小时。取最坏情况的过驱动，用比较器的单极点阶跃响应求出到达 1 V 输出一半所需的时间，并检查压摆率是否构成限制。

### 第 1 步 — 最坏情况的过驱动

对 $V_{REF}=5$ V 的 6 位转换器，

$$
1\ \text{LSB}=\frac{V_{REF}}{2^6}=\frac{5\ \mathrm V}{64}=78.1\ \mathrm{mV}.
$$

抽头位于码跳变处，转换器必须能分辨离抽头只有半个 LSB 的输入（位于某个码中点、即相邻抽头正中的输入）。因此比较器必须处理的最小过驱动为

$$
|V^*_{in}-V_i|=\tfrac12\ \text{LSB}=\frac{5\ \mathrm V}{128}=39.1\ \mathrm{mV}.
$$

### 第 2 步 — 线性单极点响应

直流增益 $A_0=10^4$、主极点 $\omega_p=10^3$ rad/s，比较器输出从初始状态 0 V 开始为

$$
v_{out}(t)=A_0\left(1-e^{-\omega_pt}\right)(V^*_{in}-V_i)
=(10^4)(0.0391\ \mathrm V)\left(1-e^{-10^3t}\right)=390.6\ \mathrm V\left(1-e^{-10^3t}\right),
$$

直到在 1 V 处限幅。转换时间 $T$ 为到达一半即 0.5 V 所需的时间：

$$
1-e^{-10^3T}=\frac{0.5\ \mathrm V}{390.6\ \mathrm V}=0.00128
\;\Longrightarrow\;
T=-\frac{\ln(1-0.00128)}{10^3\ \mathrm{s^{-1}}}=1.281\ \mu\mathrm s .
$$

由于 $0.00128\ll1$，输出基本线性上升，$v_{out}\approx A_0\omega_p(V^*_{in}-V_i)\,t$，即增益带宽积乘以过驱动。

### 第 3 步 — 压摆率检查

线性响应的最大斜率出现在 $t=0$：

$$
\left.\frac{dv_{out}}{dt}\right|_{max}=A_0\omega_p(V^*_{in}-V_i)=(10^7\ \mathrm{s^{-1}})(0.0391\ \mathrm V)=3.9\times10^5\ \mathrm{V/s}=0.39\ \mathrm{V/\mu s},
$$

远低于 3 V/µs 的压摆率，因此响应不受压摆率限制。

### 第 4 步 — 最高转换速率

$$
f_{max}=\frac1T=\frac1{1.281\ \mu\mathrm s}\approx0.78\times10^6\ \text{samples/s}.
$$

若过驱动取 1 LSB，时间减半到约 0.64 µs（1.56 MS/s）；半 LSB 才是最坏情况，决定最高速率。
