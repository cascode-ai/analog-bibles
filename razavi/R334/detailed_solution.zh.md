# 详细步骤 - R334

**思路。** $M_1$ 的沟道噪声和 $R_S$ 的噪声都是注入输出（源极）节点的电流。求出跟随器的增益和每个噪声源产生的输出噪声，除以增益的平方，再把两个互不相关的贡献相加。

### 第 1 步 — 小信号模型（small-signal model）与电压增益

漏极处于交流地，$\lambda = 0$ 且无体效应，因此 $M_1$ 就是一个从漏极流入输出节点的电流源 $g_m(v_{in} - v_{out})$，$R_S$ 接在输出端与地之间。噪声源为沟道噪声电流 $I_{n1}$（从漏极流向源极，即流入输出节点）和与 $R_S$ 并联的诺顿电流 $I_{nR}$。

关闭噪声源，在输出端应用基尔霍夫电流定律（KCL）得

$$g_m(v_{in} - v_{out}) = \frac{v_{out}}{R_S},$$

$$
\begin{aligned}
g_mv_{in} &= v_{out}\left(g_m + \frac{1}{R_S}\right)\\
A_v = \frac{v_{out}}{v_{in}} &= \frac{g_m}{g_m + 1/R_S} = \frac{g_mR_S}{1 + g_mR_S} = g_m\left(R_S\parallel\frac{1}{g_m}\right).
\end{aligned}
$$

晶体管把电流 $g_mv_{in}$ 送入总输出电阻（output resistance）$R_S\parallel(1/g_m)$，其中 $1/g_m$ 是跟随器自身的输出电阻。

### 第 2 步 — $M_1$ 产生的输出噪声

设 $\overline{I_{n1}^2} = 4kT\gamma g_m$，令 $v_{in} = 0$ 且只保留 $I_{n1}$，在输出端应用 KCL 得

$$
\begin{aligned}
g_m(0 - v_{out}) + I_{n1} &= \frac{v_{out}}{R_S}\\
I_{n1} &= v_{out}\left(g_m + \frac{1}{R_S}\right)\\
v_{out} &= I_{n1}\left(R_S\parallel\frac{1}{g_m}\right),
\end{aligned}
$$

因此

$$\overline{V_{n,out}^2}\Big|_{M_1} = 4kT\gamma g_m\left(R_S\parallel\frac{1}{g_m}\right)^2 .$$

除以 $A_v^2 = g_m^2\left(R_S\parallel\frac{1}{g_m}\right)^2$：

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma g_m\left(R_S\parallel\frac1{g_m}\right)^2}{g_m^2\left(R_S\parallel\frac1{g_m}\right)^2} = \frac{4kT\gamma}{g_m},$$

这与预期一致：器件电流为 $g_m(v_{gs} + I_{n1}/g_m)$，因此 $I_{n1}$ 等效于栅极上的电压 $I_{n1}/g_m$。

### 第 3 步 — $R_S$ 产生的输出噪声

设 $I_{nR}$（$\overline{I_{nR}^2} = 4kT/R_S$）从输出节点流向地。令 $v_{in} = 0$，在输出端应用 KCL：

$$
\begin{aligned}
g_m(0 - v_{out}) &= \frac{v_{out}}{R_S} + I_{nR}\\
-I_{nR} &= v_{out}\left(g_m + \frac{1}{R_S}\right)\\
v_{out} &= -I_{nR}\left(R_S\parallel\frac{1}{g_m}\right).
\end{aligned}
$$

电阻的噪声电流在 $R_S$ 与跟随器的输出电阻 $1/g_m$ 之间分流。两边平方（对功率而言，符号无关紧要）：

$$\overline{V_{n,out}^2}\Big|_{R_S} = \frac{4kT}{R_S}\left(R_S\parallel\frac{1}{g_m}\right)^2 ,$$

$$\overline{V_{n,in}^2}\Big|_{R_S} = \frac{\dfrac{4kT}{R_S}\left(R_S\parallel\frac1{g_m}\right)^2}{g_m^2\left(R_S\parallel\frac1{g_m}\right)^2} = \frac{4kT}{g_m^2R_S}.$$

同时计入信号和电阻噪声，输出端的 KCL 说明了其中的原因：

$$g_m(v_{in} - v_{out}) - I_{nR} = \frac{v_{out}}{R_S}\quad\Longleftrightarrow\quad g_m\left(v_{in} - \frac{I_{nR}}{g_m} - v_{out}\right) = \frac{v_{out}}{R_S},$$

因此注入输出节点的电流，其作用与一个等于该电流除以 $g_m$ 的输入电压完全相同，这里该电压的功率谱密度为 $(4kT/R_S)/g_m^2$。

### 第 4 步 — 总的输入参考噪声

两个噪声源互不相关，因此功率相加：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_S}\\
&= 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_S}\right).
\end{aligned}
$$

这与负载为 $R_D$ 的共源级（common-source stage）形式相同，只是负载换成了 $R_S$：两种情况下电阻都是输出负载。$R_S$ 越大，它的贡献越小；一旦 $g_mR_S \gg 1/\gamma$，晶体管项就占主导。由于跟随器的增益小于一，输入参考噪声甚至大于输出噪声。

### 结果

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_S}\right)$$

- $M_1$：$4kT\gamma/g_m$，即其漏极噪声电流折算到栅极的结果。
- $R_S$：输出噪声 $\dfrac{4kT}{R_S}\left(R_S\parallel\dfrac{1}{g_m}\right)^2$ 除以 $A_v^2 = g_m^2\left(R_S\parallel\dfrac{1}{g_m}\right)^2$，得到 $4kT/(g_m^2R_S)$。

**常见错误。** 像带源极负反馈（source degeneration）的共源级那样，把电阻项写成 $4kTR_S$。在那种电路中，输出取自漏极，$R_S$ 的噪声电压位于输入回路中；而本题的输出取自 $R_S$ 两端，$R_S$ 是负载，它的噪声电流要除以 $g_m^2$。

**常见错误。** 把增益当作恰好为 1，并让 $R_S$ 的噪声“直接”出现在输出端。实际上它的噪声电流在 $R_S$ 与 $1/g_m$ 之间分流；信号和噪声都使用增益 $g_mR_S/(1+g_mR_S)$，因子 $(R_S\parallel1/g_m)^2$ 约去后剩下 $1/(g_m^2R_S)$。

**常见错误。** 把晶体管项写成 $4kT\gamma g_m$，这是漏极噪声**电流**的功率谱密度；折算到输入端应为 $4kT\gamma g_m/g_m^2 = 4kT\gamma/g_m$。
