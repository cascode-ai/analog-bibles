# 详细步骤 - A220

每个跟随器的输出节点都由跟随管的跨导从输入端驱动，同时经第二只晶体管接到交流地，形成负载电导。逐个写出该电导，利用题给比例把所有量都用 n 沟道参数表示，再比较增益。

### 第 1 步 — n 沟道与 p 沟道参数的关系

所有器件 $W/L$ 相同、电流均为 $I$，由平方律

$$
g_{m}=\sqrt{2K'\frac WL I}\quad\Rightarrow\quad g_{mP}=\sqrt{\frac{K'_P}{K'_N}}\,g_{mN}=\frac{g_{mN}}{\sqrt2},
$$

$$
g_{ds}=\lambda I\quad\Rightarrow\quad g_{dsP}=2g_{dsN}.
$$

### 第 2 步 — 跟随级的小信号模型

设跟随管跨导为 $g_{mF}$、输出电导为 $g_{dsF}$，栅极接 $v_{in}$，源极为 $v_{out}$，于是 $v_{gs}=\pm(v_{in}-v_{out})$，等式两边的极性符号相同。第二只晶体管把 $v_{out}$ 接到某个交流地，呈现负载电导 $G_L$。空载输出节点的 KCL：

$$
g_{mF}(v_{in}-v_{out})=(g_{dsF}+G_L)\,v_{out}\quad\Rightarrow\quad
A_v=\frac{g_{mF}}{g_{mF}+g_{dsF}+G_L}.
$$

负载电导取决于第二只器件的接法：

- **二极管型负载**（栅极接到另一侧同为交流地的节点，故 $|v_{gs}|=|v_{out}|$）：$G_L=g_{m,load}+g_{ds,load}$。电路 1 中 n 沟道 M2 的栅极和漏极接输出；电路 2 中 p 沟道 M2 同样如此。电路 3 中 p 沟道 M2 的源极接输出，栅极和漏极接地；电路 4 中 n 沟道 M2 的源极接输出，栅极和漏极接 $V_{DD}$。四种情况下 $v_{gs2}$ 都等于 $\pm v_{out}$。
- **电流源负载**（栅极接固定偏置 $V_{BN}$ 或 $V_{BP}$，电路 5 和 6）：$v_{gs}=0$，故 $G_L=g_{ds,load}$，只剩输出电导。

### 第 3 步 — 六个电路的增益

对二极管负载电路利用 $g_m\gg g_{ds}$，比例关系见第 1 步：

| 电路 | 跟随管 | 负载 | $A_v$ | 数值 |
|---|---|---|---|---|
| 1 | n（M1） | n 二极管 | $\dfrac{g_{mN}}{2g_{mN}+2g_{dsN}}$ | ≈ 0.5 |
| 2 | p（M1） | p 二极管 | $\dfrac{g_{mP}}{2g_{mP}+2g_{dsP}}$ | ≈ 0.5 |
| 3 | n（M1） | 接地的 p 二极管 | $\dfrac{g_{mN}}{g_{mN}+g_{mP}}=\dfrac{\sqrt2}{1+\sqrt2}$ | ≈ 0.586 |
| 4 | p（M1） | 接 $V_{DD}$ 的 n 二极管 | $\dfrac{g_{mP}}{g_{mP}+g_{mN}}=\dfrac{1}{1+\sqrt2}$ | ≈ 0.414 |
| 5 | n（M1） | n 电流沉 | $\dfrac{g_{mN}}{g_{mN}+2g_{dsN}}$ | ≈ $1-2g_{dsN}/g_{mN}$ |
| 6 | p（M2） | p 电流源 | $\dfrac{g_{mP}}{g_{mP}+2g_{dsP}}$ | ≈ $1-2g_{dsP}/g_{mP}$ |

二极管负载跟随器（1–4）是两个跨导之间的分压，增益不超过约 0.59。电流源负载跟随器（5、6）的增益接近 1。

### 第 4 步 — 增益最高：电路 5

比较电路 5、6 与单位增益的差距，利用 $g_{dsP}=2g_{dsN}$、$g_{mP}=g_{mN}/\sqrt2$：

$$
1-A_{v5}\approx\frac{2g_{dsN}}{g_{mN}},\qquad
1-A_{v6}\approx\frac{2g_{dsP}}{g_{mP}}=\frac{2(2g_{dsN})}{g_{mN}/\sqrt2}=4\sqrt2\,\frac{g_{dsN}}{g_{mN}} .
$$

p 沟道电路的差距大 $2\sqrt2\approx2.8$ 倍，因为 p 沟道器件的 $g_m$ 更小、$g_{ds}$ 更大。因此**电路 5**，即带 n 沟道电流沉负载的 n 沟道跟随器，小信号电压增益最高，$A_v\approx1-2g_{dsN}/g_{mN}$。
