# Detailed solution - R722

**Approach.** Number the wires 1–8 along the row; odd wires carry the supply current and even wires the ground (return) current, each a quarter of the total $I$. Every pair of neighbours now carries **opposite** currents, so each mutual inductance subtracts from the self-inductance. Compute each wire's voltage, then the equivalent inductance of each connection and of the whole loop from the power (energy) relation $L_{eq}I^2 = \sum_{i,j}L_{ij}I_iI_j$.

### Step 1 — Currents and the inductance matrix

Take all wires in the same physical direction (package → chip): supply wires 1, 3, 5, 7 carry $+I/4$ and ground wires 2, 4, 6, 8 carry $-I/4$. With $L = 4$ nH and $M = 2$ nH between adjacent wires only, the row has **7 adjacent pairs** (1–2, 2–3, …, 7–8), **every one a supply–ground pair** with opposite currents; no two supply (or ground) wires are adjacent. The odd wires are in parallel between the package supply and the on-chip supply node, the even wires between the on-chip ground and the package ground. The drop across wire $k$ is

$$V_k = L\frac{dI_k}{dt} + M\sum_{j\ \text{adjacent}}\frac{dI_j}{dt}.$$

### Step 2 — Voltage on each wire

With $\dot I = dI/dt$:

- **Inner wires** (2 to 7) have two opposite-current neighbours. For an inner supply wire (e.g. wire 3):
$$V_3 = L\frac{\dot I}{4} + M\left(-\frac{\dot I}{4}\right) + M\left(-\frac{\dot I}{4}\right) = (L - 2M)\frac{\dot I}{4} = (4 - 4)\frac{\dot I}{4} = 0 ,$$
the neighbours' flux exactly cancelling the wire's own (here $2M = L$).
- **End wires** (1 and 8) have only one opposite neighbour. For wire 1:
$$V_1 = (L - M)\frac{\dot I}{4} = \frac{4 - 2}{4}\dot I = 0.5\ \mathrm{nH}\cdot\dot I ,$$
and wire 8 (ground) likewise drops $0.5\ \mathrm{nH}\cdot\dot I$ in magnitude, with the sign of the return current.

### Step 3 — Equivalent inductance per connection

**Supply connection.** The power into the four supply wires is $P = \sum V_kI_k = \frac{I}{4}(V_1 + V_3 + V_5 + V_7)$, with $V_1 = 0.5\,\dot I$ nH and $V_3 = V_5 = V_7 = 0$:

$$L_{V,eff}\,I\dot I = \frac{I}{4}(0.5 + 0 + 0 + 0)\ \mathrm{nH}\cdot\dot I \;\Longrightarrow\; L_{V,eff} = 0.125\ \mathrm{nH}.$$

**Ground connection.** By symmetry (wire 8 is the end wire, wires 2, 4, 6 are inner), $L_{G,eff} = 0.125$ nH.

These effective values include the coupling to the other connection, which is what the circuit actually experiences.

### Step 4 — The complete supply–ground loop

- **Supply group by itself.** No two supply wires are adjacent, so four 4-nH wires in parallel:
$$L_{VV} = \frac{4L}{16} = \frac{16}{16} = 1\ \mathrm{nH}.$$
- **Ground group by itself.** Likewise $L_{GG} = 1$ nH.
- **Coupling between the groups.** All 7 adjacent pairs are supply–ground pairs carrying $I/4$ in opposite directions:
$$M_{VG} = 7\times M\times\frac14\times\frac14 = \frac{7\times2}{16} = 0.875\ \mathrm{nH}.$$

For opposite currents the mutual term subtracts:

$$L_{loop} = L_{VV} + L_{GG} - 2M_{VG} = 1 + 1 - 2(0.875) = 0.25\ \mathrm{nH}.$$

**Check.** The per-connection values of Step 3 add to the same total, $0.125 + 0.125 = 0.25$ nH ✓; by matrix, the diagonal gives $8\times4 = 32$ and the 7 opposite pairs $7\times2\times2\times(-1) = -28$, so $(32 - 28)/16 = 0.25$ nH.

### Step 5 — Comparison with grouped wires

| Arrangement | Supply group alone | Loop inductance | Per connection (effective) |
|---|---|---|---|
| grouped (V V V V G G G G) | 1.75 nH | 3.25 nH | ≈ 1.6 nH |
| alternating (V G V G …) | 1 nH | **0.25 nH** | **0.125 nH** |

Interleaving cuts the loop inductance by a factor of $3.25/0.25 = 13$. In the grouped layout the mutual inductance is a penalty (same-direction neighbours add flux); here it is a benefit, because each wire's return current flows right next to it and the fields largely cancel. This is why supply and ground pads are alternated on high-speed chips.

**Current division.** The problem assumes equal currents. Letting the currents divide so that parallel wires have equal drops (exact network solution) gives an even lower loop inductance, about 0.13 nH, with the same conclusion.

### Result

With supply and ground wires alternating (and equal current division), the supply-plus-ground loop has

$$L_{loop} = \frac{4L}{16} + \frac{4L}{16} - 2\cdot\frac{7M}{16} = 1 + 1 - 1.75 = 0.25\ \mathrm{nH},$$

i.e. about **0.125 nH effective per connection**: inner wires drop no voltage at all ($L - 2M = 0$), and only the two end wires ($L - M$) contribute. This is about 13 times less than with grouped wires (3.25 nH).

**Common mistake.** Adding the mutual inductance for adjacent supply and ground wires. Their currents are opposite, so the mutual inductance *subtracts*.

**Common mistake.** Treating every wire as having two opposite neighbours, which gives exactly zero. The two end wires have only one neighbour and drop $(L - M)I/4$; they set the residual 0.25-nH loop inductance.

**Common mistake.** Treating the four supply–ground pairs as isolated loops (each $2L - 2M = 4$ nH, four in parallel giving 1 nH). That ignores each inner wire's coupling to its neighbour on the *other* side, which cancels its remaining flux ($L - 2M = 0$ instead of $L - M$) and is the main benefit of interleaving.
