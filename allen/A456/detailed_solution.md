# Detailed solution - A456

With ample dc gain the error is set by the op amp's finite bandwidth. Find the closed-loop pole of the capacitive inverting stage from its feedback factor, write the step response, and find when the remaining error drops below 0.5 LSB.

### Step 1 — Closed-loop transfer function

Charge conservation at the inverting input (both capacitors discharged initially, $v_-=-v_{out}/A_{vd}(s)$) gives, as in the static analysis but with $A_{vd}(s)$,

$$
\frac{v_{out}}{-V_{REF}}=-\frac{C}{C}\cdot\frac{A_{vd}(s)\beta}{1+A_{vd}(s)\beta},\qquad\beta=\frac{C}{C+C}=\frac12 .
$$

Substituting $A_{vd}(s)=GB/(s+\omega_a)$:

$$
\frac{A_{vd}\beta}{1+A_{vd}\beta}=\frac{\beta\,GB}{s+\omega_a+\beta\,GB}\approx\frac{\omega_H}{s+\omega_H},\qquad
\omega_H=\omega_a+\beta\,GB\approx\beta\,GB,
$$

because $A_{vd}(0)\gg1$ means $\omega_a=GB/A_{vd}(0)\ll\beta\,GB$.

### Step 2 — Numerical pole and step response

$GB=1$ MHz is a frequency in hertz, so $GB=2\pi\times10^6$ rad/s and

$$
\omega_H=\tfrac12\left(2\pi\times10^6\ \mathrm{rad/s}\right)=3.142\times10^6\ \mathrm{rad/s},\qquad \tau=\frac1{\omega_H}=0.318\ \mu\mathrm s .
$$

For the step applied at $t=0$ the output rises toward its final value $V_{REF}$ (the full-scale output) as

$$
v_{out}(t)=V_{REF}\left(1-e^{-\omega_Ht}\right).
$$

### Step 3 — Settling to ±0.5 LSB

For 8 bits, $0.5\,\mathrm{LSB}=V_{REF}/2^9$. The remaining error $V_{REF}e^{-\omega_HT}$ must not exceed it:

$$
e^{-\omega_HT}\le2^{-9}
\;\Longrightarrow\;
T=\frac{9\ln2}{\omega_H}=\frac{6.238}{3.142\times10^6\ \mathrm{s^{-1}}}=1.99\ \mu\mathrm s .
$$

The minimum conversion time is about $2\ \mu$s, i.e. $6.24$ time constants of the closed loop.
