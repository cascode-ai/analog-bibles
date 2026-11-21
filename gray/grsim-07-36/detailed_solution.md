# Detailed solution - grsim-07-36

Find the bias from the $Q_5$ reference and $Q_4$ tail source, then compute the gain through the DM half circuit of the pair and the degenerated lateral-pnp stage $Q_3$. Sum the zero-value time constants on the $Q_2$/$Q_3$ side to estimate the bandwidth. Then obtain the poles of the full circuit from an ngspice pole-zero analysis. The lateral pnp has $f_T=6$ MHz, so its $C_\pi$ is hundreds of picofarads and dominates.

### Step 1 — Bias

$$
I_{REF}=\frac{6-0.6}{10\ \mathrm{k\Omega}+1\ \mathrm{k\Omega}}=0.491\ \mathrm{mA}.
$$

The base of $Q_4$ sits at $-4.91$ V, so its emitter is at $-5.51$ V and $I_{C4}=0.491\ \mathrm V/2.5\ \mathrm{k\Omega}=0.196$ mA; $I_{C1}=I_{C2}=98\ \mu$A. Then $V_{C2}=6-0.098\ \mathrm{mA}\times12.5\ \mathrm{k\Omega}=4.77$ V, the emitter of $Q_3$ is at 5.37 V, $|I_{E3}|=(6-5.37)/1\ \mathrm{k\Omega}=0.627$ mA, $|I_{C3}|=0.621$ mA and $V_O=-6+6.21=0.2$ V.

### Step 2 — Small-signal elements

$\tau_F$ comes from $C_\pi+C_\mu=g_m/\omega_T$ at the stated current. For the npn, $(38.5\ \mathrm{mA/V})/(2\pi\cdot400\ \mathrm{MHz})=15.3$ pF, so $\tau_F=(15.0-3)\ \mathrm{pF}/38.5\ \mathrm{mA/V}=312$ ps. For the lateral pnp, $(19.2\ \mathrm{mA/V})/(2\pi\cdot6\ \mathrm{MHz})=510$ pF, so $\tau_F=26.4$ ns.

| | $Q_2$ (98 µA) | $Q_3$ (0.621 mA) |
|---|---|---|
| $g_m$ | 3.78 mA/V | 23.9 mA/V |
| $r_\pi$ | 53.1 kΩ | 4.19 kΩ |
| $C_\pi=\tau_Fg_m+C_{je}$ | 4.18 pF | 633 pF |

### Step 3 — Low-frequency gain

$Q_3$ is a common-emitter stage with 1-kΩ emitter degeneration. Its input resistance is $R_{i3}=r_{\pi3}+(\beta+1)(1\ \mathrm{k\Omega})=105\ \mathrm{k\Omega}$, and its gain from base to output is $-\beta(10\ \mathrm{k\Omega})/R_{i3}=-9.53$.

In the DM half circuit, $Q_2$ receives $-v_i/2$ through $10\ \mathrm{k\Omega}$ and drives $12.5\ \mathrm{k\Omega}\parallel R_{i3}=11.2\ \mathrm{k\Omega}$:

$$
\frac{v_{c2}}{v_i/2}=g_{m2}(11.2\ \mathrm{k\Omega})\frac{r_{\pi2}}{r_{\pi2}+10\ \mathrm{k\Omega}}=35.4,\qquad
\frac{v_o}{v_i}=-\frac{35.4\times9.53}{2}=-169\quad(44.5\ \mathrm{dB}).
$$

### Step 4 — Zero-value time constants

