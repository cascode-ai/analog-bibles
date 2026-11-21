# Detailed solution - A041

Mismatch between two nominally identical transistors comes from random edge and doping fluctuations, from process gradients across the die (oxide thickness, doping, stress, temperature), and from systematic differences in the surroundings of each device. A good layout attacks each of these: identical unit devices, a common centroid to cancel gradients, identical orientation and surroundings, and symmetric wiring.

### Step 1 — Split each device into identical unit fingers

A single 40 µm/0.3 µm gate would be long and narrow, spanning a large distance over which gradients act, and could not be interleaved with its partner. Split each transistor into four parallel fingers of 10 µm/0.3 µm, so that

$$
\frac{W}{L}=\frac{4\times10\ \mu\mathrm m}{0.3\ \mu\mathrm m}=\frac{40\ \mu\mathrm m}{0.3\ \mu\mathrm m}.
$$

All eight fingers are drawn identically: same width and length, same number of contacts, same contact-to-gate spacing (kept somewhat above the design-rule minimum).

### Step 2 — Arrange the fingers in a common-centroid pattern

Place the fingers in two rows, cross-coupled:

| Row | Pattern |
|---|---|
| Top | D A B B A D |
| Bottom | D B A A B D |

Here A and B are the two transistors and D are dummy gates. Numbering the active positions 1–4 in each row, A occupies positions 1 and 4 in the top row and 2 and 3 in the bottom row, and B the complementary positions. The centroids of A and B both lie at the center of the array, in x and in y. A linear gradient in any direction then changes the total current of A and B by the same amount, so it cancels from the mismatch. A single row D A B B A A B B A D also has a common centroid, along x only.

![Two rows of gate fingers inside a common guard ring: top row D A B B A D, bottom row D B A A B D, with the common centroid of A and B at the array center](/q/A041/solution-layout.svg)

### Step 3 — Same orientation and identical surroundings

- **Orientation.** All gate stripes run in the same direction, so tilted implants, mask misalignment and anisotropic stress affect A and B alike. Where adjacent fingers share a diffusion, the current direction alternates from finger to finger; then each device must contain equal numbers of fingers of each direction, which the patterns above provide.
- **Dummy gates.** A dummy finger at each end of every row gives every active finger the same neighbours and the same distance to the STI edge, so etch loading and stress near the edge do not fall on one device only. Gate stripes are straight, without bends.
- **Environment.** The array sits inside one common guard ring and substrate tie, away from well edges (or equidistant to them) and from hot or noisy circuits.

### Step 4 — Symmetric interconnect

Route the source, drain and gate connections of A and B with equal lengths and the same number of contacts and vias, so their series resistances match. No metal line should cross one device without crossing the other in the same way, because metal over the gate changes stress and hydrogen passivation of the channel. Together, these measures leave only the random mismatch set by the unit device area, which the 40 µm × 0.3 µm gate area per device already makes small.
