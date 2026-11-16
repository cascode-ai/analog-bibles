# Detailed solution - R668

**Approach.** Chain three requirements. (1) Constant dynamic range with $kT/C$ noise forces $C \to 4C$. (2) A constant time constant $C/G_m$ then forces $G_m \to 4G_m$. (3) With the square-law model and the overdrive halved, the relations $g_m = 2I_D/V_{ov}$ and $g_m = \mu C_{ox}(W/L)V_{ov}$ give the required drain current and aspect ratio of the input pair.

### Step 1 — Capacitor scaling (from the noise requirement)

The dynamic range is the maximum signal divided by the rms noise. The swing is halved, so the rms noise must be halved too, i.e. the mean-square noise must drop by 4. For $kT/C$ noise ($k$: Boltzmann's constant, $T$: absolute temperature)

$$\overline{v_n^2} = \frac{kT}{C} \quad\Rightarrow\quad \frac{kT}{C'} = \frac14\cdot\frac{kT}{C} \quad\Rightarrow\quad C' = 4C .$$

All capacitors are multiplied by 4, which keeps their ratios (and the closed-loop gain) unchanged.

### Step 2 — Transconductance scaling (from the time constant)

The small-signal time constant is $\tau \propto C/G_m$. Keeping it the same with $C' = 4C$:

$$\frac{4C}{G_m'} = \frac{C}{G_m} \quad\Rightarrow\quad G_m' = 4G_m .$$

For a one-stage op amp, $G_m$ is the transconductance $g_{m1}$ of each input transistor ($M_1$, $M_2$), so

$$g_{m1}' = 4g_{m1}.$$

### Step 3 — Square-law relations for the input transistors

Each input transistor carries half the tail current, $I_D = I_{SS}/2$. With the overdrive voltage $V_{ov} = V_{GS} - V_{TH}$, the square-law model gives

$$I_D = \frac12\,\mu C_{ox}\,\frac{W}{L}\,V_{ov}^2,$$

and two equivalent forms of the transconductance:

$$g_m = \mu C_{ox}\,\frac{W}{L}\,V_{ov} \qquad\text{and}\qquad g_m = \frac{2I_D}{V_{ov}} .$$

(The second follows from the first by substituting $\mu C_{ox}(W/L) = 2I_D/V_{ov}^2$ from the current equation.)

Given: $V_{ov}' = V_{ov}/2$, same $\mu C_{ox}$, same $L$.

### Step 4 — Drain current and tail current

Solve $g_m = 2I_D/V_{ov}$ for the current:

$$I_D = \frac{g_mV_{ov}}{2}.$$

Apply the scaling factors ($g_m \times4$, $V_{ov} \times\tfrac12$):

$$I_D' = \frac{(4g_m)(V_{ov}/2)}{2} = 2\cdot\frac{g_mV_{ov}}{2} = 2I_D .$$

The tail current is twice the drain current, so

$$I_{SS}' = 2I_{SS}.$$

**Intuition.** At a smaller overdrive, a transistor produces more $g_m$ per unit current ($g_m/I_D = 2/V_{ov}$ doubles). So a 4× larger $g_m$ needs only 2× the current.

### Step 5 — Aspect ratio

Solve $g_m = \mu C_{ox}(W/L)V_{ov}$ for the aspect ratio:

$$\frac{W}{L} = \frac{g_m}{\mu C_{ox}V_{ov}} .$$

Apply the scaling factors:

$$\left(\frac{W}{L}\right)' = \frac{4g_m}{\mu C_{ox}(V_{ov}/2)} = 8\cdot\frac{g_m}{\mu C_{ox}V_{ov}} = 8\,\frac{W}{L}.$$

With $L$ fixed, the width grows by 8: $W' = 8W$.

**Consistency check** with the current equation:

$$I_D' = \frac12\,\mu C_{ox}\left(8\,\frac{W}{L}\right)\left(\frac{V_{ov}}{2}\right)^2 = 8\cdot\frac14\cdot\frac12\,\mu C_{ox}\,\frac{W}{L}\,V_{ov}^2 = 2I_D .\ \checkmark$$

### Step 6 — Power and side effects

The power drawn by the pair is

$$P' = V_{DD}'\,I_{SS}' = \frac{V_{DD}}{2}\cdot2I_{SS} = V_{DD}I_{SS} = P .$$

The power stays the same: the halved supply is exactly offset by the doubled current.

**Numerical illustration.** Suppose originally $I_{SS} = 1$ mA (0.5 mA per device) and $V_{ov} = 0.2$ V, so $g_{m1} = 2(0.5\ \mathrm{mA})/(0.2\ \mathrm{V}) = 5$ mS. After scaling: $V_{ov} = 0.1$ V and $I_{SS} = 2$ mA (1 mA per device), so $g_{m1} = 2(1\ \mathrm{mA})/(0.1\ \mathrm{V}) = 20$ mS, four times larger, as required.

**Side effect.** The input devices are now 8 times wider at the same length, so their gate capacitance ($\approx \tfrac23WLC_{ox}$) is about 8 times larger, while the circuit's other capacitors grew only 4 times. This extra input capacitance slightly reduces the feedback factor and loads the circuit.

### Result

- Tail current: $I_{SS} \to 2I_{SS}$ (each device carries twice the current).
- Dimensions: $W/L \to 8\,W/L$, i.e. $W \to 8W$ at the same $L$.
- Power: $V_{DD}I_{SS} \to (V_{DD}/2)(2I_{SS})$, unchanged.

These follow from $C \times4$ (halved $kT/C$ noise), $G_m \times4$ (same $C/G_m$), and the halved overdrive in $g_m = 2I_D/V_{ov} = \mu C_{ox}(W/L)V_{ov}$.

**Common mistake.** Scaling both the tail current and $W/L$ by 4 (the same factor as $g_m$). That would be right only if the overdrive stayed the same; with $V_{ov}$ halved, $g_m = 2I_D/V_{ov}$ shows that the current needs to rise only by 2, and $g_m = \mu C_{ox}(W/L)V_{ov}$ shows that $W/L$ must rise by 8.

**Common mistake.** Reducing the current or width along with the supply, or taking $G_m$ as unchanged. The capacitors must grow by 4 to meet the noise target, so $G_m$ must grow by 4 to keep the speed; the input pair therefore gets bigger, not smaller.
