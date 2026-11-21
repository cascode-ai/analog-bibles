# Detailed solution - G014

The transit time $\tau_T=1/(2\pi f_T)$ is the sum of a constant base transit time and a depletion-capacitance charging time that falls as $1/I_C$. Extract both from the two $f_T$ measurements, rescale $C_\mu$ to $V_{CB}=2$ V, and evaluate $f_T(I_C)$ over the range; on log–log axes it is a slope-1 line at low current that levels off at $1/(2\pi\tau_F)$.

### Step 1 — Model for $f_T$

From the hybrid-π model, $f_T=g_m/[2\pi(C_\pi+C_\mu)]$ with $C_\pi=\tau_Fg_m+C_{je}$ and $g_m=I_C/V_T$, so

$$
\tau_T=\frac1{2\pi f_T}=\tau_F+\frac{(C_{je}+C_\mu)V_T}{I_C}.
$$

$\tau_F$ is independent of current and $C_{je}$ is constant in forward bias, as the problem states.

### Step 2 — Extract $\tau_F$ and $C_{je}$

Both measurements are at $V_{CB}=10$ V, with $V_T/I_C=26\ \Omega$ at 1 mA and $2.6\ \Omega$ at 10 mA:

$$
\begin{aligned}
\tau_T(1\ \mathrm{mA})&=\frac1{2\pi(600\ \mathrm{MHz})}=265.3\ \mathrm{ps},\qquad \tau_T(10\ \mathrm{mA})=\frac1{2\pi(1\ \mathrm{GHz})}=159.2\ \mathrm{ps},\\
C_{je}+C_\mu(10\ \mathrm V)&=\frac{(265.3-159.2)\ \mathrm{ps}}{(26-2.6)\ \Omega}=4.53\ \mathrm{pF},\qquad
\tau_F=159.2\ \mathrm{ps}-(2.6\ \Omega)(4.53\ \mathrm{pF})=147.4\ \mathrm{ps}.
\end{aligned}
$$

With $C_\mu(10\ \mathrm V)=0.15$ pF, $C_{je}=4.38$ pF.

### Step 3 — $C_\mu$ at $V_{CB}=2$ V

Using $C_\mu=C_{\mu0}/(1+V_{CB}/\psi_0)^{1/2}$:

$$
C_{\mu0}=(0.15\ \mathrm{pF})\sqrt{1+\frac{10}{0.55}}=0.657\ \mathrm{pF},\qquad
C_\mu(2\ \mathrm V)=\frac{0.657\ \mathrm{pF}}{\sqrt{1+2/0.55}}=0.305\ \mathrm{pF},
$$

so $C_{je}+C_\mu=4.69$ pF in the sweep.

### Step 4 — Asymptotes, corner and sample values

At low current the capacitance term dominates and $f_T$ is proportional to $I_C$:

$$
f_T\approx\frac{I_C}{2\pi V_T(C_{je}+C_\mu)}=\frac{1\ \mu\mathrm A}{2\pi(26\ \mathrm{mV})(4.69\ \mathrm{pF})}=1.31\ \mathrm{MHz}\ \text{at}\ 1\ \mu\mathrm A,
$$

a line of slope +1 on log–log axes. At high current $f_T\to1/(2\pi\tau_F)=1/[2\pi(147.4\ \mathrm{ps})]=1.08$ GHz. The two terms are equal at

$$
I_C=\frac{V_T(C_{je}+C_\mu)}{\tau_F}=\frac{(26\ \mathrm{mV})(4.69\ \mathrm{pF})}{147.4\ \mathrm{ps}}=0.83\ \mathrm{mA},
$$

where $f_T$ is half its maximum, 540 MHz. The full expression gives:

| $I_C$ | 1 µA | 10 µA | 100 µA | 0.83 mA | 1 mA | 3 mA | 10 mA |
|---|---|---|---|---|---|---|---|
| $f_T$ (MHz) | 1.30 | 12.9 | 116 | 540 | 591 | 847 | 997 |

### Step 5 — The graph

![Log–log plot of fT versus IC: slope +1 from 1.3 MHz at 1 µA, corner at 0.83 mA, leveling toward 1.08 GHz](/q/G014/solution-curves.svg)

$f_T$ rises in proportion to $I_C$ up to a few hundred microamperes, bends over around 0.83 mA, and approaches 1.08 GHz at 10 mA. Real transistors show a fall-off of $f_T$ at high current from high-level injection and the Kirk effect; this model does not include it, so the curve is not extended beyond its saturating form.
