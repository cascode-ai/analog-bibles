# Detailed solution - G202

The source resistor $R_{SS}$ reduces the effective transconductance to $G_m=g_m/(1+g_mR_{SS})$. Find the midband gain from $G_m$, then the zero-value resistances of $C_{gs}$ and $C_{gd}$ with $v_i=0$, including the feedback through $R_{SS}$, and estimate $\omega_{-3\text{dB}}\approx1/T_0$.

### Step 1 — Gain

$$
g_m=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},\qquad 1+g_mR_{SS}=2.743,
$$
$$
G_m=\frac{g_m}{1+g_mR_{SS}}=0.706\ \mathrm{mA/V},\qquad
\frac{v_o}{v_i}=-G_mR_L=-(0.706\ \mathrm{mA/V})(5\ \mathrm{k\Omega})=-3.53 .
$$

### Step 2 — Zero-value resistance of $C_{gs}$

$C_{gs}$ connects gate and source. Drive it with a test current $i_x$ from source to gate. The gate side sees $R_S$; at the source, $i_x$ and the channel current $g_mv_{gs}$ flow through $R_{SS}$. Writing $v_g=-i_xR_S$ and $v_s=(i_x+g_mv_{gs})R_{SS}$ and solving for $v_{sg}=v_s-v_g$:

$$
R_{gs0}=\frac{R_S+R_{SS}}{1+g_mR_{SS}}=\frac{10.9\ \mathrm{k\Omega}}{2.743}=3.97\ \mathrm{k\Omega},
\qquad C_{gs}R_{gs0}=(74.7\ \mathrm{fF})(3.97\ \mathrm{k\Omega})=0.297\ \mathrm{ns}.
$$

The feedback through $R_{SS}$ bootstraps $C_{gs}$, so it sees far less than $R_S$.

### Step 3 — Zero-value resistance of $C_{gd}$

The gate sees $R_S$ (the gate draws no current), and the drain current responds to the gate voltage through $G_m$:

$$
R_{gd0}=R_S+R_L+G_mR_LR_S=10+5+35.3\ \mathrm{k\Omega}=50.3\ \mathrm{k\Omega},
\qquad C_{gd}R_{gd0}=(14\ \mathrm{fF})(50.3\ \mathrm{k\Omega})=0.704\ \mathrm{ns}.
$$

### Step 4 — −3-dB frequency

$$
T_0=0.297+0.704\ \mathrm{ns}=1.00\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=159\ \mathrm{MHz}.
$$

An exact nodal analysis gives 163 MHz. Compared with the undegenerated stage (gain −9.68, about 69 MHz), degeneration lowers the gain by the factor 2.74 and raises the bandwidth by about 2.3: the Miller term shrinks with $G_m$, and $C_{gs}$ is bootstrapped.
