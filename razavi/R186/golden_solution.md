# Golden Solution - R186

## Reference answer

$V_{out} = 0$ for the whole sweep: the circuit is symmetric, the two outputs move together and $R_1$ carries no current.
- (Common output level, for reference: $V_{DD}$ while the pair is off; afterwards set by the balance of the PMOS source currents and the tail current, ill-defined without common-mode feedback, but equal on both sides.)

## Grading notes

+2: $V_{out} = 0$ throughout, by symmetry (comments on the common level are a bonus). 0: describes only a single-ended output-node voltage as "$V_{out}$" without stating that the differential output is zero. -2 (asserted as fact): a nonzero differential $V_{out}$ varying with the common input.
