# Detailed solution - G217

$M_1$ is a source follower whose only load is the gate of $M_2$ and an ideal bias current source. Determine its low-frequency gain from KCL at its source, then the gain of the common-source stage $M_2$.

### Step 1 — Transconductance of $M_2$

With $W/L_{\text{eff}}=62.5$,

$$
g_{m2}=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_{D2}}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(1\ \mathrm{mA})}=2.74\ \mathrm{mA/V}.
$$

### Step 2 — The follower $M_1$

At $M_1$'s source the gate of $M_2$ draws no current, the bias source is ideal, and $\lambda=\gamma=0$. KCL there forces $M_1$'s signal drain current to zero, $g_{m1}v_{gs1}=0$, so $v_{gs1}=0$: the source follows the gate with unity gain. No gate current flows, so $R_S$ carries no signal current and the gate of $M_2$ is at $v_{g2}=v_i$. $M_1$'s drain is at ac ground, so it would not reach the output in any case.

### Step 3 — Gain

$$
\frac{v_o}{v_i}=-g_{m2}R_L=-(2.74\ \mathrm{mA/V})(3\ \mathrm{k\Omega})=-8.22 .
$$

At low frequency the result is identical to the MOS "Darlington", because $M_1$ carries no signal current in either connection; the two circuits differ only at high frequency, where the location of $M_1$'s drain decides whether $C_{gd1}$ is Miller-multiplied.
