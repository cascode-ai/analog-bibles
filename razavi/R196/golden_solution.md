# Golden Solution - R196

## Reference answer

For a perfectly symmetric circuit $V_{out} = 0$: equal inputs give identical voltages at the two outputs (with the pair on, each PMOS has $V_{SG} = V_{SD}$ and behaves like a diode, giving a common level of $V_{DD} - |V_{GS3}(I_{SS}/2)|$).
- This symmetric state is, however, metastable once the pair conducts: the cross-coupled load has loop gain $[g_{m3}(r_{O1}\|r_{O3})]^2 > 1$, so any tiny mismatch or noise makes the outputs regenerate to one of two states ($V_{out}$ near $+V_{DD}$ or $-V_{DD}$). An ideal analysis gives 0; a real circuit latches.

## Grading notes

+2: $V_{out} = 0$ by symmetry; noting the metastability of the symmetric point (real circuits latch to ±) is a plus, not required. 0: only a single-ended node voltage described as "$V_{out}$" without stating that the differential output is zero. -2 (asserted as fact): a deterministic nonzero $V_{out}$ curve that varies smoothly with the common input.
