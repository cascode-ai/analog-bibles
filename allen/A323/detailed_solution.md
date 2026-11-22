# Detailed solution - A323

Because the dominant pole is set by $C_L$ while the nondominant poles are fixed, GB scales as $1/C_L$. The largest GB compatible with a 60° phase margin is therefore fixed by the nondominant poles alone; the corresponding $C_L$ is the smallest allowed load.

### Step 1 — Maximum GB for a 60° phase margin

With the dominant pole contributing −90°, the nondominant poles may contribute at most 30° at GB:

$$
2\tan^{-1}\frac{GB}{0.702\ \mathrm{G}}+\tan^{-1}\frac{GB}{1.652\ \mathrm{G}}+\tan^{-1}\frac{GB}{4.176\ \mathrm{G}}+\tan^{-1}\frac{GB}{555\ \mathrm{G}}=30^\circ .
$$

The solution is

$$
GB_{\max}=143\times10^6\ \mathrm{rad/s}\ (22.8\ \mathrm{MHz}),
$$

with lags of 2 × 11.53°, 4.96°, 1.96° and 0.01°.

### Step 2 — Minimum load capacitance

$$
|p_d|=\frac{GB_{\max}}{A_{vd}(0)}=\frac{143\times10^6}{3678}=3.89\times10^4\ \mathrm{rad/s},\qquad
C_{L,\min}=\frac1{|p_d|R_{out}}=\frac1{(3.89\times10^4)(7.44\times10^6)}=3.45\ \mathrm{pF}.
$$

A smaller $C_L$ would raise GB further and push the phase margin below 60°.

### Step 3 — Improvement over the original load

With $C_L=10$ pF, $GB=3678/[(7.44\ \mathrm{M\Omega})(10\ \mathrm{pF})]=49$ Mrad/s (7.9 MHz), so reducing the load to 3.45 pF raises GB by about 2.9 times. (Evaluating the phase at the exact unity-gain crossover gives $GB\approx150$ Mrad/s and $C_L\approx3.3$ pF.)
