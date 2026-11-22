# Detailed solution - A030

A shunt capacitor works only if its impedance to ground stays small at the frequencies to be removed. Since both capacitors have the same capacitance per unit area, area is no longer a differentiator; compare the properties that set the high-frequency impedance and its stability: series resistance, voltage dependence and parasitics.

### Step 1 — What limits a shunt capacitor at high frequency

A real capacitor behaves approximately as its capacitance $C$ in series with an equivalent series resistance $R_s$:

$$
Z(j\omega)=R_s+\frac{1}{j\omega C},\qquad |Z|\to R_s\ \text{for}\ \omega\gg\frac{1}{R_sC}.
$$

Above the corner $1/(2\pi R_sC)$ the impedance stops falling and levels off at $R_s$, so the capacitor no longer shunts effectively. A good high-frequency shunt needs a small $R_s$ (a high quality factor) and a capacitance that does not change with the node voltage.

### Step 2 — Series resistance

**MiM capacitor (a).** Both plates are metal, the bottom plate being Metal 4 itself and the top plate a dedicated metal layer contacted from Metal 5. The plate resistance is a few tens of mΩ/□ or less, so $R_s$ is very small and the capacitor keeps shunting up to very high frequencies.

**Accumulation MOS capacitor (b).** The bottom plate is the lightly doped n-well, with sheet resistance of the order of 1 kΩ/□, reduced only partly by the accumulation layer under the gate. It is contacted only through the n⁺ diffusions at its edges, so current must flow laterally under the polysilicon. This distributed resistance in series with the capacitance sets a floor on the impedance to ground at high frequency.

### Step 3 — Voltage dependence and parasitics

The MOS capacitor has its full value only while the polysilicon-to-well voltage keeps the n-well surface accumulated. Signal swing or bias toward depletion lowers the capacitance, so the shunt becomes signal dependent. The MiM capacitance is nearly voltage independent (of the order of 50 ppm/V).

Bottom-plate parasitics matter little here: in a grounded shunt the plate with the larger parasitic, the MiM bottom plate or the n-well with its large well-to-substrate junction capacitance, can be the grounded one. That is why MOS capacitors are popular for grounded bypassing when area is the main concern, because their gate-oxide capacitance per unit area is normally much higher. Under the stated equal capacitance per unit area, that advantage disappears.

### Step 4 — Choice

The **MiM capacitor (a)** is better suited for shunting high-frequency signals from the internal node to ground: its metal plates give a much lower series resistance, so its impedance keeps falling to much higher frequencies, and its value does not vary with the signal voltage. The MOS capacitor offers no compensating benefit when both have the same capacitance per unit area.
