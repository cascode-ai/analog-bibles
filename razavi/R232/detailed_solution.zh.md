# 详细步骤 - R232

**思路。** 存在沟道长度调制时，电流镜输出管的电流比理想值大还是小，取决于它的 $V_{DS}$ 比基准器件的大还是小。用因子 $(1 + \lambda V_{DS})$ 重新计算每条支路的电流，求出这些电流所产生的电压；由于电流与电压相互依赖，需要迭代求解。负载电流是一个小的差值 $I_T/2 - I_{D5}$，因此它对这些修正非常敏感。

### 第 1 步 — 模型与 $\lambda = 0$ 的初始值

在饱和区，

$$I_D = \frac12\mu C_{ox}\frac{W}{L}\left(|V_{GS}| - |V_{TH}|\right)^2\left(1 + \lambda|V_{DS}|\right),$$

其中 $\lambda = 0.1\ \mathrm{V^{-1}}$（NMOS）和 $0.2\ \mathrm{V^{-1}}$（PMOS）。因此，两个 $V_{GS}$ 相同的饱和器件满足

$$\frac{I_{out}}{I_{in}} = \frac{(W/L)_{out}}{(W/L)_{in}}\cdot\frac{1 + \lambda|V_{DS,out}|}{1 + \lambda|V_{DS,in}|} .$$

由 $(W/L)_N = (W/L)_P = 20$，得 $\mu_nC_{ox}(W/L)_N = 2.68\ \mathrm{mA/V^2}$，$\mu_pC_{ox}(W/L)_P = 0.768\ \mathrm{mA/V^2}$。

**初始值（$\lambda = 0$）。** $I_T = 5I_{REF} = 500\ \mu$A，$I_{D1} = I_{D2} = 250\ \mu$A，$I_{D5} = I_{D6} = 2I_{REF} = 200\ \mu$A；对 $M_1$ 的漏极应用基尔霍夫电流定律（KCL），得 $I_{D3} = I_{D4} = 250 - 200 = 50\ \mu$A；此时 $V_P \approx 0.137$ V，PMOS 基准二极管的 $|V_{GS}| = 1.522$ V，$|V_{GS3}| = 1.161$ V。

### 第 2 步 — 基准器件 $M_0$

$M_0$ 为二极管连接（$V_{DS0} = V_{GS0}$），流过 $I_{REF} = 100\ \mu$A：

$$100\ \mu\mathrm{A} = \tfrac12(2.68\ \mathrm{mA/V^2})(V_{GS0} - 0.7)^2(1 + 0.1V_{GS0}) .$$

从 $\lambda = 0$ 时的值 $V_{GS0} = 0.973$ V 开始迭代：

$$
\begin{aligned}
&V_{GS0} = 0.973: & 1 + 0.1V_{GS0} &= 1.0973, & V_{ov0} &= \sqrt{\frac{2(100\ \mu\mathrm{A})}{(2.68\ \mathrm{mA/V^2})(1.0973)}} = 0.2608\ \mathrm{V},\\
&V_{GS0} = 0.9608: & 1 + 0.1V_{GS0} &= 1.0961, & V_{ov0} &= 0.2609\ \mathrm{V} \;\Rightarrow\; V_{GS0} = 0.961\ \mathrm{V} .
\end{aligned}
$$

因此 $V_{GS0} = 0.961$ V，基准因子为 $1 + \lambda_nV_{DS0} = 1.0961$。

### 第 3 步 — PMOS 基准支路

$2(W/L)_N$ 器件的 $V_{GS}$ 与 $M_0$ 相同，漏极电压为 $V_{DD} - |V_{GS,ref}|$，其中 $|V_{GS,ref}|$ 是 PMOS 基准二极管的栅源电压（$V_{SD} = |V_{GS,ref}|$）：

$$I_{2N} = 2I_{REF}\,\frac{1 + 0.1\,(3 - |V_{GS,ref}|)}{1.0961}, \qquad I_{2N} = \tfrac12(0.768\ \mathrm{mA/V^2})(|V_{GS,ref}| - 0.8)^2(1 + 0.2|V_{GS,ref}|) .$$

从 $|V_{GS,ref}| = 1.522$ V 开始迭代：

