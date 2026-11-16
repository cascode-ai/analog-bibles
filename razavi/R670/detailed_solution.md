# Detailed solution - R670

**Approach.** Apply the constant-field rules (dimensions ÷ α, voltages ÷ α, doping × α, temperature unchanged) to each factor of the subthreshold equation. Then derive the subthreshold slope from the exponential term, $S = 2.3\,\zeta V_T$, which contains only $\zeta$ and the thermal voltage, neither of which scales with $\alpha$.

### Step 1 — The role of $\zeta$

Below threshold the gate sets the surface potential through the divider of $C_{ox}$ (gate to surface) and $C_d$ (surface to substrate): a change $\Delta V_{GS}$ moves the surface potential by only $\Delta V_{GS}\,C_{ox}/(C_{ox} + C_d) = \Delta V_{GS}/\zeta$, and the current depends exponentially on that potential.

### Step 2 — Scaling of each parameter

- **Aspect ratio:** $W/L \to (W/\alpha)/(L/\alpha) = W/L$, unchanged.
- **Mobility:** ideally unchanged (in practice it falls somewhat, from more impurity scattering at the higher doping and more surface scattering at the higher vertical field).
- **Thermal voltage:** $V_T = kT/q \to V_T \approx 25.9$ mV at 300 K, unchanged, since temperature does not scale.
- **Voltages:** $V_{GS}$, $V_{TH}$, $V_{GS} - V_{TH}$ and $V_{DS}$ are all divided by $\alpha$.
- **Oxide capacitance:** $C_{ox} = \epsilon_{ox}/t_{ox} \to \alpha C_{ox}$.

**Fermi potential.** With $N_{sub} \to \alpha N_{sub}$,

$$\phi_B \to \frac{kT}{q}\ln\frac{\alpha N_{sub}}{n_i} = \phi_B + V_T\ln\alpha,$$

a small increase (18 mV for $\alpha = 2$); essentially constant.

**Depletion capacitance.**

$$C_d \to \sqrt{\frac{\epsilon_{si}q\,\alpha N_{sub}}{4(\phi_B + V_T\ln\alpha)}} \approx \sqrt\alpha\;C_d\quad\text{(slightly less than }\sqrt\alpha\text{)}.$$

It rises only by about $\sqrt\alpha$, not $\alpha$, because the surface potential at threshold ($2\phi_B$) does not scale: the depletion width $\sqrt{2\epsilon_{si}(2\phi_B)/(qN_{sub})}$ shrinks only by $\sqrt\alpha$. (If *all* depletion widths are assumed to scale ideally by $1/\alpha$, then $C_d \to \alpha C_d$.)

**Slope factor.**

$$\frac{C_d}{C_{ox}} \to \frac{\sqrt\alpha\,C_d}{\alpha\,C_{ox}} = \frac{1}{\sqrt\alpha}\cdot\frac{C_d}{C_{ox}}, \qquad \zeta = 1 + \frac{C_d}{C_{ox}} \to 1 + \frac{1}{\sqrt\alpha}\cdot\frac{C_d}{C_{ox}} ,$$

so $\zeta$ decreases somewhat toward 1 (with ideal depletion scaling, $C_d/C_{ox}$ and $\zeta$ stay constant).

**Drain factor.** $1 - \exp(-V_{DS}/V_T)$, with $V_{DS} \to V_{DS}/\alpha$ and $V_T$ fixed, exceeds 0.98 as long as $V_{DS}$ stays above roughly $4V_T \approx 100$ mV; once the scaled supply approaches a few $V_T$, it starts to depend on $V_{DS}$.

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

For $V_{DS} \gg V_T$ (drain factor 1),

$$\ln I_D = \ln\!\left(\mu C_d\frac{W}{L}V_T^2\right) + \frac{V_{GS} - V_{TH}}{\zeta V_T} \quad\Rightarrow\quad \frac{d\log_{10}I_D}{dV_{GS}} = \frac{1}{\zeta V_T\ln10},$$

so the gate-voltage change per decade of current is

