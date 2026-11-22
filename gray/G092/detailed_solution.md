# Detailed solution - G092

Design the input side first: constraints (i) and (ii) fix $(W/L)_1$ and then $R_1$. In a Widlar source the gate–source voltages of the two transistors differ by the drop across $R_2$, which links $V_{ov2}$ to $R_2$. That relation shows that constraint (iii) is met automatically. Constraint (iv) then fixes how the overdrive of $V_{ov1}$ is split between $R_2$ and $V_{ov2}$, which in turn sets $R_2$ and $(W/L)_2$.

### Step 1 — Input transistor $M_1$ and $R_1$

From the square law in saturation, $I_D=\tfrac{k'}2(W/L)V_{ov}^2$:

$$
\left(\frac WL\right)_1=\frac{2I_{IN}}{k'V_{ov1}^2}=\frac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=25.8 .
$$

$M_1$ is diode-connected with $V_{GS1}=V_t+V_{ov1}=0.8$ V, so $R_1$ must drop the rest of the supply:

$$
R_1=\frac{V_{DD}-V_{GS1}}{I_{IN}}=\frac{3\ \mathrm V-0.8\ \mathrm V}{100\ \mu\mathrm A}=22\ \mathrm{k\Omega}.
$$

### Step 2 — The Widlar relation

The gates are common and the source of $M_1$ is grounded, so KVL gives $V_{GS1}=V_{GS2}+I_{OUT}R_2$. Both devices have the same $V_t$ (no body effect), so

$$
V_{ov2}=V_{ov1}-I_{OUT}R_2 .
$$

### Step 3 — Constraint (iii)

$M_2$ is in the active region when its drain is at least $V_{ov2}$ above its source, which sits at $I_{OUT}R_2$. The minimum drain voltage is therefore

$$
V_{D2,\min}=I_{OUT}R_2+V_{ov2}=V_{ov1}=0.2\ \mathrm V .
$$

Constraint (iii) is satisfied for any choice of $R_2$, as a consequence of (ii).

### Step 4 — Constraint (iv): split the overdrive

$M_2$ is a common-source device with source degeneration $R_2$ and a gate held by the diode node, so

$$
R_o=r_{o2}(1+g_{m2}R_2)+R_2,\qquad r_{o2}=\frac1{\lambda I_{OUT}}=\frac1{(0.02\ \mathrm{V^{-1}})(10\ \mu\mathrm A)}=5\ \mathrm{M\Omega}.
$$

Using $g_{m2}=2I_{OUT}/V_{ov2}$ and Step 2,

$$
g_{m2}R_2=\frac{2I_{OUT}}{V_{ov2}}\cdot\frac{V_{ov1}-V_{ov2}}{I_{OUT}}=\frac{2(V_{ov1}-V_{ov2})}{V_{ov2}} .
$$

$R_2$ is only about 16 kΩ, negligible beside 50 MΩ. So $R_o=50\ \mathrm{M\Omega}$ needs $1+g_{m2}R_2\approx10$, that is $g_{m2}R_2\approx9$:

$$
\frac{2(0.2\ \mathrm V-V_{ov2})}{V_{ov2}}=9\quad\Rightarrow\quad V_{ov2}=\frac{0.4\ \mathrm V}{11}=0.0364\ \mathrm V .
$$

Solving the full expression including the $+R_2$ term gives the same 36.4 mV.

### Step 5 — $R_2$ and $(W/L)_2$

$$
R_2=\frac{V_{ov1}-V_{ov2}}{I_{OUT}}=\frac{0.2\ \mathrm V-0.0364\ \mathrm V}{10\ \mu\mathrm A}=16.4\ \mathrm{k\Omega},
$$

$$
\left(\frac WL\right)_2=\frac{2I_{OUT}}{k'V_{ov2}^2}=\frac{2(10\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.0364\ \mathrm V)^2}=78 .
$$

The design is $(W/L)_1=25.8$, $R_1=22\ \mathrm{k\Omega}$, $R_2=16.4\ \mathrm{k\Omega}$ and $(W/L)_2=78$ (with $L=1\ \mu\mathrm m$, $W_1=25.8\ \mu\mathrm m$ and $W_2=78\ \mu\mathrm m$). Check: $R_o=(5\ \mathrm{M\Omega})(1+9.0)+16.4\ \mathrm{k\Omega}=50\ \mathrm{M\Omega}$.

An overdrive of 36 mV is below about $2nV_T\approx80$ mV, so $M_2$ actually operates in moderate or weak inversion. The square-law sizing of $M_2$ is therefore only approximate, and a real design would adjust $(W/L)_2$ in simulation.
