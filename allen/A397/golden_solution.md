# Golden Solution - A397

## Reference answer

Advantages of the switched-capacitor comparator:
- Autozeroing: the input-offset voltage (and low-frequency noise/drift) is stored on $C$ during φ1 and cancelled during φ2, so $V_{out}(\varphi_2) \approx -A(V_2-V_1)\,C/(C+C_p)$ without $V_{OS}$.
- The noninverting input stays at ground, so the comparator needs essentially no input common-mode range; the inputs $V_1$, $V_2$ can span a wide range.
- Two signals (or a signal and a reference) are compared with a single-ended amplifier, and the inputs are naturally sampled-and-held.

Disadvantages:
- Requires switches and a nonoverlapping two-phase clock: discrete-time operation only, and part of each period is spent autozeroing (lower throughput).
- Charge injection / clock feedthrough of the switches leaves a residual offset (often the limit of the offset cancellation); kT/C noise is added.
- The comparator must be stable in the unity-gain (autozero) configuration, which an uncompensated open-loop comparator may not be.
- The parasitic $C_p$ attenuates the input by $C/(C+C_p)$, and the capacitors and switches add area and settling time.

The open-loop comparator, by contrast, works in continuous time, has no stability concern and no clocks, but cannot remove its offset and needs a good input common-mode range.

## Grading notes

+2: at least the offset cancellation (autozero) and the relaxed ICMR (grounded input) as advantages, and at least switches/clocks (discrete-time), charge feedthrough, and the unity-gain stability requirement as disadvantages, all correct. Other correct points (attenuation by $C_p$, kT/C noise, speed of the autozero phase) are welcome. A residual offset quoted as ≈ $V_{OS}/(1+A)$ (at the comparator input; $V_{OS}/[(1+A)C/(C+C_p)]$ when referred to $V_2 - V_1$) is acceptable either way and is not an error. +1: most of these with one main item missing. 0: only advantages or only disadvantages. −2 (asserted as fact): claims such as "the SC comparator has higher gain or bandwidth than the open-loop one" given as the main advantage, "no stability requirement", or "offset is doubled".
