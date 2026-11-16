# Golden Solution - A139

## Reference answer

$A_v \approx 233$ V/V (noninverting from $v_1$), $f_{-3\,\mathrm{dB}} \approx 7.16$ kHz.

- $g_{m1} = g_{md} = \sqrt{K'_N I_{SS}(W/L)} = \sqrt{110\ \mu \cdot 10\ \mu \cdot 10} = 104.9\ \mu$S (each device at 5 µA).
- $g_{ds2} + g_{ds4} = (0.04 + 0.05) \cdot 5\ \mu = 0.45\ \mu$S, so $R_{out} = 2.22$ MΩ.
- $A_v = 104.9/0.45 = 233$.
- $f_{-3\,\mathrm{dB}} = (g_{ds2} + g_{ds4})/(2\pi \cdot 10\ \mathrm{pF}) = 0.45\ \mu/(62.8\ \mathrm{pF}) = 7.16$ kHz.

## Grading notes

+2: $A_v$ = 226–240 and $f_{-3\,\mathrm{dB}}$ = 7.0–7.3 kHz. +1: both values right in method, with a small slip that leaves one value just outside these ranges (within about ±10 %). 0: one of the two values right and the other wrong, whether the wrong one comes from a computational slip with the right method (e.g. $g_m$ mis-evaluated, giving $A_v \approx 7.4\times10^3$) or from a wrong formula confined to that part (e.g. the gain halved for a single-ended output, though the mirror recovers the full $g_m$; or the bandwidth from $g_m/C$). −2 (asserted as fact): an error that makes both values wrong, e.g. $g_{ds}$ evaluated at $I_{SS}$ (gain 117, 14.3 kHz).
