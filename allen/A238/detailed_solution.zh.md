# 详细步骤 - A238

两只晶体管都是源极跟随器，源极共接输出节点，因此它们的跨导并联起作用。计算 100 µA 时的 $g_{m1}$、$g_{m2}$，合成输出电导，再与 $R_L$ 构成分压。

### 第 1 步 — 偏置检查

$v_{IN}=0$、$v_{OUT}=0$ 时 $V_{GS1}=V_{SG2}=0.7$ V，由平方律

$$
I_{D1}=\frac{K'_N}{2}\frac{W_1}{L_1}(V_{GS1}-V_{TN})^2=\frac{(100\ \mu\mathrm{A/V^2})(50)}{2}(0.2\ \mathrm V)^2=100\ \mu\mathrm A,
$$

$$
I_{D2}=\frac{K'_P}{2}\frac{W_2}{L_2}(V_{SG2}-|V_{TP}|)^2=\frac{(50\ \mu\mathrm{A/V^2})(100)}{2}(0.2\ \mathrm V)^2=100\ \mu\mathrm A .
$$

两电流相等，$R_L$ 中无电流，$v_{OUT}=0$ 自洽。由于 $|V_{DS}|=1.5$ V 大于 0.2 V 的过驱动电压，两管均处于饱和区。

### 第 2 步 — 跨导

$$
g_{m1}=\sqrt{2K'_N\frac{W_1}{L_1}I_D}=\sqrt{2(100\ \mu\mathrm{A/V^2})(50)(100\ \mu\mathrm A)}=1\ \mathrm{mS},
$$

$$
g_{m2}=\sqrt{2K'_P\frac{W_2}{L_2}I_D}=\sqrt{2(50\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm A)}=1\ \mathrm{mS}.
$$

### 第 3 步 — 输出电阻

两个栅极都跟随 $v_{in}$（电池对交流相当于短路），所以 $v_{in}=0$ 并在输出端加测试电压 $v_x$ 时，$v_{gs1}=-v_x$，$v_{sg2}=v_x$。M1 送入节点的电流减少 $g_{m1}v_x$，M2 从节点抽走的电流增加 $g_{m2}v_x$，故 $i_x=(g_{m1}+g_{m2})v_x$。在 $\lambda=0$ 且无体效应时，

$$
R_{out}=\frac{1}{g_{m1}+g_{m2}}=\frac{1}{2\ \mathrm{mS}}=500\ \Omega .
$$

### 第 4 步 — 电压增益

输出节点 KCL：两个跟随器注入 $(g_{m1}+g_{m2})(v_{in}-v_{out})$，全部流入 $R_L$：

$$
(g_{m1}+g_{m2})(v_{in}-v_{out})=\frac{v_{out}}{R_L}
\;\Rightarrow\;
A_v=\frac{g_{m1}+g_{m2}}{g_{m1}+g_{m2}+1/R_L}=\frac{R_L}{R_L+R_{out}}=\frac{500}{500+500}=0.5\ \mathrm{V/V}.
$$

空载时增益为 1；500 Ω 负载等于输出电阻，使增益减半。
