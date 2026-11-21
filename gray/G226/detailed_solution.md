# Detailed solution - G226

At low frequency the gate draws no current, so the whole input appears across gate and source; the gain is the transconductance times the load.

### Step 1 — Transconductance at the given bias

The device is in saturation with $\lambda=0$, so the square law $I_D=\tfrac12k_n'(W/L)V_{ov}^2$ gives $g_m=\partial I_D/\partial V_{GS}=\sqrt{2k_n'(W/L)I_D}$. With $W/L=100/1.6=62.5$:

$$
g_m=\sqrt{2\left(60\ \mu\mathrm{A/V^2}\right)(62.5)(0.5\ \mathrm{mA})}=\sqrt{3.75\ \mathrm{(mA/V)^2}}=1.936\ \mathrm{mA/V}.
$$

### Step 2 — Low-frequency gain

With capacitances neglected, no current flows in $R_S$, so $v_{gs}=v_i$. Because $\lambda=0$, $r_o\to\infty$ and the drain current $g_mv_{gs}$ flows entirely through $R_L$, pulling the output down:

$$
\frac{v_o}{v_i}=-g_mR_L=-(1.936\ \mathrm{mA/V})(20\ \mathrm{k\Omega})=-38.7 .
$$

$R_S$ does not affect the low-frequency gain; it matters only once the gate capacitances are included.
