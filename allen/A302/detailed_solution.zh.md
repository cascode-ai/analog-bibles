# 详细步骤 - A302

按通常顺序设计：压摆率给出 $I$，GB 给出输入对管，输出极限给出与输出串联的器件（下限要计入 M8–M11 共源共栅电流镜多出的一个阈值电压），$V_{ic}(\min)$ 给出尾电流管 M5，再校核 $V_{ic}(\max)$，偏置器件 M12–M15 由镜像比例得到。然后计算 $R_{out}$ 和增益。所有 $L=1$ µm，$S=W/L$，平方律 $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$，$\lambda$ 只用于 $r_{ds}$。

### 第 1 步 — 由压摆率求偏置电流

输入过驱动时，输出可提供或吸收 $I$：例如 M2 吸收全部 $I$ 时，M7 流过 $1.5I-I=0.5I$，而 M11 从 M6 支路镜像出 $1.5I$，输出端净电流为 $-I$。因此

$$
I=SR\cdot C_L=(10\ \mathrm{V/\mu s})(10\ \mathrm{pF})=100\ \mu\mathrm A,
$$

M3 和 M4 流过 150 µA，共源共栅支路静态时流过 100 µA，压摆时最大 150 µA。

### 第 2 步 — 由 GB 确定输入对管

$$
g_{m1}=2\pi(10\ \mathrm{MHz})(10\ \mathrm{pF})=628\ \mu\mathrm S,\qquad
S_1=S_2=\frac{g_{m1}^2}{2K'_N(0.5I)}=\frac{(628\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=35.9\;\Rightarrow\;W_1=W_2=36\ \mu\mathrm m .
$$

### 第 3 步 — 输出上限：M3、M4、M6、M7

$V_{out}(\max)=+2$ V 在 M4 和 M7 上留下 1 V，各 0.5 V。M4 流过 150 µA：

$$
S_3=S_4=\frac{2(150\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=24 .
$$

M7 在压摆时最大可流过 150 µA，因此也取 $S_6=S_7=24$（若按 100 µA 确定则为 16）。

### 第 4 步 — 输出下限：M8–M11

在共源共栅电流镜中 M8 和 M10 为二极管连接，因此 M9 的栅极位于 $V_{SS}+V_{GS10}+V_{GS8}$，源极位于 $V_{SS}+V_{GS10}$。输出最低可到

$$
V_{out}(\min)=V_{SS}+V_{GS10}+V_{ov9}=V_{SS}+V_{TN}+2V_{ov}=-2\ \mathrm V\;\Rightarrow\;V_{ov}=\frac{1-0.7}{2}=0.15\ \mathrm V,
$$

即把扣除多出的 $V_{TN}$ 后剩余的余量平均分配。在最坏电流 150 µA 下：

$$
S_8=S_9=S_{10}=S_{11}=\frac{2(150\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.15\ \mathrm V)^2}=121 .
$$

### 第 5 步 — 共模范围：M5 与 $V_{ic}(\max)$ 的校核

$V_{GS1}=0.7+\sqrt{2(50\ \mu\mathrm A)/(110\ \mu\mathrm{A/V^2}\cdot36)}=0.859$ V，因此

$$
V_{ic}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}=-1\ \mathrm V\;\Rightarrow\;V_{DS5}(\mathrm{sat})=1.14\ \mathrm V,\qquad
S_5=\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(1.14\ \mathrm V)^2}=1.4 .
$$

M12 和 M13 在相同 $V_{GS}$ 下流过相同电流 $I$，故 $S_{12}=S_{13}=1.4$。对上限，M1 的漏极是折叠节点，位于 $V_{G6}+V_{SG6}$；由 $V_{G6}=1.3$ V（第 6 步）和 $V_{SG6}=0.7+\sqrt{2(100)/(50\cdot24)}=1.11$ V，该节点位于 2.41 V，因此 M1 在 $V_{ic}\approx2.41+0.7=3.1$ V 以下保持饱和，高于所要求的 +2 V。

### 第 6 步 — 偏置器件 M14、M15

M14（二极管，$I$）镜像到 M3、M4（$1.5I$）：$S_{14}=24/1.5=16$。M15（二极管，$I$）设定 M6/M7 的栅压，使 M7 流过 150 µA 时 M4 恰处于饱和边界：

$$
V_{SG15}=V_{SD4}(\mathrm{sat})+V_{SG7}=0.5+(0.7+0.5)=1.7\ \mathrm V\;\Rightarrow\;
S_{15}=\frac{2(100\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(1.0\ \mathrm V)^2}=4,
$$

从而 $V_{G6}=V_{G7}=3-1.7=1.3$ V。电源电流为 $I$（M14）$+I$（M15）$+3I$（M3、M4）$=5I$，故 $P_{diss}=(6\ \mathrm V)(500\ \mu\mathrm A)=3.0$ mW。

| $W_1=W_2$ | $W_3=W_4$ | $W_6=W_7$ | $W_8$–$W_{11}$ | $W_5=W_{12}=W_{13}$ | $W_{14}$ | $W_{15}$ |
|---|---|---|---|---|---|---|
| 36 µm | 24 µm | 24 µm | 121 µm | 1.4 µm | 16 µm | 4 µm |

### 第 7 步 — 输出电阻与增益

在静态电流下：$g_{m9}=\sqrt{2(110\ \mu)(121)(100\ \mu)}=1.63$ mS，$r_{ds9}=r_{ds11}=250$ kΩ；$g_{m7}=\sqrt{2(50\ \mu)(24)(100\ \mu)}=490\ \mu$S，$r_{ds7}=200$ kΩ，$r_{ds2}\parallel r_{ds4}=500\parallel133=105$ kΩ：

$$
R_{out}=(g_{m9}r_{ds9}r_{ds11})\parallel\left[g_{m7}r_{ds7}(r_{ds2}\parallel r_{ds4})\right]=(102\ \mathrm{M\Omega})\parallel(10.3\ \mathrm{M\Omega})=9.4\ \mathrm{M\Omega}.
$$

输出短路时，M1 的信号电流经 M6 和 M8–M11 电流镜到达输出，M2 的信号电流经 M7 到达输出（M7 源极约为 $1/g_{m7}$，远小于 $r_{ds2}\parallel r_{ds4}$），因此短路跨导为 $g_{m1}$：

$$
A_{vd}=\frac{v_{out}}{v_1-v_2}=g_{m1}R_{out}=(628\ \mu\mathrm S)(9.4\ \mathrm{M\Omega})=5.9\times10^3\ \mathrm{V/V},
$$

与 $v_{id}$ 同相：$v_1$ 升高使经折叠节点流过 M6 的电流减小，电流镜 M8–M11 从输出端抽取的电流随之减小。
