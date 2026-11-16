# Golden Solution - R619

## Reference answer

About 0.17 V peak differential for the 2-mV design, versus about 0.43 V for the 5-mV design: 2.5 times smaller. Lower offset requires larger devices, which lowers the overdrive at a given current and narrows the linear input range (offset–linearity trade-off).
- 2 mV: $W = 40.5\ \mu$m, $W/L = 81$, $V_{ov} = \sqrt{1\ \mathrm{mA}/(134\ \mu\mathrm{A/V^2}\times81)} = 0.304$ V; HD3 ≈ $V_m^2/(32V_{ov}^2) = 0.01$ → $V_m = 0.566\times0.304 = 0.172$ V (0.167 V with the exact square-law characteristic).
- 5 mV: $W = 6.48\ \mu$m, $V_{ov} = 0.759$ V → $V_m$ ≈ 0.43 V (0.418 V exact).
- Since $V_{OS} \propto 1/\sqrt{W}$ and $V_{ov} \propto 1/\sqrt{W}$, the 1%-THD swing scales in proportion to the allowed offset ($V_m/V_{OS}$ ≈ 86 in both designs).

## Grading notes

+2: ≈ 0.17 V (accept 0.16–0.18 V peak, or the peak-to-peak equivalent when labelled) and the comparison with ≈ 0.42–0.43 V for the 5-mV design (2.5× smaller), with the explanation that larger devices mean a lower overdrive. +1: correct value with the comparison only qualitative. 0: right method with a slip moving the result by more than 10%, or one of the two designs wrong. -2 (asserted as fact): the swing claimed to grow with the tighter offset, a wrong distortion formula, or a second harmonic used for the symmetric pair.
