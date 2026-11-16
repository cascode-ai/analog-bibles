# Detailed solution - R660

**Approach.** The ripple frequency-modulates the VCO. Integrate the instantaneous frequency to get the VCO phase, use the fact that a ÷M circuit divides the *total phase* by M, and expand the divider output with the narrowband-FM approximation. This gives a carrier at $\omega_0/M$ and two sidebands at $\pm\omega_m$ from it. Finally, examine what happens when the lower sideband frequency $\omega_0/M - \omega_m$ becomes negative.

### Step 1 — VCO phase with a ripple on the control line

The instantaneous frequency of the VCO is

$$\omega_{out}(t) = \omega_0 + K_{VCO}V_{cont}(t) = \omega_0 + K_{VCO}V_m\cos\omega_mt .$$

Phase is the time integral of instantaneous frequency:

$$
\begin{aligned}
\phi_{VCO}(t) &= \int_0^t\omega_{out}(t')\,dt' = \omega_0t + K_{VCO}V_m\int_0^t\cos\omega_mt'\,dt'\\
&= \omega_0t + \frac{K_{VCO}V_m}{\omega_m}\sin\omega_mt .
\end{aligned}
$$

The VCO output is $V_{VCO}(t) = A\cos\phi_{VCO}(t)$. This is frequency modulation (FM) with peak frequency deviation $K_{VCO}V_m$ and **modulation index**

$$\beta_{VCO} = \frac{K_{VCO}V_m}{\omega_m}\quad\text{(peak phase deviation, in rad)}.$$

### Step 2 — Narrowband FM spectrum at the VCO output

Expand with $\cos(a + b) = \cos a\cos b - \sin a\sin b$, where $a = \omega_0t$ and $b = \beta_{VCO}\sin\omega_mt$:

$$V_{VCO} = A\cos\omega_0t\,\cos(\beta_{VCO}\sin\omega_mt) - A\sin\omega_0t\,\sin(\beta_{VCO}\sin\omega_mt).$$

The ripple is small, so $\beta_{VCO} \ll 1$, and the small-angle approximations $\cos x \approx 1$, $\sin x \approx x$ apply:

$$V_{VCO} \approx A\cos\omega_0t - A\beta_{VCO}\sin\omega_mt\,\sin\omega_0t .$$

Use the product identity $\sin x\sin y = \tfrac12[\cos(x - y) - \cos(x + y)]$ with $x = \omega_0t$ and $y = \omega_mt$:

$$V_{VCO} \approx A\cos\omega_0t + \frac{A\beta_{VCO}}{2}\Big[\cos(\omega_0 + \omega_m)t - \cos(\omega_0 - \omega_m)t\Big].$$

So the VCO output has a carrier at $\omega_0$ and sidebands at $\omega_0 \pm \omega_m$, each with relative amplitude

$$\frac{\text{sideband}}{\text{carrier}}\bigg|_{VCO} = \frac{\beta_{VCO}}{2} = \frac{K_{VCO}V_m}{2\omega_m}.$$

### Step 3 — What a ÷M circuit does to the phase

A divide-by-M circuit produces one output cycle for every M input cycles. Its output edges occur when the input phase has advanced by $2\pi M$, so the output phase is the input phase divided by M:

$$
\begin{aligned}
\phi_{div}(t) &= \frac{\phi_{VCO}(t)}{M} = \frac{\omega_0}{M}\,t + \frac{K_{VCO}V_m}{M\,\omega_m}\sin\omega_mt\\
&= \frac{\omega_0}{M}\,t + \beta\sin\omega_mt, \qquad \beta = \frac{K_{VCO}V_m}{M\,\omega_m} = \frac{\beta_{VCO}}{M}.
\end{aligned}
$$

Three observations:

- the carrier frequency is divided by M: $\omega_0 \to \omega_0/M$;
- the peak frequency deviation is divided by M: $K_{VCO}V_m \to K_{VCO}V_m/M$ (the instantaneous output frequency is $\omega_{out}(t)/M$);
- the **modulation rate $\omega_m$ is unchanged**: the phase still wiggles at $\omega_m$, just with $M$ times less amplitude.

### Step 4 — Spectrum at the divider output

The divider output is a square wave $\mathrm{sq}(\phi_{div})$; take first its fundamental, $A\cos\phi_{div}(t)$. Repeating the expansion of Step 2 with $\omega_0 \to \omega_0/M$ and $\beta_{VCO} \to \beta$ (and $\beta \ll 1$, even more so than at the VCO):

$$V_{div}(t) \approx A\cos\frac{\omega_0}{M}t + \frac{A\beta}{2}\left[\cos\left(\frac{\omega_0}{M} + \omega_m\right)t - \cos\left(\frac{\omega_0}{M} - \omega_m\right)t\right].$$

- **Carrier** at $\omega_0/M$.
- **Sidebands** at $\omega_0/M \pm \omega_m$: the offset from the carrier is still $\omega_m$, *not* $\omega_m/M$.
- **Relative amplitude** of each sideband:
$$\frac{\text{sideband}}{\text{carrier}}\bigg|_{div} = \frac{\beta}{2} = \frac{K_{VCO}V_m}{2M\omega_m},$$
which is $M$ times smaller than at the VCO output, i.e. $20\log_{10}M$ dB lower.

**Intuition.** The divider keeps the output amplitude but divides every phase excursion by M. A smaller phase wiggle means proportionally smaller sidebands relative to the carrier.

### Step 5 — Case 1: $\omega_0/M > \omega_m$

Both sideband frequencies are positive:

$$\omega_{L} = \frac{\omega_0}{M} - \omega_m > 0, \qquad \omega_U = \frac{\omega_0}{M} + \omega_m .$$

The spectrum looks like the VCO's, scaled down in frequency: a carrier at $\omega_0/M$ with two equal sidebands placed symmetrically at $\pm\omega_m$ around it, each $K_{VCO}V_m/(2M\omega_m)$ relative to the carrier.

**Example.** $\omega_0 = 2\pi(1\ \mathrm{GHz})$, $M = 100$, so $\omega_0/M = 2\pi(10\ \mathrm{MHz})$; $K_{VCO}V_m = 2\pi(100\ \mathrm{kHz})$ and $\omega_m = 2\pi(1\ \mathrm{MHz})$.

- VCO: sidebands at 999 and 1001 MHz, relative amplitude $100\ \mathrm{kHz}/(2\times1\ \mathrm{MHz}) = 0.05$ (−26 dBc).
- Divider: sidebands at 9 and 11 MHz, relative amplitude $0.05/100 = 5\times10^{-4}$ (−66 dBc).

### Step 6 — Case 2: $\omega_0/M < \omega_m$

Now the "lower" sideband frequency is negative:

$$\frac{\omega_0}{M} - \omega_m < 0 .$$

A cosine is an even function, $\cos(-x) = \cos x$, so

$$\cos\left[\left(\frac{\omega_0}{M} - \omega_m\right)t\right] = \cos\left[\left(\omega_m - \frac{\omega_0}{M}\right)t\right].$$

The negative-frequency component **folds** to the positive frequency $\omega_m - \omega_0/M$. The divider output then contains:

| Component | Frequency | Relative amplitude |
|---|---|---|
| carrier | $\omega_0/M$ | 1 |
| folded lower sideband | $\omega_m - \omega_0/M$ | $K_{VCO}V_m/(2M\omega_m)$ (sign inverted) |
| upper sideband | $\omega_m + \omega_0/M$ | $K_{VCO}V_m/(2M\omega_m)$ |

The two sidebands are no longer symmetric about the carrier; they are symmetric about $\omega_m$ (at $\omega_m \pm \omega_0/M$). If $\omega_m > 2\omega_0/M$, even the "lower" sideband lies *above* the carrier, and both sidebands are on the same side of it.

**Example.** Same numbers but $\omega_m = 2\pi(25\ \mathrm{MHz}) > \omega_0/M = 2\pi(10\ \mathrm{MHz})$. The divider output has the carrier at 10 MHz and sidebands at $25 - 10 = 15$ MHz and $25 + 10 = 35$ MHz, each with relative amplitude $100\ \mathrm{kHz}/(2\times100\times25\ \mathrm{MHz}) = 2\times10^{-5}$ (−94 dBc). The VCO output itself had ordinary sidebands at $1000 \pm 25$ MHz.

### Step 7 — Harmonics of the square-wave output (refinement)

A digital divider produces a square wave, which also contains odd harmonics at $k\omega_0/M$ ($k = 3, 5, \dots$), with amplitudes falling as $1/k$. The $k$-th harmonic has phase $k\phi_{div}$, i.e. modulation index $k\beta$, so its sidebands at $k\omega_0/M \pm \omega_m$ have absolute amplitude $(A/k)(k\beta/2) = A\beta/2$, the same as those of the fundamental. In Case 2 these sidebands interleave with the harmonics; for example, $|3\omega_0/M - \omega_m|$ may land near or even below the fundamental (in the example above, $30 - 25 = 5$ MHz). In Case 1 they stay clustered around each harmonic.

### Result

The divider output has a carrier at $\omega_0/M$ and sidebands at $\omega_0/M \pm \omega_m$ (offset $\omega_m$, not divided), each with sideband-to-carrier ratio

$$\frac{K_{VCO}V_m}{2M\omega_m},$$

i.e. $M$ times ($20\log M$ dB) lower than at the VCO output.

- **$\omega_0/M > \omega_m$:** both sidebands are at positive frequencies, $\omega_0/M - \omega_m$ and $\omega_0/M + \omega_m$, symmetric about the carrier.
- **$\omega_0/M < \omega_m$:** the lower sideband falls at a negative frequency and folds to $\omega_m - \omega_0/M$. The output contains $\omega_0/M$, $\omega_m - \omega_0/M$ and $\omega_m + \omega_0/M$; the sidebands are symmetric about $\omega_m$ rather than about the carrier (both lie above the carrier if $\omega_m > 2\omega_0/M$).

**Common mistake.** Dividing the sideband offset by M, i.e. placing the sidebands at $\omega_0/M \pm \omega_m/M$. The divider scales the *phase* (and hence the carrier frequency and the frequency deviation) by $1/M$, but the phase still varies at the rate $\omega_m$ set by the ripple.

**Common mistake.** Assuming the relative sideband level is unchanged (or larger) after division. The modulation index $\beta = K_{VCO}V_m/(M\omega_m)$ drops by M, so the sidebands drop by $20\log M$ dB relative to the carrier.

**Common mistake.** In the second case, keeping a "sideband" at the negative frequency $\omega_0/M - \omega_m$ or simply saying it "disappears". A real signal's negative-frequency component reappears at the mirrored positive frequency $\omega_m - \omega_0/M$.
