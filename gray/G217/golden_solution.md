# Golden Solution - G217

## Reference answer

$v_o/v_i = -g_{m2}R_L = -2.74\ \mathrm{mA/V}\times3\ \mathrm{k\Omega} = -8.22$.

$M_1$ is an unloaded source follower ($v_{gs1} = 0$ at low frequency since its source current cannot change), so the gate of $M_2$ follows $v_i$ exactly.

## Grading notes

+2: −8.2 (±3%). +1: small slip. 0: follower gain taken below 1 from an invented load. −2 (asserted as fact): current multiplication through $M_1$, or $R_S$ forming a divider with a finite input resistance.
