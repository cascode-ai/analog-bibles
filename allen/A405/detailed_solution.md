# Detailed solution - A405

Negative feedback around a single-pole op amp moves the pole out by the factor $1+A_0\beta$, where $\beta$ is the feedback factor. A high closed-loop gain means a small $\beta$ and little bandwidth extension. Splitting the same overall gain over two stages gives each a much larger $\beta$, at the cost of the bandwidth shrinkage of two cascaded poles.

### Step 1 — Closed-loop response of one inverting stage

With $A(s)=A_0/(1+s/\omega_p)$ and an inverting stage of input resistor $R_1$ and feedback resistor $R_2$, the feedback factor is $\beta=R_1/(R_1+R_2)$ and

$$
\frac{V_{out}}{V_{in}}=-\frac{R_2}{R_1}\cdot\frac{A\beta}{1+A\beta}
=-\frac{R_2}{R_1}\cdot\frac{A_0\beta}{1+A_0\beta}\cdot\frac1{1+s/[\omega_p(1+A_0\beta)]}.
$$

So the closed-loop $-3$ dB frequency is $\omega_{-3dB}=\omega_p(1+A_0\beta)$, with $\omega_p=10^4$ rad/s and $A_0=1000$.

### Step 2 — Configuration (a): one stage, $R_2=25R$

$$
\beta=\frac1{26},\qquad A_0\beta=38.5,\qquad
\omega_{-3dB}=(10^4\ \mathrm{rad/s})(39.5)=395\ \mathrm{krad/s},
$$
$$
\frac{V_{out}}{V_{in}}(0)=-25\cdot\frac{38.5}{39.5}=-24.4 .
$$

### Step 3 — Configuration (b): two stages, $R_2=5R$ each

Each stage has

$$
\beta=\frac16,\qquad A_0\beta=166.7,\qquad
\omega_1=(10^4\ \mathrm{rad/s})(167.7)=1.68\ \mathrm{Mrad/s},\qquad
\frac{V_{out}}{V_{in}}(0)=-5\cdot\frac{166.7}{167.7}=-4.97 .
$$

The two inversions cancel, so the overall gain is $(-4.97)^2=+24.7$, essentially the same magnitude as in (a). The cascade has two equal poles at $\omega_1$, so its magnitude is

$$
|H(j\omega)|=\frac{|H(0)|}{1+(\omega/\omega_1)^2}.
$$

The $-3$ dB point requires $1+(\omega/\omega_1)^2=\sqrt2$:

$$
\omega_{-3dB}=\omega_1\sqrt{\sqrt2-1}=0.644\,(1.68\ \mathrm{Mrad/s})=1.08\ \mathrm{Mrad/s}.
$$

### Step 4 — Comparison

| Configuration | Overall gain | $-3$ dB bandwidth |
|---|---|---|
| (a) one stage, $R_2=25R$ | $-24.4$ | 395 krad/s (62.8 kHz) |
| (b) two stages, $R_2=5R$ each | $+24.7$ | 1.08 Mrad/s (172 kHz) |

For practically the same gain, the cascade has $1.08/0.395=2.7$ times the bandwidth. Each stage trades gain for bandwidth at the fixed gain–bandwidth product $A_0\omega_p=10^7$ rad/s, so a stage of gain 5 is five times faster than one of gain 25; the cascade loses only the factor 0.644 from its two poles.
