# 详细步骤 - A445

$C_L$ 使整个特性按常数因子衰减（增益误差）。找出由此产生的误差最大之处，并要求其不超过 0.5 LSB。

### 第 1 步 — 有负载电容时的输出

对浮空的上极板节点应用电荷守恒（φ1 结束后电荷为零；φ2 期间 $C_{eq}=\sum b_iC/2^{i}$ 接到 $V_{REF}$，$2C-C_{eq}+C_L$ 接地），得

$$
v_{OUT}=\frac{C_{eq}}{2C+C_L}V_{REF}=\frac{D\,V_{REF}}{1+x},\qquad
D=\sum_{i=0}^{N-1}b_i2^{-(i+1)},\quad x=\frac{C_L}{2C}.
$$

### 第 2 步 — 最坏情况误差

相对理想输出 $DV_{REF}$ 的误差为

$$
|\Delta v_{OUT}|=D\,V_{REF}\left(1-\frac{1}{1+x}\right)=D\,V_{REF}\,\frac{x}{1+x},
$$

它随 $D$ 增大，在满量程 $D=1-2^{-N}$ 处最大。

### 第 3 步 — 施加 0.5 LSB 限制

由 $0.5\,\mathrm{LSB}=V_{REF}/2^{N+1}$：

$$
\left(1-2^{-N}\right)\frac{x}{1+x}\le2^{-(N+1)}
\;\Longrightarrow\;
\frac{x}{1+x}\le\frac{1}{2^{N+1}-2}
\;\Longrightarrow\;
x\le\frac{1}{2^{N+1}-3}.
$$

因此

$$
\frac{C_L}{C}=2x\le\frac{2}{2^{N+1}-3}\approx\frac{1}{2^{N}} .
$$

负载电容最多约为 LSB 电容（端接电容）$C/2^{N-1}$ 的一半。例如 $N=10$ 时 $C_L/C\le2/2045=9.78\times10^{-4}$，基本等于 $2^{-10}=9.77\times10^{-4}$。
