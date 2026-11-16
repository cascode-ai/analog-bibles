# Detailed solution - R692

**Approach.** Contact spiking turns one source/drain junction into a short between that diffusion and the bulk (substrate or well) underneath it. List every junction that can spike, work out what a short there does, and compare with the nominal small-signal gain. Only one candidate makes the gain *larger*.

### Step 1 — The candidate junctions

During the anneal, the metal of a contact can grow spikes through the shallow source/drain diffusion, **shorting the diffusion to its bulk** (through at most a small spreading resistance). The circuit has four diffusion-to-bulk junctions under contacts:

| Junction | Bulk potential | Node it would short |
|---|---|---|
| (a) n+ source of $M_1$ / p-substrate | ground | source of $M_1$ (top of $R_S$) to ground |
| (b) n+ drain of $M_1$ / p-substrate | ground | $V_{out}$ to ground |
| (c) p+ source of $M_2$ / n-well | $V_{DD}$ | source of $M_2$ to $V_{DD}$ |
| (d) p+ drain of $M_2$ / n-well | $V_{DD}$ | $V_{out}$ to $V_{DD}$ |

The well and substrate contacts (n+ in n-well, p+ in p-substrate) are not junctions with their own bulk, so a spike there does nothing.

### Step 2 — Nominal small-signal gain

With $\lambda = 0$: $M_1$ has $v_{gs1} = v_{in} - v_S$ and, since its bulk is the grounded substrate, $v_{bs1} = -v_S$; $R_S$ runs from S to ground; the diode-connected $M_2$ is a resistance $1/g_{m2}$ from out to ac ground, with no body effect (source and bulk at $V_{DD}$).

<!-- diagram: diagram-01.cir -->

The drain current $i_d$ flows through $R_S$, so $v_S = i_dR_S$ and

$$i_d = g_{m1}(v_{in} - v_S) + g_{mb1}(-v_S) = g_{m1}v_{in} - (g_{m1} + g_{mb1})R_S\,i_d \quad\Longrightarrow\quad i_d = \frac{g_{m1}}{1 + (g_{m1} + g_{mb1})R_S}\,v_{in}.$$

This current is drawn out of the output through $1/g_{m2}$, so $v_{out} = -i_d/g_{m2}$ and

$$A_{v,\text{nom}} = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m2}\big[1 + (g_{m1} + g_{mb1})R_S\big]} \approx -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}$$

(the last form neglects the body effect): the load $1/g_{m2}$ over the source-path resistance $1/g_{m1} + R_S$. The degeneration resistor $R_S$ **deliberately lowers** the gain (and makes it more linear).

### Step 3 — Effect of each possible spike

**(a) Source junction of $M_1$ spiked.** The source of $M_1$ is shorted to the grounded substrate: a small resistance $R_{sub}$ from S to ground appears in parallel with $R_S$. With $R_{sub} \ll R_S$, $v_S = 0$ (so also $v_{bs1} = 0$), and Step 2 gives

$$i_d = g_{m1}v_{in}, \qquad A_v = -\frac{g_{m1}}{g_{m2}} ,$$

larger than nominal by the factor

$$\frac{|A_v|}{|A_{v,\text{nom}}|} = 1 + (g_{m1} + g_{mb1})R_S > 1 .$$

For example, with $g_{m1}R_S = 1$ the gain roughly doubles. The DC current also rises, but with a diode-connected load $g_{m1}/g_{m2} = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$ does not depend on the bias current, so the gain is higher regardless of the new bias point. **This matches the symptom.**

The other three do not:

| Spiked junction | Consequence | Gain |
|---|---|---|
| $M_1$ source / substrate | $R_S$ bypassed (degeneration removed) | **rises** to $\approx g_{m1}/g_{m2}$ |
| $M_1$ drain / substrate | $V_{out}$ shorted to ground, output pinned near 0 V | $\approx 0$ |
| $M_2$ source / n-well | nodes already equal (both at $V_{DD}$) | unchanged |
| $M_2$ drain / n-well | $V_{out}$ shorted to $V_{DD}$, output pinned near $V_{DD}$ | $\approx 0$ |

### Result

The faulty junction is the **n+ source of $M_1$ to the grounded p-substrate**. The spike shorts the source of $M_1$ to ground in parallel with $R_S$, removing the source degeneration, so the gain rises from

$$|A_v| \approx \frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)} \quad\text{to}\quad |A_v| \approx \frac{g_{m1}}{g_{m2}} .$$

A spike in the drain junction of $M_1$ or of $M_2$ would pin $V_{out}$ to ground or to $V_{DD}$ (gain ≈ 0), and one in the source junction of $M_2$ would change nothing.

**Common mistake.** Picking the drain junction of $M_1$ because "the drain is where the gain is set". A drain-to-substrate short grounds the output node itself and destroys the gain.

**Common mistake.** Describing spiking as an open circuit. The metal penetrates the junction and *shorts* the diffusion to the bulk; an open source contact would cut off $M_1$'s current and kill the gain.

**Common mistake.** Forgetting which potential each bulk sits at: the substrate under $M_1$ is grounded and the well of $M_2$ is at $V_{DD}$, so a spike at $M_2$'s source is harmless.
