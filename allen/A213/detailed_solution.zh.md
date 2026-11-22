# 详细步骤 - A213

正向压摆率是 $v_{OUT}$ 的最快上升速率，出现在大的正输入阶跃把 M1 驱动到最强时。求 $v_{OUT}=0$ 瞬间 M1 的电流，减去电流沉和电阻取走的部分，余下的除以 $C_L$。

### 第 1 步 — 驱动条件与 M1 的工作区

为得到最大速率，$v_{IN}$ 阶跃到最大值 $+2.5$ V。输出被 $C_L$ 保持而不能跳变，所以在 $v_{OUT}=0$ 时

$$
V_{GS1}=2.5\ \mathrm V,\qquad V_{DS1}=2.5\ \mathrm V,\qquad V_{GS1}-V_T=1.8\ \mathrm V.
$$

由于 $V_{DS1}\ge V_{GS1}-V_T$，M1 处于饱和区。

### 第 2 步 — M1 的漏极电流

平方律饱和电流（忽略体效应和沟道长度调制）为

$$
I_{D1}=\frac{K'_N}{2}\frac WL(V_{GS1}-V_T)^2
=\frac{110\ \mu\mathrm{A/V^2}}{2}(100)(1.8\ \mathrm V)^2
=(5.5\ \mathrm{mA/V^2})(3.24\ \mathrm{V^2})=17.82\ \mathrm{mA}.
$$

### 第 3 步 — 流入电容的电流与压摆率

在输出节点列 KCL：M1 的电流流入电流沉（$I_Q=200\ \mu\mathrm A$）、电阻（$v_{OUT}=0$ 时 $v_{OUT}/R_L=0$）和电容：

$$
C_L\frac{dv_{OUT}}{dt}=I_{D1}-I_Q-\frac{v_{OUT}}{R_L}
=17.82\ \mathrm{mA}-0.2\ \mathrm{mA}-0=17.62\ \mathrm{mA}.
$$

$$
SR^+=\frac{17.62\ \mathrm{mA}}{50\ \mathrm{pF}}=3.52\times10^{8}\ \mathrm{V/s}\approx+352\ \mathrm{V/\mu s}.
$$

上升很快，是因为跟随器能输出大电流；随着 $v_{OUT}$ 上升、$V_{GS1}$ 减小，速率随之下降。
