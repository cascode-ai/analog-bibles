# Detailed solution - alsim-04-3-04

First find the node voltages of the cascode mirror with the square-law model, which give the minimum output voltage, and the cascode output resistance $r_{ds1}+r_{ds2}+g_{m2}r_{ds1}r_{ds2}$. Then simulate the circuit with the LEVEL-3 model: an operating point and a dc sweep of $v_{OUT}$ give $i_{OUT}$, and an ac test source gives $r_{OUT}$. The simulated output resistance turns out to be set by the model's drain-induced threshold shift, which the hand model does not contain.

### Step 1 — Hand analysis: node voltages

All four devices carry 10 µA and have $K'W/(2L)=275\ \mu\mathrm{A/V^2}$, so, ignoring λ in the bias,

$$
V_{ON}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(5)}}=0.191\ \mathrm V,\qquad V_{GS}=V_T+V_{ON}=0.891\ \mathrm V .
$$

M3 sets the gates of M3 and M1 at 0.891 V, and M1 copies it, so the drain of M1 (source of M2) sits at about $V_{GS}=0.891$ V. M4 is stacked on M3, so the gate of M2 is at $2V_{GS}=1.78$ V. M2 stays saturated while $v_{OUT}\ge V_{G2}-V_{T}$:

$$
V_{OUT}(\min)=2V_{GS}-V_T=V_T+2V_{ON}=0.7+2(0.191)=1.08\ \mathrm V .
$$

With the body effect, M4 and M2 both have $V_{SB}\approx0.89$ V and $V_T\approx0.87$ V. The gate of M2 and the minimum drain voltage rise by the same amount, so the result is still 1.08 V.

### Step 2 — Hand analysis: output resistance

At 10 µA,

$$
g_m=\sqrt{2K'\frac WL I_D}=\sqrt{2(110\ \mu)(5)(10\ \mu)}=105\ \mu\mathrm S,\qquad r_{ds}=\frac{1}{\lambda I_D}=\frac{1}{(0.04)(10\ \mu\mathrm A)}=2.5\ \mathrm{M\Omega}.
$$

M1 acts as a resistor $r_{ds1}$ in the source of the common-gate device M2:

$$
r_{out}=r_{ds1}+r_{ds2}+g_{m2}r_{ds1}r_{ds2}=5\ \mathrm{M\Omega}+(105\ \mu\mathrm S)(2.5\ \mathrm{M\Omega})^2=0.66\ \mathrm{G\Omega}.
$$

Including $g_{mbs2}=\eta g_{m2}$ with $\eta=\gamma/(2\sqrt{0.7+0.89})=0.16$ raises this to about 0.76 GΩ.

### Step 3 — Simulation deck

```spice
* alsim-04-3-04 cascode current mirror, LEVEL 3
IIN 0 4 DC 10U
M4 4 4 3 0 N3 W=5U L=1U
M3 3 3 0 0 N3 W=5U L=1U
M2 2 4 1 0 N3 W=5U L=1U
M1 1 3 0 0 N3 W=5U L=1U
VOUT 2 0 DC 2 AC 1
.MODEL N3 NMOS LEVEL=3 VTO=0.7 UO=660 DELTA=2.4 ETA=0.1 KAPPA=0.15
+ THETA=0.1 NSUB=3E16 TOX=140E-10 XJ=0.2U LD=0.016U NFS=7E11
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38
.OP
.DC VOUT 0 5 1M
.AC DEC 1 1 1K
.PRINT DC I(VOUT)
.PRINT AC I(VOUT)
.END
```

All bulks are grounded. VOUT holds the output at 2 V, well inside the saturation range, and $i_{OUT}=-I(\mathrm{VOUT})$. With a 1-V ac source, $r_{OUT}=1/|I(\mathrm{VOUT})|$ at low frequency.

### Step 4 — Simulated current and output resistance

The operating point gives V(3) = 0.805 V, V(4) = 1.740 V and V(1) = 0.814 V, with

$$
i_{OUT}=10.04\ \mu\mathrm A\quad(v_{OUT}=2\ \mathrm V),\qquad r_{OUT}=6.04\ \mathrm{M\Omega}\ (\text{ac}).
$$

![Simulated iOUT versus vOUT for the given LEVEL-3 model and, for comparison, with ETA set to zero, with the hand minimum output voltage marked](/q/alsim-04-3-04/solution-iout.svg)

| $v_{OUT}$ | 1.0 V | 1.5 V | 2.0 V | 3.0 V | 5.0 V |
|---|---|---|---|---|---|
| $i_{OUT}$ (µA) | 9.87 | 9.96 | 10.04 | 10.21 | 10.53 |

- **Output current.** $i_{OUT}$ is within 0.5% of 10 µA at 2 V. It equals 10 µA where $V_{DS1}\approx V_{DS3}$ and grows with $v_{OUT}$.
- **Output resistance.** The dc slope above the knee is 6.0–6.1 MΩ, consistent with the ac value.
- **Knee.** The curve bends near $v_{OUT}=V(1)+V_{DSAT2}=0.81+0.14=0.96$ V, slightly below the hand estimate, because LEVEL 3 gives a smaller $V_{DSAT}$ than the square law.

### Step 5 — Why the simulated $r_{OUT}$ is far below the hand value

The LEVEL-3 output conductances at this bias are $g_{ds1}=5.06\ \mu$S and $g_{ds2}=5.08\ \mu$S, i.e. $r_{ds}\approx0.2$ MΩ instead of 2.5 MΩ (an effective λ of about 0.5 V⁻¹). With $g_{m2}=127\ \mu$S and $g_{mbs2}=18\ \mu$S, the cascode formula reproduces the simulation:

$$
r_{out}\approx(g_{m2}+g_{mbs2})r_{ds1}r_{ds2}+r_{ds1}+r_{ds2}=\frac{145\ \mu\mathrm S}{(5.06\ \mu\mathrm S)(5.08\ \mu\mathrm S)}+0.4\ \mathrm{M\Omega}=6.0\ \mathrm{M\Omega}.
$$

Almost all of this conductance comes from ETA, LEVEL 3's static-feedback (DIBL) term. It lowers the threshold by $\sigma V_{DS}$, with

$$
\sigma=\frac{\mathrm{ETA}\cdot8.15\times10^{-22}}{C_{ox}L_{eff}^3}=\frac{0.1\cdot8.15\times10^{-22}}{(2.47\times10^{-3}\ \mathrm{F/m^2})(0.968\ \mu\mathrm m)^3}=0.036,
$$

so $g_{ds}\approx\sigma g_m\approx(0.036)(127\ \mu\mathrm S)=4.6\ \mu$S. Rerunning the same deck with ETA = 0 leaves $i_{OUT}=10.00$ µA and raises $r_{OUT}$ to 0.62 GΩ at 2 V. That is the range of the λ = 0.04 hand estimate, with KAPPA alone giving $g_{ds}\approx0.5\ \mu$S.

The cascode still multiplies $r_{ds}$ by $g_mr_{ds}\approx25$, but with this model's short-channel output conductance the actual output resistance is about 6 MΩ, not the 0.66 GΩ predicted with λ = 0.04 V⁻¹.
