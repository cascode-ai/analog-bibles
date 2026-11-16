# 详细步骤 - R333

**思路。** 对三个互不相关的热噪声源（$M_1$、$R_S$、$R_D$）分别求出能产生相同漏极电流的输入电压，从而把它们各自折算到输入端，再把输入参考功率相加。由于 $\lambda = 0$ 且无体效应，漏极电流只取决于 $V_{GS}$。

### 第 1 步 — 小信号模型（small-signal model）与电压增益

晶体管表示为从输出端流向源极节点 S 的电流 $g_m(v_{in} - v_S)$；$R_S$ 接在 S 与地之间，$R_D$ 接在输出端与交流地之间。沟道噪声位于漏极与源极之间，每个电阻都并联一个诺顿噪声电流。

<!-- diagram: diagram-01.cir -->

关闭噪声源时，$i_d = g_m(v_{in} - v_S)$，且 $i_d$ 全部流入 $R_S$，因此 $v_S = i_dR_S$：

$$
\begin{aligned}
i_d &= g_m(v_{in} - i_dR_S)\\
i_d(1 + g_mR_S) &= g_mv_{in}\\
i_d &= \frac{g_m}{1 + g_mR_S}\,v_{in}.
\end{aligned}
$$

由于 $v_{out} = -i_dR_D$，

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_mR_D}{1 + g_mR_S},$$

而 $G_m = g_m/(1 + g_mR_S)$ 是带源极负反馈（source degeneration）的器件的等效跨导（transconductance）。

### 第 2 步 — $M_1$ 的噪声

计入沟道噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_m$）后，漏源电流为

$$i_d = g_m v_{gs} + I_{n1} = g_m\left(v_{gs} + \frac{I_{n1}}{g_m}\right).$$

由于电流只取决于 $v_{gs}$，**无论**源极接什么，$I_{n1}$ 都严格等效于与栅极串联的电压 $I_{n1}/g_m$。用带负反馈的电路验证：令 $v_{in} = 0$，$i_d = g_m(-i_dR_S) + I_{n1}$，因此 $i_d = I_{n1}/(1 + g_mR_S)$，这正等于 $v_{in} = I_{n1}/g_m$ 时的响应 $g_mv_{in}/(1 + g_mR_S)$。✓ 因此

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_m^2} = \frac{4kT\gamma g_m}{g_m^2} = \frac{4kT\gamma}{g_m}.$$

### 第 3 步 — $R_S$ 的噪声

噪声电流 $I_{nS}$（$\overline{I_{nS}^2} = 4kT/R_S$）与 $R_S$ 并联，从 S 流向地。令 $v_{in} = 0$，则 $i_d = -g_mv_S$；在 S 点应用基尔霍夫电流定律（KCL）得 $i_d = v_S/R_S + I_{nS}$，即 $v_S = (i_d - I_{nS})R_S$：

$$
\begin{aligned}
i_d &= -g_mR_S\,(i_d - I_{nS})\\
i_d(1 + g_mR_S) &= g_mR_S\,I_{nS}\\
i_d &= \frac{g_m}{1 + g_mR_S}\,(R_SI_{nS}).
\end{aligned}
$$

与 $i_d = \dfrac{g_m}{1 + g_mR_S}v_{in}$ 比较可知，该噪声等效于幅值为 $R_SI_{nS}$ 的输入电压（对噪声功率而言，符号无关紧要）：

$$\overline{V_{n,in}^2}\Big|_{R_S} = R_S^2\cdot\frac{4kT}{R_S} = 4kTR_S .$$

写成戴维南形式，就是与源极端串联的电压 $4kTR_S$；它对 $V_{GS}$ 的影响与栅极电压完全相同，因此**一比一地**折算到输入端。

### 第 4 步 — $R_D$ 的噪声

由于 $\lambda = 0$，漏极是理想电流源（current source），因此噪声电流 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）全部流过 $R_D$：

$$\overline{V_{n,out}^2}\Big|_{R_D} = \overline{I_{nD}^2}\,R_D^2 = \frac{4kT}{R_D}R_D^2 = 4kTR_D .$$

除以第 1 步所得增益的平方：

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{R_D} &= \frac{4kTR_D}{A_v^2} = 4kTR_D\cdot\frac{(1 + g_mR_S)^2}{g_m^2R_D^2}\\
&= 4kT\,\frac{(1 + g_mR_S)^2}{g_m^2R_D}.
\end{aligned}
$$

源极负反馈使增益减小 $(1 + g_mR_S)$ 倍，因此折算回输入端的负载噪声增大 $(1 + g_mR_S)^2$ 倍。

### 第 5 步 — 总的输入参考噪声

三个噪声源互不相关，因此它们的输入参考功率相加：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \overline{V_{n,in}^2}\Big|_{M_1} + \overline{V_{n,in}^2}\Big|_{R_S} + \overline{V_{n,in}^2}\Big|_{R_D}\\
&= \frac{4kT\gamma}{g_m} + 4kTR_S + 4kT\frac{(1 + g_mR_S)^2}{g_m^2R_D}\\
&= 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1 + g_mR_S)^2}{g_m^2R_D}\right].
\end{aligned}
$$

当 $R_S = 0$ 时，上式化为普通共源级的结果 $4kT\left(\gamma/g_m + 1/(g_m^2R_D)\right)$。源极负反馈通过 $4kTR_S$ 项以及 $R_D$ 项上的因子 $(1 + g_mR_S)^2$ **增加**了噪声：这是它换取更好线性度所付出的噪声代价。

### 结果

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1+g_mR_S)^2}{g_m^2R_D}\right]$$

- $M_1$：其漏极噪声电流等效于功率谱密度为 $4kT\gamma/g_m$ 的栅极电压，与 $R_S$ 无关（$\lambda = 0$，无体效应）。
- $R_S$：其噪声电压 $4kTR_S$ 直接作用于 $V_{GS}$，一比一地折算到输入端。
- $R_D$：输出噪声 $4kTR_D$ 除以 $A_v^2 = \left[g_mR_D/(1+g_mR_S)\right]^2$。

**常见错误。** 把 $R_S$ 的噪声除以增益，或乘以 $g_m^2$。它的噪声电压对 $V_{GS}$ 的影响与输入电压完全相同，因此应一比一地折算为 $4kTR_S$。

**常见错误。** 用无负反馈时的增益 $g_mR_D$ 折算 $R_D$ 的噪声，得到 $4kT/(g_m^2R_D)$。实际增益为 $g_mR_D/(1 + g_mR_S)$，因此 $R_D$ 项带有因子 $(1 + g_mR_S)^2$。

**常见错误。** 把晶体管项写成 $4kT\gamma g_m$（这是漏极**电流**的功率谱密度），或给它乘上负反馈因子。沟道噪声电流和信号电流被同一个因子 $1 + g_mR_S$ 减小，因此晶体管的输入参考噪声仍为 $4kT\gamma/g_m$。
