# Golden Solution - G291

## Reference answer

Phase margin ≈ 50° (unity loop gain at ≈ 156 kHz).

- Low-frequency loop gain: $T_0 = a_0/A_0 - 1 = 99$ (i.e. $f = 0.0025$).
- $|T(j\omega)| = 99/\left|(1+j\tfrac{f}{2\text{ kHz}})(1+j\tfrac{f}{200\text{ kHz}})(1+j\tfrac{f}{4\text{ MHz}})\right| = 1$ at $f_c \approx 156$ kHz (the 2-kHz pole contributes a factor 78, the 200-kHz pole a factor 1.27).
- Phase at $f_c$: $-\arctan 78 - \arctan 0.78 - \arctan 0.039 = -89.3° - 38.0° - 2.2° = -129.5°$, so PM ≈ 50.5°.
- A cruder estimate that takes the crossover from the −20 dB/dec asymptote ($f_c \approx T_0 \times 2$ kHz ≈ 200 kHz) gives PM ≈ 43°.

## Grading notes

+2: PM ≈ 50° (accept 47–53°) with a correct crossover estimate (≈ 150–160 kHz). +1: PM in the 42–46° range from the asymptotic crossover estimate (≈ 200 kHz) with the reasoning stated, or a correct method with a small slip. 0: right approach but a clear slip (e.g. forgetting one pole's phase) giving a value outside 40–55°. −2 (asserted as fact): crossover taken at the frequency where the open-loop gain $a$ itself is unity, phase margin computed from the open-loop gain without the feedback factor, or a claim of instability.
