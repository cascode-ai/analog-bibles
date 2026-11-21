# 详细步骤 - G222

先求二极管连接的 $M_3$ 的偏置（三只晶体管流过相同电流），再求小信号参数和电容。外加电阻 $1/g_{m1}$ 把输入电流转换为 $M_1$ 的栅源电压，使电流增益恰为 1，因此跨阻就是输出电阻。带宽由输入电流源开路时的零值时间常数求得。信号节点为：$M_1$ 的栅极（$g_1$）、输出，以及 $M_2$、$M_3$ 的镜像栅极节点（$g_m$）；两个电源和地都是交流地。

### 第 1 步 — 偏置

$M_3$ 的栅极和漏极位于 $-2.5\ \mathrm V+V_{GS3}$，取 $W/L_{\text{eff}}=100/0.6=166.7$：

$$
\frac{2.5\ \mathrm V-V_{GS3}}{30\ \mathrm{k\Omega}}=\frac{60\ \mu\mathrm A/\mathrm V^2}{2}(166.7)(V_{GS3}-1\ \mathrm V)^2
\;\Rightarrow\;V_{GS3}=1.097\ \mathrm V,\quad I_D=46.8\ \mu\mathrm A .
$$

$M_2$ 镜像该电流，$M_1$ 也流过该电流（调节 $I_B$ 使 $V_O=0$）。

### 第 2 步 — 小信号参数

$$
g_{m2}=g_{m3}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(166.7)(46.8\ \mu\mathrm A)}=0.967\ \mathrm{mA/V},\qquad
g_{m1}=\sqrt{2(20\ \mu\mathrm A/\mathrm V^2)(333.3)(46.8\ \mu\mathrm A)}=0.790\ \mathrm{mA/V},
$$

故外加电阻为 $1/g_{m1}=1.27$ kΩ，且

$$
r_{o1}=\frac{50\ \mathrm V}{46.8\ \mu\mathrm A}=1.07\ \mathrm{M\Omega},\qquad r_{o2}=\frac{100\ \mathrm V}{46.8\ \mu\mathrm A}=2.14\ \mathrm{M\Omega},\qquad R_{\text{out}}=r_{o1}\parallel r_{o2}=0.713\ \mathrm{M\Omega}.
$$

### 第 3 步 — 跨阻

输入电流从 $M_1$ 的源极（$V_{\text{SUPPLY}}$，交流地）经电阻 $1/g_{m1}$ 抽出，因此 $v_{sg1}=i_i/g_{m1}$，$M_1$ 的漏极电流变化 $g_{m1}v_{sg1}=i_i$，并流入输出：

$$
\frac{v_o}{i_i}=+R_{\text{out}}=0.713\ \mathrm{M\Omega}.
$$

### 第 4 步 — 电容

栅电容，取 $L_{\text{eff}}=0.6\ \mu$m、$L_d=0.2\ \mu$m：

$$
C_{gs1}=\tfrac23(200)(0.6)(0.7)+(200)(0.2)(0.7)=84\ \mathrm{fF},\quad C_{gd1}=28\ \mathrm{fF},\quad C_{gs2}=C_{gs3}=42\ \mathrm{fF},\quad C_{gd2}=14\ \mathrm{fF}.
$$

漏结电容：每个器件 $C_{db0}=240$ fF（$A_D=5W$，$P_D=W$）；$M_1$ 和 $M_2$ 的 $V_{DB}=2.5$ V（输出位于 0，衬底位于 ±2.5 V），$M_3$ 的 $V_{DB}=1.097$ V：

$$
C_{db1}=C_{db2}=\frac{240\ \mathrm{fF}}{\sqrt{1+2.5/0.6}}=106\ \mathrm{fF},\qquad C_{db3}=\frac{240\ \mathrm{fF}}{\sqrt{1+1.097/0.6}}=143\ \mathrm{fF}.
$$

所有源-衬底电容都被短路（源极接在各自的衬底电源上），$C_{gd3}$ 被二极管连接短路。

### 第 5 步 — 零值时间常数

电流源开路时，$g_1$ 看到 $R_g=1/g_{m1}=1.27$ kΩ，镜像节点看到 $R_m=1/g_{m3}\parallel30\ \mathrm{k\Omega}\parallel r_{o3}=1.0$ kΩ。

- $C_{gd1}$（$g_1$ 到输出）：$R_g+R_{\text{out}}+g_{m1}R_{\text{out}}R_g=1.27\ \mathrm{k\Omega}+0.713\ \mathrm{M\Omega}+0.713\ \mathrm{M\Omega}=1.43$ MΩ。
- $C_{gd2}$（镜像节点到输出）：$R_m+R_{\text{out}}+g_{m2}R_{\text{out}}R_m=1.0\ \mathrm{k\Omega}+0.713\ \mathrm{M\Omega}+0.689\ \mathrm{M\Omega}=1.40$ MΩ。

| 电容 | 数值 | 电阻 | 时间常数 |
|---|---|---|---|
| $C_{gs1}$ | 84 fF | 1.27 kΩ | 0.11 ns |
| $C_{gd1}$ | 28 fF | 1.43 MΩ | 39.9 ns |
| $C_{db1}$ | 106 fF | 0.713 MΩ | 75.2 ns |
| $C_{db2}$ | 106 fF | 0.713 MΩ | 75.2 ns |
| $C_{gd2}$ | 14 fF | 1.40 MΩ | 19.6 ns |
| $C_{gs2}+C_{gs3}+C_{db3}$ | 227 fF | 1.0 kΩ | 0.23 ns |

$$
T_0=210\ \mathrm{ns},\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=0.76\ \mathrm{MHz}.
$$

精确节点分析同样给出 0.76 MHz。输出节点起主导作用：其大电阻 $R_{\text{out}}$ 直接作用于两个漏结电容，并通过密勒项作用于两个栅漏交叠电容。
