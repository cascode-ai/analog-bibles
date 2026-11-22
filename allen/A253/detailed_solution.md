# Detailed solution - A253

Trace the two paths by which the signal at the gate of M6 reaches the output, write the output current they produce together, and find where they cancel. Then compare the location of that zero with GB for MOS and bipolar output devices.

### Step 1 — Two paths from the gate of M6 to the output

Let $v_1$ be the first-stage output, at the gate of M6. Shorting the output to ac ground, two currents flow into the output node:

- through the transistor, an inverting path: $-g_{m6}v_1$ (a rise of $v_1$ makes M6 pull the output down);
- through $C_c$, a noninverting feedforward path: $+sC_cv_1$.

The short-circuit output current is

$$
i_{out}=(sC_c-g_{m6})\,v_1,
$$

so the output voltage is proportional to $g_{m6}-sC_c$. The two paths are equal and opposite at

$$
s=z_1=\frac{g_{m6}}{C_c}
$$

This is a zero on the positive real axis: a right-half-plane zero.

### Step 2 — Effect on magnitude and phase

Below $g_{m6}/C_c$ the transistor path dominates and the stage inverts normally. Above it, the capacitor path dominates and feeds the signal around M6 without inversion. The factor $1-s/z_1$ raises the magnitude like a left-half-plane zero (the gain stops falling at $-40$ dB/decade beyond $p_2$), but it adds phase lag of up to $90°$ like a left-half-plane pole. Both effects reduce the phase margin.

### Step 3 — Why it matters more in CMOS

For the Miller-compensated two-stage amplifier, $GB=g_{m1}/C_c$, so

$$
\frac{z_1}{GB}=\frac{g_{m6}}{g_{m1}} .
$$

A MOSFET in strong inversion has $g_m=2I_D/V_{ov}$ with $V_{ov}$ of a few hundred millivolts, whereas a BJT has $g_m=I_C/V_T$ with $V_T\approx26$ mV. At the same current, the BJT's transconductance is therefore several to ten times larger. In a BJT op amp the large $g_m$ of the second-stage transistor puts the zero far above GB, where it is harmless. In a CMOS op amp $g_{m6}$ is only moderately larger than $g_{m1}$, so the zero lands within a few GB, comparable to the output pole, and its lag must be included in the phase margin (or removed with a nulling resistor or a buffer in the compensation path).
