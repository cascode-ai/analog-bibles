# Detailed solution - R279

**Approach.** For small $\Delta V$ the circuit is linear, and the only capacitance is $C_L$ at the output. The output therefore responds to the step as a single-pole system: it starts at the balanced dc value (a capacitor voltage cannot jump), ends at the old value plus (gain × input step), and moves between the two exponentially with $\tau = R_{out}C_L$, where $R_{out}$ is the resistance the amplifier presents to $C_L$. We find the initial value from the bias point, then derive the gain and $R_{out}$ of the five-transistor amplifier exactly, and simplify for $g_mr_O \gg 1$.

### Step 1 — The circuit

From the figure: $M_1$ (gate $V_{in}$) and $M_2$ (gate $V_1$) form an NMOS pair with sources at P and an ideal tail $I_{SS}$. $M_3$ is a PMOS diode at X (drain of $M_1$), mirrored by $M_4$ into the output (drain of $M_2$), which is loaded by $C_L$. Notation: $g_N = g_{m1} = g_{m2}$, $g_P = g_{m3} = g_{m4}$, $g_{oN} = 1/r_{O1,2}$, $g_{oP} = 1/r_{O3,4}$.

### Step 2 — Initial value

Before the step, $V_{in} = V_1$: the circuit is perfectly balanced. Each side carries $I_{SS}/2$, and by symmetry $M_4$ has the same $V_{SD}$ as the diode $M_3$, so $V_{out} = V_X$:

$$V_{out}(0^-) = V_{DD} - |V_{GS3}| = V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\mu_pC_{ox}(W/L)_3}},$$

where $|V_{GS3}|$ is found from $\tfrac12\mu_pC_{ox}(W/L)_3(|V_{GS3}| - |V_{THP}|)^2 = I_{SS}/2$, with $|V_{THP}| = 0.8$ V. The voltage across $C_L$ cannot change instantly, so

$$V_{out}(0^+) = V_{out}(0^-) .$$

There is no jump at $t = 0$. The internal nodes (X, P) have no capacitance and adjust instantly; only the output is slow.

### Step 3 — Single-pole response

Seen from $C_L$, the rest of the (linearized) circuit is a Norton source: a short-circuit current $G_mv_{in}$ in parallel with $R_{out}$. KCL at the output:

$$C_L\frac{dv_{out}}{dt} + \frac{v_{out}}{R_{out}} = G_mv_{in} .$$

For a step $v_{in} = -\Delta V$ the solution is

$$v_{out}(t) = -G_mR_{out}\,\Delta V\left(1 - e^{-t/\tau}\right), \qquad \tau = R_{out}C_L,$$

with $G_mR_{out} = A_v$, the dc small-signal gain from $V_{in}$ to $V_{out}$.

<!-- diagram: diagram-01.cir -->

### Step 4 — Output resistance $R_{out}$

Ground both gates (small-signal) and apply a test voltage $v_t$ at the output; $i_t$ is the current it supplies. Branch currents:

$$
\begin{aligned}
i_1 &= -g_Nv_P + g_{oN}(v_X - v_P) && (M_1:\ \text{X} \to \text{P}),\\
i_2 &= -g_Nv_P + g_{oN}(v_t - v_P) && (M_2:\ \text{out} \to \text{P}),\\
i_3 &= (g_P + g_{oP})\,v_X && (M_3 \text{ diode}:\ \text{X} \to \text{ac ground}),\\
i_4 &= g_Pv_X + g_{oP}v_t && (M_4:\ \text{out} \to \text{ac ground}).
\end{aligned}
$$

KCL: at X, $i_1 + i_3 = 0$; at P (ideal tail), $i_1 + i_2 = 0$; at the output, $i_t = i_2 + i_4$. The first two give $i_2 = i_3$.

From $i_1 = -i_3$:

$$(g_N + g_{oN})v_P = (g_{oN} + g_P + g_{oP})v_X .$$

From $i_2 = i_3$, then substituting the previous line:

$$g_{oN}v_t = (g_P + g_{oP})v_X + (g_N + g_{oN})v_P = (2g_P + 2g_{oP} + g_{oN})v_X \quad\Longrightarrow\quad v_X = \frac{g_{oN}\,v_t}{2g_P + 2g_{oP} + g_{oN}} .$$

