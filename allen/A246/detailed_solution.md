# Detailed solution - A246

Turn M4 and M5 into diode-connected loads for the input pair and use them as the input sides of two NMOS mirrors: one mirror delivers its current directly to the output, the other feeds the PMOS cascode mirror M8–M11, which reverses its direction at the output. Then find which device sets the output resistance, and hence the gain, and how to raise it to the two-stage level.

### Step 1 — The mirrored circuit

- M4 and M5 become diode-connected NMOS loads carrying $i_{D1}$ and $i_{D2}$ (their gates no longer go to $V_{BIAS}$).
- M7 mirrors M4 with ratio $B=(W/L)_7/(W/L)_4$; its drain is the output, so it sinks $Bi_{D1}$.
- M6 mirrors M5 with the same ratio $B=(W/L)_6/(W/L)_5$ and drives the diode side M8/M10 of the PMOS cascode mirror, which copies it to the output through M9/M11 as a sourced current $Bi_{D2}$.

<!-- diagram: diagram-01.cir -->

The other pairing (M4 to M6 and M5 to M7) works equally well, with the output polarity reversed.

### Step 2 — Output current

With $v_+$ at M1, $v_-$ at M2 and $v_{id}=v_+-v_-$, the p-channel pair splits the tail current $I_3$ as $i_{D1}=I_3/2-g_{m1}v_{id}/2$ and $i_{D2}=I_3/2+g_{m1}v_{id}/2$. KCL at the output:

$$
i_{out}=Bi_{D2}-Bi_{D1}=Bg_{m1}v_{id}.
$$

### Step 3 — Output resistance and gain

Looking into the output, the PMOS side is a cascode, $R_P\approx g_{m9}r_{ds9}r_{ds11}$, but the NMOS side is the single device M7, $R_N=r_{ds7}$. They are in parallel, so the smaller one dominates:

$$
R_{out}=r_{ds7}\parallel g_{m9}r_{ds9}r_{ds11}\approx r_{ds7}=\frac{1}{\lambda_NI_7},\qquad I_7=\frac{BI_3}{2}.
$$

$$
A_v=Bg_{m1}R_{out}\approx\frac{Bg_{m1}}{\lambda_NBI_3/2}=\frac{2g_{m1}}{\lambda_NI_3}.
$$

This is a single-stage, $g_mr_{ds}$-level gain. The cascoded PMOS side cannot raise it, and the mirror ratio $B$ cancels: $B>1$ raises GB $=Bg_{m1}/C_L$ and the slew rate, but $I_7$, and with it $g_{ds7}$, grows by the same factor.

### Step 4 — Raising the gain to the two-stage level

- Cascode the NMOS output mirror as well (a cascode device on top of M7, or a cascode or Wilson mirror for M4–M7). Both sides of the output are then cascoded:
$$
R_{out}\approx(g_mr_{ds}^2)_N\parallel(g_mr_{ds}^2)_P,\qquad A_v\approx Bg_{m1}R_{out}\sim(g_mr_{ds})^2 .
$$
- Alternatively, add a common-source gain stage after the output node, giving a true two-stage amplifier, which then needs Miller compensation.
