# 详细步骤 - R609

**思路。** 由 $A_1$ 和 $M_3$ 构成的环路迫使 $M_1$ 的漏极跟随 $A_1$ 的 + 输入端，**连同** $A_1$ 的噪声一起，因此噪声表现为 $V_{DS1}$ 的波动。线性区晶体管的电流既取决于 $V_{GS}$，也取决于 $V_{DS}$，因此这会产生输出噪声电流；把它除以跨导即可折算到输入端，而两个相互独立的半边按功率相加。

### 第 1 步 — 放大器噪声如何作用到晶体管上

把 $A_1$ 的噪声建模为与其 + 输入端串联的电压源 $V_{n1}$。在环路增益很大时（$A_1$ 驱动 $M_3$ 的栅极，后者的源极就是 X），− 输入端电压等于 + 输入端电压：

$$V_X = V_b + V_{n1}.$$

因此 $V_{DS1} = V_b + V_{n1}$：放大器的噪声直接调制了 $V_{DS1}$；同理 $V_Y = V_b + V_{n2}$。$A_1$ 的输入端不吸取电流，因此 $I_{D3} = I_{D1}$，输出为 $I_{D3} - I_{D4} = I_{D1} - I_{D2}$。

### 第 2 步 — 线性区晶体管的灵敏度

在线性区，

$$I_{D1} = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS1} - V_{TH})V_{DS1} - \tfrac12V_{DS1}^2\right].$$

在 $V_{DS1} = V_b$、$V_{GS1} = V_{GS}$ 处，对栅极（即输入）的灵敏度为

$$g_m = \frac{\partial I_{D1}}{\partial V_{GS1}} = \mu_nC_{ox}\frac{W}{L}\,V_{DS1} = \mu_nC_{ox}\frac{W}{L}\,V_b ,$$

而对漏极的灵敏度就是沟道电导

$$g_{ds} = \frac{\partial I_{D1}}{\partial V_{DS1}} = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS} - V_{TH}) - V_{DS1}\right] = \mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH} - V_b) = \frac{1}{R_{on}},$$

它为正，因为线性区工作要求 $V_b < V_{GS} - V_{TH}$。

### 第 3 步 — 单侧的小信号模型

单侧电路是一个电流源 $g_mv_{in1}$ 与 $g_{ds}$ 并联，接在 X 与地之间，而 X 被环路强制为 $v_{n1}$：

<!-- diagram: diagram-01.cir -->

$$\Delta I_{D1} = g_m\,v_{in1} + g_{ds}\,v_{n1}, \qquad \Delta I_{D2} = g_m\,v_{in2} + g_{ds}\,v_{n2},$$

因此输出的变化为

$$\Delta(I_{D1} - I_{D2}) = g_m\,(v_{in1} - v_{in2}) + g_{ds}\,(v_{n1} - v_{n2}).$$

### 第 4 步 — 把噪声折算到输入端

输入参考噪声就是产生相同输出的差分输入：

$$
\begin{aligned}
g_m\,v_{n,in} &= g_{ds}\,(v_{n1} - v_{n2})\\
v_{n,in} &= \frac{g_{ds}}{g_m}\,(v_{n1} - v_{n2}),
\end{aligned}
$$

其中

$$\frac{g_{ds}}{g_m} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH} - V_b)}{\mu_nC_{ox}(W/L)\,V_b} = \frac{V_{GS} - V_{TH} - V_b}{V_b}.$$

$v_{n1}$ 和 $v_{n2}$ 互不相关，均方值都为 $\overline{V_n^2}$，因此其差的均方值为 $2\overline{V_n^2}$：

$$\overline{V_{n,in}^2} = \left(\frac{g_{ds}}{g_m}\right)^2\cdot2\overline{V_n^2} = 2\,\overline{V_n^2}\left(\frac{V_{GS} - V_{TH} - V_b}{V_b}\right)^2,$$

$$V_{n,in} = \sqrt2\,V_n\,\frac{V_{GS} - V_{TH} - V_b}{V_b},$$

其中 $V_{GS} - V_{TH}$ 是 $M_1$、$M_2$ 在输入共模电平下的过驱动电压，$V_b = V_{DS1} = V_{DS2}$。

### 第 5 步 — 它有多大？

在线性区（并保持良好线性）工作时，通常取 $V_b \ll V_{GS} - V_{TH}$，因此因子 $(V_{GS} - V_{TH} - V_b)/V_b \approx (V_{GS} - V_{TH})/V_b$ 远大于一，辅助放大器的噪声被**放大**。例如，取 $V_{GS} - V_{TH} = 1$ V，$V_b = 0.2$ V：

$$\frac{1 - 0.2}{0.2} = 4, \qquad V_{n,in} = \sqrt2\times4\,V_n \approx 5.7\,V_n .$$

在 $V_{DS}$ 较小时，线性区器件是一个压控电阻，其电流强烈依赖于 $V_{DS}$（$g_{ds} = 1/R_{on}$），而只微弱地依赖于 $V_{GS}$（$g_m \propto V_{DS}$），因此用来保持 $V_{DS}$ 恒定的放大器必须噪声极低：这是这种线性化方案的主要缺点。

### 结果

$$\overline{V_{n,in}^2} = 2\,\overline{V_n^2}\left(\frac{V_{GS} - V_{TH} - V_b}{V_b}\right)^2 \quad\Longleftrightarrow\quad V_{n,in} = \sqrt2\,V_n\,\frac{V_{GS} - V_{TH} - V_b}{V_b},$$

等价地写成 $2\overline{V_n^2}\,(g_{ds}/g_m)^2$，其中 $g_m = \mu_nC_{ox}(W/L)V_b$，$g_{ds} = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH} - V_b) = 1/R_{on}$。由于通常 $V_{GS} - V_{TH} \gg V_b$，$A_1$ 和 $A_2$ 的噪声被放大（例如 $V_{GS} - V_{TH} = 1$ V、$V_b = 0.2$ V 时约为 $5.7V_n$）。

**常见错误。** 认为放大器的噪声直接出现在输入端（$V_{n,in} = V_n$ 或 $\sqrt2V_n$），或者认为环路能将其抑制。环路把 $V_b + V_{n1}$ **强加**在 $M_1$ 的漏极上，线性区器件通过很大的 $g_{ds}$ 把它转换为电流，再通过很小的 $g_m$ 折算到输入端。

**常见错误。** 使用饱和区（saturation region）公式，例如 $g_m = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$ 和 $g_{ds} \approx 0$；在线性区，两者的角色恰好相反。漏掉 $\sqrt2$（两个独立的放大器共同作用于差分输出）是另一个常见疏漏。
