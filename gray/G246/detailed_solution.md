# Detailed solution - G246

Apply incremental feedback analysis to each linear segment of the basic amplifier: the closed-loop slope is $a_k/(1+a_kf)$, and each open-loop break point maps to $S_i=S_\epsilon+fS_o$. With $f=0.1$ the loop gains are in the thousands, so the result is close to the ideal $S_o=S_i/f$ until the amplifier clips.

### Step 1 — Open-loop break points

From the given characteristic, $S_o=7$ V is reached at $S_{\epsilon1}=S_{o1}/a_1=7\ \mathrm V/50{,}000=0.14$ mV, and $S_o=15$ V at

$$
S_{\epsilon2}=0.14\ \mathrm{mV}+\frac{8\ \mathrm V}{20{,}000}=0.54\ \mathrm{mV}.
$$

### Step 2 — Closed-loop slopes

For small changes within segment $k$, $\Delta S_o=a_k\Delta S_\epsilon$ and $\Delta S_\epsilon=\Delta S_i-f\Delta S_o$, hence $A_k=a_k/(1+a_kf)$:

$$
A_1=\frac{50{,}000}{1+5000}=9.998,\qquad A_2=\frac{20{,}000}{1+2000}=9.995,\qquad A_3=0 .
$$

The loop gains $T_1=5000$ and $T_2=2000$ pull both slopes to within 0.05% of $1/f=10$; the ratio $A_1/A_2=1.0003$ compared with $a_1/a_2=2.5$ open loop. In hard saturation $a_3=0$ and there is no loop gain to act.

### Step 3 — Closed-loop break points

$$
S_{i1}=S_{\epsilon1}+fS_{o1}=0.14\ \mathrm{mV}+(0.1)(7\ \mathrm V)=0.70014\ \mathrm V,
$$

$$
S_{i2}=S_{\epsilon2}+fS_{o2}=0.54\ \mathrm{mV}+(0.1)(15\ \mathrm V)=1.50054\ \mathrm V.
$$

The amplifier's own input is now negligible next to the fed-back signal, so the breakpoints sit almost exactly at $S_o/10$.

### Step 4 — Overall characteristic

By odd symmetry, with the sign of $S_i$,

$$
S_o=\begin{cases}
9.998\,S_i, & |S_i|\le0.70014\ \mathrm V,\\
\pm\left[7\ \mathrm V+9.995\,(|S_i|-0.70014\ \mathrm V)\right], & 0.70014\le|S_i|\le1.50054\ \mathrm V,\\
\pm15\ \mathrm V, & |S_i|\ge1.50054\ \mathrm V.
\end{cases}
$$

![Closed-loop output versus input: a straight line of slope about 10 clipping at ±15 V near ±1.5 V](/q/G246/solution-curves.svg)

The sketch is a straight line of slope 10 through the origin with hard clipping at ±15 V for $|S_i|\ge1.5$ V; the slope change at ±7 V (0.03%) is invisible. Compared with $f=10^{-4}$, the strong feedback linearizes the characteristic almost completely but cannot remove the saturation, and the gain drops to 10.
