# 详细步骤 - G082

先求偏置点和通常的共源共栅输出电阻。再求每个 $V_{OUT}$ 下输出端共源共栅管 $M_2$ 的漏源电压，并在该点把碰撞电离电流线性化。漏电流从输出节点流入接地的衬底，因此它的增量电阻 $r_{db}$ 与共源共栅电阻并联。由于 $I_{DB}$ 随超出的漏极电压按指数增长，两者的大小关系在 2 V 与 3 V 之间急剧改变。

### 第 1 步 — 偏置点与小信号参数

四个器件都流过 $I_{IN}=100\ \mu\mathrm A$，$W/L_{\text{eff}}=100/0.82=121.95$。由饱和区平方律，

$$
V_{ov}=\sqrt{\frac{2I_D}{k'(W/L_{\text{eff}})}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(121.95)}}=0.0919\ \mathrm V,\qquad V_{GS}=V_t+V_{ov}=0.692\ \mathrm V,
$$

$$
g_m=\frac{2I_D}{V_{ov}}=2.175\ \mathrm{mA/V},\qquad r_o=\frac1{\lambda I_D}=\frac1{(0.0244\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=410\ \mathrm{k\Omega},\qquad g_mr_o=892 .
$$

### 第 2 步 — 不计漏电时的共源共栅输出电阻

$M_1$ 是栅极由 $M_3$ 固定的共源器件；从 $M_2$ 的源极向下看，它就是 $r_{o1}$。$M_2$ 的栅极固定，并有源极负反馈（source degeneration）电阻 $r_{o1}$。忽略体效应时，

$$
R_{o,\text{casc}}=r_{o2}(1+g_{m2}r_{o1})+r_{o1}=(410\ \mathrm{k\Omega})(1+892)+410\ \mathrm{k\Omega}=366.5\ \mathrm{M\Omega}\approx g_mr_o^2 .
$$

### 第 3 步 — $M_2$ 的工作电压

$M_2$ 的栅极电位为 $V_{GS3}+V_{GS4}=2V_{GS}$，源极比它低一个 $V_{GS}$。因此

$$
V_{DS1}=V_{GS}=0.692\ \mathrm V,\qquad V_{DS2}=V_{OUT}-V_{GS}.
$$

有源区的边界为 $V_{DS(\text{act})}=V_{ov}=0.092$ V，所以超出的漏极电压 $x=V_{DS2}-V_{DS(\text{act})}=V_{OUT}-V_{GS}-V_{ov}$ 为

$$
x=1.216\ \mathrm V\ (V_{OUT}=2\ \mathrm V),\qquad x=2.216\ \mathrm V\ (V_{OUT}=3\ \mathrm V).
$$

对 $M_1$，$x=V_{DS1}-V_{ov}=0.6$ V，其因子 $e^{-30/0.6}=e^{-50}$ 使它的漏电完全可以忽略。何况其漏极处的任何微小电流也被共源共栅结构与输出端隔离开。

### 第 4 步 — 小信号漏电导

$M_2$ 的源极被共源共栅结构基本固定，$I_D$ 的变化也只在 $1/R_{o,\text{casc}}$ 的量级。因此 $V_{OUT}$ 的变化一对一地改变 $x$。将 $I_{DB}=K_1xI_De^{-K_2/x}$ 对 $x$ 求导，

$$
g_{db}=\frac{\partial I_{DB}}{\partial V_{OUT}}=K_1I_De^{-K_2/x}\left(1+\frac{K_2}x\right)=\frac{I_{DB}}x\left(1+\frac{K_2}x\right)\approx\frac{K_2I_{DB}}{x^2}.
$$

由于 $K_2/x\gg1$，指数项起主导作用。$V_{OUT}=3$ V 时：

$$
I_{DB}=(5\ \mathrm{V^{-1}})(2.216\ \mathrm V)(100\ \mu\mathrm A)\,e^{-30/2.216}=(1.108\ \mathrm{mA})(1.32\times10^{-6})=1.46\ \mathrm{nA},
$$

$$
g_{db}=\frac{1.46\ \mathrm{nA}}{2.216\ \mathrm V}\left(1+\frac{30}{2.216}\right)=9.60\times10^{-9}\ \mathrm S,\qquad r_{db}=104.2\ \mathrm{M\Omega}.
$$

| $V_{OUT}$ | $x$ (V) | $e^{-K_2/x}$ | $I_{DB}$ | $r_{db}=1/g_{db}$ |
|---|---|---|---|---|
| 2 V | 1.216 | $1.9\times10^{-11}$ | $1.2\times10^{-14}$ A | $4.0\times10^{12}\ \Omega$ |
| 3 V | 2.216 | $1.3\times10^{-6}$ | $1.46\times10^{-9}$ A | $1.04\times10^{8}\ \Omega$ |

$V_{OUT}$ 升高 1 V，漏电约增大 $10^5$ 倍。

### 第 5 步 — 计入漏电的输出电阻

$I_{DB}$ 经 $M_2$ 的漏极离开输出节点，流入接地的衬底。它从不经过 $M_2$ 的源极，因此共源共栅的反馈不会抬高 $r_{db}$，它只是与共源共栅电阻并联：

$$
R_o=R_{o,\text{casc}}\,\|\,r_{db}.
$$

$$
V_{OUT}=2\ \mathrm V:\quad R_o=366.5\ \mathrm{M\Omega}\,\|\,4.0\times10^{12}\ \Omega=366.4\ \mathrm{M\Omega}\approx R_{o,\text{casc}}.
$$

$$
V_{OUT}=3\ \mathrm V:\quad R_o=\frac{(366.5\ \mathrm{M\Omega})(104.2\ \mathrm{M\Omega})}{366.5\ \mathrm{M\Omega}+104.2\ \mathrm{M\Omega}}=81\ \mathrm{M\Omega}.
$$

2 V 时衬底漏电可以忽略。3 V 时它起主导作用，使输出电阻降低约 4.5 倍。若用近似式 $g_{db}\approx K_2I_{DB}/x^2$，则 $r_{db}=112\ \mathrm{M\Omega}$，$R_o=86\ \mathrm{M\Omega}$，结论相同。
