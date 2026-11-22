# Detailed solution - A045

Split each transistor into identical units, place the units of A and B so that their centroids coincide in both directions, and draw every unit with the same orientation so that orientation-dependent process errors shift A and B equally.

### Step 1 — Unit size

Each device needs $W/L=16\ \mu\mathrm m/0.5\ \mu\mathrm m$. Divide it into $N$ parallel units of equal width, keeping $L$ unchanged (the units' drains, gates and sources are connected in parallel, so the widths add):

$$
W_u=\frac{16\ \mu\mathrm m}{N},\qquad N=4\ \Rightarrow\ W_u=4\ \mu\mathrm m,\quad \frac{W_u}{L}=\frac{4\ \mu\mathrm m}{0.5\ \mu\mathrm m}.
$$

Four units per device give eight units in total, which fit a compact 2 × 4 array, enough to make the centroid common in both $x$ and $y$ while keeping each unit reasonably wide compared with $L$.

### Step 2 — Common-centroid placement

Place the eight units as a cross-coupled array, with dummy gates (dum) at both ends of each row:

$$
\begin{aligned}
\text{Row 1: }&\ \text{dum}\ |\ A\ B\ B\ A\ |\ \text{dum}\\
\text{Row 2: }&\ \text{dum}\ |\ B\ A\ A\ B\ |\ \text{dum}
\end{aligned}
$$

Number the active columns $x=1\ldots4$ and the rows $y=1,2$. The centroids are

$$
\bar x_A=\frac{1+4+2+3}{4}=2.5=\bar x_B,\qquad \bar y_A=\frac{1+1+2+2}{4}=1.5=\bar y_B .
$$

A linear gradient of a parameter $p$ (oxide thickness, threshold, $\mu C_{ox}$), $p(x,y)=p_0+g_xx+g_yy$, therefore gives the same average to A and B, because the average of a linear function over the units equals its value at the centroid:

$$
\bar p_A=p_0+g_x\bar x_A+g_y\bar y_A=\bar p_B .
$$

Each row and each column also contains equal numbers of A and B units, so the arrangement stays balanced whatever the gradient direction.

### Step 3 — Photolithographic invariance

All eight units are identical copies drawn in the same orientation: source on the left, gate in the middle, drain on the right, with no mirrored units. Orientation-dependent errors then act identically on A and B:

- a tilted (angled) implant shadows the same side of every gate, so the source/drain extension and $C_{GS}$, $C_{GD}$ shift the same way in every unit;
- a mask misalignment between poly and diffusion moves every gate by the same vector, changing the source-side and drain-side overlap identically in A and B.

A mirrored pair (S–G–D next to D–G–S) would receive these shifts with opposite sign, which would create a systematic mismatch even in a common-centroid array. To keep every unit identical, the units here use separate diffusions. If diffusions are shared to save area, adjacent fingers necessarily alternate direction; then give A and B the same number of fingers in each direction (for example two left-to-right and two right-to-left each) and the same diffusion sharing, so the orientation errors still cancel between them.

![Layout sketch: two rows of four units, ABBA over BAAB, every unit drawn source left and drain right, dummy gates at the row ends](/q/A045/solution-layout.svg)

### Step 4 — Surroundings and interconnect

Matching also requires every unit to see the same neighbourhood:

- dummy gates at the ends of each row, so every active gate has the same poly neighbours and the same distance to the isolation edge (equal etch and STI stress);
- identical contacts in every unit (same count and spacing on source and drain), so contact resistance is equal;
- straight gates of identical length, and symmetric, equal-length metal routing that connects the four A units and the four B units with the same number of vias;
- a substrate (or well) tie ring around the array, with the array kept away from well edges.

With these features the layout is both common centroid (linear gradients cancel) and photolithographic invariant (orientation-dependent errors cancel), giving two matched $16\ \mu\mathrm m/0.5\ \mu\mathrm m$ transistors.
