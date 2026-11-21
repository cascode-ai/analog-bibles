# Detailed solution - G116

Write the instantaneous dissipation of $Q_1$ as $I_{c1}V_{ce1}$ with a sinusoidal output, average it over one period, and use the clipping limits to fix the amplitude for each load.

### Step 1 — Bias current and maximum amplitude

With $R_1=R_2=0$, $I_Q=(V_{CC}-V_{BE(\text{on})})/R_3=14.3\ \mathrm V/5\ \mathrm{k\Omega}=2.86$ mA is mirrored into $Q_2$. The output can swing up to $V_{CC}-V_{CE(\text{sat})}=14.8$ V ($Q_1$ saturates) and down to the higher of $-14.8$ V ($Q_2$ saturates) and $-I_QR_L$ ($Q_1$ cuts off when the load takes all of $I_Q$). A symmetric sinusoid therefore has

$$
\hat V_o=\min\left(V_{CC}-V_{CE(\text{sat})},\ I_QR_L\right).
$$

| $R_L$ | $I_QR_L$ | $\hat V_o$ |
|---|---|---|
| 2 kΩ | 5.72 V | 5.72 V (set by $Q_1$ cutoff) |
| 10 kΩ | 28.6 V | 14.8 V (set by saturation) |

### Step 2 — Average dissipation of $Q_1$

With $v_o=\hat V_o\sin\omega t$, KCL at the output gives $i_{c1}=I_Q+v_o/R_L$, and $v_{ce1}=V_{CC}-v_o$. Hence

$$
p_{c1}=\left(I_Q+\frac{v_o}{R_L}\right)\left(V_{CC}-v_o\right)=V_{CC}I_Q+\left(\frac{V_{CC}}{R_L}-I_Q\right)v_o-\frac{v_o^2}{R_L}.
$$

Over a period $\overline{v_o}=0$ and $\overline{v_o^2}=\hat V_o^2/2$, so

$$
\bar P_{c1}=V_{CC}I_Q-\frac{\hat V_o^2}{2R_L}=V_{CC}I_Q-P_L .
$$

The quiescent dissipation is $V_{CC}I_Q=(15\ \mathrm V)(2.86\ \mathrm{mA})=42.9$ mW; the signal power delivered to the load is taken from it, because the average supply current of $Q_1$ stays $I_Q$.

### Step 3 — Numerical values

For $R_L=2\ \mathrm{k\Omega}$:

$$
P_L=\frac{(5.72\ \mathrm V)^2}{2(2\ \mathrm{k\Omega})}=8.18\ \mathrm{mW},\qquad \bar P_{c1}=42.9\ \mathrm{mW}-8.18\ \mathrm{mW}=34.7\ \mathrm{mW}.
$$

For $R_L=10\ \mathrm{k\Omega}$:

$$
P_L=\frac{(14.8\ \mathrm V)^2}{2(10\ \mathrm{k\Omega})}=10.95\ \mathrm{mW},\qquad \bar P_{c1}=42.9\ \mathrm{mW}-10.95\ \mathrm{mW}=31.9\ \mathrm{mW}.
$$

The average dissipation in $Q_1$ is **34.7 mW for $R_L=2\ \mathrm{k\Omega}$** and **31.9 mW for $R_L=10\ \mathrm{k\Omega}$**, both below the quiescent value: in a class A stage the transistor runs coolest at full signal.
