# Detailed solution - R063

**Approach.** Fit the square-law model with channel-length modulation to the plotted curves. The slope and the extrapolated intercept of each saturated (straight) segment give $\lambda$; the square roots of the intercept currents are proportional to the overdrives, which reveals the equal $V_{GS}$ steps; the knee positions ($V_{DS,sat} = V_{GS} - V_{TH}$) fix the absolute overdrives; and the current level then gives $\beta = \mu_nC_{ox}W/L$, from which $\mu_n$ follows with the computed $C_{ox}$. The plot alone fixes overdrives, not $V_{GS}$, so $V_{TH}$ needs one extra assumption.

### Step 1 — The model to fit

In saturation, the square law with channel-length modulation is

$$I_D = \frac12\,\beta\,(V_{GS} - V_{TH})^2(1 + \lambda V_{DS}), \qquad \beta = \mu_nC_{ox}\frac{W}{L},$$

where $\mu_n$ is the electron mobility, $C_{ox}$ the oxide capacitance per unit area, $V_{TH}$ the threshold voltage and $\lambda$ the channel-length modulation coefficient. Each saturated segment is a **straight line** in $V_{DS}$ with

$$\text{intercept at } V_{DS} = 0:\ I_{D0} = \tfrac12\beta V_{ov}^2, \qquad \text{slope} = \lambda I_{D0},$$

where $V_{ov} = V_{GS} - V_{TH}$ is the overdrive. The **knee** (edge of saturation) of each curve lies at $V_{DS,sat} = V_{ov}$.

### Step 2 — Readings from the plot

Number the curves 1 (top) to 6 (bottom). Reading the knee (where the curve turns flat) and the current at $V_{DS} = 1$ V:

| Curve | Knee $V_{DS}$ (V) | $I_D$ at knee (mA) | $I_D$ at 1 V (mA) |
|---|---|---|---|
| 1 | 0.6 | 2.95 | 3.25 |
| 2 | 0.5 | 2.00 | 2.25 |
| 3 | 0.4 | 1.25 | 1.45 |
| 4 | 0.3 | 0.68 | 0.80 |
| 5 | 0.2 | 0.29 | 0.36 |
| 6 | 0.1 | 0.07 | 0.09 |

These readings carry an uncertainty of a few hundredths of a milliampere, so the results below are estimates.

### Step 3 — $\lambda$ from the saturated slopes

For curve 1, the slope between the knee and $V_{DS} = 1$ V is

$$\text{slope} = \frac{3.25 - 2.95\ \mathrm{mA}}{1.0 - 0.6\ \mathrm{V}} = \frac{0.30\ \mathrm{mA}}{0.4\ \mathrm{V}} = 0.75\ \mathrm{mA/V}.$$

Extrapolate the straight line back to $V_{DS} = 0$:

$$I_{D0} = 2.95\ \mathrm{mA} - (0.75\ \mathrm{mA/V})(0.6\ \mathrm{V}) = 2.95 - 0.45 = 2.50\ \mathrm{mA}.$$

Since slope $= \lambda I_{D0}$:

$$\lambda = \frac{\text{slope}}{I_{D0}} = \frac{0.75\ \mathrm{mA/V}}{2.50\ \mathrm{mA}} = 0.30\ \mathrm{V^{-1}}.$$

The same procedure for the other curves:

| Curve | Slope (mA/V) | $I_{D0}$ (mA) | $\lambda$ (V⁻¹) |
|---|---|---|---|
| 1 | 0.75 | 2.50 | 0.30 |
| 2 | 0.50 | 1.75 | 0.29 |
| 3 | 0.333 | 1.117 | 0.30 |
| 4 | 0.171 | 0.629 | 0.27 |
| 5 | 0.088 | 0.273 | 0.32 |

So $\lambda \approx 0.3\ \mathrm{V^{-1}}$. This large value is typical of a 40-nm channel: a small change in the pinch-off position is a large fraction of so short a channel.

### Step 4 — The $V_{GS}$ step

**Equal steps in overdrive.** From $I_{D0} = \tfrac12\beta V_{ov}^2$, $\sqrt{I_{D0}} = \sqrt{\beta/2}\,V_{ov}$ is proportional to the overdrive:

