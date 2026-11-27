# Detailed solution - R063

**Approach:** Use the square-law model with channel-length modulation to estimate the device parameters from Fig. 1. The slope and extrapolated intercept of each saturated segment give $\lambda$. The knee positions give the overdrives and their spacing. The current scale gives $\beta$, which can be combined with $C_{ox}$ and $W/L$ to find $\mu_n$. An absolute gate voltage is needed to find $V_{TH}$.

### Step 1 — The model to fit

Define $V_{ov}=V_{GS}-V_{TH}>0$ and $\beta=\mu_nC_{ox}(W/L)$. The square-law model for $V_{DS}\ge 0$ is

$$
I_D=(1+\lambda V_{DS})\begin{cases}
\beta(V_{ov}V_{DS}-V_{DS}^2/2), & 0\le V_{DS}<V_{ov},\\
\tfrac12\beta V_{ov}^2, & V_{DS}\ge V_{ov}.
\end{cases}
$$

The first branch is the triode region and the second is saturation. At $V_{DS}=V_{ov}$ both give the same current, so the curve makes a smooth transition into its straight saturation segment. Write that segment as $I_D=I_{D0}+mV_{DS}$, with extrapolated intercept $I_{D0}=\tfrac12\beta V_{ov}^2$ and slope $m=\lambda I_{D0}$.

The auxiliary plot shows the fitted model. The readings in Step 2 come from the original Fig. 1.

![Square-law model fit](/q/R063/solution-01.svg)

### Step 2 — Readings from the plot

In the original Fig. 1, number the curves 1 (top) to 6 (bottom). Estimate each knee where the curve settles into its straight saturation segment and read the current there and at $V_{DS}=1$ V.

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

$$m = \frac{(3.25 - 2.95)\,\mathrm{mA}}{(1.0 - 0.6)\,\mathrm{V}} = \frac{0.30\ \mathrm{mA}}{0.4\ \mathrm{V}} = 0.75\ \mathrm{mA/V}.$$

Extrapolating the straight line back to $V_{DS} = 0$:

$$I_{D0} = 2.95\ \mathrm{mA} - (0.75\ \mathrm{mA/V})(0.6\ \mathrm{V}) = 2.95 - 0.45 = 2.50\ \mathrm{mA},$$

$$\lambda = \frac{m}{I_{D0}} = \frac{0.75\ \mathrm{mA/V}}{2.50\ \mathrm{mA}} = 0.30\ \mathrm{V^{-1}}.$$

The same procedure for the other curves:

| Curve | Slope (mA/V) | $I_{D0}$ (mA) | $\lambda$ (V⁻¹) |
|---|---|---|---|
| 1 | 0.75 | 2.50 | 0.30 |
| 2 | 0.50 | 1.75 | 0.29 |
| 3 | 0.333 | 1.117 | 0.30 |
| 4 | 0.171 | 0.629 | 0.27 |
| 5 | 0.088 | 0.273 | 0.32 |

For curve 6, the rounded readings give $I_{D0}\approx0.068$ mA. The current change is about 0.02 mA, comparable to the reading uncertainty, so use this intercept only for the spacing check.

Thus $\lambda \approx 0.3\ \mathrm{V^{-1}}$.

### Step 4 — The $V_{GS}$ step

Equal steps in overdrive: From $I_{D0} = \tfrac12\beta V_{ov}^2$, $\sqrt{I_{D0}} = \sqrt{\beta/2}\,V_{ov}$ is proportional to the overdrive:

| Curve | 6 | 5 | 4 | 3 | 2 | 1 |
|---|---|---|---|---|---|---|
| $\sqrt{I_{D0}}$ ($\sqrt{\mathrm{mA}}$) | 0.260 | 0.522 | 0.793 | 1.057 | 1.323 | 1.581 |
| ratio to curve 6 | 1 | 2.0 | 3.0 | 4.1 | 5.1 | 6.1 |

The values grow in equal steps of about $0.264\ \sqrt{\mathrm{mA}}$, in the ratio 1 : 2 : 3 : 4 : 5 : 6. So the overdrives are $\Delta V, 2\Delta V, \dots, 6\Delta V$: the $V_{GS}$ steps are equal (as stated), and the lowest curve's overdrive equals one step.

Absolute size from the knees: The knees sit at $V_{DS,sat} = V_{ov} \approx 0.1, 0.2, 0.3, 0.4, 0.5, 0.6$ V. Hence

$$6\,\Delta V_{GS} = 0.6\ \mathrm{V} \quad\Longrightarrow\quad \Delta V_{GS} \approx 0.1\ \mathrm{V}.$$

Independent check from the triode region: Where two adjacent curves are both in triode, their difference is $\Delta I_D = \beta\,\Delta V_{GS}\,V_{DS}(1 + \lambda V_{DS})$, the same for every adjacent pair. At $V_{DS} = 0.2$ V, the top two curves have overdrives of about 0.6 V and 0.5 V, so both are in triode. Their currents read about 1.47 and 1.18 mA, so $\beta\Delta V_{GS} \approx 0.29\ \mathrm{mA}/(0.2\times1.06\ \mathrm{V}) = 1.37\ \mathrm{mA/V}$. Combined with $\sqrt{\beta/2}\,\Delta V_{GS} = 0.264\ \sqrt{\mathrm{mA}}$, i.e. $\tfrac12\beta\Delta V_{GS}^2 = 0.0697$ mA:

$$\Delta V_{GS} = \frac{2\times0.0697\ \mathrm{mA}}{1.37\ \mathrm{mA/V}} \approx 0.10\ \mathrm{V},$$

in agreement with the knees.

### Step 5 — $\beta = \mu_nC_{ox}W/L$

From curve 1, with $V_{ov} = 0.6$ V and $I_{D0} = 2.50$ mA:

