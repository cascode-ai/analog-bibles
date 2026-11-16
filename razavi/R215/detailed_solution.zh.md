# 详细步骤 - R215

**思路。** 共模输入只有通过某种不对称才能产生差分输出，这里的不对称是电流源 $M_5$ 与 $M_6$ 之间的阈值失配 $\Delta V$。在 $\lambda = 0$ 时，这两个器件不流过信号电流，因此失配是**间接**起作用的：它改变了它们的直流电流，从而改变了留给二极管负载 $M_3$、$M_4$ 的直流电流，使两个二极管的负载电阻不同，$1/g_{m3} \ne 1/g_{m4}$。下面依次求出这一负载失配、共模到差分的增益（计入 $R_{SS}$）、差模增益以及它们的比值。

### 第 1 步 — 标称偏置电流

把左输出端（$M_1$、$M_3$、$M_5$ 的漏极）记为 X，右输出端记为 Y，$M_1$、$M_2$ 的公共源极节点记为 P。每个输入器件流过 $I_{D1} = I_{D2} = I_{SS}/2$，这一电流由其输出端上的电流源和二极管共同提供，因此每个二极管流过

$$I_0 = I_{D1} - |I_{D5}| = \frac{I_{SS}}{2} - 0.8\frac{I_{SS}}{2} = 0.2\frac{I_{SS}}{2}.$$

### 第 2 步 — 阈值失配对直流电流的影响

把失配表示为在标称阈值电压上下各偏离 $\pm\Delta V/2$。在 $V_{SG}$ 固定时，阈值电压变化 $\delta V_{TH}$ 会使饱和器件的电流改变 $-g_m\,\delta V_{TH}$，因此

$$|I_{D5}| = I_P - \frac{\Delta I}{2}, \qquad |I_{D6}| = I_P + \frac{\Delta I}{2}, \qquad \Delta I = g_{m5}\Delta V,$$

其中 $I_P$ 为标称电流。输入器件的电流**不**改变（直流下栅极电压相等，且 $\lambda = 0$，因此无论漏极电压如何，都有 $I_{D1} = I_{D2} = I_{SS}/2$），所以全部失配都由二极管吸收：

$$I_{D3} = I_{D1} - |I_{D5}| = I_0 + \frac{\Delta I}{2}, \qquad I_{D4} = I_0 - \frac{\Delta I}{2}.$$

（符号取决于哪个器件的阈值电压更高；对 CMRR 而言只有大小重要。）

### 第 3 步 — 由此产生的负载失配

二极管连接器件呈现的电阻 $1/g_m \propto I_D^{-1/2}$，因此在一阶近似下

$$
\begin{aligned}
\frac{1}{g_{m3}} &= \frac{1}{g_{m0}}\left(1 + \frac{\Delta I}{2I_0}\right)^{-1/2} \approx \frac{1}{g_{m0}}\left(1 - \frac{\Delta I}{4I_0}\right),\\
\frac{1}{g_{m4}} &\approx \frac{1}{g_{m0}}\left(1 + \frac{\Delta I}{4I_0}\right),\\
\frac{1}{g_{m4}} - \frac{1}{g_{m3}} &\approx \frac{1}{g_{m0}}\cdot\frac{\Delta I}{2I_0}, \qquad \frac{1}{g_{m3}} + \frac{1}{g_{m4}} \approx \frac{2}{g_{m0}},
\end{aligned}
$$

其中 $g_{m0}$ 是二极管在 $I_0$ 下的标称跨导。$M_5$ 和 $M_6$（栅极接固定偏置，$\lambda = 0$）对信号而言相当于开路。

### 第 4 步 — 共模增益（从共模输入到差分输出）

对于 $v_{in1} = v_{in2} = v_{CM}$，匹配的差分对流过相等的信号电流 $i$，两者都流入 $R_{SS}$，因此 $v_P = 2iR_{SS}$，且

$$
\begin{aligned}
i &= g_{m1}(v_{CM} - v_P) = g_{m1}(v_{CM} - 2iR_{SS})\\
i &= \frac{g_{m1}v_{CM}}{1 + 2g_{m1}R_{SS}} .
\end{aligned}
$$

每个输出等于 $-i$ 乘以其负载电阻：$v_X = -i/g_{m3}$，$v_Y = -i/g_{m4}$，因此

$$A_{CM\text{-}DM} = \frac{v_X - v_Y}{v_{CM}} = -\frac{g_{m1}}{1 + 2g_{m1}R_{SS}}\left(\frac{1}{g_{m3}} - \frac{1}{g_{m4}}\right),\qquad |A_{CM\text{-}DM}| \approx \frac{g_{m1}}{1 + 2g_{m1}R_{SS}}\cdot\frac{1}{g_{m0}}\cdot\frac{\Delta I}{2I_0}.$$

