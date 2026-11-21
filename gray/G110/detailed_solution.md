# Detailed solution - G110

$Q_1$ is an emitter follower whose emitter current is the bias current $I_Q$ (drawn by $Q_2$) plus the load current. Express $I_{c1}$ and $V_{ce1}$ in terms of the output voltage, then eliminate $V_o$ to get a straight load line through the quiescent point with slope $-1/R_L$. The ends of each line are set by whichever limit the output reaches first. On the positive side the limit is $Q_1$ saturating. On the negative side it is either $Q_1$ cutting off (when the load cannot draw more than $I_Q$) or $Q_2$ saturating.

### Step 1 — Quiescent current

With $R_1=R_2=0$, $Q_3$ (diode-connected) and $Q_2$ form an equal-area mirror. $R_3$ runs from ground to the base node, which sits one $V_{BE}$ above $-V_{CC}$:

$$
I_Q=I_R=\frac{0-(-V_{CC}+V_{BE(\text{on})})}{R_3}=\frac{15\ \mathrm V-0.7\ \mathrm V}{5\ \mathrm{k\Omega}}=2.86\ \mathrm{mA}.
$$

### Step 2 — Equation of the load line

With base currents neglected, $I_{c1}=I_Q+I_o=I_Q+V_o/R_L$ and $V_{ce1}=V_{CC}-V_o$. Eliminating $V_o$,

$$
V_{ce1}=V_{CC}-(I_{c1}-I_Q)R_L .
$$

Every line passes through the quiescent point $Q$: $V_o=0$, so $V_{ce1}=15$ V and $I_{c1}=2.86$ mA. Its slope is $dI_{c1}/dV_{ce1}=-1/R_L$.

### Step 3 — End points

- **Positive end ($Q_1$ saturates):** $V_{ce1}=V_{CE(\text{sat})}=0.2$ V, so $V_o=14.8$ V and $I_{c1}=I_Q+14.8\ \mathrm V/R_L$.
- **Negative end:** either $Q_1$ cuts off when the load draws all of $I_Q$, at $V_o=-I_QR_L$ and $I_{c1}=0$, or $Q_2$ saturates at $V_o=-V_{CC}+V_{CE(\text{sat})}=-14.8$ V ($R_2=0$). The limit with the smaller $|V_o|$ applies.

| $R_L$ | Slope | Positive end ($V_{ce1}$, $I_{c1}$) | $I_QR_L$ | Negative limit | Negative end ($V_{ce1}$, $I_{c1}$) |
|---|---|---|---|---|---|
| 2 kΩ | −0.5 mA/V | (0.2 V, 10.26 mA) | 5.72 V | $Q_1$ cutoff | (20.72 V, 0) |
| 10 kΩ | −0.1 mA/V | (0.2 V, 4.34 mA) | 28.6 V | $Q_2$ saturation | (29.8 V, 1.38 mA) |

For $R_L=2\ \mathrm{k\Omega}$, the positive end is $2.86\ \mathrm{mA}+14.8\ \mathrm V/2\ \mathrm{k\Omega}=10.26$ mA. On the negative side the load can pull the output down only to $-I_QR_L=-5.72$ V before $Q_1$ turns off, so the line ends on the $V_{ce}$ axis at $V_{ce1}=15\ \mathrm V+5.72\ \mathrm V=20.72$ V.

For $R_L=10\ \mathrm{k\Omega}$, $I_QR_L=28.6\ \mathrm V>14.8$ V, so $Q_2$ saturates first, at $V_o=-14.8$ V. There, $V_{ce1}=29.8$ V and $I_{c1}=2.86\ \mathrm{mA}-1.48\ \mathrm{mA}=1.38$ mA. The line stops above the axis; its extension would reach $I_{c1}=0$ only at 43.6 V, which cannot be reached.

### Step 4 — Sketch

![Load lines of Q1 in the Ic–Vce plane for RL = 2 kΩ and 10 kΩ, both through the quiescent point at 15 V and 2.86 mA, with their saturation, cutoff and Q2-saturation end points](/q/G110/solution-curves.svg)

Both lines pivot about $Q$. The steeper 2-kΩ line runs from $Q_1$ saturation down to $Q_1$ cutoff, so the negative swing is limited to $-5.72$ V by the bias current. The flatter 10-kΩ line is cut short by $Q_2$ saturation, and $Q_1$ never turns off.
