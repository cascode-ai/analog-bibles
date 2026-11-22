# Detailed solution - grsim-07-01

Build the hybrid-π model at the given bias. Apply the Miller approximation, which replaces $C_\mu$ by an input capacitance $C_\mu(1+g_mR_L)$, to find the dominant pole. Find the nondominant pole from the exact two-pole denominator. An ac and pole-zero analysis of the same linear model in ngspice checks both.

### Step 1 — Small-signal parameters

With $V_A=\infty$, the hybrid-π elements follow from the bias current and $f_T$:

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=\frac{200}{19.2\ \mathrm{mA/V}}=10.4\ \mathrm{k\Omega},
$$

$$
C_\pi+C_\mu=\frac{g_m}{2\pi f_T}=\frac{19.2\ \mathrm{mA/V}}{2\pi(500\ \mathrm{MHz})}=6.12\ \mathrm{pF}\;\Rightarrow\;C_\pi=6.12-0.3=5.82\ \mathrm{pF}.
$$

The low-frequency gain is the divider at the input times $-g_mR_L$:

$$
A_0=-g_mR_L\frac{r_\pi}{R_S+r_b+r_\pi}=-(57.7)\frac{10.4\ \mathrm{k\Omega}}{15.7\ \mathrm{k\Omega}}=-38.2\quad(31.6\ \mathrm{dB}).
$$

### Step 2 — (a) Miller estimate of the −3-dB frequency

The resistance seen by the internal base node is $R=(R_S+r_b)\parallel r_\pi=5.3\ \mathrm{k\Omega}\parallel10.4\ \mathrm{k\Omega}=3.51\ \mathrm{k\Omega}$. $C_\mu$ appears across a gain of $-g_mR_L$, so its Miller equivalent at the input is

$$
C_M=C_\mu(1+g_mR_L)=(0.3\ \mathrm{pF})(58.7)=17.6\ \mathrm{pF},\qquad C_t=C_\pi+C_M=23.4\ \mathrm{pF}.
$$

$$
\omega_{-3\text{dB}}\approx\frac1{RC_t}=\frac{1}{(3.51\ \mathrm{k\Omega})(23.4\ \mathrm{pF})}=1.22\times10^7\ \mathrm{rad/s},\qquad f_{-3\text{dB}}\approx1.93\ \mathrm{MHz}.
$$

### Step 3 — (b) Nondominant pole

The circuit has two capacitors and therefore two poles. With widely separated poles, the sum of the pole magnitudes equals the coefficient ratio of the denominator, and the dominant pole is the Miller pole, so

$$
|p_2|\approx\frac1{R_LC_\mu}+\frac1{RC_\pi}+\frac1{R_LC_\pi}+\frac{g_m}{C_\pi}.
$$

Term by term:

$$
|p_2|=(1.111+0.049+0.057+3.304)\times10^9\ \mathrm{s^{-1}}=4.52\times10^9\ \mathrm{rad/s}\quad(720\ \mathrm{MHz}).
$$

The $g_m/C_\pi$ term dominates: at high frequency $C_\mu$ shorts collector to base, and the transistor then behaves as a diode with resistance $1/g_m$ across $C_\pi$. There is also a right-half-plane zero at $g_m/C_\mu=6.4\times10^{10}$ rad/s (10.2 GHz), where the current through $C_\mu$ cancels $g_mv_\pi$.

### Step 4 — SPICE check

The linear hybrid-π model ($r_b$, $r_\pi$, $C_\pi$, $C_\mu$ and a VCCS $g_m$) is analysed with `.ac` and `.pz`:

```spice
* grsim-07-01 CE stage, linear hybrid-pi
Vs  s  0  ac 1
RS  s  b  5k
Rb  b  bi 300
Rpi bi 0  10.4k
Cpi bi 0  5.821p
Cmu bi c  0.3p
Gm  c  0  bi 0 19.2308m
RL  c  0  3k
.ac dec 200 1k 100G
.pz s 0 c 0 vol pz
.end
```

![Simulated magnitude response of the common-emitter stage, with the −3-dB point and the nondominant pole marked](/q/grsim-07-01/solution-bode.svg)

| Quantity | Hand | ngspice |
|---|---|---|
| Low-frequency gain | −38.2 (31.6 dB) | 31.6 dB |
| −3-dB frequency | 1.93 MHz (Miller) | 1.915 MHz |
| Dominant pole | — | $1.206\times10^7$ rad/s (1.92 MHz) |
| Nondominant pole | $4.52\times10^9$ rad/s (720 MHz) | $4.51\times10^9$ rad/s (718 MHz) |
| Zero | $6.4\times10^{10}$ rad/s (RHP) | $6.41\times10^{10}$ rad/s (RHP) |

The Miller estimate is within 1 % of the simulated −3-dB frequency. It is slightly high because it omits the time constant $R_LC_\mu=0.9$ ns of $C_\mu$ loading the output, which adds to $RC_t=82$ ns. The nondominant-pole formula is within 0.3 %. The phase approaches −270° only well above 1 GHz, where the right-half-plane zero adds its lag.
