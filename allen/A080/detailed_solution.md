# Detailed solution - A080

Treat the two transistors of the CMOS switch separately. For each, compute the common geometric factors, decide its regime from the criterion $\beta V_{HT}^2/(2C_L)$ versus $U$, evaluate its injected error, and give it the right sign: the n-channel device lowers $v_{CL}$ (electrons) and the p-channel device raises it (holes). The net change is the difference.

### Step 1 — Quantities common to both devices

Both devices are $0.8\ \mu\mathrm m/0.8\ \mu\mathrm m$ with the same $C_{ox}$ and CGDO:

$$
W\cdot\mathrm{CGDO}=(0.8\ \mu\mathrm m)(220\ \mathrm{pF/m})=0.176\ \mathrm{fF},\qquad
C_{channel}=(0.8\ \mu\mathrm m)^2(24.7\times10^{-4}\ \mathrm{F/m^2})=1.58\ \mathrm{fF},
$$

$$
\frac{W\cdot\mathrm{CGDO}+C_{channel}/2}{C_L}=\frac{0.176\ \mathrm{fF}+0.790\ \mathrm{fF}}{1\ \mathrm{pF}}=9.66\times10^{-4}.
$$

With the bulk effect ignored, $|V_T|=0.7$ V for both. The overlap terms are equal:

$$
\text{n: }\frac{W\cdot\mathrm{CGDO}}{C_L}(v_{in}+V_T-V_L)=\frac{0.176\ \mathrm{fF}}{1\ \mathrm{pF}}(3.2\ \mathrm V)=0.563\ \mathrm{mV},\qquad
\text{p: }\frac{W\cdot\mathrm{CGDO}}{C_L}(V_H-v_{in}+|V_T|)=0.563\ \mathrm{mV},
$$

and since they have opposite signs, they cancel. Both devices also have the same $V_{HT}$: $5-2.5-0.7=1.8$ V for the n-channel device and $2.5-0.7-0=1.8$ V for the p-channel device.

### Step 2 — n-channel M1: slow regime

With $\beta_n=110\ \mu\mathrm{A/V^2}$:

$$
\frac{\beta_nV_{HT}^2}{2C_L}=\frac{(110\ \mu\mathrm{A/V^2})(1.8\ \mathrm V)^2}{2(1\ \mathrm{pF})}=1.78\times10^{8}\ \mathrm{V/s}>U=10^{8}\ \mathrm{V/s},
$$

so the slow-regime expression applies:

$$
V_{error,n}=9.66\times10^{-4}\sqrt{\frac{\pi(10^{8}\ \mathrm{V/s})(1\ \mathrm{pF})}{2(110\ \mu\mathrm{A/V^2})}}+0.563\ \mathrm{mV}
=9.66\times10^{-4}(1.195\ \mathrm V)+0.563\ \mathrm{mV}=1.155+0.563=1.718\ \mathrm{mV}.
$$

### Step 3 — p-channel M2: fast regime

With $\beta_p=50\ \mu\mathrm{A/V^2}$:

$$
\frac{\beta_pV_{HT}^2}{2C_L}=8.1\times10^{7}\ \mathrm{V/s}<U ,
$$

so the fast-regime expression applies:

$$
\frac{\beta_pV_{HT}^3}{6UC_L}=\frac{(50\ \mu\mathrm{A/V^2})(1.8\ \mathrm V)^3}{6(10^{8}\ \mathrm{V/s})(1\ \mathrm{pF})}=0.486\ \mathrm V,
\qquad
V_{error,p}=9.66\times10^{-4}(1.8-0.486)\ \mathrm V+0.563\ \mathrm{mV}=1.270+0.563=1.833\ \mathrm{mV}.
$$

The weaker p-channel device conducts its channel charge back to the source less effectively, so more of its charge reaches $C_L$.

### Step 4 — Net change of $v_{CL}$

The n-channel switch injects electrons as its gate falls, lowering $v_{CL}$; the p-channel switch injects holes as its gate rises, raising it:

$$
\Delta v_{CL}=+V_{error,p}-V_{error,n}=1.833\ \mathrm{mV}-1.718\ \mathrm{mV}=+0.115\ \mathrm{mV},
$$

so $v_{CL}$ rises to about 2.50012 V. The overlap terms cancel exactly, and the channel terms nearly cancel, leaving a net error about fifteen times smaller than that of either device alone.
