# Detailed solution - A110

With all resistors equal, the resistor ratios of the original design can no longer weight the three currents, so the weighting moves into the copy ratios of M24, M25 and M23. Write $V_{REF}$ in terms of these ratios, substitute the diode model, and impose three conditions: cancellation of the $T\ln T$ terms, zero first-order TC at $T_0$, and $V_{REF}=1.0$ V.

### Step 1 — $V_{REF}$ in terms of the copy ratios

M24, M25 and M23 share gates and sources with the bus devices M3, M8 and M18 ($W/L=10$), so in saturation they copy the bus currents in proportion to $W/L$. Define

$$
a=\frac{(W/L)_{24}}{10},\qquad b=\frac{(W/L)_{25}}{10},\qquad c=\frac{(W/L)_{23}}{10}.
$$

M21 and M22 have equal $W/L$, so $I_{22}=I_{23}$. With $R_1=R_2=R_4=R_5=R$,

$$
V_{REF}=R\left(a\frac{V_{PTAT}}{R}+b\frac{V_{D3}}{R}-c\frac{V_{D4}}{R}\right)=aV_{PTAT}+bV_{D3}-cV_{D4}.
$$

The common resistor value cancels: $V_{REF}$ depends only on the copy ratios and the diode voltages.

### Step 2 — Substitute the diode model

$V_{PTAT}=V_t\ln10$ is proportional to $T$. D3 is biased by a PTAT current ($\alpha=1$) and D4 by a constant current ($\alpha=0$); both are at 0.7 V at $T_0$, so their linear parts are identical:

$$
V_{D3}=V_L(T)-(\gamma-1)V_t\ln\frac{T}{T_0},\qquad
V_{D4}=V_L(T)-\gamma V_t\ln\frac{T}{T_0},\qquad
V_L(T)=V_{G0}-\frac{T}{T_0}\left[V_{G0}-V_D(T_0)\right].
$$

Hence

$$
V_{REF}=aV_{PTAT}(T)+(b-c)V_L(T)+\left[c\gamma-b(\gamma-1)\right]V_t\ln\frac{T}{T_0}.
$$

### Step 3 — Cancel the curvature term

The $V_t\ln(T/T_0)$ term vanishes at all temperatures if

$$
b(\gamma-1)=c\gamma\quad\Rightarrow\quad\frac cb=\frac{\gamma-1}{\gamma}=\frac{2.2}{3.2}=0.6875 .
$$

Subtracting the constant-current diode's voltage removes the $T\ln T$ curvature of the PTAT-biased diode.

### Step 4 — Zero TC and the value of $V_{REF}$

What remains is linear in $T$. Its slope vanishes when

$$
a\,\frac{V_{PTAT}(T_0)}{T_0}=(b-c)\,\frac{V_{G0}-V_D(T_0)}{T_0}
\quad\Rightarrow\quad
a\,V_{t0}\ln10=(b-c)\left[V_{G0}-V_D(T_0)\right].
$$

Substituting into $V_{REF}$ at $T_0$,

$$
V_{REF}=a\,V_{t0}\ln10+(b-c)V_D(T_0)=(b-c)V_{G0},
$$

and in this model it is the same at every temperature, since both the linear and the $T\ln T$ terms cancel.

### Step 5 — Solve for the ratios

From $V_{REF}=1.0$ V:

$$
b-c=\frac{1.0\ \mathrm V}{1.205\ \mathrm V}=0.8299,\qquad
b=\frac{0.8299}{1-0.6875}=2.656,\qquad c=0.6875\,b=1.826,
$$

$$
a=\frac{(b-c)\left[V_{G0}-V_D(T_0)\right]}{V_{t0}\ln10}=\frac{0.8299\times0.505\ \mathrm V}{0.05987\ \mathrm V}=7.00 .
$$

| Device | Copies | Ratio | $W/L$ |
|---|---|---|---|
| M24 | $I_{PTAT}'$ (bus M3) | $a=7.00$ | 70.0 |
| M25 | $I_{CTAT}'$ (bus M8) | $b=2.656$ | 26.6 |
| M23 | $I_{\alpha=0}'$ (bus M18) | $c=1.826$ | 18.3 |

These ratios equal the resistor ratios of the original 1:1 design, $R_5/R_1=7.0$, $R_5/R_2=2.66$ and $R_5/R_4=1.83$.

Check with the model at three temperatures:

| $T$ | $V_{D3}$ | $V_{D4}$ | $V_{REF}=aV_{PTAT}+bV_{D3}-cV_{D4}$ |
|---|---|---|---|
| 273 K | 0.7504 V | 0.7526 V | 1.000 V |
| 300 K | 0.7000 V | 0.7000 V | 1.000 V |
| 343 K | 0.6189 V | 0.6149 V | 1.000 V |

### Step 6 — Value of the equal resistors

Since $R$ drops out of $V_{REF}$, it only sets the current level, and so the power and the headroom needed to keep all devices saturated. Keeping $R=10$ kΩ, the original $R_4$, gives

$$
I_{PTAT}'=\frac{59.87\ \mathrm{mV}}{10\ \mathrm{k\Omega}}=5.99\ \mu\mathrm A,\qquad
I_{CTAT}'=I_{\alpha=0}'=\frac{0.7\ \mathrm V}{10\ \mathrm{k\Omega}}=70\ \mu\mathrm A
$$

at room temperature, and $R_5=10$ kΩ carries $aI_{PTAT}'+bI_{CTAT}'-cI_{\alpha=0}'=100$ µA to produce 1.0 V. $R_3$ is not part of this set; it is still sized so that M11 is biased at its zero-TC point.
