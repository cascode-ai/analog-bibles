# Golden Solution - R188

## Reference answer

$V_{out} = 0$ for the whole sweep (symmetric circuit, identical output voltages; $R_1$ and $R_2$ carry no current).
- (Common output level, for reference: between $V_{DD} - |V_{THP}|$ (square-law limit) and $V_{DD}$ (subthreshold conduction) while the pair is off, then falling to $V_{DD} - |V_{GS3}(I_{SS}/2)|$ once the tail saturates.)

## Grading notes

+2: $V_{out} = 0$ throughout, by symmetry (comments on the common level are a bonus). 0: describes only a single-ended output-node voltage as "$V_{out}$" without stating that the differential output is zero. -2 (asserted as fact): a nonzero differential $V_{out}$ varying with the common input.
