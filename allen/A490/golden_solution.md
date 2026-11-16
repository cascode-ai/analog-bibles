# Golden Solution - A490

## Reference answer

Derivation:
- With $b_i = b$ for all $i$: $V_{out}(z) = bV_{REF}z^{-1}\sum_{k=0}^{N-1}(0.5z^{-1})^k = bV_{REF}z^{-1}\dfrac{1 - (0.5z^{-1})^N}{1 - 0.5z^{-1}}$.
- For large $N$ the term $(0.5z^{-1})^N$ (weight $2^{-N}$, below the resolution) is negligible, leaving $V_{out}(z) = \dfrac{bz^{-1}V_{REF}}{1 - 0.5z^{-1}}$.
- Equivalently, $V_{out}(z)(1 - 0.5z^{-1}) = bz^{-1}V_{REF}$ is the difference equation $v_{out}(n) = b(n-1)V_{REF} + 0.5\,v_{out}(n-1)$: in each period the current bit's $\pm V_{REF}$ is added to half the previous output. That is exactly the loop of [Fig. 2] (summer, S/H providing $z^{-1}$, gain ½ in the feedback). Feeding $b_{N-1}, \ldots, b_0$ serially (LSB first) from $v_{out} = 0$ gives after $N$ periods $\sum_{i=0}^{N-1} b_i 2^{-i}V_{REF}$, the same final value as the pipeline.

Initial zeroing: before the first (LSB) period the S/H output must be 0. Ways to do it in [Fig. 2]: add a switch across the hold capacitor (or from the S/H output to ground) closed during a reset period; or, for one period, open both $A$ and $B$ and open the feedback path (a switch in series with the ½ amplifier, or ground the summer input) so that the S/H acquires 0 V; then close the loop and start with the LSB.

## Grading notes

+2: the geometric-series (or difference-equation) derivation reaching $z^{-1}/(1 - 0.5z^{-1})$ with the large-N/negligible $2^{-N}$ step or the zero-initial-state recursion explained, plus a workable zeroing method (reset switch on the S/H, or one period with A, B open and the feedback opened/grounded). +1: correct derivation with a vague zeroing method, or a correct zeroing method with the derivation only asserted. 0: only one of the two parts addressed. −2 (asserted as fact): an incorrect closed form (e.g. $1/(1 - 2z^{-1})$ or a missing $z^{-1}$), or a claim that no zeroing is needed.
