# 详细步骤 - R260

**思路。** 沿电路追踪各直流电压，求出 $M_2$ 的漏源电压。然后利用计入沟道长度调制（channel-length modulation）的平方律（square law）模型，比较 $M_1$ 和 $M_2$ 的电流——两者的栅源电压相同，但漏源电压不同。

### 第 1 步 — $M_2$ 的漏源电压

二极管连接的 $M_0$ 和 $M_1$ 流过 $I_{REF}$，因此 $V_{b1} = V_{GS0} + V_{GS1}$，$V_X = V_{GS1} = V_{GS2}$。跟随器 $M_4$ 把 $M_3$ 的栅极电压设为 $V_{G3} = V_{b1} - V_{GS4}$，$M_3$ 把它的电流传给 $M_2$，因此 $I_{out} = I_{D2}$。$M_2$ 的漏极比 $M_3$ 的栅极低一个 $V_{GS3}$：

$$V_{DS2} = V_{G3} - V_{GS3} = V_{GS0} + V_{GS1} - V_{GS4} - V_{GS3}.$$

由于 $\gamma = 0$，尽管 $M_0$ 和 $M_3$ 的源极不接地，它们的阈值电压（threshold voltage）仍然相同。二者完全相同，且电流几乎相同（$I_{REF}$ 和 $I_{out} \approx I_{REF}$），因此 $V_{GS3} \approx V_{GS0}$，且

$$V_{DS2} \approx V_{GS1} - V_{GS4}.$$

### 第 2 步 — 为什么 $M_2$ 处于饱和区边缘

$M_4$ 很宽，而且只流过很小的电流 $I_1$，因此它的过驱动电压（overdrive voltage）非常小：

$$V_{GS4} = V_{TH} + \sqrt{\frac{2I_1}{\mu_nC_{ox}(W/L)_4}} \approx V_{TH}.$$

因此

$$V_{DS2} \approx V_{GS1} - V_{TH} = V_{ov1} = V_{ov2}:$$

**$M_2$ 处于饱和区边缘**，符合设计意图；这使最低输出电压保持为 $V_{ov2} + V_{ov3}$，而不是标准共源共栅电流镜（cascode current mirror）的 $V_{TH} + 2V_{ov}$。

### 第 3 步 — 比较 $M_1$ 和 $M_2$ 的电流

两个晶体管都有 $V_{GS} = V_{GS1}$，且都处于饱和区（$M_2$ 刚好饱和）。取 $\lambda \ne 0$：

$$
\begin{aligned}
I_{REF} = I_{D1} &= \frac{\beta}{2}(V_{GS1} - V_{TH})^2(1 + \lambda V_{DS1}), \qquad V_{DS1} = V_{GS1} \ \text{(diode)},\\
I_{out} = I_{D2} &= \frac{\beta}{2}(V_{GS1} - V_{TH})^2(1 + \lambda V_{DS2}), \qquad V_{DS2} \approx V_{GS1} - V_{GS4}.
\end{aligned}
$$

取比值时公共因子被约去：

$$\frac{I_{out}}{I_{REF}} = \frac{1 + \lambda V_{DS2}}{1 + \lambda V_{DS1}} = \frac{1 + \lambda(V_{GS1} - V_{GS4})}{1 + \lambda V_{GS1}} .$$

相对误差为：

$$
\begin{aligned}
\frac{I_{out} - I_{REF}}{I_{REF}} &= \frac{1 + \lambda V_{GS1} - \lambda V_{GS4} - 1 - \lambda V_{GS1}}{1 + \lambda V_{GS1}}\\
&= -\,\frac{\lambda V_{GS4}}{1 + \lambda V_{GS1}} \approx -\,\frac{\lambda V_{TH}}{1 + \lambda V_{GS1}} \approx -\lambda V_{TH}.
\end{aligned}
$$

共源共栅结构使 $I_{out}$ 对**输出**电压不敏感，但它把 $M_2$ 的漏极电压保持在约 $V_{ov}$，而 $M_1$ 的漏极电压为 $V_{GS1} = V_{TH} + V_{ov}$：两个漏极电压相差约一个阈值电压，$V_{DS}$ 较小的 $M_2$ 流过的电流也较小。

### 第 4 步 — 数值估算

取 $\lambda = 0.1\ \mathrm{V^{-1}}$，$V_{GS4} \approx V_{TH} = 0.7$ V，以及典型值 $V_{GS1} \approx 0.9$ V：

