# Detailed solution - G216

Unlike a bipolar Darlington, the MOS version has no base current to multiply: the gates draw no current. Examine what $M_1$ does at low frequency, then compute the gain of $M_2$.

### Step 1 — Transconductances

With $W/L_{\text{eff}}=62.5$ and $g_m=\sqrt{2k_n'(W/L)I_D}$:

$$
g_{m1}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(50\ \mu\mathrm A)}=0.612\ \mathrm{mA/V},\qquad
g_{m2}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(1\ \mathrm{mA})}=2.74\ \mathrm{mA/V}.
$$

### Step 2 — Role of $M_1$

The source of $M_1$ is loaded only by the gate of $M_2$ (no current), the ideal bias current source (no small-signal effect) and nothing else ($\lambda=0$, $\gamma=0$, capacitances ignored at low frequency). KCL at that node therefore requires $M_1$'s small-signal drain current to be zero:

$$
g_{m1}v_{gs1}=0\;\Rightarrow\;v_{gs1}=0 .
$$

$M_1$ is a source follower with unity gain: its source, the gate of $M_2$, follows its gate, and since no gate current flows, no current flows in $R_S$, so $v_{g2}=v_i$. $M_1$ contributes no signal current to the output.

### Step 3 — Gain

Only $M_2$ delivers signal current to $R_L$:

$$
\frac{v_o}{v_i}=-g_{m2}R_L=-(2.74\ \mathrm{mA/V})(3\ \mathrm{k\Omega})=-8.22 .
$$

The "Darlington" connection gives no current multiplication in MOS; at low frequency it is equivalent to driving $M_2$ directly, the follower only adding a level shift.
