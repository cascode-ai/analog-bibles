# Detailed solution - G245

Within each linear segment of the basic amplifier, $S_o=S_{o,k}+a_k(S_\epsilon-S_{\epsilon,k})$, so incremental feedback analysis applies segment by segment: the closed-loop slope is $a_k/(1+a_kf)$. The breakpoints follow from $S_i=S_\epsilon+fS_o$ evaluated at the open-loop break points.

### Step 1 — Open-loop break points

In segment 1 the amplifier is linear through the origin, so $S_o=7$ V is reached at

$$
S_{\epsilon1}=\frac{S_{o1}}{a_1}=\frac{7\ \mathrm V}{50{,}000}=0.14\ \mathrm{mV}.
$$

In segment 2 the output rises another 8 V with slope $a_2$, reaching 15 V at

$$
S_{\epsilon2}=0.14\ \mathrm{mV}+\frac{8\ \mathrm V}{20{,}000}=0.54\ \mathrm{mV}.
$$

### Step 2 — Closed-loop slopes

For a small change $\Delta S_i$ in segment $k$, $\Delta S_o=a_k\Delta S_\epsilon$ and $\Delta S_\epsilon=\Delta S_i-f\Delta S_o$, so

$$
A_k=\frac{\Delta S_o}{\Delta S_i}=\frac{a_k}{1+a_kf}.
$$

| Segment | $a_k$ | $T_k=a_kf$ | $A_k$ |
|---|---|---|---|
| 1, $\lvert S_o\rvert<7$ V | 50,000 | 5 | 8333 |
| 2, $7<\lvert S_o\rvert<15$ V | 20,000 | 2 | 6667 |
| 3, $\lvert S_o\rvert=15$ V | 0 | 0 | 0 |

In saturation $a_3=0$, the loop gain vanishes and feedback cannot restore any slope.

### Step 3 — Closed-loop break points

The loop equation $S_i=S_\epsilon+fS_o$ maps each open-loop break point to the input of the feedback amplifier:

$$
S_{i1}=0.14\ \mathrm{mV}+(10^{-4})(7\ \mathrm V)=0.14+0.70=0.84\ \mathrm{mV},
$$

$$
S_{i2}=0.54\ \mathrm{mV}+(10^{-4})(15\ \mathrm V)=0.54+1.50=2.04\ \mathrm{mV}.
$$

As a check, segment 2 spans $8\ \mathrm V/6667=1.20$ mV, and $0.84+1.20=2.04$ mV.

### Step 4 — Overall characteristic

By odd symmetry,

$$
S_o=\begin{cases}
8333\,S_i, & |S_i|\le0.84\ \mathrm{mV},\\
\pm\left[7\ \mathrm V+6667\,(|S_i|-0.84\ \mathrm{mV})\right], & 0.84\le|S_i|\le2.04\ \mathrm{mV},\\
\pm15\ \mathrm V, & |S_i|\ge2.04\ \mathrm{mV},
\end{cases}
$$

with the sign of $S_i$.

![Closed-loop output versus input with breakpoints at 0.84 mV and 2.04 mV, and the open-loop characteristic for comparison](/q/G245/solution-curves.svg)

The characteristic keeps the three-segment shape and the same ±15 V limit. Feedback reduces the slope ratio from $a_1/a_2=2.5$ to $A_1/A_2=1.25$, but with loop gains of only 5 and 2 the closed-loop slopes remain well short of $1/f=10{,}000$ and the change of slope stays clearly visible.
