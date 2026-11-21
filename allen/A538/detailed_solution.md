# Detailed solution - A538

The first-stage DAC error leaves the stage-1 decisions unchanged but subtracts the wrong amount from the input, so the residue in subrange $m$ is off by an amount proportional to $m$, and every stage-2 transition of that subrange moves by the same amount. Limit the largest shift, in the top subrange, to one LSB.

### Step 1 — Shift of the stage-2 transitions

Stage 1 is ideal, so subrange $m=0,\dots,3$ covers $mV_{REF}/4$ to $(m+1)V_{REF}/4$. The DAC outputs

$$
v_{out}(1)=\frac m4\left(V_{REF}\pm\Delta V_{REF}\right),
$$

which differs from the ideal $mV_{REF}/4$ by $\pm m\Delta V_{REF}/4$. The residue $v_{in}(2)=v_{in}(1)-v_{out}(1)$ is off by the opposite amount, so the input at which stage 2 reaches each of its thresholds $V_{REF}/16$, $V_{REF}/8$, $3V_{REF}/16$ moves by

$$
\Delta v_{in}(1)=\pm\frac{m\,\Delta V_{REF}}4 .
$$

The stage-1 transitions do not move.

### Step 2 — Worst case

The shift is largest in the top subrange, $m=3$:

$$
\Delta v_{in,max}=\frac{3\,\Delta V_{REF}}4=\frac{3\,\Delta V_{REF}/4}{V_{REF}/16}\ \text{LSB}=12\,\frac{\Delta V_{REF}}{V_{REF}}\ \text{LSB}.
$$

### Step 3 — INL within ±1 LSB

$$
12\,\frac{|\Delta V_{REF}|}{V_{REF}}\le1
\;\Longrightarrow\;
|\Delta V_{REF}|\le\frac{V_{REF}}{12}\approx0.083\,V_{REF}.
$$

At this limit the three stage-2 transitions of the top subrange have moved by a full LSB, so that subrange starts to lose a code: code 1111 for $+\Delta V_{REF}$ (the last transition moves to full scale) and code 1100 for $-\Delta V_{REF}$ (the first transition moves onto the stage-1 transition). Relaxing the INL limit from $\pm0.5$ to $\pm1$ LSB doubles the allowed error, from $V_{REF}/24$ to $V_{REF}/12$.
