# Detailed solution - A554

Compute the in-band noise of one first-order modulator with the given formula, then combine the two modulators: the signal adds coherently at the PCM adder while their uncorrelated quantization noises add in power. Referring the combined noise back to the input gives the dynamic range.

### Step 1 — Noise of one modulator

Each $\Delta\Sigma_i$ is a single first-order loop ($L=1$) clocked at $f_S=100$ MHz with signal band $f_B=1$ MHz, so $2f_B/f_S=0.02$. With $\Delta=0.5V_{REF}$:

$$
n_o=\frac{\Delta}{\sqrt{12}}\,\frac{\pi}{\sqrt3}\left(\frac{2f_B}{f_S}\right)^{1.5}
=\frac{0.5V_{REF}}{\sqrt{12}}\,(1.814)\,(0.02)^{1.5}
=(0.1443)(1.814)(2.828\times10^{-3})\,V_{REF}=7.40\times10^{-4}\,V_{REF}.
$$

On its own, one modulator would give $20\log_{10}(1/7.40\times10^{-4})=62.6$ dB.

### Step 2 — Why the noise shaping stays at 100 MHz

Each loop updates its integrator and quantizer once per 100-MHz period; $\phi_1$ and $\phi_2$ only interleave the times at which the two quantizer outputs appear. The noise-shaping zero of each loop is therefore set by its own sampling rate, and its in-band NTF magnitude remains $2\sin(\pi f/100\ \mathrm{MHz})$. The pair is two parallel first-order modulators at 100 MHz, not one first-order loop at 200 MHz.

### Step 3 — Combine the two outputs

Both modulators see the same $v_{in}$, so at the adder each contributes the same signal $S$ and its own error $e_i$ with rms value $n_o$. The errors come from independent loops and, in the white-noise model behind the given formula, are uncorrelated:

$$
\text{signal: }2S\ (\text{power}\times4),\qquad
\text{noise power: }n_o^2+n_o^2=2n_o^2 .
$$

Dividing by the signal gain of 2 to refer the noise to the input,

$$
n_{o,total}=\frac{\sqrt{2}\,n_o}{2}=\frac{n_o}{\sqrt2}=\frac{7.40\times10^{-4}}{\sqrt2}\,V_{REF}=5.24\times10^{-4}\,V_{REF}.
$$

Equivalently, averaging the two outputs keeps the signal and halves the noise power.

### Step 4 — Dynamic range

$$
DR=20\log_{10}\frac{V_{REF}}{n_{o,total}}=20\log_{10}\frac{1}{5.24\times10^{-4}}=65.6\ \mathrm{dB},
$$

3 dB above a single modulator. The 3-dB gain rests on the two quantization errors being uncorrelated; if they were correlated (for example identical bitstreams for a dc input), the improvement would be smaller, down to none. Treating the pair as one loop at 200 MHz would instead predict 71.6 dB, which the 100-MHz loops cannot deliver.
