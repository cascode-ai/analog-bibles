# 详细步骤 - G022

$f_T$ 的定义条件是漏极对源极交流短路（源极和衬底接地），栅极由电流驱动。此时输入电流对栅极到各交流接地端的全部电容充电，输出电流为 $g_mv_{gs}$。在饱和区该总电容与 $V_{GS}$ 无关，只需计算一次，再在各偏置点计算 $g_m$。

### 第 1 步 — $f_T$ 的表达式

D、S、B 均为交流地时，栅极看到 $C_{gs}$、$C_{gd}$ 和 $C_{gb}$ 并联，因此 $i_{in}=j\omega(C_{gs}+C_{gd}+C_{gb})v_{gs}$，$i_{out}=g_mv_{gs}$（在 $f_T$ 附近经 $C_{gd}$ 的电流可以忽略）。令 $|i_{out}/i_{in}|=1$：

$$
f_T=\frac{g_m}{2\pi(C_{gs}+C_{gd}+C_{gb})}.
$$

### 第 2 步 — 栅电容

$C_{ox}=\epsilon_{ox}/t_{ox}=(3.45\times10^{-13}\ \mathrm{F/cm})/(80\times10^{-8}\ \mathrm{cm})=4.31\ \mathrm{fF/\mu m^2}$。$V_{DS}=3$ V 大于所考虑的所有过驱动电压（最大 1.4 V），器件处于饱和区，此时沟道给 $C_{gs}$ 贡献 $\tfrac23WLC_{ox}$，$C_{gd}$ 只剩交叠部分：

$$
C_{gs}=\frac23(10\ \mu\mathrm m^2)(4.31\ \mathrm{fF/\mu m^2})+2\ \mathrm{fF}=30.75\ \mathrm{fF},\qquad
C_{gs}+C_{gd}+C_{gb}=30.75+2+5=37.75\ \mathrm{fF}.
$$

### 第 3 步 — 各 $V_{GS}$ 下的跨导与 $f_T$

$V_{SB}=0$ 时 $V_t=0.6$ V，饱和区中

$$
g_m=k'\frac WL(V_{GS}-V_t)(1+\lambda V_{DS})=(1.94\ \mathrm{mA/V^2})V_{ov}(1.072).
$$

$V_{GS}=1$ V（$V_{ov}=0.4$ V）时：$g_m=0.832$ mA/V，

$$
f_T=\frac{0.832\ \mathrm{mA/V}}{2\pi(37.75\ \mathrm{fF})}=3.51\ \mathrm{GHz}.
$$

| $V_{GS}$ (V) | $V_{ov}$ (V) | $g_m$ (mA/V) | $f_T$ (GHz) | 不计 $1+\lambda V_{DS}$ 时的 $f_T$ (GHz) |
|---|---|---|---|---|
| 1 | 0.4 | 0.832 | 3.51 | 3.27 |
| 1.5 | 0.9 | 1.87 | 7.89 | 7.36 |
| 2 | 1.4 | 2.91 | 12.3 | 11.5 |

由于电容固定，而平方律模型中 $g_m\propto V_{ov}$，$f_T$ 与过驱动电压成正比增大。
