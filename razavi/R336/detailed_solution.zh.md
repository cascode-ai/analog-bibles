# 详细步骤 - R336

**思路。** 这是一个带源极负反馈（source degeneration）、采用二极管连接负载的共源级（common-source stage）。求出电压增益，把三个互不相关的噪声源（$M_1$、$R_S$、$M_2$）分别折算到输入端，再把功率相加。

### 第 1 步 — 小信号模型（small-signal model）

由于 $\lambda = 0$，二极管连接的 $M_2$ 相当于接在输出端与交流地之间的电阻 $1/g_{m2}$：它从 $V_{DD}$ 流入输出端的电流为 $g_{m2}v_{sg2} = -g_{m2}v_{out}$。其沟道噪声 $I_{n2}$（$\overline{I_{n2}^2} = 4kT\gamma g_{m2}$）与之并联，流入输出端。$M_1$ 是从输出端流向其源极节点 S 的电流源 $g_{m1}(v_{in} - v_S)$，与其沟道噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_{m1}$）并联。S 经 $R_S$ 及与之串联的噪声电压 $V_{nS}$（$\overline{V_{nS}^2} = 4kTR_S$）接地。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 电压增益

关闭噪声源，$i_{d1} = g_{m1}(v_{in} - v_S)$，且 $v_S = i_{d1}R_S$：

$$
\begin{aligned}
i_{d1} &= g_{m1}(v_{in} - i_{d1}R_S)\\
i_{d1}(1 + g_{m1}R_S) &= g_{m1}v_{in}\\
i_{d1} &= \frac{g_{m1}}{1 + g_{m1}R_S}v_{in}.
\end{aligned}
$$

这个电流从输出端抽取，由负载 $1/g_{m2}$ 提供，因此 $v_{out} = -i_{d1}/g_{m2}$，

$$A_v = -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}.$$

### 第 3 步 — $M_1$ 的噪声

流过 $M_1$ 的电流为 $g_{m1}v_{gs1} + I_{n1} = g_{m1}\left(v_{gs1} + I_{n1}/g_{m1}\right)$，它只取决于 $v_{gs1}$（$\lambda = 0$，无体效应）。因此无论源极或漏极接什么，$I_{n1}$ 都严格等效于与栅极串联的电压 $I_{n1}/g_{m1}$：

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$

### 第 4 步 — $R_S$ 的噪声

沿输入回路，$v_{gs1} = v_{in} - V_{nS} - i_{d1}R_S$。晶体管只对 $v_{gs1}$ 作出响应，因此 $V_{nS}$ 的作用与输入电压 $-V_{nS}$ 完全相同，**一比一地**折算到输入端：

$$\overline{V_{n,in}^2}\Big|_{R_S} = \overline{V_{nS}^2} = 4kTR_S .$$

### 第 5 步 — $M_2$ 的噪声

令 $v_{in} = 0$ 并关闭其他噪声源，$M_1$ 的漏极电流为零；又因为 $\lambda = 0$，它与 $v_{out}$ 无关：从输出端看，$M_1$ 相当于开路。因此 $I_{n2}$ 全部流过 $1/g_{m2}$：

$$
\begin{aligned}
-g_{m2}v_{out} + I_{n2} &= 0\\
v_{out} &= \frac{I_{n2}}{g_{m2}},
\end{aligned}
$$

$$\overline{V_{n,out}^2}\Big|_{M_2} = \frac{\overline{I_{n2}^2}}{g_{m2}^2} = \frac{4kT\gamma g_{m2}}{g_{m2}^2} = \frac{4kT\gamma}{g_{m2}}.$$

除以第 2 步的 $A_v^2$：

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{M_2} &= \frac{4kT\gamma}{g_{m2}}\cdot\frac{g_{m2}^2(1 + g_{m1}R_S)^2}{g_{m1}^2}\\
&= \frac{4kT\gamma\,g_{m2}\,(1 + g_{m1}R_S)^2}{g_{m1}^2}.
\end{aligned}
$$

等价地说，输出噪声电流 $I_{n2}$ 被除以等效跨导（transconductance）$G_m = g_{m1}/(1 + g_{m1}R_S)$；源极负反馈使 $G_m$ 降低，因此折算后的负载噪声增大 $(1 + g_{m1}R_S)^2$ 倍。

### 第 6 步 — 总的输入参考噪声

三个噪声源互不相关，因此它们的输入参考功率相加：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma}{g_{m1}} + 4kTR_S + \frac{4kT\gamma\,g_{m2}(1 + g_{m1}R_S)^2}{g_{m1}^2}\\
&= 4kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{\gamma\,g_{m2}(1 + g_{m1}R_S)^2}{g_{m1}^2}\right].
\end{aligned}
$$

当 $R_S = 0$ 时，上式变为 $4kT\gamma\left(1/g_{m1} + g_{m2}/g_{m1}^2\right)$，即二极管连接负载共源级的标准结果。较小的 $g_{m2}/g_{m1}$ 既能降低负载噪声，又能提高增益 $g_{m1}/[g_{m2}(1 + g_{m1}R_S)]$。

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + 4kTR_S + \frac{4kT\gamma\, g_{m2}(1+g_{m1}R_S)^2}{g_{m1}^2}$$

- $M_1$：$4kT\gamma/g_{m1}$（其漏极噪声电流折算到栅极）。
- $R_S$：$4kTR_S$（与源极串联的电压的作用与栅极电压相同）。
- $M_2$：输出噪声 $4kT\gamma/g_{m2}$ 除以增益的平方 $\left[g_{m1}/(g_{m2}(1+g_{m1}R_S))\right]^2$。

**常见错误。** 把二极管连接的 $M_2$ 当作理想电流源或无噪声负载。它是决定增益的电阻 $1/g_{m2}$，其沟道噪声 $4kT\gamma g_{m2}$ 在输出端表现为 $4kT\gamma/g_{m2}$。

**常见错误。** 漏掉 $M_2$ 项上的负反馈因子，即写成 $4kT\gamma g_{m2}/g_{m1}^2$。有 $R_S$ 时增益减小 $1 + g_{m1}R_S$ 倍，因此折算后的负载噪声增大 $(1 + g_{m1}R_S)^2$ 倍。

**常见错误。** 把 $R_S$ 的噪声除以增益。它的噪声电压位于输入回路之内，对 $v_{gs1}$ 的影响与输入电压完全相同，因此应一比一地折算为 $4kTR_S$。
