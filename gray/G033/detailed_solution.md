# Detailed solution - G033

The resistance of a diffused resistor is its sheet resistance multiplied by the number of squares, $L/W$. The three resistor types share the same geometry and differ only in the layer, and hence in sheet resistance. End and contact effects are neglected.

### Step 1 — Number of squares

For a layer of sheet resistance $R_\square$, a rectangle of length $L$ (along the current) and width $W$ has

$$
R=R_\square\frac LW,\qquad \frac LW=\frac{200\ \mu\mathrm m}{5\ \mu\mathrm m}=40\ \text{squares}.
$$

### Step 2 — Resistance for each layer

| Resistor type | $R_\square$ | $R=40R_\square$ |
|---|---|---|
| Emitter-diffused | 5 Ω/□ | 200 Ω |
| Base-diffused | 100 Ω/□ | 4 kΩ |
| Pinch (base pinched by emitter) | 5 kΩ/□ | 200 kΩ |

The heavily doped emitter layer gives a small resistance; the pinch resistor, whose current flows only in the thin, lightly doped active base under the emitter, gives the largest value from the same area.
