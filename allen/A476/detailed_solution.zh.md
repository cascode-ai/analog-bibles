# 详细步骤 - A476

每一级都是围绕单极点运放的电容反馈放大器，因此按指数规律建立，时间常数由其反馈系数决定。求出两个反馈系数和时间常数，确定 7 位精度要求每级建立到什么程度，再把两级的建立时间相加得到时钟周期。

### 第 1 步 — 运放模型

$$
A_v(s)=\frac{A_0}{1+s/\omega_a},\qquad A_0=10^4,\quad \omega_a=2\pi(100\ \mathrm{Hz})=628.3\ \mathrm{rad/s},
$$

因此 $GB=A_0\omega_a=6.283\times10^6$ rad/s（$1$ MHz）。反馈系数为 $\beta$ 时，闭环极点为 $\omega_H=\omega_a(1+A_0\beta)\approx\beta\,GB$，阶跃按 $1-e^{-t/\tau}$ 建立，$\tau=1/\omega_H$。

### 第 2 步 — 反馈系数与时间常数

φ2 期间每个阵列电容都把求和节点接到低阻抗节点（$V_{REF}$、地或 A1 的输出），因此它们都加载在反馈分压器上。

- A1：输入电容 $C+C/2+C/4+C/8=15C/8$，反馈电容 $2C$：
$$
\beta_1=\frac{2C}{2C+15C/8}=\frac{16}{31}=0.516,\qquad
\omega_{H1}=628.3\left(1+10^4\cdot\tfrac{16}{31}\right)=3.244\times10^6\ \mathrm{rad/s},\qquad \tau_1=0.308\ \mu\mathrm s .
$$
- A2：MSB 阵列 $15C/8$ 加耦合电容 $C/8$，即 $2C$，反馈电容 $2C$：
$$
\beta_2=\frac{2C}{2C+2C}=0.5,\qquad
\omega_{H2}=628.3\left(1+10^4\cdot0.5\right)=3.142\times10^6\ \mathrm{rad/s},\qquad \tau_2=0.318\ \mu\mathrm s .
$$

### 第 3 步 — ENOB = 7 的建立要求

ENOB 为 7 位要求误差小于 7 位转换器的 ½ LSB，即满量程的 $2^{-8}=1/256$。按最坏情况，每一级都必须建立到这一精度：

$$
e^{-t/\tau}\le\frac1{256}\quad\Longrightarrow\quad t=\tau\ln256=5.545\,\tau .
$$

$$
t_1=5.545(0.308\ \mu\mathrm s)=1.71\ \mu\mathrm s,\qquad
t_2=5.545(0.318\ \mu\mathrm s)=1.76\ \mu\mathrm s .
$$

### 第 4 步 — 时钟频率

两级响应相加为一个时钟周期：

$$
T=t_1+t_2=3.47\ \mu\mathrm s,\qquad f_{clock}=\frac1T=288\ \mathrm{kHz}.
$$

有限直流增益还使每级留下 $1/(1+A_0\beta)\approx2\times10^{-4}$ 的静态误差，远小于 $1/256$。从每级的误差预算中扣除它（动态误差 $\le1/256-2\times10^{-4}\approx0.0037$，即 $5.60\tau$），得到 $T\approx3.51\ \mu$s，$f_{clock}\approx285$ kHz。因此使 ENOB 降到 7 位的时钟频率约为 285–288 kHz；限制因素是建立过程，而不是直流增益。
