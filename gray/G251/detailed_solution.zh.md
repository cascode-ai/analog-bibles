# 详细步骤 - G251

反馈电阻 $R_F$ 检测输出电压（输出端并联），并把电流送回反相输入端（输入端并联），因此该放大器是电压并联（跨阻）反馈放大器。用 $y$ 参数表示 $R_F$，把 $y_{11f}$ 和 $y_{22f}$ 并入基本放大器，以 $y_{12f}$ 作为反馈系数。

### 第 1 步 — 反馈网络

对于跨接在两个端口之间的单个电阻 $R_F$，其短路 $y$ 参数为

$$
y_{11f}=y_{22f}=\frac1{R_F},\qquad y_{12f}=-\frac1{R_F}.
$$

反馈系数是每伏输出电压送回输入端的电流，$f=y_{12f}=-1/R_F=-10^{-5}$ S。负载项 $y_{11f}$ 和 $y_{22f}$ 相当于在输入节点对地、输出节点对地各接一个 $R_F$。

### 第 2 步 — 计入负载效应的基本放大器

在输入端，$R_F$ 与 $R_i$ 并联（电流源 $i_i$ 的内阻为无穷大）：

$$
z_{ia}=R_F\parallel R_i=100\ \mathrm{k\Omega}\parallel500\ \mathrm{k\Omega}=83.3\ \mathrm{k\Omega}.
$$

在输出端，运放的受控源经 $R_o$ 驱动 $R=R_F\parallel R_L=13.04\ \mathrm{k\Omega}$。流入输入节点的电流 $i$ 产生 $v_-=iz_{ia}$，故 $v_+-v_-=-iz_{ia}$，再经输出分压得到

$$
a=\frac{v_o}{i}=-z_{ia}\,a_v\,\frac{R}{R+R_o}=-(83.3\ \mathrm{k\Omega})(75{,}000)\frac{13.04\ \mathrm{k\Omega}}{13.24\ \mathrm{k\Omega}}=-6.16\times10^{9}\ \Omega .
$$

计入负载后的输出电阻为 $z_{oa}=R_o\parallel R_F\parallel R_L=197.0\ \Omega$。

### 第 3 步 — 环路传输与闭环跨阻

$$
T=af=(-6.156\times10^{9}\ \Omega)(-10^{-5}\ \mathrm S)=6.16\times10^{4}.
$$

$T$ 为正，确认是负反馈。闭环增益为

$$
\frac{v_o}{i_i}=A=\frac{a}{1+T}=\frac{-6.156\times10^{9}\ \Omega}{61{,}557}=-99{,}998\ \Omega\approx-100\ \mathrm{k\Omega},
$$

与理想值 $1/f=-R_F$ 只相差 $1/(1+T)\approx16$ ppm。

### 第 4 步 — 输入电阻与输出电阻

两个端口都是并联连接，计入负载后的阻抗都除以 $1+T$：

$$
R_{in}=\frac{z_{ia}}{1+T}=\frac{83.3\ \mathrm{k\Omega}}{61{,}557}=1.35\ \Omega,\qquad
R_{out}=\frac{z_{oa}}{1+T}=\frac{197.0\ \Omega}{61{,}557}=3.20\ \mathrm{m\Omega}.
$$

因此对信号电流而言，反相输入端几乎是理想的虚地（virtual ground），输出端几乎是理想电压源。这些是从外部看进反馈放大器的电阻，输出电阻已包含 $R_L$。
