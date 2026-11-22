# Detailed solution - grsim-05-01

Find the quiescent current set by the $Q_3$–$Q_2$ mirror, then follow the emitter follower from its linear region to its two limits: $Q_1$ cutting off or saturating, and $Q_2$ saturating. The limits fix the transfer characteristics and the clipped waveforms; ngspice then verifies the curves and gives the harmonic distortion by Fourier analysis.

### Step 1 — Quiescent current

With $R_1=R_2=0$, $Q_3$ is a diode-connected reference and $Q_2$ mirrors its current (equal areas). The current in $R_3$ is

$$
I_R=\frac{0-V_{BE(\text{on})}-(-V_{CC})}{R_3}=\frac{15\ \mathrm V-0.7\ \mathrm V}{5\ \mathrm{k\Omega}}=2.86\ \mathrm{mA}=I_Q .
$$

With $\beta_F=100$ the two base currents take a share, $I_Q=I_R\,\beta_F/(\beta_F+2)\approx2.80$ mA, and the simulation gives 2.81 mA. In the quiescent state $V_o=0$ requires $V_i=V_{BE1}\approx0.7$ V (0.68 V in the simulation).

### Step 2 — Transfer characteristic for $R_L=2\ \mathrm{k\Omega}$

While $Q_1$ is active, $V_o=V_i-V_{BE1}$, slope about 1 (the follower gain $R_L/(R_L+r_{e1})$ with $r_{e1}\approx9\ \Omega$). The limits are:

- **$Q_1$ cut off.** As $V_o$ falls, the load current $V_o/R_L$ flows back into $Q_2$, which still sinks $I_Q$. When $V_o=-I_QR_L$, the current in $Q_1$ reaches zero:
$$
V_o=-I_QR_L=-(2.86\ \mathrm{mA})(2\ \mathrm{k\Omega})=-5.72\ \mathrm V,\qquad V_i\approx-5.72\ \mathrm V+0.7\ \mathrm V\approx-5.0\ \mathrm V.
$$
Below that input $V_o$ stays at $-5.72$ V. $Q_2$ does not saturate there, since $V_{CE2}=-5.72+15=9.3$ V.
- **$Q_1$ saturated.** $V_o$ cannot exceed $V_{CC}-V_{CE(\text{sat})}=14.8$ V, reached at $V_i\approx15.5$ V; beyond it the output is essentially flat.

The linear range is therefore $-5.0\ \mathrm V\lesssim V_i\lesssim15.5$ V, with an asymmetric output swing of −5.72 V to +14.8 V.

### Step 3 — Transfer characteristic for $R_L=10\ \mathrm{k\Omega}$

Now $I_QR_L=28.6$ V exceeds $V_{CC}$, so $Q_1$ never cuts off before $Q_2$ saturates. The negative limit is $Q_2$ saturation:

$$
V_o=-V_{CC}+V_{CE(\text{sat})}=-14.8\ \mathrm V,\qquad V_i\approx-14.1\ \mathrm V.
$$

The positive limit is unchanged at +14.8 V ($V_i\approx15.5$ V). Between them the slope is about 1, so the swing is nearly symmetric, ±14.8 V.

![Simulated transfer characteristics for both loads, with the cut-off and saturation limits marked](/q/grsim-05-01/solution-transfer.svg)

### Step 4 — Output waveforms for a 10-V-peak input

With $V_i=0.7\ \mathrm V+10\sin\omega t$, the active-region output is $V_o=10\sin\omega t$.

- **$R_L=2\ \mathrm{k\Omega}$.** The positive peak of 10 V is well below 14.8 V, but the negative half is clipped flat at $-5.72$ V wherever $10\sin\omega t<-5.72$ V. The clip is centered on the negative peak and lasts
$$
180°-2\arcsin(0.572)=180°-69.8°=110°
$$
of each cycle.
- **$R_L=10\ \mathrm{k\Omega}$.** The swing of ±10 V stays inside ±14.8 V, so the output is an undistorted 10-V-peak sine.

