# 详细步骤 - G079

把每个晶体管建模为 $g_m v_{gs}$ 与各自的 $r_o$ 并联。将每一侧看作由其栅压和尾节点电压 $v_t$ 共同驱动的半边电路，求出它的漏极电流。两个半边共用尾节点，因此当 $r_{o1}\ne r_{o2}$ 时二者并不独立。把 $v_t$ 作为两侧共用的一个未知量，在该节点列一个 KCL 方程，即可把两侧联系起来。对其中对称的部分，这一做法退化为通常的差模半边电路（尾节点为交流地）和共模半边电路（$2r_{\text{tail}}$ 源极负反馈）。失配项则来自保留下来的 $v_t$ 耦合。记 $R=R_1=R_2=10\ \mathrm{k\Omega}$，$\bar r_o=500\ \mathrm{k\Omega}$，$\Delta r_o=r_{o1}-r_{o2}=10\ \mathrm{k\Omega}$，$G_t=1/r_{\text{tail}}$。

### 第 1 步 — 给定尾节点电压时一侧的漏极电流

设 $i_k$（$k=1,2$）为 $M_k$ 中由漏极流向源极的小信号电流。由 $v_{gs}=v_{ik}-v_t$、$v_{ds}=v_{ok}-v_t$，并取电源为交流地，

$$
i_k=g_m(v_{ik}-v_t)+\frac{v_{ok}-v_t}{r_{ok}},\qquad v_{ok}=-Ri_k .
$$

消去 $v_{ok}$ 得

$$
i_k=a_kv_{ik}-b_kv_t,\qquad a_k=\frac{g_mr_{ok}}{r_{ok}+R},\qquad b_k=\frac{1+g_mr_{ok}}{r_{ok}+R}.
$$

其中 $a_k$ 是以 $R$ 为负载的共源级（common-source stage）的跨导。系数 $b_k$ 大于 $a_k$，因为 $v_t$ 升高时既减小 $v_{gs}$，又减小 $v_{ds}$。注意 $a_k-b_k=-1/(r_{ok}+R)$，即仅经过 $r_{ok}$ 和 $R$ 的通路的电导。

| | $a_k$ (mA/V) | $b_k$ (mA/V) |
|---|---|---|
| $M_1$，$r_{o1}=505\ \mathrm{k\Omega}$ | 0.980583 | 0.982524 |
| $M_2$，$r_{o2}=495\ \mathrm{k\Omega}$ | 0.980198 | 0.982178 |

两者之差为 $a_1-a_2=3.845\times10^{-7}\ \mathrm{A/V}$，$b_1-b_2=3.461\times10^{-7}\ \mathrm{A/V}$；其和为 $B=b_1+b_2=1.96470\ \mathrm{mA/V}$。

### 第 2 步 — 在尾节点处联系两侧

两路漏极电流都流入 $r_{\text{tail}}$：$i_1+i_2=G_tv_t$。代入第 1 步的结果，

$$
v_t=\frac{a_1v_{i1}+a_2v_{i2}}{B+G_t},\qquad B+G_t=1.96570\ \mathrm{mA/V}.
$$

输出由 $v_{ok}=-Ri_k$ 得到。尾节点方程把电流之和化为 $G_tv_t$：

$$
v_{oc}=-\frac R2(i_1+i_2)=-\frac{R\,v_t}{2r_{\text{tail}}},\qquad
v_{od}=-R(i_1-i_2)=-R\left[a_1v_{i1}-a_2v_{i2}-(b_1-b_2)v_t\right].
$$

因此，所有共模输出都由尾节点的摆动决定。

### 第 3 步 — 差模输入：$A_{dm}$ 与 $A_{dm-cm}$

施加 $v_{i1}=v_{id}/2$，$v_{i2}=-v_{id}/2$。于是

$$
\frac{v_t}{v_{id}}=\frac{a_1-a_2}{2(B+G_t)}=\frac{3.845\times10^{-7}\ \mathrm{A/V}}{2(1.96570\ \mathrm{mA/V})}=9.78\times10^{-5}.
$$

因此尾节点在 $10^{-4}$ 的精度内是交流地。失配只使两个 $a_k$ 略有差别。

$$
A_{dm}=-R\left[\frac{a_1+a_2}2-(b_1-b_2)\frac{v_t}{v_{id}}\right]
=-(10\ \mathrm{k\Omega})\left[0.980390\ \mathrm{mA/V}-3.4\times10^{-11}\ \mathrm{A/V}\right]=-9.804 .
$$

修正项可以忽略，所以这就是差模半边电路：负载为 $R\|r_o$ 的共源级，

$$
A_{dm}\approx-g_m(R\|\bar r_o)=-(1\ \mathrm{mA/V})(9.80\ \mathrm{k\Omega})=-9.80 .
$$

共模输出只来自尾节点的微小摆动：

$$
A_{dm-cm}=-\frac{R}{2r_{\text{tail}}}\frac{v_t}{v_{id}}=-\frac{10\ \mathrm{k\Omega}}{2(1\ \mathrm{M\Omega})}(9.78\times10^{-5})=-4.9\times10^{-7}\approx0 .
$$

