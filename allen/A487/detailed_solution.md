# Detailed solution - A487

Each block of the diagram computes $v_i=b_iV_{REF}+\tfrac12v_{i+1}$ and delays it. A switched-capacitor gain stage does exactly this: two input capacitors sample $\pm V_{REF}$ and the previous output, and in the next phase their charge is transferred onto a reset feedback capacitor, with the capacitor ratios setting the weights 1 and ½. Cascade one such cell per bit, clocked on alternating phases, so that each cell samples its predecessor while that output is valid.

### Step 1 — The cell for bit $i$

Each cell uses an op amp with its noninverting input grounded and four elements around its inverting input (summing node):

| Element | Value | Sampling phase | Transfer phase |
|---|---|---|---|
| Feedback capacitor $C_F$ | $C$ | shorted by a reset switch (output $=0$) | between summing node and output |
| Reference capacitor $C_R$ | $C$ ($C_R/C_F=1$) | left plate to $V_{REF}$ if $b_i=1$, to ground if $b_i=0$; right plate to ground | left plate to ground if $b_i=1$, to $V_{REF}$ if $b_i=0$; right plate to summing node |
| Inter-stage capacitor $C_P$ | $C/2$ ($C_P/C_F=\tfrac12$) | left plate to previous output $v_{i+1}$; right plate to ground | left plate to ground; right plate to summing node |

(Instead of interchanging $V_{REF}$ and ground, the left plate of $C_R$ can be switched between $+V_{REF}$ and $-V_{REF}$.) The right plates go to ground or to the virtual ground, never to a floating node, so the cell is insensitive to the parasitic capacitances of those plates.

### Step 2 — Charge transfer in one cell

At the end of the sampling phase $C_F$ is discharged and the right plates of $C_R$ and $C_P$ are at 0 V, holding $-C_RV_s$ and $-C_Pv_{i+1}$ ($V_s$ is the sampled left-plate voltage of $C_R$). In the transfer phase these plates join the summing node, which the op amp holds at 0 V; with $V_t$ the new left-plate voltage of $C_R$, charge conservation on the node gives

$$
-C_RV_t-C_Fv_i=-C_RV_s-C_Pv_{i+1}
\quad\Longrightarrow\quad
v_i=\frac{C_R}{C_F}\left(V_s-V_t\right)+\frac{C_P}{C_F}v_{i+1}.
$$

With $V_s-V_t=+V_{REF}$ for $b_i=1$ and $-V_{REF}$ for $b_i=0$, and the ratios above,

$$
v_i=b_iV_{REF}+\frac12v_{i+1},\qquad b_i=\pm1,
$$

valid at the end of the transfer phase and held until the cell is reset in its next sampling phase. The charge transfer is noninverting, so no sign correction is needed between stages.

### Step 3 — Cascade and clock phasing

- Cell $N-1$ (LSB) has no $C_P$, since its ½-input is 0; cell 0 (MSB) drives the output.
- Successive cells use opposite phases: cell $N-1$ samples on φ1 and transfers on φ2; cell $N-2$ samples on φ2, i.e. while cell $N-1$ is transferring and its output settles to $v_{N-1}$, and captures that value at the end of φ2; it transfers on φ1, when cell $N-1$ is being reset and its own $C_P$ is already disconnected from cell $N-1$. Cell $N-3$ then samples on φ1, and so on, alternating.
- With nonoverlapping φ1 and φ2, no cell ever reads a predecessor that is being reset.

### Step 4 — Timing of the bits and the output

Each cell adds half a clock period of delay, so the $z^{-1}$ of each block corresponds to one half-period of the two-phase clock. The bits of a word are applied to successive cells staggered by the same half-period ($b_{N-1}$ first, $b_0$ last), and a new word can enter the pipeline every clock period. The analog output is taken from cell 0 during its transfer phase, or through a final sample-and-hold so that it is available continuously:

$$
v_{OUT}=V_{REF}\left(b_0+\tfrac12b_1+\tfrac14b_2+\cdots+2^{-(N-1)}b_{N-1}\right).
$$

If inverting (standard) charge transfer were used instead, each cell would invert; this is compensated by inverting the sense of $b_i$ in alternate cells.
