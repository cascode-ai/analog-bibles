# 详细步骤 - A280

从能确定单个量的指标入手：极点/零点位置规则给出 $C_c$ 和比值 $g_{m6}/g_{m1}$，压摆率给出 $I$，GB 给出 $W_1$，$V_{ic}(\min)$ 给出 $W_5$，输出摆幅给出 $W_6$ 和 $W_7$，p 沟道电流镜的宽度再由 $W_7$ 按电流比例得到。最后校核每个器件的饱和条件；由此可见 $V_{ic}(\max)=2$ V 无法与其他指标同时满足。所有 $L=1$ µm，$S=W/L$，$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$，$g_m=\sqrt{2K'SI_D}$，过驱动电压（overdrive voltage）为 $V_{ov}=\sqrt{2I_D/(K'S)}=2I_D/g_m$。

### 第 1 步 — 电路中的电流

由题给电流镜关系：M5 和 M8 流过 $I$，故 M1、M2 各流过 $I/2$。M11 和 M12 各提供 $1.5I$；在 M2 漏极，$1.5I-I/2=I$ 流入二极管连接的 M3，M4 复制该电流。在第一级输出（M1、M4、M11 漏极），$1.5I=I/2+I$，节点电流平衡。M6 和 M7 流过 $10I$。

### 第 2 步 — 由相位裕度规则求 $C_c$

由 $GB=g_{m1}/C_c$、$|p_2|=g_{m6}/C_L$、$z=g_{m6}/C_c$：

$$
z=10\,GB\;\Rightarrow\;g_{m6}=10g_{m1},\qquad
|p_2|=2\,GB\;\Rightarrow\;\frac{10g_{m1}}{C_L}=\frac{2g_{m1}}{C_c}\;\Rightarrow\;C_c=0.2C_L=2\ \mathrm{pF}.
$$

### 第 3 步 — 由压摆率求 $I$

流入第一级输出节点的电流等于 M11 提供的电流减去 M1 和 M4 抽取的电流。M4 复制 M3，而 M3 流过 $1.5I-i_{d2}$，因此

$$
i_X=1.5I-i_{d1}-(1.5I-i_{d2})=i_{d2}-i_{d1},\qquad i_{d1}+i_{d2}=I .
$$

M1 截止时 $i_X=+I$；M2 截止时 $i_X=-I$。因此该节点以 $\pm I$ 对 $C_c$ 充放电，

$$
SR=\frac{I}{C_c}\;\Rightarrow\;I=(10\ \mathrm{V/\mu s})(2\ \mathrm{pF})=20\ \mu\mathrm A .
$$

### 第 4 步 — 由 GB 确定输入对管，由 $V_{ic}(\min)$ 确定尾电流管