All on the $Q_2$/$Q_3$ side ($Q_2$'s emitter at ac ground in the DM half circuit). For $C_{\pi3}$ the emitter is degenerated, so the resistance is $r_{\pi3}\parallel(R_B+R_E)/(1+g_{m3}R_E)$ with $R_B=12.5\ \mathrm{k\Omega}$ and $R_E=1\ \mathrm{k\Omega}$. For $C_{\mu3}$ the effective transconductance is $G_m=g_{m3}/(1+g_{m3}R_E)=0.96$ mA/V.

| Capacitor | Resistance seen | $R$ | $RC$ (ns) |
|---|---|---|---|
| $C_{\pi2}$ (4.18 pF) | $10\ \mathrm k\parallel r_{\pi2}$ | 8.41 kΩ | 35 |
| $C_{\mu2}$ (0.3 pF) | $8.41+11.2+g_{m2}(11.2)(8.41)$ | 374 kΩ | 112 |
| $C_{cs2}$ (1.5 pF) | $12.5\ \mathrm k\parallel R_{i3}$ | 11.2 kΩ | 16.8 |
| $C_{bs3}$ (1.5 pF) | same node | 11.2 kΩ | 16.8 |
| $C_{\pi3}$ (633 pF) | $r_{\pi3}\parallel\dfrac{13.5\ \mathrm k}{24.9}$ | 480 Ω | 304 |
| $C_{\mu3}$ (0.3 pF) | $11.2+10+G_m(10)(11.2)$ | 127 kΩ | 38 |
| Sum $T_0$ | | | 523 |

$$
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=\frac{1}{2\pi(523\ \mathrm{ns})}=0.30\ \mathrm{MHz}.
$$

The slow lateral pnp ($C_{\pi3}$, 58 % of $T_0$) is the largest contributor, followed by the Miller capacitance $C_{\mu2}$.

### Step 5 — SPICE poles

The models use constant junction capacitances at the given bias-point values and the $\tau_F$ values above. The base-substrate capacitance of the lateral pnp is an explicit 1.5 pF from its base to ac ground.

```spice
* grsim-07-36 two-stage amplifier
.model qn npn is=4e-14 bf=200 tf=312p   cje=3p mje=0 cjc=0.3p mjc=0 cjs=1.5p mjs=0
.model qp pnp is=4e-14 bf=100 tf=26.35n cje=3p mje=0 cjc=0.3p mjc=0
VCC vcc 0 6
VEE vee 0 -6
Vi  s 0 dc 0 ac 1
RS1 s  b1 10k
RS2 b2 0  10k
Q1 c1 b1 t vee qn
Q2 c2 b2 t vee qn
RC1 vcc c1 12.5k
RC2 vcc c2 12.5k
Q4 t  bb e4 vee qn
R4 e4 vee 2.5k
Q5 bb bb e5 vee qn
R5 e5 vee 1k
RB bb 0 10k
Q3 o c2 e3 qp
RE3 vcc e3 1k
Cbs3 c2 0 1.5p
RL o vee 10k
.ac dec 200 1k 1G
.pz s 0 o 0 vol pol
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $I_{C2}$, $\lvert I_{C3}\rvert$, $V_O$ | 98 µA, 0.621 mA, 0.2 V | 101 µA, 0.584 mA, −0.16 V |
| Gain | −169 (44.5 dB) | 44.8 dB (−174) |
| −3-dB frequency | 0.30 MHz (zero-value) | 0.344 MHz |
| First pole | — | $2.27\times10^6$ rad/s (0.361 MHz) |
| Second pole | — | $9.90\times10^6$ rad/s (1.58 MHz) |
| Next poles | — | 23 MHz, 57 MHz, 72 MHz, 84 MHz |

The small bias differences come from the exponential $V_{BE}$ values in SPICE (about 0.62–0.64 V rather than 0.6 V). The zero-value method estimates only the dominant pole: 0.30 MHz against 0.36 MHz, slightly pessimistic as usual. The second pole is only about 4.4 times higher, so the zero-value bandwidth (and the simulated −3-dB point, 0.34 MHz) is somewhat below the first pole. Because only $Q_2$'s side drives the second stage, the DM half circuit is itself an approximation. Simulating the half circuit alone puts the second pole near 4.6 MHz instead of 1.6 MHz, while leaving the first pole almost unchanged.
