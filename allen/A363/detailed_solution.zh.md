# 详细步骤 - A363

每个开启电压都是使该级尾电流管恰好处于饱和边缘的共模电平。n 沟道级的输入栅极比尾节点高 $V_{GS}$，所以它在低 $V_{icm}$ 时关断；p 沟道级的输入栅极比其尾节点低 $V_{SG}$，所以它在高 $V_{icm}$ 时关断。由饱和电压和阈值计算两者。

### 第 1 步 — 饱和电压

用 $V_{ON}=\sqrt{2I_D/[K'(W/L)]}$，$W/L=10$，每个尾电流管 100 µA，每个输入管 50 µA：

$$
V_{DSN5}(\mathrm{sat})=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.426\ \mathrm V,\qquad
V_{ON,N1}=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.302\ \mathrm V,
$$
$$
V_{SDP5}(\mathrm{sat})=\sqrt{\frac{2(100\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(10)}}=0.632\ \mathrm V,\qquad
V_{ON,P1}=\sqrt{\frac{2(50\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(10)}}=0.447\ \mathrm V .
$$

### 第 2 步 — n 沟道开启电压

只要 MN5 的漏极（即 MN1/MN2 的公共源极）比地高至少 $V_{DSN5}(\mathrm{sat})$，MN5 就保持饱和。栅极再高一个 $V_{GSN1}=V_{TN}+V_{ON,N1}$：

$$
V_{onn}=V_{DSN5}(\mathrm{sat})+V_{TN}+V_{ON,N1}=0.426+0.7+0.302=1.43\ \mathrm V .
$$

共模电平低于此值时，n 沟道级不能使 MN1、MN2 和 MN5 都保持饱和。

### 第 3 步 — p 沟道开启电压

只要 MP1/MP2 的公共源极比 $V_{DD}$ 低至少 $V_{SDP5}(\mathrm{sat})$，MP5 就保持饱和；栅极再低一个 $V_{SGP1}=|V_{TP}|+V_{ON,P1}$：

$$
V_{onp}=V_{DD}-V_{SDP5}(\mathrm{sat})-|V_{TP}|-V_{ON,P1}=V_{DD}-0.632-0.7-0.447=V_{DD}-1.78\ \mathrm V .
$$

高于此电平时 p 沟道级关断。例如 $V_{DD}=2.5$ V 时 $V_{onp}=0.72$ V。

### 第 4 步 — 重叠区或死区

只有当 $V_{onp}\ge V_{onn}$ 时两级合起来才能覆盖整个范围，即

$$
V_{DD}\ge V_{onn}+1.78\ \mathrm V=3.21\ \mathrm V .
$$

$V_{DD}>3.21$ V 时，两级在 $V_{onn}$ 与 $V_{onp}$ 之间都导通。$V_{DD}<3.21$ V 时出现死区（dead zone）$V_{onp}<V_{icm}<V_{onn}$，其中两级都不能完全导通；$V_{DD}=2.5$ V 时死区从 0.72 V 延伸到 1.43 V。