### 第 4 步 — 共模输入：$A_{cm}$ 与 $A_{cm-dm}$

施加 $v_{i1}=v_{i2}=v_{ic}$。于是

$$
\frac{v_t}{v_{ic}}=\frac{a_1+a_2}{B+G_t}=\frac{1.96078\ \mathrm{mA/V}}{1.96570\ \mathrm{mA/V}}=0.99750 .
$$

源极跟随栅极，$v_{gs}$ 只变化 $0.0025\,v_{ic}$。

$$
A_{cm}=-\frac{R}{2r_{\text{tail}}}\frac{v_t}{v_{ic}}=-\frac{10\ \mathrm{k\Omega}}{2(1\ \mathrm{M\Omega})}(0.99750)=-4.99\times10^{-3}.
$$

这就是带 $2r_{\text{tail}}$ 源极负反馈的共模半边电路，$A_{cm}=-R\bar a/(1+2r_{\text{tail}}\bar b)$。不计 $r_o$ 时，它为 $\approx-g_mR/(1+2g_mr_{\text{tail}})=-10/2001=-5.0\times10^{-3}$。

求差模输出时，利用 $a_k-b_k=-1/(r_{ok}+R)$ 把每路电流分成两部分：

$$
i_k=-\frac{v_{ic}}{r_{ok}+R}+b_k(v_{ic}-v_t).
$$

第一部分是源极升高、$v_{ds}$ 约下降 $v_{ic}$ 时经 $r_{ok}$ 和 $R$ 流过的电流；第二部分是 $v_{gs}$ 的微小变化经 $b_k$ 产生的电流。两部分在两侧都不相等：

$$
\begin{aligned}
\frac{i_1-i_2}{v_{ic}}&=\left(\frac1{r_{o2}+R}-\frac1{r_{o1}+R}\right)+(b_1-b_2)\left(1-\frac{v_t}{v_{ic}}\right)\\
&=3.845\times10^{-8}\ \mathrm{S}+(3.461\times10^{-7}\ \mathrm{S})(0.00250)=3.932\times10^{-8}\ \mathrm{S},
\end{aligned}
$$

$$
A_{cm-dm}=-R\frac{i_1-i_2}{v_{ic}}=-(10\ \mathrm{k\Omega})(3.932\times10^{-8}\ \mathrm S)=-3.93\times10^{-4}.
$$

这一共模到差模的转换（CM-to-DM conversion）主要来自 $r_o$ 通路，电流差约为 $\approx v_{ic}\,\Delta r_o/\bar r_o^{\,2}$。负载是匹配的，所以转换全部来自不相等的 $r_o$。

### 第 5 步 — 理想尾电流源，$r_{\text{tail}}\to\infty$

$G_t=0$ 时，尾节点方程对任何输入都迫使 $i_1+i_2=0$。由第 2 步，$v_{oc}=0$：

$$
A_{cm}\to0,\qquad A_{dm-cm}\to0 .
$$

$A_{dm}$ 仍为 $-9.80$，因为对差模输入而言尾节点本来就是交流地。

$A_{cm-dm}$ 不会消失。$G_t=0$ 时 $v_t/v_{ic}=(a_1+a_2)/(b_1+b_2)$，由第 2 步得

$$
\begin{aligned}
A_{cm-dm}&=-R\left[(a_1-a_2)-(b_1-b_2)\frac{a_1+a_2}{b_1+b_2}\right]=-\frac{2R(a_1b_2-a_2b_1)}{b_1+b_2}\\
&=-\frac{2g_mR\,\Delta r_o}{(1+g_mr_{o1})(r_{o2}+R)+(1+g_mr_{o2})(r_{o1}+R)}
\approx-\frac{R\,\Delta r_o}{(\bar r_o+R)(\bar r_o+1/g_m)},
\end{aligned}
$$

其中用到 $a_1b_2-a_2b_1=g_m\Delta r_o/[(r_{o1}+R)(r_{o2}+R)]$。数值计算：

$$
A_{cm-dm}\to-\frac{2(1\ \mathrm{mA/V})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega})}{(506)(505\ \mathrm{k\Omega})+(496)(515\ \mathrm{k\Omega})}=-3.91\times10^{-4}\approx-\frac{R\,\Delta r_o}{\bar r_o^{\,2}} .
$$

理想尾电流源固定了两路漏极电流之和，因此共模输出消失。但源极仍跟随 $v_{ic}$，不相等的 $r_{o1}$ 和 $r_{o2}$ 仍流过不相等的电流变化；由于总和固定，这些变化只能表现为纯差模电流。与负载失配不同，$r_o$ 失配即使在理想尾电流源下也会把共模转换为差模输出。

$r_{\text{tail}}=1\ \mathrm{M\Omega}$ 时的结果汇总：$A_{dm}=-9.80$，$A_{cm}=-5.0\times10^{-3}$，$A_{cm-dm}=-3.9\times10^{-4}$，$A_{dm-cm}=-4.9\times10^{-7}\approx0$。
