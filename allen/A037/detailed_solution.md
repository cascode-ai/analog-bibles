# Detailed solution - A037

The voltage coefficient of a diffused resistor comes from the junction around it: the depletion layer of that junction eats into the conducting cross-section, and its width follows the junction's reverse bias. Find what sets that bias with the well at 5 V, then with the well tied to the resistor ends, and see whether the bias still follows the signal.

### Step 1 — Origin of the voltage coefficient

The p⁺ strip conducts through its undepleted thickness. Its junction with the n-well has a depletion layer whose width grows as $\sqrt{\phi_0+V_R}$, where $V_R$ is the local reverse bias. A wider depletion layer leaves a thinner conducting layer, so the local sheet resistance rises with $V_R$.

With the well at a fixed 5 V, the reverse bias at a point $x$ along the resistor is $V_R(x)=5\ \mathrm V-v(x)$, where $v(x)$ falls from $v_{in}=2.5$ V to $v_{out}\approx1.25$ V. The bias is about 2.5–3.75 V along $R_1$ and changes whenever $v_{in}$ or $v_{out}$ changes. The depletion width, and hence $R_1$, follow the signal: this is the observed 200 ppm/V.

### Step 2 — Effect of tying the well to the resistor ends

With the connection in [Fig. 1], each end of the n-well is at the same potential as the corresponding end of the p⁺ strip. Both the strip and the well are uniform resistive paths between the same two nodes, so both potentials fall linearly, in the same way, from $v_{in}$ to $v_{out}$ along the length. Therefore

$$
V_R(x)=v_{well}(x)-v_{p^+}(x)\approx0\quad\text{along the whole resistor},
$$

independent of $v_{in}$ and $v_{out}$. The well is bootstrapped to the resistor: the depletion width no longer changes with the signal, so the depletion-modulation voltage coefficient is cancelled to first order. The junction sits at nearly zero bias, so it does not conduct.

### Step 3 — Resulting circuit behaviour

The divider becomes

$$
v_{out}=v_{in}\,\frac{R_2}{(R_1\parallel R_{n\text{-well}})+R_2},
$$

which is linear in $v_{in}$. Because $R_1\parallel R_{n\text{-well}}<10$ kΩ, $v_{out}$ is somewhat above 1.25 V unless $R_1$ is resized to restore the nominal total.

### Step 4 — Second-order effects

- **Nonlinearity of the well itself.** The n-well resistor has its own large voltage coefficient, set by its junction with the grounded p⁻ substrate, whose bias is the signal voltage. It now carries part of the current. Its sheet resistance (about 1 kΩ/□) is much higher than that of the p⁺ diffusion (about 100 Ω/□), so its share of the current, and the residual nonlinearity it adds, is small.
- **Capacitance.** The well-to-substrate junction capacitance now loads the signal path, and the p⁺/n-well junction capacitance is at its zero-bias maximum, though harmless because both sides move together.

Overall, the connection essentially removes the voltage dependence of the diffused resistor, at the cost of a slightly lower resistance and extra parasitic capacitance to the substrate.
