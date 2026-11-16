# 详细步骤 - R411

**思路。** 由基尔霍夫电流定律（KCL）可知 0.5 mA 的电流在 $R_1$ 和 $R_2$ 中如何分配，由此得到 $V_{out}$ 和 $M_1$ 的源极电压随 $R_1$ 变化的关系。于是每个晶体管的饱和条件都变成关于 $R_1$ 的不等式，其中最紧的边界给出所求范围。最后由 $V_{in} = V_B + V_{GS1}$（计入体效应）得到相应的输入范围。

### 第 1 步 — 电流分配

把 $M_1$ 的漏极（即 $M_2$ 的栅极）记为节点 A，把 $R_2$ 与 $R_1$ 的连接点记为节点 B。在 $V_{out}$ 处，$M_4$ 提供 0.5 mA，$M_2$ 吸收 0.5 mA，因此

$$I_{R2} = |I_{D4}| - I_{D2} = 0.5 - 0.5 = 0 ,$$

$R_2$ 上没有压降，故 $V_{out} = V_B$。在 B 处，$M_1$ 送入 $I_{D1} = 0.5$ mA，$R_2$ 不提供电流，因此该电流全部流过 $R_1$：

$$V_B = V_{out} = I_{D1}R_1 = (0.5\ \mathrm{mA})\,R_1 .$$

### 第 2 步 — 栅源电压与过驱动电压

每个 NMOS 都有 $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$，且电流均为 0.5 mA，因此每个 NMOS 都有下面的过驱动电压；$M_1$ 的阈值电压（threshold voltage）虽因体效应而升高，但同样如此：

$$V_{ov,N} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

$M_2$ 的源极和衬底都接地，因此

$$V_{GS2} = V_{TH0} + V_{ov,N} = 0.7 + 0.273 = 0.973\ \mathrm{V}\ \Longrightarrow\ V_A = 0.973\ \mathrm{V},$$

它是固定的，与 $R_1$ 无关。对于 PMOS 电流源 $M_3$、$M_4$：

$$|V_{ov,P}| = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.260\ \mathrm{V^2}} = 0.510\ \mathrm{V}.$$

### 第 3 步 — 逐个检查晶体管的饱和条件

**$M_2$**（漏极接 $V_{out}$，源极接地）：

$$V_{out} \ge V_{ov,N}\ \Longrightarrow\ (0.5\ \mathrm{mA})\,R_1 \ge 0.273\ \mathrm{V}\ \Longrightarrow\ R_1 \ge 546\ \Omega .$$

**$M_1$**（漏极接 A，源极接 B）：

$$
\begin{aligned}
V_A - V_B &\ge V_{ov,N}\\
V_B &\le 0.973 - 0.273 = 0.700\ \mathrm{V}\\
(0.5\ \mathrm{mA})\,R_1 &\le 0.700\ \mathrm{V}\ \Longrightarrow\ R_1 \le 1.40\ \mathrm{k\Omega}.
\end{aligned}
$$

（由于 $V_A - V_{ov,N} = V_{TH0}$ 严格成立，该限制就是 $V_B \le V_{TH0} = 0.7$ V。）

**$M_3$：** 对于任何 $R_1$，都有 $|V_{DS3}| = 3 - 0.973 = 2.03\ \mathrm{V} \ge 0.510$ V，因此它总是饱和的。

**$M_4$：** $3 - V_{out} \ge 0.510\ \Longrightarrow\ V_{out} \le 2.49\ \mathrm{V}\ \Longrightarrow\ R_1 \le 4.98\ \mathrm{k\Omega}$，比 $M_1$ 的限制宽松得多。

**综合：**

$$546\ \Omega \le R_1 \le 1.40\ \mathrm{k\Omega},$$

其中下限由 $M_2$ 决定，上限由 $M_1$ 决定：$R_1$ 太小会使 $V_{out}$ 过低，$M_2$ 无法饱和；太大则会把 B 抬向 A，挤压 $M_1$ 的 $V_{DS}$。（若允许 $M_1$ 进入线性区，则只要 $V_B < V_A$，即直到 $R_1 \approx 1.95\ \mathrm{k\Omega}$，这些电流都能流通，但这违反了饱和要求。）

### 第 4 步 — 范围两端的输入电压

$V_{in} = V_B + V_{GS1}$，其中 $M_1$ 的源极比接地的衬底高 $V_B$：

$$V_{TH1} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_B} - \sqrt{2|\phi_F|}\right), \qquad V_{GS1} = V_{TH1} + 0.273\ \mathrm{V}.$$

**下端，$R_1 = 546\ \Omega$，$V_B = 0.273$ V：**

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.273} - \sqrt{0.9}\right) = 0.7 + 0.45\,(1.0831 - 0.9487) = 0.7 + 0.060 = 0.760\ \mathrm{V},\\
V_{in} &= 0.273 + 0.760 + 0.273 = 1.31\ \mathrm{V}.
\end{aligned}
$$

**上端，$R_1 = 1.40\ \mathrm{k\Omega}$，$V_B = 0.700$ V：**

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.7} - \sqrt{0.9}\right) = 0.7 + 0.45\,(1.2649 - 0.9487) = 0.7 + 0.142 = 0.842\ \mathrm{V},\\
V_{in} &= 0.700 + 0.842 + 0.273 = 1.82\ \mathrm{V}.
\end{aligned}
$$

$V_{in}$ 随 $R_1$ 单调上升（$V_B$ 和 $V_{TH1}$ 都增大），因此输入范围约为 1.31 V 到 1.82 V。若不计体效应，则为 $V_B + 0.973$ V，即 1.25 V 到 1.67 V。

| | $R_1$ | $V_B = V_{out}$ | $V_{TH1}$ | $V_{in}$ | 限制器件 |
|---|---|---|---|---|---|
| 下端 | 546 Ω | 0.273 V | 0.760 V | 1.31 V | $M_2$ 处于饱和边缘 |
| 上端 | 1.40 kΩ | 0.700 V | 0.842 V | 1.82 V | $M_1$ 处于饱和边缘 |

### 结果

$$546\ \Omega \lesssim R_1 \lesssim 1.4\ \mathrm{k\Omega}, \qquad 1.31\ \mathrm{V} \lesssim V_{in} \lesssim 1.82\ \mathrm{V}$$

（计入 $M_1$ 的体效应；不计时为 1.25–1.67 V）。$R_2$ 中没有电流，因此 $V_{out} = V_B = (0.5\ \mathrm{mA})R_1$。$M_2$ 要求 $V_{out} \ge 0.273$ V（下限），$M_1$ 要求 $V_B \le V_A - 0.273\ \mathrm{V} = 0.70$ V（上限）。

**常见错误。** 认为 $R_2$ 中有电流。由于 $|I_{D4}| = I_{D2}$，输出节点的 KCL 表明没有电流留给 $R_2$，因此 $V_{out} = V_B$。

**常见错误。** 由 $M_4$ 得出上限（$R_1 \approx 5$ kΩ），而忽视了 $M_1$。节点 A 被钳定在 0.973 V，因此远在 $M_4$ 退出饱和之前，$M_1$ 的 $V_{DS} = 0.973 - V_B$ 就已经不够了。

**常见错误。** 计算 $V_{in}$ 时忽略体效应。$M_1$ 的源极比其衬底高 0.27–0.70 V，这使 $V_{TH1}$ 升高 0.06–0.14 V，从而使整个输入范围上移。
