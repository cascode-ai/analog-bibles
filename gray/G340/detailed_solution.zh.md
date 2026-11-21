# 详细步骤 - G340

用滞后-超前滤波器 $F(s)=(1+s/\omega_2)/(1+s/\omega_1)$ 写出环路增益，在 $\omega_c=100$ rad/s 处精确施加两个穿越条件（幅值为 1、相位为 $-135°$），解出极点和零点，再选择实现这两个时间常数的 R-C 网络。

### 第 1 步 — 含零极点滤波器的环路增益

在相位域中，VCO 把频率积分为相位，因此锁定的 PLL 的环路增益为

$$
T(s)=\frac{K_OK_D\,F(s)}{s}=\frac{K_v}{s}\,\frac{1+s/\omega_2}{1+s/\omega_1},\qquad
K_v=K_OK_D=(10^3\ \mathrm{rad/(V\cdot s)})(1\ \mathrm{V/rad})=1000\ \mathrm{s^{-1}} .
$$

满足 $F(0)=1$ 的要求。若无滤波器，环路将在 $K_v=1000$ rad/s 处穿越；要把穿越频率降到 100 rad/s，滤波器必须提供衰减，因此极点低于零点（$\omega_1<\omega_2$），即滞后网络（lag network）。积分器贡献 $-90°$，极点再增加滞后，零点提供超前，把总相移限制在 $-135°$。

### 第 2 步 — 相位条件

定义归一化频率 $a=\omega_c/\omega_1$、$b=\omega_c/\omega_2$。在 $s=j\omega_c$ 处，

$$
\angle T(j\omega_c)=-90°-\arctan a+\arctan b=-135°
\quad\Longrightarrow\quad
\arctan a-\arctan b=45° .
$$

两边取正切，得 $\dfrac{a-b}{1+ab}=1$，故

$$
a=\frac{1+b}{1-b}\qquad(b<1).
$$

### 第 3 步 — 幅值条件

在 $\omega_c$ 处环路增益为 1 要求

$$
|T(j\omega_c)|=\frac{K_v}{\omega_c}\sqrt{\frac{1+b^2}{1+a^2}}=1
\quad\Longrightarrow\quad
\left(\frac{K_v}{\omega_c}\right)^2(1+b^2)=1+a^2 .
$$

利用相位关系，$1+a^2=\dfrac{(1-b)^2+(1+b)^2}{(1-b)^2}=\dfrac{2(1+b^2)}{(1-b)^2}$，且 $K_v/\omega_c=10$，因子 $1+b^2$ 相消：

$$
100=\frac{2}{(1-b)^2}\quad\Longrightarrow\quad(1-b)^2=0.02,\quad
b=1-\sqrt{0.02}=0.8586,\quad a=\frac{1.8586}{0.1414}=13.14 .
$$

### 第 4 步 — 极点与零点频率

$$
\omega_2=\frac{\omega_c}{b}=\frac{100\ \mathrm{rad/s}}{0.8586}=116.5\ \mathrm{rad/s}\ (\text{zero}),\qquad
\omega_1=\frac{\omega_c}{a}=\frac{100\ \mathrm{rad/s}}{13.14}=7.61\ \mathrm{rad/s}\ (\text{pole}),
$$

二者之比 $\omega_2/\omega_1=15.3$。代回验算得 $|T(j100)|=1.000$、$\angle T(j100)=-135.0°$，即相位裕度为 45°。闭环特征方程 $s^2/\omega_1+s(1+K_v/\omega_2)+K_v=0$ 的根为 $s=-36.5\pm j79.2$ rad/s（$\omega_n\approx87$ rad/s，$\zeta\approx0.42$）。

作为对比，常用的渐近设计把零点放在 $\omega_c$ 处（$\omega_2=100$ rad/s），并假设 $\omega_1\ll\omega_c$，得到 $\omega_1=\omega_c^2/(\sqrt2K_v)=7.07$ rad/s；它在穿越频率处只给出约 $-131°$，因此上面的精确解把零点略微上移。

### 第 5 步 — 无源 R-C 实现

采用滞后-超前网络：$R_1$ 串联在鉴相器输出与 VCO 输入节点之间，$R_2$ 与 $C$ 串联后从该节点接地。其电压传递函数为

$$
F(s)=\frac{R_2+1/(sC)}{R_1+R_2+1/(sC)}=\frac{1+sR_2C}{1+s(R_1+R_2)C},
\qquad \omega_2=\frac{1}{R_2C},\quad \omega_1=\frac{1}{(R_1+R_2)C},
$$

假设 VCO 输入端不取电流，则直流增益为 1。取 $C=1\ \mu$F：

$$
R_2=\frac{1}{(116.5\ \mathrm{rad/s})(1\ \mu\mathrm F)}=8.59\ \mathrm{k\Omega},\qquad
R_1+R_2=\frac{1}{(7.61\ \mathrm{rad/s})(1\ \mu\mathrm F)}=131.4\ \mathrm{k\Omega},\qquad
R_1=122.8\ \mathrm{k\Omega}.
$$

也可选用其他 $C$，只需相应缩放电阻，保持 $R_2C=8.59$ ms、$(R_1+R_2)C=131.4$ ms。
