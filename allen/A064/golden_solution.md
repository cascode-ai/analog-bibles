# Golden Solution - A064

## Reference answer

$W_{eq} = \sum_{i=1}^{n} W_i$ and $L_{eq} = L$.

- All transistors have the same $v_{GS}$, $v_{DS}$ and $v_{BS}$, hence the same $V_T$ and region of operation, and (same L) the same λ.
- In every region each current is proportional to its own $W_i/L$: in saturation $i_{Di} = \frac{K'W_i}{2L}(v_{GS}-V_T)^2(1+\lambda v_{DS})$, in nonsaturation $i_{Di} = \frac{K'W_i}{L}[(v_{GS}-V_T)v_{DS} - v_{DS}^2/2]$.
- Summing, $i_D = \sum i_{Di} = \frac{K'(\sum W_i)}{L}f(v_{GS}, v_{DS})$: exactly the current of one transistor of width $\sum W_i$ and length L. (The gate area, and hence the gate capacitance, also adds: $L\sum W_i$.)

## Grading notes

+2: $W_{eq} = \sum W_i$ and $L_{eq} = L$, with the argument that the currents add because every device has the same terminal voltages and $V_T$ (each current proportional to $W_i/L$); a derivation written in saturation that states the same holds in the linear region is full credit. +1: correct result without justification, or with a saturation-only derivation that never addresses the other regions, or only the equivalent aspect ratio $\sum W_i/L$ given. A side remark, after the correct final answer, that another (W, L) pair with the same W/L would give the same dc current under the square law is a minor imprecision (it ignores the L dependence of λ and of the gate capacitance): +1 at most, not −2. 0: the result derived only for equal widths ($nW$) without the general sum. −2 (asserted as fact): a final answer with $L_{eq} = L/n$ or any other length change, $W_{eq}$ as an average or harmonic combination, or the equivalent device claimed to depend on the operating region.
