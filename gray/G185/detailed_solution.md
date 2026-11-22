# Detailed solution - G185

The small-signal circuit has two capacitors, $C_{gs}$ and $C_{gd}$ ($C_{db}=C_{sb}=0$), so the gain has two poles. Write the node equations, read the coefficients of the second-order denominator, and use the widely-separated-pole approximation $|p_2|\approx a_1/a_2$, checking it against the exact roots.

### Step 1 — Device parameters

From the given geometry, $L_{\text{eff}}=1.6\ \mu$m and $W/L_{\text{eff}}=62.5$, so

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$
$$
C_{gs}=\tfrac23WL_{\text{eff}}C_{ox}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

### Step 2 — Transfer function

KCL at the gate (voltage $v_g$) and at the drain (voltage $v_o$):

$$
\frac{v_i-v_g}{R_S}=sC_{gs}v_g+sC_{gd}(v_g-v_o),\qquad
sC_{gd}(v_g-v_o)=g_mv_g+\frac{v_o}{R_L}.
$$

Eliminating $v_g$ gives

$$
\frac{v_o}{v_i}=\frac{-g_mR_L\,(1-sC_{gd}/g_m)}{1+a_1s+a_2s^2},
$$
$$
a_1=R_S\bigl[C_{gs}+C_{gd}(1+g_mR_L)\bigr]+R_LC_{gd},\qquad a_2=R_SR_LC_{gs}C_{gd}.
$$

Numerically $a_1=2.31\times10^{-9}$ s and $a_2=5.23\times10^{-20}\ \mathrm s^2$.

### Step 3 — Nondominant pole

If $|p_1|\ll|p_2|$, then $1+a_1s+a_2s^2\approx(1+s/|p_1|)(1+s/|p_2|)$ with $|p_1|\approx1/a_1$ and $|p_1||p_2|=1/a_2$, so

$$
|p_2|\approx\frac{a_1}{a_2}=\frac1{R_LC_{gd}}+\frac1{R_SC_{gs}}+\frac1{R_LC_{gs}}+\frac{g_m}{C_{gs}} .
$$

| Term | Value (rad/s) |
|---|---|
| $1/(R_LC_{gd})=1/[(5\ \mathrm{k\Omega})(14\ \mathrm{fF})]$ | $1.43\times10^{10}$ |
| $1/(R_SC_{gs})$ | $1.34\times10^{9}$ |
| $1/(R_LC_{gs})$ | $2.68\times10^{9}$ |
| $g_m/C_{gs}=(1.94\ \mathrm{mA/V})/(74.7\ \mathrm{fF})$ | $2.59\times10^{10}$ |

$$
|p_2|\approx4.42\times10^{10}\ \mathrm{rad/s},\qquad f_2=\frac{|p_2|}{2\pi}=7.04\ \mathrm{GHz}.
$$

### Step 4 — Check of the approximation

The dominant pole is $|p_1|\approx1/a_1=4.32\times10^8$ rad/s (69 MHz), a factor of about 100 below $|p_2|$, so the separation assumed in Step 3 holds. The exact roots of $1+a_1s+a_2s^2$ are $4.37\times10^8$ and $4.38\times10^{10}$ rad/s, so the nondominant pole is $|p_2|\approx4.4\times10^{10}$ rad/s, about 7.0 GHz. It lies above $\omega_T=g_m/(C_{gs}+C_{gd})=2.18\times10^{10}$ rad/s, mainly because of the $g_m/C_{gs}$ and $1/(R_LC_{gd})$ terms.
