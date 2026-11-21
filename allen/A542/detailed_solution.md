# Detailed solution - A542

Find the oversampling ratio, write the in-band quantization noise of an $L$th-order loop with NTF $(1-z^{-1})^L$, and compare it with the noise of an ideal 16-bit Nyquist-rate quantizer for $L=1,2,3$. The smallest $L$ whose noise is below the limit is the answer.

### Step 1 — Oversampling ratio

$$
M=\frac{f_s}{2f_B}=\frac{10\ \mathrm{MHz}}{2(100\ \mathrm{kHz})}=50 .
$$

### Step 2 — In-band noise of an $L$th-order loop

With $z=e^{j\theta}$, $\theta=2\pi f/f_s$, the NTF magnitude is $|1-e^{-j\theta}|^L=(2\sin(\pi f/f_s))^L\approx(2\pi f/f_s)^L$ in the band. The quantization error has density $\Delta^2/(12)\cdot2/f_s$, so

$$
n_0^2=\frac{\Delta^2}{12}\,\frac2{f_s}\int_0^{f_B}\left(\frac{2\pi f}{f_s}\right)^{2L}df
=\frac{\Delta^2}{12}\,\frac{\pi^{2L}}{2L+1}\left(\frac{2f_B}{f_s}\right)^{2L+1},
$$

$$
n_0=\frac{\Delta}{\sqrt{12}}\,\frac{\pi^L}{\sqrt{2L+1}}\,M^{-(L+1/2)} .
$$

### Step 3 — Compare with the 16-bit limit

With a 1-bit quantizer, $\Delta=V_{REF}/2$, and the allowed noise is $V_{REF}/(2^{16}\sqrt{12})$. Their ratio is

$$
\frac{n_0}{V_{REF}/(2^{16}\sqrt{12})}=2^{15}\,\frac{\pi^L}{\sqrt{2L+1}}\,M^{-(L+1/2)} .
$$

For $L=3$: $2^{15}\,\dfrac{\pi^3}{\sqrt7}\,(50)^{-3.5}=32768\times11.72\times1.13\times10^{-6}=0.43$.

| $L$ | Ratio $n_0$/limit | Margin | Result |
|---|---|---|---|
| 1 | 168 | −44.5 dB | fails |
| 2 | 8.2 | −18.3 dB | fails |
| 3 | 0.43 | +7.2 dB | meets |

### Step 4 — Result

The minimum number of loops is

$$
L=3 .
$$

Equivalently, for a full-scale sine wave (amplitude $V_{REF}/2$) the peak SQNR is about 80 dB for $L=2$ and about 105 dB for $L=3$, against the $6.02(16)+1.76=98$ dB of an ideal 16-bit converter.
