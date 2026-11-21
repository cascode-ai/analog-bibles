# Detailed solution - G052

Use the effective channel length in the square-law model to find the overdrive and $g_m$ at the given current, confirm that the device is saturated, and take $r_o$ from the given channel-length-modulation rate. The gate capacitances follow from the channel charge in saturation plus the overlaps.

### Step 1 — Effective length and overdrive

$$
L_{\text{eff}}=0.2\ \mu\mathrm m-2(0.01\ \mu\mathrm m)=0.18\ \mu\mathrm m,\qquad \frac W{L_{\text{eff}}}=\frac{0.9}{0.18}=5 .
$$

From $I_D=\tfrac12k'(W/L)V_{ov}^2$, $g_m=k'(W/L)V_{ov}=\sqrt{2k'(W/L)I_D}$:

$$
g_m=\sqrt{2(247\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=497\ \mu\mathrm{A/V},\qquad V_{ov}=\frac{2I_D}{g_m}=0.40\ \mathrm V .
$$

Since $V_{DS}=1\ \mathrm V>V_{ov}$, the device is in the active region as assumed. If the factor $1+\lambda V_{DS}=1.156$ is kept in the square law, $V_{ov}=0.375$ V and $g_m=2I_D/V_{ov}=534\ \mu$A/V.

### Step 2 — Output resistance

$$
\lambda=\frac{dX_d/dV_{DS}}{L_{\text{eff}}}=\frac{0.028\ \mu\mathrm m/\mathrm V}{0.18\ \mu\mathrm m}=0.156\ \mathrm{V^{-1}},\qquad
r_o=\frac1{\lambda I_D}=\frac1{(0.156\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=64\ \mathrm{k\Omega}
$$

(74 kΩ with $(1+\lambda V_{DS})/(\lambda I_D)$). The large $\lambda$ reflects the very short channel.

### Step 3 — Gate capacitances

In saturation the channel contributes $\tfrac23WL_{\text{eff}}C_{ox}$ to $C_{gs}$ and nothing to $C_{gd}$; the overlap $WC_{ol}=(0.9\ \mu\mathrm m)(0.36\ \mathrm{fF/\mu m})=0.32$ fF appears on both sides:

$$
C_{gs}=\frac23(0.9\ \mu\mathrm m)(0.18\ \mu\mathrm m)(8.22\ \mathrm{fF/\mu m^2})+0.32\ \mathrm{fF}=0.89+0.32=1.21\ \mathrm{fF},\qquad C_{gd}=0.32\ \mathrm{fF}.
$$

The overlap is about a quarter of $C_{gs}$ in this short-channel device.

### Step 4 — Summary

| Parameter | Value |
|---|---|
| $g_m$ | 0.50 mA/V |
| $r_o$ | 64 kΩ |
| $C_{gs}$ | 1.21 fF |
| $C_{gd}$ | 0.32 fF |
