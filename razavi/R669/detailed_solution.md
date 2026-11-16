# Detailed solution - R669

**Approach.** The noise requirement fixes the capacitors ($C \to 4C$). The slew rate of a one-stage op amp is the tail current divided by the load capacitance, so a constant slew rate fixes the tail current. With the current and the (halved) overdrive known, the square-law relations give $G_m$ and the aspect ratio of the input pair.

### Step 1 — Capacitor scaling (from the noise requirement)

The swing is halved, so for a constant dynamic range the rms noise must be halved and the mean-square noise divided by 4. With only $kT/C$ noise ($k$: Boltzmann's constant, $T$: absolute temperature):

$$\overline{v_n^2} = \frac{kT}{C} \quad\Rightarrow\quad \frac{kT}{C'} = \frac14\cdot\frac{kT}{C} \quad\Rightarrow\quad C' = 4C .$$

All capacitors, including the load the op amp must drive, are multiplied by 4.

### Step 2 — Slew rate of a one-stage op amp

During slewing, a large input step fully unbalances the differential pair: one input transistor turns off and the whole tail current $I_{SS}$ flows through the other. The output current available to charge or discharge the load capacitance $C$ is then at most $I_{SS}$ (through the current-mirror load or the cascode branch). The output therefore ramps at the maximum rate

$$SR = \frac{dV_{out}}{dt}\bigg|_{max} = \frac{I_{SS}}{C}.$$

Note that the slew rate depends on the tail *current*, not on the transconductance: once the pair is fully switched, its $g_m$ no longer matters.

### Step 3 — Tail current for constant slew rate

$$\frac{I_{SS}'}{C'} = \frac{I_{SS}}{C} \quad\Rightarrow\quad I_{SS}' = I_{SS}\,\frac{C'}{C} = 4I_{SS}.$$

The tail current must rise by **4**, and each input transistor now carries $I_D' = I_{SS}'/2 = 4I_D$.

### Step 4 — Transconductance

For the square-law model, with overdrive $V_{ov} = V_{GS} - V_{TH}$, the transconductance of each input device is

$$g_m = \frac{2I_D}{V_{ov}} = \frac{2(I_{SS}/2)}{V_{ov}} = \frac{I_{SS}}{V_{ov}} .$$

For the one-stage op amp $G_m = g_{m1}$. Apply the factors ($I_{SS} \times4$, $V_{ov} \times\tfrac12$):

$$G_m' = \frac{4I_{SS}}{V_{ov}/2} = 8\,\frac{I_{SS}}{V_{ov}} = 8\,G_m .$$

$G_m$ rises by **8**: four times from the larger current and twice from the smaller overdrive (more $g_m$ per unit current at lower $V_{ov}$).

**Effect on speed.** The small-signal time constant becomes

$$\frac{C'}{G_m'} = \frac{4C}{8G_m} = \frac12\cdot\frac{C}{G_m},$$

half of its original value. A constant slew rate thus provides more transconductance than the 4× needed to keep the linear settling speed: the small-signal settling becomes twice as fast.

### Step 5 — Aspect ratio

From the square-law current equation, $I_D = \frac12\mu C_{ox}(W/L)V_{ov}^2$, solve for the aspect ratio:

$$\frac{W}{L} = \frac{2I_D}{\mu C_{ox}V_{ov}^2}.$$

Apply the factors ($I_D \times4$, $V_{ov}^2 \times\tfrac14$, same $\mu C_{ox}$):

$$\left(\frac{W}{L}\right)' = \frac{2(4I_D)}{\mu C_{ox}(V_{ov}/2)^2} = \frac{4}{1/4}\cdot\frac{2I_D}{\mu C_{ox}V_{ov}^2} = 16\,\frac{W}{L}.$$

With the same channel length, $W' = 16W$.

**Consistency check** with $g_m = \mu C_{ox}(W/L)V_{ov}$: the factor is $16 \times \tfrac12 = 8$, matching Step 4. ✓

### Step 6 — Power

$$P' = V_{DD}'\,I_{SS}' = \frac{V_{DD}}{2}\cdot4I_{SS} = 2\,V_{DD}I_{SS} = 2P .$$

The power **doubles**. When the dynamic range is limited by $kT/C$ noise, the capacitors must grow faster than the supply shrinks, and charging four times the capacitance at the same slew rate needs four times the current, which outweighs the halved supply.

**Numerical illustration.** Originally $I_{SS} = 1$ mA and $V_{ov} = 0.2$ V: $G_m = 1\ \mathrm{mA}/0.2\ \mathrm{V} = 5$ mS. After scaling: $I_{SS} = 4$ mA, $V_{ov} = 0.1$ V, $G_m = 4\ \mathrm{mA}/0.1\ \mathrm{V} = 40$ mS (8×). With, say, $C = 1$ pF → 4 pF, the slew rate stays $1\ \mathrm{mA}/1\ \mathrm{pF} = 4\ \mathrm{mA}/4\ \mathrm{pF} = 1$ V/ns.

### Result

- Tail current: $I_{SS} \to 4I_{SS}$ (from $SR = I_{SS}/C$ with $C \times4$).
- Transconductance: $G_m = I_{SS}/V_{ov} \to 8G_m$ (twice the 4× needed for the same $C/G_m$, so small-signal settling is twice as fast).
- Dimensions: $W/L \to 16\,W/L$ ($W \to 16W$ at the same $L$).
- Power: $V_{DD}I_{SS} \to (V_{DD}/2)(4I_{SS}) = 2V_{DD}I_{SS}$, i.e. doubled.

**Common mistake.** Keeping the tail current constant (or doubling it) for a constant slew rate. The slew rate is the maximum current divided by the capacitance it charges; the capacitance grew by 4, so the current must grow by 4.

**Common mistake.** Treating the slew rate as proportional to $G_m$. Slewing is a large-signal effect in which the input pair is fully switched; only the available current $I_{SS}$ matters.

**Common mistake.** Scaling $W/L$ by 4 together with the current, which silently keeps the overdrive constant. With the overdrive halved as stated, $W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$ must rise by $4\times4 = 16$.
