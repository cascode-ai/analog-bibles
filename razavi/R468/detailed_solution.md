# Detailed solution - R468

**Approach.** Use the "association of poles with nodes" method: every node on the signal path whose small-signal resistance to AC ground is significant gives a pole $\omega \approx 1/(R_{node}C_{node})$. We identify the nodes on the differential signal path (by symmetry, one side suffices), find each node's resistance, list the capacitances attached to it (with Miller multiplication where a capacitor bridges a gain), and rank the poles.

### Step 1 — The signal path and its nodes

From the figure (one side; the other is its mirror image):

- **First stage:** PMOS pair $M_1$–$M_2$ with a tail current source; NMOS current-source loads $M_3$ (at X) and $M_4$ (at Y), gates at the bias $V_b$.
- **Output stage, left side:** $M_5$ (gate at X) pulls $V_{out1}$ down. $M_7$ pulls it up, mirroring the diode-connected $M_{11}$ (ratio $K$). $M_{11}$'s current is set by $M_9$, whose gate is at Y. Call the common gate/drain node of $M_{11}$, $M_7$ and $M_9$ node A (the **mirror node**).
- Each output drives $C_L$.

Nodes on the differential signal path: X (and Y), the mirror nodes A (and its twin on the right), and the outputs. The common source node of $M_1$/$M_2$ is a virtual ground for differential signals and gives no pole.

**Small-signal picture of one side.** The first stage injects $g_{m1}v_{in}/2$ into X, which has resistance $r_{O1}\parallel r_{O3}$. X drives $M_5$ (current $g_{m5}v_X$ out of $V_{out1}$). Y ($= -v_X$) drives $M_9$, whose current flows through the diode $M_{11}$ (resistance $\approx 1/g_{m11}$) at node A, and $M_7$ copies it into $V_{out1}$. The output node has resistance $r_{O5}\parallel r_{O7}$ and capacitance $C_L$. Bridging capacitors: $C_{GD5}$ (X to $V_{out1}$) and $C_{GD7}$ (A to $V_{out1}$).

<!-- diagram: diagram-01.cir -->

### Step 2 — Pole at X and Y (first-stage outputs)

**Resistance.** X sees the drain of $M_1$ and the drain of the current source $M_3$; the gates of $M_5$ and $M_{10}$ draw no current:

$$R_X = r_{O1}\parallel r_{O3}\quad\text{(large)}.$$

**Capacitance.** Everything connected to X:

- $M_1$: $C_{DB1}$ and $C_{GD1}$ (to its gate, the input, an AC ground for this purpose);
- $M_3$: $C_{DB3}$ and $C_{GD3}$ (to $V_b$, AC ground);
- $M_5$: $C_{GS5}$ (its source is grounded) and $C_{GD5}$, which bridges X and $V_{out1}$. The gain from X to $V_{out1}$ is $-A_2$ with $A_2 = (g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})$ (both pull-down and active pull-up respond to the differential signal). By the Miller effect $C_{GD5}$ appears at X as $(1 + A_2)C_{GD5}$;
- $M_{10}$: $C_{GS10}$ (source grounded) and $C_{GD10}$, which bridges X and the right-hand mirror node. That node sits at $-(g_{m10}/g_{m12})v_X$, so $C_{GD10}$ appears multiplied by $(1 + g_{m10}/g_{m12})$.

$$C_X \approx C_{GS5} + C_{GS10} + C_{DB1} + C_{GD1} + C_{DB3} + C_{GD3} + (1 + A_2)C_{GD5} + \left(1 + \frac{g_{m10}}{g_{m12}}\right)C_{GD10} .$$

$$\boxed{\omega_X \approx \frac{1}{(r_{O1}\parallel r_{O3})\,C_X}}$$

Because $R_X$ is large and $C_X$ contains the Miller-multiplied $C_{GD5}$ plus two gate capacitances, this is usually a **low-frequency** pole. Y has the same pole.

### Step 3 — Pole at the outputs

**Resistance.** $V_{out1}$ sees the drains of $M_5$ and $M_7$:

$$R_{out} = r_{O5}\parallel r_{O7}.$$

**Capacitance.** $C_L$; the junction capacitances $C_{DB5}$ and $C_{DB7}$; $C_{GD7}$, whose other end is the low-impedance node A (nearly an AC ground); and $C_{GD5}$, whose Miller factor seen from the output side is $(1 + 1/A_2) \approx 1$:

$$C_{out} \approx C_L + C_{DB5} + C_{GD5} + C_{DB7} + C_{GD7} .$$

$$\boxed{\omega_{out} \approx \frac{1}{(r_{O5}\parallel r_{O7})\,C_{out}}}$$

$R_{out}$ is smaller than $R_X$, but $C_L$ is usually large, so this pole is also at a relatively **low frequency**.

