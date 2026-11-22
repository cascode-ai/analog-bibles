# Detailed solution - A279

The op amp has two high-impedance nodes: the first-stage output (drains of M2 and M4, gate of M6) and the output. At each one, find the small-signal current the stage delivers with the node held at ac ground, then multiply by the resistance seen at the node. Take $v_{id}=v_{g2}-v_{g1}$ (+ input at M2, − input at M1), matched devices ($g_{m1}=g_{m2}$, $g_{m3}=g_{m4}$), all transistors saturated, and $g_{ds}=\lambda I_D$.

### Step 1 — Current delivered by the first stage

A differential input splits symmetrically across the source-coupled pair, so the drain currents change by

$$
i_{d2}=+\frac{g_{m1}v_{id}}2,\qquad i_{d1}=-\frac{g_{m1}v_{id}}2 .
$$

M1's current change flows in the diode-connected M3 and is copied by M4 (gain 1). At the first-stage output node, M2 pulls $g_{m1}v_{id}/2$ down while M4's current falls by $g_{m1}v_{id}/2$, so both effects lower the node. The net current drawn from the node is

$$
i_1=\frac{g_{m1}v_{id}}2+\frac{g_{m1}v_{id}}2=g_{m1}v_{id}.
$$

The mirror converts the differential output to single-ended without losing half the signal current.

### Step 2 — Resistance and voltage at the first-stage node

Looking into this node, M2's drain ($r_{ds2}$) and M4's drain ($r_{ds4}$) are in parallel; the gate of M6 draws no current. Hence

$$
v_1=-\frac{i_1}{g_{ds2}+g_{ds4}}=-\frac{g_{m1}}{g_{ds2}+g_{ds4}}\,v_{id}.
$$

### Step 3 — Second stage

M6 is a common-source stage: its drain current changes by $g_{m6}$ times its gate–source signal. Its source is at $V_{DD}$, so a fall in $v_1$ increases the current pushed into the output, $i_{out}=-g_{m6}v_1$. The output node sees $r_{ds6}\parallel r_{ds7}$ (M7 is a dc current sink):

$$
v_{out}=\frac{i_{out}}{g_{ds6}+g_{ds7}}=-\frac{g_{m6}}{g_{ds6}+g_{ds7}}\,v_1 .
$$

### Step 4 — Overall differential gain

The two inversions cancel, so the gain from the + input is positive:

$$
A_v=\frac{v_{out}}{v_{id}}=\frac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})}.
$$

With $I_{D2}=I_{D4}=I_5/2$ and $I_{D6}=I_{D7}=I_6$, $g_{ds}=\lambda I_D$ gives the equivalent form

$$
A_v=\frac{2g_{m1}}{I_5(\lambda_2+\lambda_4)}\cdot\frac{g_{m6}}{I_6(\lambda_6+\lambda_7)} .
$$
