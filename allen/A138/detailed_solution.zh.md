# 详细步骤 - A138

在两个栅极上加相同的电压 $v_{IC}$，电路平衡：尾电流管 M5 流过 $I_{SS}=10$ µA，M1–M4 各流过 $I_{SS}/2=5$ µA。当输入管相对于其漏极退出饱和时达到上限，而 p 沟道电流镜把这些漏极固定在比 $V_{DD}$ 低一个 $V_{SG3}$ 处；当尾电流管 M5 的漏源电压不足时达到下限。

### 第 1 步 — 各器件电压

所有器件 $W/L=10$，$V_{OV}=\sqrt{2I_D/[K'(W/L)]}$：

$$
V_{SG3}=0.7+\sqrt{\frac{2(5\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(10)}}=0.7+0.141\ \mathrm V=0.841\ \mathrm V,
$$

$$
V_{DS5}(\mathrm{sat})=\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.135\ \mathrm V,\qquad
V_{GS1}=0.7+\sqrt{\frac{2(5\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.7+0.095\ \mathrm V=0.795\ \mathrm V .
$$

### 第 2 步 — 最大输入共模电压

M1 的漏极电位为 $V_{DD}-V_{SG3}$，由二极管连接的 M3 固定。M1 保持饱和的条件是 $V_{DS1}\ge V_{GS1}-V_{TN}$，即 $V_{G1}\le V_{D1}+V_{TN}$：

$$
v_{IC}(\max)=V_{DD}-V_{SG3}+V_{TN1}=V_{DD}-0.841+0.7\ \mathrm V=V_{DD}-0.141\ \mathrm V,
$$

$V_{DD}=5$ V 时为 4.86 V。平衡时 M2/M4 一侧的漏极电压相同，给出相同的极限；稍有不平衡时输出移动，只会放宽 M2 的条件，所以由 M1/M3 路径决定该极限。

### 第 3 步 — 最小输入共模电压

公共源极比栅极低一个 $V_{GS1}$，而 M5（源极接地）至少需要 $V_{DS5}(\mathrm{sat})$：

$$
v_{IC}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}=0+0.135+0.795\ \mathrm V=0.930\ \mathrm V .
$$

### 第 4 步 — 输入共模范围

$V_{DD}=5$ V 时：

$$
0.93\ \mathrm V\le v_{IC}\le4.86\ \mathrm V,\qquad \mathrm{ICMR}=4.86-0.93\ \mathrm V=3.93\ \mathrm V .
$$

上限比 $V_{DD}-V_{SG3}$ 高 $V_{TN}$，因为 n 沟道器件的栅极可以比漏极高出一个阈值而仍保持饱和。
