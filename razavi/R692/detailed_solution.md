# Detailed solution - R692

**Approach.** Contact spiking turns one source/drain junction into a short between that diffusion and the bulk (substrate or well) underneath it. We list every junction that can spike, work out what a short there does to the circuit, and compare with the nominal small-signal gain. Only one candidate can make the gain *larger*.

### Step 1 — What contact spiking does

A metal contact (traditionally aluminium) touches the silicon of a source or drain diffusion. During the high-temperature anneal, silicon dissolves into the aluminium and aluminium fills the voids, forming "spikes" that grow down into the silicon. Source/drain diffusions are shallow, so a spike can **pierce the junction** and reach the bulk region underneath.

Electrically, the pn junction between the diffusion and its bulk is then **bypassed by a metal path**: the diffusion is shorted to the substrate (for an n+ region) or to the n-well (for a p+ region), through at most a small spreading resistance in the bulk.

### Step 2 — The candidate junctions

The circuit has four diffusion-to-bulk junctions that sit under contacts:

| Junction | Bulk potential | Node it would short |
|---|---|---|
| (a) n+ source of $M_1$ / p-substrate | ground | source of $M_1$ (top of $R_S$) to ground |
| (b) n+ drain of $M_1$ / p-substrate | ground | $V_{out}$ to ground |
| (c) p+ source of $M_2$ / n-well | $V_{DD}$ | source of $M_2$ to $V_{DD}$ |
| (d) p+ drain of $M_2$ / n-well | $V_{DD}$ | $V_{out}$ to $V_{DD}$ |

The well-contact (n+ in n-well) and substrate-contact (p+ in p-substrate) regions are not junctions with their own bulk, so a spike there does nothing.

### Step 3 — Nominal small-signal gain

**Small-signal model.** Channel-length modulation is neglected ($\lambda = 0$).

- $M_1$: a current source $g_{m1}v_{gs1}$ from the drain (node out) to the source (node S), where $v_{gs1} = v_{in} - v_S$, plus a body-effect source $g_{mb1}v_{bs1}$ in parallel, where $v_{bs1} = 0 - v_S = -v_S$ because the bulk is the grounded substrate.
- $R_S$: from S to ground.
- $M_2$: diode-connected, so its gate and drain are the same node and it behaves as a resistance $1/g_{m2}$ from out to AC ground ($V_{DD}$). Its source and bulk are both at $V_{DD}$, so it has no body effect.

<!-- diagram: diagram-01.cir -->

**Current in $M_1$.** The drain current $i_d$ flows through $R_S$, so $v_S = i_dR_S$. The device equation is

$$i_d = g_{m1}(v_{in} - v_S) + g_{mb1}(-v_S) = g_{m1}v_{in} - (g_{m1} + g_{mb1})v_S .$$

Substitute $v_S = i_dR_S$:

$$i_d = g_{m1}v_{in} - (g_{m1} + g_{mb1})R_S\,i_d .$$

Collect the $i_d$ terms:

$$i_d\big[1 + (g_{m1} + g_{mb1})R_S\big] = g_{m1}v_{in},$$

$$i_d = \frac{g_{m1}}{1 + (g_{m1} + g_{mb1})R_S}\,v_{in}.$$

**Output voltage.** This current is drawn out of the output node, through the load resistance $1/g_{m2}$:

$$v_{out} = -\frac{i_d}{g_{m2}} .$$

**Nominal gain:**

$$A_{v,\text{nom}} = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m2}\big[1 + (g_{m1} + g_{mb1})R_S\big]} \approx -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}$$

(the last form neglects the body effect). Physically, the gain is the load resistance $1/g_{m2}$ divided by the resistance in the source path, $1/g_{m1} + R_S$. The degeneration resistor $R_S$ is **deliberately lowering** the gain (and making it more linear).

### Step 4 — Effect of each possible spike

**(a) Source junction of $M_1$ spiked.** The source of $M_1$ is shorted to the grounded substrate, i.e. a small resistance $R_{sub}$ appears from S to ground in parallel with $R_S$. With $R_{sub} \ll R_S$, node S is essentially at ground: $v_S = 0$. Repeating Step 3 with $v_S = 0$ (and now $v_{bs1} = 0$ too):

$$i_d = g_{m1}v_{in}, \qquad A_v = -\frac{g_{m1}}{g_{m2}} .$$

Compared with the nominal value this is larger by the factor

$$\frac{|A_v|}{|A_{v,\text{nom}}|} = 1 + (g_{m1} + g_{mb1})R_S > 1 .$$

For example, with $g_{m1}R_S = 1$ the gain roughly doubles. The DC current also rises (the source now sits at ground), but for a diode-connected load the ratio $g_{m1}/g_{m2} = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$ does not depend on the bias current, so the conclusion "gain higher than expected" holds regardless of the new bias point. **This matches the symptom.**

**(b) Drain junction of $M_1$ spiked.** $V_{out}$ is shorted to the grounded substrate. The output is pinned near 0 V and the small-signal output is shunted to ground, so the gain collapses to almost zero. Does not match.

**(c) Source junction of $M_2$ spiked.** The p+ source of $M_2$ and its n-well are both connected to $V_{DD}$ already, so shorting them changes nothing. The gain stays at its nominal value. Does not match.

**(d) Drain junction of $M_2$ spiked.** $V_{out}$ is shorted to the n-well, i.e. to $V_{DD}$. The output is pinned near $V_{DD}$ and the gain collapses to almost zero. Does not match.

### Step 5 — Conclusion

| Spiked junction | Consequence | Gain |
|---|---|---|
| $M_1$ source / substrate | $R_S$ bypassed (degeneration removed) | **rises** to $\approx g_{m1}/g_{m2}$ |
| $M_1$ drain / substrate | $V_{out}$ shorted to ground | $\approx 0$ |
| $M_2$ source / n-well | nodes already equal | unchanged |
| $M_2$ drain / n-well | $V_{out}$ shorted to $V_{DD}$ | $\approx 0$ |

Only a spike through the source junction of $M_1$ raises the gain.

### Result

The faulty junction is the **n+ source of $M_1$ to the grounded p-substrate**. The spike shorts the source of $M_1$ to ground in parallel with $R_S$, removing the source degeneration, so the gain rises from

$$|A_v| \approx \frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)} \quad\text{to}\quad |A_v| \approx \frac{g_{m1}}{g_{m2}} .$$

A spike in the drain junction of $M_1$ or of $M_2$ would pin $V_{out}$ to ground or to $V_{DD}$ (gain ≈ 0), and one in the source junction of $M_2$ would change nothing.

**Common mistake.** Picking the drain junction of $M_1$ because "the drain is where the gain is set". A short from the drain to the substrate grounds the output node itself, which destroys the gain rather than increasing it.

**Common mistake.** Describing spiking as an open circuit (a broken contact). Spiking makes the metal penetrate the junction, creating a *short* between the diffusion and the bulk; an open source contact would cut off $M_1$'s current entirely and kill the gain.

**Common mistake.** Forgetting that the bulk of $M_1$ is the grounded substrate and the bulk of $M_2$ is the $V_{DD}$-tied well. The effect of a spike depends entirely on which potential the bulk sits at; for $M_2$'s source the bulk is at the same potential, so that spike is harmless.
