# Detailed solution - G301

A shunt capacitor at the second-stage input only lowers the dominant pole; unlike Miller compensation, it does not split the 500-kHz pole away. So both the 500-kHz and 10-MHz poles stay in the loop and together set the highest unity-gain frequency compatible with a $60^\circ$ margin. The dominant pole is then placed to cross over there, and the capacitor follows from the node resistance.

### Step 1 — Unity-gain frequency for a $60^\circ$ margin

With unity feedback, $T=a$. At the crossover $f_u$, far above the dominant pole, that pole contributes $-90^\circ$, so the two non-dominant poles may contribute only $30^\circ$:
$$
\tan^{-1}\frac{f_u}{500\ \mathrm{kHz}}+\tan^{-1}\frac{f_u}{10\ \mathrm{MHz}}=30^\circ .
$$
Solving numerically gives $f_u=271$ kHz (the 500-kHz pole contributes $28.4^\circ$ and the 10-MHz pole $1.6^\circ$).

### Step 2 — Dominant pole

With $a_0=10^{108/20}=2.51\times10^5$ and a $-20$ dB/dec roll-off below 500 kHz, the asymptotic gain is $|a|=a_0|p_1|/f$. Setting it to unity at $f_u$:
$$
\frac{|p_1|}{2\pi}=\frac{f_u}{a_0}=\frac{271\ \mathrm{kHz}}{2.51\times10^5}=1.08\ \mathrm{Hz}.
$$

### Step 3 — Shunt capacitance

The dominant pole is the $RC$ pole of the second-stage input node, $|p_1|=1/(R_1C)$ with $R_1=1.95\ \mathrm{M\Omega}$. (The original 30-kHz pole corresponds to only $1/(2\pi\times30\ \mathrm{kHz}\times1.95\ \mathrm{M\Omega})=2.7$ pF at this node, negligible beside the added capacitor.) Hence
$$
C=\frac{1}{2\pi(1.08\ \mathrm{Hz})(1.95\ \mathrm{M\Omega})}=76\ \mathrm{nF},
$$
and in this asymptotic design the open-loop gain reaches 0 dB at about **270 kHz**.

### Step 4 — Exact check and comparison

At 271 kHz the non-dominant poles reduce $|a|$ by $\sqrt{(1+0.542^2)(1+0.027^2)}=1.14$. With 76 nF the true 0-dB frequency is therefore lower, 245 kHz, with $\mathrm{PM}\approx63^\circ$. Requiring $|a|=1$ exactly at 271 kHz raises the pole to $1.08\times1.14=1.23$ Hz and gives $C=76\ \mathrm{nF}/1.14=67$ nF, with $\mathrm{PM}=60^\circ$ at 271 kHz.

Compared with Miller compensation of the same amplifier (about 6 pF, 0 dB near 5.8 MHz), the bandwidth is about 20 times lower, because the 500-kHz pole remains in the loop, and the shunt capacitor is four orders of magnitude larger: it lacks the Miller multiplication $g_mR_2\approx550$ and must also produce a 20 times lower dominant pole. Result: $C\approx76$ nF (67 nF exactly), 0 dB at about 270 kHz.
