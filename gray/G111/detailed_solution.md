# Detailed solution - G111

The largest unclipped sine wave is set by whichever limit of the output swing is reached first: $Q_1$ saturation on the positive side, and either $Q_1$ cutoff at $V_o=-I_QR_L$ or $Q_2$ saturation on the negative side. A sine wave clips as soon as either peak reaches its limit, so the usable amplitude is the smaller of the positive and negative limits. With the amplitude known, $I_{c1}$, $V_{ce1}$ and their product follow directly from the load-line relations $I_{c1}=I_Q+V_o/R_L$ and $V_{ce1}=V_{CC}-V_o$.

### Step 1 — Bias current and swing limits

The equal-area mirror $Q_3$–$Q_2$ (with $R_1=R_2=0$) sets

$$
I_Q=\frac{V_{CC}-V_{BE(\text{on})}}{R_3}=\frac{15\ \mathrm V-0.7\ \mathrm V}{5\ \mathrm{k\Omega}}=2.86\ \mathrm{mA}.
$$

| Limit | Output voltage |
|---|---|
| $Q_1$ saturates | $V_o=V_{CC}-V_{CE(\text{sat})}=+14.8$ V |
| $Q_1$ cuts off | $V_o=-I_QR_L$ |
| $Q_2$ saturates | $V_o=-V_{CC}+V_{CE(\text{sat})}=-14.8$ V |

### Step 2 — Maximum output power

The average power of a sine wave of peak $\hat V_{om}$ in $R_L$ is $P_L=\hat V_{om}^2/(2R_L)$.

**$R_L=2\ \mathrm{k\Omega}$:** $I_QR_L=5.72$ V is smaller than 14.8 V, so the negative peak clips first, when $Q_1$ cuts off. Hence $\hat V_{om}=5.72$ V and

$$
P_L=\frac{(5.72\ \mathrm V)^2}{2(2\ \mathrm{k\Omega})}=8.18\ \mathrm{mW}.
$$

**$R_L=10\ \mathrm{k\Omega}$:** $I_QR_L=28.6$ V exceeds 14.8 V, so the swing is limited symmetrically by $Q_1$ and $Q_2$ saturation. Hence $\hat V_{om}=14.8$ V and

$$
P_L=\frac{(14.8\ \mathrm V)^2}{2(10\ \mathrm{k\Omega})}=10.95\ \mathrm{mW}.
$$

### Step 3 — Waveforms of $I_{c1}$ and $V_{ce1}$

With $V_o=\hat V_{om}\sin\omega t$ and $s=\sin\omega t$:

| $R_L$ | $I_{c1}=I_Q+\hat V_{om}s/R_L$ | $V_{ce1}=V_{CC}-\hat V_{om}s$ |
|---|---|---|
| 2 kΩ | $2.86(1+s)$ mA, from 0 to 5.72 mA | $15-5.72s$ V, from 9.28 to 20.72 V |
| 10 kΩ | $2.86+1.48s$ mA, from 1.38 to 4.34 mA | $15-14.8s$ V, from 0.2 to 29.8 V |

$I_{c1}$ is in phase with the output and $V_{ce1}$ is in antiphase. For 2 kΩ, $I_{c1}$ just touches zero at the negative peak (the onset of cutoff). For 10 kΩ, $V_{ce1}$ just reaches $V_{CE(\text{sat})}$ at the positive peak.

![Collector current of Q1 versus ωt for RL = 2 kΩ and 10 kΩ at the clipping limit](/q/G111/solution-ic.svg)

![Collector–emitter voltage of Q1 versus ωt for RL = 2 kΩ and 10 kΩ, in antiphase with the current](/q/G111/solution-vce.svg)

### Step 4 — Instantaneous dissipation $P_{c1}=I_{c1}V_{ce1}$

**2 kΩ:**

$$
P_{c1}=2.86(1+s)(15-5.72s)\ \mathrm{mW}=42.9+26.5s-16.4s^2\ \mathrm{mW}.
$$

It is 42.9 mW at the zero crossings and 0 at the negative peak ($Q_1$ off). Setting $dP_{c1}/ds=0$ gives $s=0.81$, where the maximum is 53.7 mW. At the positive peak it dips slightly to 53.1 mW. The average, using $\overline{s}=0$ and $\overline{s^2}=1/2$, is $42.9-16.4/2=34.7$ mW.

**10 kΩ:**

$$
P_{c1}=(2.86+1.48s)(15-14.8s)\ \mathrm{mW}=42.9-20.1s-21.9s^2\ \mathrm{mW}.
$$

It is only 0.87 mW at the positive peak ($Q_1$ near saturation, large current but tiny $V_{ce1}$) and 41.1 mW at the negative peak. The maximum, 47.5 mW, occurs at $s=-0.46$, twice per cycle on either side of the negative peak. The average is $42.9-21.9/2=31.9$ mW.

![Instantaneous power dissipation of Q1 versus ωt for RL = 2 kΩ and 10 kΩ, with peaks of 53.7 mW and 47.5 mW and averages of 34.7 mW and 31.9 mW](/q/G111/solution-pc.svg)

In both cases $Q_1$ dissipates far more than the load receives, because the class-A bias current $I_Q$ flows continuously across a $V_{ce1}$ of about 15 V.
