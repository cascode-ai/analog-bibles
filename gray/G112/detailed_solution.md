# Detailed solution - G112

The stage is class A: $Q_2$ draws a constant $I_Q$ from the negative supply, and $Q_1$ draws $I_Q$ plus a signal current whose average is zero. The supply power is therefore independent of the signal. The efficiency is the maximum unclipped load power divided by that fixed supply power. The load powers come from the clipping limits for each load.

### Step 1 — Supply power

The equal-area mirror sets $I_Q=(V_{CC}-V_{BE(\text{on})})/R_3=(15\ \mathrm V-0.7\ \mathrm V)/5\ \mathrm{k\Omega}=2.86$ mA. $Q_1$'s collector current $I_Q+V_o/R_L$ averages to $I_Q$ for a sinusoidal $V_o$, and $Q_2$ carries $I_Q$ continuously. The two supplies deliver

$$
P_{supply}=V_{CC}I_Q+V_{CC}I_Q=2V_{CC}I_Q=(30\ \mathrm V)(2.86\ \mathrm{mA})=85.8\ \mathrm{mW},
$$

with the reference branch ($Q_3$, $R_3$) excluded as instructed.

### Step 2 — Maximum load power

The largest unclipped sine has the smaller of the positive limit ($Q_1$ saturation, 14.8 V) and the negative limit ($Q_1$ cutoff at $I_QR_L$, or $Q_2$ saturation at 14.8 V):

| $R_L$ | Limiting mechanism | $\hat V_{om}$ | $P_L=\hat V_{om}^2/(2R_L)$ |
|---|---|---|---|
| 2 kΩ | $Q_1$ cuts off ($I_QR_L=5.72$ V) | 5.72 V | 8.18 mW |
| 10 kΩ | $Q_1$/$Q_2$ saturate | 14.8 V | 10.95 mW |

For example, for 2 kΩ, $P_L=(5.72\ \mathrm V)^2/(4\ \mathrm{k\Omega})=8.18$ mW.

### Step 3 — Efficiency

$$
\eta=\frac{P_L}{P_{supply}}:\qquad
\eta_{2\,\mathrm{k\Omega}}=\frac{8.18\ \mathrm{mW}}{85.8\ \mathrm{mW}}=9.5\ \%,\qquad
\eta_{10\,\mathrm{k\Omega}}=\frac{10.95\ \mathrm{mW}}{85.8\ \mathrm{mW}}=12.8\ \% .
$$

Both are far below the 25 % ideal of a class-A follower. The 2-kΩ load is limited by the bias current, and the 10-kΩ load is badly matched to $I_Q$ (its full swing needs only 1.48 mA of the 2.86 mA bias). As a check, the average dissipations are 34.7 mW in $Q_1$ and $V_{CC}I_Q=42.9$ mW in $Q_2$ for 2 kΩ. Together with the 8.18 mW in the load, they add to 85.8 mW. For 10 kΩ the figures are $31.9+42.9+10.95=85.8$ mW.
