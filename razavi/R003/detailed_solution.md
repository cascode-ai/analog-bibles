# Detailed solution - R003

Express $g_m$ and $r_O$ in terms of current, then substitute the length dependence of $\lambda$. Use $I=|I_D|>0$ so the derivation applies to either polarity.

### Step 1 — Derive the gain from the saturation model

In strong inversion, with $V_{ov}=|V_{GS}|-|V_{TH}|>0$ and $|V_{DS}|\ge V_{ov}$, the leading square-law current is

$$
I=\tfrac12\beta V_{ov}^2,\quad \beta=\mu C_{ox}(W/L),\quad
V_{ov}=\sqrt{\frac{2I}{\beta}}.
$$
$$
g_m=\frac{\partial I}{\partial V_{ov}}=\beta V_{ov}=\sqrt{2\beta I}.
$$

Write the unmodulated current as $I_0=\tfrac12\beta V_{ov}^2$ and retain first-order CLM for the output conductance: differentiating $I_0(1+\lambda|V_{DS}|)$ at fixed gate bias gives $g_o=\lambda I_0$. With $\lambda|V_{DS}|\ll1$, $I_0\approx I$, hence

$$
g_o\approx\lambda I,\qquad r_O\approx\frac1{\lambda I},\qquad
g_mr_O\approx\frac{\sqrt{2\beta I}}{\lambda I}
=\frac1\lambda\sqrt{\frac{2\mu C_{ox}(W/L)}{I}}
=\frac2{\lambda V_{ov}}.
$$

For a given device, $g_m\propto\sqrt I$ while $r_O\propto1/I$, so the gain decreases as $I^{-1/2}$.

### Step 2 — Specify what stays fixed as length changes

Substituting the given length dependence yields

$$
\lambda=\lambda_0\frac{L_0}{L},\qquad
g_mr_O\approx\frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu C_{ox}W}{LI}}
=\frac{\sqrt{2\mu C_{ox}WL/I}}{\lambda_0L_0}.
$$

At fixed $W$, this gives $g_mr_O\propto\sqrt{L/I}$: doubling $L$ multiplies the gain by $\sqrt2$. At fixed aspect ratio $W/L$, instead,
$$
g_mr_O\approx\frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu C_{ox}(W/L)}{I}}\propto\frac L{\sqrt I},
$$
so doubling $L$ doubles the gain. Both families decrease with current; their length scaling differs because their widths differ.

### Step 3 — Numerical curves at fixed width

Choose $W=50\ \mu\mathrm m$, $\mu_nC_{ox}=134\ \mu\mathrm{A/V^2}$ and $\lambda_0=0.1\ \mathrm{V^{-1}}$ at $L_0=0.5\ \mu\mathrm m$. For $L=0.5\ \mu\mathrm m$, $I=0.5$ mA:

$$
\frac WL=100,\quad\lambda=0.1\ \mathrm{V^{-1}},\quad
 g_mr_O\approx\frac1{0.1\ \mathrm{V^{-1}}}
 \sqrt{\frac{2(134\ \mu\mathrm{A/V^2})(100)}{0.5\ \mathrm{mA}}}
 =(10\ \mathrm V)\sqrt{53.6\ \mathrm{V^{-2}}}=73.2.
$$

The other values follow from the same formula, or from the $\sqrt{L/I}$ scaling:

| $L$ (µm) | $W/L$ | $\lambda$ (V⁻¹) | Gain at 0.1 mA | At 0.5 mA | At 1 mA |
|---|---|---|---|---|---|
| 0.5 | 100 | 0.100 | 164 | 73.2 | 51.8 |
| 1 | 50 | 0.050 | 232 | 104 | 73.2 |
| 2 | 25 | 0.025 | 327 | 146 | 104 |

![Intrinsic gain curves at fixed width, with the 0.5 mA values marked](/q/R003/solution-curves.svg)

The plotted interval is 0.05–2 mA, with saturation maintained. There is no finite-current break point in this model. Do not extend the curves to $I=0$: the strong-inversion square law ceases to apply in subthreshold, so the mathematical divergence does not predict infinite physical gain.
