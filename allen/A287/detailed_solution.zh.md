# 详细步骤 - A287

共源共栅管的栅极偏置为 $V_{Bias}=V_{GS,MB5}$（以公共源极节点为参考），因此 MB5 的尺寸必须使该偏置恰好让 M1 和 M2 处于饱和边界。MB5 的电流来自 MB1 和 MB2，经电流镜 MB3–MB4 传递，由此确定 MB1/MB2 的电流；MB1、MB2 与 M1、M2 共用栅极和源极，其尺寸按电流比例得到。所有器件都饱和，$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$。

### 第 1 步 — 所需偏置电压

对 M1 和 MC1（均为 10，50 µA），$V_{DS}(\mathrm{sat})=\sqrt{2I/(K'_N W/L)}$：

$$
V_{DS}(\mathrm{sat})=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.302\ \mathrm V,
$$
$$
V_{Bias}=V_{DS1}+V_{GS,C1}=V_{DS}(\mathrm{sat})+V_{TN}+V_{DS}(\mathrm{sat})=0.7\ \mathrm V+2(0.302\ \mathrm V)=1.303\ \mathrm V .
$$

### 第 2 步 — MB5 的尺寸

MB5 流过 5 µA，$V_{GS,MB5}=1.303$ V，即过驱动电压为 0.603 V：

$$
\left(\frac WL\right)_{MB5}=\frac{2I_{MB5}}{K'_N(V_{GS,MB5}-V_{TN})^2}=\frac{2(5\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.603\ \mathrm V)^2}=0.25 .
$$

### 第 3 步 — MB1–MB4

MB3 = MB4，电流镜比例为 1：$I_{MB3}=I_{MB4}=I_{MB5}=5$ µA。MB3 流过 MB1 与 MB2 漏极电流之和，二者由对称性相等：$I_{MB1}=I_{MB2}=2.5$ µA。MB1、MB2 与 M1、M2 的 $V_{GS}$ 相同（栅极接输入，源极接公共源极节点），因此

$$
\left(\frac WL\right)_{MB1}=\left(\frac WL\right)_{MB2}=10\cdot\frac{2.5\ \mu\mathrm A}{50\ \mu\mathrm A}=0.5 .
$$

MB3 = MB4 的尺寸不由上述条件确定，只要求两者相等。它决定 MB1/MB2 的漏极电压，选取时须使 MB1、MB2 和 MB4 保持饱和（例如 W/L = 1）。

### 第 4 步 — M5 中的电流

所有回到公共源极节点的支路都经过 M5：M1、M2、MB1、MB2，以及源极同样接在该节点的 MB5：

$$
I_5=50+50+2.5+2.5+5=110\ \mu\mathrm A .
$$
