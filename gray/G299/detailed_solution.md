# Detailed solution - G299

In a series-shunt loop the output voltage is sampled in shunt, so feedback divides the open-loop output impedance by $1+T(s)$. With a single-pole loop gain, the resulting output admittance splits into a constant term and a first-order term, which is exactly the admittance of $R_2$ in parallel with $R_1+sL$. Matching terms gives the element values; the magnitude plot follows from the resulting zero and pole.

### Step 1 — Loop gain

The op amp has $a(s)=a_0/(1+s/\omega_p)$ with $a_0=10^5$ and $\omega_p=2\pi\times5\ \mathrm{Hz}=31.4$ rad/s. With $f=0.01$ frequency independent,
$$
T(s)=a(s)f=\frac{T_0}{1+s/\omega_p},\qquad T_0=a_0f=1000 .
$$

### Step 2 — Output impedance with shunt sampling

For shunt sampling at the output, the closed-loop output impedance is the open-loop value $r_o=100\ \Omega$ divided by $1+T$:
$$
z_o(s)=\frac{r_o}{1+T(s)} .
$$
Its reciprocal, the output admittance, separates into two terms:
$$
Y_o(s)=\frac{1+T(s)}{r_o}=\frac1{r_o}+\frac{T_0}{r_o(1+s/\omega_p)}=\frac1{r_o}+\frac{1}{\dfrac{r_o}{T_0}+s\dfrac{r_o}{T_0\omega_p}} .
$$
The admittance of [Fig. 1], $R_2$ in parallel with the series combination of $R_1$ and $L$, is
$$
Y=\frac1{R_2}+\frac1{R_1+sL},
$$
which has exactly the same form. So $z_o$ is represented by [Fig. 1] with
$$
\begin{aligned}
R_2&=r_o=100\ \Omega,\\
R_1&=\frac{r_o}{T_0}=\frac{100\ \Omega}{1000}=0.1\ \Omega,\\
L&=\frac{r_o}{T_0\,\omega_p}=\frac{100\ \Omega}{1000\times31.4\ \mathrm{rad/s}}=3.18\ \mathrm{mH}.
\end{aligned}
$$
The inductance appears because the loop gain falls with frequency, so the feedback lowers the output impedance less and less as frequency rises.

### Step 3 — Zero, pole and magnitude

Combining the terms over a common denominator,
$$
z_o(s)=r_o\frac{1+s/\omega_p}{(1+T_0)+s/\omega_p}=\frac{r_o}{1+T_0}\cdot\frac{1+s/\omega_p}{1+s/[(1+T_0)\omega_p]},
$$
so $z_o$ has a zero at 5 Hz and a pole at $(1+T_0)\times5\ \mathrm{Hz}=5.0$ kHz. Equivalently, the zero is where $\omega L=R_1$ and the pole where $\omega L\approx R_2$. The magnitude is
$$
|z_o|=r_o\sqrt{\frac{1+(f_\mathrm{s}/5\ \mathrm{Hz})^2}{1001^2+(f_\mathrm{s}/5\ \mathrm{Hz})^2}} .
$$
For example, at 500 Hz, $|z_o|=100\ \Omega\sqrt{(1+100^2)/(1001^2+100^2)}=9.9\ \Omega$. Other values:

| $f$ | 1 Hz | 5 Hz | 50 Hz | 500 Hz | 1 kHz | 5 kHz | 10 kHz | 100 kHz |
|---|---|---|---|---|---|---|---|---|
| $\lvert z_o\rvert$ (Ω) | 0.102 | 0.141 | 1.00 | 9.94 | 19.6 | 70.7 | 89.4 | 99.9 |

### Step 4 — Sketch

![Output-impedance magnitude on log scales: 0.1 Ω up to 5 Hz, rising at +20 dB/dec to 100 Ω above about 5 kHz](/q/G299/solution-impedance.svg)

$|z_o|$ is flat at $R_1\approx0.1\ \Omega$ ($r_o/(1+T_0)$) below 5 Hz, rises at $+20$ dB/dec where the inductor dominates ($|z_o|\approx\omega L$) between 5 Hz and 5 kHz, and levels off at $R_2=100\ \Omega$, the open-loop value, above about 5 kHz, where the loop gain has dropped below unity.
