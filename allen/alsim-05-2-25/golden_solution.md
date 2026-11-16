# Golden Solution - alsim-05-2-25

## Reference answer

This is an open design task. One valid approach, with hand-analysis estimates that a simulation should roughly reproduce (LEVEL-1 models: KP = 25u/10u, VTO = ±0.75, LAMBDA = 0.01/0.02, GAMMA = 0.8/0.4, PHI = 0.6, all capacitance parameters zero, TNOM = 27 °C), is as follows.

Topology: an NMOS input pair M1–M2 ($W/L = 100$), tail sink M5 ($W/L = 20$), PMOS current-mirror load M3–M4 ($W/L = 50$), and at the output a diode-connected PMOS M6 ($W/L \approx 2.3$, source at $V_{DD}$, gate = drain = output) plus an NMOS sink M7 ($W/L = 10$) that removes M6's dc current.
- The gain is then a ratio of transconductances, $A_v = g_{m1}/(g_{m6} + g_{ds2} + g_{ds4} + g_{ds6} + g_{ds7}) \approx \sqrt{K'_N(W/L)_1I_1/(K'_P(W/L)_6I_6)}$. It is nearly temperature independent because $K'_N$ and $K'_P$ scale alike; $(W/L)_1/(W/L)_6 \approx 40$–44 with $I_6 = I_1$ gives ≈ 10.
- Bias: a MOSFET-only reference, e.g. four diode-connected PMOS ($W/L = 1$, wells tied to their sources) in series with a diode-connected NMOS M8 ($W/L = 5$) across the 10 V supply, gives $I_{REF} \approx 10.6\ \mu$A. M8 is mirrored ×4 into M5 ($I_{SS} \approx 43\ \mu$A) and ×2 into M7 (≈ 21 µA = $I_1$).

Hand estimates at 27 °C:
- $g_{m1} = \sqrt{2 \cdot 25\ \mu \cdot 100 \cdot 21.3\ \mu} \approx 326\ \mu$S and $g_{m6} \approx 31\ \mu$S. Output conductance ≈ 32.6 µS, so $A_v \approx 10.0$.
- Output pole $\approx 32.6\ \mu\mathrm{S}/(2\pi \cdot 1\ \mathrm{pF}) \approx 5.2$ MHz. The mirror node (≈ $g_{m3}/2\pi$·1 pF ≈ 23 MHz, with a zero at twice that) lowers it slightly, so $f_{-3\,\mathrm{dB}} \approx 4.8$ MHz.
- $P_{diss} \approx 10\ \mathrm{V} \times (10.6 + 42.6 + 21.3)\ \mu\mathrm{A} \approx 0.75$ mW.
- $V_{IC}(\min) = -5 + V_{DS5}(\mathrm{sat}) + V_{GS1} \approx -5 + 0.41 + 1.07 \approx -3.5$ V (with the body effect, $V_{T1} \approx 0.94$ V there).
- $V_{IC}(\max)$ is limited by M2: the output sits near $V_{DD} - V_{SG6} \approx 2.9$ V and $V_{T2}$ rises to ≈ 2.4 V with $\gamma = 0.8$, giving ≈ 5.3 V. Within the supplies, $V_{IC}(\max) \approx 5$ V and ICMR ≈ 8.5 V.

Expected score ≈ 8.5 (ICMR) + 7–9 (gain within ±0.1–0.3 of 10 over temperature) + 4.5–5 (bandwidth) + 10 (power) ≈ 30–32.

Temperature: $K' \propto T^{-1.5}$ and $V_T$ falls with T, so the bias current, $g_m$ and $f_{-3\,\mathrm{dB}}$ change by roughly ±5–10 % between 0 and 55 °C, while the transconductance-ratio gain stays within a few percent.

## Grading notes

A correct result is a complete design that satisfies the constraints, simulated as required, with a SCORE computed correctly from the simulated values. The constraints: ±5 V supplies, MOSFETs only (no resistors or extra capacitors besides the mandated 1 pF per node), every W/L between 1 and 100, a single-ended output, and the given model parameters with device capacitances disabled. The simulation must run at both 0 °C and 55 °C with 1 pF from every node to ground.

The judge checks:
- the table is filled for both temperatures;
- min ICMR = lowest $V_{IC}(\max)$ − highest $V_{IC}(\min)$, with a stated criterion for the limits (e.g. a transistor leaving saturation or a specified gain drop);
- the gain deviation is measured from 10;
- $P_{diss}$ equals the total supply current times 10 V;
- $f_{-3\,\mathrm{dB}}$ is plausible for the node conductance and 1 pF (for a gain-of-10 single stage, $f_{-3\,\mathrm{dB}} \approx g_{m,in}/(2\pi \cdot 10 \cdot 1\ \mathrm{pF})$);
- the SCORE arithmetic is correct and does not exceed 40.

Any score is acceptable if consistent. Well-designed solutions typically reach 25–33, and the reference design estimates ≈ 30. Wrong: a SCORE above 40, values not supported by the reported simulation, a design using resistors or W/L outside 1–100, simulation at only one temperature, MOSFET capacitances left on, or a gain far from 10 (e.g. a current-mirror-load amplifier with gain in the hundreds) claimed to score well on the gain term.
