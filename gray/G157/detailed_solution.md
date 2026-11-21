# Detailed solution - G157

The op amp is a cascade of two gain stages with no loading between them (the second stage is driven at a MOS gate), so at low frequency, where $C_C$ is an open circuit, the gain is the product of the two stage gains. Find each as an effective transconductance times the output resistance at its node, fix the sign by tracing a positive input, and then substitute the square-law $g_m$ and the Early-voltage $r_o$.

### Step 1 — First stage: n-channel pair with p-channel mirror load

For a differential input $v_i$ (+ at $M_1$), the pair currents change by $\pm g_{m1}v_i/2$. The p-channel mirror $M_3$–$M_4$ copies the change of $M_1$ to the output side, where it adds to the opposite change of $M_2$; the short-circuit output current is therefore $g_{m1}v_i$, i.e. $G_{m1}=g_{m1}$. The output node (drains of $M_2$ and $M_4$) sees $r_{o2}\parallel r_{o4}$, since the gate of $M_6$ draws no current:

$$
A_{v1}=\frac{v_{o1}}{v_i}=+g_{m1}\left(r_{o2}\parallel r_{o4}\right).
$$

Sign: raising the gate of $M_1$ raises $I_{D1}$ and the mirrored $|I_{D4}|$ while lowering $I_{D2}$, so the first-stage output rises.

### Step 2 — Second stage: p-channel common source

$M_6$ (source at $V_{DD}$) drives the output with the n-channel current source $M_7$ as load; the output resistance is $r_{o6}\parallel r_{o7}$. A rise of the gate of $M_6$ reduces $|V_{GS6}|$ and its current, so the output falls:

$$
A_{v2}=\frac{v_o}{v_{o1}}=-g_{m6}\left(r_{o6}\parallel r_{o7}\right).
$$

### Step 3 — Overall gain

$$
A_v=\frac{v_o}{v_i}=A_{v1}A_{v2}=-g_{m1}\left(r_{o2}\parallel r_{o4}\right)g_{m6}\left(r_{o6}\parallel r_{o7}\right).
$$

The gate of $M_1$ is the inverting input, as in the original circuit.

### Step 4 — In terms of overdrive and Early voltages

In saturation $g_m=2|I_D|/|V_{ov}|$ and $r_o=|V_A|/|I_D|$. In the first stage $|I_{D2}|=|I_{D4}|=I_{D1}$, so

$$
g_{m1}\left(r_{o2}\parallel r_{o4}\right)=\frac{2I_{D1}}{V_{ov1}}\cdot\frac{1}{I_{D1}}\cdot\frac{V_{A2}|V_{A4}|}{V_{A2}+|V_{A4}|}=\frac{2}{V_{ov1}}\cdot\frac{V_{A2}|V_{A4}|}{V_{A2}+|V_{A4}|},
$$

and in the second stage $|I_{D6}|=I_{D7}$, giving the same form. Hence

$$
A_v=-\frac{2}{V_{ov1}}\,\frac{2}{|V_{ov6}|}\left(\frac{V_{A2}|V_{A4}|}{V_{A2}+|V_{A4}|}\right)\left(\frac{|V_{A6}|V_{A7}}{|V_{A6}|+V_{A7}}\right).
$$

The bias currents cancel: each stage gain is of order $g_mr_o/2$, so $|A_v|\sim(g_mr_o)^2/4$, set by overdrives and Early voltages alone. Absolute values are used for the p-channel quantities, which are negative in the stated convention.
