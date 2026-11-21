# Detailed solution - G195

Model the transistor with $g_m$, $C_{gs}$ and $C_{gd}$ ($\gamma=0$ removes $g_{mb}$; $\lambda=0$ removes $r_o$; $C_{sb}=C_{db}=0$). The gate and the drain are both at ac ground, so only the source node carries a signal voltage; KCL there gives the current gain directly.

### Step 1 — Device parameters

With $W/L_{\text{eff}}=62.5$ and the square law,

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF}.
$$

### Step 2 — Current gain

With the gate grounded, $v_{gs}=-v_s$. The current $i_i$ entering the source node, plus the channel current $g_mv_{gs}$ flowing from drain to source, leaves through $C_{gs}$ to the grounded gate:

$$
i_i+g_mv_{gs}=sC_{gs}v_s=-sC_{gs}v_{gs}
\;\Rightarrow\;
i_i=-v_{gs}(g_m+sC_{gs}).
$$

The drain delivers $i_o=-g_mv_{gs}$ to the shorted load, so

$$
\frac{i_o}{i_i}=\frac{g_m}{g_m+sC_{gs}}=\frac1{1+sC_{gs}/g_m}.
$$

$C_{gd}$ connects the gate to the drain, both at ac ground, so it carries no current and there is no Miller effect.

### Step 3 — −3-dB frequency

The low-frequency gain is exactly 1 (no gate current, unlike the bipolar $\alpha_0$). The single pole gives

$$
\omega_{-3\text{dB}}=\frac{g_m}{C_{gs}}=\frac{1.94\ \mathrm{mA/V}}{74.7\ \mathrm{fF}}=2.59\times10^{10}\ \mathrm{rad/s},\qquad
f_{-3\text{dB}}=\frac{\omega_{-3\text{dB}}}{2\pi}=4.1\ \mathrm{GHz}.
$$

This is slightly above the device $f_T=g_m/[2\pi(C_{gs}+C_{gd})]=3.5$ GHz, because $C_{gd}$ plays no part in this configuration.
