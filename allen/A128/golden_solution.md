# Golden Solution - A128

## Reference answer

Circuit 5 (n-channel input M1 with the p-channel current-source load M2 biased by $V_{BP}$).

- Circuits 5 and 6 have current-source loads: $|A_v| = g_{m,in}/(g_{ds1} + g_{ds2}) = g_{m,in}/(2\lambda I)$, much larger than the diode-load circuits.
- In circuit 5 the input is the n-channel device and in circuit 6 the p-channel device. With equal W/L and current, $g_{mN} = \sqrt{2}\,g_{mP}$, so circuit 5's gain is √2 times circuit 6's.
- The others are of order 1: circuit 3 ≈ $-g_{mN}/g_{mP} = -1.41$, circuits 1 and 2 ≈ $-1/(1+\eta)$, circuit 4 ≈ −0.71.

## Grading notes

+2: circuit 5, with the reason (current-source load and the larger n-channel $g_m$, √2 above circuit 6). +1: circuit 5 with incomplete reasoning, or "circuits 5 and 6" with the √2 difference then acknowledged as favouring 5. 0: circuit 6, or circuits 5 and 6 as equal, with otherwise sound reasoning. −2 (asserted as fact): any diode-loaded circuit (1–4) chosen as the highest, or the topology misread (e.g. circuit 5 taken as a diode load).
