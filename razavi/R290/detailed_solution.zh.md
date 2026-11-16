# 详细步骤 - R290

**思路。** 输出只能上升到 PMOS 电流源退出饱和区为止，也只能下降到 $M_1$ 退出饱和区为止。上限确定了 PMOS 的过驱动电压，再通过 $I_D = 1$ mA 下的平方律确定其宽长比。下限就是 $M_1$ 的过驱动电压，两个极限之差就是最大峰峰值摆幅。

### 第 1 步 — 两个饱和条件

两个晶体管都流过 $I_{D1} = 1$ mA（$R_S$ 不影响直流电平）。

- **PMOS 饱和：** $V_{SD} \ge V_{SG} - |V_{THP}|$，即 $V_{DD} - V_{out} \ge |V_{ov,P}|$，因此
$$V_{out} \le V_{DD} - |V_{ov,P}|.$$
- **$M_1$ 饱和：** $V_{DS1} \ge V_{GS1} - V_{TH1}$，即
$$V_{out} \ge V_{ov1} = V_{GS1} - V_{TH1}.$$

### 第 2 步 — 由上限求 PMOS 的过驱动电压

最大允许输出为 2.6 V，因此

$$|V_{ov,P}| = V_{DD} - V_{out,max} = 3\ \mathrm{V} - 2.6\ \mathrm{V} = 0.4\ \mathrm{V}.$$

阈值电压（threshold voltage）并不出现在这一条件中；它只决定 PMOS 栅极必须偏置在什么电压：

$$V_{G,P} = V_{DD} - |V_{THP}| - |V_{ov,P}| = 3 - 0.8 - 0.4 = 1.8\ \mathrm{V}.$$

### 第 3 步 — PMOS 的宽长比

由 $I_D = \tfrac12\mu_pC_{ox}(W/L)_P|V_{ov,P}|^2$（忽略 λ）：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_P &= \frac{2I_D}{\mu_pC_{ox}|V_{ov,P}|^2} = \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2}\\
&= \frac{2\times10^{-3}\ \mathrm{A}}{(38.4\times10^{-6}\ \mathrm{A/V^2})(0.16\ \mathrm{V^2})} = \frac{2\times10^{-3}}{6.144\times10^{-6}} = 325.5 .
\end{aligned}
$$

若 $L = 0.5\ \mu\mathrm{m}$，则 $W \approx 163\ \mu\mathrm{m}$，即 $(W/L)_P \approx 163/0.5$：这个值很大，因为空穴的迁移率（mobility）约比电子低 3.5 倍，而且要求的过驱动电压很小。

（若计入沟道长度调制，取 $\lambda_P = 0.2\ \mathrm{V^{-1}}$，在 $V_{SD} = 0.4$ V 处电流将增大到 $1 + 0.08$ 倍，所需的宽长比将降至约 $325.5/1.08 \approx 301$。）

### 第 4 步 — 由 $M_1$ 确定输出下限

$M_1$ 流过 1 mA，$(W/L)_1 = 50/0.5 = 100$：

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)_1}} = \sqrt{\frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(100)}}\\
&= \sqrt{\frac{2\times10^{-3}}{1.34\times10^{-2}}}\ \mathrm{V} = \sqrt{0.149}\ \mathrm{V} = 0.386\ \mathrm{V}.
\end{aligned}
$$

该级的增益很高，因此即使输出满摆幅，$V_{GS1}$ 也基本保持在其偏置值，只要满足下式，$M_1$ 就保持饱和：

$$V_{out} \ge V_{ov1} = 0.386\ \mathrm{V}.$$

### 第 5 步 — 最大峰峰值摆幅

$$V_{out,max} - V_{out,min} = 2.6\ \mathrm{V} - 0.386\ \mathrm{V} = 2.21\ \mathrm{V}\ \text{peak-to-peak}.$$

为了对称地利用整个范围，静态输出应位于中点 $(2.6 + 0.386)/2 \approx 1.49$ V。

### 结果

- **PMOS 的宽长比：** $(W/L)_P \approx 326$（例如 $163\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$）。它由 PMOS 的过驱动电压 $|V_{ov,P}| = V_{DD} - 2.6\ \mathrm{V} = 0.4$ V 和 $1\ \mathrm{mA} = \tfrac12(38.4\ \mu\mathrm{A/V^2})(W/L)_P(0.4\ \mathrm{V})^2$ 得到。PMOS 栅极偏置在约 1.8 V。
- **下限：** $M_1$ 饱和要求 $V_{out} \ge V_{GS1} - V_{TH1} = \sqrt{2I_D/[\mu_nC_{ox}(W/L)_1]} = 0.386$ V。
- **最大摆幅：** $2.6 - 0.386 \approx 2.2$ V 峰峰值（输出在 ≈ 0.39 V 与 2.6 V 之间）。

**常见错误。** 把阈值电压算进电压余度（headroom），例如把 PMOS 的过驱动电压取为 $V_{DD} - 2.6\ \mathrm{V} - |V_{THP}|$。漏极与电源之间只需保留一个**过驱动电压**，而不是一个阈值电压；若计入 $V_{TH}$，这里将得到负的过驱动电压。

**常见错误。** 对 PMOS 使用 $\mu_nC_{ox}$。电流源是 p 沟道器件，因此应采用 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$，这使它比相同过驱动电压的 NMOS 宽约 3.5 倍。

**常见错误。** 把下限取为 0 V 或 $V_{TH}$。当 $M_1$ 的漏极电压降到其过驱动电压 0.386 V 以下时，它就退出饱和区。
