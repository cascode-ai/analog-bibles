# Detailed solution - A334

Count the high-impedance nodes in each signal path: there are two, so the amplifier has two low-frequency poles and needs pole splitting. For differential signals the circuit splits into two identical half circuits, each a single-ended two-stage op amp, so each half is compensated with its own Miller capacitor exactly as in the single-ended case.

### Step 1 — Poles of the uncompensated amplifier

The first stage (M1–M2 with current-source loads M3–M4) has high-impedance outputs at the drains of M1 and M2, nodes d1 and d2, with resistance $r_{ds2}\parallel r_{ds4}$. The second stage is the p-channel pair M6–M7 with tail M8 and current-source loads M9–M10; its outputs $v_{out}^+$ (drain of M6) and $v_{out}^-$ (drain of M7) have resistance $r_{ds6}\parallel r_{ds9}$ and carry $C_L$. Both nodes in each path are high-impedance, so both poles lie at low frequency and close together, and the phase margin in feedback would be poor.

For differential signals the common sources of M6 and M7 are an ac ground, so each half of the second stage is an inverting common-source stage with gain

$$
A_{v2}=-g_{m6}(r_{ds6}\parallel r_{ds9}).
$$

Each half circuit is thus the standard two-stage op amp: a transconductance stage $g_{m1}$ followed by an inverting gain stage.

### Step 2 — Placement of the compensation capacitors

Connect a Miller capacitor $C_c$, in series with a nulling resistor $R_z$, from the drain of M6 ($v_{out}^+$) to the gate of M6 (node d1, the drain of M1/M3), and an identical $C_c$–$R_z$ network from the drain of M7 ($v_{out}^-$) to the gate of M7 (node d2, the drain of M2/M4).

<!-- diagram: diagram-01.cir -->

Each capacitor connects the input and output of an inverting stage of its own half, so it is multiplied by the Miller effect and splits that half's two poles. The two networks must be identical to preserve the symmetry. A capacitor from an output to the first-stage node of the opposite side would close a non-inverting loop, i.e. positive feedback, and must be avoided.

### Step 3 — Design relations (per half)

With the Miller capacitor in place, the standard two-stage results apply to each half:

$$
GB=\frac{g_{m1}}{C_c},\qquad p_2\approx-\frac{g_{m6}}{C_L},\qquad z=\frac{1}{C_c(1/g_{m6}-R_z)} .
$$

The right-half-plane zero $g_{m6}/C_c$ (for $R_z=0$) is removed by choosing $R_z\ge1/g_{m6}$, or the zero is moved onto $p_2$ with

$$
R_z=\frac{C_c+C_L}{g_{m6}C_c}.
$$

For a 60° phase margin with the zero at or beyond $10\,GB$, the output pole must satisfy $|p_2|\ge2.2\,GB$, which gives

$$
\frac{g_{m6}}{C_L}\ge2.2\frac{g_{m1}}{C_c}\quad\Rightarrow\quad C_c\ge2.2\frac{g_{m1}}{g_{m6}}C_L ,
$$

the familiar $C_c\ge0.22C_L$ when $g_{m6}=10g_{m1}$. If the load were a single capacitor between the two outputs, $C_L$ in these relations would be replaced by its single-ended equivalent $2C_L$.

### Step 4 — Common-mode feedback

Both stages have current-source loads, so the output common-mode level is not defined by the differential circuit. A common-mode feedback circuit must therefore be added (for example sensing the average of $v_{out}^+$ and $v_{out}^-$ and adjusting the bias of M9–M10 or M8), and its loop must also be stable; the Miller capacitors above compensate only the differential path.
