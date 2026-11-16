# Golden Solution - A544

## Reference answer

The dashed box is a delaying integrator of the difference between $x(n)$ and the DAC output: $w(n) = w(n-1) + x(n-1) - 0.5V_{REF}\,y(n-1)$ (with $y = \pm 1$), i.e. $W(z) = \dfrac{z^{-1}}{1 - z^{-1}}[X(z) - D(z)]$. One single-ended SC realization uses one sampling capacitor:

- Op amp with its + input grounded and an integrating capacitor $C_2$ from its output (node $w$, which drives the quantizer's + input) to its − input.
- Sampling capacitor $C_1 = C_2$ (unity integrator gain). Its left plate goes to $x(n)$ through a $\phi_1$ switch, to $+0.5V_{REF}$ through a switch closed during $\phi_2 \cdot y$ ($y$ = 1), and to $-0.5V_{REF}$ through a switch closed during $\phi_2 \cdot \bar y$ ($y$ = −1/0). Its right plate goes to ground through a $\phi_1$ switch and to the op amp's − input through a $\phi_2$ switch.
- $\phi_1$: $C_1$ samples $x$ (charge $C_1x$), and the integrator holds.
- $\phi_2$: the left plate switches to $V_D = \pm 0.5V_{REF}$ while the right plate goes to the virtual ground; the charge $C_1(x - V_D)$ moves onto $C_2$: $w \leftarrow w + (C_1/C_2)(x - V_D)$, non-inverting in $x$ and inverting in $V_D$, exactly the subtraction in the box.
- The comparator (quantizer) is latched at the end of $\phi_2$ or at the start of $\phi_1$, after $w$ has settled. Its decision $y$ selects the DAC level in the next $\phi_2$, giving the loop delay $z^{-1}$ of the block diagram.
- Equivalent alternatives: two separate capacitors (a non-inverting delaying branch for $x$ and a branch for the DAC reference with the sign chosen by $y$), or a toggle-switch inverting/non-inverting pair.

## Grading notes

+2: a single-ended SC integrator (op amp + integrating capacitor) whose input branch(es) are parasitic-insensitive and correctly phased so that the output is a delaying integrator of $x - D$ (non-inverting for $x$, subtracting the DAC level), the DAC realized by switching to $+0.5V_{REF}$ or $-0.5V_{REF}$ under control of $y$, all switch phases labelled, and the quantizer clocked so that $y$ updates once per period. Any equivalent topology is accepted. +1: correct integrator and DAC with one sign or phase error that a reader can fix (e.g., the DAC added instead of subtracted), or the transfer function shown without the explicit z⁻¹ timing. A functionally correct realization whose DAC (or input) branch is parasitic-sensitive (e.g., the DAC level sampled on the capacitor plate that is later switched to the summing node) also gets +1; for a 1-bit DAC this causes only a full-scale gain error. 0: an integrator without the DAC subtraction, or a schematic missing the phase labels. −2 (asserted as fact): a non-integrating (gain-only) stage or a continuous-time RC integrator presented as the switched-capacitor realization.