| Curve | 6 | 5 | 4 | 3 | 2 | 1 |
|---|---|---|---|---|---|---|
| $\sqrt{I_{D0}}$ ($\sqrt{\mathrm{mA}}$) | 0.260 | 0.522 | 0.793 | 1.057 | 1.323 | 1.581 |
| ratio to curve 6 | 1 | 2.0 | 3.0 | 4.1 | 5.1 | 6.1 |

The values grow in equal steps of about $0.264\ \sqrt{\mathrm{mA}}$ and are in the ratio 1 : 2 : 3 : 4 : 5 : 6. So the overdrives are $\Delta V, 2\Delta V, \dots, 6\Delta V$: the $V_{GS}$ steps are equal (as stated), and the **lowest curve's overdrive equals one step**.

**Absolute size from the knees.** The knees sit at $V_{DS,sat} = V_{ov} \approx 0.1, 0.2, 0.3, 0.4, 0.5, 0.6$ V. Hence

$$6\,\Delta V_{GS} = 0.6\ \mathrm{V} \quad\Longrightarrow\quad \Delta V_{GS} \approx 0.1\ \mathrm{V}.$$

**Independent check from the triode region.** Where two adjacent curves are both in triode, their difference is $\Delta I_D = \beta\,\Delta V_{GS}\,V_{DS}(1 + \lambda V_{DS})$, the same for every adjacent pair. At $V_{DS} = 0.2$ V the top curves read about 1.47 and 1.18 mA, so $\beta\Delta V_{GS} \approx 0.29\ \mathrm{mA}/(0.2\times1.06\ \mathrm{V}) = 1.37\ \mathrm{mA/V}$. Combined with $\sqrt{\beta/2}\,\Delta V_{GS} = 0.264\ \sqrt{\mathrm{mA}}$, i.e. $\tfrac12\beta\Delta V_{GS}^2 = 0.0697$ mA:

$$\Delta V_{GS} = \frac{2\times0.0697\ \mathrm{mA}}{1.37\ \mathrm{mA/V}} \approx 0.10\ \mathrm{V},$$

in agreement with the knees.

### Step 5 — $\beta = \mu_nC_{ox}W/L$

Use curve 1, with $V_{ov} = 0.6$ V and $I_{D0} = 2.50$ mA:

$$\beta = \frac{2I_{D0}}{V_{ov}^2} = \frac{2(2.50\ \mathrm{mA})}{(0.6\ \mathrm{V})^2} = \frac{5.0}{0.36}\ \mathrm{mA/V^2} = 13.9\ \mathrm{mA/V^2}.$$

Curve 3 gives $2(1.117)/0.16 = 14.0\ \mathrm{mA/V^2}$ and curve 4 gives $2(0.629)/0.09 = 14.0\ \mathrm{mA/V^2}$, so $\beta \approx 14\ \mathrm{mA/V^2}$.

**Check in triode** for curve 1 at $V_{DS} = 0.2$ V: $\beta[V_{ov}V_{DS} - V_{DS}^2/2](1 + \lambda V_{DS}) = 13.9[(0.6)(0.2) - 0.02](1.06) = 1.47$ mA, matching the plot.

### Step 6 — Oxide capacitance, aspect ratio and mobility

**Oxide capacitance per unit area** ($t_{ox} = 18\ \text{Å} = 1.8\times10^{-9}$ m):

$$C_{ox} = \frac{\epsilon_{ox}}{t_{ox}} = \frac{3.9\times8.854\times10^{-12}\ \mathrm{F/m}}{1.8\times10^{-9}\ \mathrm{m}} = 1.92\times10^{-2}\ \mathrm{F/m^2}\quad(= 19.2\ \mathrm{fF/\mu m^2}).$$

**Aspect ratio** (using the drawn dimensions, the only ones given):

$$\frac{W}{L} = \frac{5\ \mu\mathrm{m}}{0.04\ \mu\mathrm{m}} = 125 .$$

**Process transconductance:**

