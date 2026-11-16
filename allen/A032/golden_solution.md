# Golden Solution - A032

## Reference answer

$f_{max} \approx 1.59$ MHz, $f_{min} \approx 0.70$ MHz.

- $f_{-3dB} = 1/(2\pi RC)$ scales as $1/(R\,C)$; the geometry is fixed, so R and C scale with the sheet resistance and the capacitance per unit area.
- Maximum: both low, $R = 0.7R_{nom}$, $C = 0.9C_{nom}$: $f_{max} = 1\ \mathrm{MHz}/(0.7\times0.9) = 1.587$ MHz.
- Minimum: both high, $R = 1.3R_{nom}$, $C = 1.1C_{nom}$: $f_{min} = 1\ \mathrm{MHz}/(1.3\times1.1) = 0.699$ MHz.
(With the sizes $R_{nom} \approx 12.6$ kΩ and $C_{nom} \approx 12.6$ pF this is the same result.)

## Grading notes

+2: 1.59 MHz (±2%) and 0.70 MHz (±2%), with the worst-case combinations (both low / both high). +1: correct combinations with one arithmetic slip, or values given as 1.6 and 0.7 MHz without stating which tolerance extremes produce them. 0: only one component's tolerance used (≈ 1.43 and 0.77 MHz from the resistor alone), or the tolerances added linearly (±40%: ≈ 1.67 and 0.71 MHz, or 1.4 and 0.6 MHz) with otherwise correct reasoning. −2 (asserted as fact): the maximum frequency attributed to the high R and C values, or the tolerances treated as cancelling (both extremes ≈ 1 MHz).
