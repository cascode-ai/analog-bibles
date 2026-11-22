# 详细步骤 - A140

小信号部分使用电流镜负载差分对的标准结果：短路跨导 $g_{md}=g_{m1}$，输出电阻 $1/(g_{ds2}+g_{ds4})$。共模极限分别来自：使 M1 相对于被电流镜固定的漏极保持饱和（上限），以及使公共源极下方的尾电流管 M5 保持饱和（下限）。平衡时 M5 流过 $I_{SS}=10$ µA，M1–M4 各流过 5 µA；所有器件 $W/L=2$。

### 第 1 步 — 增益与输出电阻

$$
g_{m1}=\sqrt{2K'_N\frac WL\frac{I_{SS}}{2}}=\sqrt{(110\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)(2)}=46.9\ \mu\mathrm S,
$$

$$
g_{ds2}+g_{ds4}=(0.04+0.05\ \mathrm{V^{-1}})(5\ \mu\mathrm A)=0.45\ \mu\mathrm S,\qquad
R_{out}=\frac1{0.45\ \mu\mathrm S}=2.22\ \mathrm{M\Omega},
$$

$$
\frac{v_{out}}{v_{in}}=g_{m1}R_{out}=\frac{46.9\ \mu\mathrm S}{0.45\ \mu\mathrm S}=104\ \mathrm{V/V}.
$$

电流镜把 M1 的半边信号电流加到 M2 的电流上，所以单端输出利用了全部 $g_{m1}$。

### 第 2 步 — 共模极限所需的器件电压

由 $V_{OV}=\sqrt{2I_D/[K'(W/L)]}$：

| 量 | 电流 | 数值 |
|---|---|---|
| $V_{SG3}=0.7+\sqrt{2(5\ \mu\mathrm A)/[(50\ \mu\mathrm{A/V^2})(2)]}$ | 5 µA | 0.7 + 0.316 = 1.016 V |
| $V_{DS5}(\mathrm{sat})=\sqrt{2(10\ \mu\mathrm A)/[(110\ \mu\mathrm{A/V^2})(2)]}$ | 10 µA | 0.302 V |
| $V_{GS1}=0.7+\sqrt{2(5\ \mu\mathrm A)/[(110\ \mu\mathrm{A/V^2})(2)]}$ | 5 µA | 0.7 + 0.213 = 0.913 V |

### 第 3 步 — 最大共模输入

M1 的漏极由二极管连接的 M3 固定在 $V_{DD}-V_{SG3}$。M1 保持饱和的条件是 $V_{G1}\le V_{D1}+V_{TN}$：

$$
V_{IC}(\max)=V_{DD}-V_{SG3}+V_{TN1}=V_{DD}-1.016+0.7\ \mathrm V=V_{DD}-0.316\ \mathrm V,
$$

即 $V_{DD}=5$ V 时为 4.68 V。

### 第 4 步 — 最小共模输入

公共源极比栅极低一个 $V_{GS1}$，而 M5 至少需要高于地 $V_{DS5}(\mathrm{sat})$：

$$
V_{IC}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=0.302+0.913\ \mathrm V=1.215\ \mathrm V .
$$

因此 $V_{DD}=5$ V 时输入共模范围为 $1.215\ \mathrm V\le V_{IC}\le4.68\ \mathrm V$，增益 $A_v=104$ V/V，$R_{out}=2.22$ MΩ。
