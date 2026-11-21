# Detailed solution - G291

The phase margin is $180^\circ+\angle T$ evaluated at the frequency $f_c$ where the loop-gain magnitude is unity. First obtain the low-frequency loop gain from the required closed-loop gain, then locate $f_c$ with the three-pole magnitude, and finally add the three pole phases at $f_c$.

### Step 1 — Low-frequency loop gain

For negative feedback, $A_0=a_0/(1+T_0)$ with $T_0=a_0f$. With $a_0=40{,}000$ and $A_0=400$:
$$
T_0=\frac{a_0}{A_0}-1=\frac{40{,}000}{400}-1=99,\qquad f=\frac{T_0}{a_0}=0.0025 .
$$
Since $f$ is frequency independent, $T(j\omega)=f\,a(j\omega)$ has the same poles as $a$:
$$
T(jf_\mathrm{s})=\frac{99}{\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{200\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{4\ \mathrm{MHz}}\right)},
$$
where $f_\mathrm{s}$ denotes signal frequency.

### Step 2 — Unity-loop-gain frequency

The first pole is far below the crossover, so it alone would place $|T|=1$ near $T_0\times2\ \mathrm{kHz}\approx200$ kHz. That is at the second pole, which also attenuates, so the crossover is somewhat lower. Solving $|T|=1$ numerically gives $f_c\approx156$ kHz, where the three pole factors are
$$
\sqrt{1+\left(\tfrac{156}{2}\right)^2}=78.0,\qquad
\sqrt{1+\left(\tfrac{156}{200}\right)^2}=1.27,\qquad
\sqrt{1+\left(\tfrac{156}{4000}\right)^2}=1.00,
$$
and $99/(78.0\times1.27\times1.00)=1.00$ as required.

### Step 3 — Phase margin

Each pole contributes $-\tan^{-1}(f_c/f_p)$:
$$
\angle T(f_c)=-\tan^{-1}78-\tan^{-1}0.78-\tan^{-1}0.039=-89.3^\circ-38.0^\circ-2.2^\circ=-129.5^\circ .
$$
Therefore
$$
\mathrm{PM}=180^\circ+\angle T(f_c)\approx50^\circ .
$$
A cruder estimate that takes the crossover from the $-20$ dB/dec asymptote alone ($f_c\approx198$ kHz) overestimates $f_c$ and gives $\mathrm{PM}\approx43^\circ$; including the second pole's attenuation gives the better value of about $50^\circ$.
