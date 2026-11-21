# 详细步骤 - A163

把共模反馈（common-mode feedback，CMFB）视为理想的，即无论输入共模如何，它都保持 $v_3=v_4=V_{CM}$；求信号通路 M1–M5 中某个器件退出饱和时的输入电平。下限来自尾电流管 M5，上限来自 M1（其漏极不再跟随二极管负载，而是固定在 $V_{CM}$）。然后减小 $V_{DD}$，直到 $0\ldots V_{DD}$ 内的范围闭合。取 $V_{SS}=0$，忽略体效应。

### 第 1 步 — 最小输入共模电压

M1 和 M2 的源极位于 $V_{IC}-V_{GS1}$，即 M5 的漏极。只要 $V_{DS5}\ge V_{DS5}(\mathrm{sat})$，M5 就处于饱和。M1 在饱和区流过其分得的尾电流，$V_{GS1}=V_{T1}+V_{DS1}(\mathrm{sat})$，因此

$$
V_{IC}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}=V_{T1}+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat}).
$$

### 第 2 步 — 最大输入共模电压

只要 $V_{DS1}\ge V_{GS1}-V_{T1}$，即 $V_{G1}\le V_{D1}+V_{T1}$，M1 就保持饱和。M1 的漏极就是输出 $v_3$，共模反馈使其保持在 $V_{CM}$，与 $V_{IC}$ 无关：

$$
V_{IC}(\max)=v_3+V_{T1}=V_{CM}+V_{T1}.
$$

只有 $V_{CM}\le V_{DD}-V_{SD3}(\mathrm{sat})$ 时负载 M3、M4 才饱和，因此其最大可能值为 $V_{DD}-V_{SD3}(\mathrm{sat})+V_{T1}$。通常 $V_{T1}>V_{SD3}(\mathrm{sat})$，该值超过 $V_{DD}$；限制在电源范围内，

$$
V_{IC}(\max)=\min(V_{DD},\,V_{CM}+V_{T1}),
$$

只要 $V_{CM}\ge V_{DD}-V_{T1}$，它就等于 $V_{DD}$。与二极管负载级或电流镜负载级不同，上限不会因负载的 $V_{SG}$ 而降低。

### 第 3 步 — 范围为零时的最小电源电压

在 $0\ldots V_{DD}$ 内，范围为 $[V_{IC}(\min),\ V_{IC}(\max)]$。当下限与可达到的最高上限 $\min[V_{DD},\ V_{DD}-V_{SD3}(\mathrm{sat})+V_{T1}]$ 相遇时，宽度降为零：

$$
V_{T1}+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})=V_{DD}-\max[0,\ V_{SD3}(\mathrm{sat})-V_{T1}],
$$

$$
V_{DD}(\min)=V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})+\max[V_{T1},\ V_{SD3}(\mathrm{sat})].
$$

对通常情形 $V_{T1}\ge V_{SD3}(\mathrm{sat})$，

$$
V_{DD}(\min)=V_{T1}+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})\approx V_T+2V_{DS}(\mathrm{sat}).
$$

此时 $V_{IC}=V_{DD}$，且 $V_{CM}$ 必须位于窗口 $V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})\le V_{CM}\le V_{DD}-V_{SD3}(\mathrm{sat})$ 内（最低输入时 M1 饱和，且 M3 饱和）。该窗口非空的条件正是 $V_{T1}\ge V_{SD3}(\mathrm{sat})$，这就是一般形式中含 max 的原因。

### 第 4 步 — 共模反馈器件的影响

以上结果把“所有晶体管”理解为 M1–M5，并假设共模反馈理想。若还要求图中的共模反馈晶体管保持饱和（MC1、MC2 的栅极分别接 $V_{CM}$ 和检测到的输出共模；MC3、MC4 为二极管连接；尾电流管 MC5），它们增加条件

$$
V_{CM}\ge V_{TC1}+V_{DSC1}(\mathrm{sat})+V_{DSC5}(\mathrm{sat}),\qquad
V_{CM}\le V_{DD}-|V_{TP}|-V_{SDC3}(\mathrm{sat})+V_{TC1}.
$$

若阈值匹配且饱和电压相等，最小可用电源电压约变为 $V_T+3V_{DS}(\mathrm{sat})$，而在该电源下电源轨内的输入范围已约有 $V_{SD3}(\mathrm{sat})$ 宽，并不为零。因此，范围为零的电源电压 $V_T+2V_{DS}(\mathrm{sat})$ 由第 3 步中的信号通路单独决定。
