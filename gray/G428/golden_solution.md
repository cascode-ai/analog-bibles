# Golden Solution - G428

## Reference answer

$dV_{od}/dt \approx 0.47$ V/ns (471 V/μs).

- During slewing one input transistor turns off; the other carries the full tail current 4.0 mA. Example: $M_1$ carries 4.0 mA, so $M_{1A}$ gets $4.4 - 4.0 = 0.4$ mA while $M_{3A}$ sinks 2.4 mA: net 2.0 mA out of $V_{o1}$. $M_2$ off: $M_{2A}$ carries 4.4 mA against 2.4 mA: net 2.0 mA into $V_{o2}$. So $I_{\text{slew}} = (I_{D5} + I_{D6})/2 = 2.0$ mA per output.
- Load per output (inputs are not virtual grounds while slewing): $C_{L\text{eff}} = C_L + C_2(C_1 + C_{ia})/(C_2 + C_1 + C_{ia}) = 6 + 4(6.58)/10.58 = 8.49$ pF.
- Each output slews at $2.0\ \text{mA}/8.49\ \text{pF} = 0.236$ V/ns in opposite directions: $dV_{od}/dt = I_{\text{slew}}/(C_{L\text{eff}}/2) = 0.471$ V/ns.

## Grading notes

+2: ≈ 0.46–0.48 V/ns, with 2.0 mA per output and $C_{L\text{eff}}$ ≈ 8.5 pF. +1: per-output 0.236 V/ns with the DM value implied, or a small slip in $C_{L\text{eff}}$. 0: $C_{ia}$ ignored (giving 0.50 V/ns) or $C_L$ alone used (0.67 V/ns) with otherwise correct reasoning. −2 (asserted as fact): 4.0 mA per output (0.94 V/ns), 4.4 mA used as the slewing current, or a single-ended value given as the DM slew rate with wrong reasoning.
