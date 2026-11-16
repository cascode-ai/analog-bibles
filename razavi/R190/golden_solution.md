# Golden Solution - R190

## Reference answer

$V_{out} = 0$ for the whole sweep: equal inputs into a symmetric circuit give identical voltages at the two outputs.
- (Common level of the outputs, for reference: ≈ $V_{DD} - |V_{THP}|$ while the pair is off, then $V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p} + I_{SS}R_1/2$ once the tail saturates.)

## Grading notes

+2: $V_{out} = 0$ throughout, by symmetry (comments on the common level are a bonus). 0: describes only a single-ended output-node voltage as "$V_{out}$" without stating that the differential output is zero. -2 (asserted as fact): a nonzero differential $V_{out}$ varying with the common input.
