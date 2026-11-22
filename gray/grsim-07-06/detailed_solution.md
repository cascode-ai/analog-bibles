# Detailed solution - grsim-07-06

Split the circuit into differential- and common-mode half circuits. In the differential half circuit node $E$ is an ac ground, so it is the common-emitter stage of the same transistor, with a Miller-dominated pole. In the common-mode half circuit each half sees $2Z_T$ in its emitter, where $Z_T=R_T\parallel C_T$, so the gain is set by the tail impedance and rises once $C_T$ takes over. CMRR is the ratio of the two. A linear hybrid-π ngspice model of the full pair checks all three curves.

### Step 1 — Small-signal parameters

Each transistor carries $I_{EE}/2=0.5$ mA:

$$
g_m=19.2\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=10.4\ \mathrm{k\Omega},\qquad C_\pi=\frac{g_m}{2\pi f_T}-C_\mu=6.12-0.3=5.82\ \mathrm{pF}.
$$

### Step 2 — Differential-mode gain

With a differential input, $E$ stays at ac ground and each side is a common-emitter stage driven through $R_S+r_b$. With $v_{od}=v_{c1}-v_{c2}$:

$$
A_{dm}(0)=-g_mR_L\frac{r_\pi}{R_S+r_b+r_\pi}=-(57.7)\frac{10.4}{15.7}=-38.2\quad(31.6\ \mathrm{dB}).
$$

The Miller approximation gives the pole: $R=(R_S+r_b)\parallel r_\pi=3.51\ \mathrm{k\Omega}$ and $C_t=C_\pi+C_\mu(1+g_mR_L)=23.4$ pF, so

$$
f_{p,dm}=\frac{1}{2\pi RC_t}=1.93\ \mathrm{MHz}.
$$

Above it the gain falls at −20 dB/decade: about 30.6 dB at 1 MHz, 17 dB at 10 MHz and 11 dB at 20 MHz.

### Step 3 — Common-mode gain

For a common-mode input, split the tail into two halves of impedance $2Z_T$. Each half is a common-emitter stage with a large emitter impedance, so its gain is the collector load over the emitter impedance:

$$
A_{cm}\approx-\frac{R_L}{2Z_T}=-\frac{R_L}{2R_T}\left(1+sR_TC_T\right).
$$

At low frequency $A_{cm}=-3\ \mathrm{k\Omega}/600\ \mathrm{k\Omega}=-0.005$ (−46.0 dB). The factor $1+sR_TC_T$ is a zero at

$$
f_z=\frac{1}{2\pi R_TC_T}=\frac{1}{2\pi(300\ \mathrm{k\Omega})(2\ \mathrm{pF})}=265\ \mathrm{kHz},
$$

above which $|A_{cm}|$ rises at +20 dB/decade, to about −8.5 dB at 20 MHz by this approximation.

### Step 4 — CMRR

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=\frac{38.2}{0.005}=7640\ (77.7\ \mathrm{dB})
$$

at low frequency. It falls at −20 dB/decade above 265 kHz, where $|A_{cm}|$ starts rising. It falls at −40 dB/decade above about 1.9 MHz, where $|A_{dm}|$ also falls. It is about 20 dB at 20 MHz.

### Step 5 — SPICE check

Two linear hybrid-π transistors share node $E$, with $R_T\parallel C_T$ to ground. The DM run applies $\pm\tfrac12$ V to the two sources; the CM run applies 1 V to both and takes the average collector voltage.

```spice
* grsim-07-06 differential pair, linear hybrid-pi (DM run)
V1 s1 0 ac 0.5
V2 s2 0 ac -0.5
RS1 s1 b1 5k
RS2 s2 b2 5k
Rb1 b1 bi1 300
Rb2 b2 bi2 300
Rpi1 bi1 e 10.4k
Rpi2 bi2 e 10.4k
Cpi1 bi1 e 5.821p
Cpi2 bi2 e 5.821p
Cmu1 bi1 c1 0.3p
Cmu2 bi2 c2 0.3p
G1 c1 e bi1 e 19.2308m
G2 c2 e bi2 e 19.2308m
RL1 c1 0 3k
RL2 c2 0 3k
RT e 0 300k
CT e 0 2p
.ac dec 50 10k 20Meg
.end
```

![Simulated and hand-calculated magnitudes of the DM gain, CM gain and CMRR from 10 kHz to 20 MHz](/q/grsim-07-06/solution-bode.svg)

| $f$ | 10 kHz | 100 kHz | 1 MHz | 1.9 MHz | 5 MHz | 10 MHz | 20 MHz |
|---|---|---|---|---|---|---|---|
| $\lvert A_{dm}\rvert$ (dB) | 31.6 | 31.6 | 30.6 | 28.7 | 22.7 | 17.1 | 11.2 |
| $\lvert A_{cm}\rvert$ (dB) | −46.1 | −45.8 | −37.1 | −31.9 | −23.6 | −17.5 | −11.2 |
| CMRR (dB) | 77.7 | 77.4 | 67.7 | 60.5 | 46.3 | 34.7 | 22.5 |

The DM curve matches the hand result: 31.6 dB with its −3-dB point at about 1.92 MHz. The CM floor of −46 dB and the low-frequency CMRR of 77.7 dB also match. The CM gain starts rising later than predicted: its +3-dB point is at 380 kHz rather than 265 kHz, and at high frequency it is about 3 dB below the simple formula. The difference comes from $C_\mu$. In common mode the collector swing is small, so the current fed from the base through $C_\mu$ into $R_L$ has the opposite sign to the tail-capacitance current and partly cancels it. The effective tail capacitance is about $C_T-2C_\mu=1.4$ pF, which moves the zero to $1/[2\pi R_T(1.4\ \mathrm{pF})]\approx380$ kHz. The CMRR therefore stays slightly higher than the hand estimate, about 22.5 dB at 20 MHz.
