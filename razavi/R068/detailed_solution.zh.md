# 详细步骤 - R068

**思路。** 在线性区边缘，漏源电压等于过驱动电压（overdrive voltage）：$V_{out} = V_{in} - V_{TH}$。把这一条件与负载线方程 $V_{out} = V_{DD} - R_DI_D$ 以及平方律（square law）结合，得到关于过驱动电压的二次方程。然后求出该偏置下的 $g_m$，并利用 $A_v = -g_mR_D$。

### 第 1 步 — 线性区边缘的条件

由于 $V_{GS} = V_{in}$，过驱动电压为 $V_{ov} = V_{in} - V_{TH}$，且

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})\times\frac{50}{0.5} = 13.4\ \mathrm{mA/V^2}.$$

随着 $V_{in}$ 升高，电流增大，$V_{out}$ 下降；当 $V_{DS}$ 降到过驱动电压以下时，$M_1$ 进入线性区。因此**线性区的边缘**为

$$V_{out} = V_{DS} = V_{GS} - V_{TH} = V_{in} - V_{TH} = V_{ov} ,$$

此处饱和区公式（$\lambda = 0$）仍然成立：

$$I_D = \frac12\,\beta\,V_{ov}^2 .$$

### 第 2 步 — 与负载线联立

$$V_{out} = V_{DD} - R_DI_D = V_{DD} - R_D\cdot\frac12\beta V_{ov}^2 .$$

令 $V_{out} = V_{ov}$：

$$V_{ov} = V_{DD} - \frac12\beta R_D\,V_{ov}^2 \quad\Longrightarrow\quad \frac12\beta R_D\,V_{ov}^2 + V_{ov} - V_{DD} = 0 .$$

其系数为

$$\frac12\beta R_D = \frac12(13.4\times10^{-3}\ \mathrm{A/V^2})(2\times10^{3}\ \Omega) = 13.4\ \mathrm{V^{-1}},$$

因此

$$13.4\,V_{ov}^2 + V_{ov} - 3 = 0 \qquad (V_{ov}\ \text{in volts}).$$

### 第 3 步 — 求解过驱动电压和输入电压

取正根：

$$V_{ov} = \frac{-1 + \sqrt{1^2 + 4(13.4)(3)}}{2(13.4)} = \frac{-1 + \sqrt{161.8}}{26.8} = \frac{-1 + 12.720}{26.8} = \frac{11.720}{26.8} = 0.437\ \mathrm{V},$$

$$V_{in} = V_{TH} + V_{ov} = 0.7 + 0.437 = 1.137\ \mathrm{V}.$$

**验证。**

$$I_D = \frac12\beta V_{ov}^2 = \frac12(13.4\ \mathrm{mA/V^2})(0.437\ \mathrm{V})^2 = 6.7\times0.1912\ \mathrm{mA} = 1.281\ \mathrm{mA},$$

$$V_{out} = 3 - (2\ \mathrm{k}\Omega)(1.281\ \mathrm{mA}) = 3 - 2.563 = 0.437\ \mathrm{V} = V_{ov}.\ \checkmark$$

### 第 4 步 — 线性区边缘处的小信号增益

$$g_m = \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.437\ \mathrm{V}) = 5.86\ \mathrm{mS}.$$

与任何 $\lambda = 0$ 的饱和共源级一样，$M_1$ 是从输出端到地的电流源（current source）$g_mv_{in}$，$R_D$ 把输出端接到交流地，因此在输出端列 KCL，$g_mv_{in} + v_{out}/R_D = 0$，得到

$$A_v = \frac{v_{out}}{v_{in}} = -g_mR_D = -(5.86\times10^{-3}\ \mathrm{S})(2\times10^{3}\ \Omega) = -11.7 .$$

**从线性区一侧趋近时增益是否相同？** 在线性区，$I_D = \beta[V_{ov}V_{DS} - V_{DS}^2/2]$，因此

$$\frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS}, \qquad \frac{\partial I_D}{\partial V_{DS}} = \beta(V_{ov} - V_{DS}).$$

在边缘处 $V_{DS} = V_{ov}$：跨导（transconductance）为 $\beta V_{ov} = g_m$，输出电导为零，因此增益是连续的，从两侧趋近都是 $-11.7$。在线性区更深处，跨导 $\beta V_{DS}$ 下降，输出电导上升，因此增益急剧下降。

**与 1 mA 偏置点的比较。** 在 $I_D = 1$ mA 时，$g_m = 5.18$ mS，$A_v = -10.35$。偏置在线性区边缘、电流较大（1.28 mA）时，得到该级在饱和区所能达到的最大增益，约为 $-11.7$，但向下的输出摆幅（output swing）没有任何裕量。

### 结果

在线性区边缘 $V_{out} = V_{in} - V_{TH}$，再利用 $V_{out} = V_{DD} - R_D\cdot\tfrac12\beta(V_{in} - V_{TH})^2$：

$$13.4\,V_{ov}^2 + V_{ov} - 3 = 0 \;\Longrightarrow\; V_{ov} = 0.437\ \mathrm{V}, \qquad V_{in} = 0.7 + 0.437 \approx 1.137\ \mathrm{V}$$

（$I_D \approx 1.28$ mA，$V_{out} \approx 0.437$ V）。此处的小信号增益为

$$A_v = -g_mR_D = -\beta V_{ov}R_D = -(5.86\ \mathrm{mS})(2\ \mathrm{k}\Omega) \approx -11.7 .$$

**常见错误。** 把边缘条件写成 $V_{out} = V_{in}$ 或 $V_{out} = V_{TH}$。饱和区的边界是 $V_{DS} = V_{GS} - V_{TH}$，即 $V_{out} = V_{in} - V_{TH}$。

**常见错误。** 沿用 1 mA 偏置点的 $g_m$（增益为 −10.35）。在线性区边缘，电流为 1.28 mA，过驱动电压为 0.437 V，因此 $g_m$ 更大（5.86 mS）。

**常见错误。** 用不等于 $V_{ov}$ 的 $V_{DS}$ 计算线性区跨导，或者加入有限的线性区输出电阻（output resistance）。恰好在边缘处，$\beta V_{DS} = \beta V_{ov}$，输出电导 $\beta(V_{ov} - V_{DS})$ 为零，因此饱和区的结果 $-g_mR_D$ 是精确的。
