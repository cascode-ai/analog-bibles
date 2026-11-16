# Golden Solution - R695

## Reference answer

The misalignment must have occurred in a step that is not self-aligned to the transistors. The likely steps are the contact-window lithography (or, equivalently, the poly gate relative to the contact windows) and the metal or via lithography. It cannot be the gate (poly) step relative to the source/drain regions, or the S/D implant.

- The S/D implants are self-aligned to the poly gate. If the poly is misaligned relative to the active area, one S/D region simply becomes slightly narrower and every transistor still has a continuous channel. The threshold-adjust implant is a blanket implant, and the channel-stop implant uses the active mask itself. A small misalignment in these front-end steps therefore cannot cut off the current. (A larger shift of the gate along its width would short source and drain, which gives excess current, not zero.)
- Zero current requires an open in the current path, or a gate held at or below threshold relative to its source. A small misalignment can produce either one at the contact and metal levels, where spacings are at minimum:
  - A contact window shifted so that it lands partly on the gate poly next to the source of the bottom device, or next to a terminal of the cascode device. After metal deposition this shorts that gate to its source ($V_{GS} = 0$), so the device is off.
  - A contact shifted off the source or drain region, or off the poly pad that biases a gate. That terminal is left unconnected, or the gate floats or is unbiased, and no current flows.
  - The metal (or via) mask shifted so that a line misses its contact (open), or touches a neighboring line, e.g., shorting a gate-bias line to ground.

## Grading notes

+2: names the contact-window step (and/or the metal/via steps, or the poly-to-contact relation) with a concrete mechanism that gives zero current (a gate shorted to source, an open source/drain/gate connection), and explains that misalignment between gate and S/D cannot do it because the S/D implant is self-aligned. Mentioning both contact and metal is ideal but not required.
+1: correct step(s) with a plausible mechanism but no self-alignment argument, or the self-alignment argument with the mechanism left vague.
0: the correct step listed among several indiscriminately chosen ones, without a usable mechanism.
-2 (asserted as fact): the main answer is a poly-gate misalignment leaving a gap between the channel and the source/drain (ignores self-alignment), a misaligned threshold-adjust or other blanket implant, or a mechanism that would increase the current presented as the cause of zero current.
