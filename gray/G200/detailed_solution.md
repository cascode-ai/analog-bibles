# Detailed solution - G200

Find $g_m$ from the bias, the total gate capacitance from $f_T$, and the bias-dependent drain–body capacitance from the junction formula. With $\lambda=0$ and $C_{sb}=0$, the circuit is the basic common-source stage, so the zero-value resistances are $R_S$ for $C_{gs}$, the Miller resistance for $C_{gd}$ and $R_L$ for $C_{db}$. Since $C_{gd}$ is unknown, $C_{gs}=(C_{gs}+C_{gd})-C_{gd}$ is eliminated and $T_0$ is left as a function of $C_{gd}$.

### Step 1 — Gain and transconductance

With $W/L_{\text{eff}}=62.5$ and the square law,

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V}.
$$

The gate draws no current, so all of $v_i$ appears at the gate at low frequency:

$$
\frac{v_o}{v_i}=-g_mR_L=-(1.94\ \mathrm{mA/V})(5\ \mathrm{k\Omega})=-9.68 .
$$

### Step 2 — Capacitances

From $\omega_T=g_m/(C_{gs}+C_{gd})$:

$$
C_{gs}+C_{gd}=\frac{1.94\ \mathrm{mA/V}}{2\pi(3\ \mathrm{GHz})}=102.7\ \mathrm{fF}\;\Rightarrow\;C_{gs}=102.7\ \mathrm{fF}-C_{gd}.
$$

The drain junction has area $A_D=(5\ \mu\mathrm m)(100\ \mu\mathrm m)=500\ \mu\mathrm m^2$ and perimeter $P_D=100\ \mu$m, so

$$
C_{db0}=(500\ \mu\mathrm m^2)(0.4\ \mathrm{fF/\mu m^2})+(100\ \mu\mathrm m)(0.4\ \mathrm{fF/\mu m})=240\ \mathrm{fF},
\qquad
C_{db}=\frac{240\ \mathrm{fF}}{\sqrt{1+7.5\ \mathrm V/0.6\ \mathrm V}}=65.3\ \mathrm{fF}.
$$

### Step 3 — Zero-value resistances

With $v_i=0$:

- $C_{gs}$ (gate to grounded source): $R_{gs0}=R_S=10$ kΩ.
- $C_{gd}$ (gate to drain): a test current raises the gate by $i_xR_S$ and the drain by $i_xR_L+g_mR_L\cdot i_xR_S$, so
$$
R_{gd0}=R_S+R_L+g_mR_LR_S=10+5+96.8\ \mathrm{k\Omega}=111.8\ \mathrm{k\Omega}.
$$
- $C_{db}$ (drain to body, ac ground): $R_{db0}=R_L=5$ kΩ.

### Step 4 — $T_0$ and the −3-dB frequency

$$
\begin{aligned}
T_0&=R_S(102.7\ \mathrm{fF}-C_{gd})+(111.8\ \mathrm{k\Omega})C_{gd}+(5\ \mathrm{k\Omega})(65.3\ \mathrm{fF})\\
&=1.027\ \mathrm{ns}+0.327\ \mathrm{ns}+(101.8\ \mathrm{k\Omega})\,C_{gd}=1.35\ \mathrm{ns}+(101.8\ \mathrm{k\Omega})\,C_{gd},
\end{aligned}
$$
$$
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=\frac1{2\pi\bigl[1.35\ \mathrm{ns}+(101.8\ \mathrm{k\Omega})\,C_{gd}\bigr]}.
$$

| Assumed $C_{gd}$ | $T_0$ | $f_{-3\text{dB}}$ |
|---|---|---|
| 0 | 1.35 ns | 118 MHz |
| 5 fF | 1.86 ns | 85 MHz |
| 14 fF | 2.78 ns | 57 MHz |

Moving 1 fF from $C_{gs}$ to $C_{gd}$ adds about 0.1 ns to $T_0$, because $C_{gd}$ is Miller-multiplied ($R_{gd0}/R_S\approx11$). The bandwidth therefore depends strongly on the unspecified $C_{gd}$.
