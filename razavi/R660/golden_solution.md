# Golden Solution - R660

## Reference answer

Divider output (fundamental): a carrier at $\omega_0/M$ with two sidebands at $\omega_0/M \pm \omega_m$, each with a relative amplitude (sideband/carrier) of $\dfrac{K_{VCO}V_m}{2M\omega_m}$ (narrowband FM). The sideband offset stays $\omega_m$, but the sideband-to-carrier ratio is M times (20 log M dB) smaller than at the VCO output.
- Case $\omega_0/M > \omega_m$: both sidebands lie at positive frequencies, at $\omega_0/M - \omega_m$ and $\omega_0/M + \omega_m$, symmetric about the carrier.
- Case $\omega_0/M < \omega_m$: the lower sideband falls at the negative frequency $\omega_0/M - \omega_m$ and folds to $\omega_m - \omega_0/M$. The output contains $\omega_0/M$, $\omega_m - \omega_0/M$, and $\omega_m + \omega_0/M$. The sidebands are now symmetric about $\omega_m$ rather than about the carrier; the lower one even lies above the carrier if $\omega_m > 2\omega_0/M$.

Derivation:
- VCO phase: $\phi_{VCO}(t) = \omega_0t + \dfrac{K_{VCO}V_m}{\omega_m}\sin\omega_mt$. The VCO output $\cos\phi_{VCO}$ has sidebands at $\omega_0 \pm \omega_m$ with relative amplitude $K_{VCO}V_m/(2\omega_m)$.
- A ÷M circuit produces one output cycle per M input cycles; it divides the total phase by M: $\phi_{div} = \dfrac{\omega_0}{M}t + \beta\sin\omega_mt$, with $\beta = \dfrac{K_{VCO}V_m}{M\omega_m}$. The carrier and the frequency deviation are divided by M; the modulation rate is unchanged.
- For β ≪ 1: $A\cos\phi_{div} \approx A\cos\dfrac{\omega_0}{M}t + \dfrac{A\beta}{2}\left[\cos\left(\dfrac{\omega_0}{M} + \omega_m\right)t - \cos\left(\dfrac{\omega_0}{M} - \omega_m\right)t\right]$.
- In the second case, $\cos[(\omega_0/M - \omega_m)t] = \cos[(\omega_m - \omega_0/M)t]$, so that component appears at $\omega_m - \omega_0/M$.
- The divider's square-wave output also has odd harmonics $k\omega_0/M$, each with sidebands at $\pm\omega_m$ (index kβ, which offsets the 1/k harmonic amplitude, so these sidebands are as large as those of the fundamental). When $\omega_m > \omega_0/M$, these sidebands interleave with the harmonics, and some, e.g. $|3\omega_0/M - \omega_m|$, may land near or below the fundamental.

## Grading notes

+2: three elements: (1) sidebands at $\omega_0/M \pm \omega_m$ (offset not divided); (2) relative amplitude $K_{VCO}V_m/(2M\omega_m)$, or "reduced by M (20 log M) relative to the VCO's sidebands" with the VCO value given; (3) for $\omega_0/M < \omega_m$, the lower sideband folding to $\omega_m - \omega_0/M$. The harmonic sidebands are a plus, not required. +1: the first case and the amplitude correct, with the second case described only vaguely (e.g., "the lower sideband crosses zero frequency"). 0: correct sideband locations in the first case, but the amplitude wrong or missing and the second case missing. -2 (asserted as fact): sideband offset divided by M (sidebands at $\omega_0/M \pm \omega_m/M$), sideband amplitude unchanged or increased by the division, or a divider output claimed to contain only the carrier.
