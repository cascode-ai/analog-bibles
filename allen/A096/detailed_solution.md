# Detailed solution - A096

The current gain depends on how exactly M2 replicates two copies of M1. Compare the realizable layouts for the physical parasitics that do not scale with the drawn 2:1 ratio: orientation-dependent effects and edge effects of non-unit devices.

### Step 1 — Layout 2: rotated M1

In layout 2, M2A and M2B are 5/1 units with horizontal gates, but M1 is rotated 90° (vertical gate). Matched devices must share the same orientation, because several process effects depend on direction:

- lithographic and etch bias differ in x and y, so $\Delta W$ and $\Delta L$ of M1 differ from those of M2A and M2B;
- an angled source/drain implant is shadowed by the poly differently for the two orientations, changing gate overlap and effective channel length;
- mobility depends on stress and on the crystal direction of current flow, which differs by 90° between M1 and M2.

These errors do not cancel even though the drawn units are identical, and they can reach several percent. Layout 2 is therefore the least accurate realizable layout from parasitic considerations.

### Step 2 — Layout 1: a non-unit 10/1 device

Layout 1 is a comparable candidate. Its 10/1 device is a single transistor instead of two 5/1 units, so width-edge effects do not scale. With a width loss $\Delta W$ at each edge (field-oxide encroachment, etch bias), the gain is

$$
\frac{I_{out}}{I_{in}}=\frac{10-2\Delta W}{5-2\Delta W}\neq2,\qquad\text{e.g. }\frac{9.8}{4.8}=2.04\ \text{for}\ \Delta W=0.1\ \mu\mathrm m,
$$

and its junction perimeters and edge capacitances are not in a 2:1 ratio either. It also lacks a common centroid. Which of layouts 1 and 2 is worse depends on the process; the question gives no data to rank the two effects, so either is a defensible answer, with the orientation mismatch of layout 2 usually the larger.

### Step 3 — Layouts 3 and 4

Layout 4, with three identical 5/1 units in the same orientation and a symmetric M2A–M1–M2B placement, is the most accurate. Layout 3 as drawn shares one continuous diffusion M2A–M1–M2B, so each terminal of M1 is also a terminal of an M2 unit and could only be GRD; it cannot be wired as this mirror at all. That is a defect of the drawing rather than a parasitic effect, so it is not the answer to the parasitic comparison.