![Simulated output waveforms: the 2-kΩ output clipped on its negative half-cycle, the 10-kΩ output an unclipped sine](/q/grsim-05-01/solution-waveforms.svg)

### Step 5 — SPICE setup

The deck uses $I_S=10^{-14}$ A and $\beta_F=100$ for all three equal-area transistors, with no Early effect. A `.dc` sweep of $V_i$ from −20 V to +20 V gives the transfer curves. For the waveforms, the dc input is first found from $V_o=0$ (0.6816 V), then a 1-kHz, 10-V sine is added; `fourier` analyses the last full period of a 5-ms transient.

```spice
* grsim-05-01 emitter follower (RL = 2k; repeat with 10k)
.model qn npn is=1e-14 bf=100
VCC vcc 0 15
VEE vee 0 -15
Vi  in  0 dc 0.6816 sin(0.6816 10 1k)
Q1 vcc in out qn
Q2 out b  vee qn
Q3 b   b  vee qn
R3 0   b  5k
RL out 0  2k
.dc Vi -20 20 0.02
.tran 1u 5m 3m 0.5u
.four 1k v(out)
.end
```

### Step 6 — Simulated transfer characteristics

| Quantity | Hand | ngspice |
|---|---|---|
| $I_Q$ | 2.86 mA (2.80 mA with base currents) | 2.81 mA |
| Slope in linear region ($R_L=2$ k / 10 k) | ≈ 1 | 0.995 / 0.999 |
| Negative limit, 2 kΩ ($Q_1$ off) | −5.72 V at $V_i\approx-5.0$ V | −5.62 V |
| Negative limit, 10 kΩ ($Q_2$ saturated) | −14.8 V at $V_i\approx-14.1$ V | −14.96 V |
| Positive limit, both ($Q_1$ saturated) | +14.8 V at $V_i\approx15.5$ V | +15.0 V |

The 2-kΩ clip level is $-I_QR_L$ with the simulated $I_Q$. The saturation limits come out about 0.2 V beyond the hand values because the ideal SPICE transistor has no series resistance: driven hard into saturation, its $V_{CE}$ falls to a few tens of millivolts instead of the 0.2 V assumed by hand. The knee at $Q_1$ cut-off is slightly rounded, since $V_{BE1}$ shrinks as $Q_1$'s current falls toward zero.

### Step 7 — Harmonic distortion

Expand the periodic output in a Fourier series, $V_o=c_0+\sum_n c_n\sin(n\omega t+\varphi_n)$, and define $HD_n=c_n/c_1$. For a 10-V sine clipped flat at $-V_L$ the coefficients follow from integrating over one period; evaluating them numerically for the ideal clipped sine and comparing with the simulation:

| $R_L$ | Case | dc shift | Fundamental | $HD_2$ | $HD_3$ |
|---|---|---|---|---|---|
| 2 kΩ | ideal clip at −5.72 V | +0.86 V | 8.43 V | 13.9 % | 7.9 % |
| 2 kΩ | ideal clip at −5.62 V | +0.89 V | 8.38 V | 14.4 % | 8.1 % |
| 2 kΩ | ngspice | +0.89 V | 8.36 V | 14.3 % | 8.0 % |
| 10 kΩ | ngspice | 0.9 mV | 9.99 V | 0.0088 % | 0.0011 % |

For 2 kΩ the clipping dominates: it removes part of the negative half, so the output acquires a positive dc shift, a smaller fundamental and large even and odd harmonics ($HD_2\approx14\ \%$, $HD_3\approx8\ \%$; total THD 16.7 %).

For 10 kΩ the only nonlinearity is the exponential $V_{BE}$ of $Q_1$, whose current swings by $\pm v_o/R_L$ around $I_Q$:

$$
v_i=v_o+V_T\ln\left(1+\frac{v_o}{I_QR_L}\right).
$$

Because $I_QR_L=28$ V is large compared with the 10-V swing and $V_T$ is only 26 mV, this term is tiny, and both $HD_2$ and $HD_3$ are far below 0.1 %, i.e. negligible.
