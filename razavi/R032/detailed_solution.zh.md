# 详细步骤 - R032

### 模型与初始条件

**思路：** 先判断工作区，再用线性区电流方程求电容放电。题目要求绘制的量为 $V_X(t)$。

源极和衬底均接地，$C_1$ 接在漏极与地之间，初始电压为 1 V。阶跃前 $V_{GS}=0$，所以晶体管截止。忽略寄生电容耦合时，有限的沟道电流不能使电容电压瞬时改变，因此 $V_X(0^+)=V_X(0^-)=1\ \mathrm{V}$。

栅极阶跃至 3 V 后，

$$
V_{GS}-V_{TH}=2.3\ \mathrm{V},
\qquad 0\le V_{DS}=V_X\le1\ \mathrm{V}<2.3\ \mathrm{V}.
$$

所以器件从一开始就处于线性区，并在放电期间保持在线性区。源极与衬底均接地，因而没有体效应。采用线性区平方律模型，令 $\beta=\mu_n C_{ox}W/L$。

### 电容电流与节点方程

规定两个支路电流均以流出 X 为正。$V_X$ 是电容上极板相对于地的电压，上极板电荷为 $C_1V_X$，因此从 X 流入电容的电流为 $C_1\,dV_X/dt$。漏极电流 $I_D$ 也以流出 X 为正。X 没有外部注入电流，按基尔霍夫电流定律可得

$$
C_1\frac{dV_X}{dt}+I_D=0.
$$

线性区平方律模型给出漏极电流

$$
I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right].
$$

源极接地，所以 $V_{DS}=V_X$。代入 $V_{GS}-V_{TH}=2.3\ \mathrm{V}$ 并提取公因式，得到

$$
\frac{dV_X}{dt}
=-\frac{\beta}{C_1}V_X\left(2.3\ \mathrm{V}-\frac{V_X}{2}\right).
$$

当 $0<V_X\le1\ \mathrm{V}$ 时，括号内为正。沟道电流从 X 流出，电容上极板的电荷减少，因此 $V_X$ 下降。

### 分离变量与精确解

把含电压的因子移到左边，从初值 $V_X(0^+)=1\ \mathrm{V}$ 积分到 $V_X(t)$。以 $v$ 为电压积分变量，有

$$
\int_{1\ \mathrm{V}}^{V_X(t)}
\frac{dv}{v(2.3\ \mathrm{V}-v/2)}
=-\frac{\beta}{C_1}\int_0^t ds,
$$

其中 $s$ 为时间积分变量。将左侧被积函数拆成两项，每一项都可积分成对数。

$$
\frac{1}{v(2.3\ \mathrm{V}-v/2)}
=\frac{1}{2.3\ \mathrm{V}}
\left(\frac{1}{v}+\frac{1}{4.6\ \mathrm{V}-v}\right).
$$

由于 $d(4.6\ \mathrm{V}-v)=-dv$，第二项积分后带负号。合并两个对数，得到括号内两项之和的原函数 $\ln[v/(4.6\ \mathrm{V}-v)]$。代入积分上下限，并定义 $\tau=C_1/[\beta(2.3\ \mathrm{V})]$，得到

$$
\ln\frac{V_X(t)}{4.6\ \mathrm{V}-V_X(t)}
-\ln\frac{1\ \mathrm{V}}{4.6\ \mathrm{V}-1\ \mathrm{V}}
=-\frac{t}{\tau}.
$$

初值对应的比值为 $1/3.6$。两边取指数并整理，得

$$
\frac{V_X(t)}{4.6\ \mathrm{V}-V_X(t)}=\frac{e^{-t/\tau}}{3.6}
\quad\Longrightarrow\quad
(1+3.6e^{t/\tau})V_X(t)=4.6\ \mathrm{V}.
$$

因此精确解为

$$
V_X(t)=\frac{4.6\ \mathrm{V}}{1+3.6e^{t/\tau}}
\quad(t\ge0).
$$

$t=0$ 时分母为 4.6，所得电压为题给的 1 V。当 $t$ 为有限正值时，分母增大且 $0<V_X<1\ \mathrm{V}$，验证了放电始终满足线性区条件。随着时间增长，电压趋向 0 V。

### 初始电流与斜率

把 $V_X(0^+)=1\ \mathrm{V}$ 代入漏极电流式，再用节点方程求初始斜率。

$$
I_D(0^+)=\beta\left[(2.3\ \mathrm{V})(1\ \mathrm{V})-\frac{(1\ \mathrm{V})^2}{2}\right]
=1.8\,\beta\,\mathrm{V^2},
\qquad
\left.\frac{dV_X}{dt}\right|_{0^+}=-\frac{I_D(0^+)}{C_1}
=-\frac{1.8\,\beta\,\mathrm{V^2}}{C_1}.
$$

### 近似与计算图

当 $V_X\ll2.3\ \mathrm{V}$ 时，二次项可忽略，此时

$$
R_{on}=\frac{1}{\beta(2.3\ \mathrm{V})},
\qquad
V_X(t)\simeq(1.2778\ \mathrm{V})e^{-t/\tau}
\quad(t\gg\tau).
$$

精确曲线的初始衰减慢于 $(1\ \mathrm{V})e^{-t/\tau}$：斜率大小为 $1.8\,\beta\,\mathrm{V^2}/C_1$，而非 $2.3\,\beta\,\mathrm{V^2}/C_1$。指数形式是渐近近似，并非有限时间内的精确波形。

图中取示例参数 $\beta=1\ \mathrm{mA/V^2}$、$C_1=1\ \mathrm{pF}$，直接计算精确解，对应 $R_{on}=434.78\ \Omega$、$\tau=0.43478\ \mathrm{ns}$、初始电流 $1.8\ \mathrm{mA}$、初始斜率 $-1.8\ \mathrm{V/ns}$。计算得到 $V_X(0.5\ \mathrm{ns})=0.37188\ \mathrm{V}$、$V_X(1\ \mathrm{ns})=0.12464\ \mathrm{V}$。其他正值 $\beta,C_1$ 按 $C_1/\beta$ 缩放时间。

![R032：线性区精确放电波形与时间常数](/q/R032/solution-waveform.zh.svg)

**常见错误：** 初始 $V_{DS}=1\ \mathrm{V}$，不支持饱和区恒流斜坡。输出既不会随栅极跳变，也不会停在非零电压；导通沟道使电容持续放电并趋向零。
