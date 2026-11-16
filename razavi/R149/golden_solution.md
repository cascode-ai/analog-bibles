# Golden Solution - R149

## Reference answer

About 0.27 V (273 mV) per clock edge: $\Delta V_X = 3\ \mathrm{V}\times\dfrac{10\ \mathrm{fF}}{10\ \mathrm{fF}+100\ \mathrm{fF}} \approx 0.27$ V.
- During a fast clock edge the load resistor and $M_1$ cannot move the node, so the line-to-line capacitance and the 100-fF node capacitance act as a capacitive divider: $V_X$ jumps up on rising clock edges and down on falling edges.
- Each glitch then decays with the time constant of the node, $(R_D\|r_{O1})\times 110$ fF, which gives the spiky waveform.

## Grading notes

+2: ≈ 0.27 V (±5%) from the divider $C_c/(C_c+C_{gnd})$ applied to the 3-V step. +1: 0.30 V from leaving $C_c$ out of the denominator (3 V × 10/100), or the right divider with an arithmetic slip. 0: correct mechanism (capacitive coupling of the clock edge) without a valid number. -2 (asserted as fact): the full 3-V swing appearing at $V_X$, an inverted divider (e.g., 3 V × 100/110 ≈ 2.7 V), or no glitch at all because $M_1$ "holds" the node.
