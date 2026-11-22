# 详细步骤 - A399

锁存器使能后，交叉耦合对以再生时间常数 $\tau_L$ 指数放大其初始输出差。先由器件跨导和节点电容求出 $\tau_L$，再由指数关系求输出差达到半摆幅所需的时间。

### 第 1 步 — 再生模型

每个节点的电容为 $C$、电阻为 $R$，由栅极接在另一节点的晶体管驱动，差分电压满足

$$
C\frac{d\Delta V_{out}}{dt}=\Bigl(g_m-\frac1R\Bigr)\Delta V_{out}
\quad\Rightarrow\quad
\Delta V_{out}(t)=\Delta V_i\,e^{t/\tau_L},\qquad
\tau_L=\frac{C}{g_m-1/R}\approx\frac C{g_m}.
$$

指数为正来自正反馈：每只器件都把自己的漏极节点推离另一节点。

### 第 2 步 — 器件参数

由 $g_m=\sqrt{2K'_N(W/L)I_D}$ 及 $R\approx r_{ds}=1/(\lambda_NI_D)$：

$$
g_m=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(10\ \mu\mathrm A)}=148\ \mu\mathrm S,\qquad
R=\frac1{(0.04\ \mathrm{V^{-1}})(10\ \mu\mathrm A)}=2.5\ \mathrm{M\Omega},
$$

故 $g_mR=371\gg1$，与 $g_m$ 相比 $1/R$ 可以忽略。节点电容为

$$
C\approx\tfrac23WLC_{ox}=\tfrac23(10\ \mu\mathrm m)(1\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})=16.5\ \mathrm{fF}.
$$

### 第 3 步 — 时间常数

$$
\tau_L=\frac C{g_m}=\frac{16.5\ \mathrm{fF}}{148\ \mu\mathrm S}=0.111\ \mathrm{ns}.
$$

### 第 4 步 — 达到半摆幅所需时间

在 $\Delta V_{out}=\Delta V_ie^{t/\tau_L}$ 中令 $\Delta V_{out}=0.5(V_{OH}-V_{OL})$：

$$
t=\tau_L\ln\frac{0.5(V_{OH}-V_{OL})}{\Delta V_i}.
$$

| $\Delta V_i$ | $\ln[0.5(V_{OH}-V_{OL})/\Delta V_i]$ | $t$ |
|---|---|---|
| $0.01(V_{OH}-V_{OL})$ | $\ln50=3.91$ | 0.43 ns |
| $0.1(V_{OH}-V_{OL})$ | $\ln5=1.61$ | 0.18 ns |

初始不平衡增大十倍只节省 $\tau_L\ln10=0.26$ ns，因为延迟与 $\Delta V_i$ 成对数关系；这正是锁存器即使由小信号驱动也很快的原因。指数模型在两只器件都保持饱和时成立；接近摆幅末端时一只器件开始截止，增长随之变慢。
