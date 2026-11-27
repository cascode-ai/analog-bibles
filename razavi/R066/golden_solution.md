# Golden Solution - R066

## Reference answer

$V_{out}$ can range from $V_{GS1} - V_{TH1} \approx 0.27$ V to $V_{DD} - |V_{GS2} - V_{TH2}| \approx 1.98$ V, a swing of ≈ 1.71 V.

- $M_1$: overdrive $\sqrt{2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 100)} = 0.273$ V; saturated for $V_{out} \ge 0.273$ V.
- $M_2$: overdrive $\sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2} \times 25)} = 1.021$ V; saturated for $V_{out} \le 3 - 1.021 = 1.979$ V.
- Swing $= 3 - 0.273 - 1.021 \approx 1.71$ V.

## Grading notes

+2: swing ≈ 1.71 V (±3%) with both limits (≈ 0.27 V and ≈ 1.98 V). +1: correct expression $V_{DD} - V_{ov1} - |V_{ov2}|$ with one numerical slip. 0: only one of the two limits right. -2 (asserted as fact): threshold voltages included in the limits (e.g., $V_{out,min} = V_{GS1}$ or $V_{out,max} = V_{DD} - |V_{GS2}|$), $(W/L)_2$ taken as 50/0.5 or $\mu_nC_{ox}$ used for the PMOS.
