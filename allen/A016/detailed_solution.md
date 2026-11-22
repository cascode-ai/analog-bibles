# Detailed solution - A016

In a self-aligned process the polysilicon gate itself masks the source/drain implant, so the edges of the doped regions are set by where ions reach the silicon next to the gate. A beam tilted along the channel makes the thick gate cast a shadow on one side only. Compute the shadow width from the poly thickness and tilt, then add the lateral outdiffusion to locate each junction relative to its gate edge.

### Step 1 — Shadow cast by the gate

Take the beam travelling down and toward the right, $7^\circ$ off the normal. A ray grazing the top right corner of the gate travels a horizontal distance $t_{poly}\tan7^\circ$ while descending the poly thickness, so no ion lands closer than this to the right gate edge:

$$
w_{sh}=t_{poly}\tan7^\circ=(0.8\ \mu\mathrm m)(0.1228)=0.0982\ \mu\mathrm m .
$$

On the left side the beam reaches the silicon right up to the gate edge, because the gate blocks only the ions that strike it.

### Step 2 — Junction positions after outdiffusion

The dopant spreads laterally by $0.07\ \mu$m from where the ions land.

- **Beam side (left).** The implanted edge is at the gate edge, so the junction ends $0.07\ \mu$m under the gate: a gate–diffusion overlap of $0.07\ \mu$m.
- **Shadowed side (right).** The implanted edge is $0.0982\ \mu$m outside the gate edge, so the junction ends
$$
0.0982\ \mu\mathrm m-0.07\ \mu\mathrm m=0.028\ \mu\mathrm m
$$
outside the gate: a gap with no overlap.

The metallurgical channel, between the two junctions, therefore has length

$$
L_{met}=L-0.07\ \mu\mathrm m+0.028\ \mu\mathrm m=L-0.042\ \mu\mathrm m ,
$$

and it is shifted toward the shadowed side. The slightly longer tilted path of the ions in silicon adds a negligible further shift.

### Step 3 — Sketch

![Cross-section of a polysilicon gate with ions arriving at 7 degrees, showing a 0.07 µm overlap on the beam side and a 0.098 µm shadow leaving a 0.028 µm gap on the other side](/q/A016/solution-cross-section.svg)

The dashed outlines are the as-implanted regions and the solid contours the junctions after outdiffusion; a gate length of 0.5 µm is chosen only to draw the figure.

### Step 4 — Consequences for the transistor

The device becomes asymmetric. On the shadowed side a $0.028\ \mu$m strip of lightly doped substrate-type silicon lies between the channel and the diffusion, outside the gate. The gate controls it only through fringing fields, so an inversion layer does not connect reliably to that diffusion: the strip adds a large series resistance, or blocks strong-inversion conduction altogether. The characteristics then depend on which terminal is used as source and which as drain. On the beam side the full $0.07\ \mu$m overlap remains, so the overlap capacitance ($C_{GS}$ or $C_{GD}$) is larger on that side than on the other.

Remedies are to split the implant into several steps at rotated orientations so each edge is exposed equally, to tilt the beam along the gate width instead of along the channel, to use thinner polysilicon, or at least to lay out matched transistors with the same orientation so that all are affected identically.
