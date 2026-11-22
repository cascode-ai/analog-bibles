# 详细步骤 - A148

对 p 沟道输入级，共模上限由尾电流源 M5 加上输入管的源栅电压决定，下限由 n 沟道二极管负载的栅源电压减去输入管阈值决定。最坏情况范围让每个极限各取其不利的工艺角：最低的 $V_{IC}(\max)$ 和最高的 $V_{IC}(\min)$。平衡时 M1–M4 各流过 $I_{SS}/2=50$ µA。

### 第 1 步 — 极限表达式

公共源极电位为 $V_{IC}+V_{SG1}$，必须比 $V_{DD}$ 低至少 $V_{SD5}(\mathrm{sat})$；M1 的漏极由二极管连接的 M3 固定在 $V_{SS}+V_{GS3}$，只要 M1 的栅极比漏极低不超过 $|V_{TP1}|$，M1 就保持饱和：

$$
V_{IC}(\max)=V_{DD}-V_{SD5}(\mathrm{sat})-V_{SG1},\qquad
V_{IC}(\min)=V_{SS}+V_{GS3}-|V_{TP1}|,
$$

$$
V_{SG1}=|V_{TP}|+\sqrt{\frac{2(50\ \mu\mathrm A)}{K'_P(5)}},\qquad
V_{GS3}=V_{TN}+\sqrt{\frac{2(50\ \mu\mathrm A)}{K'_N(1)}} .
$$

### 第 2 步 — 最坏情况的最大值

电源最低且 $V_{SG1}$ 最大时 $V_{IC}(\max)$ 最低：$V_{DD}=4$ V，$|V_{TP}|=0.85$ V，$K'_P=45\ \mu\mathrm{A/V^2}$：

$$
V_{SG1}=0.85+\sqrt{\frac{100\ \mu\mathrm A}{(45\ \mu\mathrm{A/V^2})(5)}}=0.85+0.667\ \mathrm V=1.517\ \mathrm V,
$$

$$
V_{IC}(\max)=4-0.2-1.517\ \mathrm V=2.283\ \mathrm V .
$$

### 第 3 步 — 最坏情况的最小值

$V_{GS3}$ 最大且输入管阈值最小时 $V_{IC}(\min)$ 最高：$V_{TN}=0.85$ V，$K'_N=99\ \mu\mathrm{A/V^2}$，$|V_{TP1}|=0.55$ V：

$$
V_{GS3}=0.85+\sqrt{\frac{100\ \mu\mathrm A}{99\ \mu\mathrm{A/V^2}}}=0.85+1.005\ \mathrm V=1.855\ \mathrm V,
\qquad
V_{IC}(\min)=1.855-0.55\ \mathrm V=1.305\ \mathrm V .
$$

p 沟道阈值在两个极限中取相反的极值；每个极限都在各自的最坏工艺角下计算，这样得到的范围是有保证的。

### 第 4 步 — 最坏情况范围

$$
\mathrm{ICMR}_{\mathrm{worst}}=V_{IC}(\max)-V_{IC}(\min)=2.283-1.305\ \mathrm V=0.98\ \mathrm V,
$$

即在电源和工艺偏差范围内保证 $1.31\ \mathrm V\le V_{IC}\le2.28$ V。作为比较，标称参数、$V_{DD}=5$ V 时 $V_{IC}(\max)=3.47$ V，$V_{IC}(\min)=0.95$ V，范围为 2.5 V：最坏工艺角和 4 V 电源使其缩小了一半以上。
