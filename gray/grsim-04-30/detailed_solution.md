# Detailed solution - grsim-04-30

Find the zero-TC condition by hand from the given $I_S(T)$ model, then reproduce the circuit in ngspice with the same temperature model, trim the resistor ratio for $dV_{OUT}/dT=0$ at 25 °C, and repeat with doubled saturation currents, once with and once without retrimming.

### Step 1 — Circuit equations

The amplifier forces its inputs equal, so the bottom of $R_2$ sits at $V_{EB1}$ (up to $V_{OUT}/A$). Both $R_1$ and $R_2$ then drop $V_{OUT}-V_{EB1}$; choosing $R_1=R_2$ makes the two emitter currents equal, $I_1=I_2=I$. With $I_{S2}=8I_{S1}$, the voltage across $R_3$ is the difference of the two emitter-base voltages:

$$
I R_3=V_{EB1}-V_{EB2}=V_T\ln\frac{I/I_{S1}}{I/I_{S2}}=V_T\ln8 .
$$

This current is PTAT, and the output is

$$
V_{OUT}=V_{EB1}+IR_2=V_{EB1}+\frac{R_2}{R_3}V_T\ln8 .
$$

The resistor ratio $R_2/R_3$ sets the closed-loop gain applied to the PTAT voltage $V_T\ln8=53.4$ mV.

### Step 2 — Hand estimate of the zero-TC output

With $V_{EB}=V_T\ln(I/I_S)$, $I_S\propto T^{\gamma}\exp(-V_{G0}/V_T)$ and $I\propto T$, write $V_{EB1}$ relative to its value $V_{EB1,0}$ at $T_0$:

$$
V_{EB1}(T)=V_{G0}-\frac{T}{T_0}\left(V_{G0}-V_{EB1,0}\right)-(\gamma-1)\frac{kT}{q}\ln\frac{T}{T_0}.
$$

At $T_0$ its slope is $-(V_{G0}-V_{EB1,0})/T_0-(\gamma-1)k/q$. The PTAT term $IR_2=V_{OUT}-V_{EB1}$ has slope $(V_{OUT}-V_{EB1,0})/T_0$. Setting the sum to zero gives

$$
V_{OUT}=V_{G0}+(\gamma-1)V_T=1.205\ \mathrm V+2.2\,(25.7\ \mathrm{mV})=1.2615\ \mathrm V .
$$

The target is set by the device model alone, not by the current level or by $R_3$.

### Step 3 — SPICE setup

The $Q_1$, $Q_2$ models use EG = 1.205 eV and XTI = 3.2, so SPICE's $I_S(T)\propto T^{\mathrm{XTI}}\exp(-\mathrm{EG}/V_T)$ is exactly the stated model; a large BF makes base current negligible. The amplifier is a VCVS of gain $10^4$, $R_3=1\ \mathrm{k\Omega}$ ($I\approx53$ µA), and $R_1=R_2$ is swept. A `.dc temp` sweep gives $V_{OUT}(T)$; the slope at 25 °C is a central difference over ±0.25 °C. A `.nodeset` keeps the solver off the zero-current state of the reference.

```spice
* band-gap reference, Fig. 1
.model P1 pnp(is=1.25e-17 eg=1.205 xti=3.2 bf=1e6)
.model P2 pnp(is=1e-16    eg=1.205 xti=3.2 bf=1e6)
Q1 0 0 a  P1
Q2 0 0 e2 P2
R1 out a  9.626k
R2 out b  9.626k
R3 b   e2 1k
E1 out 0  a b 10000
.nodeset v(out)=1.2
.options tnom=25
.dc temp -25 100 1
.end
```

### Step 4 — Trim for zero TC: the target voltage

A root search on $dV_{OUT}/dT|_{25\,°\mathrm C}=0$ gives $R_1=R_2=9.626\ \mathrm{k\Omega}$ ($R_2/R_3=9.63$), with $V_{EB1}=0.7472$ V and

$$
V_{OUT,\mathrm{target}}=1.26005\ \mathrm V\approx1.26\ \mathrm V .
$$

This agrees with the hand estimate. The 1.4 mV left between them comes from the finite amplifier gain: the inputs differ by $V_{OUT}/A=0.126$ mV, which is subtracted from the PTAT voltage across $R_3$ and amplified by about $R_2/R_3$. Rerunning with $A=10^9$ gives 1.26147 V, the hand value.

### Step 5 — Doubled $I_S$: retrimmed and not retrimmed

Doubling both saturation currents leaves $V_T\ln(I_{S2}/I_{S1})$ and hence $I$ unchanged, but lowers $V_{EB1}$ by $V_T\ln2=17.8$ mV, a PTAT amount. Without retrimming, the output falls by that amount and its slope changes by $-(k/q)\ln2=-59.7\ \mu\mathrm V/°\mathrm C$. Retrimming adds the same PTAT amount back through $R_2/R_3$:

$$
\Delta\frac{R_2}{R_3}=\frac{V_T\ln2}{V_T\ln8}=\frac13,\qquad R_2=9.626\ \mathrm{k\Omega}+0.333\ \mathrm{k\Omega}=9.96\ \mathrm{k\Omega}.
$$

Since the added term is exactly PTAT, the whole curve returns to the nominal one. SPICE ($R_1$ kept equal to $R_2$):

| Case | $R_1=R_2$ (kΩ) | $V_{OUT}$ at 25 °C (V) | $dV_{OUT}/dT$ at 25 °C |
|---|---|---|---|
| Nominal $I_S$, trimmed | 9.626 | 1.26005 | 0 |
| $2I_S$, not retrimmed | 9.626 | 1.24227 | −59.7 µV/°C |
| $2I_S$, retrimmed to the target | 9.960 | 1.26005 | +0.14 µV/°C |

![Simulated output voltage versus temperature for the nominal, untrimmed and retrimmed cases](/q/grsim-04-30/solution-curves.svg)

Trimming $V_{OUT}$ back to the target voltage at 25 °C therefore restores $dV_{OUT}/dT\approx0$; the untrimmed circuit keeps the full $-(k/q)\ln2\approx-60\ \mu\mathrm V/°\mathrm C$ error. Over −25 to 100 °C the trimmed curves vary by about 1.7 mV, the residual curvature of $V_{EB}$.
