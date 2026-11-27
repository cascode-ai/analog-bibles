# 详细步骤 - R069

### 第 1 步 — 写出目标偏置下的漏极电流

源极和衬底接地，所以 $V_{GS}=V_{in}$，$V_{DS}=V_{out}$。定义过驱动电压 $V_{ov}=V_{GS}-V_{TH}$，并令电压差 $\delta=V_{ov}-V_{DS}=0.050\ \mathrm{V}$。题目给定了这一电压差，所以 $V_{out}=V_{ov}-\delta$。

当 $\lambda=0$ 且 $0<V_{DS}<V_{ov}$ 时，漏极电流满足线性区平方律模型：

$$I_D=\beta\left(V_{ov}V_{DS}-\frac{V_{DS}^2}{2}\right)
=\frac{\beta}{2}\left[V_{ov}^2-(V_{ov}-V_{DS})^2\right]
=\frac{\beta}{2}(V_{ov}^2-\delta^2),$$

其中 $\beta=\mu_nC_{ox}(W/L)_1=(134\ \mu\mathrm{A/V^2})(50/0.5)=13.4\ \mathrm{mA/V^2}$。配方后，可以直接把题给电压差代入电流式。

### 第 2 步 — 用负载线求输入电压

输出端没有其他负载，电阻电流等于 $I_D$，所以 $V_{out}=V_{DD}-R_DI_D$。代入目标输出电压和漏极电流，得到

$$V_{ov}-\delta=V_{DD}-\frac{\beta R_D}{2}(V_{ov}^2-\delta^2).$$

令 $a=\beta R_D/2=13.4\ \mathrm{V^{-1}}$，$b=V_{DD}+\delta+a\delta^2=3.0835\ \mathrm{V}$，方程化为 $aV_{ov}^2+V_{ov}-b=0$。线性区条件要求 $V_{ov}>\delta$，因此舍去负根。正根为

$$V_{ov}=\frac{-1+\sqrt{1+4ab}}{2a}
=\frac{-1+\sqrt{1+4(13.4\ \mathrm{V^{-1}})(3.0835\ \mathrm{V})}}{26.8\ \mathrm{V^{-1}}}
\approx 0.4438\ \mathrm{V}.$$

由此得到输入和输出电压

$$V_{in}=V_{TH}+V_{ov}\approx 1.144\ \mathrm{V},\qquad
V_{out}=V_{ov}-\delta\approx 0.394\ \mathrm{V}.$$

该解满足 $0<V_{DS}<V_{ov}$，且 $V_{ov}-V_{DS}=50$ mV。由负载线得 $I_D=(3\ \mathrm{V}-0.3938\ \mathrm{V})/(2\ \mathrm{k}\Omega)\approx 1.303\ \mathrm{mA}$，与第 1 步的线性区电流式一致。

### 第 3 步 — 在该偏置点将电流线性化

固定 $V_{DS}$ 时，$I_D$ 对 $V_{GS}$ 的变化率为跨导 $g_m$。固定 $V_{GS}$ 时，$I_D$ 对 $V_{DS}$ 的变化率为输出电导 $g_{ds}$。对第 1 步中保留两个电压变量的线性区电流式求偏导，得到

$$g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS}}
=\beta V_{DS}\approx (13.4\ \mathrm{mA/V^2})(0.3938\ \mathrm{V})
\approx 5.28\ \mathrm{mS},$$

$$g_{ds}=\left.\frac{\partial I_D}{\partial V_{DS}}\right|_{V_{GS}}
=\beta(V_{ov}-V_{DS})=(13.4\ \mathrm{mA/V^2})(0.050\ \mathrm{V})
=0.67\ \mathrm{mS}.$$

50 mV 的关系用于确定直流偏置。求偏导时，栅端和漏端的小信号电压变化分别独立考虑。输出电导对应的电阻为 $r_{ds}=1/g_{ds}\approx 1.49\ \mathrm{k}\Omega$。

### 第 4 步 — 列出输出节点的小信号方程

电源端为交流地，所以 $R_D$ 和 $r_{ds}$ 均从输出端接到交流地。漏极受控电流为 $g_mv_{in}$，小写电压表示相对于偏置点的小信号变化量。

<!-- diagram: diagram-01.cir -->

令流出输出节点的小信号电流之和为零，得到

$$g_mv_{in}+g_{ds}v_{out}+\frac{v_{out}}{R_D}=0.$$

解得电压增益

$$A_v=\frac{v_{out}}{v_{in}}
=-\frac{g_m}{g_{ds}+1/R_D}
\approx-\frac{5.28\ \mathrm{mS}}{0.67\ \mathrm{mS}+0.50\ \mathrm{mS}}
\approx -4.51\ \mathrm{V/V}.$$

### 与饱和区边界比较

在 $V_{DS}=V_{ov}$ 的边界，令第 2 步的 $\delta=0$，得 $V_{ov}\approx 0.4373\ \mathrm{V}$、$V_{in}\approx 1.1373\ \mathrm{V}$。此时由第 3 步得 $g_{ds}=0$、$g_m\approx 5.86\ \mathrm{mS}$，由第 4 步得 $A_v\approx -11.7\ \mathrm{V/V}$。从该边界将输入升高约 6.5 mV，即达到题设偏置点。此时 $r_{ds}$ 与 $R_D$ 并联，将有效输出电阻降至 $1/(g_{ds}+1/R_D)\approx 0.855\ \mathrm{k}\Omega$，是增益幅值下降的主要原因。
