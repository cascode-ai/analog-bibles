# Golden Solution - A502

## Reference answer

$0.25V_{REF}$: $1.25N_{REF}$ clock periods; $0.7V_{REF}$: $1.7N_{REF}$ clock periods.

- Run-up: $v_{int}(t_1) = V_{th} + KN_{REF}Tv_{in}^*$ ($K$ = integrator gain constant, $T$ = clock period).
- Run-down: $v_{int}$ falls at the rate $KV_{REF}$, reaching $V_{th}$ after $N_{out}T$ with $KV_{REF}N_{out}T = KN_{REF}Tv_{in}^*$, so $N_{out} = N_{REF}v_{in}^*/V_{REF}$.
- Conversion time $= N_{REF} + N_{out} = N_{REF}(1 + v_{in}^*/V_{REF})$: $0.25V_{REF}$ → $N_{REF} + 0.25N_{REF} = 1.25N_{REF}$; $0.7V_{REF}$ → $1.7N_{REF}$. (Worst case, $v_{in}^* \to V_{REF}$: $2N_{REF}$, i.e. $2\cdot2^N$ periods for $N_{REF} = 2^N$.)

## Grading notes

+2: both results, $1.25N_{REF}$ and $1.7N_{REF}$ (or the equivalent $1.25\cdot2^N$ and $1.7\cdot2^N$ with $N_{REF} = 2^N$ stated), from $N_{out} = N_{REF}v_{in}^*/V_{REF}$ plus the fixed run-up. +1: one case right and the other with an arithmetic slip, or both right with no derivation. 0: only the run-down counts given ($0.25N_{REF}$, $0.7N_{REF}$) as the conversion time while the relation $N_{out} = N_{REF}v_{in}^*/V_{REF}$ is right. −2 (asserted as fact): times that grow inversely with the input, a run-up whose length depends on the input, or results not proportional to $N_{REF}$.
