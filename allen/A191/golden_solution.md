# Golden Solution - A191

## Reference answer

$W_2/L_2$ = 10 (e.g. 10 µm/1 µm); $R_{in} \approx 1/g_{m1}$ = 6.74 kΩ (6.56 kΩ with $r_{ds1}$ in parallel); $R_{out} = r_{ds2} = 1/(\lambda I_{D2})$ = 25 kΩ; actual current gain for $i_{in}$ = +50 µA ≈ 9.7 (9.69).

- Gain: both transistors have the same $v_{GS}$, so $i_{D2}/i_{D1} = (W_2/L_2)/(W_1/L_1)$ → $W_2/L_2$ = 10.
- $g_{m1} = \sqrt{2\cdot110\ \mu\mathrm{A/V^2}\cdot1\cdot100\ \mu\mathrm{A}}$ = 148 µS → $R_{in}$ = 6.74 kΩ.
- $I_{D2}$ = 1 mA → $R_{out} = 1/(0.04\cdot1\ \mathrm{mA})$ = 25 kΩ.
- Actual gain: with λ, M1 at 100 µA has $V_{GS1}$ = 2.00 V (solving $55\ \mu\mathrm{A/V^2}(V-0.7)^2(1+0.04V)$ = 100 µA) and M2 carries exactly 1 mA because $V_{DS2} = V_{DS1}$. With $i_{in}$ = 50 µA, M1 carries 150 µA and $V_{GS1}$ rises to 2.28 V; M2, whose $V_{DS2}$ stays at 2.00 V, then carries 1.484 mA, so $\Delta i_{out}/\Delta i_{in}$ = 484 µA/50 µA = 9.69. The gain is below 10 because M1's own $(1+\lambda V_{DS1})$ factor grows with its diode voltage while M2's does not (small-signal value 9.77; for −50 µA it is 9.86). Without channel-length modulation the gain would be exactly 10.

## Grading notes

+2: $W_2/L_2$ = 10, $R_{in}$ 6.3–6.9 kΩ ($1/g_{m1}$ = 6.74 kΩ, $1/(g_{m1}+g_{ds1})$ = 6.56 kΩ, or a value evaluated at the CLM-consistent bias point, 6.3–6.8 kΩ, are all acceptable), $R_{out}$ = 25 kΩ, and an actual gain of about 9.6–9.9 explained by the $V_{DS1} \ne V_{DS2}$ mismatch under signal. +1: first three results right and the gain given as exactly 10 with sound (λ-free) reasoning, or the gain computed as the total-current ratio 9.90 at 150 µA. 0: correct design and $R_{in}$ but $R_{out}$ evaluated at 100 µA (250 kΩ) or other single error, including a wrong model confined to one result such as $R_{in}$ taken as $r_{ds1}$. −2 (asserted as fact): $W_2/L_2$ = 1/10, or a square-law misuse that makes the design and the gain wrong (e.g. $W_2/L_2$ chosen as 100, or a current gain of √10 claimed for $W_2/L_2$ = 10).