$$
g_{m1}=GB\cdot C_c=2\pi(10\ \mathrm{MHz})(2\ \mathrm{pF})=125.7\ \mu\mathrm S,\qquad
S_1=\frac{g_{m1}^2}{2K'_N(I/2)}=\frac{(125.7\ \mu\mathrm S)^2}{2(24\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)}=32.9 .
$$

故 $W_1=W_2=33$ µm，$V_{ov1}=2(10\ \mu\mathrm A)/(125.7\ \mu\mathrm S)=0.159$ V，$V_{GS1}=0.909$ V。最低共模输入时 M5 仍须饱和：

$$
V_{ic}(\min)=V_{DS5,\mathrm{sat}}+V_{GS1}=1\ \mathrm V\;\Rightarrow\;V_{DS5,\mathrm{sat}}=0.091\ \mathrm V,\qquad
S_5=\frac{2I}{K'_NV_{DS5,\mathrm{sat}}^2}=\frac{2(20\ \mu\mathrm A)}{(24\ \mu\mathrm{A/V^2})(0.091\ \mathrm V)^2}=202 .
$$

M8 在相同 $V_{GS}$ 下流过相同电流，因此 $W_5=W_8=202$ µm。

### 第 5 步 — 镜像负载 M3、M4

M2 的漏极位于 $V_{GS3}$，当 $V_{ic}\le V_{GS3}+V_{TN}$ 时 M2 保持饱和。要达到 2 V，需要 $V_{GS3}=1.25$ V，$V_{ov3}=0.5$ V：

$$
S_3=\frac{2I}{K'_NV_{ov3}^2}=\frac{2(20\ \mu\mathrm A)}{(24\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V^2})}=6.7\;\Rightarrow\;W_3=W_4=7\ \mu\mathrm m .
$$

镜像极点校核：$g_{m3}=\sqrt{2(24\ \mu\mathrm{A/V^2})(7)(20\ \mu\mathrm A)}=82\ \mu\mathrm S$，$C_{gs3}+C_{gs4}=2\cdot\frac23(0.5\ \mathrm{fF/\mu m^2})(7\ \mu\mathrm m^2)=4.7$ fF，得 $g_{m3}/(C_{gs3}+C_{gs4})\approx1.8\times10^{10}$ rad/s，远高于 $10\,GB=6.3\times10^8$ rad/s。

### 第 6 步 — 输出级与 p 沟道电流镜

M6 必须在 $10I=200$ µA 下提供 $g_{m6}=10g_{m1}=1.257$ mS：

$$
S_6=\frac{g_{m6}^2}{2K'_N(10I)}=\frac{(1.257\ \mathrm{mS})^2}{2(24\ \mu\mathrm{A/V^2})(200\ \mu\mathrm A)}=164.5\;\Rightarrow\;W_6=165\ \mu\mathrm m,
$$

此时 $V_{ov6}=0.318$ V（$V_{GS6}=1.068$ V）；$V_{out}(\min)=0.75$ V 大于 $V_{ov6}$，M6 保持饱和。$V_{out}(\max)=1.25$ V 决定 $V_{SD7,\mathrm{sat}}=0.25$ V：

$$
S_7=\frac{2(10I)}{K'_P(0.25\ \mathrm V)^2}=\frac{400\ \mu\mathrm A}{(8\ \mu\mathrm{A/V^2})(0.0625\ \mathrm{V^2})}=800 .
$$

M9–M12 与 M7 共用 $V_{SG}$，宽度与电流成正比：$W_9=W_{10}=800\ \mu\mathrm m\cdot I/(10I)=80$ µm，$W_{11}=W_{12}=1.5\times80=120$ µm。它们都有 $|V_{ov}|=0.25$ V：M11 的 $V_{SD}=1.5-1.068=0.43$ V，M12 的 $V_{SD}=1.5-1.25=0.25$ V，均饱和（M12 处于边界）。

### 第 7 步 — 为什么 $V_{ic}(\max)=2$ V 无法实现

M1 的漏极就是第一级输出，被钳在 $V_{GS6}$，因此无论 M3 如何，只要 $V_{ic}>V_{GS6}+V_{TN}=1.068+0.75=1.82$ V，M1 就退出饱和。要达到 2 V 需要 $V_{ov6}\ge0.5$ V，即 $g_{m6}=2(10I)/V_{ov6}\le40I$；结合 $g_{m6}=10g_{m1}$，意味着 $I\ge g_{m1}/4$。但 $V_{ic}(\min)=1$ V 要求 $V_{ov1}+V_{DS5,\mathrm{sat}}\le0.25$ V，而 $V_{ov1}=I/g_{m1}$，即 $I<g_{m1}(0.25\ \mathrm V)=g_{m1}/4$。对任何 $C_c$、$I$ 和尺寸，这两个要求都互相矛盾，所以最佳设计满足其余所有指标，可达到 $V_{ic}(\max)\approx1.82$ V。

### 第 8 步 — 设计汇总与功耗

$$
P_{diss}=V_{DD}(I+I+1.5I+1.5I+10I)=(1.5\ \mathrm V)(15)(20\ \mu\mathrm A)=450\ \mu\mathrm W .
$$

| $C_c$ | $I$ | $W_1=W_2$ | $W_3=W_4$ | $W_5=W_8$ | $W_6$ | $W_7$ | $W_9=W_{10}$ | $W_{11}=W_{12}$ | $P_{diss}$ |
|---|---|---|---|---|---|---|---|---|---|
| 2 pF | 20 µA | 33 µm | 7 µm | 202 µm | 165 µm | 800 µm | 80 µm | 120 µm | 450 µW |
