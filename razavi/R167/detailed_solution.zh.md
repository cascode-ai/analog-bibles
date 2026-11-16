# 详细步骤 - R167

**思路。** 列出差分对的常规方程（尾节点的 KCL、输入回路的 KVL、平方律），其中 $M_1$ 的器件参数为 $\beta$，$M_2$ 的为 $2\beta$。先求出几个关键点（零输入、电流相等、完全导向任一边），再求出整条曲线 $I_{D1}(V_{in1} - V_{in2})$。

### 第 1 步 — 不对称差分对的方程

令 $\Delta V = V_{in1} - V_{in2}$；$M_2$ 的器件参数为 $2\beta$。由 $I_{D1} + I_{D2} = I_{SS}$、$\Delta V = V_{GS1} - V_{GS2}$ 和平方律，并设两管都处于饱和区（saturation region）、$\lambda = 0$、阈值相等，得：

$$V_{GS1} = V_{TH} + \sqrt{\frac{2I_{D1}}{\beta}}, \qquad V_{GS2} = V_{TH} + \sqrt{\frac{2I_{D2}}{2\beta}} = V_{TH} + \sqrt{\frac{I_{D2}}{\beta}} ,$$

因此

$$\Delta V = \sqrt{\frac{2I_{D1}}{\beta}} - \sqrt{\frac{I_{D2}}{\beta}} .$$

较宽的器件流过相同电流所需的过驱动电压较小：这就是不对称性的来源。

### 第 2 步 — 差分输入为零

当 $V_{in1} = V_{in2}$ 时，两个器件的过驱动电压 $V_{ov}$ 相同，因此它们的电流之比等于器件参数之比：

$$I_{D1} = \tfrac12\beta V_{ov}^2, \qquad I_{D2} = \tfrac12(2\beta)V_{ov}^2 = 2I_{D1}.$$

由 $I_{D1} + I_{D2} = I_{SS}$：

$$I_{D1} = \frac{I_{SS}}{3}, \qquad I_{D2} = \frac{2I_{SS}}{3}.$$

### 第 3 步 — 电流相等时的输入

在 KVL 关系式中令 $I_{D1} = I_{D2} = I_{SS}/2$：

$$
\begin{aligned}
\Delta V &= \sqrt{\frac{2(I_{SS}/2)}{\beta}} - \sqrt{\frac{I_{SS}/2}{\beta}}\\
&= \sqrt{\frac{I_{SS}}{\beta}} - \frac{1}{\sqrt2}\sqrt{\frac{I_{SS}}{\beta}}\\
&= \left(1 - \frac{1}{\sqrt2}\right)\sqrt{\frac{I_{SS}}{\beta}} \approx 0.293\sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

$V_{in1}$ 必须**高于** $V_{in2}$，才能使窄器件的电流增大到与宽器件相同；这一偏移的作用相当于差分对的输入失调电压。

### 第 4 步 — 过渡区的边界（完全导向）

**$M_1$ 刚好截止**（$I_{D1} = 0$，$I_{D2} = I_{SS}$）：

$$\Delta V = 0 - \sqrt{\frac{I_{SS}}{\beta}} = -\sqrt{\frac{I_{SS}}{\beta}} .$$

**$M_2$ 刚好截止**（$I_{D1} = I_{SS}$，$I_{D2} = 0$）：

$$\Delta V = \sqrt{\frac{2I_{SS}}{\beta}} - 0 = +\sqrt{\frac{2I_{SS}}{\beta}} \approx 1.414\sqrt{\frac{I_{SS}}{\beta}} .$$

所以以 $\sqrt{I_{SS}/\beta}$ 为单位，过渡区从 $-1$ 延伸到 $+1.414$：它不以零为中心（其中点位于 $+0.207$），而位于 $+0.293$ 的交点也不在其中点。由两个 $W/L$ 器件构成的对称差分对在 $\pm\sqrt{2I_{SS}/\beta}$ 处完全导向，并在零点相交。

### 第 5 步 — 完整的特性

令 $a = \sqrt{I_{D1}}$，$b = \sqrt{I_{D2}}$，$s = \sqrt{\beta}\,\Delta V$。KVL 关系式和 KCL 变为

$$\sqrt2\,a - b = s, \qquad a^2 + b^2 = I_{SS}.$$

代入 $b = \sqrt2\,a - s$：

$$
\begin{aligned}
a^2 + (\sqrt2\,a - s)^2 &= I_{SS}\\
3a^2 - 2\sqrt2\,s\,a + s^2 - I_{SS} &= 0\\
a &= \frac{2\sqrt2\,s + \sqrt{8s^2 - 12(s^2 - I_{SS})}}{6} = \frac{\sqrt2\,s + \sqrt{3I_{SS} - s^2}}{3},
\end{aligned}
$$

