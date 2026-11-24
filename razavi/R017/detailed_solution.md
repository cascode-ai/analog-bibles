# Detailed solution - R017

**Approach:** Use the lower-potential output terminal as the electrical source. Apply the triode channel equation and load KCL at low input, then solve the saturation load equation for the constant output. Keep the load-dependent plateau distinct from its threshold-limited upper bound.

### 1. Terminal polarity and model

The input supplies the resistor through the channel, so $0\le V_{out}\le V_{in}$. In the symmetric long-channel model, the electrical source is the output even though the source-arrow symbol is drawn at the input. Both diffusion-to-bulk junctions are non-forward-biased because the bulk is grounded and both terminal voltages are nonnegative.

$$V_{GS}=2\ \mathrm{V}-V_{out},\qquad V_{DS}=V_{in}-V_{out},\qquad V_{SB}=V_{out}.$$

Use the body-effect law before substituting the data:

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{out}}-\sqrt{2|\phi_F|}\right),$$

with $V_{TH0}=0.7\ \mathrm{V}$, $\gamma=0.45\ \mathrm{V^{1/2}}$, and $2|\phi_F|=0.9\ \mathrm{V}$. Neglect channel-length modulation and gate current. Load KCL is $I_D=V_{out}/R_1$.

### 2. Low-input triode segment

The triode square law and output-node KCL give

$$\frac{V_{out}}{R_1}=I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right].$$

The condition $V_{DS}<V_{GS}-V_{TH}$ becomes $V_{in}<2\ \mathrm{V}-V_{TH}(V_{out})$. Thus

$$\frac{V_{out}}{R_1}=\beta\left[(2\ \mathrm{V}-V_{out}-V_{TH})(V_{in}-V_{out})-\frac{(V_{in}-V_{out})^2}{2}\right].$$

It starts at $V_{out}=0$ for $V_{in}=0$. When the drain-to-source voltage is small compared with overdrive, the channel is approximately $R_{on}=1/[\beta(2\ \mathrm{V}-V_{out}-V_{TH})]$, giving $V_{out}\approx V_{in}R_1/(R_1+R_{on})$. At the origin $V_{DS}=0$, so the differential terms multiplied by $V_{DS}$ vanish and

$$\frac{dV_{out}}{R_1}=\beta(2\,\mathrm V-V_{TH0})(dV_{in}-dV_{out}).$$

Rearrange to obtain the initial slope.

$$\left.\frac{dV_{out}}{dV_{in}}\right|_0=\frac{\beta R_1(2\ \mathrm{V}-V_{TH0})}{1+\beta R_1(2\ \mathrm{V}-V_{TH0})}.$$

This slope is below one and may be small. As output rises, the gate overdrive decreases and the threshold increases; the curve bends toward the plateau. Near the triode/saturation boundary the approximation by a linear channel resistor is insufficient, so use the full load equation.

### 3. Saturation plateau and transition

For $V_{in}\ge2\ \mathrm{V}-V_{TH}(V_{out})$, the saturation equation is

$$\frac{V_{out,s}}{R_1}=\frac{\beta}{2}[2\ \mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})]^2.$$

Use the positive overdrive root,

$$2\ \mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})=\sqrt{\frac{2V_{out,s}}{\beta R_1}}>0.$$

The right side is the overdrive needed to carry the load current. The equation contains no input voltage; the output is therefore constant under $\lambda=0$, beginning at

$$V_{in,s}=2\ \mathrm{V}-V_{TH}(V_{out,s}).$$

The two current expressions agree at the boundary. Their slope with respect to $V_{in}$ also goes to zero there, so the rising segment joins the plateau smoothly.

At the upper bound $2\,\mathrm V-V_{out}=V_{TH}(V_{out})$. Substitute $u=\sqrt{2|\phi_F|+V_{out}}$ to obtain

$$u^2+\gamma u=2\,\mathrm V+2|\phi_F|-V_{TH0}+\gamma\sqrt{2|\phi_F|},\qquad V_{out}=u^2-2|\phi_F|.$$

The positive root gives $V_{out}=1.0918\ \mathrm{V}$. This bound is approached only as $\beta R_1\to\infty$. For finite positive load and size, the plateau is lower, potentially much lower; as $\beta R_1\to0$, $V_{out,s}\to0$ and $V_{in,s}\to1.3\ \mathrm{V}$. Without body effect the upper bound would be 1.3 V.

### 4. Computed examples and transfer curves

The numerical solutions use the unrounded square-root threshold law:

| $\beta R_1$ (V⁻¹) | $V_{out,s}$ (V) | $V_{in,s}$ (V) |
|---|---|---|
| 1 | 0.3656 | 1.2207 |
| 10 | 0.7581 | 1.1475 |
| 100 | 0.9718 | 1.1112 |

For $\beta R_1=10\ \mathrm{V^{-1}}$, substituting $V_{out,s}=0.7581\ \mathrm{V}$ gives $V_{TH}=0.8525\ \mathrm{V}$ and overdrive $0.3894\ \mathrm{V}$. The normalized load equation then yields $\tfrac12(10\ \mathrm{V^{-1}})(0.3894\ \mathrm{V})^2\approx 0.7581\ \mathrm{V}$, confirming the plateau and its units.

![Output versus input voltage](/q/R017/solution-transfer.svg)

Finite curves use the full triode/saturation equations. The dashed limiting curve is $V_{out}=\min(V_{in},1.0918\ \mathrm{V})$ for $\beta R_1\to\infty$, not an additional finite device. Nonzero channel-length modulation would give the plateau a slope; its value cannot be computed from the supplied data.
