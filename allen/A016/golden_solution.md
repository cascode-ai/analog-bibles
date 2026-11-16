# Golden Solution - A016

## Reference answer

The gate shadows the implant on one side, making the transistor asymmetric: on the side facing the beam the diffusion reaches under the gate by ≈ 0.07 µm, while on the shadowed side the diffusion stops ≈ 0.028 µm short of the gate edge, leaving an ungated gap between the channel and that diffusion.

- Shadow width on the far side of the gate: $t_{poly}\tan 7^\circ = 0.8\ \mu\mathrm{m}\times0.1228 \approx 0.098\ \mu$m; the implant lands no closer than this to that gate edge.
- After outdiffusion of 0.07 µm, that junction ends $0.098 - 0.07 \approx 0.028\ \mu$m outside the gate edge, so this diffusion does not reach the channel: a lightly doped (substrate-type) region not controlled by the gate remains in series. The transistor then conducts poorly (large series resistance, or no strong-inversion connection at all apart from fringing), and its behaviour depends on which terminal is used as source and which as drain.
- On the side facing the beam, ions land right up to the gate edge (the poly blocks only what hits it), so after outdiffusion that junction extends ≈ 0.07 µm under the gate (gate overlap, larger $C_{GS}$ or $C_{GD}$ on that side), plus a negligible extra amount from the tilted range in silicon.
- Sketch: gate of thickness 0.8 µm, beam arriving at 7°, a shadow strip of 0.098 µm beside one gate edge, junction contours 0.07 µm beyond the implanted edges: overlap 0.07 µm on one side, gap 0.028 µm on the other; the metallurgical channel length becomes $L - 0.07 + 0.028 = L - 0.042\ \mu$m, offset toward the shadowed side.
- Remedies: implant in several rotated steps (or with the tilt along the gate width), thinner poly, or rely on matched (same-orientation) layouts so that matched devices are affected equally.

## Grading notes

+2: shadow width ≈ 0.098 µm (0.8 µm × tan 7°, ±0.005 µm), net gap ≈ 0.028 µm between the gate edge and the diffusion on the shadowed side after the 0.07 µm outdiffusion, ≈ 0.07 µm overlap on the other side, and the resulting asymmetry of the two diffusions. Electrical consequences (series resistance or poor conduction through the ungated gap, unequal overlap capacitances) are welcome but not required, since the question asks only for the impact on the diffusions. +1: correct geometry with a small arithmetic slip, or the numbers right but the asymmetry (overlap on one side, gap on the other) not stated. 0: shadowing recognized qualitatively without the numbers, or numbers right with a wrong consequence stated as a possibility. −2 (asserted as fact): both sides affected equally, the 7° tilt said to have no effect, or the shadow computed with sin/cos in a way that gives a clearly wrong size (e.g. ≈ 0.8 µm).
