# 详细步骤 - A165

输入失调电压是恢复平衡状态所需的差分输入；平衡时输出位于电流镜节点电压（$V_{SD4}=V_{SD3}$）。先写出负载失配造成的电流不平衡，把它换算为输入对的栅压差，再加上输入对自身的失配，并选取各容差的符号使所有项叠加。

### 第 1 步 — 假设与器件参数

- 器件服从平方律并处于饱和区；忽略 $\lambda$，因此平衡意味着 $I_1=I_3$、$I_2=I_4$，且 M3 与 M4 的 $V_{SG}$ 相等。
- M1 与 M2 共用源极，体效应不改变二者的阈值差，故忽略。
- 按题意，每个晶体管的 $V_T$ 和 $K'$ 可在各自容差带内独立取值，因此最坏情况下每对中的两个器件位于相反的极端：每对 $\Delta V_T=0.3$ V，$\Delta\beta/\beta=(1.1-0.9)/1=0.2$。这是非常悲观的：表中的分散性是相邻器件共有的工艺（批次间）变化，实际匹配对的差别只有几毫伏。

由 $W_1/L_1=W_2/L_2=1$、$W_3/L_3=W_4/L_4=0.1$ 及 $\beta=K'W/L$ 得

$$
\beta_1=\beta_2=110\ \mu\mathrm{A/V^2},\qquad \beta_3=\beta_4=5\ \mu\mathrm{A/V^2}.
$$

平衡时每侧流过 $I=I_{SS}/2$，因此 $V_{ov1}=\sqrt{2I/\beta_1}=\sqrt{I_{SS}/\beta_1}$，$g_{m1}=2I/V_{ov1}$，且

$$
\frac{g_{m3}}{g_{m1}}=\sqrt{\frac{\beta_3}{\beta_1}}=\sqrt{\frac{5}{110}}=0.213 .
$$

### 第 2 步 — 一阶失调表达式

两个负载管共用 $V_{SG}$，因此其电流差由失配决定。将 $I_D=\frac{\beta}{2}(V_{SG}-|V_T|)^2$ 在平均器件附近作一阶展开：

$$
I_3-I_4=I\,\frac{\Delta\beta_{34}}{\beta}-g_{m3}\,\Delta V_{T34},
$$

其中 $\Delta\beta_{34}=\beta_3-\beta_4$，$\Delta V_{T34}=|V_{T3}|-|V_{T4}|$。平衡要求输入对承载相同的电流差，$I_1-I_2=I_3-I_4$。所需栅压为 $V_{GS}=V_T+\sqrt{2I_D/\beta}$，一阶近似下

$$
V_{OS}=V_{GS1}-V_{GS2}=\Delta V_{T12}+\frac{I_1-I_2}{g_{m1}}-\frac{V_{ov1}}2\,\frac{\Delta\beta_{12}}{\beta}.
$$

代入负载不平衡量及 $I/g_{m1}=V_{ov1}/2$：

$$
V_{OS}\approx\Delta V_{T12}-\frac{g_{m3}}{g_{m1}}\,\Delta V_{T34}+\frac{V_{ov1}}2\left(\frac{\Delta\beta_{34}}{\beta}-\frac{\Delta\beta_{12}}{\beta}\right).
$$

负载阈值失配被 $g_{m3}/g_{m1}$ 缩小，因为负载电流误差要除以较大的输入对跨导。

### 第 3 步 — 最坏情况与 $I_{SS}$ 的关系

选取符号使四项全部叠加，每对 $|\Delta V_T|=0.3$ V、$|\Delta\beta/\beta|=0.2$：

$$
|V_{OS}|_{\max}\approx0.3\ \mathrm V+(0.213)(0.3\ \mathrm V)+\frac{V_{ov1}}2(0.2+0.2)
=0.364\ \mathrm V+0.2\sqrt{\frac{I_{SS}}{110\ \mu\mathrm{A/V^2}}}.
$$

阈值项与偏置无关；$\beta$ 项随过驱动电压（overdrive voltage）增大，即按 $\sqrt{I_{SS}}$ 增大。

### 第 4 步 — $I_{SS}=100\ \mu$A 时的数值

$$
V_{ov1}=\sqrt{\frac{100\ \mu\mathrm A}{110\ \mu\mathrm{A/V^2}}}=0.953\ \mathrm V,\qquad
|V_{OS}|_{\max}\approx0.364+0.2(0.953)=0.555\ \mathrm V\approx0.55\ \mathrm V.
$$

在所有容差极端组合下精确求解平方律方程，得到相同的最坏值 0.555 V（输入对 $V_{T1}=0.85$ V、$V_{T2}=0.55$ V，$\beta_1$ 偏低、$\beta_2$ 偏高；负载 $|V_{T3}|$ 偏低、$|V_{T4}|$ 偏高，$\beta_3$ 偏高、$\beta_4$ 偏低，或其镜像组合）。

若假设负载完全匹配，则只计输入对：

$$
|V_{OS}|=0.3+\sqrt{\frac{I_{SS}}{0.9\beta_1}}-\sqrt{\frac{I_{SS}}{1.1\beta_1}}=0.396\ \mathrm V\approx0.40\ \mathrm V .
$$

这些尺寸使偏置要求很高：$W_3/L_3=0.1$ 时 $V_{SG3}=0.7+\sqrt{2(50\ \mu\mathrm A)/(5\ \mu\mathrm{A/V^2})}\approx0.7+4.5$ V，因此该级需要很高的电源电压。
