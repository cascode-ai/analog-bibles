# 详细步骤 - A032

版图一旦确定，方块数和电容面积就不再变化；随工艺变化的只有方块电阻和单位面积电容。−3 dB 频率与 $RC$ 成反比，因此其极值出现在两个容差都使 $RC$ 朝同一方向变化时。

### 第 1 步 — 转折频率的变化规律

$$
f_{-3dB}=\frac{1}{2\pi RC},\qquad R=NR_\square,\qquad C=A_CC_A .
$$

$N$ 和 $A_C$ 固定时，$R\propto R_\square$，$C\propto C_A$，故

$$
f_{-3dB}=f_{nom}\,\frac{R_{\square,nom}}{R_\square}\cdot\frac{C_{A,nom}}{C_A},\qquad f_{nom}=1\ \mathrm{MHz}.
$$

电阻变化 ±30 %，电容变化 ±10 %，二者相互独立。

### 第 2 步 — 最高频率

两个元件都取下限，$R=0.7R_{nom}$，$C=0.9C_{nom}$：

$$
f_{max}=\frac{1\ \mathrm{MHz}}{(0.7)(0.9)}=\frac{1\ \mathrm{MHz}}{0.63}=1.59\ \mathrm{MHz}.
$$

### 第 3 步 — 最低频率

两个元件都取上限，$R=1.3R_{nom}$，$C=1.1C_{nom}$：

$$
f_{min}=\frac{1\ \mathrm{MHz}}{(1.3)(1.1)}=\frac{1\ \mathrm{MHz}}{1.43}=0.699\ \mathrm{MHz}.
$$

### 第 4 步 — 解释

最坏情况范围为 0.70–1.59 MHz，即相对标称值 1 MHz 为 −30 % 到 +59 %；范围不对称，因为 $f$ 取决于 $1/(RC)$。结果与所选的具体尺寸无关：例如取 $R_{nom}\approx12.6$ kΩ、$C_{nom}\approx12.6$ pF，$1/[2\pi(8.83\ \mathrm{k\Omega})(11.4\ \mathrm{pF})]$ 同样给出 1.59 MHz。因此在集成工艺中，RC 时间常数的绝对值控制得很差，这就是精密滤波器依靠同类元件之比或调谐的原因。
