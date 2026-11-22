# Detailed solution - A325

The input pole is $1/(R_NC_N)$, where $R_N$ is the small-signal resistance from the summing node (where $R_1$, $R_2$ and $R_3$ meet) to ground and $C_N$ is the total capacitance on that node. Find $R_N$ from the current amplifier's input resistance and the two external resistors, add the device capacitances connected to the node, and compare the result with the pole formed by $R_2$ and $C_o$.

### Step 1 — Input resistance of the current amplifier

A signal current entering the summing node through $R_3$ reaches the drain of M3, which is also the gate of M1 and M2. M1 carries this current as a diode-connected device would, so the node M3-drain sees about $1/g_{m1}$. The gate of M3 is tied to the summing node itself, so M3 moves with the input and adds no resistance of its own. With the saturation-region transconductance $g_m=\sqrt{2K'(W/L)I_D}$:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(200)(1\ \mathrm{mA})}=6.63\ \mathrm{mS},\qquad
r_i=R_3+\frac1{g_{m1}}=300\ \Omega+151\ \Omega=451\ \Omega .
$$

### Step 2 — Total resistance at the summing node

For the input pole the input source is a short to ground, so $R_1$ goes to ground. $R_2$ goes to the output of the current amplifier, whose capacitance $C_o$ is a near short at the frequency of the input pole, so $R_2$ is also taken to ground. The output resistances of M3 and M5 ($\sim$ tens of kΩ) are negligible in parallel. Hence

$$
R_N=r_i\parallel R_1\parallel R_2=451\ \Omega\parallel3.2\ \mathrm{k\Omega}\parallel352\ \mathrm{k\Omega}\approx395\ \Omega .
$$

### Step 3 — Capacitance at the summing node

The node connects the gates of M3 and M4 and the drain of M5. In saturation, $C_{gs}=CGSO\cdot W+\tfrac23C_{ox}WL$ and $C_{gd}=CGDO\cdot W$; a zero-bias drain junction gives $C_{bd}=CJ\cdot AD+CJSW\cdot PD$ with $AD=(2\ \mu\mathrm m)W$ and $PD=2(W+2\ \mu\mathrm m)$. For M3 ($W=200\ \mu$m):

$$
C_{gs3}=(220\ \mathrm{pF/m})(200\ \mu\mathrm m)+0.67(24.7\times10^{-4}\ \mathrm{F/m^2})(200\times10^{-12}\ \mathrm{m^2})=44+331=375\ \mathrm{fF}.
$$

For the p-channel M5 ($W=200\ \mu$m, $AD=400\times10^{-12}\ \mathrm{m^2}$, $PD=404\ \mu$m):

$$
C_{bd5}=(560\ \mu\mathrm{F/m^2})(400\times10^{-12}\ \mathrm{m^2})+(350\ \mathrm{pF/m})(404\ \mu\mathrm m)=224+141=365\ \mathrm{fF}.
$$

The remaining terms follow the same formulas (M4 is one tenth the width of M3):

| Capacitance | Value (fF) |
|---|---|
| $C_{gs3}$ | 375 |
| $C_{gs4}$ | 37.5 |
| $C_{gd3}$ | 44 |
| $C_{gd4}$ | 4.4 |
| $C_{gd5}$ | 44 |
| $C_{bd5}$ | 365 |
| $C_N$ | ≈ 870 |

$C_{gs3}$ and the drain junction of M5 dominate.

### Step 4 — Input pole

$$
p_{in}=-\frac1{R_NC_N}=-\frac1{(395\ \Omega)(870\ \mathrm{fF})}=-2.91\times10^9\ \mathrm{rad/s}\quad(463\ \mathrm{MHz}).
$$

If $r_i$ alone is used for the node resistance, $|p_{in}|=1/[(451\ \Omega)(870\ \mathrm{fF})]=2.55\times10^9$ rad/s (406 MHz); the conclusion below is the same.

### Step 5 — Output pole and comparison

At the current amplifier's output, $R_2$ is the dominant resistance in parallel with $C_o$:

$$
\frac1{R_2C_o}=\frac1{(352\ \mathrm{k\Omega})(105\ \mathrm{fF})}=27.1\times10^6\ \mathrm{rad/s}.
$$

With the current feedback through $R_2$ closed, the loop gain $A_o$ raises it to

$$
|p_{out}|=\frac{1+A_o}{R_2C_o}=(1.1)(27.1\times10^6\ \mathrm{rad/s})=29.8\times10^6\ \mathrm{rad/s}\quad(4.7\ \mathrm{MHz}).
$$

So $|p_{in}|/|p_{out}|\approx2.91\times10^9/29.8\times10^6\approx100$: the output pole is dominant and the input pole lies far above it, and also about 9 times above the intended 50 MHz bandwidth. The input pole is, however, below the intended GB of 500 MHz, so it would limit the GB if the amplifier were pushed to that target.
