# Detailed solution - R577

**Approach.** The on-resistance that matters for a sampler is the resistance of the switch while it is *tracking*, i.e. with $V_{out} \approx V_{in}$ and both transistors in deep triode. It is therefore a small-signal resistance at a dc operating point set by the input level. That suggests a single dc sweep: hold the switch on with dc gate voltages, sweep the input level, force a tiny voltage (or current) across the switch, and compute $R = \Delta V/I$ at every sweep point. One simulation run gives the whole curve.

### Step 1 — What exactly is being measured

During tracking, the output follows the input, so the voltage across the switch is nearly zero. Each device is then in deep triode with a resistance set by its overdrive:

- **NMOS $M_1$** (gate at $V_{DD}$, source at about $V_{in}$): $R_{on,N} \approx \dfrac{1}{\mu_nC_{ox}(W/L)_1\,[V_{DD} - V_{in} - V_{THN}(V_{in})]}$. It rises with $V_{in}$ and becomes infinite as $V_{in}$ approaches $V_{DD} - V_{THN}$.
- **PMOS $M_2$** (gate at 0, source at about $V_{in}$): $R_{on,P} \approx \dfrac{1}{\mu_pC_{ox}(W/L)_2\,[V_{in} - |V_{THP}(V_{in})|]}$. It falls with $V_{in}$ and is infinite below $|V_{THP}|$.
- **Equivalent:** $R_{on,eq} = R_{on,N} \parallel R_{on,P}$.

Both thresholds depend on $V_{in}$ through the body effect: the NMOS has $V_{SB} = V_{in}$ and the PMOS has $V_{BS} = V_{DD} - V_{in}$. The simulation must reproduce these conditions:

1. the switch **on**, with gates at their dc "on" levels;
2. the bulks connected **as in the real circuit** (NMOS bulk at ground, PMOS bulk at $V_{DD}$), so the body effect is included;
3. a **tiny** voltage across the switch, so that both devices stay in deep triode.

### Step 2 — The test bench

Replace the clocks by dc sources: CK = $V_{DD}$ on the NMOS gate and $\overline{CK}$ = 0 on the PMOS gate. $C_H$ carries no current at dc, so it can be removed. Make $V_{in}$ a dc source to be swept. Then force the output a little above the input:

- a voltage-controlled voltage source copies $V_{in}$ to an auxiliary node x;
- a small dc source $\Delta V$ (e.g. 1 mV) between x and the output makes $V_{out} = V_{in} + \Delta V$;
- the current through that small source is the current through the switch.

<!-- diagram: diagram-01.cir -->

An example netlist (MOS pin order: drain, gate, source, bulk; sizes are placeholders):

```
* Equivalent on-resistance of a complementary switch vs. input level
VDD  vdd 0 3
VCK  ck  0 3            ; NMOS gate held high: switch on
VCKB ckb 0 0            ; PMOS gate held low: switch on
VIN  in  0 0            ; input level, swept below
M1   out ck  in 0   nmos W=20u L=0.5u
M2   out ckb in vdd pmos W=70u L=0.5u
E1   x   0   in 0  1    ; x = V(in)
VD   out x   1m         ; V(out) = V(in) + 1 mV
.DC VIN 0 3 0.01
* plot  R_on,eq = 1m/abs(I(VD)),  R_on,N = 1m/abs(ID(M1)),  R_on,P = 1m/abs(ID(M2))
.end
```

### Step 3 — Extracting the curve

At each sweep point SPICE solves the dc operating point with $V_{out} - V_{in} = \Delta V$. The equivalent resistance is

$$R_{on,eq}(V_{in}) = \frac{\Delta V}{|I_{VD}|}.$$

Plotting it against the swept $V_{in}$ (0 to $V_{DD}$) gives the required curve **in one run**. Plotting $\Delta V/|I_{D1}|$ and $\Delta V/|I_{D2}|$ in the same run also gives the separate NMOS and PMOS resistances.

**Why $\Delta V$ must be small.** The triode current is $I_D = \beta[V_{ov}V_{DS} - V_{DS}^2/2]$. With $V_{DS} = 1$ mV and overdrives of hundreds of millivolts, the quadratic term is below 0.1 % of the linear one, so $\Delta V/I$ equals the small-signal (tracking) resistance. Using a large voltage across the switch would measure a different, large-signal resistance, and near the ends of the range it would even push a device into saturation.

