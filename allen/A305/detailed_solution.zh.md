# 详细步骤 - A305

两个增强放大器结构相同：差分对一个栅极固定、一个漏极直接接电源，剩下的漏极电流经共源共栅管 M5 折叠到以电流源 M6 为负载的高阻输出端。求出信号电流，追踪它经过折叠节点，再乘以输出电阻；然后与估计式 $-0.5g_{m1}r_{ds6}$ 比较。所有器件都饱和，小信号参数为 $g_m$、$r_{ds}$；忽略体效应。

### 第 1 步 — 输入对管的信号电流

M2 的栅极固定，M1 的栅极加信号 $v_{in}$，公共源极节点约移动 $v_{in}/2$（跨导匹配，尾电阻 $r_{ds3}$ 很大），因此

$$
i_{d1}=\frac{g_{m1}v_{in}}2 .
$$

计入尾电流管电导的一阶修正，精确值为 $g_{m1}v_{in}/[2+1/(g_mr_{ds3})]$。

只用到 M1 这一半电流，因为 M2 的漏极接电源；这就是系数 0.5 的来源。

### 第 2 步 — 折叠节点与输出电阻

折叠节点（M1 和 M4 的漏极、M5 的源极）为低阻，约 $1/g_{m5}$，因此 $i_{d1}$ 几乎全部取自 M5 支路；M4 的电流固定，所以 M5 送到输出的电流变化 $-i_{d1}$。输出节点看到 M6 与叠在 $r_{ds1}\parallel r_{ds4}$ 上的共源共栅管 M5 并联：

$$
R_{out}=r_{ds6}\parallel\left[g_{m5}r_{ds5}(r_{ds1}\parallel r_{ds4})\right],\qquad
A_v=-\frac{i_{d1}R_{out}}{v_{in}}=-\frac12g_{m1}\left[r_{ds6}\parallel g_{m5}r_{ds5}(r_{ds1}\parallel r_{ds4})\right].
$$

增益为反相：$v_{in}$ 升高使 M1 电流增大，从 M5 中分走电流，输出下降。当共源共栅电阻远大于 $r_{ds6}$ 时，$A_v\approx-0.5g_{m1}r_{ds6}$。

### 第 3 步 — 上方放大器（[图 1]）

M1 和 M6 为 n 沟道，M5 为 p 沟道，因此

$$
A_v(\mathrm{upper})=-0.5g_{mN}\left[r_{dsN}\parallel g_{mP}r_{dsP}(r_{dsN}\parallel r_{dsP})\right]\approx-0.5g_{mN}r_{dsN}
$$

条件是 $g_{mP}r_{dsP}(r_{dsN}\parallel r_{dsP})\gg r_{dsN}$。例如取 $g_{mN}=100\ \mu$S，$r_{dsN}=2$ MΩ，$g_{mP}=50\ \mu$S，$r_{dsP}=1$ MΩ，共源共栅项为 33 MΩ ≫ 2 MΩ，$A_v=-94$，估计值 −100（偏高 6 %）。

### 第 4 步 — 下方放大器（[图 2]）

M1 和 M6 为 p 沟道，M5 为 n 沟道，因此

$$
A_v(\mathrm{lower})=-0.5g_{mP}\left[r_{dsP}\parallel g_{mN}r_{dsN}(r_{dsN}\parallel r_{dsP})\right]\approx-0.5g_{mP}r_{dsP} .
$$

取相同的示例数值，共源共栅项为 133 MΩ，$A_v=-24.8$，估计值 −25。因此两个估计式都是有效的近似，只略微偏乐观，偏差为 $r_{ds6}$ 与共源共栅电阻之比。
