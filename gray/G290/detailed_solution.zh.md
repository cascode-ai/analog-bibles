# 详细步骤 - G290

把闭环增益用环路增益 $T=af$ 表示，在环路增益为单位值的频率 $\omega_0$ 处求值（此处相位裕度完全确定了 $T$），再与低频增益比较。

### 第 1 步 — 用 $T$ 表示闭环增益

对于前向增益为 $a$、反馈系数 $f$ 与频率无关的负反馈放大器，
$$
A(j\omega)=\frac{a}{1+af}=\frac1f\cdot\frac{T(j\omega)}{1+T(j\omega)} .
$$
低频时 $T_0\gg1$，故 $A_0\approx1/f$。因此相对低频值的峰化倍数为 $|T/(1+T)|$。

### 第 2 步 — $\omega_0$ 处的环路增益

按定义，$\omega_0$ 处 $|T|=1$，而相位裕度是 $\angle T$ 与 $-180^\circ$ 的距离：
$$
\angle T(j\omega_0)=-180^\circ+\mathrm{PM}=-160^\circ,\qquad T(j\omega_0)=e^{-j160^\circ}.
$$

### 第 3 步 — $1+T$ 的幅值

两个夹角为 $160^\circ$ 的单位矢量相加：
$$
|1+e^{-j160^\circ}|=\sqrt{(1+\cos160^\circ)^2+\sin^2160^\circ}=\sqrt{2+2\cos160^\circ}=2\cos80^\circ=2\sin\frac{\mathrm{PM}}{2}=0.347 .
$$

### 第 4 步 — 峰化

由 $|T|=1$，
$$
|A(j\omega_0)|=\frac1f\cdot\frac{|T|}{|1+T|}=\frac1f\cdot\frac{1}{2\sin(\mathrm{PM}/2)}=\frac1f\cdot\frac1{0.347}=\frac{2.88}{f}.
$$
与 $A_0\approx1/f$ 相比，单位环路增益频率处的闭环增益约为低频值的 **2.88 倍**，即峰化 $20\log_{10}2.88=9.2$ dB。相位裕度小使 $T$ 靠近 $-1$，从而 $|1+T|$ 很小。
