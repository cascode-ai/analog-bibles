# 详细步骤 - A069

开关中没有电流，沟道两端都处于 $V_S$，因此器件工作在非饱和区的 $V_{DS}=0$ 处。小信号导通电阻是该点 $\partial i_D/\partial v_{DS}$ 的倒数，它通过栅驱动和体效应随 $V_S$ 变化。

### 第 1 步 — 偏置条件

$I=0$ 意味着沟道上没有压降，两端都在 $V_S$：

$$
V_{DS}=0,\qquad V_{GS}=5\ \mathrm V-V_S,\qquad V_{SB}=V_S-0=V_S .
$$

由于体效应，阈值随 $V_S$ 升高：$V_T=V_{T0}+\gamma(\sqrt{2|\phi_F|+V_S}-\sqrt{2|\phi_F|})$。

### 第 2 步 — $V_{DS}=0$ 处的导通电阻

对非饱和区电流求导：

$$
\frac{\partial i_D}{\partial v_{DS}}=K'\frac WL\big(v_{GS}-V_T-v_{DS}\big)
\quad\Rightarrow\quad
r_{ON}=\frac{1}{K'(W/L)(V_{GS}-V_T)},
$$

适用于 $V_{GS}>V_T$，否则晶体管截止。这里 $K'W/L=(110\ \mu\mathrm{A/V^2})(2)=220\ \mu\mathrm{A/V^2}$。

### 第 3 步 — 三种情况

$V_S=1$ V 时：

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{1.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=0.887\ \mathrm V,\qquad
r_{ON}=\frac{1}{(220\ \mu\mathrm{A/V^2})(4\ \mathrm V-0.887\ \mathrm V)}=1.46\ \mathrm{k\Omega}.
$$

| $V_S$ (V) | $V_{GS}$ (V) | $V_T$ (V) | $V_{GS}-V_T$ (V) | $R$ |
|---|---|---|---|---|
| 1.0 | 4.0 | 0.887 | 3.113 | 1.46 kΩ |
| 3.0 | 2.0 | 1.135 | 0.865 | 5.25 kΩ |
| 5.0 | 0 | 1.320 | < 0 | ∞（截止） |

$V_S=5$ V 时栅源电压为零，低于阈值，开关断开，只有漏电流。当 $V_S$ 接近 $5\ \mathrm V-V_T$ 时，电阻急剧增大，原因既有栅驱动减小，也有体效应使 $V_T$ 升高；若不计体效应，3 V 时的电阻仅为 3.50 kΩ。
