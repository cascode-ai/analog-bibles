# Detailed solution - A094

The mirror needs every gate on IN (so that M1 is diode-connected), M1's channel between IN and GRD, and the M2 devices between OUT and GRD. For each layout, assign the two diffusion regions on either side of each gate accordingly; where regions are shared between gates, check whether the assignments are compatible.

### Step 1 — Connection rules

From the schematic:

- every polysilicon gate connects to IN, which is also M1's drain, making M1 diode-connected;
- M1 has one diffusion region at IN and the other at GRD;
- M2 (or each of M2A and M2B) has one diffusion region at OUT and the other at GRD.

An NMOS device is symmetric, so which region of a device is called drain or source does not matter; only the node assignment does.

### Step 2 — Layouts 1, 2 and 4 (separate diffusions)

Each device has its own diffusion, so the assignments are independent:

| Layout | M1 (5/1) | M2 or M2A, M2B | Gates |
|---|---|---|---|
| 1 | top region → IN, bottom region → GRD | M2 (10/1): top → OUT, bottom → GRD | both polys → IN |
| 2 | rotated device, vertical gate: left region → IN, right region → GRD | M2A, M2B (5/1 each): tops → OUT, bottoms → GRD | all three polys → IN |
| 4 | top region → IN, bottom region → GRD | M2A, M2B (5/1 each): tops → OUT, bottoms → GRD | all three polys → IN |

In layouts 2 and 4, M2A and M2B are connected in parallel (OUT to OUT, GRD to GRD), forming the 10/1 output device.

### Step 3 — Layout 3 (one shared diffusion)

The three gates cross one continuous diffusion, which is therefore divided into four regions:

$$
R_1\ |\ \text{M2A}\ |\ R_2\ |\ \text{M1}\ |\ R_3\ |\ \text{M2B}\ |\ R_4 .
$$

With the center finger as M1, as labeled, M1 needs one of $R_2$, $R_3$ at IN and the other at GRD. But $R_2$ is also a terminal of M2A and $R_3$ a terminal of M2B, whose terminals may only be OUT and GRD. Since neither region can be OUT (that would short M1's terminal to OUT) and neither may be IN, both $R_2$ and $R_3$ would have to be GRD, leaving M1 with no drain. Any attempt to put IN on $R_2$ or $R_3$ makes one M2 half a terminal of IN; for example, $R_3=\text{IN}$ turns M2B into a second diode-connected device in parallel with M1, which gives a 2:1 mirror instead of 1:2. Hence layout 3 cannot be wired as a 1:2 mirror with the center finger as M1.

The same geometry does give an electrically correct 1:2 mirror if an end finger is used as the input:

$$
R_1=\text{IN},\quad R_2=\text{GRD},\quad R_3=\text{OUT},\quad R_4=\text{GRD},\quad\text{all gates}\to\text{IN},
$$

so the left 5/1 finger is the diode-connected input and the center and right fingers, both between OUT and GRD, form the 10/1 output. This swaps the labeled roles of M1 and M2A and gives up the symmetric placement of M1 between the M2 halves. Keeping M1 in the center requires splitting the diffusion or rearranging the fingers (for example OUT | GRD | IN | GRD | OUT with M1 split into two halves).

### Step 4 — Summary

Layouts 1, 2 and 4 are wired with all gates to IN, M1 between IN and GRD and M2 (A, B) between OUT and GRD, as tabulated. Layout 3, as labeled, cannot form the 1:2 mirror because its shared diffusion regions force both terminals of the center M1 to GRD; only an end-finger-input wiring of the same geometry works.
