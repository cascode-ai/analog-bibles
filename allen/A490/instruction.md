The pipeline algorithmic DAC of [Fig. 1] ($b_i = \pm1$, $b_0$ the MSB) has the output
$V_{out}(z) = \left[b_0z^{-1} + 2^{-1}b_1z^{-2} + \cdots + 2^{-(N-2)}b_{N-2}z^{-(N-1)} + 2^{-(N-1)}b_{N-1}z^{-N}\right]V_{REF}$.
Show how this can be rewritten as
$V_{out}(z) = \dfrac{b_iz^{-1}V_{REF}}{1 - 0.5z^{-1}}$,
where all $b_i$ have been assumed to be identical, the form that leads to the iterative realization of [Fig. 2] (switch $A$ closed when the $i$th bit is 1, switch $B$ closed when it is 0; the sum is held by a sample-and-hold whose output is fed back through a gain of ½; the bits are applied serially, LSB first). Also show in the block diagram of [Fig. 2] how the initial zeroing of the output can be accomplished.
