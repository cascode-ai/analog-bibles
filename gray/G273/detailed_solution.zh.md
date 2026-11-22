# 详细步骤 - G273

以运放的受控源 $a_vv_x$ 为参考元件。由于 $v_+=0$，$v_x=-v_-$。在 $v_i=0$ 时求回归比 $\mathcal R$，再求渐近增益 $A_\infty$ 和馈通 $d$，然后组合起来；阻抗由端口短路和开路时的布莱克曼公式求得。记 $R_1=10\ \mathrm{k\Omega}$，$R_F=100\ \mathrm{k\Omega}$。

### 第 1 步 — 回归比

令 $v_i=0$，用测试电压 $v_t$ 代替 $a_vv_x$ 驱动输出支路。它经 $R_o+R_F$ 驱动对地的 $R_1\parallel R_i=10\ \mathrm{k\Omega}\parallel1\ \mathrm{M\Omega}=9.90\ \mathrm{k\Omega}$：

$$
v_-=v_t\,\frac{9.90\ \mathrm{k\Omega}}{9.90\ \mathrm{k\Omega}+100\ \mathrm{k\Omega}+10\ \mathrm{k\Omega}}=0.0826\,v_t,\qquad v_x=-v_- .
$$

返回值为 $a_vv_x=-a_v(0.0826)v_t$，故

$$
\mathcal R=a_v(0.0826)=16.5 .
$$

### 第 2 步 — 渐近增益与馈通

当 $a_v\to\infty$ 时 $v_x\to0$：反相输入端为虚地，$R_i$ 中没有电流，电流 $v_i/R_1$ 流过 $R_F$，故 $A_\infty=-R_F/R_1=-10$。

当 $a_v=0$ 时，$v_i$ 经 $R_1$ 驱动 $R_i\parallel(R_F+R_o)=1\ \mathrm{M\Omega}\parallel110\ \mathrm{k\Omega}=99.1\ \mathrm{k\Omega}$，$R_F$ 与 $R_o$ 把 $v_-$ 分压到输出端：

$$
v_-=v_i\,\frac{99.1\ \mathrm{k\Omega}}{10\ \mathrm{k\Omega}+99.1\ \mathrm{k\Omega}}=0.908\,v_i,\qquad
d=0.908\cdot\frac{10\ \mathrm{k\Omega}}{110\ \mathrm{k\Omega}}=0.0826 .
$$

### 第 3 步 — 闭环增益

$$
\frac{v_o}{v_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}=(-10)\frac{16.52}{17.52}+\frac{0.0826}{17.52}=-9.429+0.005=-9.42 .
$$

回归比只有 16.5，因此增益比理想值 $-10$ 低 5.8%。

### 第 4 步 — 输入电阻（布莱克曼公式）

$a_v=0$ 时，$v_i$ 看到 $R_{in}(a_v{=}0)=R_1+R_i\parallel(R_F+R_o)=109.1\ \mathrm{k\Omega}$。

- 输入端口短路：即第 1 步的条件，$\mathcal R(\text{short})=16.52$。
- 输入端口开路（$R_1$ 悬空）：$v_t$ 经 $R_o+R_F$ 只驱动 $R_i$，$v_-=v_t\,R_i/(R_i+R_F+R_o)$，故 $\mathcal R(\text{open})=a_v(0.901)=180.2$。

$$
R_{in}=109.1\ \mathrm{k\Omega}\cdot\frac{1+16.52}{1+180.2}=10.55\ \mathrm{k\Omega},
$$

即 $R_1$ 加上反相输入节点处约 547 Ω。

### 第 5 步 — 输出电阻（布莱克曼公式）

$a_v=0$ 时，输出端看到 $R_o$ 与 $R_F+R_1\parallel R_i$ 并联：

$$
R_{out}(a_v{=}0)=10\ \mathrm{k\Omega}\parallel(100\ \mathrm{k\Omega}+9.90\ \mathrm{k\Omega})=9.17\ \mathrm{k\Omega}.
$$

输出短路使 $v_-=0$（$\mathcal R(\text{short})=0$）；输出开路时回归比就是第 1 步的 16.52。因此

$$
R_{out}=\frac{9.17\ \mathrm{k\Omega}}{1+16.52}=523\ \Omega .
$$

四个结果都与直接节点分析一致。
