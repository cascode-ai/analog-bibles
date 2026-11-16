# Detailed solution - R722

**Approach.** Number the wires 1–8 along the row; odd wires carry the supply current and even wires the ground (return) current, each wire a quarter of the total $I$. Now every pair of neighbours carries **opposite** currents, so each mutual inductance subtracts from the self-inductance. We compute the voltage on each wire with Faraday's law, then the equivalent inductance of each connection and of the whole supply–ground loop from the power (energy) relation $L_{eq}I^2 = \sum_{i,j}L_{ij}I_iI_j$.

### Step 1 — Currents and the inductance matrix

Take all wires in the same physical direction (package → chip):

- supply wires 1, 3, 5, 7: current $+I/4$;
- ground wires 2, 4, 6, 8: current $-I/4$ (return current).

Self-inductance $L = 4$ nH; mutual inductance $M = 2$ nH between adjacent wires only. In the alternating row there are **7 adjacent pairs** (1–2, 2–3, …, 7–8), and **every one of them is a supply–ground pair** with opposite currents. No two supply wires (or two ground wires) are adjacent. Electrically, the odd wires are in parallel between the package supply and the on-chip supply node, and the even wires are in parallel between the on-chip ground node and the package ground.

**Faraday's law** for wire $k$:

$$V_k = L\frac{dI_k}{dt} + M\sum_{j\ \text{adjacent}}\frac{dI_j}{dt}.$$

### Step 2 — Voltage on each wire

Write $\dot I = dI/dt$.

- **Inner wires** (2 to 7) have two neighbours, both carrying the opposite current. For an inner supply wire (e.g. wire 3):
$$V_3 = L\frac{\dot I}{4} + M\left(-\frac{\dot I}{4}\right) + M\left(-\frac{\dot I}{4}\right) = (L - 2M)\frac{\dot I}{4} = (4 - 4)\frac{\dot I}{4} = 0 .$$
The neighbours' flux exactly cancels the wire's own flux (because here $2M = L$).
- **End wires** (1 and 8) have only one opposite neighbour. For wire 1:
$$V_1 = (L - M)\frac{\dot I}{4} = \frac{4 - 2}{4}\dot I = 0.5\ \mathrm{nH}\cdot\dot I .$$
Wire 8 (ground) likewise drops $0.5\ \mathrm{nH}\cdot\dot I$ in magnitude, with the sign of the return current.

### Step 3 — Equivalent inductance per connection

**Supply connection.** The power into the four supply wires is $P = \sum V_kI_k = \frac{I}{4}(V_1 + V_3 + V_5 + V_7)$. With $V_1 = 0.5\,\dot I$ nH and $V_3 = V_5 = V_7 = 0$:

$$L_{V,eff}\,I\dot I = \frac{I}{4}(0.5 + 0 + 0 + 0)\ \mathrm{nH}\cdot\dot I \;\Longrightarrow\; L_{V,eff} = 0.125\ \mathrm{nH}.$$

**Ground connection.** By symmetry (wire 8 is the end wire, wires 2, 4, 6 are inner): $L_{G,eff} = 0.125$ nH.

These "effective" per-connection values include the coupling to the other connection, which is what the circuit actually experiences.

### Step 4 — The complete supply–ground loop

Split the loop inductance into group terms:

- **Supply group by itself.** No two supply wires are adjacent, so there is no same-direction coupling: four 4-nH wires in parallel,
$$L_{VV} = \frac{4L}{16} = \frac{16}{16} = 1\ \mathrm{nH}.$$
- **Ground group by itself.** Likewise $L_{GG} = 1$ nH.
- **Coupling between the groups.** All 7 adjacent pairs are supply–ground pairs, each carrying $I/4$ in opposite directions:
$$M_{VG} = 7\times M\times\frac14\times\frac14 = \frac{7\times2}{16} = 0.875\ \mathrm{nH}.$$

For opposite currents the mutual term subtracts:

$$L_{loop} = L_{VV} + L_{GG} - 2M_{VG} = 1 + 1 - 2(0.875) = 0.25\ \mathrm{nH}.$$

**Check.** The two per-connection effective values from Step 3 add up to the same total: $0.125 + 0.125 = 0.25$ nH. ✓ (Matrix check: diagonal $8\times4 = 32$; the 7 opposite pairs contribute $7\times2\times2\times(-1) = -28$; $(32 - 28)/16 = 0.25$ nH.)

### Step 5 — Comparison with grouped wires

| Arrangement | Supply group alone | Loop inductance | Per connection (effective) |
|---|---|---|---|
| grouped (V V V V G G G G) | 1.75 nH | 3.25 nH | ≈ 1.6 nH |
| alternating (V G V G …) | 1 nH | **0.25 nH** | **0.125 nH** |

Interleaving cuts the loop inductance by a factor of $3.25/0.25 = 13$. In the grouped layout the mutual inductance is a penalty (same-direction neighbours add flux); in the alternating layout it is a benefit, because each wire's return current flows right next to it and the magnetic fields largely cancel. This is why supply and ground pads are alternated on high-speed chips.

**Remark on current division.** The problem assumes equal currents. If the currents are allowed to divide so that parallel wires have equal voltage drops (exact network solution), the loop inductance comes out even lower, about 0.13 nH; the conclusion is the same.

### Result

With supply and ground wires alternating (and equal current division), the supply-plus-ground loop has

$$L_{loop} = \frac{4L}{16} + \frac{4L}{16} - 2\cdot\frac{7M}{16} = 1 + 1 - 1.75 = 0.25\ \mathrm{nH},$$

i.e. about **0.125 nH effective per connection**: inner wires drop no voltage at all ($L - 2M = 0$), and only the two end wires ($L - M$) contribute. This is about 13 times less than with grouped wires (3.25 nH).

**Common mistake.** Adding the mutual inductance for adjacent supply and ground wires. Their currents flow in opposite directions, so each neighbour's flux opposes the wire's own flux and the mutual inductance *subtracts*.

**Common mistake.** Treating every wire as having two opposite neighbours, which gives exactly zero inductance. The two end wires have only one neighbour and drop $(L - M)I/4$; they set the residual 0.25-nH loop inductance.

**Common mistake.** Treating the four supply–ground pairs as isolated loops (each $2L - 2M = 4$ nH, four in parallel giving 1 nH). That ignores the coupling of each inner wire to its neighbour on the *other* side, which cancels the inner wires' remaining flux ($L - 2M = 0$ instead of $L - M$) and is the main benefit of interleaving.
