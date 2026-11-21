# Detailed solution - A163

Treat the common-mode feedback (CMFB) as ideal, so that it holds $v_3=v_4=V_{CM}$ whatever the input common mode, and find the input levels at which a device of the signal path M1–M5 leaves saturation. The lower limit comes from the tail M5, the upper limit from M1 (its drain no longer follows a diode load but sits at $V_{CM}$). Then shrink $V_{DD}$ until the range inside $0\ldots V_{DD}$ closes. Take $V_{SS}=0$ and the body effect as neglected.

### Step 1 — Minimum input common-mode voltage

The sources of M1 and M2 sit at $V_{IC}-V_{GS1}$, which is the drain of M5. M5 is saturated while $V_{DS5}\ge V_{DS5}(\mathrm{sat})$. In saturation M1 carries its share of the tail current with $V_{GS1}=V_{T1}+V_{DS1}(\mathrm{sat})$, so

$$
V_{IC}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}=V_{T1}+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat}).
$$

### Step 2 — Maximum input common-mode voltage

M1 stays saturated while $V_{DS1}\ge V_{GS1}-V_{T1}$, i.e. $V_{G1}\le V_{D1}+V_{T1}$. The drain of M1 is the output $v_3$, which the CMFB holds at $V_{CM}$ independently of $V_{IC}$:

$$
V_{IC}(\max)=v_3+V_{T1}=V_{CM}+V_{T1}.
$$

The loads M3, M4 are saturated only if $V_{CM}\le V_{DD}-V_{SD3}(\mathrm{sat})$, so the largest possible value is $V_{DD}-V_{SD3}(\mathrm{sat})+V_{T1}$. Since normally $V_{T1}>V_{SD3}(\mathrm{sat})$, this exceeds $V_{DD}$; restricted to the supply,

$$
V_{IC}(\max)=\min(V_{DD},\,V_{CM}+V_{T1}),
$$

which equals $V_{DD}$ whenever $V_{CM}\ge V_{DD}-V_{T1}$. Unlike a diode- or mirror-load stage, the upper limit is not reduced by a load $V_{SG}$.

### Step 3 — Minimum supply for zero range

Within $0\ldots V_{DD}$ the range is $[V_{IC}(\min),\ V_{IC}(\max)]$. Its width falls to zero when the lower limit meets the highest attainable upper limit, $\min[V_{DD},\ V_{DD}-V_{SD3}(\mathrm{sat})+V_{T1}]$:

$$
V_{T1}+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})=V_{DD}-\max[0,\ V_{SD3}(\mathrm{sat})-V_{T1}],
$$

$$
V_{DD}(\min)=V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})+\max[V_{T1},\ V_{SD3}(\mathrm{sat})].
$$

For the normal case $V_{T1}\ge V_{SD3}(\mathrm{sat})$,

$$
V_{DD}(\min)=V_{T1}+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})\approx V_T+2V_{DS}(\mathrm{sat}).
$$

At this point $V_{IC}=V_{DD}$, and $V_{CM}$ must lie in the window $V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})\le V_{CM}\le V_{DD}-V_{SD3}(\mathrm{sat})$ (M1 saturated at the lowest input, M3 saturated). The window is non-empty exactly when $V_{T1}\ge V_{SD3}(\mathrm{sat})$, which is why the general form contains the max.

### Step 4 — Effect of the CMFB devices

The result above takes "all transistors" as M1–M5 with an ideal CMFB. If the CMFB transistors in the figure are also required to stay saturated (MC1, MC2 with gates at $V_{CM}$ and at the sensed output common mode; MC3, MC4 diode-connected; tail MC5), they add the conditions

$$
V_{CM}\ge V_{TC1}+V_{DSC1}(\mathrm{sat})+V_{DSC5}(\mathrm{sat}),\qquad
V_{CM}\le V_{DD}-|V_{TP}|-V_{SDC3}(\mathrm{sat})+V_{TC1}.
$$

With matched thresholds and equal saturation voltages the smallest usable supply then becomes about $V_T+3V_{DS}(\mathrm{sat})$, and at that supply the in-rail input range is already about $V_{SD3}(\mathrm{sat})$ wide rather than zero. The signal path alone therefore sets the zero-range supply $V_T+2V_{DS}(\mathrm{sat})$ found in Step 3.
