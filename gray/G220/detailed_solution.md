# Detailed solution - G220

Find the bias current (the same in all three transistors), the small-signal parameters and the bias-dependent junction capacitances. The transresistance follows from the base current of $Q_1$ and the resistance at the output node. The bandwidth follows from the zero-value time constants with the input current source open. The circuit has three signal nodes: the base of $Q_1$ ($b_1$), the output, and the common base node of $Q_2$, $Q_3$ ($b_m$). $V_{\text{SUPPLY}}$, ground and $-V_{\text{SUPPLY}}$ (emitters of $Q_2$, $Q_3$ and the substrate) are all ac ground.

### Step 1 — Bias and small-signal parameters

$Q_3$'s base and collector sit one $V_{BE}$ above $-V_{\text{SUPPLY}}$, at $-9.3$ V, so the 30-kΩ resistor from ground carries

$$
I_C=\frac{0-(-10\ \mathrm V+0.7\ \mathrm V)}{30\ \mathrm{k\Omega}}=0.31\ \mathrm{mA},
$$

which $Q_2$ mirrors and $Q_1$ carries ($I_B$ is set so that $V_O=0$). Hence $g_m=0.31\ \mathrm{mA}/26\ \mathrm{mV}=11.9$ mA/V for all three, and

$$
r_{\pi1}=\frac{50}{g_m}=4.19\ \mathrm{k\Omega},\quad r_{\pi2}=r_{\pi3}=\frac{100}{g_m}=8.39\ \mathrm{k\Omega},\quad
r_{o1}=\frac{50\ \mathrm V}{0.31\ \mathrm{mA}}=161\ \mathrm{k\Omega},\quad r_{o2}=\frac{120\ \mathrm V}{0.31\ \mathrm{mA}}=387\ \mathrm{k\Omega},
$$

so the output node sees $R_{\text{out}}=r_{o1}\parallel r_{o2}=113.9$ kΩ.

### Step 2 — Capacitances

From $f_T$, $\tau_F=(g_m/\omega_T-C_{\mu0}-C_{je})/g_m$ at the measurement current:

$$
\begin{aligned}
npn:&\quad \tau_F=\frac{12.24-0.7-3\ \mathrm{pF}}{38.5\ \mathrm{mA/V}}=222\ \mathrm{ps},\qquad C_{\pi2}=C_{\pi3}=(222\ \mathrm{ps})(11.9\ \mathrm{mA/V})+3\ \mathrm{pF}=5.65\ \mathrm{pF},\\
pnp:&\quad \tau_F=\frac{765.2-1-3\ \mathrm{pF}}{19.2\ \mathrm{mA/V}}=39.6\ \mathrm{ns},\qquad C_{\pi1}=(39.6\ \mathrm{ns})(11.9\ \mathrm{mA/V})+3\ \mathrm{pF}=475\ \mathrm{pF}.
\end{aligned}
$$

Junction capacitances, $C=C_0/\sqrt{1+V_R/0.55\ \mathrm V}$, with $V_{b1}=9.3$ V, $V_O=0$, $V_{bm}=-9.3$ V and the substrate at $-10$ V:

| Capacitance | Junction | $V_R$ | Value |
|---|---|---|---|
| $C_{\mu1}$ | $Q_1$ base–collector | 9.3 V | 0.236 pF |
| $C_{bs1}$ | $Q_1$ base–substrate | 19.3 V | 0.333 pF |
| $C_{\mu2}$ | $Q_2$ base–collector | 9.3 V | 0.165 pF |
| $C_{cs2}$ | $Q_2$ collector–substrate | 10 V | 0.457 pF |
| $C_{cs3}$ | $Q_3$ collector–substrate | 0.7 V | 1.33 pF |

$C_{\mu3}$ is shorted by $Q_3$'s diode connection.

### Step 3 — Transresistance

With the emitter of $Q_1$ at ac ground, all of $i_i$ is drawn through $r_{\pi1}$; pulling current out of the pnp base increases its emitter-base voltage, so $Q_1$'s collector delivers $\beta_1i_i$ into the output node. $Q_2$'s base node is fixed by the bias network, so

$$
\frac{v_o}{i_i}=+\beta_1R_{\text{out}}=50\,(113.9\ \mathrm{k\Omega})=5.69\ \mathrm{M\Omega},
$$

positive for $i_i$ drawn out of the base as shown.

### Step 4 — Zero-value resistances

- $C_{\pi1}$ and $C_{bs1}$ ($b_1$ to ac ground): with the current source open, $b_1$ sees only $r_{\pi1}=4.19$ kΩ.
- $C_{\mu1}$ ($b_1$ to output): $R_{\mu1}=r_{\pi1}+R_{\text{out}}+g_mR_{\text{out}}r_{\pi1}=4.19+113.9+5690\ \mathrm{k\Omega}=5.81$ MΩ.
- $C_{cs2}$ (output to substrate): $R_{\text{out}}=113.9$ kΩ.
- $C_{\pi2}$, $C_{\pi3}$, $C_{cs3}$ (node $b_m$ to ac ground): the diode $Q_3$ dominates, $R_m=\tfrac1{g_m}\parallel r_{\pi2}\parallel r_{\pi3}\parallel30\ \mathrm{k\Omega}=82\ \Omega$.
- $C_{\mu2}$ ($b_m$ to output): $R_{\mu2}=R_m+R_{\text{out}}+g_mR_{\text{out}}R_m=0.08+113.9+111.4\ \mathrm{k\Omega}=225$ kΩ.

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{\pi1}$ | 475 pF | 4.19 kΩ | 1992 ns |
| $C_{bs1}$ | 0.333 pF | 4.19 kΩ | 1.4 ns |
| $C_{\mu1}$ | 0.236 pF | 5.81 MΩ | 1373 ns |
| $C_{cs2}$ | 0.457 pF | 113.9 kΩ | 52.0 ns |
| $C_{\mu2}$ | 0.165 pF | 225 kΩ | 37.3 ns |
| $C_{\pi2}+C_{\pi3}+C_{cs3}$ | 12.6 pF | 82 Ω | 1.0 ns |

### Step 5 — −3-dB frequency

$$
T_0=3.46\ \mu\mathrm s,\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=46\ \mathrm{kHz}.
$$

An exact nodal analysis gives 47 kHz. Two terms dominate: the large diffusion capacitance $C_{\pi1}$ of the slow lateral pnp ($\tau_F\approx40$ ns), and $C_{\mu1}$, Miller-multiplied by the high gain $g_mR_{\text{out}}\approx1360$ of the stage.
