# 详细步骤 - A301

互补的折叠式共源共栅按与原电路相同的顺序设计：压摆率确定尾电流 $I_3$（及折叠电流），输出范围确定输出端的四个串联器件，GB 确定输入对管（现在是 p 沟道，因此用 $K'_P$），共模上限确定 p 沟道尾电流管 M3，然后校核共模下限、增益和功耗。所有 $L=0.5$ µm，$S=W/L$，$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$，沟道长度调制只在 $g_{ds}=\lambda I_D$ 中计入。

### 第 1 步 — 由压摆率确定电流

$I_3$ 全部导向一侧时输出压摆，因此

$$
I_3=SR\cdot C_L=(10\ \mathrm{V/\mu s})(10\ \mathrm{pF})=100\ \mu\mathrm A .
$$

取折叠电流沉 $I_4=I_5=1.25I_3=125\ \mu$A，使共源共栅支路永不截止：静态时流过 75 µA，压摆时为 25–125 µA。（$I_4=I_5=I_3$ 同样给出 $SR=I_3/C_L$，但完全导向时有一条共源共栅支路电流降为零。）

### 第 2 步 — 由输出范围确定输出器件

输出可从 $V_{SS}+0.5$ V 摆到 $V_{DD}-0.5$ V，因此每侧两个串联器件在最坏电流 125 µA 下各分得 0.25 V：

$$
\begin{aligned}
V_{out}(\min)=-2\ \mathrm V:\quad& S_4=S_5=S_6=S_7=\frac{2(125\ \mu\mathrm A)}{(120\ \mu\mathrm{A/V^2})(0.25\ \mathrm V)^2}=33.3,\\
V_{out}(\max)=-0.5\ \mathrm V:\quad& S_8=S_9=S_{10}=S_{11}=\frac{2(125\ \mu\mathrm A)}{(25\ \mu\mathrm{A/V^2})(0.25\ \mathrm V)^2}=160 .
\end{aligned}
$$

（若按 75 µA 静态电流确定 p 沟道共源共栅管尺寸，则为 96。）

### 第 3 步 — 由 GB 确定输入对管

输出是唯一的高阻节点，因此 $GB=g_{m1}/C_L$（rad/s），每个 p 沟道输入管流过 $I_3/2=50$ µA：

$$
g_{m1}=2\pi(10\ \mathrm{MHz})(10\ \mathrm{pF})=628\ \mu\mathrm S,\qquad
S_1=S_2=\frac{g_{m1}^2}{2K'_P(50\ \mu\mathrm A)}=\frac{(628\ \mu\mathrm S)^2}{2(25\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=158 .
$$

### 第 4 步 — 由 $V_{ic}(\max)$ 确定尾电流管

对 p 沟道对管，$V_{ic}$ 升高使公共源极向 $V_{DD}$ 升高，直到 M3 退出饱和。由 $V_{SG1}=|V_{TP}|+\sqrt{2(50\ \mu\mathrm A)/(25\ \mu\mathrm{A/V^2}\cdot158)}=0.5+0.159$ V：

$$
V_{SD3}(\mathrm{sat})=V_{DD}-V_{ic}(\max)-V_{SG1}=0-(-1)-0.659=0.341\ \mathrm V,\qquad
S_3=\frac{2(100\ \mu\mathrm A)}{(25\ \mu\mathrm{A/V^2})(0.341\ \mathrm V)^2}=69 .
$$

### 第 5 步 — 校核 $V_{ic}(\min)$

M1 的漏极是折叠节点，位于 $V_{SS}+V_{DS4}$；只要 $V_{SS}+V_{DS4}\le V_{ic}+|V_{TP}|$，M1 就保持饱和。取 $V_{DS4}=0.25$ V，该条件一直成立到 $V_{ic}=-2.5+0.25-0.5=-2.75$ V，低于所要求的 −2.5 V。（只需 $S_4\ge2I_4/[K'_N(0.5\ \mathrm V)^2]=8.3$，$S_4=33.3$ 满足。）

### 第 6 步 — 增益与功耗

共源共栅管在静态 75 µA 下：

$$
\begin{aligned}
R_{up}&=g_{m9}r_{ds9}r_{ds11},\quad g_{m9}=\sqrt{2(25\ \mu)(160)(75\ \mu)}=775\ \mu\mathrm S,\ g_{ds9}=g_{ds11}=6\ \mu\mathrm S\;\Rightarrow\;R_{up}=21.5\ \mathrm{M\Omega},\\
R_{down}&=g_{m7}r_{ds7}(r_{ds2}\parallel r_{ds5}),\quad g_{m7}=774\ \mu\mathrm S,\ g_{ds7}=4.5\ \mu\mathrm S,\ g_{ds2}+g_{ds5}=(4+7.5)\ \mu\mathrm S\;\Rightarrow\;R_{down}=15.0\ \mathrm{M\Omega},
\end{aligned}
$$
$$
R_{out}=21.5\parallel15.0=8.8\ \mathrm{M\Omega},\qquad A_{vd}=g_{m1}R_{out}=(628\ \mu\mathrm S)(8.8\ \mathrm{M\Omega})=5.5\times10^3>3000 .
$$

由于折叠节点为低阻，输出短路时两半输入电流都能到达输出，短路跨导为 $g_{m1}$。不计偏置电路，功耗为

$$
P_{diss}=(V_{DD}-V_{SS})(I_4+I_5)=(2.5\ \mathrm V)(250\ \mu\mathrm A)=0.63\ \mathrm{mW}<5\ \mathrm{mW}.
$$

| $S_1=S_2$ | $S_3$ | $S_4=S_5$ | $S_6=S_7$ | $S_8$–$S_{11}$ | $I_3$ | $I_4=I_5$ | $A_{vd}$ | $P_{diss}$ |
|---|---|---|---|---|---|---|---|---|
| 158 | 69 | 33 | 33 | 160 | 100 µA | 125 µA | $5.5\times10^3$ | 0.63 mW |

由于 $L=0.5$ µm，$W=S\times0.5$ µm（例如 $W_1=79$ µm）。
