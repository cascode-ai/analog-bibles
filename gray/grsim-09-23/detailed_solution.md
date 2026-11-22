# Detailed solution - grsim-09-23

The right-half-plane zero of a Miller-compensated two-stage op amp moves to infinity when the resistance in series with $C_c$ equals $1/g_{m6}$. The bias circuit of [Fig. 2] makes $M_9$'s resistance track $1/g_{m6}$. $M_{12}$ is a replica of $M_6$, so the source of $M_{11}$ sits at the same voltage as the source of $M_9$, and $M_{11}$ gives $M_9$ the same gate overdrive that $M_6$ has. Equating the two expressions then fixes $(W/L)_9$. ngspice checks the resistance and the effect on the frequency response.

### Step 1 — Condition for the zero at infinity

With a resistance $R_z$ in series with $C_c$ between the first-stage output and the output, the feedforward current through the compensation branch cancels $M_6$'s current at

$$
s_z=\frac{1}{C_c\left(1/g_{m6}-R_z\right)},
$$

so the zero is at infinity when $R_z=1/g_{m6}$.

### Step 2 — $g_{m6}$

$M_6$ (100/8, $L_{\text{eff}}=8-0.6-1=6.4\ \mu$m, $(W/L)_{\text{eff}}=15.6$) carries 20 µA:

$$
V_{ov6}=\sqrt{\frac{2(20\ \mu\mathrm{A})}{(60.4\ \mu\mathrm{A/V^2})(15.6)}}=0.206\ \mathrm{V},\qquad g_{m6}=\frac{2I_{D6}}{V_{ov6}}=194\ \mu\mathrm{A/V},\qquad \frac{1}{g_{m6}}=5.15\ \mathrm{k\Omega}.
$$

### Step 3 — Replica bias for $M_9$

$M_{10}$ mirrors $M_8$ (same size), so 20 µA flows down through the diode-connected $M_{11}$ and $M_{12}$ (both 100/8).

- $M_{12}$ has the same size and current as $M_6$, so $V_{GS12}=V_{GS6}$. The source of $M_{11}$ is therefore at $-5\ \mathrm{V}+V_{GS6}$, which is exactly the voltage of the first-stage output, i.e. the source of $M_9$.
- $M_9$'s gate is tied to $M_{11}$'s gate, so $V_{GS9}=V_{GS11}$. Both sources are at the same voltage above the −5-V body, so the thresholds are equal and $V_{GS9}-V_{t9}=V_{GS11}-V_{t11}=V_{ov11}$.
- $M_{11}$ also has the size and current of $M_6$, so $V_{ov11}=V_{ov6}=0.206$ V. (The body effect raises both thresholds equally and does not change the overdrive.)

### Step 4 — Required $W/L$

$M_9$ carries no dc current, so it is in the triode region at $V_{DS}=0$, with resistance $R_9=1/[k_n'(W/L)_9V_{ov11}]$. Setting it equal to $1/g_{m6}=1/[k_n'(W/L)_6V_{ov6}]$:

$$
\left(\frac{W}{L}\right)_{9,\text{eff}}=\left(\frac{W}{L}\right)_{6,\text{eff}}=\frac{100}{6.4}=15.6 .
$$

For a device in the triode region at $V_{DS}\approx0$ there is no drain depletion region, so $L_{\text{eff}}=L_{\text{drwn}}-2L_d$. With $L_{\text{drwn}}=8\ \mu$m, $L_{\text{eff}}=7.4\ \mu$m and

$$
W_9=15.6\times7.4\ \mu\mathrm{m}=116\ \mu\mathrm{m},\qquad R_9=\frac{1}{(60.4\ \mu\mathrm{A/V^2})(15.6)(0.206\ \mathrm{V})}=5.15\ \mathrm{k\Omega}.
$$

Because the overdrive is copied from $M_6$, $R_9$ tracks $1/g_{m6}$ over process, temperature and supply variations.

### Step 5 — SPICE check

The op-amp deck of grsim-09-21 (level-1 models with effective dimensions, $\lambda_n=0.031$, $\lambda_p=0.0156\ \mathrm{V^{-1}}$, $\gamma_n=0.21\ \mathrm{V^{1/2}}$, $2\phi_f=0.58$ V, NMOS bodies at −5 V) is used with the replica-bias circuit added and $M_9$ entered with its effective dimensions $W=115.6\ \mu$m, $L=7.4\ \mu$m. The output is returned to $M_1$'s gate (the inverting input with respect to $v_o$) through a 1-GH inductor for the open-loop ac analysis.

```spice
* grsim-09-23 replica bias for M9 (added to the grsim-09-21 op amp)
M10 g9 g8 vdd vdd pm w=100u l=6.4u
M11 g9 g9 s12 vss nm w=100u l=6.4u
M12 s12 s12 vss vss nm w=100u l=6.4u
M9 d2 g9 z vss nm w=115.6u l=7.4u
CC z o 5p
```

| Quantity | Hand | ngspice |
|---|---|---|
| Source of $M_{11}$ / source of $M_9$ | equal | −4.086 V / −4.103 V |
| $1/g_{m6}$ | 5.15 kΩ | 4.65 kΩ |
| $R_9=1/g_{ds9}$ | 5.15 kΩ | 4.58 kΩ |
| Unity-gain frequency | 3.1 MHz | 3.20 MHz |
| Phase margin | — | 81° |
| Phase margin with $M_9$ shorted | — | 55° ($f_u$ = 3.66 MHz) |

![Open-loop gain magnitude in dB from 100 kHz to 100 MHz with the replica-biased M9 (solid) and with M9 shorted (dashed); the shorted case flattens above about 5 MHz](/q/grsim-09-23/solution-magnitude.svg)

Both resistances differ from the hand value because, with $\lambda$, the simulated currents and transconductances are 5–10 % higher than nominal. But $R_9$ and $1/g_{m6}$ move together and agree within 1.4 %, which is the purpose of the replica bias. The remaining mismatch comes from $\lambda$: $M_{11}$ (22.2 µA) and $M_6$ (21.2 µA) run at slightly different currents, and the sources of $M_9$ and $M_{11}$ differ by 17 mV.

With $M_9$ shorted, the right-half-plane zero at $g_{m6}/(2\pi C_c)\approx6$ MHz flattens the magnitude above a few megahertz and adds phase lag, so the unity-gain frequency rises to 3.66 MHz and the phase margin falls to 55°. With $M_9$ in place, the magnitude keeps falling at −20 dB/decade through the unity-gain frequency, and the phase margin is 81°.
