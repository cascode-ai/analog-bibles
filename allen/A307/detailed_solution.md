# Detailed solution - A307

The op amp is a noninverting amplifier whose feedback network $R$–$C$ is a low-pass divider: at dc the capacitor is open and all of the output is fed back, while at high frequency the capacitor shorts the inverting input and the feedback disappears. Write the closed-loop gain with the one-pole op-amp model, find its zero and poles, and read the asymptotes.

### Step 1 — Closed-loop transfer function

The inverting input sits at the output of the $R$–$C$ divider, $v_-=v_{OUT}/(1+sRC)$. With $v_{OUT}=A(s)(v_{IN}-v_-)$:

$$
\frac{v_{OUT}}{v_{IN}}=\frac{A(s)(1+sRC)}{1+sRC+A(s)} .
$$

Substituting $A(s)=A_v(0)\omega_a/(s+\omega_a)$ and $GB=A_v(0)\omega_a$:

$$
\frac{v_{OUT}}{v_{IN}}=\frac{GB\,(s+1/RC)}{s^2+s(\omega_a+1/RC)+(\omega_a+GB)/RC} .
$$

### Step 2 — Asymptotes

- At dc the gain is $A_v(0)/(1+A_v(0))\approx1$, i.e. 0 dB: the feedback is complete.
- The zero at $s=-1/RC$ makes the gain rise at +20 dB/decade above $1/RC$.
- For $1/RC\ll\omega_a$ and $(\omega_a+GB)/RC\ll\omega_a^2$, the denominator roots are widely spaced:

$$
\omega_{p1}\approx\frac{(\omega_a+GB)/RC}{\omega_a}=\frac{1+A_v(0)}{RC}\approx\frac{A_v(0)}{RC},\qquad \omega_{p2}\approx\omega_a .
$$

At $\omega_{p1}$ the rising asymptote $\omega RC$ equals $A_v(0)$, so the rise stops exactly where it meets the open-loop gain. Above $\omega_{p1}$ the loop gain $A/(1+sRC)$ is below 1 and the response equals the open-loop $A(s)$: flat at $A_v(0)$ up to $\omega_a$, then −20 dB/decade, crossing 0 dB at $GB$.

### Step 3 — Numerical values

$$
RC=(10\ \mathrm{M\Omega})(10\ \mu\mathrm F)=100\ \mathrm s,\qquad \frac1{RC}=0.01\ \mathrm{rad/s},\qquad
\omega_a=\frac{GB}{A_v(0)}=\frac{2\pi(10^6\ \mathrm{Hz})}{4000}=1571\ \mathrm{rad/s}.
$$

The denominator $s^2+1570.8\,s+6.28\times10^4$ has roots $-41.1$ rad/s and $-1530$ rad/s, so

$$
\frac{v_{OUT}}{v_{IN}}=\frac{2\pi\times10^6\,(s+0.01)}{(s+41.1)(s+1530)} .
$$

### Step 4 — Sketch

The magnitude is 0 dB up to 0.01 rad/s (1.6 mHz), rises at +20 dB/decade to 72 dB ($A_v(0)=4000$) at 41 rad/s (6.5 Hz), stays flat to 1.53 krad/s (243 Hz), and then falls at −20 dB/decade, crossing 0 dB at $GB=6.28$ Mrad/s (1 MHz).

![Closed-loop magnitude in dB versus ω from 1e-4 to 1e7 rad/s: 0 dB, rising from 0.01 rad/s at +20 dB/decade to a 72-dB plateau between 41 and 1530 rad/s, then falling at −20 dB/decade to 0 dB at 6.28 Mrad/s](/q/A307/solution-curves.svg)
