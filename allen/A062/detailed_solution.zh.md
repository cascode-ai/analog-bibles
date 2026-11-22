# 详细步骤 - A062

在直流工作点处把平方律电流分别对 $v_{GS}$、$v_{BS}$ 和 $v_{DS}$ 求导。饱和区的参数用直流电流表示；非饱和区的参数在求出含体效应的阈值后，由各端电压得到。全程使用幅值，因此同一组公式也适用于 p 沟道器件。

### 第 1 步 — 各工作区的小信号参数

记 $\beta=K'W/L$，含体效应的阈值为 $|V_T|=|V_{T0}|+\gamma(\sqrt{2|\phi_F|+|V_{SB}|}-\sqrt{2|\phi_F|})$，于是 $\partial|V_T|/\partial|V_{SB}|=\gamma/(2\sqrt{2|\phi_F|+|V_{SB}|})$：

$$
\begin{aligned}
\text{saturation, } |I_D|=\tfrac\beta2(|V_{GS}|-|V_T|)^2(1+\lambda|V_{DS}|):&\quad
g_m\approx\sqrt{2\beta|I_D|},\quad
g_{mbs}=g_m\frac{\gamma}{2\sqrt{2|\phi_F|+|V_{SB}|}},\quad
g_{ds}\approx\lambda|I_D|,\\
\text{nonsaturation, } |I_D|=\beta\big[(|V_{GS}|-|V_T|)|V_{DS}|-\tfrac12|V_{DS}|^2\big]:&\quad
g_m=\beta|V_{DS}|,\quad
g_{mbs}=\frac{\beta\gamma|V_{DS}|}{2\sqrt{2|\phi_F|+|V_{SB}|}},\quad
g_{ds}=\beta\big(|V_{GS}|-|V_T|-|V_{DS}|\big).
\end{aligned}
$$

两种器件的 $W/L=100\ \mu\mathrm m/10\ \mu\mathrm m=10$，因此 $\beta_n=1.1\ \mathrm{mA/V^2}$，$\beta_p=0.5\ \mathrm{mA/V^2}$。

### 第 2 步 — (i) 饱和区，$|I_D|=50\ \mu$A，$|V_{SB}|=2$ V

以 n 沟道器件为代表代入：

$$
g_m=\sqrt{2(1.1\ \mathrm{mA/V^2})(50\ \mu\mathrm A)}=332\ \mu\mathrm S,\qquad
\frac{\gamma}{2\sqrt{2|\phi_F|+|V_{SB}|}}=\frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{2.7\ \mathrm V}}=0.122,
$$

因此 $g_{mbs}=0.122\times332\ \mu\mathrm S=40.4\ \mu\mathrm S$，$g_{ds}=(0.01\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=0.5\ \mu\mathrm S$。

| 器件 | $g_m$ (µS) | $g_{mbs}/g_m$ | $g_{mbs}$ (µS) | $g_{ds}$ (µS) |
|---|---|---|---|---|
| n 沟道 | 332 | 0.122 | 40.4 | 0.5 |
| p 沟道 | 224 | 0.170 | 38.1 | 0.5 |

对 p 沟道器件，$\gamma/(2\sqrt{2.8\ \mathrm V})=0.57/3.347=0.170$。两者的 $g_{ds}$ 相等，因为它只取决于 $\lambda$ 和电流。

### 第 3 步 — (ii) $|V_{GS}|=5$ V、$|V_{DS}|=1$ V、$|V_{BS}|=2$ V 时的阈值与工作区

$$
|V_{Tn}|=0.7+0.4\big(\sqrt{2.7}-\sqrt{0.7}\big)=1.023\ \mathrm V,\qquad
|V_{Tp}|=0.7+0.57\big(\sqrt{2.8}-\sqrt{0.8}\big)=1.144\ \mathrm V .
$$

两者都满足 $|V_{DS}|=1\ \mathrm V<|V_{GS}|-|V_T|$（分别为 3.977 V 和 3.856 V），因此都处于非饱和区。n 沟道的直流电流为 $\beta[(|V_{GS}|-|V_T|)|V_{DS}|-|V_{DS}|^2/2]=3.83$ mA，p 沟道为 1.68 mA。

### 第 4 步 — (ii) 非饱和区参数

对 n 沟道器件：

$$
g_m=(1.1\ \mathrm{mA/V^2})(1\ \mathrm V)=1.1\ \mathrm{mS},\quad
g_{mbs}=0.122\times1.1\ \mathrm{mS}=134\ \mu\mathrm S,\quad
g_{ds}=(1.1\ \mathrm{mA/V^2})(5-1.023-1)\ \mathrm V=3.28\ \mathrm{mS}.
$$

| 器件 | $g_m$ (mS) | $g_{mbs}$ (µS) | $g_{ds}$ (mS) | $r_{ds}$ (Ω) |
|---|---|---|---|---|
| n 沟道 | 1.1 | 134 | 3.28 | 305 |
| p 沟道 | 0.5 | 85.2 | 1.43 | 700 |

非饱和区中 $g_{ds}$ 大于 $g_m$，与饱和区相反（饱和区中 $g_{ds}$ 比 $g_m$ 小三个数量级）：处于该区的器件主要表现为压控电阻。若计入因子 $(1+\lambda|V_{DS}|)$，这些数值约变化 1%。
