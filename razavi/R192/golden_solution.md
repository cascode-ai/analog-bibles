# Golden Solution - R192

## Reference answer

$V_{out} = 0$ for the whole sweep: equal inputs into a symmetric circuit give identical voltages at the two outputs.
- (Common output level, for reference: $V_{DD}$ while the pair carries less than $2I_P$ (the PMOS sources then pull the outputs up, diodes off), then dropping to $V_{DD} - |V_{THP}| - \sqrt{2(I_{SS}/2 - I_P)/\beta_p}$ once the tail saturates.)

## Grading notes

+2: $V_{out} = 0$ throughout, by symmetry (comments on the common level are a bonus). 0: describes only a single-ended output-node voltage as "$V_{out}$" without stating that the differential output is zero. -2 (asserted as fact): a nonzero differential $V_{out}$ varying with the common input.
