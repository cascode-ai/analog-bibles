# 详细步骤 - G257

以 $M_1$ 的受控源 $g_{m1}v_{gs1}$ 为参考元件。在输入源置零时求其回归比 $\mathcal R$，再求渐近增益 $A_\infty$（$g_{m1}\to\infty$）和馈通 $d$（$g_{m1}=0$）；把它们组合得到增益，并用布莱克曼公式求阻抗。

### 第 1 步 — 器件参数

$g_m=\sqrt{2k'(W/L)I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})}=3.464$ mA/V，$r_o=1/(\lambda I_D)=50\ \mathrm{k\Omega}$。每个漏极节点的电阻为 $R=5\ \mathrm{k\Omega}\parallel r_o=4545\ \Omega$，驱动这样一个节点的级的增益为 $-g_mR=-15.75$。

### 第 2 步 — 回归比

令输入置零：理想电流源相当于开路，因此 $M_1$ 的栅极只与 $R_F$ 相连。用从 $M_1$ 漏极流到地的测试电流 $i_t$ 代替 $g_{m1}v_{gs1}$，则 $v_{d1}=-i_tR$。$M_2$ 以增益 $-15.75$ 反相。在输出端，$R_F$ 只通向开路的栅极节点，其中没有电流：输出节点只看到 $R$，$M_3$ 的增益同样为 $-15.75$，且 $v_{gs1}=v_o$。返回的受控源值为 $g_{m1}v_o$：

$$
v_o=(-g_mR)^2(-R\,i_t),\qquad
\mathcal R=-\frac{g_{m1}v_o}{i_t}=(g_mR)^3=15.75^3=3904 .
$$

环路传输为 $\mathcal R=3904$。

### 第 3 步 — 渐近增益、馈通与跨阻

当 $g_{m1}\to\infty$ 时 $v_{gs1}\to0$，$M_1$ 栅极为虚地，$i_i$ 全部流过 $R_F$，故 $A_\infty=-R_F=-10\ \mathrm{k\Omega}$。

当 $g_{m1}=0$ 时，$M_2$ 和 $M_3$ 得不到信号；$i_i$ 经 $R_F$ 流入输出电阻 $R$，故 $d=+R=+4545\ \Omega$。于是

$$
\frac{v_o}{i_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}=(-10\ \mathrm{k\Omega})\frac{3904}{3905}+\frac{4545\ \Omega}{3905}=-9997.4\ \Omega+1.2\ \Omega=-9996\ \Omega .
$$

### 第 4 步 — 输入阻抗与输出阻抗（布莱克曼公式）

布莱克曼公式为 $Z=Z(g_{m1}{=}0)\,[1+\mathcal R(\text{short})]/[1+\mathcal R(\text{open})]$。

- 输入端：$g_{m1}=0$ 时，输入端看到 $R_F$ 与 $R$ 串联，$Z_{in}(g_{m1}{=}0)=14.55\ \mathrm{k\Omega}$。输入短路迫使 $v_{gs1}=0$，故 $\mathcal R(\text{short})=0$；输入开路时 $\mathcal R(\text{open})=3904$。

$$
Z_{in}=\frac{14.55\ \mathrm{k\Omega}}{3905}=3.72\ \Omega .
$$

- 输出端：$g_{m1}=0$ 时，输出端看到 $R=4545\ \Omega$（$R_F$ 终止于开路的栅极）。输出短路使 $v_{gs1}=0$，$\mathcal R(\text{short})=0$；否则 $\mathcal R=3904$。

$$
Z_{out}=\frac{4545\ \Omega}{3905}=1.16\ \Omega .
$$

回归比 3904 与该电路的二端口环路增益（2684）不同，因为二端口方法在两个端口都用 $R_F$ 给前向通路加负载，而这里输入开路时 $R_F$ 中没有电流；两种方法给出的增益和阻抗相同。

### 第 5 步 — 带 1 kΩ 源电阻时

此时 $R_S=1\ \mathrm{k\Omega}$ 把 $M_1$ 栅极接地。求回归比时，$R_F+R_S=11\ \mathrm{k\Omega}$ 成为输出端负载，栅极电压是 $v_o$ 的分压：

$$
R_3=4545\ \Omega\parallel11\ \mathrm{k\Omega}=3216\ \Omega,\qquad v_{gs1}=v_o\frac{R_S}{R_S+R_F}=\frac{v_o}{11},
$$

$$
\mathcal R=(15.75)^2\,(g_mR_3)\,\frac1{11}=(248)(11.14)\frac1{11}=251 .
$$

$g_{m1}=0$ 时输出端看到 $R_3=3216\ \Omega$，输出短路同样使回归消失，故

$$
Z_{out}=\frac{3216\ \Omega}{1+251}=12.8\ \Omega,
$$

约为理想电流源驱动时的十一倍，因为源电阻分走了反馈电流。
