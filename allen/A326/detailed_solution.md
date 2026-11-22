# Detailed solution - A326

Replace the current amplifier and the follower by their small-signal models, write KCL at the three nodes — the current-amplifier input N, its output O (gate of M12) and the output — and solve. The second $R_1$ closes a loop from the output back to N, so every result must include this feedback. Since $C_o$ is the only capacitance, the circuit has a single pole, set by the resistance that $C_o$ sees.

### Step 1 — Small-signal models

With $g_m=\sqrt{2K'(W/L)I_D}$ in saturation:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(200)(1\ \mathrm{mA})}=6.63\ \mathrm{mS},\qquad
g_{m12}=\sqrt{2(110\ \mu\mathrm{A/V^2})(20)(100\ \mu\mathrm A)}=663\ \mu\mathrm S .
$$

- The current amplifier presents the input resistance $r_i=R_3+1/g_{m1}=300\ \Omega+151\ \Omega=451\ \Omega$ from N to ground (the diode-like M1 sets $1/g_{m1}$; M3, whose gate is at N, adds nothing).
- Its input current $i=v_N/r_i$ is copied with gain $A_o=0.1$ and sunk from node O; $R_2$ connects N to O, and $C_o$ loads O.
- The follower M12 delivers $g_{m12}(v_O-v_{out})$ into the output node (body effect and $r_{ds}$ neglected).

### Step 2 — Node equations

With $v_{in}$ at the first $R_1$ and the second $R_1$ from the output to N, and a test current $i_t$ allowed into the output node:

$$
\begin{aligned}
\text{N:}\quad&\frac{v_{in}-v_N}{R_1}+\frac{v_{out}-v_N}{R_1}+\frac{v_O-v_N}{R_2}=\frac{v_N}{r_i},\\
\text{O:}\quad&\frac{v_N-v_O}{R_2}=\frac{A_o}{r_i}v_N+sC_ov_O,\\
\text{out:}\quad&g_{m12}(v_O-v_{out})+i_t=\frac{v_{out}-v_N}{R_1}.
\end{aligned}
$$

At dc the O equation gives $v_O=v_N(1-A_oR_2/r_i)=v_N\bigl(1-0.1\cdot352\ \mathrm{k\Omega}/451\ \Omega\bigr)=-77.1\,v_N$: the current amplifier with $R_2$ inverts and amplifies the voltage at N.

### Step 3 — DC gain and input resistance ($i_t=0$)

The output equation with $v_O=-77.1\,v_N$ gives

$$
v_{out}=\frac{g_{m12}v_O+v_N/R_1}{g_{m12}+1/R_1}
=\frac{(-77.1)(0.663\ \mathrm{mS})+1\ \mathrm{mS}}{1.663\ \mathrm{mS}}\,v_N=-30.2\,v_N .
$$

Substituting into the N equation, each branch contributes a conductance multiplied by its voltage ratio:

$$
\frac{v_{in}}{R_1}=v_N\Bigl[\frac1{R_1}+\frac{1+30.2}{R_1}+\frac{1+77.1}{R_2}+\frac1{r_i}\Bigr]
=v_N\,(1+31.2+0.22+2.22)\ \mathrm{mS}=v_N\,(34.6\ \mathrm{mS}),
$$

so $v_N/v_{in}=0.0289$ and the dc gain is

$$
\frac{v_{out}}{v_{in}}=(-30.2)(0.0289)=-0.872\ \mathrm{V/V}.
$$

The feedback makes N a low-impedance node: excluding the input $R_1$, its conductance is $33.6$ mS, i.e. about 30 Ω. The input resistance is therefore

$$
R_{in}=\frac{v_{in}}{(v_{in}-v_N)/R_1}=\frac{R_1}{1-0.0289}=1.03\ \mathrm{k\Omega}.
$$

### Step 4 — Output resistance ($v_{in}=0$)

Drive the output with $i_t$ and solve the same equations at dc. With $v_{in}=0$ the first $R_1$ goes to ground, and the solution is

$$
v_N=0.225\,v_{out},\qquad v_O=-77.1\,v_N=-17.4\,v_{out}.
$$

The output equation then gives

$$
i_t=g_{m12}(v_{out}-v_O)+\frac{v_{out}-v_N}{R_1}
=v_{out}\Bigl[(0.663\ \mathrm{mS})(18.4)+\frac{0.775}{1\ \mathrm{k\Omega}}\Bigr]=v_{out}\,(12.96\ \mathrm{mS}),
$$
$$
R_{out}=\frac{v_{out}}{i_t}=77\ \Omega .
$$

Without the loop the output would see only $1/g_{m12}=1.5\ \mathrm{k\Omega}$; the feedback through the second $R_1$ and the current amplifier lowers it by a factor of about 20.

### Step 5 — The −3 dB frequency

With one capacitor, the pole is $p=-1/(R_OC_o)$, where $R_O$ is the resistance seen by $C_o$ with $v_{in}=0$. Apply a test voltage $v_O$ at node O. The output node gives $v_{out}=0.399\,v_O+0.601\,v_N$, and the N equation then yields $v_N=0.111\,v_O$. The test current into O is

$$
\frac{v_O-v_N}{R_2}+\frac{A_o}{r_i}v_N=v_O\Bigl[\frac{0.889}{352\ \mathrm{k\Omega}}+\frac{0.1(0.111)}{451\ \Omega}\Bigr]=v_O\,(27.1\ \mu\mathrm S),
$$

so $R_O=36.8\ \mathrm{k\Omega}$, about $R_2/9.6$. Then

$$
|p|=\frac1{R_OC_o}=\frac1{(36.8\ \mathrm{k\Omega})(105\ \mathrm{fF})}=2.58\times10^8\ \mathrm{rad/s},\qquad
f_{-3\,dB}\approx\frac{2.58\times10^8}{2\pi}=41\ \mathrm{MHz}.
$$

Without the second $R_1$ the pole would be the open-loop value $(1+A_o)/(R_2C_o)=29.8\times10^6$ rad/s (4.7 MHz); the loop widens it by a factor of about 8.7.

Solving the full equations with $s$ gives

$$
\frac{v_{out}}{v_{in}}=-0.872\,\frac{1-s/1.36\times10^9}{1+s/2.58\times10^8}.
$$

The right-half-plane zero at 216 MHz comes from the direct path from $v_{in}$ through the two $R_1$ resistors into the follower's finite output resistance. Because it is five times above the pole, it shifts the exact half-power frequency only slightly, to 42.7 MHz; the dominant-pole value 41 MHz is the −3 dB frequency to first order.

| Quantity | Value |
|---|---|
| $R_{in}$ | 1.03 kΩ |
| $R_{out}$ | 77 Ω |
| $f_{-3\,dB}$ | ≈ 41 MHz (pole $2.58\times10^8$ rad/s) |
| dc gain | −0.872 V/V |
