# Golden Solution - G094

## Reference answer

Two input currents give $I_{OUT} = 0.1$ µA: $I_{IN} \approx 0.103$ µA (0.1027 µA) with minimum $W/L \approx 1.03$, and, on the falling side of the peaking characteristic, $I_{IN} \approx 20.8$ µA with minimum $W/L \approx 208$. The high root is the branch normally used to make $I_{OUT} \ll I_{IN}$ (here 1/208); at the low root the resistor drop is only ≈ 1 mV and the circuit is almost a 1:1 mirror.

- $I_{OUT} = I_{IN}\exp[-I_{IN}R/(nV_T)]$ with $nV_T/R = 39\ \mathrm{mV}/10\ \mathrm{k\Omega} = 3.9$ µA. This function peaks at $I_{IN} = 3.9$ µA, where $I_{OUT,max} = 3.9/e = 1.43$ µA, so 0.1 µA is reached at two input currents.
- Low solution: $I_{IN} = 0.1\ \mu\mathrm{A}\times e^{I_{IN}/3.9\,\mu\mathrm{A}}$ → $I_{IN} \approx 0.1027$ µA (the drop across $R$ is only ≈ 1 mV).
- Minimum $W/L$: $W/L > I_D/I_t$ for both devices → $W/L > 1.027$ (set by $M_1$).
- High solution: $I_{IN}e^{-I_{IN}/3.9\,\mu} = 0.1\ \mu$ → $I_{IN} \approx 20.8$ µA, needing $W/L \ge 208$.

## Grading notes

+2: both solutions with their $W/L$ limits ($I_{IN}$ ≈ 0.102–0.104 µA with $W/L \ge 1.03$; ≈ 20.8 µA with $W/L \ge 208$), or either one with correct numbers and a statement that the other exists. +1: only one of the two solutions (either branch) with correct numbers and no mention of the other, or $I_{IN} \approx 0.1$ µA (approximating the exponential as 1) with $W/L \ge 1$. 0: correct equation not solved. -2 (asserted as fact): claim that no solution exists, strong-inversion model used, or a resistor drop that increases $I_{OUT}$.
