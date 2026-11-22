# Detailed solution - A420

An ideal DAC's only error is quantization, modelled as noise uniformly distributed over one LSB. The maximum SNR is the rms of the signal divided by the rms of that noise; because the sine uses only part of the full-scale range, the SNR is lower than the textbook full-scale value.

### Step 1 — Quantization noise

$$
\mathrm{LSB}=\frac{V_{REF}}{2^N}=\frac{5\ \mathrm V}{2^{10}}=4.883\ \mathrm{mV}.
$$

A quantization error uniformly distributed between $-\mathrm{LSB}/2$ and $+\mathrm{LSB}/2$ has rms value

$$
v_{n(rms)}=\frac{\mathrm{LSB}}{\sqrt{12}}=\frac{4.883\ \mathrm{mV}}{3.464}=1.410\ \mathrm{mV}.
$$

### Step 2 — Signal rms

A 1-V peak-to-peak sine has amplitude 0.5 V:

$$
v_{s(rms)}=\frac{0.5\ \mathrm V}{\sqrt2}=0.354\ \mathrm V .
$$

### Step 3 — Maximum SNR

$$
\mathrm{SNR}=20\log_{10}\frac{0.354\ \mathrm V}{1.410\ \mathrm{mV}}=20\log_{10}(251)=48.0\ \mathrm{dB}.
$$

### Step 4 — Check with the full-scale formula

A full-scale sine (5 V peak to peak) would give $6.02N+1.76=6.02(10)+1.76=61.96$ dB. The actual signal is five times smaller, which costs $20\log_{10}5=13.98$ dB:

$$
\mathrm{SNR}=61.96-13.98=47.98\ \mathrm{dB}\approx48.0\ \mathrm{dB}.
$$

Using only one fifth of the range wastes about $\log_25=2.3$ bits of resolution.