$$\beta = \frac{2I_{D0}}{V_{ov}^2} = \frac{2(2.50\ \mathrm{mA})}{(0.6\ \mathrm{V})^2} = \frac{5.0}{0.36}\ \mathrm{mA/V^2} = 13.9\ \mathrm{mA/V^2}.$$

Curve 3 gives $2(1.117)/0.16 = 14.0\ \mathrm{mA/V^2}$ and curve 4 gives $2(0.629)/0.09 = 14.0\ \mathrm{mA/V^2}$, so $\beta \approx 14\ \mathrm{mA/V^2}$.

Triode check: For curve 1 at $V_{DS} = 0.2$ V: $\beta[V_{ov}V_{DS} - V_{DS}^2/2](1 + \lambda V_{DS}) = 13.9[(0.6)(0.2) - 0.02](1.06) = 1.47$ mA, matching the plot.

### Step 6 — Oxide capacitance, aspect ratio and mobility

With $t_{ox} = 18\ \text{Å} = 1.8\times10^{-9}$ m and the drawn dimensions (the only ones given):

$$C_{ox} = \frac{\epsilon_{ox}}{t_{ox}} = \frac{3.9\times8.854\times10^{-12}\ \mathrm{F/m}}{1.8\times10^{-9}\ \mathrm{m}} = 1.92\times10^{-2}\ \mathrm{F/m^2}\quad(= 19.2\ \mathrm{fF/\mu m^2}),$$

$$\frac{W}{L} = \frac{5\ \mu\mathrm{m}}{0.04\ \mu\mathrm{m}} = 125 ,$$

$$\mu_nC_{ox} = \frac{\beta}{W/L} = \frac{13.9\times10^{-3}\ \mathrm{A/V^2}}{125} = 1.11\times10^{-4}\ \mathrm{A/V^2} = 111\ \mu\mathrm{A/V^2},$$

$$\mu_n = \frac{\mu_nC_{ox}}{C_{ox}} = \frac{1.11\times10^{-4}\ \mathrm{A/V^2}}{1.92\times10^{-2}\ \mathrm{F/m^2}} = 5.8\times10^{-3}\ \mathrm{m^2/(V\,s)} = 58\ \mathrm{cm^2/(V\,s)}.$$

(Units: $\mathrm{A/V^2}$ divided by $\mathrm{F/m^2} = \mathrm{A\,s/(V\,m^2)}$ gives $\mathrm{m^2/(V\,s)}$, and $1\ \mathrm{m^2} = 10^4\ \mathrm{cm^2}$.) This is far below the long-channel electron mobility of a few hundred cm²/(V·s): fitting a square law to a 40-nm device lumps velocity saturation and vertical-field mobility degradation into an "effective" mobility. Ignoring channel-length modulation and using the knee current of curve 1 (2.95 mA) instead of the intercept would give about 68 cm²/(V·s); the estimate lies in the range 55–70 cm²/(V·s) depending on how $\lambda$ is handled.

### Step 7 — The threshold voltage

Fig. 1 determines the overdrives, about 0.1 V for curve 6 and 0.6 V for curve 1. Let $V_{GS,1}$ and $V_{GS,6}$ denote the absolute gate-source voltages of the top and bottom curves, respectively. Then

$$V_{TH} = V_{GS,6} - 0.1\ \mathrm{V} = V_{GS,1} - 0.6\ \mathrm{V}.$$

If the top curve corresponds to $V_{GS} = 1$ V, the curves are at $V_{GS} = 0.5, 0.6, \dots, 1.0$ V and

$$V_{TH} \approx 1.0 - 0.6 = 0.4\ \mathrm{V}.$$

### Result

- $V_{GS}$ step: $\approx 0.1$ V; the six curves have overdrives of about 0.1, 0.2, …, 0.6 V (knees at those $V_{DS}$, and $\sqrt{I_{D0}}$ in the ratio 1 : 2 : … : 6).
- $\lambda \approx 0.3\ \mathrm{V^{-1}}$ (slope/intercept of the saturated segments, e.g. 0.75 mA/V ÷ 2.50 mA).
- $\beta = \mu_nC_{ox}W/L \approx 14\ \mathrm{mA/V^2}$; with $C_{ox} = 19.2\ \mathrm{fF/\mu m^2}$ and $W/L = 125$: $\mu_nC_{ox} \approx 111\ \mu\mathrm{A/V^2}$ and $\mu_n \approx 58\ \mathrm{cm^2/(V\,s)}$ (about 55–70 depending on the treatment of $\lambda$).
- $V_{TH} = V_{GS,6} - 0.1$ V; with the top curve at $V_{GS} = 1$ V, $V_{TH} \approx 0.4$ V.

**Common mistake:** Taking the step as a spacing of currents, or reading $V_{TH}$ off the $V_{DS}$ axis. The $V_{GS}$ step is a step in *overdrive*, revealed by the knee positions and by $\sqrt{I_D}$; the $V_{DS}$ at which a curve starts or bends says nothing about $V_{TH}$ by itself.

**Common mistake:** Unit errors in $\mu_n$, e.g. $C_{ox}$ in fF/µm² together with $\beta$ in A/V², or $L$ in µm against $W$ in nm. Work in SI units ($C_{ox} = 0.0192\ \mathrm{F/m^2}$, $W/L = 125$) and convert only at the end ($1\ \mathrm{m^2/(V\,s)} = 10^4\ \mathrm{cm^2/(V\,s)}$).

**Common mistake:** Estimating $\lambda$ as the slope alone, or dividing by the wrong current. $\lambda$ is the slope divided by the current extrapolated to $V_{DS} = 0$ (unit V⁻¹), about 0.3 V⁻¹ here.
