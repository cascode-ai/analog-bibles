# 详细步骤 - A295

输入共模范围由最先退出饱和的两个器件限定：下限由尾电流管 M7 决定，上限由输入管 M1 决定，M1 的漏极被二极管 M5 和共源共栅管 M3 压在 $V_{DD}$ 以下。把每个极限写成 KVL 路径，用平方律表示各饱和电压，并选取使该极限最差的阈值极值。所有器件都饱和，$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$，因此流过 $I$ 的器件过驱动电压为 $\sqrt{2I/(K'S)}$。

### 第 1 步 — 器件电流与过驱动电压

M7 流过尾电流 $I_7$；M1、M3 和 M5 各流过 $I_7/2$：

$$
V_{DS7}(\mathrm{sat})=\sqrt{\frac{2I_7}{K'_NS_7}},\qquad V_{ov1}=\sqrt{\frac{I_7}{K'_NS_1}},\qquad
V_{SD3}(\mathrm{sat})=\sqrt{\frac{I_7}{K'_PS_3}},\qquad V_{SG5}=|V_{T5}|+\sqrt{\frac{I_7}{K'_PS_5}} .
$$

### 第 2 步 — 下限

$V_{ic}$ 下降时，公共源极节点随之下降，直到 M7 到达饱和边界。从 $V_{SS}$ 经 M7 和 M1 到栅极的 KVL：

$$
V_{ic}\ge V_{SS}+V_{DS7}(\mathrm{sat})+V_{GS1},\qquad V_{GS1}=V_{T1}+V_{ov1} .
$$

最差情况取最大阈值：

$$
V_{ic}(\min)=V_{SS}+\sqrt{\frac{2I_7}{K'_NS_7}}+V_{T1}(\max)+\sqrt{\frac{I_7}{K'_NS_1}} .
$$

### 第 3 步 — 上限

$V_{ic}$ 上升时，M1 只在 $V_{D1}\ge V_{ic}-V_{T1}$ 时保持饱和。M1 的漏极同时也是 p 沟道共源共栅管 M3 的漏极，M3 的源极挂在二极管 M5 之下，位于 $V_{DD}-V_{SG5}$；M3 在 $I_7/2$ 下饱和时，M1 漏极最高只能到 $V_{DD}-V_{SG5}-V_{SD3}(\mathrm{sat})$。因此

$$
V_{ic}\le V_{DD}-V_{SG5}-V_{SD3}(\mathrm{sat})+V_{T1} .
$$

最差情况取最大的 $|V_{T5}|$（M5 上压降最大）和最小的 $V_{T1}$：

$$
V_{ic}(\max)=V_{DD}-|V_{T5}|(\max)-\sqrt{\frac{I_7}{K'_PS_5}}-\sqrt{\frac{I_7}{K'_PS_3}}+V_{T1}(\min) .
$$

### 第 4 步 — 输入共模范围

$$
\mathrm{ICMR}=V_{ic}(\max)-V_{ic}(\min).
$$

上限假设 M3/M4 的栅极偏置本身不会更早地迫使 M3 退出饱和；题目已说明 M3 和 M4 作为饱和的共源共栅器件工作。
