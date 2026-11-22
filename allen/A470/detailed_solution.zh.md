# 详细步骤 - A470

$R_{10}=R$ 时高 4 位是准确的，$R_9$ 只缩放低 4 位。把 INL 写成 $R_9$ 和低 4 位数值的函数，找出最坏码字，再由 ±0.5 LSB 条件解出 $R_9$。

### 第 1 步 — 任意 $R_9$ 下的输出

由三个反相级（求和器、反相器和输出求和器，反馈电阻都为 $R$）得

$$
v_{out}=\frac{R}{R_{10}}V_{REF}\left(\frac{b_0}{2}+\cdots+\frac{b_3}{16}\right)+\frac{R}{R_9}V_{REF}\left(\frac{b_4}{2}+\cdots+\frac{b_7}{16}\right).
$$

设 $m$（位 $b_0$–$b_3$）和 $n$（位 $b_4$–$b_7$）为两组 4 位的数值，取值均为 0–15。取 $R_{10}=R$：

$$
v_{out}=V_{REF}\left[\frac{m}{16}+\frac{R}{R_9}\cdot\frac{n}{16}\right],\qquad
v_{out,ideal}=V_{REF}\left[\frac{m}{16}+\frac{n}{256}\right].
$$

### 第 2 步 — 以 LSB 表示的 INL

由 $1\,\mathrm{LSB}=V_{REF}/256$：

$$
\mathrm{INL}=\frac{v_{out}-v_{out,ideal}}{V_{REF}/256}=16n\frac{R}{R_9}-n=n\left(\frac{16R}{R_9}-1\right)\ \mathrm{LSB}.
$$

它与 $m$ 无关，在 $n=15$（低四位全为 1）时幅值最大。

### 第 3 步 — $R_9$ 的范围

$$
15\left|\frac{16R}{R_9}-1\right|\le0.5
\;\Longrightarrow\;
\frac{29}{30}\le\frac{16R}{R_9}\le\frac{31}{30}
\;\Longrightarrow\;
\frac{480}{31}R\le R_9\le\frac{480}{29}R .
$$

$$
15.48R\le R_9\le16.55R\qquad(\text{nominal }16R,\ \text{about }-3.2\%/+3.4\%).
$$
