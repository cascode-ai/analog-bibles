# 详细步骤 - G199

把 $R_F$ 当作两个节点之间的普通电阻，求解基极和集电极两个节点方程，得到中频增益。然后应用零值时间常数法，其中每个电容看到的电阻都必须计入 $R_F$：它直接跨接在 $C_\mu$ 两端，并对 $C_\pi$ 和 $C_{cs}$ 提供反馈。

### 第 1 步 — 小信号参数

$$
g_m=38.5\ \mathrm{mA/V},\qquad r_\pi=5.2\ \mathrm{k\Omega},\qquad C_\pi=\frac{g_m}{2\pi f_T}-C_\mu=10.0\ \mathrm{pF},
$$

其中 $C_{je}$ 已包含在 $C_\pi$ 中。

### 第 2 步 — 低频增益

在集电极（$v_o$）和基极（$v_b$）列 KCL：

$$
v_o\Bigl(\frac1{R_L}+\frac1{R_F}\Bigr)=v_b\Bigl(\frac1{R_F}-g_m\Bigr)
\;\Rightarrow\;v_o=-164.7\,v_b,
$$
$$
\frac{v_i}{R_S}=v_b\Bigl(\frac1{R_S}+\frac1{r_\pi}+\frac1{R_F}\Bigr)-\frac{v_o}{R_F}
\;\Rightarrow\;v_b=0.0172\,v_i .
$$

因此

$$
\frac{v_o}{v_i}=(-164.7)(0.0172)=-2.83,
$$

接近理想并联反馈（shunt feedback）的值 $-R_F/R_S=-3$。

### 第 3 步 — 零值电阻

令 $R_A=R_S\parallel r_\pi=3.42$ kΩ。

- $C_\pi$（基极到地）：基极看到 $R_S$、$r_\pi$，以及经 $R_F$ 到达的集电极节点；由于 $g_mv_b$ 的作用，这条通路等效为 $(R_F+R_L)/(1+g_mR_L)$：
$$
R_{\pi0}=R_S\parallel r_\pi\parallel\frac{R_F+R_L}{1+g_mR_L}=10\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}\parallel181\ \Omega=172\ \Omega .
$$
- $C_\mu$（基极到集电极）：$R_F$ 直接跨接在其两端，与通常的密勒电阻并联：
$$
R_{\mu0}=(R_A+R_L+g_mR_LR_A)\parallel R_F=666\ \mathrm{k\Omega}\parallel30\ \mathrm{k\Omega}=28.7\ \mathrm{k\Omega}.
$$
- $C_{cs}$（集电极到地）：集电极上的测试电压 $v$ 在基极产生 $av$，$a=R_A/(R_A+R_F)=0.102$，因此吸取的电流为 $v/R_L+(1-a)v/R_F+g_mav$：
$$
R_{cs0}=\frac1{1/R_L+(1-a)/R_F+g_ma}=240\ \Omega .
$$

| 电容 | 电阻 | 时间常数 |
|---|---|---|
| $C_\pi=10.0$ pF | 172 Ω | 1.72 ns |
| $C_\mu=0.2$ pF | 28.7 kΩ | 5.74 ns |
| $C_{cs}=1$ pF | 240 Ω | 0.24 ns |

### 第 4 步 — −3-dB 频率

$$
T_0=1.72+5.74+0.24\ \mathrm{ns}=7.70\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=20.7\ \mathrm{MHz}.
$$

精确节点分析给出 24 MHz；零值时间常数估计照例偏保守。与无反馈的级（增益 −65.8，0.92 MHz）相比，经 $R_F$ 的并联反馈以增益换取带宽：它降低了每个节点的电阻，尤其是跨接在 $C_\mu$ 两端的电阻。
