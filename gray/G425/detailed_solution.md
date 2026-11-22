# Detailed solution - G425

The outputs connect to the drains of the cascodes $M_{1A}$/$M_{2A}$ (above) and $M_{3A}$/$M_{4A}$ (below). With their gate voltages fixed, the cascodes leave saturation when the output comes within one threshold of the gate. First find these limits, then check that the current-source transistors beneath the cascodes are still saturated, so that the cascodes, not they, set the swing.

### Step 1 — Overdrive voltages

From $|V_{ov}|=\sqrt{2|I_D|/[k'(W/L)]}$ with $W/L=133.3m$:

| Device | $m$ | $\lvert I_D\rvert$ | $k'$ | $\lvert V_{ov}\rvert$ |
|---|---|---|---|---|
| $M_{1A}$, $M_{2A}$ (PMOS) | 24 | 2.4 mA | 45 μA/V² | 0.183 V |
| $M_{11}$, $M_{12}$ (PMOS) | 44 | 4.4 mA | 45 μA/V² | 0.183 V |
| $M_3$, $M_{3A}$, $M_4$, $M_{4A}$ (NMOS) | 12 | 2.4 mA | 170 μA/V² | 0.133 V |

### Step 2 — Upper limit set by $M_{1A}$

A PMOS stays saturated while $V_{SD}\ge|V_{ov}|$, i.e. while its drain is no higher than one $|V_t|$ above its gate. With the gate of $M_{1A}$ at $V_{BiasC}$:

$$
V_{o(\max)}=V_{BiasC}+|V_{t1A}|=1.0\ \mathrm V+0.3\ \mathrm V=1.30\ \mathrm V.
$$

### Step 3 — Lower limit set by $M_{3A}$

An NMOS stays saturated while its drain is no lower than one $V_t$ below its gate. With the gate of $M_{3A}$ at $V_{BiasD}$:

$$
V_{o(\min)}=V_{BiasD}-V_{t3A}=0.96\ \mathrm V-0.3\ \mathrm V=0.66\ \mathrm V.
$$

### Step 4 — Current sources below the cascodes remain saturated

The source of each cascode is one $|V_{GS}|$ from its gate:

$$
\begin{aligned}
V_{S1A}&=V_{BiasC}+|V_{t1A}|+|V_{ov1A}|=1.0+0.3+0.183=1.48\ \mathrm V
&&\Rightarrow V_{SD11}=2-1.48=0.52\ \mathrm V>|V_{ov11}|=0.18\ \mathrm V,\\
V_{S3A}&=V_{BiasD}-V_{t3A}-V_{ov3A}=0.96-0.3-0.133=0.53\ \mathrm V
&&\Rightarrow V_{DS3}=0.53\ \mathrm V>V_{ov3}=0.13\ \mathrm V.
\end{aligned}
$$

Both current sources keep ample margin, so the limits of Steps 2 and 3 are those of the outputs.

### Step 5 — Result

Each of $V_{o1}$, $V_{o2}$ can swing from 0.66 V to 1.30 V: 0.64 V peak to peak per output, or 1.28 V peak to peak differentially. With the original 0.5-V cascode thresholds the same bias voltages give 0.46 V to 1.50 V. The bias voltages were designed for 0.5-V thresholds; lowering the cascode thresholds moves the cascode sources away from the supply rails, giving the current sources unnecessary headroom while raising the minimum and lowering the maximum output, so the swing shrinks.
