# 详细步骤 - G091

[图 1] 是一个 Widlar 电流源。二极管连接的 $Q_1$ 与 20-kΩ 电阻设定输入电流。$Q_2$ 与之共用基极电压，其 10-kΩ 发射极电阻承担两个基极–发射极电压之差。先求 $I_{IN}$。再沿基极–发射极回路列 KVL，得到关于 $I_{OUT}$ 的超越方程，用迭代法求解。

### 第 1 步 — 输入电流

$$
I_{IN}=\frac{V_{CC}-V_{BE1}}{20\ \mathrm{k\Omega}},\qquad V_{BE1}=V_T\ln\frac{I_{IN}}{I_S}.
$$

从 0.7 V 开始迭代一两次：

$$
V_{BE1}=(26\ \mathrm{mV})\ln\frac{0.717\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.668\ \mathrm V,\qquad
I_{IN}=\frac{15\ \mathrm V-0.668\ \mathrm V}{20\ \mathrm{k\Omega}}=0.717\ \mathrm{mA}.
$$

### 第 2 步 — Widlar 方程

两管基极相连，$Q_1$ 的发射极接地。忽略基极电流时，$V_{BE1}=V_{BE2}+I_{OUT}R_2$。由于每个相同的晶体管都满足 $V_{BE}=V_T\ln(I_C/I_S)$，$I_S$ 相互抵消：

$$
V_T\ln\frac{I_{IN}}{I_{OUT}}=I_{OUT}R_2,\qquad R_2=10\ \mathrm{k\Omega}.
$$

左边随 $I_{OUT}$ 增大而缓慢（按对数）减小，右边线性增大，因此方程恰有一个解。

### 第 3 步 — 迭代求解

对若干试探值 $I_{OUT}$ 计算两边：

| $I_{OUT}$ (µA) | $V_T\ln(I_{IN}/I_{OUT})$ (mV) | $I_{OUT}R_2$ (mV) |
|---|---|---|
| 10.0 | 111.1 | 100.0 |
| 10.9 | 108.8 | 109.0 |
| 11.0 | 108.6 | 110.0 |

两边相交于

$$
I_{OUT}=10.9\ \mu\mathrm A,
$$

此时 $R_2$ 上的压降为 $V_{BE1}-V_{BE2}=109$ mV。计入基极电流（$I_{C1}$ 略小于 $I_{IN}$，且 $R_2$ 中的发射极电流为 $(\beta_F+1)I_{OUT}/\beta_F$）后，结果降为 10.8 µA。电流比 $I_{IN}$ 缩小了 66 倍。
