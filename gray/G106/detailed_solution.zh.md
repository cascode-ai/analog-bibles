# 详细步骤 - G106

两个电流源共用基极电压，所以由 KVL，两侧的 $V_{BE}+I_CR$ 相等。把这一方程对小失配线性化。发射极负反馈使 $V_{BE}$ 失配除以 $V_T+I_CR$，但电阻失配以 $I_CR/(V_T+I_CR)$ 的权重传递过去。把两项最坏情况的贡献相加，并要求结果不超过 1 %，即可确定最小压降 $V_R=I_CR$。

### 第 1 步 — 失配方程

对每个电流源，$V_B=V_{BE}+I_CR$，其中 $V_{BE}=V_T\ln(I_C/I_S)$。把两个电流源写成平均值加差值（$\Delta I_C$、$\Delta I_S$、$\Delta R$），将两个 KVL 方程之差展开到一阶：

$$
V_T\left(\frac{\Delta I_C}{I_C}-\frac{\Delta I_S}{I_S}\right)+I_CR\left(\frac{\Delta I_C}{I_C}+\frac{\Delta R}R\right)=0 .
$$

电流相等时的 $V_{BE}$ 失配为 $\Delta V_{BE}=-V_T\Delta I_S/I_S$。记 $V_R=I_CR$，

$$
\frac{\Delta I_C}{I_C}=-\frac{\Delta V_{BE}+V_R\,\Delta R/R}{V_T+V_R}
=\frac1{1+g_mR}\frac{\Delta I_S}{I_S}-\frac{g_mR}{1+g_mR}\frac{\Delta R}R,
$$

其中 $g_mR=V_R/V_T$。没有电阻时（$V_R=0$），2 mV 的失配产生 $2/26=7.7$ % 的电流失配。负反馈使这一项减小，而电阻项趋于 $\Delta R/R$。

### 第 2 步 — 最坏情况

两种失配的符号相互独立，所以最坏情况下它们的幅度相加：

$$
\left|\frac{\Delta I_C}{I_C}\right|_{\max}=\frac{2\ \mathrm{mV}+0.005\,V_R}{26\ \mathrm{mV}+V_R}\le0.01 .
$$

### 第 3 步 — 所需压降

$$
2\ \mathrm{mV}+0.005\,V_R\le0.26\ \mathrm{mV}+0.01\,V_R
\quad\Rightarrow\quad
V_R\ge\frac{2\ \mathrm{mV}-0.26\ \mathrm{mV}}{0.01-0.005}=348\ \mathrm{mV}.
$$

每个发射极电阻上至少要有约 0.35 V 的压降，即 $g_mR=13.4$。仅电阻失配就占用了 1 % 预算的一半（0.5 %），所以负反馈必须把 $V_{BE}$ 失配造成的 7.7 % 降到剩余的 0.5 % 以内。
