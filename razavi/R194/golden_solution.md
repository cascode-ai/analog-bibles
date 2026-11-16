# Golden Solution - R194

## Reference answer

$V_{out} = 0$ for the whole sweep: equal inputs into a symmetric circuit give identical voltages at the two outputs.
- (Common output level, for reference: $V_{DD} - R_D(I_N - I_{SS}/2)$ while the PMOS pair and tail are saturated; as the input CM approaches $V_{DD} - |V_{THP}|$ the pair turns off and the outputs fall to $V_{DD} - R_DI_N$.)

## Grading notes

+2: $V_{out} = 0$ throughout, by symmetry (comments on the common level are a bonus). 0: describes only a single-ended output-node voltage as "$V_{out}$" without stating that the differential output is zero. -2 (asserted as fact): a nonzero differential $V_{out}$ varying with the common input.
