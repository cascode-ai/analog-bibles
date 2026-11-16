# Golden Solution - R182

## Reference answer

$V_{out} = 0$ for the whole sweep: with equal inputs the symmetric circuit has identical voltages at the two outputs, and $R_1$ carries no current.
- (For reference, the common level of both outputs: between $V_{DD} - |V_{THP}| = 2.2$ V (square-law limit) and $V_{DD}$ (subthreshold conduction of the diode loads) while $M_1$, $M_2$ are off ($V_{in} < 0.7$ V), then falling as the pair turns on and settling at $V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p}$ once $M_5$ saturates.)

## Grading notes

+2: $V_{out} = 0$ throughout, by symmetry (a correct remark on the common output level is a bonus, not required; any common-output level for the off region between 2.2 V and $V_{DD}$ is acceptable and is not a false claim). 0: describes only the single-ended output-node voltage, correctly, as "$V_{out}$" without stating that the differential output is zero. -2 (asserted as fact): a nonzero differential $V_{out}$ that varies with the common input (e.g., an S-curve or a ramp).