### Step 4 — Pole at the mirror nodes (gates of $M_{11}/M_7$ and $M_{12}/M_8$)

**Resistance.** Node A is the drain and gate of the diode-connected $M_{11}$. Looking into a diode-connected device gives $1/g_{m11}$, in parallel with $r_{O11}$ and the output resistance of $M_9$, $r_{O9}$:

$$R_A = \frac{1}{g_{m11}}\parallel r_{O11}\parallel r_{O9} \approx \frac{1}{g_{m11}}\quad\text{(small)}.$$

**Capacitance.** The gate capacitances $C_{GS11}$ and $C_{GS7}$ (sources at $V_{DD}$, AC ground); the junction capacitances $C_{DB11}$ and $C_{DB9}$; $C_{GD9}$ (to Y); and $C_{GD7}$, which bridges A and $V_{out1}$, with a Miller factor $(1 + g_{m7}R_{out})$ at frequencies below the output pole:

$$C_A \approx C_{GS11} + C_{GS7} + C_{DB11} + C_{DB9} + C_{GD9} + (1 + g_{m7}R_{out})\,C_{GD7} .$$

$$\boxed{\omega_m \approx \frac{g_{m11}}{C_A}}$$

Because $R_A \approx 1/g_{m11}$ is small, this pole is normally at a **high frequency**, near the transit frequency of $M_{11}$ (reduced by the extra capacitance of the larger device $M_7$).

### Step 5 — The mirror pole comes with a zero

The signal reaches $V_{out1}$ along two parallel paths: directly through $M_5$ (from X), and through $M_9 \to M_{11} \to M_7$ (from Y), which alone contains the mirror pole. The output current is proportional to

$$g_{m5} + \frac{Kg_{m9}}{1 + s/\omega_m} = (g_{m5} + Kg_{m9})\,\frac{1 + s/\omega_z}{1 + s/\omega_m}, \qquad \omega_z = \omega_m\,\frac{g_{m5} + Kg_{m9}}{g_{m5}} .$$

For equal contributions ($Kg_{m9} = g_{m5}$), $\omega_z = 2\omega_m$: a left-half-plane zero at twice the mirror pole, exactly as in a differential pair with an active current-mirror load. The pole–zero doublet only mildly affects the response.

### Step 6 — Summary and consequence

| Node | Resistance | Main capacitances | Pole |
|---|---|---|---|
| X, Y | $r_{O1}\parallel r_{O3}$ (large) | $C_{GS5}$, $C_{GS10}$, junctions, $(1 + A_2)C_{GD5}$ | low |
| $V_{out1}$, $V_{out2}$ | $r_{O5}\parallel r_{O7}$ | $C_L$ + junctions | low |
| Mirror nodes | $\approx 1/g_{m11}$ (small) | $C_{GS11} + C_{GS7}$ + junctions | high (with a zero at about $2\omega_m$) |

Two poles ($\omega_X$ and $\omega_{out}$) are low and of comparable magnitude, so the uncompensated op amp has poor phase margin. It needs frequency compensation (for example Miller capacitors across $M_5$/$M_6$) before it is used in feedback.

### Result

1. **First-stage outputs X, Y:** $\omega_X \approx \dfrac{1}{(r_{O1}\parallel r_{O3})\,C_X}$, with $C_X \approx C_{GS5} + C_{GS10} + C_{DB1} + C_{GD1} + C_{DB3} + C_{GD3} + (1 + A_2)C_{GD5} + (1 + g_{m10}/g_{m12})C_{GD10}$ and $A_2 = (g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})$.
2. **Outputs:** $\omega_{out} \approx \dfrac{1}{(r_{O5}\parallel r_{O7})(C_L + C_{DB5} + C_{GD5} + C_{DB7} + C_{GD7})}$.
3. **Mirror nodes** (gates of $M_{11}/M_7$, $M_{12}/M_8$): $\omega_m \approx \dfrac{g_{m11}}{C_{GS11} + C_{GS7} + C_{DB11} + C_{DB9} + C_{GD9} + (1 + g_{m7}R_{out})C_{GD7}}$, a high-frequency pole accompanied by a zero near $2\omega_m$.

**Common mistake.** Assigning a large resistance (such as $r_{O9}$ or $r_{O11}$) to the mirror node. The diode-connected $M_{11}$ makes that node a low-impedance node ($\approx 1/g_{m11}$), which is why its pole is at a high frequency. The drains of $M_9$/$M_{10}$ are *not* high-impedance nodes.

**Common mistake.** Listing a pole at the common source node of $M_1$/$M_2$. For differential signals that node is a virtual ground; it matters only for common-mode signals.

**Common mistake.** Leaving out the Miller multiplication of $C_{GD5}$ at X. It bridges a node and an output with a gain of $A_2$, so it appears at X multiplied by about $1 + A_2$ and can dominate $C_X$.
