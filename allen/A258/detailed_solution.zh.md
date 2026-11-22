# 详细步骤 - A258

从输出级往前推：输出极点指标确定 $g_{m6}$，零点指标随后确定 $C_c$，GB 再确定 $g_{m1}$。每个跨导与已知偏置电流结合，通过平方律给出 $W/L$。GB 一律换算为 rad/s。

### 第 1 步 — 由输出极点求 $g_{m6}$

$GB=1$ MHz $=2\pi\times10^6$ rad/s，$|p_2|=g_{m6}/C_2$：

$$
g_{m6}=5\,GB\,C_2=5(2\pi\times10^6\ \mathrm{rad/s})(20\ \mathrm{pF})=628.3\ \mu\mathrm S .
$$

### 第 2 步 — 由右半平面零点求 $C_c$

由 $z=g_{m6}/C_c=3\,GB$：

$$
C_c=\frac{g_{m6}}{3\,GB}=\frac{5\,GB\,C_2}{3\,GB}=\frac53C_2=33.3\ \mathrm{pF}.
$$

### 第 3 步 — $g_{m1}$ 与 $W_1/L_1$

由 $GB=g_{m1}/C_c$：

$$
g_{m1}=GB\,C_c=(2\pi\times10^6\ \mathrm{rad/s})(33.3\ \mathrm{pF})=209.4\ \mu\mathrm S .
$$

每只输入管承担一半尾电流，$I_1=I_5/2=20\ \mu\mathrm A$。由 $g_m=\sqrt{2K'(W/L)I_D}$ 反解：

$$
\frac{W_1}{L_1}=\frac{g_{m1}^2}{2K'_NI_1}=\frac{(209.4\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(20\ \mu\mathrm A)}=9.97\approx10 .
$$

### 第 4 步 — $W_6/L_6$

M6 为 p 沟道管，流过 M7 的电流 $I_6=320\ \mu\mathrm A$：

$$
\frac{W_6}{L_6}=\frac{g_{m6}^2}{2K'_PI_6}=\frac{(628.3\ \mu\mathrm S)^2}{2(50\ \mu\mathrm{A/V^2})(320\ \mu\mathrm A)}=12.3 .
$$

### 第 5 步 — 结果与检验

$$
C_c=33.3\ \mathrm{pF},\qquad \frac{W_1}{L_1}\approx10,\qquad \frac{W_6}{L_6}\approx12.3 .
$$

采用这些值，两极点模型在 GB 处给出的相位裕度为 $90°-\arctan(1/5)-\arctan(1/3)=90°-11.3°-18.4°=60.3°$，其中已计入右半平面零点的滞后。
