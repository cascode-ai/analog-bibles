# Detailed solution - G028

For a square-law device $\sqrt{I_D}$ is a straight line in $V_{GS}$, which is why [Fig. 1] is plotted this way. Compute the active-region current of the 1-µm device from the velocity-saturated gradual-channel model, take its square root over the sweep, and compare with the line that the same $k'$ and $V_t$ produce without velocity saturation.

### Step 1 — Active-region current with velocity saturation

The gradual-channel analysis with $v_d=\mu_n\mathcal E/(1+\mathcal E/\mathcal E_c)$ gives the triode current $I_D=\tfrac12k'(W/L)(2V_{ov}V_{DS}-V_{DS}^2)/[1+V_{DS}/(\mathcal E_cL)]$, whose maximum (the active-region current, $\lambda=0$) occurs at

$$
V_{DS(act)}=\mathcal E_cL\left(\sqrt{1+\frac{2V_{ov}}{\mathcal E_cL}}-1\right),\qquad
I_D=\frac{k'}2\frac WLV_{DS(act)}^2 .
$$

Here $\mathcal E_cL=(1.5\times10^6\ \mathrm{V/m})(1\ \mu\mathrm m)=1.5$ V. The largest value, at $V_{GS}=5$ V ($V_{ov}=4.3$ V), is $V_{DS(act)}=2.39$ V, below $V_{DS}=5$ V, so the device is in the active region whenever it conducts. Below $V_t=0.7$ V the current is zero (subthreshold conduction ignored).

### Step 2 — $\sqrt{I_D}$ for the two models

With $\tfrac12k'(W/L)=27\ \mu\mathrm{A/V^2}$, $\sqrt{27\ \mu\mathrm{A/V^2}}=5.20\ \sqrt{\mu\mathrm A}/\mathrm V$, so

$$
\sqrt{I_D}=\left(5.20\ \frac{\sqrt{\mu\mathrm A}}{\mathrm V}\right)V_{DS(act)}\quad\text{(velocity saturation)},\qquad
\sqrt{I_D}=\left(5.20\ \frac{\sqrt{\mu\mathrm A}}{\mathrm V}\right)V_{ov}\quad\text{(square law)}.
$$

The square-law line is the long-channel characteristic of [Fig. 1]: there $\mathcal E_cL=30$ V, so velocity saturation is negligible. At $V_{GS}=3$ V ($V_{ov}=2.3$ V): $V_{DS(act)}=(1.5\ \mathrm V)(\sqrt{1+4.6/1.5}-1)=1.525$ V, so $\sqrt{I_D}=7.92\ \sqrt{\mu\mathrm A}$ ($I_D=62.8\ \mu$A), against 11.95 on the line.

| $V_{GS}$ (V) | 1 | 1.5 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $\sqrt{I_D}$, 1-µm device ($\sqrt{\mu\mathrm A}$) | 1.43 | 3.41 | 5.09 | 7.92 | 10.3 | 12.4 |
| $\sqrt{I_D}$, square-law line ($\sqrt{\mu\mathrm A}$) | 1.56 | 4.16 | 6.76 | 11.95 | 17.1 | 22.3 |
| $I_D$, 1-µm device (µA) | 2.0 | 11.6 | 25.9 | 62.8 | 106 | 155 |

### Step 3 — Slope of the short-channel curve

Since $dV_{DS(act)}/dV_{ov}=1/\sqrt{1+2V_{ov}/(\mathcal E_cL)}$,

$$
\frac{d\sqrt{I_D}}{dV_{GS}}=\frac{5.20\ \sqrt{\mu\mathrm A}/\mathrm V}{\sqrt{1+2V_{ov}/(\mathcal E_cL)}},
$$

equal to the long-channel slope at threshold and falling to 3.4 at $V_{ov}=1$ V and 2.0 $\sqrt{\mu\mathrm A}/\mathrm V$ at $V_{ov}=4.3$ V. The curve therefore bends downward ($d^2\sqrt{I_D}/dV_{GS}^2<0$).

### Step 4 — Plot and comparison

![√ID versus VGS for the 1-µm device with velocity saturation, bending below the straight square-law line of the long-channel device](/q/G028/solution-curves.svg)

Both curves start at $V_t=0.7$ V with the same slope, but for large $V_{GS}$ the short-channel curve falls well below the straight line: 12.4 versus 22.3 $\sqrt{\mu\mathrm A}$ at 5 V, i.e. 155 µA versus 499 µA. The difference is velocity saturation. With $\mathcal E_cL=1.5$ V comparable to the overdrive, the carriers near the drain approach their saturated velocity, and the current grows more slowly than $V_{ov}^2$, tending toward linear in $V_{ov}$ (so $\sqrt{I_D}$ tends toward $\sqrt{V_{ov}}$). A straight-line fit to the short-channel plot would underestimate $k'$ and misplace the extrapolated threshold.
