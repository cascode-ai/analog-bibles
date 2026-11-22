# Detailed solution - A320

With the compensation zero placed on the second pole, the two cancel, and the loop phase at the unity-gain frequency comes from the dominant pole (−90°) and the two higher poles. Setting the phase margin to 60° gives GB, and $GB=g_{m1}/C_c$ gives $C_c$.

### Step 1 — Remaining poles

After cancellation, the open-loop response has the dominant pole and two poles at $-10^8$ rad/s. Well above the dominant pole, the phase at frequency $\omega$ is

$$
\angle A(j\omega)=-90^\circ-2\tan^{-1}\frac{\omega}{10^8\ \mathrm{rad/s}} .
$$

### Step 2 — GB for a 60° phase margin

Evaluating the phase at $\omega=GB$:

$$
180^\circ-90^\circ-2\tan^{-1}\frac{GB}{10^8}=60^\circ\;\Rightarrow\;\tan^{-1}\frac{GB}{10^8}=15^\circ,
$$
$$
GB=10^8\tan15^\circ=26.8\times10^6\ \mathrm{rad/s}\ (4.26\ \mathrm{MHz}).
$$

### Step 3 — Compensation capacitor

$$
C_c=\frac{g_{m1}}{GB}=\frac{500\ \mu\mathrm S}{26.8\times10^6\ \mathrm{s^{-1}}}=18.7\ \mathrm{pF}.
$$

If the phase is instead evaluated at the true unity-gain frequency, where the two higher poles also reduce the magnitude by a factor of about 1.07, the result is $g_{m1}/C_c\approx28.7$ Mrad/s and $C_c\approx17.4$ pF.
