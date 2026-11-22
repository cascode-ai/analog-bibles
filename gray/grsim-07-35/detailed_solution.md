# Detailed solution - grsim-07-35

Find the bias from the $Q_6$ reference and the $Q_5$ tail source, then the hybrid-π elements. The gain follows from the DM half circuits of the two pairs; note that the output is taken single-ended from $Q_4$. Summing the zero-value time constants gives the −3-dB frequency and the rise time, and ngspice (constant junction capacitances, $\tau_F$ from $f_T$) gives the exact bandwidth and the −135° frequency.

### Step 1 — Bias

The reference current flows from ground through 5 kΩ, the diode $Q_6$ and 1 kΩ to −6 V:

$$
I_{REF}=\frac{6-0.6}{5\ \mathrm{k\Omega}+1\ \mathrm{k\Omega}}=0.9\ \mathrm{mA}.
$$

The base of $Q_5$ is then at $-0.9\ \mathrm{mA}\times5\ \mathrm{k\Omega}=-4.5$ V, its emitter at −5.1 V, so $I_{C5}=0.9\ \mathrm V/2\ \mathrm{k\Omega}=0.45$ mA and $I_{C1}=I_{C2}=0.225$ mA. The first-stage collectors sit at $6-2.25=3.75$ V, the second-stage tail at 3.15 V, so $I_{C3}=I_{C4}=3.15\ \mathrm V/(2\times5\ \mathrm{k\Omega})=0.315$ mA and $V_O=6-1.575=4.43$ V.

### Step 2 — Small-signal elements

$\tau_F$ comes from $f_T$ at 1 mA: $C_\pi+C_\mu=g_m/\omega_T=(38.5\ \mathrm{mA/V})/(2\pi\cdot600\ \mathrm{MHz})=10.2$ pF, so $C_\pi=10.0$ pF and $\tau_F=(10.0-2)\ \mathrm{pF}/38.5\ \mathrm{mA/V}=208$ ps.

| | $Q_1$, $Q_2$ (0.225 mA) | $Q_3$, $Q_4$ (0.315 mA) |
|---|---|---|
| $g_m$ | 8.65 mA/V | 12.1 mA/V |
| $r_\pi=\beta/g_m$ | 23.1 kΩ | 16.5 kΩ |
| $C_\pi=\tau_Fg_m+C_{je}$ | 3.80 pF | 4.52 pF |

### Step 3 — Low-frequency gain

For the DM half circuits, the first-stage collector load is $10\ \mathrm{k\Omega}\parallel r_{\pi3}=6.23\ \mathrm{k\Omega}$, and the input divides between $R_S=20\ \mathrm{k\Omega}$ and $r_{\pi1}$:

$$
A_1=-g_{m1}(10\ \mathrm{k\Omega}\parallel r_{\pi3})\frac{r_{\pi1}}{r_{\pi1}+20\ \mathrm{k\Omega}}=-(53.9)(0.536)=-28.9,\qquad A_2=-g_{m3}(5\ \mathrm{k\Omega})=-60.6 .
$$

A single-ended input $v_i$ makes the first-stage differential output $A_1v_i$. The output is the collector of $Q_4$ alone, which carries half of the second stage's differential output, and $Q_4$'s base is driven by $Q_2$ (the inverted side):

$$
\frac{v_o}{v_i}=-\frac{A_1A_2}{2}=-\frac{(28.9)(60.6)}{2}=-875\quad(58.8\ \mathrm{dB}).
$$

### Step 4 — Zero-value time constants and rise time

In the DM half circuits the emitters are at ac ground. Each $C_\mu$ sees $R_{left}+R_{right}+g_mR_{left}R_{right}$:

| Capacitor | Resistance seen | $R$ (kΩ) | $RC$ (ns) |
|---|---|---|---|
| $C_{\pi1}$ (3.80 pF) | $20\ \mathrm k\parallel r_{\pi1}$ | 10.7 | 40.7 |
| $C_{\mu1}$ (0.2 pF) | $10.7+6.23+g_{m1}(6.23)(10.7)$ | 595 | 119 |
| $C_{cs1}$ (1 pF) | $10\ \mathrm k\parallel r_{\pi3}$ | 6.23 | 6.2 |
| $C_{\pi3}$ (4.52 pF) | $10\ \mathrm k\parallel r_{\pi3}$ | 6.23 | 28.2 |
| $C_{\mu3}$ (0.2 pF) | $6.23+5+g_{m3}(5)(6.23)$ | 388 | 77.7 |
| $C_{cs3}$ (1 pF) | $5\ \mathrm k$ | 5 | 5.0 |
| Sum $T_0$ | | | 277 |

$$
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=575\ \mathrm{kHz},\qquad t_r\approx2.2T_0=0.61\ \mu\mathrm s.
$$

The rise time uses the single-dominant-pole relation $t_r=2.2\tau$. The two Miller capacitances $C_{\mu1}$ and $C_{\mu3}$ contribute 70 % of $T_0$.

### Step 5 — SPICE

The device model uses constant junction capacitances (grading coefficients zero) at the given bias-point values, $\tau_F=208$ ps and $\beta=200$; $I_S$ is set for $V_{BE}\approx0.6$ V.

```spice
* grsim-07-35 two-stage amplifier
.model qn npn is=4e-14 bf=200 tf=208p cje=2p mje=0 cjc=0.2p mjc=0 cjs=1p mjs=0
VCC vcc 0 6
VEE vee 0 -6
Vi  s 0 dc 0 ac 1 pulse(0 10u 10n 1p 1p 5u 10u)
RS1 s  b1 20k
RS2 b2 0  20k
Q1 c1 b1 t1 vee qn
Q2 c2 b2 t1 vee qn
RC1 vcc c1 10k
RC2 vcc c2 10k
Q5 t1 bb e5 vee qn
R5 e5 vee 2k
Q6 bb bb e6 vee qn
R6 e6 vee 1k
RB bb 0 5k
Q3 c3 c1 t2 vee qn
Q4 c4 c2 t2 vee qn
RC3 vcc c3 5k
RC4 vcc c4 5k
RT t2 0 5k
.ac dec 200 1k 1G
.tran 2n 3u
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $I_{C1}$, $I_{C3}$, $V_O$ | 0.225 mA, 0.315 mA, 4.43 V | 0.226 mA, 0.312 mA, 4.44 V |
| Gain | −875 (58.8 dB) | 58.86 dB (−877) |
| −3-dB frequency | 575 kHz (zero-value) | 621 kHz |
| Phase −135° beyond low-frequency value | — | 7.41 MHz |
| 10–90 % rise time (10-µV step) | 0.61 µs | 0.56 µs, no overshoot |

The zero-value estimate is within 8 % of the simulated bandwidth and slightly pessimistic, as expected when a dominant pole exists. The −135° point is far above the −3-dB frequency. The dominant pole (about 0.63 MHz) supplies 90° of lag, and the remaining 45° comes from the second pole, near 7 MHz. So the −135° frequency is essentially the second-pole frequency, which is what limits the stage if feedback is applied around it.