| 所用的 $\lvert V_{GS,ref}\rvert$ | 由 NMOS 得到的 $I_{2N}$ | $1 + 0.2\lvert V_{GS,ref}\rvert$ | 新的 $\lvert V_{GS,ref}\rvert = 0.8 + \sqrt{2I_{2N}/(0.768\,\mathrm{mA/V^2}\times\text{factor})}$ |
|---|---|---|---|
| 1.522 V | 209.4 μA | 1.3043 | 1.447 V |
| 1.447 V | 210.8 μA | 1.2893 | 1.453 V |
| 1.452 V | 210.7 μA | 1.2904 | 1.452 V |

因此 $I_{2N} = 210.7\ \mu$A，$|V_{GS,ref}| = 1.452$ V。$2(W/L)_N$ 器件的 $V_{DS} = 1.55$ V，大于 $M_0$ 的 0.96 V，因此它的电流比 $2I_{REF}$ 约大 5 %。

### 第 4 步 — 尾电流

尾电流管的 $V_{GS}$ 与 $M_0$ 相同，但 $V_{DS} = V_P$：

$$I_T = 5I_{REF}\,\frac{1 + 0.1V_P}{1 + 0.1V_{GS0}} = 500\ \mu\mathrm{A}\times\frac{1 + 0.1V_P}{1.0961} .$$

$I_T$ 与 $V_P$ 的关系很弱（0.1 V 的变化只使它改变 1 %）。取 $\lambda = 0$ 时的值 $V_P = 0.137$ V：

$$I_T = 500\ \mu\mathrm{A}\times\frac{1.0137}{1.0961} = 462.4\ \mu\mathrm{A}, \qquad \frac{I_T}{2} = 231.2\ \mu\mathrm{A} .$$

它低于 500 μA，是因为尾电流管的 $V_{DS}$（约 0.14–0.18 V）远小于 $M_0$ 的 $V_{DS} = V_{GS0} = 0.96$ V。

### 第 5 步 — 负载电流 $I_{D3}$（第一轮）

$M_5$ 的 $V_{SG}$ 与基准二极管相同，但 $V_{SD5} = V_{DD} - V_{D3} = |V_{GS3}|$；$M_3$ 是二极管连接器件，$V_{SD3} = |V_{GS3}|$：

$$I_{D5} = I_{2N}\,\frac{1 + 0.2|V_{GS3}|}{1 + 0.2|V_{GS,ref}|} = 210.7\ \mu\mathrm{A}\times\frac{1 + 0.2|V_{GS3}|}{1.2904}, \qquad I_{D3} = \tfrac12(0.768\ \mathrm{mA/V^2})(|V_{GS3}| - 0.8)^2(1 + 0.2|V_{GS3}|) .$$

对 $M_1$ 的漏极列 KCL，$I_{D3} + I_{D5} = I_T/2 = 231.2\ \mu$A，数值求解得 $|V_{GS3}| = 1.066$ V，此时

$$I_{D5} = 210.7\times\frac{1.2133}{1.2904} = 198.1\ \mu\mathrm{A}, \qquad I_{D3} = 231.2 - 198.1 = 33.1\ \mu\mathrm{A} .$$

$M_5$ 的 $V_{SD5} = 1.07$ V，小于基准二极管的 1.45 V，因此它提供的电流**小于** $I_{2N}$。

### 第 6 步 — 计入 $\lambda$ 和体效应（body effect）更新 $V_P$

$M_1$ 流过 $I_T/2$，$V_{DS1} = V_{D3} - V_P$。由 $V_{D3} = 3 - 1.066 = 1.934$ V 和 $V_P \approx 0.18$ V，得 $V_{DS1} \approx 1.75$ V：

$$V_{ov1} = \sqrt{\frac{2(231.2\ \mu\mathrm{A})}{(2.68\ \mathrm{mA/V^2})(1 + 0.1\times1.75)}} = \sqrt{\frac{462.4\ \mu\mathrm{A}}{3.149\ \mathrm{mA/V^2}}} = 0.383\ \mathrm{V} ,$$

由于因子 $1 + \lambda V_{DS1} = 1.175$，它小于 $\lambda = 0$ 时的 0.432 V，因此 $V_P$ 升高。利用 $V_P = 1.3 - V_{TH1} - V_{ov1}$、$V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_P} - 0.9487)$，并令 $u = \sqrt{0.9 + V_P}$：

$$u^2 + 0.45u - (0.9 + 1.3 - 0.7 + 0.4269 - 0.383) = u^2 + 0.45u - 1.5439 = 0,$$

$$u = \frac{-0.45 + \sqrt{0.2025 + 6.1756}}{2} = 1.0378, \qquad V_P = u^2 - 0.9 = 0.177\ \mathrm{V}$$

