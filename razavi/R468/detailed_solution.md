# Detailed solution - R468

**Approach.** Associate a pole with each node on the signal path, $\omega \approx 1/(R_{node}C_{node})$. By symmetry one side suffices: find each node's resistance, list its capacitances (Miller-multiplied where a capacitor bridges a gain), and rank the poles.

### Step 1 — The signal path and its nodes

Call the common gate/drain node of $M_{11}$, $M_7$ and $M_9$ node A (the **mirror node**). The nodes on the differential signal path are X (and Y), A (and its twin on the right), and the outputs; the common source node of $M_1$/$M_2$ is a virtual ground for differential signals and gives no pole.

On one side, the first stage draws $g_{m1}v_{in}/2$ out of X, whose resistance is $r_{O1}\parallel r_{O3}$. X drives $M_5$ (current $g_{m5}v_X$ out of $V_{out1}$); Y ($= -v_X$) drives $M_9$, whose current flows through the diode $M_{11}$ ($\approx 1/g_{m11}$) at A, and $M_7$ copies it into $V_{out1}$, which has resistance $r_{O5}\parallel r_{O7}$ and load $C_L$. $C_{GD5}$ bridges X and $V_{out1}$, and $C_{GD7}$ bridges A and $V_{out1}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Pole at X and Y (first-stage outputs)

The gates of $M_5$ and $M_{10}$ draw no current, so

$$R_X = r_{O1}\parallel r_{O3}\quad\text{(large)}.$$

Capacitances at X:

- $M_1$: $C_{DB1}$ and $C_{GD1}$ (to the input, an ac ground here);
- $M_3$: $C_{DB3}$ and $C_{GD3}$ (to $V_b$);
- $M_5$: $C_{GS5}$ (source grounded) and $C_{GD5}$, which bridges X and $V_{out1}$. The gain from X to $V_{out1}$ is $-A_2$ with $A_2 = (g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})$ (pull-down and active pull-up both respond), so $C_{GD5}$ appears at X as $(1 + A_2)C_{GD5}$;
- $M_{10}$: $C_{GS10}$ (source grounded) and $C_{GD10}$, which bridges X and the right-hand mirror node at $-(g_{m10}/g_{m12})v_X$, so it is multiplied by $(1 + g_{m10}/g_{m12})$.

$$C_X \approx C_{GS5} + C_{GS10} + C_{DB1} + C_{GD1} + C_{DB3} + C_{GD3} + (1 + A_2)C_{GD5} + \left(1 + \frac{g_{m10}}{g_{m12}}\right)C_{GD10} .$$

$$\boxed{\omega_X \approx \frac{1}{(r_{O1}\parallel r_{O3})\,C_X}}$$

With $R_X$ large and $C_X$ containing the Miller-multiplied $C_{GD5}$ and two gate capacitances, this is usually a **low-frequency** pole; Y has the same pole.

### Step 3 — Pole at the outputs

$V_{out1}$ sees the drains of $M_5$ and $M_7$:

$$R_{out} = r_{O5}\parallel r_{O7}.$$

Its capacitance is $C_L$, the junctions $C_{DB5}$ and $C_{DB7}$, $C_{GD7}$ (whose other end, A, is nearly an ac ground), and $C_{GD5}$ with Miller factor $(1 + 1/A_2) \approx 1$:

$$C_{out} \approx C_L + C_{DB5} + C_{GD5} + C_{DB7} + C_{GD7} .$$

$$\boxed{\omega_{out} \approx \frac{1}{(r_{O5}\parallel r_{O7})\,C_{out}}}$$

$R_{out}$ is smaller than $R_X$, but $C_L$ is usually large, so this pole is also relatively **low**.

### Step 4 — Pole at the mirror nodes (gates of $M_{11}/M_7$ and $M_{12}/M_8$)

A is the drain and gate of the diode-connected $M_{11}$, in parallel with $r_{O11}$ and $r_{O9}$:

$$R_A = \frac{1}{g_{m11}}\parallel r_{O11}\parallel r_{O9} \approx \frac{1}{g_{m11}}\quad\text{(small)}.$$

