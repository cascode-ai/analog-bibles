# Golden Solution - G409

## Reference answer

$|dV_{od}/dt| \approx 182$ V/μs (0.18 V/ns).

- Load per output (op-amp inputs are not virtual grounds during slewing): $0.5 + (1.5 \times 1)/(1.5 + 1) = 1.1$ pF.
- Nominally $M_1$, $M_2$ each carry 100 μA, and $M_{1A}$, $M_{2A}$ each carry $I_{D11} - |I_{D1}| = 100\ \mu$A, which balances $|I_{D3}| = |I_{D4}| = 100\ \mu$A.
- Slewing with $M_2$ off and $M_1$ carrying 200 μA: $M_{1A}$ current $= 200 - 200 = 0$, so $M_3$'s 100 μA charges output $V_{o1}$; $M_{2A}$ carries 200 μA against $M_4$'s 100 μA, so 100 μA discharges $V_{o2}$.
- Each output slews at $100\ \mu\text{A}/1.1\ \text{pF} = 91$ V/μs in opposite directions: $dV_{od}/dt = 2 \times 91 = 182$ V/μs (= $I_{\text{slew}}/(C_L/2)$ with $I_{\text{slew}} = |I_{D5}|/2 = 100\ \mu$A).

## Grading notes

+2: ≈ 182 V/μs (±5%) with 100 μA per output and 1.1 pF per output. +1: correct mechanism and current but load 1.0–1.2 pF from a minor slip, or per-output 91 V/μs with the DM value implied. 0: right mechanism with a wrong load (e.g. 2.0 pF giving 100 V/μs) carried consistently. −2 (asserted as fact): 200 μA per output (364 V/μs), the claim that slew is limited by $I_{D11}$ = 200 μA per output, or single-ended 91 V/μs given as the DM slew rate.
