# 详细步骤 - G104

PMOS 电流镜 $M_3$–$M_4$ 迫使两条支路的电流相等。于是 NMOS 管对必须在两个不同的栅源电压下流过相同的电流，二者之差就加在 $R$ 上。用平方律写出这一 KVL，得到关于 $I_{BIAS}$ 的方程，其非零解只取决于 $R$、$\mu_nC_{ox}$ 和两个宽长比。由这些参数即可得出电流的温度特性。

### 第 1 步 — 两支路电流相等

$M_3$ 和 $M_4$ 相同，并共用 $V_{GS}$（$M_4$ 为二极管连接），所以在忽略沟道长度调制时二者电流相等：

$$
I_{D1}=I_{D2}=I_{BIAS}.
$$

### 第 2 步 — 沿 NMOS 栅极回路列 KVL

$M_1$ 为二极管连接，其栅极驱动 $M_2$ 的栅极，而后者的源极被抬高 $I_{BIAS}R$。因此

$$
V_{GS1}=V_{GS2}+I_{BIAS}R .
$$

阈值电压相等，$V_t$ 被消去，剩下 $V_{ov1}-V_{ov2}=I_{BIAS}R$。两个器件都处于饱和区（$M_1$ 为二极管连接，$M_2$ 的漏极接在 $M_4$ 的二极管节点上，远高于其栅压减 $V_t$）。利用平方律 $V_{ov}=\sqrt{2I/(\mu_nC_{ox}W/L)}$：

$$
\sqrt{\frac{2I_{BIAS}}{\mu_nC_{ox}(W/L)_1}}-\sqrt{\frac{2I_{BIAS}}{\mu_nC_{ox}(W/L)_2}}=I_{BIAS}R .
$$

### 第 3 步 — 解出 $I_{BIAS}$

两边除以 $\sqrt{I_{BIAS}}$（求非零解）后平方，

$$
I_{BIAS}=\frac2{\mu_nC_{ox}R^2}\left(\frac1{\sqrt{(W/L)_1}}-\frac1{\sqrt{(W/L)_2}}\right)^2=\frac2{\mu_nC_{ox}(W/L)_1R^2}\left(1-\sqrt{\frac{(W/L)_1}{(W/L)_2}}\right)^2 .
$$

KVL 方程左边必须为正，这就是要求 $(W/L)_2>(W/L)_1$ 的原因。该电流与 $V_{DD}$ 和 $V_t$ 无关。$I_{BIAS}=0$ 同样满足方程，所以需要启动电路（start-up circuit）使电路脱离这一状态。

### 第 4 步 — 温度特性

$C_{ox}$ 和宽长比不随温度变化，所以只有 $\mu_n$ 和 $R$ 起作用，$I_{BIAS}\propto1/(\mu_nR^2)$：

$$
TC_F=\frac1{I_{BIAS}}\frac{dI_{BIAS}}{dT}=-\frac1{\mu_n}\frac{d\mu_n}{dT}-\frac2R\frac{dR}{dT}.
$$

迁移率随温度下降，约按 $T^{-1.5}$ 变化，所以对于与温度无关的电阻，

$$
TC_F=\frac{1.5}T=\frac{1.5}{298\ \mathrm K}\approx+5000\ \mathrm{ppm/°C}.
$$

因此偏置电流随温度升高。温度系数为正的电阻会通过 $-2\,TC_R$ 项部分抵消这一变化。
