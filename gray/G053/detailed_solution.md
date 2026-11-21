# Detailed solution - G053

Proceed as for any square-law device, with the effective channel length: find $V_{ov}$ and $g_m$ from the current, $r_o$ from the channel-length-modulation rate, and the gate capacitances from the saturated channel charge plus the overlaps. The gate leakage is the given current density times the gate area. In this 0.1-µm device $\lambda$ is so large that the choice of whether to keep $1+\lambda V_{DS}$ in the square law visibly changes $g_m$ and $r_o$, so both conventions are shown.

### Step 1 — Effective length, overdrive and $g_m$

$$
L_{\text{eff}}=0.1\ \mu\mathrm m-2(0.005\ \mu\mathrm m)=0.09\ \mu\mathrm m,\qquad \frac W{L_{\text{eff}}}=\frac{0.5}{0.09}=5.56 .
$$

From $I_D=\tfrac12k'(W/L)V_{ov}^2$:

$$
g_m=\sqrt{2k'\frac WLI_D}=\sqrt{2(539\ \mu\mathrm{A/V^2})(5.56)(100\ \mu\mathrm A)}=774\ \mu\mathrm{A/V},\qquad V_{ov}=\frac{2I_D}{g_m}=0.26\ \mathrm V .
$$

$V_{DS}=1\ \mathrm V>V_{ov}$, so the device is saturated.

### Step 2 — Output resistance

$$
\lambda=\frac{dX_d/dV_{DS}}{L_{\text{eff}}}=\frac{0.06\ \mu\mathrm m/\mathrm V}{0.09\ \mu\mathrm m}=0.67\ \mathrm{V^{-1}},\qquad
r_o=\frac1{\lambda I_D}=\frac1{(0.67\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=15\ \mathrm{k\Omega}.
$$

Keeping $1+\lambda V_{DS}=1.67$ consistently in the square law instead gives $V_{ov}=\sqrt{2I_D/[k'(W/L)(1.67)]}=0.20$ V, $g_m=2I_D/V_{ov}=1.0$ mA/V and $r_o=(1+\lambda V_{DS})/(\lambda I_D)=25$ kΩ. Either way the intrinsic gain $g_mr_o$ is only about 12–25.

### Step 3 — Gate capacitances

The channel contributes $\tfrac23WL_{\text{eff}}C_{ox}$ to $C_{gs}$ in saturation; the overlap $WC_{ol}=(0.5\ \mu\mathrm m)(0.10\ \mathrm{fF/\mu m})=0.05$ fF appears at both edges:

$$
C_{gs}=\frac23(0.5\ \mu\mathrm m)(0.09\ \mu\mathrm m)(13.8\ \mathrm{fF/\mu m^2})+0.05\ \mathrm{fF}=0.41+0.05=0.46\ \mathrm{fF},\qquad C_{gd}=0.05\ \mathrm{fF}.
$$

### Step 4 — Gate leakage

The 25-Å oxide is thin enough for direct tunneling. With the drawn gate area,

$$
I_G=J_GWL=(1.2\ \mathrm{nA/\mu m^2})(0.5\ \mu\mathrm m)(0.1\ \mu\mathrm m)=60\ \mathrm{pA}
$$

(54 pA using $L_{\text{eff}}$). This is about $6\times10^{-7}$ of the drain current, negligible for this bias but not for very small currents or for large-area gates.

### Step 5 — Summary

| Parameter | Value |
|---|---|
| $g_m$ | 0.77 mA/V (1.0 mA/V with $1+\lambda V_{DS}$) |
| $r_o$ | 15 kΩ (25 kΩ with $1+\lambda V_{DS}$) |
| $C_{gs}$ | 0.46 fF |
| $C_{gd}$ | 0.05 fF |
| $I_G$ | 55–60 pA |
