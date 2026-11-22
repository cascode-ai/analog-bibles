# Detailed solution - A057

Locate the channel, the region where the polysilicon gate crosses the n⁺ active area, and measure its two dimensions on the 1 µm grid: the length along the drain-to-source current direction and the width perpendicular to it.

### Step 1 — Where the channel is

The transistor's channel exists only under the gate inside the active area. In [Fig. 1] the drain contacts (left) and the source contacts (right) sit on either side of a vertical poly strip, so current flows horizontally from drain to source under that strip. The channel is therefore the rectangle bounded horizontally by the two edges of the poly strip and vertically by the top and bottom edges of the n⁺ active area.

### Step 2 — Length and width

- **Length** $L$ is the channel dimension along the current, from the drain diffusion to the source diffusion. It equals the width of the vertical poly strip: 2 grid squares, so $L=2\ \mu$m.
- **Width** $W$ is the channel dimension perpendicular to the current, set by the height of the active area that the poly crosses: 22 grid squares, so $W=22\ \mu$m.

The poly extending beyond the active area (the end cap at the top and the strip down to the gate-contact pad) lies over the field region, where no channel forms, so it does not add to $W$. The 9 µm extent of each diffusion and the 20 µm total width of the active area are not channel dimensions either.

$$
W=22\ \mu\mathrm m,\qquad L=2\ \mu\mathrm m,\qquad \frac WL=11 .
$$
