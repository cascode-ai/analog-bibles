# 详细步骤 - R227

**思路。** 无论阈值电压如何，分压器都把 $V_{GS}$ 固定不变，因此 $V_{TH}$ 的变化会一对一地改变过驱动电压 $V_{GS} - V_{TH}$，而平方律（square law）会把它变成很大的电流变化。先求出标称设计点，再分别对 $V_{TH} = 0.75$ V 和 $0.65$ V 精确地重新计算 $I_{out}$，并与小信号估算结果比较。

### 第 1 步 — 标称设计点

栅极不取电流，因此 $V_{GS} = V_{DD}R_2/(R_1 + R_2)$ 只由电阻和 $V_{DD}$ 决定。由 $W/L = 50/0.5 = 100$，

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} ,$$

再由 $I_{out} = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$（$\lambda = 0$）得到标称过驱动电压

$$V_{ov} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V} ,$$

$$V_{GS} = V_{TH} + V_{ov} = 0.7\ \mathrm{V} + 0.273\ \mathrm{V} = 0.973\ \mathrm{V}$$

（对应 $R_2/R_1 = 0.973/2.027 = 0.48$）。$V_{TH}$ 变化时，这个 $V_{GS}$ 保持 0.973 V 不变。

### 第 2 步 — 阈值电压升高 50 mV（$V_{TH} = 0.75$ V）

$$V_{ov} = V_{GS} - V_{TH} = 0.973\ \mathrm{V} - 0.75\ \mathrm{V} = 0.223\ \mathrm{V} ,$$

$$I_{out} = \frac12(13.4\ \mathrm{mA/V^2})(0.223\ \mathrm{V})^2 = (6.7\ \mathrm{mA/V^2})(0.0498\ \mathrm{V^2}) = 0.334\ \mathrm{mA} ,$$

$$\Delta I_{out} = 0.334 - 0.5 = -0.166\ \mathrm{mA}, \qquad \frac{\Delta I_{out}}{I_{out}} = \frac{-0.166}{0.5} = -33\ \% .$$

过驱动电压减小，因此电流**下降**（只要 $V_{DS} \ge 0.223$ V，$M_1$ 就仍处于饱和）。

### 第 3 步 — 阈值电压降低 50 mV（$V_{TH} = 0.65$ V）

$$V_{ov} = 0.973\ \mathrm{V} - 0.65\ \mathrm{V} = 0.323\ \mathrm{V} ,$$

$$I_{out} = (6.7\ \mathrm{mA/V^2})(0.323\ \mathrm{V})^2 = (6.7\ \mathrm{mA/V^2})(0.1044\ \mathrm{V^2}) = 0.700\ \mathrm{mA} ,$$

$$\Delta I_{out} = 0.700 - 0.5 = +0.200\ \mathrm{mA}, \qquad \frac{\Delta I_{out}}{I_{out}} = +40\ \% ,$$

此时饱和要求 $V_{DS} \ge 0.323$ V。由于平方律是凸函数，两个方向的变化并不对称。

### 第 4 步 — 小信号估算

$I_{out}$ 取决于 $V_{GS} - V_{TH}$，因此 $V_{TH}$ 的变化相当于 $V_{GS}$ 发生大小相等、方向相反的变化：

$$\Delta I_{out} \approx \frac{\partial I_{out}}{\partial V_{TH}}\Delta V_{TH} = -\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})\,\Delta V_{TH} = -g_m\,\Delta V_{TH} ,$$

其中

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS} ,$$

$$|\Delta I_{out}| \approx (3.66\ \mathrm{mS})(50\ \mathrm{mV}) = 0.183\ \mathrm{mA}, \qquad \frac{|\Delta I_{out}|}{I_{out}} \approx \frac{0.183}{0.5} = 37\ \% .$$

等价地，$\Delta I_{out}/I_{out} \approx -2\Delta V_{TH}/V_{ov} = -2(50\ \mathrm{mV})/(273\ \mathrm{mV}) = -37\ \%$。

线性估算值（$\mp 0.183$ mA）介于两个精确结果之间。差别来自二次项 $\tfrac12\mu_nC_{ox}(W/L)\Delta V_{TH}^2 = (6.7\ \mathrm{mA/V^2})(0.05\ \mathrm{V})^2 = 0.017$ mA，它在两种情况下都是加上去的：$-0.183 + 0.017 = -0.166$，$+0.183 + 0.017 = +0.200$ mA。

### 第 5 步 — 解释

50 mV 的偏移约为 $V_{TH}$ 的 7 %，却是 0.273 V 过驱动电压的 18 %，平方律又大致把这一比例加倍，因此电流变化约三分之一。由于 $V_{TH}$ 会随工艺和温度变化几十毫伏，由分压器提供固定的 $V_{GS}$ 所得到的电流很不确定；这正是采用电流镜（current mirror）的动机，电流镜复制的是一个基准电流。

### 结果

分压器使 $V_{GS} = 0.973$ V 保持不变（标称过驱动电压为 0.273 V），因此阈值电压的变化直接体现在过驱动电压上：

- $V_{TH}$ 升高 50 mV：$V_{ov} = 0.223$ V，$I_{out} \approx 0.334$ mA，变化 $-0.166$ mA（$-33$ %）；
- $V_{TH}$ 降低 50 mV：$V_{ov} = 0.323$ V，$I_{out} \approx 0.700$ mA，变化 $+0.20$ mA（$+40$ %）；
- 小信号估算：$\Delta I_{out} \approx -g_m\Delta V_{TH} = \mp(3.66\ \mathrm{mS})(50\ \mathrm{mV}) = \mp 0.18$ mA（$\mp 37$ %）。

因此 $I_{out}$ 的变化约为 ±35 %。

**常见错误。** 把阈值电压的变化与 $V_{GS}$ 或 $V_{TH}$ 相比（$50/973 \approx 5$ % 或 $50/700 \approx 7$ %），从而预测电流只变化百分之几。应该与 0.273 V 的过驱动电压相比。

**常见错误。** 认为电流与过驱动电压成线性关系，答出 $50\ \mathrm{mV}/0.273\ \mathrm{V} \approx 18$ %。平方律使相对变化加倍（$\Delta I/I \approx 2\Delta V_{ov}/V_{ov}$），结果约为 37 %。
