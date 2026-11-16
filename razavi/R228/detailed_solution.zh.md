# 详细步骤 - R228

**思路。** 分压器固定了 $V_{GS}$，而 $V_{TH}$ 与温度无关，因此在 300 K 和 370 K 下过驱动电压相同。于是按平方律（square law）计算的电流与 $\mu_n$ 成正比，温度变化使 $I_{out}$ 按 $\mu_n(370\ \mathrm{K})/\mu_n(300\ \mathrm{K})$ 的比例缩放。

### 第 1 步 — 300 K 时的标称设计点

栅极不取电流，因此 $V_{GS} = V_{DD}R_2/(R_1 + R_2)$ 只取决于 $V_{DD}$ 和电阻比值，而电阻比值不随温度变化（两个电阻一起漂移）：**两个温度下的 $V_{GS}$ 相同**。由 $W/L = 50/0.5 = 100$，

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} ,$$

再由 $I_{out} = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$（$\lambda = 0$）得

$$V_{ov} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V}, \qquad V_{GS} = V_{TH} + V_{ov} = 0.7 + 0.273 = 0.973\ \mathrm{V} .$$

### 第 2 步 — 随温度变化的量

$$I_{out}(T) = \frac12\mu_n(T)\,C_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2 .$$

$C_{ox}$ 和 $W/L$ 由几何结构决定，$V_{GS} = 0.973$ V 由分压器固定，并且按假设 $V_{TH} = 0.7$ V 与 $T$ 无关。因此过驱动电压保持 0.273 V，且

$$\frac{I_{out}(370\ \mathrm{K})}{I_{out}(300\ \mathrm{K})} = \frac{\mu_n(370\ \mathrm{K})}{\mu_n(300\ \mathrm{K})} .$$

### 第 3 步 — 迁移率（mobility）之比

由 $\mu_n \propto T^{-3/2}$：

$$\frac{\mu_n(370\ \mathrm{K})}{\mu_n(300\ \mathrm{K})} = \left(\frac{370}{300}\right)^{-3/2} ,$$

$$
\begin{aligned}
\frac{370}{300} &= 1.2333,\\
\left(1.2333\right)^{3/2} &= 1.2333\times\sqrt{1.2333} = 1.2333\times1.1106 = 1.3697,\\
\left(1.2333\right)^{-3/2} &= \frac{1}{1.3697} = 0.730 .
\end{aligned}
$$

370 K 时的迁移率是 300 K 时的 73 %，因此 $\mu_nC_{ox}$ 从 134 降到 $134\times0.730 = 97.8\ \mu\mathrm{A/V^2}$。

### 第 4 步 — 新的电流值

$$I_{out}(370\ \mathrm{K}) = 0.730\times0.5\ \mathrm{mA} = 0.365\ \mathrm{mA} .$$

直接用 370 K 时的平方律计算：

$$I_{out} = \frac12(97.8\ \mu\mathrm{A/V^2})(100)(0.273\ \mathrm{V})^2 = (4.89\ \mathrm{mA/V^2})(0.0746\ \mathrm{V^2}) = 0.365\ \mathrm{mA}\ \checkmark$$

$$\Delta I_{out} = 0.365 - 0.5 = -0.135\ \mathrm{mA}, \qquad \frac{\Delta I_{out}}{I_{out}} = 0.730 - 1 = -27\ \% .$$

栅极电压固定时，迁移率的下降得不到任何补偿。（在实际器件中，$|V_{TH}|$ 也会随温度降低，从而部分抵消这一影响；本题排除了这一效应。）温度升高 70 K 电流就变化四分之一以上，这是固定 $V_{GS}$ 偏置不适合用作电流源（current source）的又一个原因。

### 结果

过驱动电压保持 0.273 V，因此 $I_{out} \propto \mu_n \propto T^{-3/2}$：

$$I_{out}(370\ \mathrm{K}) = 0.5\ \mathrm{mA}\times\left(\frac{370}{300}\right)^{-3/2} = 0.5\ \mathrm{mA}\times0.730 \approx 0.365\ \mathrm{mA} .$$

$I_{out}$ **下降约 0.135 mA，即约 27 %。**

**常见错误。** 用 $(370/300)^{+3/2} = 1.37$，预测电流**增大** 37 %。迁移率随温度升高而**降低**，因此在过驱动电压固定时，电流减小。

**常见错误。** 像计算 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ 那样，使用迁移率之比的平方根 $(370/300)^{-1/2} = 0.90$（下降 10 %）。在 $V_{GS}$ 和 $V_{TH}$ 固定时，电流本身与 $\mu_n$ 成正比。
