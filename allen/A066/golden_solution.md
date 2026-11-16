# Golden Solution - A066

## Reference answer

$V_{ON}$ ≈ 0.757 V, i.e. $f_{ast}$ ≈ 56.7 mV above $V_T$.

- $kT/q$ = 25.85 mV at 300 K.
- $q\cdot\mathrm{NFS}/\mathrm{COX} = 1.602\times10^{-19}\ \mathrm{C}\times7\times10^{11}\ \mathrm{cm^{-2}}/(2.47\times10^{-7}\ \mathrm{F/cm^2})$ = 0.455.
- Body term: $(0.4\sqrt{0.7} + 0.7)/(2\times0.7) = (0.335 + 0.7)/1.4$ = 0.739.
- $f_{ast}$ = 25.85 mV × (1 + 0.455 + 0.739) = 25.85 mV × 2.194 = 56.7 mV, so $V_{ON}$ = 0.7 + 0.0567 = 0.757 V. (The bracket, ≈ 2.2, acts as the subthreshold slope factor n.)

## Grading notes

+2: $f_{ast}$ ≈ 56.7 mV (±5%) and $V_{ON}$ ≈ 0.757 V, with the bracket terms (1, 0.455, 0.739) evaluated correctly; giving the result as $V_{ON} - V_T$ = 56.7 mV, clearly labelled, is also +2. +1: a small deviation (e.g. kT/q = 26 mV or a rounded COX) or a minor slip with the result within ±10%. 0: the NFS term mis-scaled by a units error (e.g. NFS in cm⁻² against COX in F/m²) with the rest right. −2 (asserted as fact): $V_{ON}$ below $V_T$, $f_{ast}$ of volts or microvolts from unit errors, or the formula misapplied so that $f_{ast}$ is off by more than a factor of 2.
