# 详细步骤 - G183

从 $M_3$ 的栅极经两个跟随器和公共发射极节点到 $M_4$ 的栅极列 KVL。失调就是使 $V_{OD}=0$ 的 $V_{ID}$ 值，因此在该条件下计算各结电压或栅源电压，并对小失配线性化。失配定义为（左侧）−（右侧），分母取平均值：

$$
\Delta V_t=V_{t3}-V_{t4},\quad \Delta I_{BIAS}=I_{BIAS3}-I_{BIAS4},\quad \Delta(W/L)=(W/L)_3-(W/L)_4,\quad \Delta I_S=I_{S1}-I_{S2},\quad \Delta R=R_1-R_2 .
$$

### 第 1 步 — 输入回路的 KVL

$M_3$ 的栅极比 $Q_1$ 的基极高 $V_{GS3}$，后者又比公共发射极节点高 $V_{BE1}$；右侧同理。因此

$$
V_{ID}=(V_{GS3}+V_{BE1})-(V_{GS4}+V_{BE2})=\Delta V_{GS}+\Delta V_{BE}.
$$

两部分可以分别求出，因为每个跟随器流过各自的偏置电流 $I_{BIAS}$，与双极型差分对无关（忽略基极电流）。

### 第 2 步 — MOS 跟随器的贡献

在饱和区按平方律（square law），$I_{BIAS}=\tfrac12k'(W/L)(V_{GS}-V_t)^2$，故

$$
V_{GS}=V_t+\sqrt{\frac{2I_{BIAS}}{k'(W/L)}}=V_t+V_{ov}.
$$

由于 $V_{ov}\propto\sqrt{I_{BIAS}/(W/L)}$，小变化满足 $\Delta V_{ov}/V_{ov}=\tfrac12\bigl[\Delta I_{BIAS}/I_{BIAS}-\Delta(W/L)/(W/L)\bigr]$。因此

$$
\Delta V_{GS}=V_{GS3}-V_{GS4}=\Delta V_t+\frac{V_{ov}}{2}\left(\frac{\Delta I_{BIAS}}{I_{BIAS}}-\frac{\Delta(W/L)}{W/L}\right).
$$

### 第 3 步 — 双极型差分对的贡献

$V_{OD}=V_{C1}-V_{C2}=-I_{C1}R_1+I_{C2}R_2$，故 $V_{OD}=0$ 要求 $I_{C1}/I_{C2}=R_2/R_1$。由 $V_{BE}=V_T\ln(I_C/I_S)$，

$$
\Delta V_{BE}=V_{BE1}-V_{BE2}=V_T\ln\!\left(\frac{I_{C1}}{I_{C2}}\cdot\frac{I_{S2}}{I_{S1}}\right)
=V_T\ln\!\left(\frac{R_2}{R_1}\cdot\frac{I_{S2}}{I_{S1}}\right)
\simeq-V_T\left(\frac{\Delta R}{R}+\frac{\Delta I_S}{I_S}\right),
$$

其中对小失配使用了 $\ln(1+x)\approx x$。

### 第 4 步 — 失调电压及其标准差

将第 2 步与第 3 步相加：

$$
V_{OS}\simeq\Delta V_t+\frac{V_{ov}}{2}\left(\frac{\Delta I_{BIAS}}{I_{BIAS}}-\frac{\Delta(W/L)}{W/L}\right)-V_T\left(\frac{\Delta I_S}{I_S}+\frac{\Delta R}{R}\right).
$$

$V_{OS}$ 是各失配的线性组合；对相互独立的随机变量，方差按权重的平方相加：

$$
\sigma_{V_{OS}}^2=\sigma_{\Delta V_t}^2+\left(\frac{V_{ov}}{2}\right)^2\left[\sigma^2_{\Delta I_{BIAS}/I_{BIAS}}+\sigma^2_{\Delta(W/L)/(W/L)}\right]+V_T^2\left[\sigma^2_{\Delta I_S/I_S}+\sigma^2_{\Delta R/R}\right].
$$

跟随器几乎不吸取栅极电流，因此消除了输入偏置电流，而双极型差分对保留了其以 $V_T$ 加权的小失调。代价是 MOS 阈值失配（threshold mismatch）以单位权重进入，通常占主导（典型值为几 mV），除非 $V_{ov}$ 大到使电流项和 $W/L$ 项可与之相比。
