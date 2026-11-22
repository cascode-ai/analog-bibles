# Detailed solution - G290

Write the closed-loop gain in terms of the loop gain $T=af$, evaluate it at the unity-loop-gain frequency $\omega_0$, where the phase margin fixes $T$ completely, and compare with the low-frequency gain.

### Step 1 — Closed-loop gain in terms of $T$

For a negative-feedback amplifier with forward gain $a$ and frequency-independent feedback factor $f$,
$$
A(j\omega)=\frac{a}{1+af}=\frac1f\cdot\frac{T(j\omega)}{1+T(j\omega)} .
$$
At low frequency $T_0\gg1$, so $A_0\approx1/f$. The peaking relative to the low-frequency value is therefore $|T/(1+T)|$.

### Step 2 — Loop gain at $\omega_0$

At $\omega_0$, $|T|=1$ by definition, and the phase margin is the distance of $\angle T$ from $-180^\circ$:
$$
\angle T(j\omega_0)=-180^\circ+\mathrm{PM}=-160^\circ,\qquad T(j\omega_0)=e^{-j160^\circ}.
$$

### Step 3 — Magnitude of $1+T$

Adding two unit vectors separated by $160^\circ$:
$$
|1+e^{-j160^\circ}|=\sqrt{(1+\cos160^\circ)^2+\sin^2160^\circ}=\sqrt{2+2\cos160^\circ}=2\cos80^\circ=2\sin\frac{\mathrm{PM}}{2}=0.347 .
$$

### Step 4 — Peaking

With $|T|=1$,
$$
|A(j\omega_0)|=\frac1f\cdot\frac{|T|}{|1+T|}=\frac1f\cdot\frac{1}{2\sin(\mathrm{PM}/2)}=\frac1f\cdot\frac1{0.347}=\frac{2.88}{f}.
$$
Compared with $A_0\approx1/f$, the closed-loop gain at the unity-loop-gain frequency is about **2.88 times** the low-frequency value, i.e. $20\log_{10}2.88=9.2$ dB of peaking. The small phase margin places $T$ close to $-1$, which makes $|1+T|$ small.
