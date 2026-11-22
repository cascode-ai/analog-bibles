# Detailed solution - A148

For the p-channel input stage the upper common-mode limit is set by the tail source M5 plus the source–gate voltage of the input device, and the lower limit by the gate–source voltage of the n-channel diode load minus the input threshold. The worst-case range takes each limit at its own unfavourable corner: the lowest possible $V_{IC}(\max)$ and the highest possible $V_{IC}(\min)$. At balance M1–M4 each carry $I_{SS}/2=50$ µA.

### Step 1 — Limit expressions

The common source node is $V_{IC}+V_{SG1}$ and must stay $V_{SD5}(\mathrm{sat})$ below $V_{DD}$; M1's drain is held at $V_{SS}+V_{GS3}$ by the diode-connected M3, and M1 stays saturated while its gate is no more than $|V_{TP1}|$ below its drain:

$$
V_{IC}(\max)=V_{DD}-V_{SD5}(\mathrm{sat})-V_{SG1},\qquad
V_{IC}(\min)=V_{SS}+V_{GS3}-|V_{TP1}|,
$$

$$
V_{SG1}=|V_{TP}|+\sqrt{\frac{2(50\ \mu\mathrm A)}{K'_P(5)}},\qquad
V_{GS3}=V_{TN}+\sqrt{\frac{2(50\ \mu\mathrm A)}{K'_N(1)}} .
$$

### Step 2 — Worst-case maximum

$V_{IC}(\max)$ is lowest for the lowest supply and the largest $V_{SG1}$: $V_{DD}=4$ V, $|V_{TP}|=0.85$ V and $K'_P=45\ \mu\mathrm{A/V^2}$:

$$
V_{SG1}=0.85+\sqrt{\frac{100\ \mu\mathrm A}{(45\ \mu\mathrm{A/V^2})(5)}}=0.85+0.667\ \mathrm V=1.517\ \mathrm V,
$$

$$
V_{IC}(\max)=4-0.2-1.517\ \mathrm V=2.283\ \mathrm V .
$$

### Step 3 — Worst-case minimum

$V_{IC}(\min)$ is highest for the largest $V_{GS3}$ and the smallest input threshold: $V_{TN}=0.85$ V, $K'_N=99\ \mu\mathrm{A/V^2}$ and $|V_{TP1}|=0.55$ V:

$$
V_{GS3}=0.85+\sqrt{\frac{100\ \mu\mathrm A}{99\ \mu\mathrm{A/V^2}}}=0.85+1.005\ \mathrm V=1.855\ \mathrm V,
\qquad
V_{IC}(\min)=1.855-0.55\ \mathrm V=1.305\ \mathrm V .
$$

The p-channel threshold appears at opposite extremes in the two limits; each limit is evaluated at its own worst corner, which gives a guaranteed range.

### Step 4 — Worst-case range

$$
\mathrm{ICMR}_{\mathrm{worst}}=V_{IC}(\max)-V_{IC}(\min)=2.283-1.305\ \mathrm V=0.98\ \mathrm V,
$$

i.e. $1.31\ \mathrm V\le V_{IC}\le2.28$ V is guaranteed over the supply and process spread. For comparison, nominal parameters at $V_{DD}=5$ V give $V_{IC}(\max)=3.47$ V and $V_{IC}(\min)=0.95$ V, a range of 2.5 V: the worst-case corners and the 4 V supply remove more than half of it.
