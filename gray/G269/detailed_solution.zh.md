# 详细步骤 - G269

辅助放大器 $A_1$ 检测 $M_2$ 的源极（节点 $X$，即 $M_1$ 的漏极），并驱动 $M_2$ 的栅极使 $X$ 保持不动，从而使共源共栅结构的输出电阻成倍增大。以 $A_1$ 的增益 $a$ 为参考元件应用布莱克曼公式：$R_{out}=R_{out}(a{=}0)\,[1+\mathcal R(\text{short})]/[1+\mathcal R(\text{open})]$。由于理想电流源负载使输出端开路，电压增益随之可得。

### 第 1 步 — 小信号参数

两管的电流均为 $I_D=100\ \mu$A，$V_{ov}=0.3$ V。由平方律，$g_m=2I_D/V_{ov}$：

$$
g_m=\frac{2(100\ \mu\mathrm A)}{0.3\ \mathrm V}=0.667\ \mathrm{mA/V},\qquad r_o=\frac1{\lambda I_D}=\frac1{(0.03\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=333\ \mathrm{k\Omega},\qquad g_mr_o=222 .
$$

### 第 2 步 — 放大器失效时的输出电阻

$a=0$ 时 $M_2$ 栅极为交流地，电路就是普通的共源共栅结构：$M_2$ 的源极电阻为 $r_{o1}$。在漏极加测试电流得

$$
R_{out}(a{=}0)=r_{o1}+r_{o2}+g_{m2}r_{o2}r_{o1}=333\ \mathrm{k\Omega}+333\ \mathrm{k\Omega}+(222)(333\ \mathrm{k\Omega})=74.7\ \mathrm{M\Omega}.
$$

### 第 3 步 — 回归比

放大器输出为 $-a\,v_X$（它把 $v_X$ 与固定的 $V_{BIAS}$ 比较）。令 $v_i=0$，在 $M_2$ 栅极用测试电压 $v_t$ 代替放大器输出。

- 输出端口短路：$M_2$ 是驱动 $r_{o1}\parallel r_{o2}$ 的源极跟随器（其漏极接地），在 $X$ 列 KCL 得 $g_{m2}(v_t-v_X)=v_X(1/r_{o1}+1/r_{o2})$：

$$
v_X=v_t\,\frac{g_{m2}}{g_{m2}+2/r_o},\qquad \mathcal R(\text{short})=\frac{a\,v_X}{v_t}=\frac{a\,g_{m2}}{g_{m2}+2/r_o}=(1000)(0.991)=991 .
$$

- 输出端口开路：$M_2$ 中不可能有电流，因而 $r_{o1}$ 中也没有电流，故 $v_X=0$，$\mathcal R(\text{open})=0$。

### 第 4 步 — 输出电阻

$$
R_{out}=R_{out}(a{=}0)\,\frac{1+991}{1+0}=(74.7\ \mathrm{M\Omega})(992)=7.41\times10^{10}\ \Omega\approx74\ \mathrm{G\Omega}.
$$

这与直接结果 $r_{o1}+r_{o2}+(1+a)g_{m2}r_{o2}r_{o1}$ 相同：反馈使 $M_2$ 的等效跨导增大为 $1+a$ 倍。

### 第 5 步 — 电压增益

理想电流源负载使输出端开路，因此流过 $M_1$ 和 $M_2$ 的小信号电流为零。在节点 $X$：$g_{m1}v_i+v_X/r_{o1}=0$，故 $v_X=-g_{m1}r_{o1}v_i$。对 $M_2$，$v_{gs2}=-av_X-v_X=-(1+a)v_X$，漏极电流为零要求 $g_{m2}v_{gs2}+(v_o-v_X)/r_{o2}=0$：

$$
v_o=v_X\left[1+(1+a)g_{m2}r_{o2}\right],\qquad
\frac{v_o}{v_i}=-g_{m1}r_{o1}\left[1+(1+a)g_{m2}r_{o2}\right]=-(222)\left[1+(1001)(222)\right]=-4.94\times10^{7}.
$$

等价地，$v_o/v_i\approx-g_{m1}R_{out}=-(0.667\ \mathrm{mA/V})(74\ \mathrm{G\Omega})$：反相增益约为 $(g_mr_o)^2a$。
