# Detailed solution - A232

Write the gain, output resistance and output pole in terms of $g_m$ and $g_{ds}$, then insert how each of these scales with the drain current at fixed geometry: $g_m\propto\sqrt{I_D}$ from the square law and $g_{ds}\propto I_D$ from channel-length modulation.

### Step 1 — Gain, output resistance and pole of the stage

With the current-mirror load, a differential input $v_{id}$ produces drain currents $\pm g_{m1}v_{id}/2$ in M1 and M2; the mirror M3–M4 copies M1's current to the output, so the output receives $g_{m1}v_{id}$ in total. The output node sees $r_{ds2}\parallel r_{ds4}$ (M2 looking down and M4 looking up). Hence

$$
A_v=\frac{v_{out}}{v_{id}}=\frac{g_{m1}}{g_{ds2}+g_{ds4}},\qquad
R_{out}=\frac{1}{g_{ds2}+g_{ds4}} .
$$

With only a fixed capacitance $C_{out}$ at the output, which carries the largest resistance in the circuit, the dominant pole is

$$
|p_1|=\frac{g_{ds2}+g_{ds4}}{C_{out}} .
$$

### Step 2 — Current dependence of $g_m$ and $g_{ds}$

In strong-inversion saturation, with $I_D=I_{SS}/2$ in each input and load device,

$$
g_{m1}=\sqrt{2K'_N\frac{W_1}{L_1}I_D}\propto I_D^{1/2},\qquad
g_{ds2}=\lambda_NI_D,\quad g_{ds4}=\lambda_PI_D\ \propto I_D .
$$

### Step 3 — Resulting scaling laws

Substituting,

$$
A_v=\frac{\sqrt{2K'_N(W_1/L_1)I_D}}{(\lambda_N+\lambda_P)I_D}
=\frac{2}{\lambda_N+\lambda_P}\sqrt{\frac{K'_NW_1}{2I_DL_1}}\ \propto\ I_D^{-1/2},
$$

$$
R_{out}=\frac{1}{(\lambda_N+\lambda_P)I_D}\ \propto\ I_D^{-1},\qquad
|p_1|=\frac{(\lambda_N+\lambda_P)I_D}{C_{out}}\ \propto\ I_D .
$$

Raising the current therefore lowers the gain as $1/\sqrt{I_D}$ (the output resistance falls faster than $g_m$ rises), lowers the output resistance as $1/I_D$, and moves the dominant pole up in proportion to $I_D$. The gain–bandwidth product $A_v|p_1|=g_{m1}/C_{out}$ grows as $\sqrt{I_D}$.
