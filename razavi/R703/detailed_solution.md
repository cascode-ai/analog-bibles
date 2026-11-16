# Detailed solution - R703

**Approach.** Under ideal (constant-field) scaling by a factor $\alpha = 2$, every dimension of the device, vertical as well as lateral, shrinks by 2. The sheet resistance of the gate polysilicon is $R_\square = \rho/t$, so it depends on the poly thickness $t$; the gate resistance is $R_\square$ times the number of squares along the gate. We apply the scaling rules to each quantity, keeping the resistivity of the (degenerately doped) gate conductor fixed, as is standard for conductors in ideal scaling.

### Step 1 — Constant-field scaling rules

Ideal (constant-field, "Dennard") scaling by a factor $\alpha > 1$ is designed so that every electric field in the device stays the same. It prescribes:

| Quantity | Scaled by |
|---|---|
| channel width $W$, channel length $L$ | $1/\alpha$ |
| gate-oxide thickness $t_{ox}$, junction depth, **gate-poly thickness $t$** | $1/\alpha$ |
| supply and threshold voltages | $1/\alpha$ |
| substrate (channel) doping | $\times\alpha$ (so that depletion widths shrink by $\alpha$) |
| resistivity of conductors (gate poly, metal) | unchanged |

Why the conductor resistivity is held constant: the "doping $\times\alpha$" rule is applied to the substrate/well doping so that depletion widths scale. The gate polysilicon is already doped degenerately, near the solid-solubility limit, so its resistivity cannot be scaled down; in Dennard's scaling conductor resistivities are kept constant. (This is precisely why gate and interconnect resistance become a growing problem as technology scales.)

Here $\alpha = 2$ and the device goes from $W/L = 100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$ to $50\ \mu\mathrm{m}/0.25\ \mu\mathrm{m}$.

### Step 2 — Sheet resistance of the gate polysilicon

A film of resistivity $\rho$ and thickness $t$ has sheet resistance (resistance of one square of film)

$$R_\square = \frac{\rho}{t}.$$

After scaling, the poly thickness is $t' = t/2$ and $\rho' = \rho$:

$$R'_\square = \frac{\rho'}{t'} = \frac{\rho}{t/2} = 2\,\frac{\rho}{t} = 2R_\square .$$

**The sheet resistance doubles.** A thinner film has a smaller cross-section for the same width, so each square is more resistive.

### Step 3 — Total gate resistance

**Geometry of the gate resistor.** The gate poly is a strip that runs across the channel. The gate signal is applied at one end of the strip (the gate contact) and travels **along the width $W$** of the transistor. The poly strip is $W$ long (in the direction of current flow) and $L$ wide. Its number of squares is therefore

$$n_\square = \frac{W}{L},$$

and its end-to-end resistance is

$$R_G = R_\square\,\frac{W}{L}.$$

**Before scaling:**

$$n_\square = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200, \qquad R_G = 200\,R_\square .$$

**After scaling:** both $W$ and $L$ are halved, so the number of squares is unchanged,

$$n'_\square = \frac{50\ \mu\mathrm{m}}{0.25\ \mu\mathrm{m}} = 200,$$

while each square now has resistance $2R_\square$:

$$R'_G = R'_\square\,n'_\square = (2R_\square)(200) = 400\,R_\square = 2R_G .$$

**The total gate resistance doubles.**

The same factor applies to the *effective* gate resistance used in noise and speed calculations. Since the gate charge enters the channel all along the finger, the distributed gate behaves like $R_\square W/(3L)$ for a gate contacted at one end; this too contains $R_\square$ times the unchanged ratio $W/L$, so it doubles.

**General form.** If the poly resistivity were also changed, to $\rho'$, both quantities would scale by the same factor:

$$\frac{R'_\square}{R_\square} = \frac{R'_G}{R_G} = \frac{\rho'/(t/2)}{\rho/t} = 2\,\frac{\rho'}{\rho}.$$

For example, if one insisted on doubling the poly doping too and assumed the mobility unchanged, $\rho' = \rho/2$ and both would stay the same. That is a non-standard reading: the gate poly is already at its maximum useful doping, so in ideal scaling $\rho' = \rho$ and the factor is 2.

### Step 4 — Why this matters

- **Gate resistance vs. transconductance.** Under ideal scaling, $g_m = \mu C_{ox}(W/L)V_{ov}$ is unchanged ($C_{ox} \times 2$, $W/L$ unchanged, $V_{ov}/2$). The product $R_Gg_m$ therefore doubles, so the thermal noise of the gate resistance, $4kTR_G$, becomes twice as significant relative to the channel noise.
- **Gate RC time constant.** The gate capacitance $C_G = WLC_{ox}$ scales as $(1/2)(1/2)(2) = 1/2$. Then
$$R'_GC'_G = (2R_G)\left(\tfrac12C_G\right) = R_GC_G,$$
unchanged, whereas the intrinsic delays of the device halve. Relative to the device speed, the gate's distributed RC becomes twice as important.
- **Remedy.** Designers compensate by splitting wide devices into more (shorter) fingers, contacting gates at both ends, and using silicided poly, which lowers $R_\square$ by more than an order of magnitude.

### Result

With the poly resistivity unchanged (the standard ideal-scaling convention for conductors):

- **Sheet resistance of the gate poly: doubles**, $R'_\square = \rho/(t/2) = 2R_\square$, because the poly thickness is halved.
- **Total gate resistance: doubles**, $R'_G = 2R_\square\times(50/0.25) = 400R_\square = 2R_G$, because the number of squares $W/L = 200$ is unchanged while each square is twice as resistive.

**Common mistake.** Concluding that the gate resistance halves (or quarters) because "$W$ is halved". The gate resistance depends on the *ratio* $W/L$ (the number of squares the gate signal traverses), and both $W$ and $L$ are halved, so the ratio is unchanged.

**Common mistake.** Keeping the sheet resistance constant. Sheet resistance is not a material constant; it is $\rho/t$, and ideal scaling halves every vertical dimension, including the gate-poly thickness.

**Common mistake.** Applying the "doping $\times\alpha$" rule to the gate polysilicon and concluding that nothing changes. That rule targets the substrate doping (to scale depletion widths); the gate poly is already degenerately doped, so its resistivity stays constant and both quantities double.