**Equivalent variant (current forcing).** Instead of $E_1$ and $V_D$, inject a small dc current into the output, e.g. `Itest 0 out 1u` (1 μA), and plot $R_{on,eq} = (V_{out} - V_{in})/1\ \mu\mathrm{A}$. The resulting $V_{DS}$ (a fraction of a millivolt for a few hundred ohms) is again tiny.

**Equivalent variant (small-signal).** Keep the input as a dc level and add an ac current source of 1 A into the output. Run an `.AC` analysis at a low frequency (or `.TF` from that source to $V(out, in)$), and repeat over the input level with `.STEP` (or a swept dc bias). The magnitude of $V(out) - V(in)$ per ampere is $R_{on,eq}$.

### Step 4 — Why this is efficient

A transient approach would apply a small step at each input level, simulate the RC settling of $C_H$, and extract a time constant. That needs one transient run per point plus a curve fit, and it is sensitive to time-step accuracy and to charge injection from the clock edges. The dc sweep needs no time stepping at all: each point is a single nonlinear dc solution, seeded from the previous one, so hundreds of points take a fraction of a second. It also gives $R_{on,N}$ and $R_{on,P}$ for free.

### Step 5 — What the plot should look like

As an illustration, take square-law devices with $\mu_nC_{ox}(W/L)_1 \approx \mu_pC_{ox}(W/L)_2 \approx 5.4$ mA/V², $V_{THN0} = 0.7$ V, $|V_{THP0}| = 0.8$ V, $\gamma = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V and $V_{DD} = 3$ V:

| $V_{in}$ (V) | 0 | 0.5 | 1.0 | 1.25 | 1.5 | 1.75 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|
| $R_{on,N}$ (Ω) | 81 | 110 | 169 | 228 | 352 | 764 | off | off | off |
| $R_{on,P}$ (Ω) | off | off | off | 1290 | 433 | 259 | 185 | 117 | 85 |
| $R_{on,eq}$ (Ω) | 81 | 110 | 169 | 194 | 194 | 194 | 185 | 117 | 85 |

- Near $V_{in} = 0$ only the NMOS conducts, and near $V_{DD}$ only the PMOS does.
- In the middle both conduct. Their conductances add, and the curve forms a broad hump, about 195 Ω here.
- Without body effect, and with matched $\beta$ and $|V_{TH}|$, the total conductance $\beta(V_{DD} - V_{in} - V_{TH}) + \beta(V_{in} - V_{TH}) = \beta(V_{DD} - 2V_{TH})$ would be flat in the middle. The body effect raises both thresholds mid-range and creates the peak, which is why the bulks must be connected realistically.

### Result

Use **one dc sweep**, with no transient runs:

- Turn the switch on with dc sources (NMOS gate at $V_{DD}$, PMOS gate at 0). Keep the bulks as in the real circuit (NMOS at ground, PMOS at $V_{DD}$) so that body effect is included, and remove $C_H$ (it plays no role at dc).
- Sweep $V_{in}$ as a dc source from 0 to $V_{DD}$ (`.DC`). Force a very small difference across the switch, either by driving the output with a controlled source equal to $V_{in} + \Delta V$ ($\Delta V \approx 1$ mV) or by injecting a small dc test current (≈ 1 μA) into the output node. Both devices then stay in deep triode with $V_{DS} \approx 0$, exactly as when the switch is tracking.
- Plot $R_{on,eq} = \Delta V/I$ (or $(V_{out} - V_{in})/I_{test}$) against $V_{in}$. The whole curve comes from one run, and the individual device currents give $R_{on,N}$ and $R_{on,P}$.
- An equivalent alternative is a small-signal `.AC` (unit ac current into the output) or `.TF` analysis, repeated over the input level with `.STEP` or a swept dc bias.

**Common mistake.** Measuring with a large voltage across the switch, for example grounding one terminal and applying $V_{in}$ to the other, then computing $V_{in}/I$. The devices then operate far from $V_{DS} \approx 0$ (even in saturation), which is not the tracking condition, and the "resistance" obtained is a large-signal quantity that depends on the test voltage.

**Common mistake.** Running a single operating-point analysis, or a transient per input level. One `.OP` gives one point, not a curve. Transient runs with RC-settling extraction work but are slow and less accurate, which is the opposite of an efficient simulation.

**Common mistake.** Tying the bulks to the sources (or leaving the body effect out), or simulating with the switch off. The body effect sets where each device turns off and creates the mid-range peak of $R_{on,eq}$. The measurement must also be made with CK high and $\overline{CK}$ low.
