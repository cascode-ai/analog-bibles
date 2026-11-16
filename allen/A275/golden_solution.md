# Golden Solution - A275

## Reference answer

$\Phi_M \approx 84°$.

- $g_{m6} = \sqrt{2(50\ \mu)(100)(228\ \mu)} = 1.51$ mS.
- $|p_2| = g_{m6}/C_L = 7.56\times10^7$ rad/s (12.0 MHz); $z = g_{m6}/C_c = 3.02\times10^8$ rad/s (48.1 MHz).
- At 1 MHz: $\Phi_M = 90° - \arctan(1/12.0) - \arctan(1/48.1) = 90° - 4.8° - 1.2° = 84.0°$.
- (At the op amp's own GB of 7.1 MHz the same model gives ≈ 51°.)

## Grading notes

+2: 83–85° with $p_2$ ≈ 12 MHz and the RHP zero ≈ 48 MHz counted as phase lag. +1: zero omitted (≈ 85.2°) or a small slip. 0: correct roots but the margin evaluated at another frequency without saying so (e.g. ≈ 51° at 7.1 MHz). −2 (asserted as fact): RHP zero counted as phase lead, or 2π confusion placing $p_2$ at 75.6 MHz and giving ≈ 89°.
