# Detailed solution - A555

The structure is the same as with 1-bit quantizers: compute one first-order modulator's in-band noise with the given formula, then combine the two modulators, whose signals add coherently and whose uncorrelated quantization noises add in power. Only the quantization step changes, to $\Delta=0.25V_{REF}$.

### Step 1 — Noise of one modulator

Each loop is first order ($L=1$), clocked at $f_S=100$ MHz, with $f_B=1$ MHz, so $2f_B/f_S=0.02$:

$$
n_o=\frac{\Delta}{\sqrt{12}}\,\frac{\pi}{\sqrt3}\left(\frac{2f_B}{f_S}\right)^{1.5}
=\frac{0.25V_{REF}}{\sqrt{12}}\,(1.814)\,(2.828\times10^{-3})
=3.70\times10^{-4}\,V_{REF}.
$$

A single modulator alone gives $20\log_{10}(1/3.70\times10^{-4})=68.6$ dB. Halving $\Delta$ halves $n_o$, which is the usual 6 dB per extra quantizer bit.

### Step 2 — Shaping rate of each loop

Each loop updates once per 100-MHz period; the phases $\phi_1$ and $\phi_2$ only interleave the instants at which the two outputs appear. Each loop's noise-shaping zero is therefore set by its own 100-MHz sampling, and the in-band NTF magnitude is $2\sin(\pi f/100\ \mathrm{MHz})$. The formula of Step 1 applies to each modulator with $f_S=100$ MHz.

### Step 3 — Combine the two outputs

At the PCM adder the common input appears twice, while the two quantization errors, from independent loops, are uncorrelated:

$$
\text{signal power}\times4,\qquad \text{noise power }2n_o^2
\;\Rightarrow\;
n_{o,total}=\frac{\sqrt2\,n_o}{2}=\frac{n_o}{\sqrt2}=2.62\times10^{-4}\,V_{REF},
$$

where dividing by the signal gain of 2 refers the noise to the input.

### Step 4 — Dynamic range

$$
DR=20\log_{10}\frac{V_{REF}}{n_{o,total}}=20\log_{10}\frac{1}{2.62\times10^{-4}}=71.6\ \mathrm{dB}.
$$

This is 6 dB above the 1-bit pair (65.6 dB) and 3 dB above one 2-bit modulator. The 3-dB combining gain assumes uncorrelated errors; correlated errors (for example identical bitstreams for a dc input) would give less. Treating the pair as a single loop at 200 MHz would overstate the result as 77.7 dB.
