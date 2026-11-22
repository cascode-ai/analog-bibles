# Detailed solution - grsim-10-10

In the emitter-coupled multivibrator, one of $Q_1$, $Q_2$ conducts at a time and carries both current sources, $2I_1$. The other is off, while its current source discharges the timing capacitor $C$ at the constant rate $I_1/C$. When the off transistor's base-emitter voltage reaches its turn-on value, the cross-coupled followers $Q_3$, $Q_4$ regenerate and the roles swap. The frequency is therefore $I_1/(4CV_A)$, where $V_A$ is the peak capacitor voltage. The control input sets $I_1$ through the degenerated current sources. Find $V_A$, choose the components to place the centre at 10 kHz with a 2:1 range for 200 mV, and verify and trim the design in ngspice.

### Step 1 — Frequency of oscillation

Suppose $Q_1$ is on. Its collector current $2I_1$ flows mostly through the diode-connected $Q_5$, so $V_{C1}=V_{CC}-V_D$; $Q_2$ is off, so $V_{C2}\approx V_{CC}$. The followers give $V_{B1}=V_{CC}-V_{BE4}$ and $V_{B2}=V_{CC}-V_D-V_{BE3}$, both constant during the half-period. $E_1$ is held at $V_{B1}-V_{BE1}(2I_1)$, and $E_2$ falls linearly as $Q_2$'s current source discharges $C$ with $I_1$. $Q_2$ switches on when $V_{B2}-V_{E2}$ reaches the turn-on voltage $V_{BE2,\text{th}}$, at which point

$$
V_{E1}-V_{E2}=V_D+V_{BE2,\text{th}}-V_{BE1}(2I_1)\equiv V_A ,
$$

since $V_{BE3}\approx V_{BE4}$ cancel. After switching, the capacitor voltage is reversed relative to the new conducting side, so each half-period moves it by $2V_A$ at the rate $I_1/C$:

$$
\frac{T}{2}=\frac{2CV_A}{I_1}\ \Rightarrow\ f=\frac{I_1}{4CV_A}.
$$

### Step 2 — The switching threshold

If the off transistor switched on at the same $V_{BE}$ as the on transistor, then $V_A=V_D$, which is the usual first estimate $f=I_1/(4CV_D)$. In fact regeneration starts much earlier. The positive-feedback loop from $Q_2$'s collector through $Q_4$ to the base of $Q_1$, with $C$ acting as a short during the fast transition, has a loop gain of about $g_{m2}R$. The loop gain reaches 1, and the switch occurs, when $Q_2$ carries only $I_{\text{th}}\approx V_T/R$. Its $V_{BE}$ at that moment is smaller than $V_{BE1}(2I_1)$ by $V_T\ln(2I_1/I_{\text{th}})$, so

$$
V_A\approx V_D-V_T\ln\frac{2I_1R}{V_T}.
$$

With $R=10$ kΩ and $I_1\approx250\ \mu$A, the correction is $(26\ \mathrm{mV})\ln(192)=0.14$ V. So $V_A\approx0.62$ V rather than $V_D\approx0.76$ V, which raises the frequency by about 23 % over the first estimate.

### Step 3 — Collector resistors and follower bias

$R$ must let the diode carry most of $2I_1$, i.e. $2I_1R\gg V_D$. With $R=10$ kΩ, $2I_1R\approx3$ V even at the lowest current (about 150 µA), and the diode carries $2I_1-V_D/R\approx2I_1-75\ \mu$A. On the off side, $R$ carries only $Q_3$'s or $Q_4$'s base current (about 1 µA), so the collector stays within about 10 mV of $V_{CC}$. The follower current sources are $I_B=100\ \mu$A. The diode drop follows from $V_D=V_T\ln[(2I_1-V_D/R)/I_S]$, about 0.74–0.76 V.

### Step 4 — Current range, $R_E$ and the dc input

With $C=0.01\ \mu$F and the threshold-corrected $V_A$ of Step 2, the currents for a 2:1 range about 10 kHz are:

| $f$ | $I_1$ | $V_D$ | $V_A$ |
|---|---|---|---|
| 6.67 kHz | 164.5 µA | 0.743 V | 0.617 V |
| 10 kHz | 247.7 µA | 0.756 V | 0.619 V |
| 13.33 kHz | 330.8 µA | 0.764 V | 0.620 V |

The current sources obey $V_{\text{in}}=V_T\ln(I_1/I_S)+(1+1/\beta)I_1R_E$. A 200-mV change of $V_{\text{in}}$ must move $I_1$ from 164.5 to 330.8 µA. The base-emitter part takes $\Delta V_{BE}=V_T\ln(330.8/164.5)=18.2$ mV, so

