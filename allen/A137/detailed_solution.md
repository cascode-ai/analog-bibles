# Detailed solution - A137

Apply the same voltage $V_{IC}$ to both gates, so the stage is balanced and every device carries a known current: $I_{DD}$ in M5 and $I_{DD}/2$ in each of M1–M4. Raising $V_{IC}$ pushes the common source node up toward $V_{DD}$ until the tail source M5 leaves saturation; lowering it brings the gates down toward the drains of M1, M2, which are held up by the mirror, until the input devices leave saturation. Each limit is a KVL path written with the square-law voltages.

### Step 1 — Voltages of the devices

In saturation $V_{OV}=\sqrt{2I_D/[K'(W/L)]}$. With M5 at $I_{DD}$ and M1, M3 at $I_{DD}/2$:

$$
V_{SD5}(\mathrm{sat})=\sqrt{\frac{2I_{DD}}{K'_P(W_5/L_5)}},\qquad
V_{SG1}=|V_{T1}|+\sqrt{\frac{I_{DD}}{K'_P(W_1/L_1)}},\qquad
V_{GS3}=V_{T3}+\sqrt{\frac{I_{DD}}{K'_N(W_3/L_3)}} .
$$

### Step 2 — Maximum input common-mode voltage

The common source node of M1 and M2 sits one $V_{SG1}$ above the gates: $V_{S1}=V_{IC}+V_{SG1}$. M5 (source at $V_{DD}$, drain at $V_{S1}$) stays saturated while $V_{DD}-V_{S1}\ge V_{SD5}(\mathrm{sat})$. Substituting,

$$
V_{IC}(\max)=V_{DD}-V_{SD5}(\mathrm{sat})-V_{SG1}
=V_{DD}-\sqrt{\frac{2I_{DD}}{K'_P(W_5/L_5)}}-|V_{T1}|-\sqrt{\frac{I_{DD}}{K'_P(W_1/L_1)}} .
$$

### Step 3 — Minimum input common-mode voltage

The drain of M1 is held by the diode-connected M3 at $V_{D1}=V_{SS}+V_{GS3}$, independent of $V_{IC}$. M1 stays saturated while $V_{SD1}\ge V_{SG1}-|V_{T1}|$; since $V_{SD1}-V_{SG1}=V_{G1}-V_{D1}$, this is $V_{G1}\ge V_{D1}-|V_{T1}|$:

$$
V_{IC}(\min)=V_{SS}+V_{GS3}-|V_{T1}|
=V_{SS}+V_{T3}+\sqrt{\frac{I_{DD}}{K'_N(W_3/L_3)}}-|V_{T1}| .
$$

In balance the output sits at the same voltage as the mirror node, so the M2/M4 side gives the same limit.

### Step 4 — Interpretation

The upper limit is set by the tail source plus the input device's source–gate voltage; the lower limit by the load's gate–source voltage minus the input threshold. Because $|V_{T1}|$ is subtracted, $V_{IC}(\min)$ can be close to or even below $V_{SS}$: a p-channel input pair accepts common-mode inputs near the negative rail. The body effect of M1 and M2 is neglected here; with their bulks at $V_{DD}$, $|V_{T1}|$ would increase with the source–bulk voltage $V_{DD}-V_{S1}$.
