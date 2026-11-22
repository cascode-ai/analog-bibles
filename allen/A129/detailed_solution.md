# Detailed solution - A129

Every inverter's gain magnitude is the input transconductance over the total output conductance, $|A_v|=g_{m,in}/G_{out}$. Current-source loads give large gains, and loads driven from the output node give gains of order 1. The lowest gain is the circuit whose load conductance is largest relative to its input transconductance: a weak (p-channel) input against a strong (n-channel) diode load. Comparing it with the two source-follower loads requires the body-effect factor, which the problem does not give, so that comparison rests on typical values.

### Step 1 — Common device parameters

With $g_m=\sqrt{2K'(W/L)I}$, equal $W/L$ and current, and $K'_N=2K'_P$:

$$
g_{mN}=\sqrt2\,g_{mP},\qquad g_{dsN}=g_{dsP}=\lambda I\ll g_m,\qquad \eta=\frac{g_{mbs}}{g_m}.
$$

### Step 2 — Gains of the six inverters

Reading [Fig. 1]:

| Circuit | Input | Load (as seen from the output) | $\lvert A_v\rvert$ | Approximate value |
|---|---|---|---|---|
| 1 | n (M1) | n M2, gate and drain at $V_{DD}$, source at output, bulk at ground: $g_{mN}+g_{mbsN}$ | $\dfrac{g_{mN}}{g_{mN}+g_{mbsN}+2\lambda I}$ | $\dfrac1{1+\eta_N}$ |
| 2 | p (M2) | p M1, gate and drain at ground, source at output, bulk at $V_{DD}$: $g_{mP}+g_{mbsP}$ | $\dfrac{g_{mP}}{g_{mP}+g_{mbsP}+2\lambda I}$ | $\dfrac1{1+\eta_P}$ |
| 3 | n | p diode, source at its bulk: $g_{mP}$ | $\dfrac{g_{mN}}{g_{mP}+2\lambda I}$ | $\sqrt2=1.41$ |
| 4 | p | n diode, source at its bulk: $g_{mN}$ | $\dfrac{g_{mP}}{g_{mN}+2\lambda I}$ | $1/\sqrt2=0.71$ |
| 5 | n | p current source: $g_{dsP}$ | $g_{mN}/(2\lambda I)$ | $\gg1$ |
| 6 | p | n current source: $g_{dsN}$ | $g_{mP}/(2\lambda I)$ | $\gg1$ |

In circuits 3 and 4 the diode-connected load has its source tied to its bulk, so it has no body effect. In circuits 1 and 2 the load's source is at the output while its bulk is at a rail, so $g_{mbs}$ adds to its conductance.

### Step 3 — Candidates for the lowest gain

Circuits 5 and 6 have large gains and circuit 3 has a gain above 1, so they are out. The candidates are circuit 4 ($\approx0.71$) and circuits 1 and 2 ($\approx1/(1+\eta)$). Circuit 1 or 2 would fall below circuit 4 only if

$$
\frac1{1+\eta}<\frac1{\sqrt2}\quad\Leftrightarrow\quad\eta>\sqrt2-1\approx0.41 .
$$

With $\eta=\gamma/\big(2\sqrt{2|\phi_F|+V_{SB}}\big)$ and $2|\phi_F|\approx0.6$–0.8 V, this needs $\gamma\gtrsim0.64$–$0.74\ \mathrm{V^{1/2}}$ even at $V_{SB}=0$, and more at the nonzero $V_{SB}$ these follower loads actually have. Typical values of $\eta$ are 0.1–0.3, which give $1/(1+\eta)\approx0.77$–0.91.

### Step 4 — Conclusion

For normal body-effect factors, circuit 4, with the p-channel input M2 and the diode-connected n-channel load M1, has the lowest gain:

$$
|A_{v4}|\approx\frac{g_{mP}}{g_{mN}}=\frac1{\sqrt2}\approx0.71 .
$$

The weaker p-channel input transconductance works against the larger n-channel diode conductance. This ranking assumes a normal $\gamma$; the problem gives no $\gamma$, and only an unusually large body effect ($\eta>0.41$) would push circuit 1 or 2 below it. The order between circuits 1 and 2 depends on $\eta_N$ versus $\eta_P$ and is not fixed by the given data.
