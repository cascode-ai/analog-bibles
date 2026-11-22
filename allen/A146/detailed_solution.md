# Detailed solution - A146

With both gates at the same voltage the stage is balanced: M5 carries $I_{SS}$ and each of M1–M4 carries $I_{SS}/2$. The upper limit is reached when M1 leaves saturation against its drain, which the diode-connected load M3 holds one $V_{SG3}$ below $V_{DD}$. The lower limit is reached when the common source node falls to $V_{DS5}(\mathrm{sat})$ and the tail device leaves saturation. Each limit follows from a KVL path with square-law voltages.

### Step 1 — Device voltages

With $\beta_i=K'_i(W/L)_i$ and $V_{OV}=\sqrt{2I_D/\beta}$:

$$
V_{SG3}=|V_{T3}|+\sqrt{\frac{I_{SS}}{K'_P(W/L)_3}},\qquad
V_{GS1}=V_{T1}+\sqrt{\frac{I_{SS}}{K'_N(W/L)_1}},\qquad
V_{DS5}(\mathrm{sat})=\sqrt{\frac{2I_{SS}}{K'_N(W/L)_5}} .
$$

The factor 2 is absent in the first two because M3 and M1 carry $I_{SS}/2$; M5 carries the full $I_{SS}$.

### Step 2 — Maximum input

M3 is diode-connected with its source at $V_{DD}$, so M1's drain sits at $V_{D1}=V_{DD}-V_{SG3}$. M1 stays saturated while $V_{DS1}\ge V_{GS1}-V_{T1}$, i.e. $V_{G1}\le V_{D1}+V_{T1}$:

$$
v_{G1}(\max)=V_{DD}-V_{SG3}+V_{T1}=V_{DD}-|V_{T3}|-\sqrt{\frac{I_{SS}}{K'_P(W/L)_3}}+V_{T1} .
$$

Both halves have identical diode loads, so the M2 path gives the same limit.

### Step 3 — Minimum input

The common source node is $V_{G1}-V_{GS1}$, and M5 (source at ground) needs $V_{DS5}\ge V_{DS5}(\mathrm{sat})$:

$$
v_{G1}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=\sqrt{\frac{2I_{SS}}{K'_N(W/L)_5}}+V_{T1}+\sqrt{\frac{I_{SS}}{K'_N(W/L)_1}} .
$$

The input common-mode range is the interval between these limits. Increasing $(W/L)_3$ raises the upper limit by shrinking the load's overdrive, and increasing $(W/L)_1$ or $(W/L)_5$ lowers the lower limit.
