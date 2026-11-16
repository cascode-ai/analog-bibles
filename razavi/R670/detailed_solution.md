# Detailed solution - R670

**Approach.** Go through the subthreshold equation factor by factor and apply the constant-field scaling rules to each ingredient (dimensions ÷ α, voltages ÷ α, doping × α, temperature unchanged). Then derive the subthreshold slope from the exponential term, $S = 2.3\,\zeta V_T$, and see that it contains only $\zeta$ and the thermal voltage, neither of which scales with $\alpha$.

### Step 1 — The equation and its ingredients

$$I_D = \mu C_d\,\frac{W}{L}\,V_T^2\,\exp\!\left(\frac{V_{GS} - V_{TH}}{\zeta V_T}\right)\left[1 - \exp\!\left(\frac{-V_{DS}}{V_T}\right)\right]$$

The ingredients are: the mobility $\mu$; the depletion capacitance per unit area $C_d$; the aspect ratio $W/L$; the thermal voltage $V_T = kT/q$ ($k$: Boltzmann's constant, $T$: absolute temperature, $q$: electron charge); the gate overdrive $V_{GS} - V_{TH}$; the slope factor $\zeta = 1 + C_d/C_{ox}$; and the drain–source voltage $V_{DS}$.

**Physical meaning of $\zeta$.** Below threshold, the gate controls the surface potential through a capacitive divider: $C_{ox}$ from gate to surface, and $C_d$ from surface to substrate. A change $\Delta V_{GS}$ moves the surface potential by only $\Delta V_{GS}\,C_{ox}/(C_{ox} + C_d) = \Delta V_{GS}/\zeta$, and the current depends exponentially on the surface potential.

### Step 2 — Scaling of each parameter

**Aspect ratio.** $W/\alpha$ over $L/\alpha$:

$$\frac{W}{L} \to \frac{W/\alpha}{L/\alpha} = \frac{W}{L}\quad\text{(unchanged)}.$$

**Mobility.** Ideally unchanged. (In practice it falls somewhat, because the higher doping increases impurity scattering and the higher vertical field increases surface scattering.)

**Thermal voltage.** $V_T = kT/q$ depends only on temperature, which does not scale:

$$V_T \to V_T \approx 25.9\ \mathrm{mV\ at\ 300\ K}\quad\text{(unchanged)}.$$

**Voltages.** $V_{GS}$, $V_{TH}$, $V_{GS} - V_{TH}$ and $V_{DS}$ are all divided by $\alpha$.

**Oxide capacitance.** $C_{ox} = \epsilon_{ox}/t_{ox} \to \alpha C_{ox}$.

**Fermi potential.** $\phi_B = (kT/q)\ln(N_{sub}/n_i)$, where $n_i$ is the intrinsic carrier concentration. With $N_{sub} \to \alpha N_{sub}$:

$$\phi_B \to \frac{kT}{q}\ln\frac{\alpha N_{sub}}{n_i} = \phi_B + V_T\ln\alpha,$$

a small increase (18 mV for $\alpha = 2$); essentially constant.

**Depletion capacitance.** $C_d = \sqrt{\epsilon_{si}qN_{sub}/(4\phi_B)}$:

$$C_d \to \sqrt{\frac{\epsilon_{si}q\,\alpha N_{sub}}{4(\phi_B + V_T\ln\alpha)}} \approx \sqrt\alpha\;C_d\quad\text{(slightly less than }\sqrt\alpha\text{)}.$$

It rises only by about $\sqrt\alpha$, not by $\alpha$, because the surface potential at threshold ($2\phi_B$) does not scale with $1/\alpha$: the depletion width $\sqrt{2\epsilon_{si}(2\phi_B)/(qN_{sub})}$ shrinks only by $\sqrt\alpha$. (If one assumes that *all* depletion widths scale ideally by $1/\alpha$, then $C_d \to \alpha C_d$.)

**Slope factor.**

$$\frac{C_d}{C_{ox}} \to \frac{\sqrt\alpha\,C_d}{\alpha\,C_{ox}} = \frac{1}{\sqrt\alpha}\cdot\frac{C_d}{C_{ox}}, \qquad \zeta = 1 + \frac{C_d}{C_{ox}} \to 1 + \frac{1}{\sqrt\alpha}\cdot\frac{C_d}{C_{ox}} .$$

$\zeta$ decreases somewhat toward 1. (With ideal depletion scaling, $C_d/C_{ox}$ and $\zeta$ stay constant.)

**Drain factor.** $1 - \exp(-V_{DS}/V_T)$ with $V_{DS} \to V_{DS}/\alpha$ and $V_T$ fixed. It is about 1 as long as $V_{DS}$ stays above roughly $4V_T \approx 100$ mV (then the factor exceeds 0.98). Once the scaled supply approaches a few $V_T$, this factor starts to depend on $V_{DS}$.

**Prefactor.** $\mu C_d(W/L)V_T^2 \to 1\cdot\sqrt\alpha\cdot1\cdot1 = \sqrt\alpha$ times larger.

### Step 3 — Summary table

| Parameter | Scaling |
|---|---|
| $W/L$ | 1 |
| $\mu$ | 1 (ideally) |
| $V_T = kT/q$ | 1 |
| $V_{GS}$, $V_{TH}$, $V_{GS} - V_{TH}$, $V_{DS}$ | $1/\alpha$ |
| $C_{ox}$ | $\alpha$ |
| $\phi_B$ | $+V_T\ln\alpha$ (≈ 1) |
| $C_d$ | ≈ $\sqrt\alpha$ (or $\alpha$ with ideal depletion scaling) |
| $\zeta$ | slightly smaller, toward 1 (or 1) |
| prefactor $\mu C_d(W/L)V_T^2$ | ≈ $\sqrt\alpha$ |
| exponent $(V_{GS} - V_{TH})/(\zeta V_T)$ | ≈ $1/\alpha$ |

### Step 4 — The subthreshold slope

Take the natural logarithm of the current (for $V_{DS} \gg V_T$, so the drain factor is 1):

$$\ln I_D = \ln\!\left(\mu C_d\frac{W}{L}V_T^2\right) + \frac{V_{GS} - V_{TH}}{\zeta V_T}.$$

Differentiate with respect to $V_{GS}$:

$$\frac{d\ln I_D}{dV_{GS}} = \frac{1}{\zeta V_T}.$$

Convert to base-10 logarithms, using $\ln I_D = \ln10\cdot\log_{10}I_D$:

$$\frac{d\log_{10}I_D}{dV_{GS}} = \frac{1}{\zeta V_T\ln10}.$$

The subthreshold slope is the inverse, the gate-voltage change per decade of current:

$$S = \frac{dV_{GS}}{d\log_{10}I_D} = \zeta V_T\ln10 = 2.3\,\zeta\,\frac{kT}{q}.$$

At 300 K, $2.3\,kT/q = 2.3026 \times 25.9\ \mathrm{mV} = 59.5$ mV/dec, so $S \approx 60\zeta$ mV/dec, with an absolute lower bound of about 60 mV/dec (since $\zeta \ge 1$).

**Under scaling**, $kT/q$ is unchanged and $\zeta$ is unchanged or slightly smaller. Therefore **$S$ does not scale**: it stays roughly constant (typically 60–100 mV/dec), at best improving slightly as $\zeta$ moves toward 1, while every other voltage in the device shrinks by $\alpha$.

### Step 5 — Numerical illustration ($\alpha = 2$)

Take $N_{sub} = 10^{17}\ \mathrm{cm^{-3}}$ and an oxide chosen so that $\zeta = 1.5$ before scaling.

- Before: $\phi_B = 0.0259\ln(10^{17}/1.45\times10^{10}) = 0.407$ V, $C_d = 101\ \mathrm{nF/cm^2}$, $C_{ox} = 2C_d = 202\ \mathrm{nF/cm^2}$ ($t_{ox} \approx 17$ nm), $S = 1.5\times59.5 = 89$ mV/dec.
- After: $N_{sub} = 2\times10^{17}\ \mathrm{cm^{-3}}$, $\phi_B = 0.425$ V, $C_d = 140\ \mathrm{nF/cm^2}$ (×1.38, slightly less than $\sqrt2 = 1.41$), $C_{ox} = 404\ \mathrm{nF/cm^2}$, $\zeta = 1 + 140/404 = 1.35$, $S = 1.35\times59.5 = 80$ mV/dec.

The slope improved by only 10 %, while the supply and threshold were halved.

### Step 6 — Consequence: the off current

At $V_{GS} = 0$ the current is proportional to $\exp[-V_{TH}/(\zeta V_T)]$. Dividing $V_{TH}$ by $\alpha$ while $\zeta V_T$ stays about the same makes the exponent smaller in magnitude, so the off current grows **exponentially**. For example, $V_{TH}$: 0.7 V → 0.35 V with $\zeta \approx 1.5$:

$$\frac{I_{off}'}{I_{off}} \approx \exp\!\left(\frac{0.35\ \mathrm{V}}{1.5\times0.0259\ \mathrm{V}}\right) = e^{9.0} \approx 8\times10^3 \approx 10^4 .$$

Equivalently, the number of decades between on and off current available within $V_{TH}$ is $V_{TH}/S$, which falls by $\alpha$. This non-scalability of $S$ is what prevents $V_{TH}$, and with it the supply voltage, from being scaled freely.

### Result

Under ideal scaling, $W/L$, $\mu$ and $V_T = kT/q$ are unchanged; $V_{GS}$, $V_{TH}$, $V_{DS}$ are divided by $\alpha$; $C_{ox}$ rises by $\alpha$; $C_d$ rises by about $\sqrt\alpha$ (by $\alpha$ if depletion widths are assumed to scale ideally); $\zeta = 1 + C_d/C_{ox}$ stays the same or decreases slightly toward 1; the prefactor rises by about $\sqrt\alpha$; the drain factor stays ≈ 1 while $V_{DS} \gg V_T$.

The subthreshold slope

$$S = 2.3\,\zeta\,\frac{kT}{q} \approx 60\zeta\ \mathrm{mV/dec}$$

**does not scale** (at best it improves slightly), and it can never fall below about 60 mV/dec at room temperature. Since $V_{TH}$ is divided by $\alpha$, the subthreshold (off) current rises exponentially.

**Common mistake.** Assuming that the slope scales down by $\alpha$ like the other voltages. $S$ is set by $kT/q$ (and $\zeta \ge 1$); temperature is not scaled, so the thermal voltage, and with it $S$, stays put.

**Common mistake.** Scaling $V_T$ along with the supply. The symbol looks like a device voltage, but $V_T = kT/q$ is the thermal voltage, a physical constant at a given temperature.

**Common mistake.** Claiming that $W/L$ changes. Both dimensions are divided by $\alpha$, so their ratio is unchanged.
