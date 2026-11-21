# Detailed solution - G113

Find the bias current set by the mirror, write the two clipping limits of the output swing as functions of $R_L$, and choose $R_L$ to maximize the sinusoidal output power. Because a class A stage draws a fixed supply current, maximum output power also means maximum efficiency.

### Step 1 — Quiescent current from the mirror

With $R_1=R_2=0$, the diode-connected $Q_3$ holds the base of $Q_2$ at $-V_{CC}+V_{BE(\text{on})}$. The current through $R_3$, whose other end is grounded, is

$$
I_R=\frac{0-(-V_{CC}+V_{BE(\text{on})})}{R_3}=\frac{15\ \mathrm V-0.7\ \mathrm V}{5\ \mathrm{k\Omega}}=2.86\ \mathrm{mA}.
$$

$Q_2$ and $Q_3$ have equal areas and equal $V_{BE}$, and base currents are neglected, so $Q_2$ sinks $I_Q=I_R=2.86$ mA from the output node.

### Step 2 — Swing limits as functions of $R_L$

With $V_o=0$ at rest, $I_{c1}=I_Q+V_o/R_L$ and $I_{c2}=I_Q$ (as long as $Q_2$ is not saturated).

- **Positive peak:** $Q_1$ saturates when $V_o=V_{CC}-V_{CE(\text{sat})}=14.8$ V; $Q_2$ stays active.
- **Negative peak:** two limits apply. $Q_2$ saturates at $V_o=-V_{CC}+V_{CE(\text{sat})}=-14.8$ V. Also, $Q_1$ cuts off when $I_{c1}=0$, i.e. when the load current $-V_o/R_L$ equals the whole sink current $I_Q$: $V_o=-I_QR_L$.

A symmetric sine of amplitude $\hat V$ must satisfy both, so

$$
\hat V_{\max}=\min\left(V_{CC}-V_{CE(\text{sat})},\ I_QR_L\right),\qquad P_L=\frac{\hat V_{\max}^2}{2R_L}.
$$

### Step 3 — Optimum load

- For $I_QR_L\ge V_{CC}-V_{CE(\text{sat})}$, $\hat V_{\max}=14.8$ V is fixed and $P_L=(14.8\ \mathrm V)^2/(2R_L)$ rises as $R_L$ falls.
- For $I_QR_L<V_{CC}-V_{CE(\text{sat})}$, $\hat V_{\max}=I_QR_L$ and $P_L=\tfrac12I_Q^2R_L$ falls as $R_L$ falls.

The maximum is at the boundary, where both clipping limits are reached together:

$$
R_L=\frac{V_{CC}-V_{CE(\text{sat})}}{I_Q}=\frac{14.8\ \mathrm V}{2.86\ \mathrm{mA}}=5.17\ \mathrm{k\Omega}\approx5.2\ \mathrm{k\Omega}.
$$

### Step 4 — Output power and efficiency

At this load,

$$
P_L=\frac{\hat V^2}{2R_L}=\tfrac12\left(V_{CC}-V_{CE(\text{sat})}\right)I_Q=\tfrac12(14.8\ \mathrm V)(2.86\ \mathrm{mA})=21.2\ \mathrm{mW}.
$$

For a sinusoid the average of $I_{c1}$ is $I_Q$, and $Q_2$ draws a constant $I_Q$, so the output stage takes $P_{\text{supply}}=V_{CC}I_Q+V_{CC}I_Q=2V_{CC}I_Q=85.8$ mW regardless of the signal. Since this is fixed, maximizing $P_L$ maximizes the efficiency:

$$
\eta=\frac{P_L}{2V_{CC}I_Q}=\frac{21.2\ \mathrm{mW}}{85.8\ \mathrm{mW}}=24.7\%.
$$

This counts the output stage only; the bias branch $R_3$–$Q_3$ draws a further $V_{CC}I_R=42.9$ mW. The result is below the ideal class A limit of 25% only by the $V_{CE(\text{sat})}$ loss.
