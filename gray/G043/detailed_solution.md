# Detailed solution - G043

In the active region the output resistance comes from channel-length modulation: the drain depletion region beyond pinch-off widens with $V_{DS}$ and shortens the effective channel. With $\lambda=(dX_d/dV_{DS})/L_{\text{eff}}$, $r_o=L_{\text{eff}}/[I_D\,(dX_d/dV_{DS})]$. Both devices are in the same process at the same $V_{DS}$, so $dX_d/dV_{DS}$ is nearly common and can be calibrated from the first device; only $L_{\text{eff}}$ and $I_D$ need to be scaled.

### Step 1 — Output resistance in terms of $L_{\text{eff}}$

With $I_D=\tfrac12k'(W/L_{\text{eff}})V_{ov}^2$ and $L_{\text{eff}}$ shrinking as $X_d$ grows,

$$
\frac1{r_o}=\frac{\partial I_D}{\partial V_{DS}}=\frac{I_D}{L_{\text{eff}}}\frac{dX_d}{dV_{DS}}=\lambda I_D
\quad\Rightarrow\quad
r_o=\frac{L_{\text{eff}}}{I_D\,(dX_d/dV_{DS})},\qquad
\frac{r_{o2}}{r_{o1}}=\frac{I_{D1}}{I_{D2}}\cdot\frac{L_{\text{eff2}}}{L_{\text{eff1}}}\cdot\frac{(dX_d/dV_{DS})_1}{(dX_d/dV_{DS})_2}.
$$

### Step 2 — Effective channel lengths

$X_d$ is estimated as a one-sided step-junction depletion into the $2.1\times10^{16}\ \mathrm{cm^{-3}}$ surface layer, with the voltage beyond pinch-off $V_{DS}-V_{ov}$: $X_d=\sqrt{2\epsilon(V_{DS}-V_{ov})/(qN)}$. For device 1, with $L_{\text{drwn}}-2L_d=6.4\ \mu$m:

$$
V_{ov}=\sqrt{\frac{2I_D}{k'W/L}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(60.5\ \mu\mathrm{A/V^2})(100/6.4)}}=0.15\ \mathrm V,\qquad
X_d=\sqrt{\frac{2(1.04\times10^{-12}\ \mathrm{F/cm})(4.85\ \mathrm V)}{(1.6\times10^{-19}\ \mathrm C)(2.1\times10^{16}\ \mathrm{cm^{-3}})}}=0.55\ \mu\mathrm m .
$$

| Device | $W/L_{\text{drwn}}$ | $I_D$ (µA) | $V_{ov}$ (V) | $X_d$ (µm) | $L_{\text{eff}}$ (µm) |
|---|---|---|---|---|---|
| 1 | 100/7 | 10 | 0.15 | 0.55 | 5.85 |
| 2 | 50/12 | 30 | 0.48 | 0.53 | 10.87 |

### Step 3 — Scaling the measured $r_o$

The measured $r_{o1}$ implies $dX_d/dV_{DS}=L_{\text{eff1}}/(I_{D1}r_{o1})=5.85\ \mu\mathrm m/[(10\ \mu\mathrm A)(5\ \mathrm{M\Omega})]=0.12\ \mu$m/V. Taking the same value for device 2:

$$
r_{o2}=(5\ \mathrm{M\Omega})\left(\frac{10\ \mu\mathrm A}{30\ \mu\mathrm A}\right)\left(\frac{10.87\ \mu\mathrm m}{5.85\ \mu\mathrm m}\right)=3.1\ \mathrm{M\Omega}.
$$

Since $X_d\propto\sqrt{V_{DS}-V_{ov}}$, $dX_d/dV_{DS}\propto X_d/(V_{DS}-V_{ov})$; device 2 has a slightly smaller $V_{DS}-V_{ov}$ (4.52 V versus 4.85 V), which raises its $dX_d/dV_{DS}$ by about 4% and gives $r_{o2}\approx3.0$ MΩ. Neglecting $X_d$ in $L_{\text{eff}}$ gives $5(1/3)(11.4/6.4)=2.97$ MΩ.

Result: $r_{o2}\approx3.0$ MΩ. The longer channel raises $r_o$ by about 1.9×, while the three-times-larger current lowers it by 3×.
