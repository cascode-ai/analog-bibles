# 详细步骤 - G077

负载相同时，差模输出为零要求两个漏极电流相等。求出两器件流过相同电流所需的栅源电压，将其差值对 $W/L$ 失配线性化，并在偏置过驱动电压（overdrive voltage）下求值。

### 第 1 步 — 偏置过驱动电压

$L_{\text{eff}}=1\ \mu\mathrm m-2(0.09\ \mu\mathrm m)=0.82\ \mu$m，故 $W/L_{\text{eff}}=10/0.82=12.20$。$R_{\text{TAIL}}\to\infty$ 时，平衡状态下每个器件流过 $I_D=I_{\text{TAIL}}/2=25\ \mu$A。由平方律，

$$
V_{ov}=V_{GS}-V_t=\sqrt{\frac{2I_D}{k'(W/L_{\text{eff}})}}=\sqrt{\frac{2(25\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(12.20)}}=0.1454\ \mathrm V .
$$

### 第 2 步 — 失调表达式

失调是使 $I_{D1}=I_{D2}=I_D$ 的栅极电压差：

$$
V_{OS}=V_{GS1}-V_{GS2}=(V_{t1}-V_{t2})+\sqrt{\frac{2I_D}{k'(W/L)_1}}-\sqrt{\frac{2I_D}{k'(W/L)_2}} .
$$

令 $(W/L)_{1,2}=(W/L)(1\pm\tfrac12\delta)$，其中 $\delta=\Delta(W/L)/(W/L)$。由于 $\sqrt{2I_D/k'(W/L)}\propto(W/L)^{-1/2}$，一阶展开得

$$
V_{OS}\approx\Delta V_t-\frac{V_{ov}}2\,\frac{\Delta(W/L)}{W/L}.
$$

因子 $1/2$ 来自平方根：$W/L$ 的相对变化只需过驱动电压一半的相对变化即可恢复电流。

### 第 3 步 — 数值

阈值相同时 $\Delta V_t=0$，最坏情况失配为 $|\delta|=0.02$：

$$
|V_{OS}|=\frac{0.1454\ \mathrm V}{2}(0.02)=1.45\ \mathrm{mV}.
$$

$W/L$ 较大的器件需要较小的 $V_{GS}$。尾电阻只决定共模电流，不影响失调。失调随 $V_{ov}$ 增大，因此偏置在低过驱动电压的 MOS 差分对由 $W/L$ 失配引起的失调较小；这里 $V_{ov}/2=73$ mV 的作用相当于双极差分对中的 $V_T=26$ mV。
