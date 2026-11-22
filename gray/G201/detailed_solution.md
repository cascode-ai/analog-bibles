# Detailed solution - G201

With $\lambda=0$ and $C_{sb}=C_{db}=0$, the stage has only two capacitors, $C_{gs}$ and $C_{gd}$. Find the midband gain, then the zero-value resistance of each capacitor with $v_i=0$ and the other capacitor open, and estimate $\omega_{-3\text{dB}}\approx1/T_0$.

### Step 1 — Device parameters and gain

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF}.
$$

No gate current flows, so the gate sees all of $v_i$ at low frequency:

$$
\frac{v_o}{v_i}=-g_mR_L=-(1.94\ \mathrm{mA/V})(5\ \mathrm{k\Omega})=-9.68 .
$$

### Step 2 — Zero-value time constants

- $C_{gs}$ (gate to grounded source): $R_{gs0}=R_S=10$ kΩ, so $C_{gs}R_{gs0}=0.747$ ns.
- $C_{gd}$ (gate to drain): a test current $i_x$ raises the gate by $i_xR_S$ and the drain by $i_xR_L$ plus $g_mR_L\cdot i_xR_S$:
$$
R_{gd0}=R_S+R_L+g_mR_LR_S=10+5+96.8\ \mathrm{k\Omega}=111.8\ \mathrm{k\Omega},
$$
so $C_{gd}R_{gd0}=(14\ \mathrm{fF})(111.8\ \mathrm{k\Omega})=1.565$ ns.

### Step 3 — −3-dB frequency

$$
T_0=0.747+1.565\ \mathrm{ns}=2.31\ \mathrm{ns},\qquad
\omega_{-3\text{dB}}\approx\frac1{T_0}=4.3\times10^8\ \mathrm{rad/s},\qquad
f_{-3\text{dB}}\approx68.8\ \mathrm{MHz}.
$$

The exact two-pole response of this circuit has its −3-dB point at 69.5 MHz, so the estimate is within 1 %. $C_{gd}$ dominates through the Miller term $g_mR_LR_S$. Compared with the bipolar common-emitter stage at twice the current (gain −65.8, about 0.92 MHz with the same $R_S$ and $R_L$), the MOS stage has much lower gain but much higher bandwidth, because its $g_m$ and its capacitances are both far smaller.
