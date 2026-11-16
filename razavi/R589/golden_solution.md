# Golden Solution - R589

## Reference answer

Each output can range from ≈ 0.71 V to ≈ 2.49 V. Around the 1.5-V CM level, the lower limit sets the swing: ≈ ±0.79 V per output, i.e., a differential peak of ≈ ±1.59 V (≈ 3.2 V peak-to-peak differential). Without body effect: ±0.7 V per side, 2.8 V p-p differential.

- Each side carries 0.5 mA. NMOS: $V_{ov1} = \sqrt{2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 100)} = 0.273$ V. PMOS: $|V_{ov3}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2} \times 100)} = 0.510$ V.
- Gate level: in reset, each gate is shorted to its own drain, so the gates sit at the output CM, 1.5 V. In amplification the gates are virtual-ground nodes and stay at ≈ 1.5 V. (Strictly, equal branch currents force $V_{G1} = V_{G2}$ and charge conservation gives $V_G = 1.5 + \frac{C_1}{C_1 + C_3}(V_{CM} - V_{in,CM})$; the standard reading, used here, is that the sampled input CM equals $V_{CM}$, so $V_G = 1.5$ V.)
- Tail node: $V_P = 1.5 - V_{TH1} - 0.273$ with $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_P} - \sqrt{0.9})$, giving $V_P = 0.434$ V and $V_{TH1} = 0.793$ V.
- $M_1$/$M_2$ stay saturated for $V_{out} \ge V_G - V_{TH1} = 1.5 - 0.793 = 0.707$ V (0.8 V without body effect).
- $M_3$/$M_4$ stay saturated for $V_{out} \le V_{DD} - |V_{ov3}| = 2.49$ V.
- Symmetric swing about 1.5 V: min(1.5 − 0.707, 2.49 − 1.5) = 0.79 V per side.

## Grading notes

+2: lower limit ≈ 0.71 V (with body effect) and upper limit ≈ 2.49 V, concluding that the swing about 1.5 V is limited to ≈ ±0.79 V per side (≈ ±1.6 V differential peak or ≈ 3.2 V p-p differential); either form accepted if consistent. +1: the same analysis without body effect (0.8 V lower limit, ±0.7 V, 2.8 V p-p differential), or correct limits with the per-side/differential conversion missing or confused. 0: only one of the two limits right. An answer that states the input-CM assumption, or gives the swing as a function of $V_{in,CM} - V_{CM}$ through the relation above and reduces to the reference for equal CMs, also earns +2. -2 (asserted as fact): gate voltage taken other than ≈ 1.5 V without that charge-conservation justification (e.g., an assumed $V_{CM}$ value, or a gate that follows the output as $\Delta V_G = 0.2\Delta V_{out}$ in steady state), the swing limited only by the rails, or NMOS data used for the PMOS loads.
