# 详细步骤 - A115

M1 和二极管连接的负载 M2 中流过同样的 100 µA。由 M1 的平方律求输入电压；由 M2 的平方律求输出偏置，并据此确认 M1 饱和。在小信号模型中，M1 是驱动输出节点的跨导 $g_{m1}$，输出节点的负载为二极管电导 $g_{m2}$ 与两管输出电导的并联。

### 第 1 步 — 100 µA 对应的输入电压

M1（源极接地，栅极接 $V_{in}$）处于饱和区。偏置计算中忽略因子 $(1+\lambda v_{DS})$：

$$
I_D=\frac{K'_N}{2}\frac{W_1}{L_1}(V_{in}-V_{TN})^2
\quad\Rightarrow\quad
V_{in}-0.7\ \mathrm V=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(5)}}=0.603\ \mathrm V,
$$

$$
V_{in}=1.303\ \mathrm V\approx1.30\ \mathrm V .
$$

### 第 2 步 — 输出偏置与饱和检查

M2 为二极管连接（$v_{SD2}=v_{SG2}$），处于饱和区。100 µA 时其源栅电压为

$$
V_{SG2}=|V_{TP}|+\sqrt{\frac{2I_D}{K'_P(W_2/L_2)}}=0.7\ \mathrm V+\sqrt{\frac{2(100\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(2)}}=0.7+1.414\ \mathrm V=2.114\ \mathrm V,
$$

故 $V_{OUT}=5-2.114=2.89$ V。由于 $V_{DS1}=2.89$ V 大于 $V_{in}-V_{TN}=0.603$ V，M1 饱和。

若在 $v_{DS1}=2.89$ V 处保留 $(1+\lambda_Nv_{DS1})$，所需过驱动电压降为 $0.603\ \mathrm V/\sqrt{1.1154}$，得 $V_{in}\approx1.27$ V；差别很小。

### 第 3 步 — 小信号参数

由 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $g_{ds}=\lambda I_D$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(2)(100\ \mu\mathrm A)}=141.4\ \mu\mathrm S,
$$

$$
g_{ds1}=(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=4\ \mu\mathrm S,\qquad
g_{ds2}=(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=5\ \mu\mathrm S .
$$

### 第 4 步 — 电压增益

对输出节点列 KCL：M1 吸取 $g_{m1}v_{in}$，节点负载为二极管连接的 M2（其栅极接输出，相当于对交流地的电导 $g_{m2}$）以及 $g_{ds1}$、$g_{ds2}$：

$$
g_{m1}v_{in}+(g_{m2}+g_{ds1}+g_{ds2})v_{out}=0
\quad\Rightarrow\quad
A_v=-\frac{g_{m1}}{g_{m2}+g_{ds1}+g_{ds2}}=-\frac{331.7}{150.4}=-2.20\ \mathrm{V/V}.
$$

忽略输出电导时，$A_v\approx-g_{m1}/g_{m2}=-2.35$ V/V。

### 第 5 步 — 输出电阻

令 $v_{in}=0$，输出端是同样三个电导的并联：

$$
R_{out}=\frac1{g_{m2}+g_{ds1}+g_{ds2}}=\frac1{150.4\ \mu\mathrm S}=6.65\ \mathrm{k\Omega},
$$

若忽略 $g_{ds}$ 则为 $1/g_{m2}=7.07$ kΩ。两个结果都由二极管连接负载主导，这正是增益较小的原因。
