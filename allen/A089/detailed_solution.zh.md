# 详细步骤 - A089

二极管连接的 M1 把输入电流转换为 $V_{GS}$，M2 再把同一 $V_{GS}$ 转换回 $i_O$。当 M1 弱（需要较大的 $V_{GS}$ 才能流过 20 µA）而 M2 强时输出最大，反之最小。用平方律精确计算这两种最坏组合，再用一阶灵敏度估计校验。

### 第 1 步 — 电流镜关系

两管漏极电压相同（无 $\lambda$ 失配）时，M1 确定

$$
V_{GS}=V_{T1}+\sqrt{\frac{2I_{in}}{\beta_1}},\qquad \beta_i=K'_i\frac{W_i}{L_i},
$$

M2 输出

$$
i_O=\frac{\beta_2}{2}\big(V_{GS}-V_{T2}\big)^2 .
$$

标称情况下 $\beta=(110\ \mu\mathrm{A/V^2})(3)=330\ \mu\mathrm{A/V^2}$，$V_{GS}=0.7+\sqrt{40/330}=1.048$ V，得 $i_O=20\ \mu$A。

### 第 2 步 — $\beta$ 与 $V_T$ 的极值

$K'$ 和 $W$ 取 −5%、$L$ 取 +5%、$V_T$ 取 +5 mV 时器件最弱，符号相反时最强：

$$
\beta_{weak}=110\ \mu\mathrm{A/V^2}\times0.95\times\frac{3\times0.95}{1.05}=283.6\ \mu\mathrm{A/V^2},\qquad
\beta_{strong}=110\ \mu\mathrm{A/V^2}\times1.05\times\frac{3\times1.05}{0.95}=383.0\ \mu\mathrm{A/V^2}.
$$

### 第 3 步 — 最大输出电流

M1 弱（$\beta_1=283.6\ \mu\mathrm{A/V^2}$，$V_{T1}=0.705$ V），M2 强（$\beta_2=383.0\ \mu\mathrm{A/V^2}$，$V_{T2}=0.695$ V）：

$$
V_{GS}=0.705\ \mathrm V+\sqrt{\frac{2(20\ \mu\mathrm A)}{283.6\ \mu\mathrm{A/V^2}}}=1.0805\ \mathrm V,\qquad
i_O=\frac{383.0\ \mu\mathrm{A/V^2}}{2}(1.0805-0.695)^2\ \mathrm{V^2}=28.5\ \mu\mathrm A .
$$

### 第 4 步 — 最小输出电流

M1 强（$\beta_1=383.0\ \mu\mathrm{A/V^2}$，$V_{T1}=0.695$ V），M2 弱（$\beta_2=283.6\ \mu\mathrm{A/V^2}$，$V_{T2}=0.705$ V）：

$$
V_{GS}=0.695\ \mathrm V+\sqrt{\frac{2(20\ \mu\mathrm A)}{383.0\ \mu\mathrm{A/V^2}}}=1.0182\ \mathrm V,\qquad
i_O=\frac{283.6\ \mu\mathrm{A/V^2}}{2}(1.0182-0.705)^2\ \mathrm{V^2}=13.9\ \mu\mathrm A .
$$

### 第 5 步 — 结果与一阶校验

$$
i_O(\min)=13.9\ \mu\mathrm A,\qquad i_O(\max)=28.5\ \mu\mathrm A\qquad(\text{nominal }20\ \mu\mathrm A,\ -30\%/+42\%).
$$

一阶近似下

$$
\frac{i_O}{I_{in}}\approx1+\frac{\Delta K'}{K'}+\frac{\Delta(W/L)}{W/L}-\frac{2\,\Delta V_T}{V_{GS}-V_T},
$$

其中各 $\Delta$ 为 M2 与 M1 之差。最坏情况给出 $\pm(0.10+0.20+2(10\ \mathrm{mV})/0.348\ \mathrm V)=\pm(0.10+0.20+0.057)=\pm36\%$，与精确的 −30%/+42% 一致；由于电流与过驱动电压成平方关系，精确范围不对称。这些界限假设两管的变化相互独立；若二者一起变化，比值保持为 1，$i_O$ 仍为 20 µA。