$$
R_E=\frac{200\ \mathrm{mV}-18.2\ \mathrm{mV}}{(1.01)(330.8-164.5)\ \mu\mathrm{A}}=1.08\ \mathrm{k\Omega},
$$

$$
V_{\text{in}}(\text{dc})=V_T\ln\frac{247.7\ \mu\mathrm{A}}{10^{-16}\ \mathrm{A}}+(1.01)(247.7\ \mu\mathrm{A})(1.08\ \mathrm{k\Omega})=0.743+0.270=1.013\ \mathrm{V}.
$$

The frequency is nearly proportional to $I_1$ because $V_A$ hardly changes, so the 2:1 current range gives the 2:1 frequency range.

**Headroom.** The conducting side's emitter sits at $V_{CC}-V_{BE4}-V_{BE1}\approx3.5$ V, and the other emitter falls to about $V_A$ below it, so $E_1$ and $E_2$ stay roughly between 2.8 V and 3.5 V (the simulation shows a minimum of 2.76 V). This is well above the current-source bases (about 1 V). The current-source transistors are therefore never saturated.

### Step 5 — SPICE check and trim

The transistors use $\beta=100$ and $I_S=10^{-16}$ A, with small junction and transit-time capacitances added ($C_{je}=0.5$ pF, $C_{jc}=0.3$ pF, $\tau_F=50$ ps) so that the regenerative switching has a finite speed and the simulator can follow it. These do not affect the timing, which is set by the 10-nF capacitor. $Q_5$ and $Q_6$ are diode-connected transistors. The frequency is measured from ten periods of $V_{C2}-V_{C1}$ after start-up.

```spice
* grsim-10-10 emitter-coupled multivibrator VCO
.options temp=28.57 tnom=28.57 reltol=1e-5 method=gear
.model qn npn is=1e-16 bf=100 cje=0.5p cjc=0.3p tf=50p
VCC vcc 0 5
R1 vcc c1 10k
R2 vcc c2 10k
Q5 vcc vcc c1 qn
Q6 vcc vcc c2 qn
Q1 c1 b1 e1 qn
Q2 c2 b2 e2 qn
Q3 vcc c1 b2 qn
Q4 vcc c2 b1 qn
IB1 b1 0 100u
IB2 b2 0 100u
C e1 e2 0.01u
Q7 e1 vin s7 qn
Q8 e2 vin s8 qn
RE1 s7 0 1.08k
RE2 s8 0 1.08k
Vin vin 0 0.995
.ic v(e1)=3 v(e2)=3.5
.tran 0.1u 5m 0 0.1u uic
.end
```

| $V_{\text{in}}$ | 0.895 V | 0.913 V | 0.995 V | 1.013 V | 1.095 V | 1.113 V |
|---|---|---|---|---|---|---|
| $f$ (ngspice) | 6.53 kHz | 7.14 kHz | 9.99 kHz | 10.63 kHz | 13.57 kHz | 14.22 kHz |

At the calculated $V_{\text{in}}=1.013$ V the simulated frequency is 10.63 kHz, 6 % high, and the 200-mV range 0.913–1.113 V gives 7.14–14.22 kHz, a ratio of 1.99. The remaining 6 % comes from small differences between the follower $V_{BE}$'s, which Step 1 assumed to cancel. Trimming the dc input to 0.995 V puts the centre at 9.99 kHz; the range 0.895–1.095 V then gives 6.53–13.57 kHz, a ratio of 2.08.

Using the first estimate $V_A=V_D$ instead would give $R_E\approx850\ \Omega$ and $V_{\text{in}}\approx1.01$ V. That design simulates at 13.1 kHz at 1.01 V (8.65–17.6 kHz over 0.91–1.11 V), about 30 % high, which shows why the switching threshold must be included.

**Final design:** $R=10$ kΩ, $R_E=1.08$ kΩ, $I_B=100\ \mu$A, $V_{\text{in}}(\text{dc})=0.995$ V (control range 0.895–1.095 V).

### Step 6 — Transfer characteristic

![VCO frequency versus Vin from 0.8 to 1.35 V: simulated points rise almost linearly from 4.3 kHz at 0.825 V to 23 kHz at 1.35 V, about 35 kHz/V; the corrected hand model lies slightly below and the simple I1/(4C VD) estimate about 25 % lower](/q/grsim-10-10/solution-transfer.svg)

The simulated characteristic is nearly linear at about 35 kHz/V, because $I_1$ is nearly linear in $V_{\text{in}}$ once $I_1R_E$ dominates the base-emitter voltage, and $V_A$ is almost constant. It bends slightly at low $V_{\text{in}}$, where $V_{BE}$ takes a larger share of the input; the lowest simulated point, 0.825 V, gives 4.3 kHz. The corrected hand model (solid line) follows the simulation within about 6 %. The simple $I_1/(4CV_D)$ estimate is about 25 % low throughout.