（$V_{TH1} = 0.740$ V）。

### 第 7 步 — 第二轮（收敛）

取 $V_P = 0.177$ V：

$$I_T = 500\ \mu\mathrm{A}\times\frac{1 + 0.0177}{1.0961} = 464.2\ \mu\mathrm{A}, \qquad \frac{I_T}{2} = 232.1\ \mu\mathrm{A} .$$

第 5 步的 KCL 方程现在给出 $|V_{GS3}| = 1.070$ V：

$$
\begin{aligned}
I_{D5} &= 210.7\times\frac{1 + 0.2(1.070)}{1.2904} = 210.7\times\frac{1.2139}{1.2904} = 198.2\ \mu\mathrm{A},\\
I_{D3} &= 0.384\ \mathrm{mA/V^2}\times(0.2696\ \mathrm{V})^2\times1.2139 = 33.9\ \mu\mathrm{A},\\
I_{D3} + I_{D5} &= 232.1\ \mu\mathrm{A} = I_T/2\ \checkmark
\end{aligned}
$$

用 $V_{DS1} = (3 - 1.070) - 0.176 = 1.754$ V 重新计算 $V_P$，得 $V_P = 0.176$ V，基本不变，因此迭代已经收敛：

$$I_T = 464\ \mu\mathrm{A}, \qquad I_{D3} = I_{D4} = 33.9\ \mu\mathrm{A}, \qquad V_{D3} = V_{D4} = 1.93\ \mathrm{V} .$$

### 第 8 步 — 解释与说明

- $I_T$ 比 $\lambda = 0$ 时的值低 7 %，半电流 232 μA 也比 250 μA 低 7 %。
- $I_{D5}$ 只比 200 μA 低 1 %（$2(W/L)_N$ 器件多出的 5 % 与 $M_5$ 损失的 6 % 几乎相互抵消）。
- 负载电流是一个**差值**，$232 - 198 = 34\ \mu$A，因此较大项中 7 % 的误差会变成差值中 32 % 的误差。所以，由电流源提供差分对大部分电流的设计对电流镜误差非常敏感。

**说明。** 与 $\lambda = 0$ 时一样，尾电流管的 $V_{DS} = V_P = 0.18$ V 低于其 0.26 V 的过驱动电压（overdrive voltage），因此它实际上会处于线性区；考虑这一点后得到 $I_T \approx 0.43$ mA，$M_3$/$M_4$ 中只有约 19 μA。上面的数值遵循题目要求，把所有晶体管都当作饱和处理。

### 结果

$$I_T \approx 464\ \mu\mathrm{A} \approx 0.46\ \mathrm{mA}\ (\text{instead of } 500\ \mu\mathrm{A}), \qquad I_{D3} = I_{D4} \approx 34\ \mu\mathrm{A}\ (\text{instead of } 50\ \mu\mathrm{A}) .$$

- 尾电流管工作在 $V_{DS} = V_P \approx 0.18$ V，而 $M_0$ 工作在 $V_{DS} = V_{GS0} = 0.96$ V：$I_T = 500\times\frac{1 + 0.1(0.18)}{1 + 0.1(0.96)} \approx 464\ \mu$A。
- $2(W/L)_N$ 器件向 PMOS 基准二极管提供 $\approx 211\ \mu$A（$|V_{GS}| \approx 1.45$ V）；$M_5$/$M_6$ 在 $V_{SD} \approx 1.07$ V 下提供 $\approx 198\ \mu$A。
- 负载电流：$232 - 198 \approx 34\ \mu$A，比理想值 50 μA 约小 30 %（漏极电压约为 1.93 V）。

**常见错误。** 把修正方向弄反，得到 $I_T > 500\ \mu$A。尾电流管的 $V_{DS}$（约 0.18 V）远**小于** $V_{DS0} = V_{GS0} \approx 0.96$ V，因此尾电流管的电流**更小**。

**常见错误。** 只修正尾电流管而不修正 $M_5$。如果 $M_5$ 流过基准二极管的全部 210.7 μA，负载电流就会算成 $232 - 211 = 21\ \mu$A；它较小的 $V_{SD}$（1.07 V 对 1.45 V）使其电流回落到约 198 μA。

**常见错误。** 以“λ 修正只有百分之几”为由，把负载电流仍取为 50 μA。负载电流是两个大电流之差，数值很小，因此百分之几的误差会变成 30 % 的误差。