<!-- diagram: diagram-01.cir -->

### 第 5 步 — 差模增益

对于 $v_{in1} = +v_d/2$、$v_{in2} = -v_d/2$，匹配的差分对给出 $i_1 = g_{m1}v_d/2 = -i_2$，且 P 不动，因此

$$
\begin{aligned}
v_X - v_Y &= -\frac{i_1}{g_{m3}} + \frac{i_2}{g_{m4}} = -\frac{g_{m1}v_d}{2}\left(\frac{1}{g_{m3}} + \frac{1}{g_{m4}}\right),\\
|A_{DM}| &\approx \frac{g_{m1}}{g_{m0}} .
\end{aligned}
$$

### 第 6 步 — CMRR

$$
\begin{aligned}
\mathrm{CMRR} &= \left|\frac{A_{DM}}{A_{CM\text{-}DM}}\right| = \frac{g_{m1}/g_{m0}}{\dfrac{g_{m1}}{1 + 2g_{m1}R_{SS}}\cdot\dfrac{1}{g_{m0}}\cdot\dfrac{\Delta I}{2I_0}}\\
&= (1 + 2g_{m1}R_{SS})\,\frac{2I_0}{\Delta I} = (1 + 2g_{m1}R_{SS})\,\frac{2\,(I_{D1} - |I_{D5}|)}{g_{m5}\Delta V}.
\end{aligned}
$$

**代入给定的比值** $|I_{D5}| = 0.8I_{D1}$：$I_0 = 0.2I_{D1} = |I_{D5}|/4$，$g_{m5} = 2|I_{D5}|/|V_{GS5} - V_{TH5}|$，因此

$$\frac{2I_0}{g_{m5}\Delta V} = \frac{2\,|I_{D5}|/4}{\left(2|I_{D5}|/|V_{GS5} - V_{TH5}|\right)\Delta V} = \frac{|V_{GS5} - V_{TH5}|}{4\,\Delta V},$$

$$\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\frac{|V_{GS5} - V_{TH5}|}{4\,\Delta V}.$$

电流误差 $\Delta I = g_{m5}\Delta V$ 只占 $|I_{D5}|$ 的一小部分，但它全部落在二极管上，而二极管只流过支路电流的 20 %，因此相对于 $I_0$ 而言它要大四倍：减小二极管负载的电流虽然提高了差模增益，但也提高了对负载失配的敏感度。

**数值感受：** 取 $|V_{GS5} - V_{TH5}| = 0.3$ V，$\Delta V = 5$ mV，$g_{m1} = 3.66$ mS，$R_{SS} = 10\ \mathrm{k}\Omega$：

$$\mathrm{CMRR} \approx (1 + 73.2)\times\frac{0.3}{0.02} = 74.2\times15 \approx 1100\ (61\ \mathrm{dB}).$$

### 结果

$$\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\frac{2(I_{D1} - |I_{D5}|)}{g_{m5}\Delta V},$$

当 $|I_{D5}| = 0.8I_{D1}$（$I_{D1} = I_{SS}/2$）时，它变为

$$\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\frac{|V_{GS5} - V_{TH5}|}{4\,\Delta V} .$$

$M_5$/$M_6$ 的阈值失配引起直流电流失配 $g_{m5}\Delta V$，它全部由二极管负载吸收，使它们的小信号电阻 $1/g_{m3}$、$1/g_{m4}$ 不相等（$\Delta(1/g_m)/(1/g_m) \approx \Delta I/(2I_0)$）。于是，经 $1 + 2g_{m1}R_{SS}$ 衰减的共模输入会产生差分输出，而 $A_{DM} \approx g_{m1}/g_{m3}$。

**常见错误。** 以 $M_5$ 和 $M_6$“只是电流源”为由，断言 CMRR 为无穷大。它们确实不流过信号电流，但它们的**直流**失配改变了二极管负载的偏置，从而改变了其 $g_m$。

**常见错误。** 把负载的相对失配取为 $\Delta I/|I_{D5}|$，或者当作输入对管的失配。二极管吸收了全部 $\Delta I$，却只流过 $I_0 = |I_{D5}|/4$，因此相关的比值是 $\Delta I/I_0$，要大四倍。

**常见错误。** 忘记由 $g_m \propto \sqrt{I}$ 带来的因子 $1/2$，即写成 $\Delta(1/g_m)/(1/g_m) = \Delta I/I_0$，这会使 CMRR 偏小 2 倍。
