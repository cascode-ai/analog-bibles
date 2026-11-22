# 详细步骤 - A079

沿开关过程跟踪两个时钟，记录 M1 关断之后每个晶体管向输出节点注入的电荷——在慢速区只有这部分电荷留在 $C_1$ 上。选择 $W_2$，使 M2 抽取的电荷抵消 M1 移走的电荷。

### 第 1 步 — 关断与导通电压

开关过程之前输出节点为 $V_S=2$ V，因此两个晶体管的 $V_{SB}=2$ V：

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V,\qquad
V_X\equiv V_S+V_T=3.023\ \mathrm V .
$$

$\phi_1>V_X$ 时 M1 导通，$\bar\phi_1>V_X$ 时 M2 导通。两个时钟同时切换，$\bar\phi_1=5\ \mathrm V-\phi_1$，因此 M1 在 $\phi_1=V_X$ 时关断，此时 $\bar\phi_1=5-V_X=1.98$ V。由于 $V_X>2.5$ V，M1 在 M2 导通之前已经关断。在此之前，（任一器件）耦合到该节点的电荷都经 M1 流回 2 V 电压源。

### 第 2 步 — M1 关断后注入的电荷

关断后，M1 的沟道电荷已经流回源端，$\phi_1$ 从 $V_X$ 降到 0 期间只有其栅-漏交叠电容耦合到节点。这会从节点移走电荷：

$$
\Delta Q_1=-W_1\,\mathrm{CGDO}\,V_X .
$$

### 第 3 步 — $\bar\phi_1$ 从 $5-V_X$ 升到 5 V 期间 M2 注入的电荷

M2 的源极和漏极都接在该节点上，因此两个交叠电容（CGSO 和 CGDO）都把其栅极耦合到节点。

- 从 $\bar\phi_1=5-V_X$ 到 $V_X$ 期间 M2 截止，栅压摆幅 $2V_X-5$ 经两个交叠电容耦合：$2W_2\,\mathrm{CGDO}\,(2V_X-5)$。
- 从 $V_X$ 到 5 V 期间 M2 导通，其沟道形成并从节点抽取电荷，交叠电容继续耦合：$W_2\big(L_2C_{ox}+2\,\mathrm{CGDO}\big)(5-V_X)$。

两段相加：

$$
\Delta Q_2=W_2\Big[2\,\mathrm{CGDO}\,V_X+L_2C_{ox}(5-V_X)\Big],
$$

它使节点电压升高，与 $\Delta Q_1$ 符号相反。

### 第 4 步 — 抵消条件与 M2 的尺寸

令 $\Delta Q_1+\Delta Q_2=0$：

$$
W_2\Big[2\,\mathrm{CGDO}\,V_X+L_2C_{ox}(5-V_X)\Big]=W_1\,\mathrm{CGDO}\,V_X
\quad\Rightarrow\quad
W_2=W_1\left[2+\frac{L_2C_{ox}(5-V_S-V_T)}{\mathrm{CGDO}\,(V_S+V_T)}\right]^{-1}.
$$

$L_2=0.8\ \mu$m 时：

$$
\mathrm{CGDO}\,V_X=(220\ \mathrm{pF/m})(3.023\ \mathrm V)=6.65\times10^{-10}\ \mathrm{F\,V/m},\qquad
L_2C_{ox}(5-V_X)=(0.8\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})(1.977\ \mathrm V)=3.91\times10^{-9}\ \mathrm{F\,V/m},
$$

$$
\frac{W_2}{W_1}=\frac{6.65}{2(6.65)+39.1}=0.127 .
$$

因此 $W_2\approx0.127\,W_1$（$L_2=1\ \mu$m 时约为 $0.107\,W_1$）。由于 M2 的贡献以沟道电荷为主，$L_2$ 越短，M2 就须越宽；采用允许的最小 $L_2$ 可使虚拟管保持紧凑。该虚拟管比通常的半尺寸虚拟管小得多，因为在慢速区 M1 的沟道电荷根本不会到达 $C_1$：需要抵消的只是其交叠馈通。
