# Detailed solution - R703

**Approach.** Ideal (constant-field) scaling by $\alpha = 2$ shrinks every dimension, vertical as well as lateral, by 2. The sheet resistance $R_\square = \rho/t$ depends on the poly thickness $t$, and the gate resistance is $R_\square$ times the number of squares along the gate. Apply the scaling to each, keeping the resistivity of the (degenerately doped) gate conductor fixed.

### Step 1 — What scales

Constant-field scaling divides $W$, $L$, $t_{ox}$, junction depths, **the gate-poly thickness $t$** and the voltages by $\alpha$, and multiplies the substrate doping by $\alpha$ (to scale the depletion widths). Conductor resistivities are kept constant: the gate poly is already doped degenerately, near solid solubility, so its resistivity cannot be scaled down (which is why gate and interconnect resistance worsen with scaling). Here the device goes from $W/L = 100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$ to $50\ \mu\mathrm{m}/0.25\ \mu\mathrm{m}$.

### Step 2 — Sheet resistance of the gate polysilicon

With $t' = t/2$ and $\rho' = \rho$:

$$R'_\square = \frac{\rho'}{t'} = \frac{\rho}{t/2} = 2\,\frac{\rho}{t} = 2R_\square .$$

**The sheet resistance doubles.**

### Step 3 — Total gate resistance

The gate signal enters at the gate contact and travels **along the width $W$** of the poly strip, which is $L$ wide, so the strip has $n_\square = W/L$ squares and

$$R_G = R_\square\,\frac{W}{L}.$$

**Before scaling:**

$$n_\square = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200, \qquad R_G = 200\,R_\square .$$

**After scaling:** $W$ and $L$ are both halved, so the number of squares is unchanged, while each square is twice as resistive:

$$n'_\square = \frac{50\ \mu\mathrm{m}}{0.25\ \mu\mathrm{m}} = 200, \qquad R'_G = R'_\square\,n'_\square = (2R_\square)(200) = 400\,R_\square = 2R_G .$$

**The total gate resistance doubles.** The same holds for the *effective* distributed gate resistance used in noise and speed calculations, $R_\square W/(3L)$ for a gate contacted at one end, which also contains $R_\square$ times the unchanged $W/L$.

**General form.** If the poly resistivity were also changed, to $\rho'$, both quantities would scale by the same factor:

$$\frac{R'_\square}{R_\square} = \frac{R'_G}{R_G} = \frac{\rho'/(t/2)}{\rho/t} = 2\,\frac{\rho'}{\rho}.$$

Doubling the poly doping as well, with unchanged mobility, would give $\rho' = \rho/2$ and leave both the same; that is a non-standard reading, since the gate poly is already at its maximum useful doping.

### Step 4 — Why this matters

- **Gate resistance vs. transconductance.** $g_m = \mu C_{ox}(W/L)V_{ov}$ is unchanged by ideal scaling ($C_{ox} \times 2$, $W/L$ unchanged, $V_{ov}/2$), so $R_Gg_m$ doubles and the thermal noise of the gate resistance, $4kTR_G$, becomes twice as significant relative to the channel noise.
- **Gate RC time constant.** $C_G = WLC_{ox}$ scales as $(1/2)(1/2)(2) = 1/2$, so
$$R'_GC'_G = (2R_G)\left(\tfrac12C_G\right) = R_GC_G,$$
unchanged, whereas the intrinsic delays halve: relative to the device speed, the gate RC becomes twice as important.
- **Remedy.** Split wide devices into more (shorter) fingers, contact gates at both ends, and use silicided poly, which lowers $R_\square$ by more than an order of magnitude.

### Result

With the poly resistivity unchanged (the standard ideal-scaling convention for conductors):

- **Sheet resistance of the gate poly: doubles**, $R'_\square = \rho/(t/2) = 2R_\square$, because the poly thickness is halved.
- **Total gate resistance: doubles**, $R'_G = 2R_\square\times(50/0.25) = 400R_\square = 2R_G$, because the number of squares $W/L = 200$ is unchanged while each square is twice as resistive.

**Common mistake.** Concluding that the gate resistance halves (or quarters) because "$W$ is halved". It depends on the *ratio* $W/L$, and both $W$ and $L$ are halved.

**Common mistake.** Keeping the sheet resistance constant. $R_\square = \rho/t$, and ideal scaling halves every vertical dimension, including the gate-poly thickness.

**Common mistake.** Applying the "doping $\times\alpha$" rule to the gate polysilicon and concluding that nothing changes. That rule targets the substrate doping; the gate poly is already degenerately doped, so its resistivity stays constant and both quantities double.
