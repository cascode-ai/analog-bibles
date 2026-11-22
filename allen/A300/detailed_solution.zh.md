# 详细步骤 - A300

该电路是电流镜增益为 1 的电流镜运放：二极管负载 M3 和 M4 由 M8 和 M6 复制，M8 的电流经 M9–M10 反向，M7 和 M11 为输出端的共源共栅管。每个指标确定一个量：压摆率确定 $I_5$，输出极限确定串联器件 M6/M7 和 M10/M11 的尺寸，GB 确定 M1，$V_{ic}(\min)$ 确定 M5，$V_{ic}(\max)$ 用于校核。所有 $L=1$ µm，$S=W/L$，平方律 $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$（确定尺寸时忽略沟道长度调制）。

### 第 1 步 — 由压摆率求 $I_5$

输入过驱动时，$I_5$ 全部流入一个二极管负载，并以 1:1 镜像到输出，因此两个方向上可用于 $C_L$ 的输出电流都是 $I_5$：

$$
I_5=SR\cdot C_L=(10\ \mathrm{V/\mu s})(25\ \mathrm{pF})=250\ \mu\mathrm A .
$$

每条支路静态时流过 125 µA，压摆时最大 250 µA。

### 第 2 步 — 由输出摆幅确定输出器件

串联器件按其必须承受的最大电流（250 µA）确定尺寸，可用余量平均分配。对 $V_{out}(\max)=4$ V，M6 和 M7 分担 1 V：

$$
S_6=S_7=\frac{2(250\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=40 ,
$$

为实现 1:1 镜像，$S_3=S_4=S_8=40$。对 $V_{out}(\min)=1$ V，M10 和 M11 分担 1 V：

$$
S_9=S_{10}=S_{11}=\frac{2(250\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=18.2\;\Rightarrow\;W=18\text{–}19\ \mu\mathrm m .
$$

### 第 3 步 — 由 GB 确定输入对管

输出节点是唯一的高阻节点，且电流镜增益为 1，因此 $GB=g_{m1}/C_L$：

$$
g_{m1}=2\pi(10\ \mathrm{MHz})(25\ \mathrm{pF})=1.571\ \mathrm{mS},\qquad
S_1=\frac{g_{m1}^2}{2K'_N(125\ \mu\mathrm A)}=\frac{(1.571\ \mathrm{mS})^2}{2(110\ \mu\mathrm{A/V^2})(125\ \mu\mathrm A)}=89.7\;\Rightarrow\;W_1=W_2=90\ \mu\mathrm m .
$$

### 第 4 步 — 共模范围

上限要求 M1 保持饱和，其漏极比 $V_{DD}$ 低一个 $V_{SG3}$：

$$
V_{ic}(\max)=V_{DD}-V_{SG3}+V_{TN}=5-\left(0.7+\sqrt{\frac{2(125\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(40)}}\right)+0.7=4.65\ \mathrm V\ge4\ \mathrm V .
$$

下限要求 M5 保持饱和，其中 $V_{GS1}=0.7+\sqrt{2(125)/(110\cdot90)}=0.859$ V：

$$
V_{ic}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=1.5\ \mathrm V\;\Rightarrow\;V_{DS5}(\mathrm{sat})=0.641\ \mathrm V,\qquad
S_5=\frac{2(250\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.641\ \mathrm V)^2}=11.1\;\Rightarrow\;W_5=11\ \mu\mathrm m .
$$

### 第 5 步 — 共源共栅偏置电压

选择 $V_{BP}$ 和 $V_{BN}$，使 M6 和 M10 在最大电流时恰好饱和，此时 $V_{SG7}=V_{GS11}=0.7+0.5=1.2$ V：

$$
V_{BP}=V_{DD}-V_{SD6}(\mathrm{sat})-V_{SG7}=5-0.5-1.2=3.3\ \mathrm V,\qquad
V_{BN}=V_{DS10}(\mathrm{sat})+V_{GS11}=0.5+1.2=1.7\ \mathrm V .
$$

静态电流 125 µA 时这些器件还有额外余量。

### 第 6 步 — 功耗与增益

$$
P_{diss}=V_{DD}(I_5+I_9+I_{10})=(5\ \mathrm V)(250+125+125)\ \mu\mathrm A=2.5\ \mathrm{mW}.
$$

在 125 µA 下：$g_{m1}=1.573$ mS，$g_{m11}=\sqrt{2(110\ \mu)(18)(125\ \mu)}=704\ \mu$S，$g_{m7}=\sqrt{2(50\ \mu)(40)(125\ \mu)}=707\ \mu$S，$r_{dsN}=1/(0.04\cdot125\ \mu\mathrm A)=200$ kΩ，$r_{dsP}=160$ kΩ：

$$
R_{out}=(g_{m11}r_{ds11}r_{ds10})\parallel(g_{m7}r_{ds7}r_{ds6})=(28.1\ \mathrm{M\Omega})\parallel(18.1\ \mathrm{M\Omega})=11.0\ \mathrm{M\Omega},
$$
$$
A_{vd}=g_{m1}R_{out}=(1.573\ \mathrm{mS})(11.0\ \mathrm{M\Omega})=1.7\times10^4\ \mathrm{V/V}.
$$

| $W_1=W_2$ | $W_3=W_4=W_6=W_7=W_8$ | $W_9=W_{10}=W_{11}$ | $W_5$ | $I_5$ | $P_{diss}$ | $A_{vd}$ | $V_{BP}$ | $V_{BN}$ |
|---|---|---|---|---|---|---|---|---|
| 90 µm | 40 µm | 18 µm（留余量取 19） | 11 µm | 250 µA | 2.5 mW | $1.7\times10^4$ | 3.3 V | 1.7 V |
