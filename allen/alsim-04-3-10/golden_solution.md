# Golden Solution - alsim-04-3-10

## Reference answer

There is no unique answer; a good design combines a process-insensitive on-chip reference current with a low-$V_{MIN}$ output stage, and typically scores about 25–35 points.

- Limits: at 100 µA and $W/L \le 100$, the smallest overdrive of an output NMOS is $\sqrt{2\times100/(21.6\times100)}$ ≈ 0.30 V (LOW) and ≈ 0.28 V (HIGH). A single-transistor output therefore gives $V_{MIN}$ ≈ 0.3 V (≈ 16 points); a high-swing cascode gives $V_{MIN}$ ≈ $2V_{ON}$ + margin ≈ 0.6–0.7 V (≈ 7–8 points) but a much flatter characteristic. The 25-point cap on the first term ($V_{MIN}$ = 0.2 V) cannot be reached.
- $\Delta I_o$: the output current must be set by an on-chip reference built from MOSFETs only (no resistors). A plain divider or diode string from 5 V gives $I \propto K'(V_{DD} - 2V_T)^2$, i.e. a ±20–30% process spread (≈ 50 µA, ≈ 10 points). A self-biased (β-multiplier) reference with a triode MOSFET as its resistor, with the triode device's gate at 5 V, gives $I \propto K'(V_{DD} - V_T)^2/(\text{size ratios})$ and roughly ±10–15% spread (ΔI ≈ 20–30 µA, 17–25 points), plus a start-up circuit.
- Output-stage contribution to $\Delta I_o$: with λ ≈ 0.01 V⁻¹, a simple sink changes by ≈ 4–5 µA from $V_{MIN}$ to 5 V; a cascode makes this negligible.
- Example: β-multiplier reference with a triode-MOSFET resistor, mirrored by a 100/1-class single output transistor: $V_{MIN}$ ≈ 0.3–0.35 V and ΔI ≈ 25–35 µA, SCORE ≈ 14–16 + 14–20 ≈ 30. The simulations must show both corner curves, the line AB, $V_{MIN}$ and $\Delta I_o$.

## Grading notes

Accept any circuit that uses only MOSFETs and the 5-V supply, keeps $W/L$ within 1–100, centres the output at 100 µA, and is supported by HIGH and LOW simulations from which $V_{MIN}$ and $\Delta I_o$ are read as defined, with the SCORE computed correctly from them. A correct submission's numbers must be physically plausible: $V_{MIN}$ cannot be below ≈ 0.28 V at 100 µA with $W/L \le 100$ in saturation, and $\Delta I_o$ should reflect the ±10% $K'$ and ±75 mV $V_T$ corners of the reference circuit (typically tens of µA). Claims of $V_{MIN}$ < 0.25 V, a $\Delta I_o$ of a few µA without a process-compensated reference, use of resistors or an external reference current, or a SCORE not backed by simulation are wrong.
