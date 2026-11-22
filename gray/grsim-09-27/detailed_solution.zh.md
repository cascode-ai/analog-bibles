# 详细步骤 - grsim-09-27

去掉 $C_c$ 后，两级运放有两个相距较远但未经补偿的极点：一个在第一级的高阻输出端，另一个在由寄生电容决定的输出节点。环路由 1 MΩ / $R_x$ 分压器闭合，反馈系数 $\beta=R_x/(1\ \mathrm{M\Omega}+R_x)$ 与频率无关，所以环路增益为 $T(j\omega)=a(j\omega)\beta$。对给定的相位裕度 $\phi_M$，找到开环相位为 $-180^\circ+\phi_M$ 的频率，并在该处取 $\beta=1/|a|$。先仿真开环响应，按此方法求 $R_x$，再检查闭环，包括开环仿真中看不到的 $M_1$ 输入电容的影响。

### 第 1 步 — 仿真设置

模型采用 level 1，参数为题给的 $k'$、$V_t$、$t_{ox}$、交叠电容和结电容数据。所有器件的有效沟长为 $L_{\text{eff}}=8-0.6-1=6.4\ \mu$m，因此 $\lambda_n=0.2/6.4=0.031\ \mathrm{V^{-1}}$，$\lambda_p=0.1/6.4=0.0156\ \mathrm{V^{-1}}$。体效应取 $\gamma_n=0.21$、$\gamma_p=0.67\ \mathrm{V^{1/2}}$。漏区和源区宽 2 µm：$A_D=A_S=W\cdot2\ \mu$m，$P_D=P_S=2(W+2\ \mu\mathrm{m})$。20 µA 偏置下，$I_{D1}=I_{D2}\approx10$ µA，$I_{D6}=I_{D7}\approx21$ µA。与 grsim-09-21 一样，相对于 $v_o$，$M_1$ 的栅极是反相输入端，这正是反馈分压器接回该端的原因。

```spice
* grsim-09-27 uncompensated op amp (effective L = 6.4 um, 2-um diffusions)
.model nm nmos level=1 kp=60.4u vto=0.7 lambda=0.03125 gamma=0.21 phi=0.58 tox=40n
+ cgso=0.35n cgdo=0.35n cj=0.08m cjsw=0.5n mj=0.5 mjsw=0.5 pb=0.65
.model pm pmos level=1 kp=30.2u vto=-0.7 lambda=0.015625 gamma=0.67 phi=0.70 tox=40n
+ cgso=0.35n cgdo=0.35n cj=0.20m cjsw=1.5n mj=0.5 mjsw=0.5 pb=0.65
VDD vdd 0 5
VSS vss 0 -5
IB g8 vss 20u
M8 g8 g8 vdd vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M5 s g8 vdd vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M7 o g8 vdd vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M1 d1 inm s vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M2 d2 inp s vdd pm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
M3 d1 d1 vss vss nm w=50u l=6.4u ad=100p as=100p pd=104u ps=104u
M4 d2 d1 vss vss nm w=50u l=6.4u ad=100p as=100p pd=104u ps=104u
M6 o d2 vss vss nm w=100u l=6.4u ad=200p as=200p pd=204u ps=204u
* open loop: RL o 0 1meg / Lf o inm 1e9 / Cf inm 0 1 / Vp inp 0 ac 1
* closed loop: RF o inm 1meg / RX inm 0 {Rx} / Vp inp 0 ac 1 pulse(0 {0.1/gain} 50n 1n 1n 10u 20u)
.ac dec 200 10 1g
.end
```

### 第 2 步 — 开环响应

接 1 MΩ 负载、$M_1$ 栅极保持交流地时：

| 量 | ngspice |
|---|---|
| 直流增益 | $2.55\times10^{4}$（88.1 dB） |
| 主极点 | 15.7 kHz |
| 相位 −135°（第二极点） | 6.9 MHz，此处 $\lvert a\rvert=46$ |
| 相位 −180° | 29 MHz |

第一级输出端（$M_6$ 的栅极，约 0.4 pF 的 $C_{gs6}$ 加结电容，电阻约 2 MΩ）决定低频极点。输出节点（结电容和交叠电容约 0.2 pF，电阻约 0.5 MΩ，并经 $C_{gd6}$ 进一步极点分裂）决定兆赫兹范围的第二极点。相位在 29 MHz 处达到 −180°，此时 $|a|\approx3$，因此单位增益跟随器是不稳定的。

### 第 3 步 — 由开环数据求 $R_x$

在穿越频率 $f_c$ 处，开环相位必须为 $-180^\circ+\phi_M$，且 $|a(f_c)|\beta=1$：

$$
\beta=\frac{1}{|a(f_c)|},\qquad R_x=\frac{\beta}{1-\beta}\,(1\ \mathrm{M\Omega}),\qquad \frac{v_o}{v_i}\Big|_{\text{dc}}\approx\frac{1}{\beta}.
$$

