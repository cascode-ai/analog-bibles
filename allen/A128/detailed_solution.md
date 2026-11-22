# Detailed solution - A128

The small-signal gain of every inverter is the input transconductance divided by the total conductance at the output: $|A_v|=g_{m,in}/G_{out}$. Two facts rank the circuits without detailed calculation. A load whose gate is driven by its own source or drain node adds a transconductance-sized conductance ($g_m$ or $g_m+g_{mbs}$) to $G_{out}$, while a load with a fixed gate adds only $g_{ds}$. And with equal $W/L$ and current, the n-channel device has the larger transconductance.

### Step 1 — Common device parameters

With $g_m=\sqrt{2K'(W/L)I}$, equal $W/L$ and current, and $K'_N=2K'_P$:

$$
g_{mN}=\sqrt2\,g_{mP},\qquad g_{dsN}=g_{dsP}=\lambda I\ll g_m .
$$

### Step 2 — Output conductance of each load

Reading [Fig. 1]:

- Circuit 1: n-channel input M1; n-channel load M2 with gate and drain at $V_{DD}$ and source at the output. Its source moves with the output while its gate and bulk do not, so it loads the output with $g_{mN}+g_{mbsN}$.
- Circuit 2: p-channel input M2; p-channel load M1 with gate and drain at ground and source at the output, again $g_{mP}+g_{mbsP}$.
- Circuit 3: n-channel input; diode-connected p-channel load (source and bulk at $V_{DD}$), $g_{mP}$.
- Circuit 4: p-channel input; diode-connected n-channel load (source and bulk at ground), $g_{mN}$.
- Circuits 5 and 6: the load's gate is held at the dc bias $V_{BP}$ or $V_{BN}$, so the load contributes only its $g_{ds}$. Circuit 5 has the n-channel input, circuit 6 the p-channel input.

### Step 3 — Gain of each circuit

Adding the input device's own $g_{ds}$ and writing $\eta=g_{mbs}/g_m$:

| Circuit | Input | Load | $\lvert A_v\rvert$ | Approximate value |
|---|---|---|---|---|
| 1 | n | n, source follower | $g_{mN}/(g_{mN}+g_{mbsN}+2\lambda I)$ | $1/(1+\eta_N)<1$ |
| 2 | p | p, source follower | $g_{mP}/(g_{mP}+g_{mbsP}+2\lambda I)$ | $1/(1+\eta_P)<1$ |
| 3 | n | p diode | $g_{mN}/(g_{mP}+2\lambda I)$ | $\approx\sqrt2=1.41$ |
| 4 | p | n diode | $g_{mP}/(g_{mN}+2\lambda I)$ | $\approx1/\sqrt2=0.71$ |
| 5 | n | p current source | $g_{mN}/(2\lambda I)$ | $\gg1$ |
| 6 | p | n current source | $g_{mP}/(2\lambda I)$ | $\gg1$ |

### Step 4 — Largest gain

Only circuits 5 and 6 have current-source loads, so their output conductance is $2\lambda I$, about two orders of magnitude below the $g_m$-sized conductance of circuits 1–4. Their gains are far larger than those of the others, which are all of order 1.

Between them, both see the same $G_{out}=2\lambda I$, and the difference is the input transconductance:

$$
\frac{|A_{v5}|}{|A_{v6}|}=\frac{g_{mN}}{g_{mP}}=\sqrt{\frac{K'_N}{K'_P}}=\sqrt2 .
$$

Circuit 5, with the n-channel input transistor and the p-channel current-source load, has the largest small-signal gain.