$$S = \frac{dV_{GS}}{d\log_{10}I_D} = \zeta V_T\ln10 = 2.3\,\zeta\,\frac{kT}{q}.$$

At 300 K, $2.3\,kT/q = 2.3026 \times 25.9\ \mathrm{mV} = 59.5$ mV/dec, so $S \approx 60\zeta$ mV/dec, with a lower bound of about 60 mV/dec ($\zeta \ge 1$).

Under scaling, $kT/q$ is unchanged and $\zeta$ is unchanged or slightly smaller, so **$S$ does not scale**: it stays roughly constant (typically 60–100 mV/dec), at best improving slightly as $\zeta$ moves toward 1, while every other voltage shrinks by $\alpha$.

### Step 5 — Numerical illustration ($\alpha = 2$)

Take $N_{sub} = 10^{17}\ \mathrm{cm^{-3}}$ and an oxide chosen so that $\zeta = 1.5$ before scaling.

- Before: $\phi_B = 0.0259\ln(10^{17}/1.45\times10^{10}) = 0.407$ V, $C_d = 101\ \mathrm{nF/cm^2}$, $C_{ox} = 2C_d = 202\ \mathrm{nF/cm^2}$ ($t_{ox} \approx 17$ nm), $S = 1.5\times59.5 = 89$ mV/dec.
- After: $N_{sub} = 2\times10^{17}\ \mathrm{cm^{-3}}$, $\phi_B = 0.425$ V, $C_d = 140\ \mathrm{nF/cm^2}$ (×1.38, slightly less than $\sqrt2 = 1.41$), $C_{ox} = 404\ \mathrm{nF/cm^2}$, $\zeta = 1 + 140/404 = 1.35$, $S = 1.35\times59.5 = 80$ mV/dec.

The slope improved by only 10 %, while the supply and threshold were halved.

### Step 6 — Consequence: the off current

At $V_{GS} = 0$, $I_D \propto \exp[-V_{TH}/(\zeta V_T)]$. Dividing $V_{TH}$ by $\alpha$ while $\zeta V_T$ stays about the same raises the off current **exponentially**. For $V_{TH}$: 0.7 V → 0.35 V with $\zeta \approx 1.5$:

$$\frac{I_{off}'}{I_{off}} \approx \exp\!\left(\frac{0.35\ \mathrm{V}}{1.5\times0.0259\ \mathrm{V}}\right) = e^{9.0} \approx 8\times10^3 \approx 10^4 .$$

Equivalently, the number of decades between on and off current within $V_{TH}$, $V_{TH}/S$, falls by $\alpha$. This non-scalability of $S$ is what prevents $V_{TH}$, and with it the supply voltage, from being scaled freely.

### Result

Under ideal scaling, $W/L$, $\mu$ and $V_T = kT/q$ are unchanged; $V_{GS}$, $V_{TH}$, $V_{DS}$ are divided by $\alpha$; $C_{ox}$ rises by $\alpha$; $C_d$ rises by about $\sqrt\alpha$ (by $\alpha$ if depletion widths are assumed to scale ideally); $\zeta = 1 + C_d/C_{ox}$ stays the same or decreases slightly toward 1; the prefactor rises by about $\sqrt\alpha$; the drain factor stays ≈ 1 while $V_{DS} \gg V_T$.

The subthreshold slope

$$S = 2.3\,\zeta\,\frac{kT}{q} \approx 60\zeta\ \mathrm{mV/dec}$$

**does not scale** (at best it improves slightly), and it can never fall below about 60 mV/dec at room temperature. Since $V_{TH}$ is divided by $\alpha$, the subthreshold (off) current rises exponentially.

**Common mistake.** Assuming that the slope scales down by $\alpha$ like the other voltages. $S$ is set by $kT/q$ (and $\zeta \ge 1$), and temperature is not scaled.

**Common mistake.** Scaling $V_T$ along with the supply. Here $V_T = kT/q$ is the thermal voltage, fixed at a given temperature, not a device voltage.
