# Detailed solution - G141

The output devices $Q_2$ and $Q_4$ operate in class B, so the 100 mW dissipation limit sets a minimum $R_L$. The positive swing, however, is also limited by the base drive of $Q_2$, which cannot exceed the 0.15 mA of $Q_7$. Write the amplitude as a function of $R_L$, maximize $P_L$ within the dissipation constraint, and then find the composite-device currents at the negative peak.

### Step 1 — Swing limits

- **Negative:** $Q_1$ saturates (base of $Q_3$ at $-14.8$ V), and the composite pnp adds $|V_{BE3}|$: $V_o^-=-14.1$ V; the composite's own saturation limit, $-V_{CC}+V_{BE4}+|V_{CE3(\text{sat})}|$, gives the same value.
- **Positive, headroom:** $Q_7$ saturates, $V_o^+=15-0.2-0.7=14.1$ V.
- **Positive, drive:** the base current of $Q_2$ cannot exceed the 0.15 mA of $Q_7$, so

$$
I_{o,\max}=(\beta_F+1)(0.15\ \mathrm{mA})=151(0.15\ \mathrm{mA})=22.65\ \mathrm{mA},\qquad V_o^+\le(22.65\ \mathrm{mA})R_L .
$$

A symmetric sine has $\hat V_o=\min\left(14.1\ \mathrm V,\ (22.65\ \mathrm{mA})R_L\right)$.

### Step 2 — Dissipation constraint

With negligible quiescent current, a conducting output device dissipates $|V_o|(V_{CC}-|V_o|)/R_L$, whose peak $V_{CC}^2/(4R_L)$ is reached at $|V_o|=7.5$ V by any swing larger than half the supply. Therefore

$$
\frac{V_{CC}^2}{4R_L}\le100\ \mathrm{mW}\ \Rightarrow\ R_L\ge\frac{(15\ \mathrm V)^2}{0.4\ \mathrm W}=562.5\ \Omega .
$$

The driver devices $Q_1$, $Q_3$ and $Q_7$ carry at most a few tenths of a milliampere and dissipate far less.

### Step 3 — Optimum load

At $R_L=562.5\ \Omega$ the drive limit allows only $(22.65\ \mathrm{mA})(562.5\ \Omega)=12.7$ V, so $P_L=(12.7\ \mathrm V)^2/(2\cdot562.5\ \Omega)=144$ mW. For larger $R_L$, while the drive limit binds, $P_L=\tfrac12(22.65\ \mathrm{mA})^2R_L$ rises; once $\hat V_o$ reaches 14.1 V, $P_L$ falls as $1/R_L$. The optimum is where the limits meet:

$$
R_L=\frac{14.1\ \mathrm V}{22.65\ \mathrm{mA}}=623\ \Omega,\qquad P_L=\frac{(14.1\ \mathrm V)^2}{2(623\ \Omega)}=160\ \mathrm{mW}.
$$

The peak device dissipation there is $V_{CC}^2/(4R_L)=225\ \mathrm{V^2}/(4\cdot623\ \Omega)=90$ mW, within the limit.

### Step 4 — Peak currents in $Q_3$ and $Q_4$

At the negative peak the composite device sinks the load current $14.1\ \mathrm V/623\ \Omega=22.65$ mA. This current enters as the emitter current of $Q_3$ plus the collector current of $Q_4$, with $I_{C4}=150|I_{C3}|$ because the collector of $Q_3$ drives the base of $Q_4$:

$$
22.65\ \mathrm{mA}=|I_{C3}|\left(\frac{31}{30}+150\right)\ \Rightarrow\ |I_{C3}|=0.150\ \mathrm{mA},\qquad I_{C4}=150(0.150\ \mathrm{mA})=22.5\ \mathrm{mA}.
$$

The answer is **$R_L\approx623\ \Omega$** and **$P_L\approx160$ mW**, with peak currents of about **0.15 mA in $Q_3$** and **22.5 mA in $Q_4$**. As in the complementary stage, the base drive of the npn follower, not the dissipation limit, decides the optimum.
