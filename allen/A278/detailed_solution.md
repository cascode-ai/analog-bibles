# Detailed solution - A278

The zero of the $R_z$–$C_c$ branch moves into the left half-plane when $R_z>1/g_{m6A}$; placing it exactly on $p_2$ fixes the required $R_z$. Because $R_z$ is realized by the diode-connected M6B, $R_z=1/g_{m6B}$, and both $g_{m6B}$ and $g_{m6A}$ are square-law p-channel transconductances, the condition becomes a ratio of aspect ratios, currents and capacitors. The design then follows by substitution. All transistors are saturated with $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$.

### Step 1 — Cancellation condition on $R_z$

Set the zero equal to the output pole:

$$
z_1=-\frac1{C_c(R_z-1/g_{m6A})}=p_2=-\frac{g_{m6A}}{C_L}
\;\Rightarrow\;
R_z-\frac1{g_{m6A}}=\frac{C_L}{g_{m6A}C_c}
\;\Rightarrow\;
R_z=\frac1{g_{m6A}}\cdot\frac{C_c+C_L}{C_c}.
$$

$R_z$ exceeds $1/g_{m6A}$, so the zero lies in the left half-plane.

### Step 2 — Sizing law for M6B

M6B carries $I_8$ (M8 pulls it through M6B; M11 returns the same current to the first-stage node, so no dc current is taken from the first stage), and M6A carries $I_6$. With $g_m=\sqrt{2K'_P(W/L)I_D}$ and $R_z=1/g_{m6B}$, Step 1 reads $g_{m6A}/g_{m6B}=(C_c+C_L)/C_c$. Squaring:

$$
\frac{(W_{6A}/L_{6A})I_6}{(W_{6B}/L_{6B})I_8}=\left(\frac{C_c+C_L}{C_c}\right)^2
\;\Rightarrow\;
\frac{W_{6B}}{L_{6B}}=\frac{W_{6A}}{L_{6A}}\cdot\frac{I_6}{I_8}\left(\frac{C_c}{C_c+C_L}\right)^2 .
$$

Since $K'_P$ cancels, the zero tracks $p_2$ over process and temperature.

### Step 3 — Design of M6B, M8 and M9

With $W_{6A}/L_{6A}=94$, $I_6=I_7=95$ µA, $I_8=15$ µA, $C_c=3$ pF and $C_L=10$ pF:

$$
\frac{W_{6B}}{L_{6B}}=94\cdot\frac{95\ \mu\mathrm A}{15\ \mu\mathrm A}\left(\frac{3\ \mathrm{pF}}{13\ \mathrm{pF}}\right)^2=31.7\approx32\ (32\ \mu\mathrm m/1\ \mu\mathrm m).
$$

M8 and M9 share $V_{BIAS}$ with M5 (4.5/1 at 30 µA), so their aspect ratios scale with current:

$$
\frac{W_8}{L_8}=\frac{W_9}{L_9}=4.5\cdot\frac{15\ \mu\mathrm A}{30\ \mu\mathrm A}=2.25\quad(2.25\ \mu\mathrm m/1\ \mu\mathrm m).
$$

M10 and M11 are made equal (any convenient size), so $I_{11}=I_{10}=I_9=I_8=15$ µA.

### Step 4 — Resulting $R_z$ and pole–zero check

$$
g_{m6B}=\sqrt{2(50\ \mu\mathrm{A/V^2})(31.7)(15\ \mu\mathrm A)}=218\ \mu\mathrm S,\qquad R_z=\frac1{g_{m6B}}=4.59\ \mathrm{k\Omega},
$$
$$
g_{m6A}=\sqrt{2(50\ \mu\mathrm{A/V^2})(94)(95\ \mu\mathrm A)}=945\ \mu\mathrm S\quad(1/g_{m6A}=1.06\ \mathrm{k\Omega}).
$$

$$
\begin{aligned}
p_2&=-\frac{g_{m6A}}{C_L}=-\frac{945\ \mu\mathrm S}{10\ \mathrm{pF}}=-9.45\times10^7\ \mathrm{rad/s}\ (-15.0\ \mathrm{MHz}),\\
z_1&=-\frac1{(3\ \mathrm{pF})(4.59\ \mathrm{k\Omega}-1.06\ \mathrm{k\Omega})}=-9.45\times10^7\ \mathrm{rad/s}\ (-15.0\ \mathrm{MHz}).
\end{aligned}
$$

The zero sits on the output pole. With the size rounded to 32/1, $R_z=4.56$ kΩ and $z_1=-15.1$ MHz, still essentially on $p_2$. M6B operates at $V_{SG6B}=0.7\ \mathrm V+\sqrt{2(15\ \mu\mathrm A)/[(50\ \mu\mathrm{A/V^2})(31.7)]}=0.84$ V.
