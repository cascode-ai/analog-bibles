# Detailed solution - R721

**Approach.** Number the eight wires 1–8 along the row: wires 1–4 carry the supply current and wires 5–8 the ground (return) current, each wire carrying a quarter of the total current $I$. The voltage across each wire is its self-inductance times its own $dI/dt$ plus the mutual inductance times each neighbour's $dI/dt$. Because the drops differ from wire to wire, we define the equivalent inductance of a group by its stored magnetic energy (equivalently, the power it absorbs), $L_{eq}I^2 = \sum_{i,j}L_{ij}I_iI_j$. We apply this to the supply group, the ground group, and the complete supply–ground loop.

### Step 1 — Setting up the inductance matrix

All wires are taken in the same physical direction (package → chip). Then:

- supply wires 1–4 each carry $+I/4$ (into the chip);
- ground wires 5–8 each carry $-I/4$ (the return current flows out of the chip).

The inductance matrix has $L_{ii} = L = 4$ nH on the diagonal and $L_{i,i\pm1} = M = 2$ nH for neighbours, zero otherwise (nonadjacent coupling neglected). A coupling coefficient $k = M/L = 0.5$ means the wires are strongly coupled. Electrically, wires 1–4 are in parallel between the package supply and the on-chip supply node, and wires 5–8 are in parallel between the on-chip ground node and the package ground.

**Faraday's law for coupled wires.** The voltage across wire $k$ is

$$V_k = \sum_j L_{kj}\frac{dI_j}{dt} = L\frac{dI_k}{dt} + M\sum_{j\ \text{adjacent to}\ k}\frac{dI_j}{dt} .$$

When neighbours carry current in the **same** direction, their flux adds to the wire's own flux and $V_k$ grows; opposite currents subtract.

### Step 2 — Voltage drop on each supply wire

With $I_k = I/4$ for $k = 1, \dots, 4$ and considering the supply group by itself:

- **wire 1** (end of the row, one neighbour, wire 2):
$$V_1 = (L + M)\frac{1}{4}\frac{dI}{dt} = \frac{4 + 2}{4}\frac{dI}{dt} = 1.5\ \mathrm{nH}\cdot\frac{dI}{dt};$$
- **wires 2 and 3** (two supply neighbours each):
$$V_{2,3} = (L + 2M)\frac{1}{4}\frac{dI}{dt} = \frac{4 + 4}{4}\frac{dI}{dt} = 2\ \mathrm{nH}\cdot\frac{dI}{dt};$$
- **wire 4** (one supply neighbour, wire 3):
$$V_4 = (L + M)\frac14\frac{dI}{dt} = 1.5\ \mathrm{nH}\cdot\frac{dI}{dt}.$$

The inner wires see more flux because they have two same-direction neighbours.

### Step 3 — Equivalent inductance of the supply connection

The four wires are in parallel, but with equal currents imposed their drops are unequal, so "the" inductance of the connection is defined through the power delivered (or the stored energy). The total power into the four wires is

$$P = \sum_k V_kI_k = \frac{I}{4}(V_1 + V_2 + V_3 + V_4),$$

and this must equal $L_{eq}\,I\,\dfrac{dI}{dt}$ for an equivalent single inductor. Substituting Step 2:

$$L_{eq}I\frac{dI}{dt} = \frac{I}{4}\left(1.5 + 2 + 2 + 1.5\right)\mathrm{nH}\cdot\frac{dI}{dt} = \frac{7}{4}\ \mathrm{nH}\cdot I\frac{dI}{dt},$$

$$L_{VV} = 1.75\ \mathrm{nH}.$$

**Matrix form (same result).** $L_{eq} = \frac{1}{I^2}\sum_{i,j}L_{ij}I_iI_j = \frac{1}{16}\sum_{i,j}L_{ij}$ over the $4\times4$ supply block:

$$L_{VV} = \frac{4L + 2\cdot3\cdot M}{16} = \frac{4(4) + 6(2)}{16} = \frac{16 + 12}{16} = \frac{28}{16} = 1.75\ \mathrm{nH},$$

where $4L$ comes from the four diagonal entries and $2\cdot3\cdot M$ from the three adjacent pairs (each appearing twice in the matrix).

**Comparison with uncoupled wires.** Without coupling, four 4-nH wires in parallel give $4/4 = 1$ nH. Grouping same-direction wires next to each other raises this by 75 %, to 1.75 nH: the mutual inductance works *against* the goal of using several pads.

### Step 4 — Ground connection

The ground wires 5–8 form an identical group (all carrying $-I/4$, i.e. the same direction as each other), so by the same calculation

$$L_{GG} = 1.75\ \mathrm{nH}.$$

### Step 5 — The complete supply–ground loop

The supply current flows in through wires 1–4 and returns through wires 5–8, so the inductance that matters for supply bounce is that of the whole loop. Only one supply wire (4) is adjacent to a ground wire (5), and they carry **opposite** currents. The mutual term between the two groups is

$$M_{VG} = \frac{1}{I^2}\sum_{i\in V,\,j\in G}L_{ij}\,|I_i|\,|I_j| = \frac{M}{16} = \frac{2}{16} = 0.125\ \mathrm{nH}.$$

For a loop in which the two groups carry opposite currents, the mutual term subtracts:

$$L_{loop} = L_{VV} + L_{GG} - 2M_{VG} = 1.75 + 1.75 - 2(0.125) = 3.25\ \mathrm{nH}.$$

(If the single supply–ground adjacency is ignored, $L_{loop} = 3.5$ nH.) Shared equally between the two connections, this is about 1.6 nH each.

**Check by matrix.** Using all eight currents $\pm I/4$: the two diagonal blocks contribute $28 + 28 = 56$, the wire 4–wire 5 pair contributes $2\times M\times(+1)(-1) = -4$; total $52/16 = 3.25$ nH. ✓

### Step 6 — Remarks

- **Why grouping is bad.** Wires carrying current in the same direction reinforce each other's magnetic field. This arrangement is the worst way to use multiple supply and ground pads; alternating supply and ground wires makes neighbouring currents opposite, so the mutual inductance *reduces* the loop inductance.
- **Equal current division is an assumption.** With strongly coupled parallel wires (here $k = 0.5$), the currents actually redistribute so that all parallel wires have equal voltage drops; solving the full network that way gives smaller values (about 1.67 nH for one group alone and 2.0 nH for the loop) with a very uneven current distribution. The problem specifies equal division, which gives the values above.

### Result

With four same-direction wires side by side and equal current division, each connection has

$$L_{VV} = L_{GG} = \frac{4L + 6M}{16} = \frac{28}{16} = 1.75\ \mathrm{nH}$$

(versus 1 nH without coupling). The supply-plus-ground loop, including the one adjacent supply–ground pair with opposite currents, has $L_{loop} = 1.75 + 1.75 - 2(0.125) = 3.25$ nH (3.5 nH if that pair's coupling is ignored).

**Common mistake.** Ignoring the mutual inductance and answering $4\ \mathrm{nH}/4 = 1$ nH. Adjacent wires carrying current in the same direction add flux to each other, increasing the effective inductance by 75 % here.

**Common mistake.** Subtracting the mutual inductance for wires in the same group, e.g. $(L - M)/4$. Mutual inductance reduces the inductance only when the coupled currents flow in *opposite* directions, as between a supply wire and a ground wire.

**Common mistake.** Giving every wire two neighbours ($(L + 2M)/4 = 2$ nH per connection) or adding the four wires in series. The end wires of each group have only one same-direction neighbour, and the four wires of a connection are in parallel, not in series.
