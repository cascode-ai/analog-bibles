# Golden Solution - A030

## Reference answer

The MiM capacitor (a). With the area advantage of the MOS capacitor removed by the equal capacitance per unit area, what matters for high-frequency shunting is the capacitor's own series resistance and how stable its value is, and there the MiM capacitor wins.

- Series resistance: both MiM plates are metal, so the equivalent series resistance is very small and the capacitor keeps shunting (high Q) up to very high frequencies. The bottom plate of the MOS capacitor is the lightly doped n-well (sheet resistance of the order of 1 kΩ/□, plus the accumulation layer), reached only through the n⁺ contacts at its edges; this distributed resistance in series with the capacitance limits how low the impedance to ground can go at high frequency.
- Voltage dependence: the MOS capacitor has its full value only while the poly-to-well voltage keeps the surface accumulated; signal swings or bias toward depletion reduce it. The MiM capacitance is nearly voltage independent (≈ 50 ppm/V).
- Parasitics: for a grounded shunt capacitor neither type is harmed much by its bottom-plate parasitic, because the plate with the larger parasitic (the MiM bottom plate, or the n-well with its large well-to-substrate junction capacitance) can be the grounded one. This is why the MOS capacitor is popular for grounded bypassing when area is the concern, but under the stated assumption it offers no compensating advantage.

## Grading notes

+2: chooses the MiM capacitor (a) and justifies it mainly by the low series resistance (high Q) of the metal plates versus the resistive n-well bottom plate of (b); the bias/voltage dependence of (b) and the parasitic argument are pluses. +1: MiM chosen with a correct but secondary reason only (voltage coefficient, linearity) and no mention of series resistance. 0: (b) chosen on the correct observation that its large bottom-plate parasitic is harmless when the n-well is grounded, without weighing the n-well series resistance; or MiM chosen with no valid reason. −2 (asserted as fact): (b) chosen because it has higher capacitance per unit area (contradicting the stated assumption), or claims such as the MiM capacitor having a larger series resistance than the n-well plate.
