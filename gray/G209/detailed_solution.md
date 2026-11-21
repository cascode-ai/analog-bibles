# Detailed solution - G209

The input side is the same as in the Darlington with a bleed resistor: $R_B$ raises $I_{C1}$ and, in the small-signal circuit, appears in parallel with $r_{\pi2}$. Because $Q_1$'s collector is at ac ground, only $Q_2$'s collector current reaches $R_L$.

### Step 1 — Small-signal parameters

$$
r_{\pi1}=\frac{100(26\ \mathrm{mV})}{50\ \mu\mathrm A}=52\ \mathrm{k\Omega},\qquad
r_{\pi2}=\frac{100(26\ \mathrm{mV})}{1\ \mathrm{mA}}=2.6\ \mathrm{k\Omega},\qquad
r_{\pi2}\parallel R_B=2.22\ \mathrm{k\Omega}.
$$

### Step 2 — Input resistance and base current

$$
R_i=r_{\pi1}+(\beta+1)(r_{\pi2}\parallel R_B)=52\ \mathrm{k\Omega}+223.8\ \mathrm{k\Omega}=275.8\ \mathrm{k\Omega},
\qquad
i_{b1}=\frac{v_i}{R_S+R_i}=\frac{v_i}{375.8\ \mathrm{k\Omega}}.
$$

### Step 3 — Output current and gain

The emitter current of $Q_1$ divides between $R_B$ and $r_{\pi2}$:

$$
i_{b2}=(\beta+1)i_{b1}\,\frac{R_B}{R_B+r_{\pi2}}=86.1\,i_{b1},\qquad
i_{c2}=\beta i_{b2}=8608\,i_{b1}.
$$

Only $i_{c2}$ flows in $R_L$, so

$$
\frac{v_o}{v_i}=-\frac{(8608)(3\ \mathrm{k\Omega})}{375.8\ \mathrm{k\Omega}}=-68.7 .
$$

This is about 1 % below the Darlington with the same bleed resistor (−69.5), the difference being $Q_1$'s collector current $\beta i_{b1}$, which here returns to ac ground.
