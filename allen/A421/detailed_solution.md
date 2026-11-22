# Detailed solution - A421

A DAC's output is proportional to its reference, so any error in $V_{REF}$ appears in full at the full-scale output. For the reference not to cause conversion errors, its noise and its temperature drift must each stay within $\pm\tfrac12$ LSB at full scale.

### Step 1 — Allowed error

$$
\mathrm{LSB}=\frac{V_{REF}}{2^{14}}=\frac{1\ \mathrm V}{16384}=61.0\ \mu\mathrm V,\qquad
\tfrac12\,\mathrm{LSB}=30.5\ \mu\mathrm V .
$$

Since $v_{out}=V_{REF}\cdot D/2^{14}$ for digital word $D$, a reference error $\Delta V_{REF}$ produces an output error $\Delta V_{REF}\cdot D/2^{14}$, which is largest, essentially $\Delta V_{REF}$, at full scale. Hence $|\Delta V_{REF}|\le30.5\ \mu$V.

### Step 2 — Allowed noise

The noise limit depends on how the rms noise is related to the $\pm\tfrac12$-LSB error bound:

- Treating $\tfrac12$ LSB as the peak noise and taking peak $=\sqrt2\times$ rms (sinusoid-like noise):
$$
V_{n(rms)}\le\frac{30.5\ \mu\mathrm V}{\sqrt2}=21.6\ \mu\mathrm V .
$$
- Requiring the rms noise itself to stay below $\tfrac12$ LSB:
$$
V_{n(rms)}\le30.5\ \mu\mathrm V .
$$

So the reference noise must be below about 22–30 µV rms. Stricter criteria give the same order of magnitude: keeping it below the quantization noise $\mathrm{LSB}/\sqrt{12}$ gives 17.6 µV, and keeping a Gaussian noise's $3\sigma$ peak within $\tfrac12$ LSB gives about 10 µV.

### Step 3 — Allowed temperature coefficient

Over 0–100 °C the reference may drift by at most $\tfrac12$ LSB, a fraction

$$
\frac{\Delta V_{REF}}{V_{REF}}\le\frac{30.5\ \mu\mathrm V}{1\ \mathrm V}=30.5\ \mathrm{ppm}
$$

over a 100-°C span, so

$$
TC_{V_{REF}}\le\frac{30.5\ \mathrm{ppm}}{100\ ^\circ\mathrm C}=0.305\ \mathrm{ppm/^\circ C}.
$$

This is far tighter than ordinary on-chip references achieve (typically tens of ppm/°C), which is why high-resolution converters need precision, often trimmed or temperature-compensated, references. If the error were instead referred to the mid-range temperature (±50 °C swing), the limit would relax to 0.61 ppm/°C.
