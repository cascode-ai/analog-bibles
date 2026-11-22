# 详细步骤 - G281

取运放增益 $a_v$ 为参考受控源（controlled source）。于是每个量只需三个简单电路：令 $a_v=0$ 的电路（给出 $d$ 或无源端口电阻）、断开受控源求得的回归比 $\mathcal R$，以及求端口电阻时端口短路和开路下的 $\mathcal R$（布莱克曼阻抗公式）。

### 第 1 步 — 小信号模型与发射极节点电阻

运放模型为两输入端之间的 $R_i$（$R_i$ 上的电压为 $v_x=v_+-v_-$），以及输出端的戴维南等效：$a_vv_x$ 串联 $R_o$。$npn$ 管是由理想电流源偏置的射极跟随器，$r_o=\infty$、$r_b=0$ 时混合 $\pi$ 模型参数为
$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mS},\qquad
r_\pi=\frac{\beta_0}{g_m}=\beta_0\,(52\ \Omega)=5.2\ \mathrm{k\Omega}\ (\beta_0=100).
$$
基极经电阻 $R_s$ 驱动时，基极电流是发射极电流的 $1/(\beta_0+1)$，因此从发射极看进去的电阻为 $(R_s+r_\pi)/(\beta_0+1)$。基极由运放输出电阻驱动（$R_s=R_o$，受控源 $a_vv_x$ 置零）时：
$$
Z_e=\frac{R_o+r_\pi}{\beta_0+1}=\frac{10\ \mathrm{k\Omega}+5.2\ \mathrm{k\Omega}}{101}=150.5\ \Omega .
$$

### 第 2 步 — 回归比 $\mathcal R$

令 $v_i=0$，同相输入端接地，$R_i$ 即从输出节点接到地。用测试源 $v_t$ 代替 $a_vv_x$。射极跟随器经 $R_o$ 由 $v_t$ 驱动，负载为 $R_i$（偏置电流源相当于开路），满足 $v_t=i_b(R_o+r_\pi)+(\beta_0+1)i_bR_i$，因此
$$
v_o=v_t\,\frac{(\beta_0+1)R_i}{(\beta_0+1)R_i+R_o+r_\pi}=0.99985\,v_t .
$$
由于 $v_+=0$、$v_-=v_o$，控制电压为 $v_x=-v_o$，返回信号为 $v_r=a_vv_x$：
$$
\mathcal R=-\frac{v_r}{v_t}=a_v\frac{(\beta_0+1)R_i}{(\beta_0+1)R_i+R_o+r_\pi}=1000\times0.99985=999.85 .
$$
这就是环路传输的大小；它比 $a_v$ 略小，仅源于以 $R_i$ 为负载的跟随器的微小衰减。

### 第 3 步 — 闭环增益

$A_\infty$ 是 $a_v\to\infty$ 时的增益：此时环路迫使 $v_x\to0$，故 $v_o=v_i$，$A_\infty=1$。

直接馈通 $d$ 是 $a_v=0$ 时的增益。此时运放输出端仅为 $R_o$ 接地，$v_i$ 只能经 $R_i$ 到达电阻为 $Z_e$ 的发射极节点，构成分压器：
$$
d=\frac{Z_e}{R_i+Z_e}=\frac{150.5\ \Omega}{1\ \mathrm{M\Omega}+150.5\ \Omega}=1.50\times10^{-4}.
$$
代入回归比增益公式：
$$
\frac{v_o}{v_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}
=\frac{999.85}{1000.85}+\frac{1.50\times10^{-4}}{1000.85}=0.99900 .
$$
馈通项可以忽略（$1.5\times10^{-7}$）。

### 第 4 步 — 输入电阻

布莱克曼公式为 $R_{port}=R_{port}(a_v{=}0)\,\dfrac{1+\mathcal R_{sc}}{1+\mathcal R_{oc}}$，其中 $\mathcal R_{sc}$ 和 $\mathcal R_{oc}$ 分别是端口短路和开路时的回归比。

- $a_v=0$ 时，输入端看到 $R_i$ 与发射极节点串联：$R_{in}(a_v{=}0)=R_i+Z_e$。
- 端口短路（$v_+$ 接地）：即第 2 步的电路，$\mathcal R_{sc}=999.85$。
- 端口开路：$R_i$ 中不能有电流，因此对任意 $v_t$ 都有 $v_x=0$，$\mathcal R_{oc}=0$。

$$
R_{in}=(R_i+Z_e)(1+\mathcal R)=(1.00015\ \mathrm{M\Omega})(1000.85)=1001\ \mathrm{M\Omega}\approx1.0\ \mathrm{G\Omega}.
$$

### 第 5 步 — 输出电阻

- $a_v=0$ 且 $v_i=0$ 时，输出节点对地看到 $Z_e$ 与 $R_i$ 并联：$R_{out}(a_v{=}0)=Z_e\|R_i=150.5\ \Omega$。
- 输出短路：$v_o=0$ 迫使 $v_x=0$，因此 $\mathcal R_{sc}=0$。
- 输出开路：即第 2 步的正常电路，$\mathcal R_{oc}=999.85$。

$$
R_{out}=\frac{Z_e\|R_i}{1+\mathcal R}=\frac{150.5\ \Omega}{1000.85}=0.150\ \Omega .
$$

用 $\beta_0$ 表示时，四个结果都由 $r_\pi=\beta_0(52\ \Omega)$、$Z_e=(R_o+r_\pi)/(\beta_0+1)$ 及第 2 步的 $\mathcal R$ 给出。$\beta_0=100$ 时：$\mathcal R=999.85$，$v_o/v_i=0.9990$，$R_{in}\approx1.0\ \mathrm{G\Omega}$，$R_{out}\approx0.150\ \Omega$。
