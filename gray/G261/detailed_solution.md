# Detailed solution - G261

Analyse the differential half circuit with the two-port series–shunt method and write $T=af$ explicitly as a function of the 50-Ω resistor $R_E$. $R_E$ appears in two places, the feedback factor and the emitter degeneration of the input stage, and their effects largely cancel.

### Step 1 — Differential half circuit

For a differential input, the midpoint of the two 50-Ω resistors and the joined emitters of $Q_3$, $Q_4$ are ac grounds. Each half is then: $Q_1$ with $R_E$ from its emitter to ground and the collector resistor $R_{C1}=500\ \Omega$; $Q_3$, a common-emitter stage with $R_{C3}=200\ \Omega$; and $R_F=500\ \Omega$ from the collector of $Q_3$ (the output) back to the emitter of $Q_1$. At the given bias, $g_{m1}=6.8\ \mathrm{mA}/26\ \mathrm{mV}=0.262$ S, $r_{\pi1}=382\ \Omega$, $g_{m3}=0.131$ S, $r_{\pi3}=765\ \Omega$.

### Step 2 — Feedback factor and loading

The divider $R_F$–$R_E$ samples the output voltage and returns a voltage in series with the base–emitter loop of $Q_1$:

$$
f=\frac{R_E}{R_E+R_F},\qquad h_{11f}=R_E\parallel R_F,\qquad \frac1{h_{22f}}=R_E+R_F .
$$

### Step 3 — Basic-amplifier gain

With $h_{11f}$ in the emitter of $Q_1$, its collector current per volt of input is $\beta/[r_b+r_{\pi1}+(\beta+1)(R_E\parallel R_F)]$. The rest of the chain (collector of $Q_1$ into $Q_3$, and $Q_3$ into $R_{C3}\parallel(R_E+R_F)$) does not depend on $R_E$ except through the output loading:

$$
T=af=\frac{\beta}{r_b+r_{\pi1}+(\beta+1)(R_E\parallel R_F)}\;\bigl[R_{C1}\parallel(r_b+r_{\pi3})\bigr]\frac{r_{\pi3}}{r_b+r_{\pi3}}\,g_{m3}\bigl[R_{C3}\parallel(R_E+R_F)\bigr]\;\frac{R_E}{R_E+R_F}.
$$

### Step 4 — Why $T$ hardly changes

At the nominal value $(\beta+1)(R_E\parallel R_F)=(101)(45.5\ \Omega)=4.6\ \mathrm{k\Omega}$ is much larger than $r_b+r_{\pi1}=432\ \Omega$ (equivalently $g_{m1}(R_E\parallel R_F)\approx12\gg1$), so the degenerated input stage has a transconductance of about $1/(R_E\parallel R_F)$. Using $R_E\parallel R_F=R_ER_F/(R_E+R_F)$,

$$
\frac{1}{R_E\parallel R_F}\cdot\frac{R_E}{R_E+R_F}=\frac1{R_F},
$$

so to first order

$$
T\approx K\,\frac{R_{C3}\parallel(R_E+R_F)}{R_F},
$$

with $K$ independent of $R_E$. Increasing $R_E$ increases $f$ almost proportionally, but the extra degeneration reduces $a$ by almost the same factor. What remains is the small $r_b+r_{\pi1}$ term (which makes $T$ rise slightly with $R_E$) and the weak change in output loading $R_E+R_F$.

### Step 5 — Numerical trend and limits

Evaluating the full expression at the given bias:

| $R_E$ (Ω) | 20 | 40 | 50 | 60 | 100 | 200 |
|---|---|---|---|---|---|---|
| $f$ | 0.038 | 0.074 | 0.091 | 0.107 | 0.167 | 0.286 |
| $T$ | 8.9 | 9.85 | 10.1 | 10.3 | 10.7 | 11.4 |

A 20% increase of $R_E$ raises $f$ by 18% but $T$ by only about 2%. Only when $R_E$ becomes comparable with $(r_b+r_{\pi1})/(\beta+1)=4.3\ \Omega$ does the cancellation fail, and then $T\propto R_E\to0$.

Two practical effects come on top of this at fixed supply. The 50-Ω resistors also set the bias: a larger $R_E$ lowers $I_{C1}$ and raises $I_{C3}$, which increases $T$ somewhat more, in the same direction. And the devices have little headroom: $V_{C1}\approx3\ \mathrm V-(0.5\ \mathrm{k\Omega})(6.8\ \mathrm{mA})\approx-0.4$ V, only a few tenths of a volt above the emitter of $Q_1$. A modest decrease of $R_E$ raises $I_{C1}$ and drives $Q_1$, $Q_2$ into saturation, and a large increase of $R_E$ (to a few hundred ohms) saturates $Q_3$, $Q_4$; in either case $T$ then collapses. Within the active region, $T$ is nearly independent of $R_E$, increasing only slightly as $R_E$ increases.