$$\mu_nC_{ox} = \frac{\beta}{W/L} = \frac{13.9\times10^{-3}\ \mathrm{A/V^2}}{125} = 1.11\times10^{-4}\ \mathrm{A/V^2} = 111\ \mu\mathrm{A/V^2}.$$

**Mobility:**

$$\mu_n = \frac{\mu_nC_{ox}}{C_{ox}} = \frac{1.11\times10^{-4}\ \mathrm{A/V^2}}{1.92\times10^{-2}\ \mathrm{F/m^2}} = 5.8\times10^{-3}\ \mathrm{m^2/(V\,s)} = 58\ \mathrm{cm^2/(V\,s)}.$$

(Units: $\mathrm{A/V^2}$ divided by $\mathrm{F/m^2} = \mathrm{A\,s/(V\,m^2)}$ gives $\mathrm{m^2/(V\,s)}$; and $1\ \mathrm{m^2} = 10^4\ \mathrm{cm^2}$.) This is far below the long-channel electron mobility of a few hundred cm²/(V·s): fitting a square law to a 40-nm device lumps velocity saturation and vertical-field mobility degradation into an "effective" mobility. Ignoring channel-length modulation and using the knee current of curve 1 (2.95 mA) instead of the intercept would give about 68 cm²/(V·s); the estimate lies in the range 55–70 cm²/(V·s) depending on how $\lambda$ is handled.

### Step 7 — The threshold voltage

The plot shows only $I_D$ versus $V_{DS}$; nothing on it gives the absolute $V_{GS}$ of any curve. What the data fix is the set of overdrives, 0.1 V for the lowest curve up to 0.6 V for the top one, so

$$V_{TH} = V_{GS,\text{lowest curve}} - 0.1\ \mathrm{V} = V_{GS,\text{top curve}} - 0.6\ \mathrm{V}.$$

The $V_{DS}$ axis ends at 1 V, which suggests a 1-V supply. Assuming the top curve corresponds to $V_{GS} = 1$ V, the curves are at $V_{GS} = 0.5, 0.6, \dots, 1.0$ V and

$$V_{TH} \approx 1.0 - 0.6 = 0.4\ \mathrm{V}.$$

### Result

- $V_{GS}$ step: $\approx 0.1$ V; the six curves have overdrives of about 0.1, 0.2, …, 0.6 V (knees at those $V_{DS}$, and $\sqrt{I_{D0}}$ in the ratio 1 : 2 : … : 6).
- $\lambda \approx 0.3\ \mathrm{V^{-1}}$ (slope/intercept of the saturated segments, e.g. 0.75 mA/V ÷ 2.50 mA).
- $\beta = \mu_nC_{ox}W/L \approx 14\ \mathrm{mA/V^2}$; with $C_{ox} = 19.2\ \mathrm{fF/\mu m^2}$ and $W/L = 125$: $\mu_nC_{ox} \approx 111\ \mu\mathrm{A/V^2}$ and $\mu_n \approx 58\ \mathrm{cm^2/(V\,s)}$ (about 55–70 depending on the treatment of $\lambda$).
- $V_{TH} = V_{GS,lowest} - 0.1$ V; with the top curve at $V_{GS} = 1$ V, $V_{TH} \approx 0.4$ V.

**Common mistake.** Taking the step as a spacing of currents, or reading $V_{TH}$ off the $V_{DS}$ axis. The $V_{GS}$ step is a step in *overdrive*, revealed by the knee positions and by $\sqrt{I_D}$; the $V_{DS}$ at which a curve starts or bends says nothing about $V_{TH}$ by itself.

**Common mistake.** Unit errors in $\mu_n$: e.g. using $C_{ox}$ in fF/µm² together with $\beta$ in A/V², or $L$ in µm against $W$ in nm. Work in SI units ($C_{ox} = 0.0192\ \mathrm{F/m^2}$, $W/L = 125$) and convert only at the end ($1\ \mathrm{m^2/(V\,s)} = 10^4\ \mathrm{cm^2/(V\,s)}$).

**Common mistake.** Estimating $\lambda$ as the slope alone or dividing by the wrong current, giving a result off by a large factor. $\lambda$ is the slope divided by the current extrapolated to $V_{DS} = 0$ (unit V⁻¹), about 0.3 V⁻¹ here.