| $\phi_M$ | $f_c$ | $\lvert a(f_c)\rvert=1/\beta$ | $R_x$ |
|---|---|---|---|
| 80° | 1.49 MHz | 265 | 3.79 kΩ |
| 60° | 4.36 MHz | 83.6 | 12.1 kΩ |
| 45° | 6.84 MHz | 46.7 | 21.9 kΩ |
| 20° | 13.2 MHz | 15.6 | 68.6 kΩ |

例如 60° 时，4.36 MHz 处相位为 −120°，$|a|=83.6$；于是 $\beta=0.0120$，$R_x=0.0120/(1-0.0120)\times1\ \mathrm{M\Omega}=12.1$ kΩ。

### 第 4 步 — 用这些 $R_x$ 闭环：遗漏的输入极点

用这些阻值仿真反馈电路（此时 1 MΩ 电阻就是反馈电阻），并在 $M_1$ 栅极用双注入法测量实际环路增益，得到：

| 目标 $\phi_M$ | 实际 $\phi_M$ | 峰值 | 过冲（100 mV 阶跃） |
|---|---|---|---|
| 80° | 79.6° | 无 | 0 |
| 60° | 54.2° | 0.7 dB | 14 % |
| 45° | 24.3° | 8.1 dB | 46 % |
| 20° | −37° | — | 振荡（输出摆到约 4 V） |

相位裕度偏小，且 $R_x$ 越大越严重。开环仿真中 $M_1$ 的栅极由理想源驱动，而在反馈电路中栅极由 $R_x\parallel1\ \mathrm{M\Omega}$ 驱动。$M_1$ 的输入电容（主要是 $C_{gs1}\approx\tfrac23WL_{\text{eff}}C_{ox}=0.37$ pF 加交叠电容，共约 0.4 pF）于是形成一个位于 $1/[2\pi(R_x\parallel1\ \mathrm{M\Omega})C_{\text{in}}]$ 的反馈网络极点。$R_x=21.9$ kΩ 时该极点约为 19 MHz，在 7.3 MHz 的穿越频率处损失约 $\arctan(7.3/19)\approx21^\circ$，恰好等于观察到的从 45° 到 24° 的损失。$R_x=68.6$ kΩ 时该极点降到约 6 MHz，低于穿越频率，环路变得不稳定。

### 第 5 步 — 由真实环路增益求 $R_x$

计入这一负载（扫描 $R_x$ 并在 $M_1$ 栅极测量环路增益），得到真正能实现所需裕度的阻值：

| $\phi_M$ | $R_x$ | 闭环直流增益 | 穿越频率 | −3 dB 带宽 | 峰值 | 过冲 |
|---|---|---|---|---|---|---|
| 80° | 3.64 kΩ | 272（48.7 dB） | 1.46 MHz | 1.81 MHz | 无 | 0 |
| 60° | 10.2 kΩ | 98.7（39.9 dB） | 3.92 MHz | 7.0 MHz | 0.05 dB | 8 % |
| 45° | 15.1 kΩ | 67.1（36.5 dB） | 5.50 MHz | 9.6 MHz | 2.4 dB | 24 % |
| 20° | 23.4 kΩ | 43.6（32.8 dB） | 7.63 MHz | 11.7 MHz | 9.8 dB | 51 % |

输入阶跃为 100 mV 除以闭环增益，使每种情况的输出都变化 100 mV。

![四种相位裕度下闭环增益幅值（dB）随频率的变化：80° 时平坦于 48.7 dB、无峰值，之后增益逐步降低，5–8 MHz 附近的峰值逐渐增大，20° 时达 9.8 dB](/q/grsim-09-27/solution-closed-loop.zh.svg)

![对 100 mV 输出阶跃的响应：80° 时平滑上升，60° 时过冲 8 %，45° 时 24 %，20° 时 51 % 并伴随长时间振铃](/q/grsim-09-27/solution-step.zh.svg)

### 第 6 步 — 讨论

- **增益与带宽。** $R_x$ 越大，反馈越强（$\beta$ 越大），闭环增益下降（$\approx1/\beta$），带宽上升：从增益 272 时的 1.8 MHz 到增益 43.6 时的 11.7 MHz。穿越频率向第二极点移动，这正是侵蚀相位裕度的原因。
- **峰值和过冲随相位裕度变化**，与二阶系统一致：80° 时约为 0（过阻尼），60° 时很小（过冲 8 %，基本无峰值），45° 时为 2.4 dB 和 24 %，20° 时为 9.8 dB 和 51 % 并伴随长时间振铃。这些值与标准两极点预测（60°、45°、20° 时过冲约 9 %、23 %、55 %）一致。
- **反馈网络是环路的一部分。** 在反馈节点由理想源驱动的开环仿真中求得的 $R_x$ 会高估可实现的裕度，因为反馈电阻与 $M_1$ 的输入电容增加了一个极点。采用 1 MΩ 反馈电阻时，仅 0.4 pF 的输入电容在几兆赫兹处就已起作用，仅凭开环数据设计的 20° 电路会振荡。环路增益必须在反馈网络就位的情况下，在 $M_1$ 栅极用注入法测量。