这里取 $a \ge 0$ 的根。利用归一化输入 $v = \Delta V/\sqrt{I_{SS}/\beta}$（因此 $s = v\sqrt{I_{SS}}$）：

$$\frac{I_{D1}}{I_{SS}} = \frac{\left(\sqrt2\,v + \sqrt{3 - v^2}\right)^2}{9}, \qquad I_{D2} = I_{SS} - I_{D1}, \qquad -1 \le v \le \sqrt2 .$$

验证：$v = 0$ 时得 $3/9 = 1/3$；$v = 1 - 1/\sqrt2$ 时得 $1/2$；$v = -1$ 时得 0；$v = \sqrt2$ 时得 1。

| $v = \Delta V/\sqrt{I_{SS}/\beta}$ | $I_{D1}/I_{SS}$ | $I_{D2}/I_{SS}$ | 说明 |
|---|---|---|---|
| $\le -1$ | 0 | 1 | $M_1$ 截止 |
| −0.5 | 0.10 | 0.90 | |
| 0 | 0.333 | 0.667 | $I_{D2} = 2I_{D1}$ |
| 0.293 | 0.500 | 0.500 | 交点 |
| 0.5 | 0.62 | 0.38 | |
| 1.0 | 0.89 | 0.11 | |
| $\ge 1.414$ | 1 | 0 | $M_2$ 截止 |

**交点处的斜率。** 每个器件流过 $I_{SS}/2$，因此 $g_{m1} = \sqrt{2\beta(I_{SS}/2)} = \sqrt{\beta I_{SS}}$，$g_{m2} = \sqrt{2(2\beta)(I_{SS}/2)} = \sqrt2\sqrt{\beta I_{SS}}$。小的输入电压分配在串联的两个栅源电压上：

$$\frac{dI_{D1}}{d\Delta V} = \frac{1}{1/g_{m1} + 1/g_{m2}} = \frac{\sqrt2}{1 + \sqrt2}\sqrt{\beta I_{SS}} = 0.586\sqrt{\beta I_{SS}} .$$

### 第 6 步 — 曲线草图的描述

- 处处有 $I_{D1} + I_{D2} = I_{SS}$，因此两条曲线关于 $I_{SS}/2$ 这一水平线互为镜像。
- 当 $\Delta V \le -\sqrt{I_{SS}/\beta}$ 时：$I_{D1} = 0$，$I_{D2} = I_{SS}$。
- $I_{D1}$ 上升（$I_{D2}$ 下降），在 $\Delta V = 0$ 处分别经过 $I_{SS}/3$ 和 $2I_{SS}/3$。
- 两条曲线在 $\Delta V = 0.293\sqrt{I_{SS}/\beta}$ 处以 $I_{SS}/2$ 相交，交点位于原点**右侧**。
- 当 $\Delta V \ge \sqrt{2I_{SS}/\beta}$ 时：$I_{D1} = I_{SS}$，$I_{D2} = 0$。

过渡区在零点左侧延伸 $1\cdot\sqrt{I_{SS}/\beta}$，在右侧却延伸 $1.414\sqrt{I_{SS}/\beta}$，因此与对称差分对不同，每条曲线关于交点**不是**点对称的。

### 结果

两个电流相等的条件是

$$V_{in1} - V_{in2} = \left(1 - \frac{1}{\sqrt2}\right)\sqrt{\frac{I_{SS}}{\beta}} \approx 0.29\sqrt{\frac{I_{SS}}{\beta}}\qquad (V_{in1} \text{ higher}).$$

曲线草图：$I_{D1} + I_{D2} = I_{SS}$。零输入时 $I_{D1} = I_{SS}/3$，$I_{D2} = 2I_{SS}/3$。当 $V_{in1} - V_{in2} \le -\sqrt{I_{SS}/\beta}$ 时 $M_1$ 截止，当 $V_{in1} - V_{in2} \ge \sqrt{2I_{SS}/\beta}$ 时 $M_2$ 截止。交点向原点右侧平移，过渡区相对于零点不对称。

**常见错误。** 认为在 $V_{in1} = V_{in2}$ 时两个电流相等。$V_{GS}$ 相等时电流与 $W/L$ 成正比，因此较宽的 $M_2$ 流过两倍的电流。

**常见错误。** 方向弄反：把交点放在 $V_{in1} - V_{in2}$ 为负的位置，或者写成零输入时 $I_{D1} = 2I_{D2}$。零输入时**较宽**的器件电流较大，因此必须提高 $V_{in1}$ 才能使差分对平衡。
