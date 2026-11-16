# Golden Solution - A459

## Reference answer

Advantages:
- Small component spread: only C and 2C (ratio 2:1 for any N) instead of $2^{N-1}$:1, so better matching and accuracy, and a total capacitance that grows linearly with N (≈ 3C per bit) instead of exponentially, i.e. small area.
- The op amp offset need not be amplified: during φ1 the inverting input is tied to the output; if the bit switches are already set during φ1, the shunt capacitors connected to the summing node are referred to the offset level and $V_{OS}$ appears only once at the output (auto-zeroed array), unlike resistor DACs where it is multiplied by the noise gain. If instead those capacitors are fully discharged in φ1 and switched to the summing node only in φ2, $V_{OS}$ is multiplied by the code-dependent factor $(1 + \sum b_iC/C_F)$, up to 3 here.
- No static power (capacitive, no resistor currents), compatible with switched-capacitor circuits; all bits are converted in parallel, so it is reasonably fast.

Disadvantages:
- Floating internal ladder nodes during φ2: parasitic capacitances (bottom/top-plate and switch junctions) at these nodes upset the binary division, causing gain and linearity errors; accuracy is limited for many bits.
- Needs a two-phase nonoverlapping clock; switch charge injection and clock feedthrough onto the floating nodes add errors; the output is valid only during φ2 (a sampled output).
- Not guaranteed monotonic (mismatch at major carries), and the speed is limited by the op amp settling.

## Grading notes

Open question: grade the content, not the wording.
+2: at least two correct advantages and two correct disadvantages, each with a reason (e.g. small 2:1 spread / small area; offset not amplified; no static power; parasitics at floating ladder nodes; two-phase clock; charge injection; possible nonmonotonicity). +1: two correct of one kind and one of the other, or all four without reasons; or at least two correct advantages and two correct disadvantages plus one extra incorrect item (e.g. claiming the output is held during φ1, when $C_F$ is shorted then). Stating that the offset is multiplied by a code-dependent noise gain (up to 3) because the shunt capacitors are discharged in φ1 is correct for that reading of the timing. 0: only advantages or only disadvantages. −2 (asserted as fact): claims such as "large component spread", "guaranteed monotonic", "insensitive to parasitic capacitance at the ladder nodes", or "the op amp offset is fully cancelled" presented as key points.
