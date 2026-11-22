# 详细步骤 - A191

M1 与 M2 共用同一个栅源电压，因此电流按 $W/L$ 成比例，由此确定设计。小信号电阻由输入端的二极管连接和输出端的 $r_{ds2}$ 决定。求大信号增益时要保留 $(1+\lambda v_{DS})$ 因子，并注意 M1 的漏极电压随信号变化，而 M2 的漏极电压被固定。

### 第 1 步 — 设计 $W_2/L_2$

信号电流 $i_{in}$ 流入 M1 节点，而该节点的直流电流源 $I_1$ 固定，因此它叠加到 $i_{D1}$ 上；同样，$i_{out}$ 是 $i_{D2}$ 在 $I_2$ 附近的变化量。$v_{GS}$ 相等时按平方律（忽略 λ）：

$$
\frac{i_{D2}}{i_{D1}}=\frac{W_2/L_2}{W_1/L_1}=10
\quad\Rightarrow\quad
\frac{W_2}{L_2}=10\quad(\text{e.g. }10\ \mu\mathrm m/1\ \mu\mathrm m).
$$

### 第 2 步 — 输入电阻与输出电阻

输入端看到二极管连接的 M1，其小信号电阻为 $1/(g_{m1}+g_{ds1})\approx1/g_{m1}$；在 $I_{D1}=I_1=100\ \mu$A 下由 $g_m=\sqrt{2K'(W/L)I_D}$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(1)(100\ \mu\mathrm A)}=148\ \mu\mathrm S,\qquad
R_{in}\approx\frac1{g_{m1}}=6.74\ \mathrm{k\Omega}
$$

（计入 $g_{ds1}=4\ \mu$S 时为 $6.56$ kΩ）。输出端看进 M2 的漏极，$I_{D2}=10I_1=1$ mA（理想电流源 $I_2$ 不贡献电导）：

$$
R_{out}=r_{ds2}=\frac1{\lambda I_{D2}}=\frac1{(0.04\ \mathrm{V^{-1}})(1\ \mathrm{mA})}=25\ \mathrm{k\Omega}.
$$

### 第 3 步 — 计入沟道长度调制的静态工作点

取 $\beta_1/2=K'_N(W/L)_1/2=55\ \mu\mathrm{A/V^2}$，二极管连接时 $V_{DS1}=V_{GS1}$，M1 在 100 µA 下满足

$$
(55\ \mu\mathrm{A/V^2})(V_{GS1}-0.7)^2(1+0.04V_{GS1})=100\ \mu\mathrm A
\quad\Rightarrow\quad V_{GS1}=2.00\ \mathrm V .
$$

输出端保持在该电压，因此 $V_{DS2}=V_{DS1}$，两个 $(1+\lambda v_{DS})$ 因子相等，M2 恰好流过 $10\times100\ \mu\mathrm A=1$ mA。

### 第 4 步 — $i_{in}=50\ \mu$A 时的实际增益

此时 M1 流过 150 µA。其二极管电压以及自身的 $(1+\lambda V_{DS1})$ 因子随之增大：解同一方程得 $V_{GS1}=2.28$ V。M2 得到这一栅压，但其漏极仍为 2.00 V：

$$
i_{D2}=10(55\ \mu\mathrm{A/V^2})(2.28-0.7)^2\left[1+0.04(2.00)\right]=1.484\ \mathrm{mA}.
$$

$$
A_i=\frac{\Delta i_{D2}}{\Delta i_{D1}}=\frac{1.484\ \mathrm{mA}-1\ \mathrm{mA}}{50\ \mu\mathrm A}=9.69 .
$$

增益低于 10，因为 M1 电流的一部分增量被其不断增大的 $(1+\lambda V_{DS1})$ 因子吸收，而 $V_{DS2}$ 固定的 M2 没有这一部分。对应的小信号值为 $g_{m2}/(g_{m1}+g_{ds1})\approx9.77$；$i_{in}=-50\ \mu$A 时的大信号值为 9.86。不计沟道长度调制时增益恰好为 10。因此 $i_{in}=50\ \mu$A 时的实际增益约为 9.7。