$$\frac{I_{out} - I_{REF}}{I_{REF}} \approx -\frac{(0.1\ \mathrm{V^{-1}})(0.7\ \mathrm{V})}{1 + (0.1\ \mathrm{V^{-1}})(0.9\ \mathrm{V})} = -\frac{0.070}{1.09} = -6.4\% .$$

因此 $I_{out}$ **比 $I_{REF}$ 低约 6–7 %**。

### 第 5 步 — 用具体设计验证

取 $I_{REF} = 100\ \mu\mathrm{A}$，$M_0$–$M_3$ 的 $W/L = 20/0.5$，因此 $\beta = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2}$；$M_4$ 的 $W/L = 200/0.5$（$\beta_4 = 53.6\ \mathrm{mA/V^2}$），偏置电流 $I_1 = 5\ \mu\mathrm{A}$。设 $V_{DD} = 3$ V，输出电压为 2 V。

**$M_1$（二极管连接）：** 求解 $100\ \mu\mathrm{A} = \tfrac12(5.36\ \mathrm{mA/V^2})V_{ov}^2(1 + 0.1V_{GS1})$：

$$V_{ov1} = 0.185\ \mathrm{V}, \quad V_{GS1} = 0.885\ \mathrm{V}, \quad \text{check: } 2.68\ \mathrm{mA/V^2}\times(0.185)^2\times1.0885 = 100\ \mu\mathrm{A}. \ \checkmark$$

**$M_0$** 与之相同，也是二极管连接，电流也相同（γ = 0），因此 $V_{GS0} = 0.885$ V，$V_{b1} = 1.770$ V。

**$M_4$：** 其漏源电压为 $V_{DD} - V_{G3} \approx 3 - 1.06 = 1.94$ V，因此

$$V_{ov4} = \sqrt{\frac{2(5\ \mu\mathrm{A})}{(53.6\ \mathrm{mA/V^2})(1 + 0.1\times1.94)}} = 0.0125\ \mathrm{V},$$

于是 $V_{GS4} = 0.7125$ V，$V_{G3} = 1.770 - 0.7125 = 1.058$ V。

**$M_2$ 和 $M_3$：** 数值求解 $I_{D3} = I_{D2}$，得 $V_{DS2} = 0.186$ V（而 $V_{ov2} = 0.185$ V，恰好处于边缘），$V_{GS3} = 0.872$ V。于是

$$I_{out} = \tfrac12(5.36\ \mathrm{mA/V^2})(0.185\ \mathrm{V})^2(1 + 0.1\times0.186) = 93.6\ \mu\mathrm{A},$$

即 **−6.4 %**，与估算一致。第 3 步的公式给出 $-(0.1)(0.7125)/1.0885 = -6.5\%$；这一微小差别是因为 $V_{GS3}$ 略小于 $V_{GS0}$（$M_3$ 的电流较小，$V_{DS}$ 较大）。把输出电压从 1.5 V 改变到 3 V，结果只在 −6.5 % 与 −6.4 % 之间变化。

### 结果

$$I_{out} \approx I_{REF}\,\frac{1 + \lambda(V_{GS1} - V_{GS4})}{1 + \lambda V_{GS1}}, \qquad \frac{I_{out} - I_{REF}}{I_{REF}} \approx -\frac{\lambda V_{GS4}}{1 + \lambda V_{GS1}} \approx -\lambda V_{TH}.$$

其中 $V_{DS2} \approx V_{GS1} - V_{GS4} \approx V_{GS1} - V_{TH}$（饱和区边缘），而 $V_{DS1} = V_{GS1}$。对于 $\lambda = 0.1\ \mathrm{V^{-1}}$，**$I_{out}$ 比 $I_{REF}$ 低约 6–7 %**（$V_{GS1} \approx 0.9$ V 时为 −6.4 %）。

**常见错误。** 认为共源共栅结构完全消除了沟道长度调制引起的误差。它使 $I_{out}$ 与**输出**电压无关，但复制的精度取决于 $V_{DS2}$ 与 $V_{DS1}$ 的匹配程度；这里两者相差约 $V_{TH}$，留下约 $\lambda V_{TH}$ 的误差。

**常见错误。** 预测 $I_{out} > I_{REF}$。$M_2$ 的漏源电压**较小**（约为 $V_{ov}$，而不是 $V_{GS}$），因此在 $\lambda > 0$ 时它的电流**较小**。

**常见错误。** 根据栅源电压的差异来估算失配，从而得到几十个百分点的误差。$M_1$ 和 $M_2$ 的 $V_{GS}$ 完全相同；只有 $V_{DS}$ 不同，而它只通过 $\lambda$ 产生微弱的影响。
