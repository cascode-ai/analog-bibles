# 详细步骤 - A139

电流镜负载差分对把 $v_{in}$ 转换为短路输出电流 $g_{md}v_{in}$，其中 $g_{md}=g_{m1}$；其输出电阻为 $1/(g_{ds2}+g_{ds4})$。增益是两者之积。高阻输出端只接 10 pF 电容时，电路只有一个位于 $1/(R_{out}C)$ 的极点；电流镜节点是低阻节点，忽略器件电容时不产生极点。

### 第 1 步 — 差分跨导

平衡时每个输入管流过 $I_{SS}/2=5$ µA。差分输入使 $i_{d1}$ 变化 $+g_{m1}v_{in}/2$，$i_{d2}$ 变化 $-g_{m1}v_{in}/2$；电流镜把 M1 的变化复制到输出端，与 M2 的变化相加，所以短路输出电流为 $g_{m1}v_{in}$：

$$
g_{md}=g_{m1}=\sqrt{2K'_N\frac WL\frac{I_{SS}}{2}}=\sqrt{K'_NI_{SS}\frac WL}=\sqrt{(110\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)(10)}=104.9\ \mu\mathrm S .
$$

### 第 2 步 — 输出电阻

尾电流源理想时，一阶近似下输出电导等于 M2 与 M4 漏极电导之和，两管各工作在 5 µA：

$$
g_{ds2}+g_{ds4}=(0.04+0.05\ \mathrm{V^{-1}})(5\ \mu\mathrm A)=0.45\ \mu\mathrm S,\qquad R_{out}=2.22\ \mathrm{M\Omega}.
$$

### 第 3 步 — 电压增益

$$
\frac{v_o}{v_i}=g_{md}R_{out}=\frac{104.9\ \mu\mathrm S}{0.45\ \mu\mathrm S}=233\ \mathrm{V/V}.
$$

增益为正（对 $v_1$ 同相）：$v_1$ 升高使 M1 电流增大，电流镜把它送到输出端，而 M2 电流减小。单端输出仍利用了全部 $g_{m1}$，因为电流镜回收了 M1 的半边信号电流。

### 第 4 步 — 接 10 pF 时的 −3 dB 频率

输出端到地接 $C=10$ pF 时，对输出节点列 KCL 得

$$
\frac{V_{out}(j\omega)}{V_{in}(j\omega)}=\frac{g_{md}}{g_{ds2}+g_{ds4}+j\omega C},
\qquad
f_{-3\,\mathrm{dB}}=\frac{g_{ds2}+g_{ds4}}{2\pi C}=\frac{0.45\ \mu\mathrm S}{2\pi(10\ \mathrm{pF})}=7.16\ \mathrm{kHz}.
$$

增益带宽积为 $g_{md}/(2\pi C)=1.67$ MHz，与 $233\times7.16\ \mathrm{kHz}$ 一致。
