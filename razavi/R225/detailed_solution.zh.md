# 详细步骤 - R225

**思路。** $M_1$ 饱和且 $\lambda = 0$，由平方律可求出得到 $I_{out} = 0.5$ mA 所需的 $V_{GS}$。栅极不取电流，因此 $R_1$–$R_2$ 是一个空载分压器，其输出必须等于该 $V_{GS}$，由此确定 $R_2/R_1$。

### 第 1 步 — 由平方律求所需的过驱动电压（overdrive voltage）

源极和衬底接地，因此 $V_{GS} = V_G$，$V_{TH} = 0.7$ V。由 $W/L = 50\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 100$，

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} ,$$

再由 $I_{out} = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2$ 得

$$V_{ov} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.07463\ \mathrm{V^2}} = 0.273\ \mathrm{V} ,$$

$$V_{GS} = V_{TH} + V_{ov} = 0.7\ \mathrm{V} + 0.273\ \mathrm{V} = 0.973\ \mathrm{V} .$$

### 第 2 步 — 分压器

栅极不取直流电流，因此

$$V_{GS} = V_{DD}\,\frac{R_2}{R_1 + R_2}, \qquad \frac{R_2}{R_1 + R_2} = \frac{V_{GS}}{V_{DD}} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V}} = 0.324 .$$

利用 $\frac{R_2}{R_1 + R_2} = \frac{R_2/R_1}{1 + R_2/R_1}$，解出 $R_2/R_1$：

$$
\begin{aligned}
\frac{R_2}{R_1}\cdot V_{DD} &= V_{GS}\left(1 + \frac{R_2}{R_1}\right),\\
\frac{R_2}{R_1}\left(V_{DD} - V_{GS}\right) &= V_{GS},\\
\frac{R_2}{R_1} &= \frac{V_{GS}}{V_{DD} - V_{GS}} ,
\end{aligned}
$$

即 $R_2$ 与 $R_1$ 两端电压之比（二者流过相同的电流）。数值计算：

$$\frac{R_2}{R_1} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V} - 0.973\ \mathrm{V}} = \frac{0.973}{2.027} = 0.480 .$$

### 第 3 步 — 验证

- **回代验证。** 取 $R_2/R_1 = 0.480$，则 $V_{GS} = 3\ \mathrm{V}\times\frac{0.480}{1.480} = 0.973$ V，$I_{out} = \tfrac12(13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V})^2 = 0.500$ mA。✓
- **饱和条件**要求 $V_{DS} \ge V_{ov} = 0.273$ V，这是对 $I_{out}$ 所流入的电路的要求，题目已说明该条件成立。
- **只确定了比值。** 电阻越大，从电源吸取的电流越小（例如取 $R_1 = 20.8\ \mathrm{k}\Omega$、$R_2 = 10\ \mathrm{k}\Omega$ 时，电流为 $3\ \mathrm{V}/30.8\ \mathrm{k}\Omega \approx 0.1$ mA），但栅极节点对噪声和漏电也更敏感。

### 结果

$$V_{GS} = 0.7 + 0.273 = 0.973\ \mathrm{V}, \qquad \frac{R_2}{R_1 + R_2} = 0.324, \qquad \frac{R_2}{R_1} = \frac{V_{GS}}{V_{DD} - V_{GS}} \approx 0.48 .$$

**常见错误。** 把分压关系写反，即 $V_{GS} = V_{DD}R_1/(R_1 + R_2)$，得到 $R_2/R_1 \approx 2.1$。$R_2$ 是从栅极接到**地**的电阻。

**常见错误。** 漏掉平方律中的因子 $\tfrac12$，得到 $V_{ov} = \sqrt{0.5/13.4} = 0.193$ V，$V_{GS} = 0.893$ V，$R_2/R_1 \approx 0.42$。

**常见错误。** 令 $V_{GS} = V_{TH}$（“晶体管刚好导通”），此时电流为零；要得到 0.5 mA，需要在阈值电压（threshold voltage）之上再加 0.273 V 的过驱动电压。