Its capacitance is $C_{GS11}$ and $C_{GS7}$ (sources at $V_{DD}$), the junctions $C_{DB11}$ and $C_{DB9}$, $C_{GD9}$ (to Y), and $C_{GD7}$, which bridges A and $V_{out1}$ with Miller factor $(1 + g_{m7}R_{out})$ below the output pole:

$$C_A \approx C_{GS11} + C_{GS7} + C_{DB11} + C_{DB9} + C_{GD9} + (1 + g_{m7}R_{out})\,C_{GD7} .$$

$$\boxed{\omega_m \approx \frac{g_{m11}}{C_A}}$$

With $R_A \approx 1/g_{m11}$ small, this pole is normally at a **high frequency**, near the transit frequency of $M_{11}$ (lowered by the extra capacitance of the larger $M_7$).

### Step 5 — The mirror pole comes with a zero

The signal reaches $V_{out1}$ along two parallel paths: directly through $M_5$ (from X), and through $M_9 \to M_{11} \to M_7$ (from Y), which alone contains the mirror pole. The output current is proportional to

$$g_{m5} + \frac{Kg_{m9}}{1 + s/\omega_m} = (g_{m5} + Kg_{m9})\,\frac{1 + s/\omega_z}{1 + s/\omega_m}, \qquad \omega_z = \omega_m\,\frac{g_{m5} + Kg_{m9}}{g_{m5}} .$$

For equal contributions ($Kg_{m9} = g_{m5}$), $\omega_z = 2\omega_m$: a left-half-plane zero at twice the mirror pole, as in a differential pair with an active current-mirror load, so the doublet only mildly affects the response.

### Step 6 — Summary and consequence

| Node | Resistance | Main capacitances | Pole |
|---|---|---|---|
| X, Y | $r_{O1}\parallel r_{O3}$ (large) | $C_{GS5}$, $C_{GS10}$, junctions, $(1 + A_2)C_{GD5}$ | low |
| $V_{out1}$, $V_{out2}$ | $r_{O5}\parallel r_{O7}$ | $C_L$ + junctions | low |
| Mirror nodes | $\approx 1/g_{m11}$ (small) | $C_{GS11} + C_{GS7}$ + junctions | high (with a zero at about $2\omega_m$) |

$\omega_X$ and $\omega_{out}$ are both low and comparable, so the uncompensated op amp has poor phase margin and needs frequency compensation (e.g. Miller capacitors across $M_5$/$M_6$) before use in feedback.

### Result

1. **First-stage outputs X, Y:** $\omega_X \approx \dfrac{1}{(r_{O1}\parallel r_{O3})\,C_X}$, with $C_X \approx C_{GS5} + C_{GS10} + C_{DB1} + C_{GD1} + C_{DB3} + C_{GD3} + (1 + A_2)C_{GD5} + (1 + g_{m10}/g_{m12})C_{GD10}$ and $A_2 = (g_{m5} + Kg_{m9})(r_{O5}\parallel r_{O7})$.
2. **Outputs:** $\omega_{out} \approx \dfrac{1}{(r_{O5}\parallel r_{O7})(C_L + C_{DB5} + C_{GD5} + C_{DB7} + C_{GD7})}$.
3. **Mirror nodes** (gates of $M_{11}/M_7$, $M_{12}/M_8$): $\omega_m \approx \dfrac{g_{m11}}{C_{GS11} + C_{GS7} + C_{DB11} + C_{DB9} + C_{GD9} + (1 + g_{m7}R_{out})C_{GD7}}$, a high-frequency pole accompanied by a zero near $2\omega_m$.

**Common mistake.** Assigning a large resistance ($r_{O9}$ or $r_{O11}$) to the mirror node. The diode-connected $M_{11}$ makes it a low-impedance node ($\approx 1/g_{m11}$); the drains of $M_9$/$M_{10}$ are *not* high-impedance nodes.

**Common mistake.** Listing a pole at the common source node of $M_1$/$M_2$, which is a virtual ground for differential signals.

**Common mistake.** Leaving out the Miller multiplication of $C_{GD5}$ at X: bridging a gain of $A_2$, it appears multiplied by about $1 + A_2$ and can dominate $C_X$.
