# Detailed solution - R668

**Approach.** Chain three requirements: constant dynamic range with $kT/C$ noise forces $C \to 4C$; a constant time constant $C/G_m$ then forces $G_m \to 4G_m$; and with the overdrive halved, $g_m = 2I_D/V_{ov}$ and $g_m = \mu C_{ox}(W/L)V_{ov}$ give the drain current and aspect ratio of the input pair.

### Step 1 — Capacitor scaling (from the noise requirement)

The swing is halved, so the rms noise must be halved and the mean-square noise must drop by 4. With $\overline{v_n^2} = kT/C$:

$$\frac{kT}{C'} = \frac14\cdot\frac{kT}{C} \quad\Rightarrow\quad C' = 4C .$$

All capacitors are multiplied by 4, which keeps their ratios (and the closed-loop gain) unchanged.

### Step 2 — Transconductance scaling (from the time constant)

Keeping $\tau \propto C/G_m$ with $C' = 4C$:

$$\frac{4C}{G_m'} = \frac{C}{G_m} \quad\Rightarrow\quad G_m' = 4G_m .$$

For a one-stage op amp, $G_m$ is the transconductance $g_{m1}$ of each input transistor ($M_1$, $M_2$), so

$$g_{m1}' = 4g_{m1}.$$

### Step 3 — Square-law relations for the input transistors

Each input transistor carries $I_D = I_{SS}/2$, with

$$I_D = \frac12\,\mu C_{ox}\,\frac{W}{L}\,V_{ov}^2, \qquad g_m = \mu C_{ox}\,\frac{W}{L}\,V_{ov} = \frac{2I_D}{V_{ov}} .$$

Given: $V_{ov}' = V_{ov}/2$, same $\mu C_{ox}$, same $L$.

### Step 4 — Drain current and tail current

From $g_m = 2I_D/V_{ov}$, $I_D = g_mV_{ov}/2$; with $g_m \times4$ and $V_{ov} \times\tfrac12$:

$$I_D' = \frac{(4g_m)(V_{ov}/2)}{2} = 2\cdot\frac{g_mV_{ov}}{2} = 2I_D ,$$

so the tail current doubles:

$$I_{SS}' = 2I_{SS}.$$

At the smaller overdrive, $g_m/I_D = 2/V_{ov}$ doubles, so a 4× larger $g_m$ needs only 2× the current.

### Step 5 — Aspect ratio

From $g_m = \mu C_{ox}(W/L)V_{ov}$:

$$\left(\frac{W}{L}\right)' = \frac{4g_m}{\mu C_{ox}(V_{ov}/2)} = 8\cdot\frac{g_m}{\mu C_{ox}V_{ov}} = 8\,\frac{W}{L}.$$

With $L$ fixed, $W' = 8W$. Check with the current equation:

$$I_D' = \frac12\,\mu C_{ox}\left(8\,\frac{W}{L}\right)\left(\frac{V_{ov}}{2}\right)^2 = 8\cdot\frac14\cdot\frac12\,\mu C_{ox}\,\frac{W}{L}\,V_{ov}^2 = 2I_D .\ \checkmark$$

### Step 6 — Power and side effects

$$P' = V_{DD}'\,I_{SS}' = \frac{V_{DD}}{2}\cdot2I_{SS} = V_{DD}I_{SS} = P :$$

the halved supply exactly offsets the doubled current.

**Numerical illustration.** Originally $I_{SS} = 1$ mA (0.5 mA per device) and $V_{ov} = 0.2$ V, so $g_{m1} = 2(0.5\ \mathrm{mA})/(0.2\ \mathrm{V}) = 5$ mS. After scaling, $V_{ov} = 0.1$ V and $I_{SS} = 2$ mA (1 mA per device), so $g_{m1} = 2(1\ \mathrm{mA})/(0.1\ \mathrm{V}) = 20$ mS, four times larger, as required.

**Side effect.** The 8× wider input devices have about 8× the gate capacitance ($\approx \tfrac23WLC_{ox}$), while the other capacitors grew only 4×; this extra input capacitance slightly reduces the feedback factor and loads the circuit.

### Result

- Tail current: $I_{SS} \to 2I_{SS}$ (each device carries twice the current).
- Dimensions: $W/L \to 8\,W/L$, i.e. $W \to 8W$ at the same $L$.
- Power: $V_{DD}I_{SS} \to (V_{DD}/2)(2I_{SS})$, unchanged.

These follow from $C \times4$ (halved $kT/C$ noise), $G_m \times4$ (same $C/G_m$), and the halved overdrive in $g_m = 2I_D/V_{ov} = \mu C_{ox}(W/L)V_{ov}$.

**Common mistake.** Scaling both the tail current and $W/L$ by 4, the factor of $g_m$. That holds only at constant overdrive; with $V_{ov}$ halved, the current rises only by 2 and $W/L$ by 8.

**Common mistake.** Reducing the current or width along with the supply, or keeping $G_m$. The capacitors must grow by 4 for the noise target, so $G_m$ must grow by 4 to keep the speed, and the input pair gets bigger, not smaller.
