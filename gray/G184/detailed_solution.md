# Detailed solution - G184

Find $g_m$ and $C_{gs}$ from the bias and geometry, replace $C_{gd}$ by its Miller equivalent at the gate, and take the input pole formed by $R_S$ with the total gate capacitance as the −3-dB frequency. With $\lambda=0$ and $C_{db}=0$, the output node has only $R_L$ and the output side of $C_{gd}$.

### Step 1 — Transconductance and low-frequency gain

$L_{\text{eff}}=L_{\text{drwn}}-2L_d-X_d=2\ \mu\mathrm m-0.4\ \mu\mathrm m=1.6\ \mu$m, so $W/L_{\text{eff}}=62.5$. In saturation, from $I_D=\tfrac{k_n'}2\tfrac{W}{L_{\text{eff}}}V_{ov}^2$,

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V}.
$$

The low-frequency gain is $v_o/v_i=-g_mR_L=-(1.94\ \mathrm{mA/V})(5\ \mathrm{k\Omega})=-9.68$.

### Step 2 — Gate-source capacitance

$$
C_{gs}=\tfrac23WL_{\text{eff}}C_{ox}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF}.
$$

### Step 3 — Miller capacitance and input pole

$C_{gd}$ connects the gate to the drain, where the voltage is $-g_mR_L$ times the gate voltage at low frequency. The Miller approximation replaces it by a gate-to-ground capacitance

$$
C_M=C_{gd}(1+g_mR_L)=(14\ \mathrm{fF})(1+9.68)=150\ \mathrm{fF},
$$

so the gate node has $C_t=C_{gs}+C_M=74.7\ \mathrm{fF}+150\ \mathrm{fF}=224$ fF. The only resistance at the gate is $R_S$ (a MOSFET has no $r_\pi$, and no gate resistance is given), so

$$
\omega_{-3\text{dB}}=\frac1{R_SC_t}=\frac1{(10\ \mathrm{k\Omega})(224\ \mathrm{fF})}=4.46\times10^8\ \mathrm{rad/s},\qquad
f_{-3\text{dB}}=\frac{\omega_{-3\text{dB}}}{2\pi}=71.0\ \mathrm{MHz}.
$$

### Step 4 — Check against a more exact result

The Miller approximation ignores the current through $C_{gd}$ into $R_L$. The dominant-pole estimate that includes it, $1/\{R_S[C_{gs}+C_{gd}(1+g_mR_L+R_L/R_S)]\}$, gives 68.8 MHz, and the exact two-pole transfer function has its −3-dB point at 69.5 MHz. The Miller result, about 71 MHz, is within 2 % of these.
