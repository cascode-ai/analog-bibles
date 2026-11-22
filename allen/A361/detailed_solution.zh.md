# 详细步骤 - A361

电路和电流与增强型输入级相同，只是 M1/M2 的阈值变为 0.1 V。写出 ICMR 的两个极限，求出二者相遇时的电源电压，并检查相遇点是否位于电源轨之内。

### 第 1 步 — 饱和电压

用 $V_{DS}(\mathrm{sat})=\sqrt{2I_D/[K'(W/L)]}$，$W/L=100$，M5 中为 100 µA，其余为 50 µA：

$$
V_{DS5}(\mathrm{sat})=0.135\ \mathrm V,\qquad V_{DS1}(\mathrm{sat})=0.095\ \mathrm V,\qquad V_{SD3}(\mathrm{sat})=0.141\ \mathrm V .
$$

### 第 2 步 — 输入共模范围的极限

下限（M5 处于饱和边缘，输入栅极比公共源极高一个 $V_{GS1}$）：

$$
v_{icm}\ge V_{DS5}(\mathrm{sat})+V_{T1}+V_{DS1}(\mathrm{sat})=0.135+0.1+0.095=0.330\ \mathrm V .
$$

上限（M3 处于饱和边缘，M1 处于 $V_{D1}=v_{icm}-V_{T1}$）：

$$
v_{icm}\le V_{DD}-V_{SD3}(\mathrm{sat})+V_{T1}=V_{DD}-0.041\ \mathrm V .
$$

### 第 3 步 — 最低电源电压与电源轨检查

两个极限相遇时范围宽度为零：

$$
V_{DD}-0.041\ \mathrm V=0.330\ \mathrm V\quad\Rightarrow\quad
V_{DD}(\min)=V_{SD3}(\mathrm{sat})+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})=0.372\ \mathrm V .
$$

唯一的共模点 $v_{icm}=0.330$ V 位于 $[0,\ 0.372]$ V 之内，满足电源轨条件，所以 $V_{DD}(\min)\approx0.37$ V。

与 0.7 V 的输入管（约 0.93 V）相比，低阈值使 ICMR 下移到电源范围的中部，因此该级能在绝对最低的电源电压下工作，即三个饱和电压之和。体效应会使两个极限中的 $V_{T1}$ 同等增大，不改变这一结果。
