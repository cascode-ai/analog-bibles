# 详细步骤 - A286

两个偏置问题都是 KVL 问题：$V_{Bias}$ 是公共源极节点与 MC1/MC2 栅极之间的电压，$R$ 决定 M3 与 MC3 栅压之差。增益等于差分对送到 $v_{o1}$ 的电流乘以两个共源共栅结构并联的输出电阻。所有器件都饱和，$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$，因此流过 $I$ 的器件有 $V_{DS}(\mathrm{sat})=\sqrt{2I/(K'W/L)}$。

### 第 1 步 — 饱和电压

每个晶体管都流过 $I=50$ µA：

$$
V_{DS}(\mathrm{sat})_N=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.302\ \mathrm V,\qquad
V_{SD}(\mathrm{sat})_P=\sqrt{\frac{2(50\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(5)}}=0.632\ \mathrm V .
$$

### 第 2 步 — 使 $V_{DS1}=V_{DS}(\mathrm{sat})$ 的 $V_{Bias}$

电池连接 M1/M2 的公共源极节点与 MC1/MC2 的栅极。从公共源极经 M1 和 MC1 向上：

$$
V_{Bias}=V_{DS1}+V_{GS,C1}=V_{DS}(\mathrm{sat})+\left[V_{TN}+V_{DS}(\mathrm{sat})\right]=V_{TN}+2V_{DS}(\mathrm{sat}),
$$
$$
V_{Bias}=0.7\ \mathrm V+2(0.302\ \mathrm V)=1.30\ \mathrm V .
$$

### 第 3 步 — 自偏置电阻 $R$

$R$ 接在 MC3 与 MC1 的漏极之间，M3 的栅极位于 $R$ 上端，MC3 的栅极比它低 $IR$。MC3 的源极就是 M3 的漏极，位于 $V_{DD}-V_{SD3}$，因此

$$
V_{SG,C3}=(V_{DD}-V_{SD3})-(V_{DD}-V_{SG3}-IR)=V_{SG3}-V_{SD3}+IR .
$$

MC3 与 M3 尺寸相同、电流相同，故 $V_{SG,C3}=V_{SG3}$，从而 $V_{SD3}=IR$。要使 $V_{SD3}=V_{SD}(\mathrm{sat})$：

$$
R=\frac{V_{SD}(\mathrm{sat})_P}{I}=\frac{0.632\ \mathrm V}{50\ \mu\mathrm A}=12.65\ \mathrm{k\Omega}.
$$

MC3 仍然饱和：$V_{SD,C3}=V_{SG3}-V_{SD3}=(0.7+0.632)-0.632=0.7$ V，大于 $V_{SD}(\mathrm{sat})_P$。M4 和 MC4 复制 M3 和 MC3。

### 第 4 步 — 小信号增益

输入分为 $\pm v_{in}/2$，M1 和 M2 的漏极电流变化 $\pm g_{m1}v_{in}/2$；共源共栅管原样传递这些电流。M1 的电流变化经 M3–M4（通过共源共栅管）镜像到 $v_{o1}$ 节点，与 M2 的电流变化相加，得到短路输出电流 $g_{m1}v_{in}$。输出电阻为 n 沟道共源共栅（MC2 叠在 M2 上）与 p 沟道共源共栅（MC4 叠在 M4 上）的并联：

$$
\frac{v_{o1}}{v_{in}}=g_{m1}R_{out},\qquad
R_{out}\approx(g_{mC2}r_{dsC2}r_{ds2})\parallel(g_{mC4}r_{dsC4}r_{ds4}) .
$$

数值计算：$g_{m1}=g_{mC2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S$，$g_{mC4}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(50\ \mu\mathrm A)}=158\ \mu\mathrm S$，$r_{dsN}=1/(0.04\ \mathrm{V^{-1}}\cdot50\ \mu\mathrm A)=0.5\ \mathrm{M\Omega}$，$r_{dsP}=1/(0.05\ \mathrm{V^{-1}}\cdot50\ \mu\mathrm A)=0.4\ \mathrm{M\Omega}$：

$$
R_{out}=(82.9\ \mathrm{M\Omega})\parallel(25.3\ \mathrm{M\Omega})=19.4\ \mathrm{M\Omega},\qquad
\frac{v_{o1}}{v_{in}}=(331.7\ \mu\mathrm S)(19.4\ \mathrm{M\Omega})=6.4\times10^3 .
$$

（保留加在 $g_mr_{ds}^2$ 上的 $r_{ds}$ 项，约为 $6.6\times10^3$。）按图中的输入极性，输出与 $v_{in}$ 同相：M1 栅压升高时，镜像送入 $v_{o1}$ 的电流增大，同时 M2 的下拉电流减小。
