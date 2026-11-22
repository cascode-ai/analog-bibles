# Detailed solution - G231

Use the hybrid-π model of $Q_1$. Unlike the MOS gate, the base draws signal current through $r_\pi$, so $R_S$ and $r_\pi$ form an input divider; the gain is that divider times $-g_mR_L$.

### Step 1 — Small-signal parameters

In the forward-active region $I_C=I_Se^{V_{BE}/V_T}$, so $g_m=\partial I_C/\partial V_{BE}=I_C/V_T$, and $r_\pi=\beta/g_m$:

$$
g_m=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.46\ \mathrm{mA/V},\qquad
r_\pi=\frac{100}{38.46\ \mathrm{mA/V}}=2.6\ \mathrm{k\Omega}.
$$

With $r_b=0$ the source sees $r_\pi$ directly at the base, and with $r_o=\infty$ the collector current flows entirely into $R_L$.

### Step 2 — Input divider and voltage gain

The source current flows through $R_S$ into $r_\pi$, so the controlling voltage is

$$
v_{be}=v_i\,\frac{r_\pi}{R_S+r_\pi}=v_i\,\frac{2.6\ \mathrm{k\Omega}}{5\ \mathrm{k\Omega}+2.6\ \mathrm{k\Omega}}=0.342\,v_i .
$$

The collector current $g_mv_{be}$ flows into the collector, out of $R_L$'s top node, so $v_o=-g_mv_{be}R_L$:

$$
\frac{v_o}{v_i}=-g_mR_L\,\frac{r_\pi}{R_S+r_\pi}=-(38.46\ \mathrm{mA/V})(3\ \mathrm{k\Omega})(0.342)=-115.4\times0.342=-39.5 .
$$

Because $r_\pi$ is comparable to $R_S$, the input divider costs about a factor of three relative to the intrinsic $-g_mR_L=-115.4$.
