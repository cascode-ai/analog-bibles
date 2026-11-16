# Golden Solution - R697

## Reference answer

(c), channeling during the S/D implantation.

- The circuit is a unity-gain sampler. Nominally $V_{out} = V_{in}$. Its gain error is about $(1 + C_{in}/C_1)/A$, where $A$ is the op-amp open-loop gain and $C_{in}$ the capacitance at the inverting input.
- (c) Channeling gives abnormally deep S/D junctions with large lateral spread. The result is a shorter effective channel and much stronger short-channel effects (DIBL, channel-length modulation, toward punch-through), so $r_O$ falls. At the same bias current, the op-amp gain ($\propto g_m r_O$, or $g_m r_O^2$ for cascodes) drops sharply. The deeper junctions also add junction capacitance at the inverting node, which raises $C_{in}$. Both effects increase the gain error.
- (b) The bottom plate sits at $P$, which is driven by $V_{in}$ during sampling and by $V_{out}$ during amplification. Its parasitic capacitance to the substrate, however large the doping makes it, does not change the charge transferred through $C_1$. So it causes no gain error after full settling, only extra loading of the op-amp output and slower settling; only if a phase is too short to settle (e.g. $S_1$ charging $C_1 + C_P$ through its on-resistance) would the larger load show up as a sample-amplitude error.
- (a) A heavy threshold-adjust implant shifts the thresholds. With the op-amp bias current held at its target, square-law $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ and $r_O = 1/(\lambda I_D)$ are to first order unchanged (the heavier channel doping lowers mobility somewhat, $g_m \propto \sqrt\mu$, which is not a large effect), so for a threshold shift alone $A$ is essentially unchanged. It could contribute only indirectly: the larger $V_{GS}$ can eat headroom and push op-amp devices out of saturation, or the switches lose overdrive (higher on-resistance, incomplete settling). Its effect on charge injection is an offset in this topology ($S_2$ sits at virtual ground, so its injection is input-independent), not a gain error.

## Grading notes

+2: (c), with the mechanism: deep junctions → stronger short-channel effects → lower $r_O$ and op-amp gain (and/or more capacitance at the summing node) → larger gain error ≈ $(1 + C_{in}/C_1)/A$. (b) rejected because node $P$ is always driven (bottom-plate sampling), and (a) rejected because $g_m$ and $r_O$ at a fixed bias current do not depend on $V_{TH}$. Mentioning that (a) could matter only through headroom loss, mobility loss or switch-resistance/settling issues, or that (b) could matter only through incomplete settling of the heavier load, is acceptable alongside (c).
+1: (c) with a correct mechanism but (a) or (b) not addressed or dismissed with a weak reason.
0: (c) with no or a wrong mechanism, or (c) plus (b) asserted as equally likely.
-2 (asserted as fact): (a) or (b) given as the cause while (c) is rejected or not identified, or the circuit misread (e.g., treated as an inverting amplifier with gain set by a capacitor ratio). An answer that identifies (c) but also asserts that the bottom-plate parasitic at $P$ causes a gain error through charge sharing or capacitive division after full settling is capped at 0 (−1 if its mechanism for (c) also misses the shorter $L_{eff}$ / lower $r_O$ / lower op-amp gain).
The question asks for a verdict on each listed error; the scores above refer to which errors the answer concludes can or cannot cause the effect.
