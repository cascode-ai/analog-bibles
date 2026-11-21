# 详细步骤 - G101

把输出写成 $V_{BE1}$ 加上一个近似 PTAT 的项再减去 $V_{OS}$。$V_{OS}=0$ 时，零温度系数输出就是通常的 $V_{G0}+(\gamma-1)V_T$。有失调时，输出中含有与温度无关的 $-V_{OS}$。修调 $R_2$ 通过增加额外的 PTAT 电压在 25 °C 恢复电压值，而这部分额外的 PTAT 电压带有斜率。一阶斜率为 $+V_{OS}/T$。电流比随温度漂移这一二阶效应会使斜率进一步增大，因此还要精确求解电路方程。

### 第 1 步 — 电路方程

$Q_1$ 为二极管连接，所以其集电极和公共基极节点都位于 $V_{BE1}$，这就是同相输入端。失调源位于 $Q_2$ 的集电极与反相输入端之间，所以虚短使 $Q_2$ 的集电极位于 $V_{BE1}-V_{OS}$。当 $\beta_F\to\infty$ 时，$R_1$ 流过 $I_1$（经 $Q_1$），$R_2$ 流过 $I_2$（经 $Q_2$ 和 $R_3$）：

$$
I_1R_1=V_{OUT}-V_{BE1},\qquad I_2R_2=V_{OUT}-V_{BE1}+V_{OS},\qquad
I_2R_3=V_{BE1}-V_{BE2}=V_T\ln\frac{8I_1}{I_2},
$$

其中用到 $I_{S2}=8I_{S1}$。由第二式消去 $I_2$ 得

$$
V_{OUT}=V_{BE1}+\frac{R_2}{R_3}\Delta V_{BE}-V_{OS},\qquad \frac{I_1}{I_2}=\frac{R_2}{R_1}-\frac{V_{OS}}{I_2R_1}.
$$

### 第 2 步 — 目标电压（$V_{OS}=0$）

$V_{OS}=0$ 时 $I_1/I_2=R_2/R_1$ 固定，所以 $\Delta V_{BE}=V_T\ln(8R_2/R_1)$ 是 PTAT 的，两路电流也都是 PTAT 的（$\alpha=1$）。在 PTAT 偏置下，$V_{BE}+$PTAT 的零温度系数条件为

$$
V_{\text{target}}=V_{G0}+(\gamma-1)V_T=1.205\ \mathrm V+(2.2)(25.7\ \mathrm{mV})=1.2615\ \mathrm V .
$$

按零斜率求解第 1 步的方程，得 $R_2=5.75\ \mathrm{k\Omega}$，此时 $I_1=0.566$ mA，$I_2=98.4\ \mu\mathrm A$，$V_{BE1}=0.695$ V。

### 第 3 步 — 在 $V_{OS}=30$ mV 下修调：一阶斜率

输出中现在含有 $-V_{OS}=-30$ mV。为恢复 1.2615 V，需增大 $R_2$，使 $(R_2/R_3)\Delta V_{BE}$ 增加 30 mV；精确的修调值为 $R_2=6.06\ \mathrm{k\Omega}$。于是在 25 °C 时，各电流和 $V_{BE1}$ 都等于其标称值。与标称设计相比，输出多了一个一阶 PTAT 的项 $+V_{OS}(T/T_0)$ 和一个常数项 $-V_{OS}$。标称部分斜率为零，所以

$$
\frac{dV_{OUT}}{dT}\approx\frac{V_{OS}}{T}=\frac{30\ \mathrm{mV}}{298\ \mathrm K}=+0.10\ \mathrm{mV/°C}.
$$

修调电压并不能恢复零温度系数，因为它抵消的误差 $-V_{OS}$ 与温度无关，而它加入的修正却与温度有关。

### 第 4 步 — 二阶效应与精确结果

有失调时 $I_1/I_2=R_2/R_1-V_{OS}/(I_2R_1)$，其中 $V_{OS}/(I_2R_1)=30\ \mathrm{mV}/(98.4\ \mu\mathrm A\cdot1\ \mathrm{k\Omega})=0.305$。由于 $I_2$ 随 $T$ 增大，这一被减去的项变小，所以 $I_1/I_2$（25 °C 时为 5.75）和 $\Delta V_{BE}$ 比 PTAT 增长得略快。$\ln(I_1/I_2)$ 的额外斜率约为 $(0.305/5.75)/T$，再乘以 $(R_2/R_3)V_T=156$ mV：

$$
\Delta\frac{dV_{OUT}}{dT}\approx\frac{(156\ \mathrm{mV})(0.053)}{298\ \mathrm K}\approx+0.03\ \mathrm{mV/°C}.
$$

用题给的 $I_S(T)$ 模型、取 $R_2=6.06\ \mathrm{k\Omega}$ 精确求解第 1 步的方程，并在 298 K 处数值求导，得

$$
\frac{dV_{OUT}}{dT}=+0.134\ \mathrm{mV/°C}\approx+0.13\ \mathrm{mV/°C}.
$$

尽管输出在 25 °C 时恰好等于目标值，它现在却随温度上升，约为 1.26 V 的 $+106$ ppm/°C。
