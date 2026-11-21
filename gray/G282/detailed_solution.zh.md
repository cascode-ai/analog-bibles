# 详细步骤 - G282

输出电压在分压器上被采样，电压 $R_1v_o/(R_1+R_2)$ 以串联方式送回输入回路，因此反馈为电压串联反馈（series-shunt feedback），用 $R_1$–$R_2$ 网络的 $h$ 参数描述最为自然。把反馈网络的负载效应（$h_{11f}$、$h_{22f}$）并入基本放大器 $a$，取 $f=h_{12f}$，再套用电压串联反馈公式。

### 第 1 步 — 反馈网络的 $h$ 参数

反馈网络是一个二端口网络（two-port network），端口 1 在反相输入端与地之间，端口 2 在输出端与地之间。其 $h$ 参数满足 $v_1=h_{11}i_1+h_{12}v_2$、$i_2=h_{21}i_1+h_{22}v_2$，通过短路端口 2 或开路端口 1 求得：
$$
\begin{aligned}
h_{11f}&=\left.\frac{v_1}{i_1}\right|_{v_2=0}=R_1\|R_2=833.3\ \Omega,\\
h_{12f}&=\left.\frac{v_1}{v_2}\right|_{i_1=0}=\frac{R_1}{R_1+R_2}=\frac16,\\
h_{22f}&=\left.\frac{i_2}{v_2}\right|_{i_1=0}=\frac{1}{R_1+R_2}=\frac{1}{6\ \mathrm{k\Omega}}.
\end{aligned}
$$
反馈系数为 $f=h_{12f}=1/6$；电阻网络的正向传输 $h_{21f}$ 相对运放可以忽略。

### 第 2 步 — 计入负载效应的基本放大器

基本放大器（basic amplifier）是运放加上与其输入回路串联的 $h_{11f}$ 以及并在其输出端的 $h_{22f}$（6 kΩ）。输入电压在 $R_i$ 与 $h_{11f}$ 之间分压，受控源 $a_vv_x$ 经 $R_o$ 驱动 6 kΩ：
$$
\begin{aligned}
v_x&=v_i\frac{R_i}{R_i+h_{11f}}=v_i\frac{1\ \mathrm{M\Omega}}{1.000833\ \mathrm{M\Omega}}=0.99917\,v_i,\\
v_o&=a_vv_x\frac{R_1+R_2}{R_1+R_2+R_o}=a_vv_x\frac{6\ \mathrm{k\Omega}}{6.1\ \mathrm{k\Omega}}=0.98361\,a_vv_x .
\end{aligned}
$$
因此
$$
a=\frac{v_o}{v_i}=10^4\times0.99917\times0.98361=9828 .
$$

### 第 3 步 — 环路传输与闭环增益

环路增益为
$$
T=af=\frac{9828}{6}=1638 ,
$$
电压串联结构的闭环增益为
$$
\frac{v_o}{v_i}=\frac{a}{1+T}=\frac{9828}{1639}=5.9963 .
$$
它等于 $1/f=6$ 乘以因子 $T/(1+T)$，即增益误差为 0.06%。

### 第 4 步 — 输入电阻

输入端的串联反馈使基本放大器输入回路的电阻增大 $1+T$ 倍。该回路由 $R_i$ 与 $h_{11f}$ 串联构成：
$$
R_{in}=(R_i+h_{11f})(1+T)=(1.000833\ \mathrm{M\Omega})(1639)=1.64\ \mathrm{G\Omega}.
$$

### 第 5 步 — 输出电阻

输出端的并联采样使基本放大器的输出电阻减小 $1+T$ 倍。$v_i=0$ 时，基本放大器的输出电阻为 $R_o$ 与 $1/h_{22f}$ 并联：
$$
R_{out}=\frac{R_o\|(R_1+R_2)}{1+T}=\frac{100\ \Omega\|6\ \mathrm{k\Omega}}{1639}=\frac{98.36\ \Omega}{1639}=0.060\ \Omega .
$$

对整个电路直接做节点分析（nodal analysis），同样得到 $v_o/v_i=5.9963$ 和 $R_{in}=1.640\ \mathrm{G\Omega}$，说明忽略 $h_{21f}$ 没有可见影响。结果：$T\approx1638$，$v_o/v_i\approx5.996$，$R_{in}\approx1.64\ \mathrm{G\Omega}$，$R_{out}\approx0.060\ \Omega$。
