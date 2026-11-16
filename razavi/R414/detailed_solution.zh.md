# 详细步骤 - R414

**思路。** 输入与输出的直流电平相等，意味着反相器偏置在其开关阈值（switching threshold）$V_M$ 处，此时两个晶体管都处于饱和区（saturation region），且电流相同。由平方律求出 $V_M$ 和 $I_D$，计算两个器件的 $g_m$ 和 $r_O$，再利用小信号模型（small-signal model）：两个栅极都由 $V_{in}$ 驱动，因此两个跨导（transconductance）相加。

### 第 1 步 — 偏置点：$V_{in} = V_{out} = V_M$

每个器件都有 $V_{DS} = V_{GS}$（对 PMOS 为 $|V_{DS}| = |V_{GS}|$），因此两者都饱和。偏置计算采用不含 $\lambda$ 的平方律，两个漏极电流必须相等：

$$\frac12\mu_nC_{ox}\frac WL\,(V_M - V_{THN})^2 = \frac12\mu_pC_{ox}\frac WL\,(V_{DD} - V_M - |V_{THP}|)^2 .$$

代入 $V_{DD} - |V_{THP}| = 3 - 0.8 = 2.2$ V，并约去公因子：

$$134\,(V_M - 0.7)^2 = 38.4\,(2.2 - V_M)^2 .$$

两个括号内的量都为正，因此

$$
\begin{aligned}
\sqrt{\frac{134}{38.4}}\,(V_M - 0.7) &= 2.2 - V_M\\
1.868\,(V_M - 0.7) &= 2.2 - V_M\\
2.868\,V_M &= 2.2 + 1.308 = 3.508\\
V_M &= 1.223\ \mathrm{V}.
\end{aligned}
$$

$$V_{ov1} = V_M - 0.7 = 0.523\ \mathrm{V},\qquad |V_{ov2}| = 2.2 - V_M = 0.977\ \mathrm{V}.$$

$W/L = 50/0.5 = 100$，因此：

$$I_D = \frac12(134\ \mu\mathrm{A/V^2})(100)(0.523\ \mathrm{V})^2 = (6.7\ \mathrm{mA/V^2})(0.2735\ \mathrm{V^2}) = 1.83\ \mathrm{mA}.$$

用 PMOS 验算：$\tfrac12(38.4\ \mu\mathrm{A/V^2})(100)(0.977\ \mathrm{V})^2 = (1.92\ \mathrm{mA/V^2})(0.9545\ \mathrm{V^2}) = 1.83$ mA。✓

### 第 2 步 — 小信号参数

$$
\begin{aligned}
g_{m1} &= \frac{2I_D}{V_{ov1}} = \frac{2(1.83\ \mathrm{mA})}{0.523\ \mathrm{V}} = 7.01\ \mathrm{mS},\\
g_{m2} &= \frac{2I_D}{|V_{ov2}|} = \frac{2(1.83\ \mathrm{mA})}{0.977\ \mathrm{V}} = 3.75\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1.83\ \mathrm{mA})} = 5.46\ \mathrm{k\Omega},\\
r_{O2} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1.83\ \mathrm{mA})} = 2.73\ \mathrm{k\Omega},\\
r_{O1}\parallel r_{O2} &= \frac{5.46\times2.73}{5.46 + 2.73}\ \mathrm{k\Omega} = 1.82\ \mathrm{k\Omega}.
\end{aligned}
$$

### 第 3 步 — 电压增益

$M_1$ 从输出节点抽取 $g_{m1}v_{in}$。$M_2$ 的源极接交流地，因此它向输出端送入 $g_{m2}(0 - v_{in})$，也就是同样从输出端抽取 $g_{m2}v_{in}$。$r_{O1}$ 和 $r_{O2}$ 都接到交流地，对输出节点列基尔霍夫电流定律（KCL）得

$$
\begin{aligned}
g_{m1}v_{in} + g_{m2}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} &= 0\\
v_{out}\,\frac{1}{r_{O1}\parallel r_{O2}} &= -(g_{m1} + g_{m2})\,v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -(g_{m1} + g_{m2})\,(r_{O1}\parallel r_{O2}) ,
\end{aligned}
$$

$$A_v = -(7.01 + 3.75)\ \mathrm{mS}\times1.82\ \mathrm{k\Omega} = -(10.76\ \mathrm{mS})(1.82\ \mathrm{k\Omega}) = -19.6 .$$

$V_{in}$ 升高时，$M_1$ 下拉得更强，**同时** $M_2$ 上推得更弱，因此两个跨导相加。

### 第 4 步 — 输出阻抗

令 $v_{in} = 0$，两个受控源都消失，只剩下两个接到交流地的输出电阻（output resistance）：

$$R_{out} = r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}.$$

### 第 5 步 — 说明：在偏置计算中保留 $\lambda$

若偏置计算采用 $I_D = \tfrac12\mu C_{ox}(W/L)V_{ov}^2(1 + \lambda|V_{DS}|)$，数值求解得 $V_M \approx 1.254$ V，$I_D \approx 2.32$ mA。采用一致的导数（$g_m = 2I_D/V_{ov}$，分别为 8.36 和 4.90 mS；$g_o = \lambda I_D/(1 + \lambda|V_{DS}|)$），得 $A_v \approx -24.1$，$R_{out} \approx 1.82\ \mathrm{k\Omega}$；采用简化式 $g_o = \lambda I_D$ 则约得 −19.1 和 1.44 kΩ。这种敏感性反映出高增益反相器的工作点在很大程度上取决于器件细节；标准平方律模型的结果（−19.6，1.82 kΩ）才是本题预期的建模层次。

### 结果

偏置：$V_{in} = V_{out} = V_M = 1.22$ V，$I_D = 1.83$ mA，$g_{m1} = 7.01$ mS，$g_{m2} = 3.75$ mS，$r_{O1} = 5.46\ \mathrm{k\Omega}$，$r_{O2} = 2.73\ \mathrm{k\Omega}$。

$$A_v = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2}) \approx -19.6,\qquad R_{out} = r_{O1}\parallel r_{O2} \approx 1.82\ \mathrm{k\Omega}.$$

**常见错误。** 把 $M_2$ 当作无源的电流源（current source）负载，得到 $A_v = -g_{m1}(r_{O1}\parallel r_{O2}) \approx -12.7$。$M_2$ 的栅极由 $V_{in}$ 驱动，因此 $g_{m2}$ 与 $g_{m1}$ 相加。

**常见错误。** 假设 $V_M = V_{DD}/2 = 1.5$ V。NMOS 的驱动能力约为 PMOS 的 3.5 倍（$\mu_nC_{ox}/\mu_pC_{ox} = 3.49$），且两者的阈值不同，因此 $V_M$ 被拉低到 1.22 V。

**常见错误。** 把两个输出电阻串联相加（$r_{O1} + r_{O2}$）。两者都把输出端接到交流地，因此它们是**并联**的。
