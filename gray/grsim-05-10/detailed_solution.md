# Detailed solution - grsim-05-10

With an abrupt turn-on at $|V_{be}|=0.6$ V, the class B stage is a dead zone plus two unity-gain followers that end in saturation. These pieces give the transfer curve and, for each input amplitude, the output and collector-current waveforms. ngspice with exponential devices then checks the curves and gives the harmonic distortion.

### Step 1 — Transfer characteristic with abrupt turn-on

The bases are tied, so $Q_1$ (npn) conducts only when $V_i-V_o\ge0.6$ V and $Q_2$ (pnp) only when $V_o-V_i\ge0.6$ V.

- **Dead band, $|V_i|<0.6$ V.** Neither device conducts, no current flows in $R_L$, and $V_o=0$.
- **$Q_1$ follower, $0.6<V_i<15.4$ V.** $V_o=V_i-0.6$ V, slope 1, and $I_{C1}=V_o/R_L$.
- **$Q_1$ saturated.** $V_o$ is limited to $V_{CC}-V_{CE(\text{sat})}=14.8$ V, reached at $V_i=15.4$ V.
- The negative side mirrors this: $V_o=V_i+0.6$ V for $-15.4<V_i<-0.6$ V, and $V_o=-14.8$ V beyond.

The characteristic is odd-symmetric, so with matched devices it generates no even harmonics.

![Transfer characteristic: abrupt-turn-on sketch and ngspice curve, showing the dead band and the saturation limits](/q/grsim-05-10/solution-transfer.svg)

### Step 2 — Waveforms for 1-V, 10-V and 20-V input amplitudes

For $V_i=A\sin\omega t$, a device starts conducting at $\omega t=\arcsin(0.6\ \mathrm V/A)$ and, if $A>15.4$ V, saturates at $\arcsin(15.4\ \mathrm V/A)$. The peak collector current is the peak output divided by $R_L$:

| $A$ | Conduction in each half-cycle | Output | Peak $I_C$ |
|---|---|---|---|
| 1 V | $36.9°$–$143.1°$ | pulses of $1-0.6=0.4$ V peak | 0.2 mA |
| 10 V | $3.4°$–$176.6°$ | 9.4-V-peak sine with a notch at each zero crossing | 4.7 mA |
| 20 V | $1.7°$–$178.3°$, saturated $50.4°$–$129.6°$ | crossover notch, flat tops at ±14.8 V | 7.4 mA, flat-topped |

Each transistor carries current only in its own half-cycle: $I_{C1}$ is a train of positive pulses (1 V) or half-sines (10 V and 20 V) during $V_i>0$, and $I_{C2}$ the same during $V_i<0$. At 1 V the dead band removes most of the signal (severe crossover distortion); at 10 V it is a small notch.

### Step 3 — SPICE setup

Both transistors use $I_S=10^{-16}$ A, $\beta_F=100$, $r_b=100\ \Omega$ and $r_c=20\ \Omega$. A `.dc` sweep of $V_i$ gives the transfer curve; for each amplitude, a 1-kHz transient is run and `fourier` analyses the last period.

```spice
* grsim-05-10 class B output stage (A = 1, 10, 20 V)
.model qn npn is=1e-16 bf=100 rb=100 rc=20
.model qp pnp is=1e-16 bf=100 rb=100 rc=20
VCC vcc 0 15
VEE vee 0 -15
Vi  in  0 sin(0 10 1k)
Q1 vcc in out qn
Q2 vee in out qp
RL out 0 2k
.dc Vi -20 20 0.01
.tran 1u 4m 2m 0.5u
.four 1k v(out)
.end
```

### Step 4 — Simulated transfer curve and waveforms

With exponential devices the turn-on is gradual: $V_o$ is 2 mV at $V_i=0.6$ V, 33 mV at 0.7 V and 0.28 V at 1 V. At the currents of interest $|V_{BE}|=V_T\ln(I_C/I_S)$ is 0.7–0.8 V (0.81 V at 4.5 mA), so the effective dead band is about ±0.7 V instead of ±0.6 V. Outside it the slope is 1. $Q_1$ saturates near $V_o=14.75$ V at $V_i=15.6$ V, close to the hand values.

| $A$ | $V_o$ peak, hand / SPICE | $I_C$ peak, hand / SPICE |
|---|---|---|
| 1 V | 0.40 V / 0.28 V | 0.20 mA / 0.137 mA |
| 10 V | 9.4 V / 9.18 V | 4.7 mA / 4.55 mA |
| 20 V | 14.8 V / 15.55 V | 7.4 mA / 7.25 mA before saturation |

![Simulated output waveforms for 1-V, 10-V and 20-V inputs, with crossover distortion at the zero crossings and clipping at 20 V](/q/grsim-05-10/solution-waveforms.svg)

![Simulated collector currents of Q1 and Q2 for the three amplitudes](/q/grsim-05-10/solution-currents.svg)

At 20 V the simulated clip is soft. Once $Q_1$ saturates, the ideal source keeps pushing the base above $V_{CC}$: the base-collector junction is forward biased, the input drives the load directly through $r_b$, and $V_o$ keeps rising slowly (slope ≈ 0.17) to 15.55 V. The same base current flows out through the collector into $V_{CC}$, so $I_{C1}$ reverses and reaches about −28 mA at the input peak, instead of staying flat at 7.4 mA as in the hand model. A real driver could not take the base 5 V above the supply, so this part of the simulation reflects the ideal source.

### Step 5 — Harmonic distortion

The Fourier analysis of the simulated outputs, compared with the abrupt model evaluated numerically:

| $A$ | Fundamental (SPICE) | $HD_2$ (SPICE) | $HD_3$ abrupt / SPICE | $HD_5$ (SPICE) | THD (SPICE) |
|---|---|---|---|---|---|
| 1 V | 0.180 V | ≈ $10^{-10}$ | 45.8 % / 53.4 % | 7.1 % | 54.3 % |
| 10 V | 8.97 V | ≈ $10^{-11}$ | 2.7 % / 3.6 % | 2.1 % | 4.5 % |
| 20 V | 17.0 V | ≈ $10^{-11}$ | 8.7 % / 5.9 % | 4.1 % | 7.2 % |

- $HD_2$ is zero to numerical precision: the npn and pnp models are identical, so the characteristic is exactly odd.
- Crossover distortion dominates at 1 V; it is worse in SPICE because the effective dead band (≈ 0.7 V) is a larger fraction of the amplitude.
- At 10 V the notch is a small fraction of the cycle, and $HD_3$ falls to a few percent.
- At 20 V clipping adds distortion, so $HD_3$ rises again. It is lower in SPICE than in the abrupt model because the simulated clip is soft (Step 4); with a hard clip at ±14.8 V the exponential model gives about 7.7 %.

The distortion therefore falls from tens of percent at 1 V to a few percent at 10 V and rises again at 20 V, with no second harmonic.
