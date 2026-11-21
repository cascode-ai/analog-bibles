# Detailed solution - G161

With a pure common-mode input both input transistors carry half the tail current, so their gate-source voltage is fixed at $V_{t1}+V_{ov1}$. Raising or lowering $V_{IC}$ moves the common-source node with it. Each end of the range is where one first-stage device leaves the active region: at the low end the tail source $M_5$ runs out of drain-source voltage; at the high end the input transistors enter triode against their drains, which the p-channel mirror holds one $|V_{GS}|$ below $V_{DD}$.

### Step 1 — Lower limit: tail source $M_5$

The common-source node of $M_1$ and $M_2$ is at $V_{IC}-V_{GS1}=V_{IC}-V_{t1}-V_{ov1}$. $M_5$, with its source at $-V_{SS}$, stays in the active region while $V_{DS5}\ge V_{ov5}$:

$$
V_{IC}-V_{t1}-V_{ov1}-(-V_{SS})\ge V_{ov5}\ \Rightarrow\ V_{IC}\ge-V_{SS}+V_{t1}+V_{ov1}+V_{ov5}.
$$

### Step 2 — Upper limit: input pair against the mirror

The drain of $M_1$ is the diode node of $M_3$, at $V_{DD}-|V_{GS3}|=V_{DD}-|V_{t3}|-|V_{ov3}|$, independent of $V_{IC}$. An n-channel device is saturated while $V_{GD}\le V_t$, so for $M_1$

$$
V_{IC}-\left(V_{DD}-|V_{t3}|-|V_{ov3}|\right)\le V_{t1}\ \Rightarrow\ V_{IC}\le V_{DD}-|V_{t3}|-|V_{ov3}|+V_{t1}.
$$

The drain of $M_2$ is the gate of $M_6$, at $V_{DD}-|V_{GS6}|$, giving the companion condition $V_{IC}\le V_{DD}-|V_{GS6}|+V_{t2}$. In general the upper limit is the smaller of the two; when the op amp is designed for zero systematic offset, $(W/L)_6/(W/L)_4=2(W/L)_7/(W/L)_5$, the equal current densities make $|V_{GS6}|=|V_{GS3}|$, and the two coincide.

### Step 3 — Common-mode input range

$$
-V_{SS}+V_{t1}+V_{ov1}+V_{ov5}\le V_{IC}\le V_{DD}-|V_{t3}|-|V_{ov3}|+V_{t1}.
$$

Compared with the original p-input op amp, the range is shifted toward the positive supply. Body effect helps at the top: the bodies of $M_1$, $M_2$ are at $-V_{SS}$, so as $V_{IC}$ rises their source-body voltage and $V_{t1}$ increase, raising the upper limit (it may even reach $V_{DD}$). At the low end the source-body voltage is small, so $V_{t1}$ there is close to its zero-bias value.
