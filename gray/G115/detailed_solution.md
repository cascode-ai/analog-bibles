# Detailed solution - G115

The operating point of $Q_1$ moves along a straight load line in the $I_c$–$V_{ce}$ plane. By the tangency result for load lines, the largest instantaneous dissipation on such a line occurs at its midpoint, provided the midpoint lies within the reachable swing. Find the line for each $R_L$, take its midpoint, and check reachability.

### Step 1 — Bias current and load line of $Q_1$

With $R_1=R_2=0$, the mirror reference current is $I_R=(V_{CC}-V_{BE(\text{on})})/R_3=14.3\ \mathrm V/5\ \mathrm{k\Omega}=2.86$ mA, and equal areas give $I_Q=I_R=2.86$ mA through $Q_2$.

The collector of $Q_1$ is at $V_{CC}$ and its emitter at $V_o$; KCL at the output node, with base currents neglected, gives $I_{c1}=I_Q+V_o/R_L$. Eliminating $V_o$:

$$
V_{ce1}=V_{CC}-V_o=V_{CC}-(I_{c1}-I_Q)R_L .
$$

This line has intercepts

$$
V_0=V_{CC}+I_QR_L\quad(I_{c1}=0),\qquad I_0=I_Q+\frac{V_{CC}}{R_L}\quad(V_{ce1}=0).
$$

### Step 2 — Maximum of $I_{c1}V_{ce1}$ on the line

Along the line, $P_{c1}=I_{c1}V_{ce1}$ is a downward parabola in $V_{ce1}$ whose maximum is at the midpoint $(V_0/2,\ I_0/2)$:

$$
P_{\max}=\frac{V_0}{2}\cdot\frac{I_0}{2}=\frac{V_0I_0}{4}.
$$

The midpoint corresponds to $V_o=V_{CC}-V_0/2$, which must lie within the swing range: above both $-I_QR_L$ ($Q_1$ cutoff) and $-V_{CC}+V_{CE(\text{sat})}=-14.8$ V ($Q_2$ saturation), and below $V_{CC}-V_{CE(\text{sat})}=14.8$ V ($Q_1$ saturation).

### Step 3 — Numerical results

For $R_L=2\ \mathrm{k\Omega}$:

$$
V_0=15\ \mathrm V+(2.86\ \mathrm{mA})(2\ \mathrm{k\Omega})=20.72\ \mathrm V,\qquad
I_0=2.86\ \mathrm{mA}+\frac{15\ \mathrm V}{2\ \mathrm{k\Omega}}=10.36\ \mathrm{mA},
$$
$$
P_{\max}=\frac{(20.72\ \mathrm V)(10.36\ \mathrm{mA})}{4}=53.7\ \mathrm{mW}.
$$

The $R_L=10\ \mathrm{k\Omega}$ case follows in the same way:

| $R_L$ | $V_0$ (V) | $I_0$ (mA) | Midpoint $V_{ce1}$, $I_{c1}$ | $V_o$ at midpoint | Allowed $V_o$ range | $P_{\max}$ |
|---|---|---|---|---|---|---|
| 2 kΩ | 20.72 | 10.36 | 10.36 V, 5.18 mA | +4.64 V | −5.72 V to +14.8 V | 53.7 mW |
| 10 kΩ | 43.6 | 4.36 | 21.8 V, 2.18 mA | −6.8 V | −14.8 V to +14.8 V | 47.5 mW |

Both midpoints are reachable, so the maximum instantaneous dissipation in $Q_1$ is **53.7 mW for $R_L=2\ \mathrm{k\Omega}$** and **47.5 mW for $R_L=10\ \mathrm{k\Omega}$**. Both exceed the quiescent value $V_{CC}I_Q=42.9$ mW, and neither is reached at a swing extreme: at the extremes one of $I_{c1}$ or $V_{ce1}$ becomes small.
