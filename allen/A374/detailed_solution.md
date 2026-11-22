# Detailed solution - A374

The output levels come from large-signal operation of the output stage: for $V_{OH}$ the p-channel M6 is driven hard on (gate at its lowest value) and is in the active region while sinking M7's fixed current; for $V_{OL}$ M6 is off. The gain, resolution and poles come from the small-signal model of the uncompensated two-stage amplifier, whose two high-impedance nodes each form a pole with their own capacitance.

### Step 1 — $V_{OH}$

With $V_{G6}=0$ V, M6 has $V_{SG6}=2.5$ V, an overdrive $V_{SG6}-|V_{TP}|=1.8$ V, and $\beta_6=K'_P(W/L)_6=(50\ \mu\mathrm{A/V^2})(38)=1900\ \mu\mathrm{A/V^2}$. It must carry $I_7=234\ \mu$A at a small $V_{SD6}$, i.e. in the active region:

$$
I_7=\beta_6\Bigl[(V_{SG6}-|V_{TP}|)V_{SD6}-\frac{V_{SD6}^2}2\Bigr].
$$

Solving for the smaller root,

$$
V_{SD6}=(V_{SG6}-|V_{TP}|)\Bigl[1-\sqrt{1-\frac{2I_7}{\beta_6(V_{SG6}-|V_{TP}|)^2}}\Bigr]
=(1.8\ \mathrm V)\bigl[1-\sqrt{1-0.0760}\bigr]=0.070\ \mathrm V,
$$
$$
V_{OH}=V_{DD}-V_{SD6}=2.5-0.070=2.43\ \mathrm V .
$$

### Step 2 — $V_{OL}$

When the first-stage output rises, M6 turns off. With no load current, M7 pulls the output all the way down (its current falls to zero as it enters the triode region at $V_{DS7}=0$):

$$
V_{OL}=V_{SS}=-2.5\ \mathrm V .
$$

### Step 3 — DC gain

With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(3)(15\ \mu\mathrm A)}=99.5\ \mu\mathrm S,\qquad
g_{ds2}+g_{ds4}=(15\ \mu\mathrm A)(0.04+0.05)\ \mathrm{V^{-1}}=1.35\ \mu\mathrm S,
$$
$$
g_{m6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(38)(234\ \mu\mathrm A)}=943\ \mu\mathrm S,\qquad
g_{ds6}+g_{ds7}=(234\ \mu\mathrm A)(0.09\ \mathrm{V^{-1}})=21.1\ \mu\mathrm S .
$$

$$
A_v(0)=\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{g_{m6}}{g_{ds6}+g_{ds7}}=(73.7)(44.8)\approx3300\ \mathrm{V/V}.
$$

### Step 4 — Input resolution

$$
V_{in}(\min)=\frac{V_{OH}-V_{OL}}{A_v(0)}=\frac{2.43\ \mathrm V+2.5\ \mathrm V}{3300}\approx1.5\ \mathrm{mV}.
$$

### Step 5 — Poles

Without compensation, each high-impedance node has its own pole, set by the node's output conductance and capacitance:

$$
p_1=-\frac{g_{ds2}+g_{ds4}}{C_I}=-\frac{1.35\ \mu\mathrm S}{0.2\ \mathrm{pF}}=-6.75\times10^6\ \mathrm{rad/s}\quad(1.07\ \mathrm{MHz}),
$$
$$
p_2=-\frac{g_{ds6}+g_{ds7}}{C_{II}}=-\frac{21.1\ \mu\mathrm S}{5\ \mathrm{pF}}=-4.21\times10^6\ \mathrm{rad/s}\quad(0.67\ \mathrm{MHz}).
$$

| Quantity | Value |
|---|---|
| $V_{OH}$ | 2.43 V |
| $V_{OL}$ | −2.5 V |
| $A_v(0)$ | ≈ 3300 V/V |
| $V_{in}(\min)$ | ≈ 1.5 mV |
| $p_1$ | $-6.75\times10^6$ rad/s (1.07 MHz) |
| $p_2$ | $-4.21\times10^6$ rad/s (0.67 MHz) |