Then $i_t = i_3 + i_4 = (2g_P + g_{oP})v_X + g_{oP}v_t$, so

$$\frac{i_t}{v_t} = \frac{g_{oN}(2g_P + g_{oP}) + g_{oP}(2g_P + 2g_{oP} + g_{oN})}{2g_P + 2g_{oP} + g_{oN}} = \frac{2(g_{oN} + g_{oP})(g_P + g_{oP})}{2g_P + 2g_{oP} + g_{oN}} .$$

$$R_{out} = \frac{g_{oN} + 2g_P + 2g_{oP}}{2(g_{oN} + g_{oP})(g_P + g_{oP})} \approx \frac{1}{g_{oN} + g_{oP}} = r_{O2}\,\|\,r_{O4} \quad (g_P \gg g_o).$$

### Step 5 — Gain

Now drive $M_1$'s gate with $v_{in}$ ($M_2$'s gate stays at ac ground) and leave the output open (dc gain). The branch currents are as in Step 4, except that $i_1 = g_N(v_{in} - v_P) + g_{oN}(v_X - v_P)$ and the output voltage is $v_{out}$. KCL at X, P and the output gives $i_1 = -i_3$, $i_2 = i_3$ and $i_4 = -i_2 = -i_3$.

From $i_4 = -i_3$: $g_Pv_X + g_{oP}v_{out} = -(g_P + g_{oP})v_X$, so

$$v_X = -\frac{g_{oP}}{2g_P + g_{oP}}\,v_{out}.$$

From $i_2 = i_3$ and $i_1 = -i_3$, each solved for $(g_N + g_{oN})v_P$:

$$g_{oN}v_{out} - (g_P + g_{oP})v_X = g_Nv_{in} + (g_{oN} + g_P + g_{oP})v_X \quad\Longrightarrow\quad g_{oN}v_{out} = g_Nv_{in} + (g_{oN} + 2g_P + 2g_{oP})v_X .$$

Substitute $v_X$ and collect $v_{out}$ (the numerator is the same combination as in Step 4):

$$v_{out}\,\frac{g_{oN}(2g_P + g_{oP}) + g_{oP}(g_{oN} + 2g_P + 2g_{oP})}{2g_P + g_{oP}} = g_Nv_{in} \quad\Longrightarrow\quad v_{out}\,\frac{2(g_{oN} + g_{oP})(g_P + g_{oP})}{2g_P + g_{oP}} = g_Nv_{in},$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_N(2g_P + g_{oP})}{2(g_{oN} + g_{oP})(g_P + g_{oP})} = g_{m1}(r_{O2}\|r_{O4})\,\frac{2g_{m4}r_{O4} + 1}{2(g_{m4}r_{O4} + 1)} \approx g_{m1}(r_{O2}\|r_{O4}).$$

(With the ideal tail the common-mode gain of this circuit is zero, so driving one input gives the same result as a differential input $v_d = v_{in}$.)

It is positive from $V_{in}$ to $V_{out}$: $M_1$'s current is mirrored to the output, so the output follows the input's direction. (Dividing, $G_m = A_v/R_{out} = g_N(2g_P + g_{oP})/(g_{oN} + 2g_P + 2g_{oP}) \approx g_{m1}$.)

In terms of bias, $g_{m1} = \sqrt{\mu_nC_{ox}(W/L)_1I_{SS}}$ and $r_O = 1/(\lambda I_{SS}/2)$, so

$$r_{O2}\|r_{O4} = \frac{2}{(\lambda_n + \lambda_p)I_{SS}} .$$

### Step 6 — Final value and the complete waveform

$V_{in}$ goes **down** by $\Delta V$, so the output goes down by $A_v\Delta V$:

$$V_{out}(\infty) = V_{out}(0) - g_{m1}(r_{O2}\|r_{O4})\,\Delta V,$$

$$V_{out}(t) = V_{DD} - |V_{GS3}| - g_{m1}(r_{O2}\|r_{O4})\,\Delta V\left(1 - e^{-t/\tau}\right), \qquad \tau = (r_{O2}\|r_{O4})\,C_L .$$

