# 详细步骤 - A234

该级上下两半都是共源共栅结构，所以输出电阻是两个形如 $g_mr_{ds}^2$ 的共源共栅电阻的并联。求出该电阻、增益 $-g_{m1}R_{out}$ 和输出极点，再代入几何尺寸固定时的 $g_m\propto\sqrt{I_D}$ 和 $g_{ds}=\lambda I_D$。

### 第 1 步 — 输出电阻

由小信号模型，向下看进 M2 的漏极（栅极交流接地，源极接 $r_{ds1}$），向上看进 M3 的漏极（栅极交流接地，源极接 $r_{ds4}$）：

$$
R_{down}=r_{ds1}+r_{ds2}+(g_{m2}+g_{mbs2})r_{ds1}r_{ds2}\approx g_{m2}r_{ds1}r_{ds2},
$$

$$
R_{up}=r_{ds3}+r_{ds4}+(g_{m3}+g_{mbs3})r_{ds3}r_{ds4}\approx g_{m3}r_{ds3}r_{ds4},
$$

$$
R_{out}=R_{down}\parallel R_{up}\approx\big[g_{m2}r_{ds1}r_{ds2}\big]\parallel\big[g_{m3}r_{ds3}r_{ds4}\big].
$$

体跨导只是把 $g_m$ 乘以由偏置电压决定的固定因子 $1+\eta$，不改变电流标度，下面略去。

### 第 2 步 — 单个共源共栅电阻随电流的变化

由 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $r_{ds}=1/(\lambda I_D)$，

$$
g_{m2}r_{ds1}r_{ds2}=\frac{\sqrt{2K'_2(W/L)_2I_D}}{\lambda_1\lambda_2I_D^2}=\frac{\sqrt{2K'_2(W/L)_2}}{\lambda_1\lambda_2}\,I_D^{-3/2},
$$

上支路同理。两个电导相加，

$$
R_{out}=\frac{I_D^{-3/2}}{\dfrac{\lambda_1\lambda_2}{\sqrt{2K'_2(W/L)_2}}+\dfrac{\lambda_3\lambda_4}{\sqrt{2K'_3(W/L)_3}}}\ \propto\ I_D^{-3/2}.
$$

### 第 3 步 — 电压增益

共源共栅管 M2 几乎不变地把 M1 的小信号电流 $g_{m1}v_{in}$ 送到输出，故

$$
A_v=-g_{m1}R_{out}=-\frac{\sqrt{2K'_1(W/L)_1}\,I_D^{-1}}{\dfrac{\lambda_1\lambda_2}{\sqrt{2K'_2(W/L)_2}}+\dfrac{\lambda_3\lambda_4}{\sqrt{2K'_3(W/L)_3}}}\ \propto\ I_D^{1/2}\cdot I_D^{-3/2}=I_D^{-1}.
$$

### 第 4 步 — 主极点

输出节点兼有很大的 $R_{out}$ 和固定负载电容 $C_{out}$；内部共源共栅节点只看到约 $1/g_m$。因此主极点为

$$
|p_1|=\frac{1}{R_{out}C_{out}}\ \propto\ I_D^{3/2}.
$$

小结：$R_{out}\propto I_D^{-3/2}$，$|A_v|\propto I_D^{-1}$，$|p_1|\propto I_D^{3/2}$。与采用普通电流源负载的简单共源共栅级相比，每个指数都强了半次幂，因为这里两条支路都没有单个 $r_{ds}$ 来限制输出电阻。
