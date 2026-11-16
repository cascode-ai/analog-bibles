# Golden Solution - R434

## Reference answer

Key constraints: $I_{SS} \approx 2$ mA (6 mW / 3 V, bias network neglected), 1 mA per branch; output range $[V_{OD,SS} + V_{OD1} + V_{OD3},\ V_{DD} - |V_{OD8}| - |V_{OD6}|]$ must span 2.4 V, so the five overdrives must sum to ≤ 0.6 V. One consistent design:
- Overdrives: tail 0.15 V, $V_{OD1} = V_{OD3} = 0.10$ V, $|V_{OD6}| = |V_{OD8}| = 0.125$ V (sum 0.6 V).
- Sizes: tail $W/L \approx 1330$; $(W/L)_{1-4} \approx 1490$; $(W/L)_{5-8} \approx 3330$ (all with L = 0.5 μm).
- Bias: $V_{in,CM} = V_{OD,SS} + V_{GS1} \approx 0.15 + 0.73 + 0.10 = 0.98$ V (body effect on $M_1$); $V_{b1} = V_{OD,SS} + V_{OD1} + V_{GS3} \approx 0.25 + 0.76 + 0.10 = 1.11$ V (places $M_1$ at the edge); $V_{b2}$ chosen to put $M_8$ at the edge of saturation, i.e. source of $M_6$ at $V_{DD} - |V_{OD8}| = 2.875$ V, $V_{b2} \approx 2.875 - |V_{GS6}| \approx 1.9$ V (lower if the body effect of $M_6$ is included); $M_7$'s gate at node X then sits at $V_{DD} - |V_{GS7}| \approx 2.08$ V.
- Gain: $A_v \approx g_{m1}\{[g_{m3}r_{O3}r_{O1}]\,\|\,[g_{m6}r_{O6}r_{O8}]\}$ with $g_{m1} = g_{m3} = 20$ mS, $r_{O1} = r_{O3} = 10$ kΩ, $g_{m6} = 16$ mS, $r_{O6} = r_{O8} = 5$ kΩ: $2\ \mathrm{M\Omega}\,\|\,0.4\ \mathrm{M\Omega} = 333$ kΩ → $A_v \approx 6700$ (≈ 6900 with $g_{mb3}$).
- Comment: such small overdrives make the devices very wide (and in practice push them toward weak inversion); a designer may trade some swing for smaller devices.

## Grading notes

Open design: grade consistency. +2: power budget respected (≈ 2 mA total), the swing condition written correctly for this single-ended telescopic output (sum of the five overdrives ≤ 0.6 V, or equivalently output range spanning 2.4 V), aspect ratios consistent with the chosen currents/overdrives, sensible bias voltages ($V_{in,CM}$, $V_{b1}$, $V_{b2}$ placing devices at the edge), and a gain consistent with the design (thousands for such a design). +1: consistent design with a missing piece (e.g., no bias voltages, or no gain), or the body effect ignored in the bias voltages, or an otherwise consistent design that states explicitly that it treats $I_{SS}$ as an ideal source with no headroom (as drawn), so that only four overdrives share the 0.6 V. 0: one major constraint mishandled (e.g., power budget exceeded, or the swing budget miscounted by one device, such as the tail-source headroom omitted without saying so) in an otherwise reasonable design. -2 (asserted as fact): a design claimed to meet the 2.4-V swing whose overdrive sum exceeds 0.6 V even when the tail device is excluded, wrong topology reading (e.g., treating $M_7$/$M_8$ as diode-connected so that $V_X = V_{DD} - |V_{GS5}| - |V_{GS7}|$), or the gain computed as $g_{m1}(r_{O2}\|r_{O4})$.
