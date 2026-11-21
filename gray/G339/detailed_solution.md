# Detailed solution - G339

Model the locked loop with linear phase-domain blocks: the phase detector gives $V_d=K_D(\theta_i-\theta_o)$, the VCO frequency deviation is $K_OV_o$, so its phase is $\theta_o=K_OV_o/s$. Write the closed-loop transfer function from input frequency $\omega_i$ to the VCO control voltage $V_o$, first without a filter, then with the single-pole filter, and match the second-order denominator to poles on the 45° radials.

### Step 1 — First-order loop and its bandwidth

With no loop filter and no other gain ($A=1$), the control voltage equals the phase-detector output, $V_o=K_D(\theta_i-\theta_o)$. With $\theta_i=\omega_i/s$ and $\theta_o=K_OV_o/s$,

$$
V_o=K_D\,\frac{\omega_i-K_OV_o}{s}
\quad\Longrightarrow\quad
\frac{V_o}{\omega_i}=\frac{1}{K_O}\,\frac{K_v}{s+K_v},\qquad K_v=K_OK_DA .
$$

The response is first order with a single pole at $s=-K_v$, so the loop bandwidth is $K_v$:

$$
K_v=(10^3\ \mathrm{rad/(V\cdot s)})(1\ \mathrm{V/rad})(1)=1000\ \mathrm{s^{-1}}
\quad(1000\ \mathrm{rad/s},\ \approx159\ \mathrm{Hz}).
$$

The center frequency of $10^5$ rad/s sets the free-running VCO frequency around which the loop operates, but it does not enter the small-signal loop dynamics.

### Step 2 — Second-order loop with the single-pole filter

Inserting $F(s)=1/(1+s/\omega_1)$ between the phase detector and the VCO multiplies the forward path by $F(s)$:

$$
V_o=F(s)\,K_D\,\frac{\omega_i-K_OV_o}{s}
\quad\Longrightarrow\quad
\frac{V_o}{\omega_i}=\frac{1}{K_O}\,\frac{K_vF(s)}{s+K_vF(s)}
=\frac{1}{K_O}\,\frac{1}{1+\dfrac{s}{K_v}+\dfrac{s^2}{\omega_1K_v}} .
$$

Comparing the denominator with the standard form $1+2\zeta s/\omega_n+s^2/\omega_n^2$:

$$
\omega_n=\sqrt{K_v\omega_1},\qquad
\frac{2\zeta}{\omega_n}=\frac{1}{K_v}\ \Longrightarrow\ \zeta=\frac12\sqrt{\frac{\omega_1}{K_v}} .
$$

### Step 3 — Poles on the 45° radials

Complex poles $s=-\zeta\omega_n\pm j\omega_n\sqrt{1-\zeta^2}$ lie on a radial at angle $\cos^{-1}\zeta$ from the negative real axis. An angle of 45° requires $\zeta=\cos45°=1/\sqrt2$:

$$
\frac12\sqrt{\frac{\omega_1}{K_v}}=\frac{1}{\sqrt2}
\quad\Longrightarrow\quad
\omega_1=2K_v=2000\ \mathrm{rad/s}.
$$

Then $\omega_n=\sqrt{(1000\ \mathrm{s^{-1}})(2000\ \mathrm{s^{-1}})}=1414$ rad/s, and the closed-loop poles are

$$
s=-\frac{\omega_n}{\sqrt2}\pm j\frac{\omega_n}{\sqrt2}=-1000\pm j1000\ \mathrm{rad/s}.
$$

The filter pole can be realized, for example, by an RC low-pass with $RC=1/\omega_1=0.5$ ms. With $\zeta=1/\sqrt2$ the closed-loop response is maximally flat, and its $-3$ dB bandwidth equals $\omega_n=1414$ rad/s.
