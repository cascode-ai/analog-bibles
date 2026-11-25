# Detailed solution - R018

**Approach:** Identify the output as the source, apply the complete triode load equation at low input, then find the saturation plateau and its body-effect upper limit. Because $R_1$ and transistor size are unspecified, keep the dependence on $\beta R_1$.

### 1. Source voltage, body effect, and load

Current flows from $V_{in}$ through $M_1$ into $R_1$, so $0\le V_{out}\le V_{in}$. The lower-potential output is the source. Both diffusion-to-bulk junctions are non-forward-biased because the bulk is grounded.

$$V_{GS}=3\ \mathrm{V}-V_{out},\qquad V_{DS}=V_{in}-V_{out},\qquad V_{SB}=V_{out}.$$

The threshold law is

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{out}}-\sqrt{2|\phi_F|}\right),$$

with $V_{TH0}=0.7\ \mathrm{V}$, $\gamma=0.45\ \mathrm{V^{1/2}}$, and $2|\phi_F|=0.9\ \mathrm{V}$. Neglect gate current and channel-length modulation. At the output, $I_D=V_{out}/R_1$.

### 2. Triode segment and initial slope

The triode square law and output-node KCL give

$$\frac{V_{out}}{R_1}=I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right].$$

The condition $V_{DS}<V_{GS}-V_{TH}$ reduces to $V_{in}<3\ \mathrm{V}-V_{TH}(V_{out})$. Using the complete triode current,

$$\frac{V_{out}}{R_1}=\beta\left[(3\ \mathrm{V}-V_{out}-V_{TH})(V_{in}-V_{out})-\frac{(V_{in}-V_{out})^2}{2}\right].$$

At the origin $V_{out}=0$. For $V_{DS}\ll V_{GS}-V_{TH}$, $R_{on}\approx[\beta(3\ \mathrm{V}-V_{out}-V_{TH})]^{-1}$ and $V_{out}\approx V_{in}R_1/(R_1+R_{on})$. Differentiating at the origin gives

$$\left.\frac{dV_{out}}{dV_{in}}\right|_0=\frac{\beta R_1(3\ \mathrm{V}-V_{TH0})}{1+\beta R_1(3\ \mathrm{V}-V_{TH0})}.$$

It is close to one only for large $\beta R_1(2.3\ \mathrm{V})$. As output rises, its overdrive falls and its threshold rises; the output remains below input and bends toward a plateau. Use the full equation near the boundary, where the small-$V_{DS}$ resistor approximation fails.

### 3. Saturation plateau and upper limit

For $V_{in}\ge3\ \mathrm{V}-V_{TH}(V_{out})$, load KCL gives

$$\frac{V_{out,s}}{R_1}=\frac{\beta}{2}[3\ \mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})]^2.$$

Choose the root with positive overdrive:

$$3\ \mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})=\sqrt{\frac{2V_{out,s}}{\beta R_1}}>0.$$

Since no $V_{in}$ remains, this is a constant output under $\lambda=0$. The boundary is $V_{in,s}=3\ \mathrm{V}-V_{TH}(V_{out,s})$. At that point the two region equations and their first slopes agree; the slope of the finite-parameter curve tends to zero, rather than forming a sharp corner.

Only as $\beta R_1\to\infty$ does the required overdrive tend to zero. The upper limit then satisfies

$$3\ \mathrm{V}-V_{out}=0.7\ \mathrm{V}+(0.45\ \mathrm{V^{1/2}})\left[\sqrt{0.9\ \mathrm{V}+V_{out}}-\sqrt{0.9\ \mathrm{V}}\right].$$

Set $u=\sqrt{2|\phi_F|+V_{out}}$ and rearrange the upper-limit equation.

$$u^2+\gamma u=3\,\mathrm V+2|\phi_F|-V_{TH0}+\gamma\sqrt{2|\phi_F|},\qquad V_{out}=u^2-2|\phi_F|.$$

The positive root gives $V_{out}\approx 1.9652\ \mathrm{V}$, with $V_{TH}\approx 1.0348\ \mathrm{V}$. Every finite plateau lies below this limiting solution. As $\beta R_1\to0$, the plateau tends to zero and the boundary tends to $3\ \mathrm{V}-V_{TH0}=2.3\ \mathrm{V}$. Without body effect the upper plateau limit would itself be 2.3 V.

### 4. Numerical values and sketch

Unrounded threshold values give:

| $\beta R_1$ (V⁻¹) | $V_{out,s}$ (V) | $V_{TH}$ (V) | $V_{in,s}$ (V) |
|---|---|---|---|
| 1 | 0.8385 | 0.8664 | 2.1336 |
| 10 | 1.4865 | 0.9683 | 2.0317 |
| 100 | 1.7981 | 1.0123 | 1.9877 |

For $\beta R_1=10\ \mathrm{V^{-1}}$, $V_{out,s}=1.4865\ \mathrm{V}$ gives $V_{TH}=0.9683\ \mathrm{V}$ and overdrive $0.5452\ \mathrm{V}$. Thus $\tfrac12(10\ \mathrm{V^{-1}})(0.5452\ \mathrm{V})^2\approx 1.4865\ \mathrm{V}$, and $V_{in,s}=2.0317\ \mathrm{V}$.

![Output versus input voltage](/q/R018/solution-transfer.svg)

The dashed limiting trace $V_{out}=\min(V_{in},1.9652\ \mathrm{V})$ has an ideal corner; the finite-size curves do not. All curves remain below the input and reach their plateau before the sweep ends at 3 V. Nonzero channel-length modulation would make the plateau slope nonzero; no such parameter is supplied.
