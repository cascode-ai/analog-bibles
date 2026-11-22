# Detailed solution - G199

Solve the two node equations (base and collector) for the midband gain, keeping $R_F$ as an ordinary resistor between the nodes. Then apply the zero-value time-constant method, where $R_F$ must be included in the resistance seen by every capacitor: it shunts $C_\mu$ directly and provides feedback for $C_\pi$ and $C_{cs}$.

### Step 1 — Small-signal parameters

$$
g_m=38.5\ \mathrm{mA/V},\qquad r_\pi=5.2\ \mathrm{k\Omega},\qquad C_\pi=\frac{g_m}{2\pi f_T}-C_\mu=10.0\ \mathrm{pF},
$$

with $C_{je}$ already contained in $C_\pi$.

### Step 2 — Low-frequency gain

KCL at the collector ($v_o$) and at the base ($v_b$):

$$
v_o\Bigl(\frac1{R_L}+\frac1{R_F}\Bigr)=v_b\Bigl(\frac1{R_F}-g_m\Bigr)
\;\Rightarrow\;v_o=-164.7\,v_b,
$$
$$
\frac{v_i}{R_S}=v_b\Bigl(\frac1{R_S}+\frac1{r_\pi}+\frac1{R_F}\Bigr)-\frac{v_o}{R_F}
\;\Rightarrow\;v_b=0.0172\,v_i .
$$

Hence

$$
\frac{v_o}{v_i}=(-164.7)(0.0172)=-2.83,
$$

close to the ideal shunt-feedback value $-R_F/R_S=-3$.

### Step 3 — Zero-value resistances

Let $R_A=R_S\parallel r_\pi=3.42$ kΩ.

- $C_\pi$ (base to ground): the base sees $R_S$, $r_\pi$ and, through $R_F$, the collector node, where $g_mv_b$ makes the path look like $(R_F+R_L)/(1+g_mR_L)$:
$$
R_{\pi0}=R_S\parallel r_\pi\parallel\frac{R_F+R_L}{1+g_mR_L}=10\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}\parallel181\ \Omega=172\ \Omega .
$$
- $C_\mu$ (base to collector): $R_F$ is directly across it, in parallel with the usual Miller resistance:
$$
R_{\mu0}=(R_A+R_L+g_mR_LR_A)\parallel R_F=666\ \mathrm{k\Omega}\parallel30\ \mathrm{k\Omega}=28.7\ \mathrm{k\Omega}.
$$
- $C_{cs}$ (collector to ground): a test voltage $v$ at the collector puts $av$ on the base, $a=R_A/(R_A+R_F)=0.102$, so the current drawn is $v/R_L+(1-a)v/R_F+g_mav$:
$$
R_{cs0}=\frac1{1/R_L+(1-a)/R_F+g_ma}=240\ \Omega .
$$

| Capacitor | Resistance | Time constant |
|---|---|---|
| $C_\pi=10.0$ pF | 172 Ω | 1.72 ns |
| $C_\mu=0.2$ pF | 28.7 kΩ | 5.74 ns |
| $C_{cs}=1$ pF | 240 Ω | 0.24 ns |

### Step 4 — −3-dB frequency

$$
T_0=1.72+5.74+0.24\ \mathrm{ns}=7.70\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=20.7\ \mathrm{MHz}.
$$

An exact nodal analysis gives 24 MHz; the zero-value estimate is conservative, as usual. Compared with the stage without feedback (gain −65.8, 0.92 MHz), the shunt feedback through $R_F$ trades gain for bandwidth: it lowers every node resistance, especially the one across $C_\mu$.
