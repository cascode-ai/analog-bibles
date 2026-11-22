# 详细步骤 - G094

峰值电流源仍满足 $I_{OUT}=I_{IN}\exp[-I_{IN}R/(nV_T)]$，但现在 $R$ 固定，$I_{IN}$ 是未知量。这个关于 $I_{IN}$ 的函数先上升、达到峰值后下降，所以低于峰值的目标输出电流对应两个输入电流。分别求出这两个解，再对每个解应用弱反型条件 $W/L>I_D/I_t$。

### 第 1 步 — 传输特性

$M_1$ 的栅极位于 $R$ 的上端，其漏极（即 $M_2$ 的栅极）位于下端，所以 $V_{GS2}=V_{GS1}-I_{IN}R$。对处于弱反型区的相同器件，$I_D=(W/L)I_t\exp[(V_{GS}-V_t)/(nV_T)]$，于是

$$
I_{OUT}=I_{IN}\exp\!\left(-\frac{I_{IN}}{I_0}\right),\qquad I_0=\frac{nV_T}R=\frac{(1.5)(26\ \mathrm{mV})}{10\ \mathrm{k\Omega}}=3.9\ \mu\mathrm A .
$$

令 $dI_{OUT}/dI_{IN}=(1-I_{IN}/I_0)e^{-I_{IN}/I_0}=0$，得峰值位于 $I_{IN}=I_0=3.9\ \mu\mathrm A$，此时 $I_{OUT,\max}=I_0/e=1.43\ \mu\mathrm A$。由于 $0.1\ \mu\mathrm A<1.43\ \mu\mathrm A$，峰值两侧各有一个解。

![峰值电流源的传输曲线：R = 10 kΩ 时输出电流随输入电流的变化，峰值为 1.43 µA，与 0.1 µA 目标线交于 0.103 µA 和 20.8 µA](/q/G094/solution-curves.zh.svg)

### 第 2 步 — 低解

在上升段 $I_{IN}\ll I_0$，指数项接近 1。从 $I_{IN}=0.1\ \mu\mathrm A$ 开始迭代 $I_{IN}=(0.1\ \mu\mathrm A)\,e^{I_{IN}/I_0}$：

$$
I_{IN}=(0.1\ \mu\mathrm A)\exp\!\left(\frac{0.1027\ \mu\mathrm A}{3.9\ \mu\mathrm A}\right)=(0.1\ \mu\mathrm A)(1.0267)=0.1027\ \mu\mathrm A .
$$

此时电阻上的压降只有 $I_{IN}R=1.03$ mV，电路几乎是 1:1 电流镜。

### 第 3 步 — 高解

在下降段取对数，$I_{IN}=I_0\ln(I_{IN}/0.1\ \mu\mathrm A)$，从 20 µA 开始迭代：

$$
I_{IN}=(3.9\ \mu\mathrm A)\ln\frac{20.8\ \mu\mathrm A}{0.1\ \mu\mathrm A}=(3.9\ \mu\mathrm A)(5.338)=20.8\ \mu\mathrm A .
$$

电阻上的压降为 208 mV，即 $5.34\,nV_T$，使电流缩小 208 倍。通常用来实现 $I_{OUT}\ll I_{IN}$ 的就是这一支。

### 第 4 步 — 各解对应的最小 $W/L$

弱反型要求 $V_{GS}-V_t=nV_T\ln[I_D/((W/L)I_t)]<0$，即 $W/L>I_D/I_t$。$M_1$ 流过较大的电流 $I_{IN}$，所以由它决定这对相同器件的下限：

| 解 | $I_{IN}$ | $W/L>I_{IN}/I_t$ |
|---|---|---|
| 低解 | 0.1027 µA | 1.03 |
| 高解 | 20.8 µA | 208 |

两种情况下 $M_2$（0.1 µA）都只需 $W/L>1$。综上：$I_{IN}=0.103\ \mu\mathrm A$，$W/L\ge1.03$；或 $I_{IN}=20.8\ \mu\mathrm A$，$W/L\ge208$。
