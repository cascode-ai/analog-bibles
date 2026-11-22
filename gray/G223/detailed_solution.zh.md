# 详细步骤 - G223

偏置、小信号参数和器件电容都与未加电容的级相同。20 pF 电容在低频时开路，因此跨阻不变。对带宽而言，它与 $C_{gd1}$ 相加，从 $M_1$ 的栅极接到输出，并被密勒倍增；其余零值时间常数都不变。

### 第 1 步 — 偏置与小信号参数

二极管连接的 $M_3$ 与 30 kΩ 电阻使三只晶体管都工作在 $V_{GS3}=1.097$ V、$I_D=46.8\ \mu$A（平方律，NMOS 的 $W/L_{\text{eff}}=166.7$）。于是

$$
g_{m1}=\sqrt{2(20\ \mu\mathrm A/\mathrm V^2)(333.3)(46.8\ \mu\mathrm A)}=0.790\ \mathrm{mA/V},\qquad \frac1{g_{m1}}=1.27\ \mathrm{k\Omega},
$$
$$
R_{\text{out}}=r_{o1}\parallel r_{o2}=1.07\ \mathrm{M\Omega}\parallel2.14\ \mathrm{M\Omega}=0.713\ \mathrm{M\Omega}.
$$

### 第 2 步 — 跨阻

输入电流从 $M_1$ 的源极经电阻 $1/g_{m1}$ 流出，得到 $v_{sg1}=i_i/g_{m1}$，漏极电流恰好变化 $i_i$ 并流入输出：

$$
\frac{v_o}{i_i}=+R_{\text{out}}=0.713\ \mathrm{M\Omega}.
$$

### 第 3 步 — 密勒电容

20 pF 与 $C_{gd1}=28$ fF 合计 $C_F=20.03$ pF，连接 $M_1$ 的栅极与输出。输入电流源开路时，栅极看到 $R_g=1/g_{m1}$，故

$$
R_F=R_g+R_{\text{out}}+g_{m1}R_{\text{out}}R_g=1.27\ \mathrm{k\Omega}+0.713\ \mathrm{M\Omega}+0.713\ \mathrm{M\Omega}=1.43\ \mathrm{M\Omega},
$$
$$
C_FR_F=(20.03\ \mathrm{pF})(1.43\ \mathrm{M\Omega})=28.57\ \mu\mathrm s .
$$

### 第 4 步 — 时间常数之和

其余电容的时间常数与未加 20 pF 时相同：$C_{db1}$ 和 $C_{db2}$（各 106 fF，配 $R_{\text{out}}$）各 75.2 ns，$C_{gd2}$（14 fF，配 1.40 MΩ）19.6 ns，$C_{gs1}$ 与镜像节点电容约 0.3 ns，合计约 0.17 µs。

$$
T_0=28.57+0.17\ \mu\mathrm s=28.74\ \mu\mathrm s,\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=5.5\ \mathrm{kHz}.
$$

由于密勒电容形成了明显的主极点，精确节点分析同样给出 5.5 kHz。在相同的 20 pF 下，MOS 级比对应的双极型级（1.33 kHz）快约四倍，因为栅极处的电阻只有 $1/g_{m1}$ 而不是 $r_\pi$，使密勒电阻从 5.81 MΩ 减小到 1.43 MΩ。
