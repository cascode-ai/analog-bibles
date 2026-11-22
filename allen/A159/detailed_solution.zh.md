# 详细步骤 - A159

忽略器件电容时，负载电容是电路中唯一的电容，因此响应只有一个由 $C_L$ 和输出节点电阻决定的极点。先由偏置电流求出该电阻，再求极点频率。

### 第 1 步 — 输出电阻

1:1 电流镜使 M6、M7 偏置在 100 µA，M1–M4 偏置在 50 µA（在 M1 漏极节点由基尔霍夫电流定律（KCL）得 $I_3=I_6-I_1=50\ \mu$A）。输出节点连接 M2、M4 和 M7 的漏极。对小信号而言，差分输入下 M2 的源极为交流地，M4 和 M7 的栅极固定，因此每个器件只贡献其沟道长度调制（channel-length modulation）电导 $g_{ds}=\lambda I_D$：

$$
\begin{aligned}
g_{out}&=g_{ds2}+g_{ds4}+g_{ds7}=\lambda_NI_2+\lambda_NI_4+\lambda_PI_7\\
&=(0.04)(50\ \mu\mathrm A)+(0.04)(50\ \mu\mathrm A)+(0.05)(100\ \mu\mathrm A)=9\ \mu\mathrm S,
\end{aligned}
$$

故 $R_{out}=1/g_{out}=111$ kΩ。

### 第 2 步 — 传递函数与 −3 dB 频率

输入对与 M3–M4 电流镜向输出节点注入 $g_{m1}V_{in}$；由于没有其他电容，镜像节点的响应是瞬时的。在输出端接 $C_L=10$ pF，由 KCL 得

$$
\frac{V_o(s)}{V_{in}(s)}=\frac{g_{m1}}{g_{out}+sC_L}=\frac{g_{m1}/g_{out}}{1+s/\omega_{-3\,\mathrm{dB}}},\qquad
\omega_{-3\,\mathrm{dB}}=\frac{g_{out}}{C_L}=\frac{9\ \mu\mathrm S}{10\ \mathrm{pF}}=9.0\times10^{5}\ \mathrm{rad/s}.
$$

换算为赫兹：

$$
f_{-3\,\mathrm{dB}}=\frac{g_{out}}{2\pi C_L}=\frac{9\ \mu\mathrm S}{2\pi(10\ \mathrm{pF})}=143\ \mathrm{kHz}.
$$