### Step 7 — Numerical example

$I_{SS} = 200\ \mu\mathrm{A}$, NMOS $W/L = 10/0.5$ ($\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$), PMOS $W/L = 20/0.5$ ($\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$), $\lambda_n = 0.1$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$, $V_{DD} = 3$ V, $C_L = 1$ pF, $\Delta V = 10$ mV:

$$
\begin{aligned}
g_{m1} &= \sqrt{(134\ \mu\mathrm{A/V^2})(20)(200\ \mu\mathrm{A})} = 0.732\ \mathrm{mS}, \qquad g_{m4} = \sqrt{(38.4\ \mu\mathrm{A/V^2})(40)(200\ \mu\mathrm{A})} = 0.554\ \mathrm{mS},\\
r_{O2} &= \frac{1}{(0.1)(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega, \qquad r_{O4} = \frac{1}{(0.2)(100\ \mu\mathrm{A})} = 50\ \mathrm{k}\Omega, \qquad r_{O2}\|r_{O4} = 33.3\ \mathrm{k}\Omega,\\
V_{out}(0) &= 3 - 0.8 - \sqrt{200\ \mu\mathrm{A}/1.536\ \mathrm{mA/V^2}} = 2.2 - 0.361 = 1.839\ \mathrm{V},\\
A_v &= (0.732\ \mathrm{mS})(33.3\ \mathrm{k}\Omega)\frac{2(27.7) + 1}{2(28.7)} = 24.4\times0.983 = 24.0,\\
V_{out}(\infty) &= 1.839 - 24.0\times0.010 = 1.599\ \mathrm{V},\\
\tau &= (33.3\ \mathrm{k}\Omega)(1\ \mathrm{pF}) = 33\ \mathrm{ns}\ \ (\text{exact formula: } 33.6\ \mathrm{ns}).
\end{aligned}
$$

### Result

- **Initial value:** $V_{out}(0) = V_{DD} - |V_{GS3}| = V_{DD} - |V_{THP}| - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$. With equal inputs the circuit is balanced and $V_{out} = V_X$, and $C_L$ keeps $V_{out}$ continuous at $t = 0^+$.
- **Final value:** $V_{out}(\infty) = V_{out}(0) - g_{m1}(r_{O2}\|r_{O4})\Delta V$ (more precisely times $\frac{2g_{m4}r_{O4} + 1}{2(g_{m4}r_{O4} + 1)}$). The output moves down because the gate of $M_1$ went down.
- **Time constant:** $\tau = (r_{O2}\|r_{O4})C_L$, the output resistance of the five-transistor amplifier times $C_L$ (exactly $\tau = C_L(g_{o2} + 2g_{m4} + 2g_{o4})/[2(g_{o2} + g_{o4})(g_{m4} + g_{o4})]$), so
$$V_{out}(t) = V_{out}(0) - g_{m1}(r_{O2}\|r_{O4})\,\Delta V\left(1 - e^{-t/\tau}\right),$$
with $g_{m1} = \sqrt{\mu_nC_{ox}(W/L)_1I_{SS}}$ and $r_{O2}\|r_{O4} = 2/[(\lambda_n + \lambda_p)I_{SS}]$.

**Common mistake.** Using $\tau = C_L/g_m$. The output node is a high-impedance node: no transistor is diode-connected there. The resistance seen by $C_L$ is $r_{O2}\|r_{O4}$, so $\tau$ is set by the output resistances, not by $1/g_m$.

**Common mistake.** Taking only $r_{O4}$ (claiming $M_2$ contributes nothing) or using half the gain, $(g_{m1}/2)(r_{O2}\|r_{O4})$. With the active mirror, the single-ended output receives the full differential current $g_{m1}v_{in}$ (half directly through $M_2$, half through the mirror), and both $r_{O2}$ and $r_{O4}$ load the output.

**Common mistake.** Letting $V_{out}$ jump at $t = 0$. The only capacitance is $C_L$, right at the output, so the output voltage is continuous and responds with the exponential above.
