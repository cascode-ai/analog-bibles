# Detailed solution - A541

Write the loop equation of the modulator to obtain the noise transfer function (NTF), multiply the white quantization-noise density by $|\mathrm{NTF}|$, and integrate the shaped noise power over the signal band. Setting the in-band rms noise equal to that of an ideal 10-bit quantizer gives the largest usable bandwidth $f_B$.

### Step 1 — Signal and noise transfer functions

From [Fig. 1], the output is the integrator output plus the quantization noise $Q$:

$$
V_{out}=Q+\frac{k}{z-1}\left(V_{in}-V_{out}\right)
\;\Longrightarrow\;
V_{out}=\frac{k}{z-1+k}\,V_{in}+\frac{z-1}{z-1+k}\,Q .
$$

$$
\mathrm{STF}(z)=\frac{k}{z-1+k},\qquad \mathrm{NTF}(z)=\frac{z-1}{z-1+k}.
$$

### Step 2 — Output noise spectrum for $k=1$

With $k=1$, $\mathrm{NTF}=(z-1)/z=1-z^{-1}$ and $\mathrm{STF}=z^{-1}$. On the unit circle, $z=e^{j\theta}$ with $\theta=2\pi f/f_s$,

$$
|\mathrm{NTF}|=|1-e^{-j\theta}|=2\sin\frac{\theta}{2}=2\sin\frac{\pi f}{f_s}.
$$

With $V_{in}=0$ and the one-sided input density $(\Delta/\sqrt{12})\sqrt{2/f_s}$, the output noise spectral magnitude is

$$
|N(f)|=\frac{\Delta}{\sqrt{12}}\sqrt{\frac2{f_s}}\;2\sin\frac{\pi f}{f_s}=\frac{2\Delta}{\sqrt{6f_s}}\sin\frac{\pi f}{f_s}.
$$

### Step 3 — Bandwidth for $k=1$

The in-band noise power, using $\sin x\approx x$ for $f_B\ll f_s$, is

$$
n_0^2=\frac{\Delta^2}{12}\,\frac2{f_s}\int_0^{f_B}4\sin^2\frac{\pi f}{f_s}\,df
\approx\frac{\Delta^2}{12}\,\frac{\pi^2}{3}\left(\frac{2f_B}{f_s}\right)^3 .
$$

The 10-bit requirement is $n_0^2\le\Delta^2/(12\cdot2^{20})$:

$$
\left(\frac{2f_B}{f_s}\right)^3\le\frac{3}{\pi^2\,2^{20}}=2.90\times10^{-7}
\;\Longrightarrow\;
\frac{2f_B}{f_s}\le6.62\times10^{-3}.
$$

With $f_s=10$ MHz,

$$
f_B\le33.1\ \text{kHz},
$$

an oversampling ratio $M=f_s/(2f_B)\approx151$.

### Step 4 — Output noise spectrum for $k=0.5$

Now $\mathrm{NTF}=(z-1)/(z-0.5)$, and with $z=e^{j\theta}$,

$$
|\mathrm{NTF}|^2=\frac{|e^{j\theta}-1|^2}{|e^{j\theta}-0.5|^2}=\frac{2(1-\cos\theta)}{1.25-\cos\theta},
$$

so

$$
|N(f)|=\frac{\Delta}{\sqrt{6f_s}}\cdot\frac{2\sin(\pi f/f_s)}{\sqrt{1.25-\cos(2\pi f/f_s)}} .
$$

The STF $0.5/(z-0.5)$ is still unity at dc. At $f_s/2$ the NTF magnitude is $2/1.5=4/3$ instead of 2, but in the signal band it is larger: for $\theta\ll1$ the denominator $\approx0.25$, so

$$
|\mathrm{NTF}|\approx\frac{\theta}{0.5}=\frac{4\pi f}{f_s},
$$

twice the $k=1$ value $2\pi f/f_s$.

### Step 5 — Bandwidth for $k=0.5$

Twice the NTF magnitude means four times the in-band noise power for the same $f_B$. Since $n_0^2\propto f_B^3$, the bandwidth must shrink by $4^{1/3}=1.587$:

$$
f_B\approx\frac{33.1\ \text{kHz}}{1.587}=20.8\ \text{kHz},\qquad M\approx240 .
$$

A numerical integration of the exact $|\mathrm{NTF}|^2$ gives 33.09 kHz and 20.85 kHz, confirming both approximations. Reducing the integrator gain to $k=0.5$ makes the loop less aggressive at low frequencies and therefore shapes the noise less, costing about 37% of the bandwidth.
