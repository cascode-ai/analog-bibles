# Detailed solution - R078

### Step 1 — Establish the bias and operating regions

With $V_{SB}=0$, $V_{TH}=V_{TH0}=0.7\ \mathrm V$. The overdrive $V_{ov}=V_{GS}-V_{TH}=0.5\ \mathrm V$ sets the triode/saturation boundary at $V_{DS}=V_{ov}$.

At fixed gate, source, and bulk voltages, changing $V_{DS}$ leaves $V_{ov}$ fixed. The device operates in triode below $V_{ov}$ and in saturation at and above it. The square-law current with no modulation, denoted $I_{D0}$, uses

$$\beta=\mu_nC_{ox}\frac WL=(134\ \mu\mathrm{A/V^2})\frac{50}{0.5}=13.4\ \mathrm{mA/V^2}.$$

$$I_{D0}=
\begin{cases}
\beta(V_{ov}V_{DS}-V_{DS}^2/2), & 0\le V_{DS}<V_{ov},\\
\tfrac12\beta V_{ov}^2, & V_{DS}\ge V_{ov}.
\end{cases}$$

### Step 2 — Compute the leading-order gain

Take the partial derivatives at the same DC bias. Write $r_{ds}=1/g_{ds}$ in triode and use $r_O$ for the same small-signal resistance in saturation.

$$g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}},\qquad
g_{ds}=\left.\frac{\partial I_D}{\partial V_{DS}}\right|_{V_{GS},V_{SB}},\qquad A=g_mr_{ds}=\frac{g_m}{g_{ds}}.$$

In triode, differentiate $I_{D0}$:

$$g_m=\beta V_{DS},\qquad g_{ds}=\beta(V_{ov}-V_{DS}).$$

For example, the point $V_{DS}=0.10\ \mathrm V$ lies below $V_{ov}$. Substitution gives

$$g_m=(13.4\ \mathrm{mA/V^2})(0.10\ \mathrm V)=1.34\ \mathrm{mS},\qquad
g_{ds}\simeq(13.4\ \mathrm{mA/V^2})(0.500\ \mathrm V-0.10\ \mathrm V)\simeq 5.36\ \mathrm{mS}.$$

Their ratio is 0.250 V/V. As $V_{DS}$ increases, the numerator rises and the denominator falls. This simplified triode formula has an asymptote at $V_{ov}$.

In saturation, use the leading-order transconductance and retain the output conductance from modulation:

$$g_m\simeq\beta V_{ov},\qquad g_{ds}\simeq\lambda I_{D0}=\tfrac12\lambda\beta V_{ov}^2.$$

With $V_{ov}\simeq 0.500\ \mathrm V$, the current scale $\tfrac12\beta V_{ov}^2$ is 1.675 mA, so $r_O=1/g_{ds}\simeq 5.97\ \mathrm{k}\Omega$. Dividing the small-signal parameters cancels $\beta$ and gives the dashed curve:

$$A_0(V_{DS})=
\begin{cases}
V_{DS}/(V_{ov}-V_{DS}), & 0\le V_{DS}<V_{ov},\\
2/(\lambda V_{ov})=40, & V_{ov}\le V_{DS}\le 3\ \mathrm V.
\end{cases}$$

### Step 3 — Retain the modulation factor in both regions

The solid curve assumes $I_D=I_{D0}(1+\lambda V_{DS})$ in both regions. This extension to triode specifies the model at the boundary. The product rule gives

$$g_m=(1+\lambda V_{DS})\frac{\partial I_{D0}}{\partial V_{GS}},\qquad
g_{ds}=(1+\lambda V_{DS})\frac{\partial I_{D0}}{\partial V_{DS}}+\lambda I_{D0}.$$

Using the two branches of $I_{D0}$ leads to

$$A(V_{DS})=
\begin{cases}
\dfrac{V_{DS}(1+\lambda V_{DS})}
{(V_{ov}-V_{DS})(1+\lambda V_{DS})+\lambda(V_{ov}V_{DS}-V_{DS}^2/2)}, & 0\le V_{DS}<V_{ov},\\[4pt]
\dfrac{2(1+\lambda V_{DS})}{\lambda V_{ov}}, & V_{ov}\le V_{DS}\le 3\ \mathrm V .
\end{cases}$$

At $V_{DS}=V_{ov}$ the triode term $(V_{ov}-V_{DS})(1+\lambda V_{DS})$ vanishes, leaving $\lambda V_{ov}^2/2$ in the denominator. Thus the left limit equals the saturation value 42 V/V. The slope changes to $2/V_{ov}$ on the saturation line, which gives 52 V/V at 3 V. At 0.10 V the full triode expression gives 0.247 V/V.

### Plot

![Intrinsic gain g_m r_ds versus V_DS](/q/R078/solution-intrinsic-gain.svg)

The dashed triode branch exits the plotted scale as it approaches its asymptote. The solid curve has a finite value and a change of slope at the boundary.
