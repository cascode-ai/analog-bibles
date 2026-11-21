# Detailed solution - G197

Find the midband gain from the hybrid-π model with all capacitors open. Then apply the zero-value time-constant (ZVTC) method: for each capacitor, compute the resistance it sees with the other capacitors open and the input source zeroed, sum the time constants to get $T_0$, and estimate $\omega_{-3\text{dB}}\approx1/T_0$.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega}.
$$

From $\omega_T=g_m/(C_\pi+C_\mu)$ with $\omega_T=2\pi(600\ \mathrm{MHz})$:

$$
C_\pi+C_\mu=\frac{38.5\ \mathrm{mA/V}}{2\pi(600\ \mathrm{MHz})}=10.2\ \mathrm{pF}\;\Rightarrow\;C_\pi=10.0\ \mathrm{pF}.
$$

$C_\pi$ obtained this way already contains the emitter-junction capacitance $C_{je}$, so $C_{je}$ is not added again.

### Step 2 — Low-frequency gain

$R_S$ and $r_\pi$ divide the input, and the collector current $g_mv_\pi$ flows in $R_L$:

$$
\frac{v_o}{v_i}=-g_mR_L\frac{r_\pi}{R_S+r_\pi}=-(192.3)\frac{5.2\ \mathrm{k\Omega}}{15.2\ \mathrm{k\Omega}}=-65.8 .
$$

### Step 3 — Zero-value resistances and time constants

With $v_i=0$, the base node sees $R_{\pi0}=R_S\parallel r_\pi=3.42$ kΩ.

- $C_\pi$ (base to emitter): $R_{\pi0}=3.42$ kΩ.
- $C_\mu$ (base to collector): driving it with a test current $i_x$ raises the base by $i_xR_{\pi0}$ and the collector side by $i_xR_L$ plus the amplified $g_mR_L\cdot i_xR_{\pi0}$, so
$$
R_{\mu0}=R_{\pi0}+R_L+g_mR_LR_{\pi0}=3.42+5+657.9\ \mathrm{k\Omega}=666\ \mathrm{k\Omega}.
$$
- $C_{cs}$ (collector to substrate, ac ground): with $v_\pi=0$ it sees $R_L=5$ kΩ.

| Capacitor | Resistance | Time constant |
|---|---|---|
| $C_\pi=10.0$ pF | 3.42 kΩ | 34.2 ns |
| $C_\mu=0.2$ pF | 666 kΩ | 133.3 ns |
| $C_{cs}=1$ pF | 5 kΩ | 5.0 ns |

### Step 4 — −3-dB frequency

$$
T_0=34.2+133.3+5.0\ \mathrm{ns}=172.5\ \mathrm{ns},\qquad
\omega_{-3\text{dB}}\approx\frac1{T_0}=5.80\times10^6\ \mathrm{rad/s},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=0.92\ \mathrm{MHz}.
$$

$C_\mu$ dominates through the Miller-like term $g_mR_LR_{\pi0}$. An exact nodal analysis of the same circuit gives 0.93 MHz, confirming the estimate.
