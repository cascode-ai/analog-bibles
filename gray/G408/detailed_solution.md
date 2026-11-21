# Detailed solution - G408

The load capacitance is what the op-amp output sees with the loop broken at the op amp: the op-amp input node is left floating (no other capacitance on it), and the ideal sources are ac grounds. Reduce the capacitor network seen from one output, then check whether the DM and CM half circuits differ.

### Step 1 — Network seen from one output

From the top output to ground there are two parallel paths:
- the 0.5-pF capacitor directly to ground;
- the 1.5-pF feedback capacitor to the op-amp input node, then the 1-pF input capacitor to the source, which is an ideal voltage source and therefore an ac ground.

Since the input node has no other capacitance and the op-amp input draws no current, the 1.5-pF and 1-pF capacitors are simply in series.

### Step 2 — Series and parallel combination

$$
C_{\mathrm{series}}=\frac{(1.5\ \mathrm{pF})(1\ \mathrm{pF})}{1.5\ \mathrm{pF}+1\ \mathrm{pF}}=0.6\ \mathrm{pF},
\qquad
C_L=0.5\ \mathrm{pF}+0.6\ \mathrm{pF}=1.1\ \mathrm{pF}.
$$

### Step 3 — DM versus CM half circuits

Every capacitor in [Fig. 1] connects nodes of the same side (each feedback capacitor returns to its own side's input, and each load capacitor goes to ground); none bridges the top and bottom halves. A bridging element would be ac-grounded at its midpoint in the DM half circuit and open in the CM half circuit, making the two loads differ. Without one, the DM and CM half circuits contain the same network:

$$
C_{Ld}=C_{Lc}=1.1\ \mathrm{pF}.
$$

If the op-amp input were instead taken as a virtual ground (closed-loop view), the output would see $0.5+1.5=2.0$ pF; under the stated open-loop definition, the input node floats and the series combination applies.
