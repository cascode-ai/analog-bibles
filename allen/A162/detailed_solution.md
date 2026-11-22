# Detailed solution - A162

The circuit is symmetric, so a purely differential input can be analyzed with one half circuit: the common source node of M1–M2 is an ac ground and each output sees its input transistor loaded by a fixed-gate current source. The differential gain and output resistance then follow from the half circuit.

### Step 1 — Half circuit and small-signal parameters

M5 (X2) mirrors $2I_{BIAS}$ into the tail and M3, M4 (X1) mirror $I_{BIAS}$ each, so M1–M4 all carry $I_{BIAS}$. In saturation, from $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2(1+\lambda v_{DS})$:

$$
g_{m1}=g_{m2}=\sqrt{2K'_N(W/L)_1I_{BIAS}},\qquad g_{ds1}=g_{ds2}=\lambda_1I_{BIAS},\qquad g_{ds3}=g_{ds4}=\lambda_3I_{BIAS}.
$$

With $v_1=v_{in}/2$ and $v_2=-v_{in}/2$, the tail current does not change and the source node is an ac ground. M3 and M4 have their gates on the fixed bias line from M7, so each acts only as its output resistance $r_{ds3}$. The half circuit for $v_3$ is therefore a common-source stage: M1 with gate signal $v_{in}/2$, its source grounded, its drain loaded by $r_{ds1}\parallel r_{ds3}$.

### Step 2 — Differential voltage gain

KCL at node 3 (M1's signal current $g_{m1}v_{in}/2$ drawn out of the node, returned through $g_{ds1}+g_{ds3}$):

$$
v_3=-\frac{g_{m1}(v_{in}/2)}{g_{ds1}+g_{ds3}},\qquad
v_4=+\frac{g_{m2}(v_{in}/2)}{g_{ds2}+g_{ds4}} .
$$

Subtracting, with matched halves,

$$
\frac{v_{out}}{v_{in}}=\frac{v_3-v_4}{v_{in}}=-\frac{g_{m1}}{g_{ds1}+g_{ds3}}
=-\frac{\sqrt{2K'_N(W/L)_1I_{BIAS}}}{(\lambda_1+\lambda_3)I_{BIAS}}
=-\sqrt{\frac{2K'_N(W/L)_1}{I_{BIAS}(\lambda_1+\lambda_3)^2}} .
$$

The gain falls as $1/\sqrt{I_{BIAS}}$. Each single-ended output carries half of this; the differential output gives the full $g_{m1}/(g_{ds1}+g_{ds3})$, the same as a current-mirror-load stage's single-ended output.

### Step 3 — Differential output resistance

Looking into either output with the inputs at ac ground, one sees $r_{ds1}\parallel r_{ds3}=1/(g_{ds1}+g_{ds3})$ to ac ground; the M1–M2 source node is a virtual ground for a differential test current, which leaves through one output and returns through the other. Between the two terminals the two half-circuit resistances are in series:

$$
R_{out}=\frac2{g_{ds1}+g_{ds3}}=\frac2{I_{BIAS}(\lambda_1+\lambda_3)} .
$$
