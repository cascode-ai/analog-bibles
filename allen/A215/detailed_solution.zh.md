# 详细步骤 - A215

求 $v_{OUT}=0$ 时 M1 的静态电流，计算其小信号参数，再在输入交流接地时求从输出节点看进去的电导。

### 第 1 步 — 工作点

$v_{OUT}=0$ 时电阻中无电流，输出节点的 KCL 使 M1 的漏极电流等于电流沉电流：

$$
I_{D1}=I_Q+\frac{v_{OUT}}{R_L}=200\ \mu\mathrm A.
$$

M1 处于饱和区：漏极接 $+2.5$ V，故 $V_{DS1}=2.5$ V，远大于过驱动电压（overdrive voltage）$\sqrt{2I_{D1}/\beta_1}\approx0.19$ V，其中 $\beta_1=K'_N(W/L)=11\ \mathrm{mA/V^2}$。

### 第 2 步 — 小信号参数

采用平方律模型，

$$
g_{m1}=\sqrt{2K'_N\frac WL I_{D1}}=\sqrt{2(110\ \mu\mathrm{A/V^2})(100)(200\ \mu\mathrm A)}=2.098\ \mathrm{mS},
$$

$$
g_{ds1}=\lambda I_{D1}=(0.04\ \mathrm{V^{-1}})(200\ \mu\mathrm A)=8\ \mu\mathrm S.
$$

忽略体效应（$g_{mbs1}=0$），理想电流沉不引入电导。

### 第 3 步 — 输出电阻

令 $v_{in}=0$，在输出端加测试电压 $v_t$。栅极交流接地，故 $v_{gs1}=-v_t$，测试源提供的电流为

$$
i_t=-g_{m1}v_{gs1}+g_{ds1}v_t=(g_{m1}+g_{ds1})v_t .
$$

因此从 M1 源极看进去，

$$
R_{out}=\frac{1}{g_{m1}+g_{ds1}}=\frac{1}{2.106\ \mathrm{mS}}=475\ \Omega\approx\frac1{g_{m1}}=477\ \Omega .
$$

输出电阻由 $1/g_{m1}$ 决定；$g_{ds1}$ 的影响不到 0.5%。若把 10 kΩ 负载也计入输出节点，

$$
R_{out}=\frac{1}{g_{m1}+g_{ds1}+1/R_L}=\frac{1}{2.206\ \mathrm{mS}}\approx453\ \Omega .
$$
