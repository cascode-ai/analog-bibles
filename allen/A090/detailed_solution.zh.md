# 详细步骤 - A090

识别出自偏置共源共栅拓扑，用平方律（偏置计算忽略 $\lambda$）求直流节点电压并检查所有器件都饱和，再推导小信号输入、输出电阻和两个最小电压。

### 第 1 步 — 拓扑与直流偏置

输入节点（$R$ 的上端）驱动共源共栅管 M3、M4 的栅极；$R$ 的下端即 M3 的漏极，驱动 M1、M2 的栅极。50 µA 输入电流流经 $R$、M3 和 M1。对 M1（10/1）：

$$
V_{ON1}=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.302\ \mathrm V,\qquad V_{GS1}=1.002\ \mathrm V,\qquad IR=(50\ \mu\mathrm A)(12.9\ \mathrm{k\Omega})=0.645\ \mathrm V .
$$

M3 的漏极位于 $V_{GS1}=1.002$ V，输入节点位于 $V_{GS1}+IR=1.647$ V。M3 与 M1 尺寸和电流相同，因此 $V_{GS3}=1.002$ V，其源极（即 M1 的漏极）位于 $1.647-1.002=0.645$ V。于是

$$
V_{DS1}=0.645\ \mathrm V,\qquad V_{DS3}=1.002-0.645=0.357\ \mathrm V,
$$

两者都大于 $V_{ON}=0.302$ V，M1 和 M3 都饱和。

### 第 2 步 — 电流比

M2、M4 的宽度是 M1、M3 的十倍，栅压相同，因此在十倍电流下 $V_{GS}$ 相同；M4 的源极也位于 $1.647-1.002=0.645$ V，所以 $V_{DS2}=V_{DS1}$，连 $\lambda$ 项也匹配。因此

$$
\frac{i_{out}}{i_{in}}=\frac{(W/L)_2}{(W/L)_1}=10,
$$

与 500 µA 的输出偏置一致。

### 第 3 步 — 输入电阻

$i_{in}$ 全部经 $R$ 流入 M3 的漏极（M3、M4 的栅极不取电流）。在共源共栅支路中，流过 M3 的电流等于 M1 的电流 $g_{m1}v_{g1}$，其中 $v_{g1}$ 为 $R$ 下端的电压。因此 $v_{g1}=i_{in}/g_{m1}$，$v_{in}=v_{g1}+i_{in}R$：

$$
g_{m1}=\frac{2I}{V_{ON1}}=\frac{2(50\ \mu\mathrm A)}{0.302\ \mathrm V}=332\ \mu\mathrm S,\qquad
R_{in}\approx R+\frac{1}{g_{m1}}=12.9\ \mathrm{k\Omega}+3.02\ \mathrm{k\Omega}=15.9\ \mathrm{k\Omega}.
$$

### 第 4 步 — 输出电阻

从输出看进去是以 $r_{ds2}$ 作源极负反馈的 M4，两个栅极的小信号电压都固定：

$$
g_{m4}=\sqrt{2(110\ \mu\mathrm{A/V^2})(100)(500\ \mu\mathrm A)}=3.32\ \mathrm{mS},\qquad
r_{ds2}=r_{ds4}=\frac{1}{(0.04\ \mathrm{V^{-1}})(500\ \mu\mathrm A)}=50\ \mathrm{k\Omega},
$$

$$
R_{out}=r_{ds2}+r_{ds4}+g_{m4}r_{ds4}r_{ds2}=0.1\ \mathrm{M\Omega}+(3.32\ \mathrm{mS})(50\ \mathrm{k\Omega})^2=8.39\ \mathrm{M\Omega}.
$$

仅取主导项为 8.29 MΩ。若在 $r_{ds}$ 中保留 $(1+\lambda v_{DS})$ 因子，结果略有增大，在最小输出电压附近约为 8.8 MΩ（ngspice level 1 在 $v_{OUT}=1.2$ V 时给出 8.9 MΩ）。

### 第 5 步 — 最小输入和输出电压

输入节点位于 $V_{GS1}+IR$，因此

$$
V_{MIN}(\text{in})=V_{GS1}+IR=1.002+0.645=1.65\ \mathrm V .
$$

只要 $v_{OUT}\ge V_{G4}-V_T$，M4 就饱和：

$$
V_{MIN}(\text{out})=1.647\ \mathrm V-0.7\ \mathrm V=0.95\ \mathrm V\;(=V_{DS2}+V_{ON4}=0.645+0.302).
$$

由于 $IR=0.645$ V 大于 $V_{ON}$，M1、M2 的 $V_{DS}$ 超出所需，$V_{MIN}(\text{out})$ 高于理想高摆幅值 $2V_{ON}=0.60$ V；若选择 $R$ 使 $IR\approx V_{ON}$（约 6 kΩ），即可达到该值。

| 量 | 数值 |
|---|---|
| $R_{in}$ | 15.9 kΩ |
| $i_{out}/i_{in}$ | 10 |
| $R_{out}$ | 8.4 MΩ |
| $V_{MIN}(\text{in})$ | 1.65 V |
| $V_{MIN}(\text{out})$ | 0.95 V |
