# 详细步骤 - R234

**思路。** $V_X$ 是二极管连接（diode-connected）的 $M_1$ 的 $V_{GS}$，由 $I_{REF}$ 决定。若 $V_Y = V_X$，则 $M_2$ 的 $V_{GS}$ 和 $V_{DS}$ 都与 $M_1$ 相同，从而精确地复制 $I_{REF}$，因此（尺寸相同的）$M_3$ 需要与 $M_1$ 相同的 $V_{GS}$。再从 $V_b$ 到地列基尔霍夫电压定律（KVL）方程，即可求出 $V_b$。

### 第 1 步 — 由基准器件求 $V_X$

三个器件的 $W/L = 40/0.5 = 80$；由于 $\gamma = 0$，$V_{TH} = 0.7$ V，即使对源极高于地电位的 $M_3$ 也是如此。$M_1$ 为二极管连接且处于饱和，因此

$$I_{REF} = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS1} - V_{TH}\right)^2, \qquad \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(80) = 10.72\ \mathrm{mA/V^2} ,$$

$$V_{ov} = \sqrt{\frac{2I_{REF}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2(0.3\ \mathrm{mA})}{10.72\ \mathrm{mA/V^2}}} = \sqrt{0.05597\ \mathrm{V^2}} = 0.237\ \mathrm{V} ,$$

$$V_X = V_{GS1} = V_{TH} + V_{ov} = 0.7 + 0.237 = 0.937\ \mathrm{V} .$$

### 第 2 步 — $V_Y = V_X$ 对 $M_2$ 和 $M_3$ 意味着什么

$M_2$ 的 $V_{GS2} = V_{GS1}$，而由 $V_Y = V_X$ 又有 $V_{DS2} = V_{DS1}$。它的尺寸、$V_{GS}$ 和 $V_{DS}$ 都与 $M_1$ 相同，因此

$$I_{D2} = I_{REF} = 0.3\ \mathrm{mA}$$

（即使存在沟道长度调制，这也是精确的复制）。$M_3$ 与 $M_2$ 串联，因此 $I_{D3} = 0.3$ mA；它的尺寸、电流和阈值电压（threshold voltage）都与 $M_1$ 相同，因此

$$V_{GS3} = V_{GS1} = 0.937\ \mathrm{V} .$$

### 第 3 步 — 用 KVL 求 $V_b$

$$V_b = V_{GS3} + V_Y = V_{GS1} + V_{GS1} = 2V_{GS1} = 2(0.937\ \mathrm{V}) = 1.873\ \mathrm{V} .$$

$V_b$ 等于两个流过 $I_{REF}$ 的二极管连接器件串联后两端的电压，实际中也常用这种方法来产生它。

### 第 4 步 — 验证

- **$M_2$ 饱和：** $V_{DS2} = V_Y = 0.937$ V $\ge V_{ov} = 0.237$ V ✓。
- **$M_3$ 饱和**要求 $V_P \ge V_Y + V_{ov} = 0.937 + 0.237 = 1.173$ V，等价于 $V_P \ge V_b - V_{TH} = 1.873 - 0.7 = 1.173$ V。这是上方电路必须在 P 点留出的最低电压：比共源共栅结构的最小值 $2V_{ov}$ 多出一个阈值电压，这是令 $V_Y = V_X$ 所付出的代价。

### 结果

$$V_X = V_{GS1} = 0.7 + \sqrt{\frac{2(0.3\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(80)}} = 0.937\ \mathrm{V}, \qquad V_b = V_Y + V_{GS3} = 2V_{GS} \approx 1.87\ \mathrm{V} .$$

**常见错误。** 取 $V_b = V_{GS} + V_{ov}$ 或 $V_b = V_{GS} + V_{TH}$，这是使输出摆幅（output swing）最大的偏置方式。它给出的是 $V_Y = V_{ov}$ 或 $V_{TH}$，而不是 $V_Y = V_X$；题目要求的条件需要 $V_Y = V_{GS}$，因此 $V_b = 2V_{GS}$。

**常见错误。** 用 $W/L = 40$ 或 $100$，而不是 $40/0.5 = 80$（$\mu_nC_{ox}W/L = 10.72\ \mathrm{mA/V^2}$）。

**常见错误。** 因为 $M_3$ 的源极高于地电位，就给 $V_{TH3}$ 加上体效应（body effect）引起的增量。由于 $\gamma = 0$，$V_{GS3} = V_{GS1}$ 精确成立。
