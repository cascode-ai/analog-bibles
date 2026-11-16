# Detailed solution - R721

**Approach.** Number the wires 1–8 along the row: 1–4 carry the supply current and 5–8 the ground (return) current, each a quarter of the total current $I$. Each wire's drop is its self-inductance times its own $dI/dt$ plus the mutual inductance times each neighbour's $dI/dt$. Since the drops differ from wire to wire, define a group's equivalent inductance by the power it absorbs (equivalently, its stored energy), $L_{eq}I^2 = \sum_{i,j}L_{ij}I_iI_j$, and apply it to the supply group, the ground group and the whole supply–ground loop.

### Step 1 — Setting up the inductance matrix

Take all wires in the same physical direction (package → chip): supply wires 1–4 each carry $+I/4$ and ground wires 5–8 each carry $-I/4$. The inductance matrix has $L_{ii} = L = 4$ nH and $L_{i,i\pm1} = M = 2$ nH (nonadjacent coupling neglected), a strong coupling coefficient $k = M/L = 0.5$. Wires 1–4 are in parallel between the package supply and the on-chip supply node, and wires 5–8 between the on-chip ground and the package ground. The drop across wire $k$ is

$$V_k = \sum_j L_{kj}\frac{dI_j}{dt} = L\frac{dI_k}{dt} + M\sum_{j\ \text{adjacent to}\ k}\frac{dI_j}{dt} ,$$

where same-direction neighbour currents add.

### Step 2 — Voltage drop on each supply wire

With $I_k = I/4$ for $k = 1, \dots, 4$, considering the supply group by itself:

- **wire 1** (end of the row, one neighbour, wire 2):
$$V_1 = (L + M)\frac{1}{4}\frac{dI}{dt} = \frac{4 + 2}{4}\frac{dI}{dt} = 1.5\ \mathrm{nH}\cdot\frac{dI}{dt};$$
- **wires 2 and 3** (two supply neighbours each):
$$V_{2,3} = (L + 2M)\frac{1}{4}\frac{dI}{dt} = \frac{4 + 4}{4}\frac{dI}{dt} = 2\ \mathrm{nH}\cdot\frac{dI}{dt};$$
- **wire 4** (one supply neighbour, wire 3):
$$V_4 = (L + M)\frac14\frac{dI}{dt} = 1.5\ \mathrm{nH}\cdot\frac{dI}{dt}.$$

### Step 3 — Equivalent inductance of the supply connection

With equal currents imposed the drops are unequal, so the connection's inductance is defined through the power delivered, $P = \sum_k V_kI_k = \frac{I}{4}(V_1 + V_2 + V_3 + V_4)$, set equal to $L_{eq}\,I\,dI/dt$:

$$L_{eq}I\frac{dI}{dt} = \frac{I}{4}\left(1.5 + 2 + 2 + 1.5\right)\mathrm{nH}\cdot\frac{dI}{dt} = \frac{7}{4}\ \mathrm{nH}\cdot I\frac{dI}{dt}, \qquad L_{VV} = 1.75\ \mathrm{nH}.$$

**Matrix form (same result).** $L_{eq} = \frac{1}{I^2}\sum_{i,j}L_{ij}I_iI_j = \frac{1}{16}\sum_{i,j}L_{ij}$ over the $4\times4$ supply block, with four diagonal entries and three adjacent pairs (each appearing twice):

$$L_{VV} = \frac{4L + 2\cdot3\cdot M}{16} = \frac{4(4) + 6(2)}{16} = \frac{16 + 12}{16} = \frac{28}{16} = 1.75\ \mathrm{nH}.$$

Without coupling, four 4-nH wires in parallel give $4/4 = 1$ nH; grouping same-direction wires side by side raises this by 75 %, to 1.75 nH, working *against* the purpose of using several pads.

The ground wires 5–8 form an identical group (all carrying the same $-I/4$), so likewise

$$L_{GG} = 1.75\ \mathrm{nH}.$$

### Step 4 — The complete supply–ground loop

The supply current returns through wires 5–8, so supply bounce is set by the whole loop. Only wire 4 (supply) is adjacent to wire 5 (ground), with **opposite** currents. The mutual term between the groups is

$$M_{VG} = \frac{1}{I^2}\sum_{i\in V,\,j\in G}L_{ij}\,|I_i|\,|I_j| = \frac{M}{16} = \frac{2}{16} = 0.125\ \mathrm{nH},$$

and it subtracts for opposite currents:

$$L_{loop} = L_{VV} + L_{GG} - 2M_{VG} = 1.75 + 1.75 - 2(0.125) = 3.25\ \mathrm{nH}.$$

(If the single supply–ground adjacency is ignored, $L_{loop} = 3.5$ nH.) Shared equally between the two connections, this is about 1.6 nH each.

**Check by matrix.** With all eight currents $\pm I/4$, the two diagonal blocks contribute $28 + 28 = 56$ and the wire 4–wire 5 pair $2\times M\times(+1)(-1) = -4$; total $52/16 = 3.25$ nH. ✓

### Step 5 — Remarks

- **Why grouping is bad.** Same-direction currents reinforce each other's field, so this is the worst use of multiple pads; alternating supply and ground wires makes neighbouring currents opposite, and the mutual inductance then *reduces* the loop inductance.
- **Equal current division is an assumption.** With $k = 0.5$, the currents would actually redistribute so that all parallel wires have equal drops; solving the full network that way gives smaller values (about 1.67 nH for one group alone and 2.0 nH for the loop) with a very uneven current distribution. The problem specifies equal division.

### Result

With four same-direction wires side by side and equal current division, each connection has

$$L_{VV} = L_{GG} = \frac{4L + 6M}{16} = \frac{28}{16} = 1.75\ \mathrm{nH}$$

(versus 1 nH without coupling). The supply-plus-ground loop, including the one adjacent supply–ground pair with opposite currents, has $L_{loop} = 1.75 + 1.75 - 2(0.125) = 3.25$ nH (3.5 nH if that pair's coupling is ignored).

**Common mistake.** Ignoring the mutual inductance and answering $4\ \mathrm{nH}/4 = 1$ nH. Adjacent same-direction currents add flux, raising the effective inductance by 75 % here.

**Common mistake.** Subtracting the mutual inductance within a group, e.g. $(L - M)/4$. It reduces the inductance only for *opposite* currents, as between a supply and a ground wire.

**Common mistake.** Giving every wire two neighbours ($(L + 2M)/4 = 2$ nH per connection) or adding the four wires in series. The end wires have only one same-direction neighbour, and the four wires of a connection are in parallel.
