# Golden Solution - A437

## Reference answer

$FS = RI\left(1 - \dfrac{1}{2^N}\right)$ (output for all ones minus output for all zeros).

- The op amp's inverting input is a virtual ground. A sink at node $k$ (counted from the op amp) draws a fraction $1/2^k$ of its current from the summing node: at node 1 the paths are R (to the summing node), 2R and 2R (rest of the ladder), so half comes from the summing node; each step farther away halves it again (nodal analysis confirms 1/2, 1/4, …, $1/2^N$, the leftmost node with its R to ground included).
- That current is supplied through the feedback R, so $v_{OUT} = RI\sum_{i=1}^{N} b_i 2^{-i}$, positive, with $S_1$ the MSB and $S_N$ the LSB.
- All ones: $RI(1 - 2^{-N})$; all zeros: 0. (The full-scale range is $RI$.)

## Grading notes

+2: $RI(1 - 2^{-N})$ with the correct binary weighting ($S_1$ MSB). +1: the full-scale range $RI$ given as the full-scale value with otherwise correct analysis; or the correct binary weighting and magnitude $RI(1 - 2^{-N})$ with the output polarity stated as negative (the sinks draw current out of the ladder, so the op amp supplies it through the feedback R and $v_{OUT}$ is positive). A polarity error alone is not grounds for −2. 0: correct weighting idea with an algebra slip. −2 (asserted as fact): $2RI$, $NRI$, $S_N$ taken as the MSB, or equal weights for all bits.
