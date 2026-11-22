# Detailed solution - G198

Treat the degenerated transistor as a stage with input resistance $R_i=r_\pi+(\beta+1)R_E$ and effective transconductance $G_m=\beta/R_i$. Find the midband gain with all capacitors open, then apply the zero-value time-constant method: for each capacitor compute the resistance it sees with the other capacitors open and $v_i=0$, sum the time constants to $T_0$, and estimate $\omega_{-3\text{dB}}\approx1/T_0$.

### Step 1 — Small-signal parameters

$$
g_m=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega},\qquad
C_\pi=\frac{g_m}{\omega_T}-C_\mu=10.2\ \mathrm{pF}-0.2\ \mathrm{pF}=10.0\ \mathrm{pF},
$$

where $C_\pi$ from $f_T$ already includes $C_{je}$. With degeneration,

$$
R_i=r_\pi+(\beta+1)R_E=5.2\ \mathrm{k\Omega}+201(300\ \Omega)=65.5\ \mathrm{k\Omega},\qquad
G_m=\frac{\beta}{R_i}=3.05\ \mathrm{mA/V}\approx\frac{g_m}{1+g_mR_E}.
$$

### Step 2 — Low-frequency gain

The base current is $v_i/(R_S+R_i)$ and the collector current is $\beta$ times it:

$$
\frac{v_o}{v_i}=-\frac{\beta R_L}{R_S+R_i}=-\frac{200(5\ \mathrm{k\Omega})}{75.5\ \mathrm{k\Omega}}=-13.2 .
$$

### Step 3 — Zero-value time constants

- $C_\pi$ (base to emitter): it sees $r_\pi$ in parallel with the resistance between base and emitter through the external path. A test current through $C_\pi$ sees $R_S$ on the base side and $R_E$ on the emitter side, with the $g_m$ source feeding back through $R_E$, giving
$$
R_{\pi0}=r_\pi\parallel\frac{R_S+R_E}{1+g_mR_E}=5.2\ \mathrm{k\Omega}\parallel821\ \Omega=709\ \Omega .
$$
- $C_\mu$ (base to collector): the base sees $R_1=R_S\parallel R_i=8.68$ kΩ; the test current raises the base by $i_xR_1$ and the collector by $i_xR_L+G_mR_L\cdot i_xR_1$:
$$
R_{\mu0}=R_1+R_L+G_mR_LR_1=8.68+5+132.4\ \mathrm{k\Omega}=146\ \mathrm{k\Omega}.
$$
- $C_{cs}$ (collector to ground): it sees $R_L=5$ kΩ, since the transistor's collector is an ideal current source with $r_o=\infty$.

| Capacitor | Resistance | Time constant |
|---|---|---|
| $C_\pi=10.0$ pF | 709 Ω | 7.1 ns |
| $C_\mu=0.2$ pF | 146 kΩ | 29.2 ns |
| $C_{cs}=1$ pF | 5 kΩ | 5.0 ns |

### Step 4 — −3-dB frequency

$$
T_0=7.1+29.2+5.0\ \mathrm{ns}=41.3\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=3.85\ \mathrm{MHz}.
$$

An exact nodal analysis gives 3.97 MHz. Compared with the undegenerated stage (gain −65.8, about 0.92 MHz), the 300-Ω emitter resistor cuts the gain by about 5 and raises the bandwidth by about 4, because it lowers both $G_m$ (and hence the Miller term in $R_{\mu0}$) and the resistance seen by $C_\pi$.
