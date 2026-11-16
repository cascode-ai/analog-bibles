# Golden Solution - R184

## Reference answer

$V_{out} = 0$ for the whole sweep: equal inputs into a symmetric circuit give identical voltages at the two outputs.
- (Common level of the outputs, for reference: $V_{DD}$ while $M_1$, $M_2$ are off; once the pair conducts, it is set by the balance between the PMOS source currents and the tail current, which is not well defined without common-mode feedback, but it is always the same on both sides.)

## Grading notes

+2: $V_{out} = 0$ throughout, by symmetry (a correct remark on the common output level is a bonus). 0: describes only a single-ended output-node voltage as "$V_{out}$" without stating that the differential output is zero. -2 (asserted as fact): a nonzero differential $V_{out}$ varying with the common input.
