# Detailed solution - A155

Write KCL at the three internal nodes of the small-signal model: the drain of M1 (the diode node of M3), the output (drain of M2 and M4), and the common source node. With the capacitors ignored this is a linear system in $v_{d1}$, $v_{out}$ and $v_s$. Solve it for $v_s$, then read off its leading-order form to see why the source node, often assumed to be an ac ground for a differential input, actually moves.

### Step 1 — Device currents

With $v_{g1}=+v_{id}/2$ and $v_{g2}=-v_{id}/2$, the drain currents of M1 and M2 (flowing from drain to source) are

$$
i_{d1}=g_{m1}\left(\frac{v_{id}}{2}-v_s\right)+g_{ds1}(v_{d1}-v_s),\qquad
i_{d2}=g_{m2}\left(-\frac{v_{id}}{2}-v_s\right)+g_{ds2}(v_{out}-v_s).
$$

### Step 2 — Node equations

M3 is a diode of conductance $g_{m3}+g_{ds3}$ from $V_{DD}$ (ac ground); M4 delivers the mirrored current $i_3=-g_{m4}v_{d1}$ into the output and loads it with $g_{ds4}$; the tail is $r_{ds5}$:

$$
\begin{aligned}
\text{D1:}\quad & -(g_{m3}+g_{ds3})\,v_{d1}=i_{d1},\\
\text{D2 = D4:}\quad & -g_{m4}v_{d1}-g_{ds4}v_{out}=i_{d2},\\
\text{S1 = S2:}\quad & i_{d1}+i_{d2}=g_{ds5}v_s .
\end{aligned}
$$

### Step 3 — Exact solution

Eliminating $v_{d1}$ and $v_{out}$ with $g_{m1}=g_{m2}$, $g_{ds1}=g_{ds2}$, $g_{m3}=g_{m4}$, $g_{ds3}=g_{ds4}$:

$$
v_s=\frac{g_{ds1}g_{m1}g_{m3}\;v_{id}}{(g_{ds1}+g_{ds3})\left[2g_{m1}g_{m3}+2g_{m1}g_{ds3}+2g_{m3}g_{ds1}+g_{m3}g_{ds5}+2g_{ds1}g_{ds3}+g_{ds1}g_{ds5}+g_{ds3}g_{ds5}\right]} .
$$

### Step 4 — Leading-order form

Keep only the largest terms. The diode node barely moves, $v_{d1}\approx-g_{m1}v_{id}/(2g_{m3})$, while the output swings by the full gain, $v_{out}\approx g_{m1}v_{id}/(g_{ds2}+g_{ds4})$. Adding $i_{d1}+i_{d2}$, the $\pm g_mv_{id}/2$ terms cancel and, to leading order, $-2g_{m1}v_s+g_{ds2}v_{out}\approx0$ (the $g_{ds1}v_{d1}$ and $g_{ds5}v_s$ terms are much smaller). Hence

$$
v_s\approx\frac{g_{ds2}}{2g_{m1}}v_{out}=\frac{g_{ds2}}{2(g_{ds2}+g_{ds4})}\,v_{id},
$$

which is also the limit of the exact expression when the $g_{m1}g_{m3}$ term dominates the bracket. It is in phase with $v_{id}$. With $g_{ds}=\lambda I_D$ and equal currents, $g_{ds2}/(g_{ds2}+g_{ds4})=\lambda_N/(\lambda_N+\lambda_P)$, so for $\lambda_N=0.04$ and $\lambda_P=0.05\ \mathrm{V^{-1}}$, $v_s\approx0.22\,v_{id}$: not small at all. (With $g_{m1}=104.9$ µS, $g_{m3}=50$ µS at 25 µA per device, the exact expression gives $0.21\,v_{id}$.)

### Step 5 — Why the source voltage is not zero

The two halves have very different drain loads. M1's drain sits on the low-impedance diode M3 and hardly moves, while M2's drain is the high-impedance output and swings by the full output voltage. Through $r_{ds2}$, that swing injects a current $g_{ds2}v_{out}$ into the common source node that has no counterpart on the M1 side. The circuit is therefore not symmetric for a differential signal, and the source node must move until the transconductances of M1 and M2 absorb this current. If both drains had equal loads, or if $r_{ds2}\to\infty$, the imbalance would vanish and $v_s\to0$.
