# Detailed solution - G022

$f_T$ is defined with the drain shorted to the source for ac (source and body grounded), and the gate driven by a current. The input current then charges all capacitance from the gate to the ac-grounded terminals, while the output current is $g_mv_{gs}$. Compute that total capacitance once, since it does not depend on $V_{GS}$ in the active region, and $g_m$ at each bias.

### Step 1 — Expression for $f_T$

With D, S and B at ac ground, the gate sees $C_{gs}$, $C_{gd}$ and $C_{gb}$ in parallel, so $i_{in}=j\omega(C_{gs}+C_{gd}+C_{gb})v_{gs}$ and $i_{out}=g_mv_{gs}$ (the current through $C_{gd}$ is negligible near $f_T$). Setting $|i_{out}/i_{in}|=1$:

$$
f_T=\frac{g_m}{2\pi(C_{gs}+C_{gd}+C_{gb})}.
$$

### Step 2 — Gate capacitances

$C_{ox}=\epsilon_{ox}/t_{ox}=(3.45\times10^{-13}\ \mathrm{F/cm})/(80\times10^{-8}\ \mathrm{cm})=4.31\ \mathrm{fF/\mu m^2}$. With $V_{DS}=3$ V larger than every overdrive considered (at most 1.4 V), the device is in the active region, where the channel contributes $\tfrac23WLC_{ox}$ to $C_{gs}$ and only the overlap remains in $C_{gd}$:

$$
C_{gs}=\frac23(10\ \mu\mathrm m^2)(4.31\ \mathrm{fF/\mu m^2})+2\ \mathrm{fF}=30.75\ \mathrm{fF},\qquad
C_{gs}+C_{gd}+C_{gb}=30.75+2+5=37.75\ \mathrm{fF}.
$$

### Step 3 — Transconductance and $f_T$ at each $V_{GS}$

With $V_{SB}=0$, $V_t=0.6$ V, and in the active region

$$
g_m=k'\frac WL(V_{GS}-V_t)(1+\lambda V_{DS})=(1.94\ \mathrm{mA/V^2})V_{ov}(1.072).
$$

At $V_{GS}=1$ V ($V_{ov}=0.4$ V): $g_m=0.832$ mA/V and

$$
f_T=\frac{0.832\ \mathrm{mA/V}}{2\pi(37.75\ \mathrm{fF})}=3.51\ \mathrm{GHz}.
$$

| $V_{GS}$ (V) | $V_{ov}$ (V) | $g_m$ (mA/V) | $f_T$ (GHz) | $f_T$ without $1+\lambda V_{DS}$ (GHz) |
|---|---|---|---|---|
| 1 | 0.4 | 0.832 | 3.51 | 3.27 |
| 1.5 | 0.9 | 1.87 | 7.89 | 7.36 |
| 2 | 1.4 | 2.91 | 12.3 | 11.5 |

Because the capacitance is fixed and $g_m\propto V_{ov}$ in the square-law model, $f_T$ grows in proportion to the overdrive.
