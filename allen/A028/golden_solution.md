# Golden Solution - A028

## Reference answer

$\Delta V_{T0} \approx 25$ mV: $V_{T0} \approx 0.306$ V for 200 Å and ≈ 0.330 V for 210 Å.

- Terms independent of $t_{ox}$: $\phi_{MS} = -0.377 - 0.563 = -0.940$ V, $-2\phi_F = 0.754$ V, $Q_{b0} = -8.66\times10^{-8}\ \mathrm{C/cm^2}$, $Q_{ss} = 1.6\times10^{-9}\ \mathrm{C/cm^2}$.
- 200 Å: $C_{ox} = 1.727\times10^{-7}\ \mathrm{F/cm^2}$, $-Q_{b0}/C_{ox} = 0.501$ V, $Q_{ss}/C_{ox} = 0.0093$ V → $V_{T0} = 0.306$ V.
- 210 Å: $C_{ox} = 1.644\times10^{-7}\ \mathrm{F/cm^2}$, $-Q_{b0}/C_{ox} = 0.526$ V, $Q_{ss}/C_{ox} = 0.0097$ V → $V_{T0} = 0.330$ V.
- Difference: $(-Q_{b0} - Q_{ss})\,\Delta t_{ox}/\varepsilon_{ox} = (8.66 - 0.16)\times10^{-8}\times(10\times10^{-8})/(3.45\times10^{-13}) \approx 0.0246$ V ≈ 25 mV; the thicker oxide has the higher threshold.

## Grading notes

+2: ΔV_T0 = 23–27 mV with the thicker-oxide device higher (individual values ≈ 0.306 V and ≈ 0.330 V, or a direct calculation of the change of the charge terms). +1: correct difference with one of the absolute values off by a slip, or the right magnitude with the direction not stated. 0: correct method with an arithmetic error giving a wrong difference. −2 (asserted as fact): the threshold claimed unchanged (ignoring the $1/C_{ox}$ terms), lower for the thicker oxide, or a difference of 5% of $V_{T0}$ (≈ 15 mV) by simple scaling of the whole threshold.
