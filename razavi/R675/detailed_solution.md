# Detailed solution - R675

**Approach.** The transconductance is $g_m = \partial I_D/\partial V_{GS}$ at constant $V_{DS}$. Because the effective mobility itself depends on the overdrive, the denominator $1 + \theta(V_{GS} - V_{TH})$ must be differentiated too, so the quotient rule is needed. Then expand the result for $\theta V_{ov} \ll 1$ and $\theta V_{ov} \gg 1$.

### Step 1 — Set up the expression

Define the overdrive $V_{ov} = V_{GS} - V_{TH}$ (note $dV_{ov}/dV_{GS} = 1$, since $V_{TH}$ does not depend on $V_{GS}$) and the constant

$$K = \frac12\,\mu_0C_{ox}\,\frac{W}{L},$$

where $\mu_0$ is the low-field mobility and $C_{ox}$ the gate-oxide capacitance per unit area. The drain current is

$$I_D = K\,\frac{V_{ov}^2}{1 + \theta V_{ov}} .$$

**Why the denominator appears.** A larger overdrive means a larger vertical field, which pushes the carriers against the Si–SiO₂ interface, where surface scattering lowers their mobility: $\mu_{eff} = \mu_0/(1 + \theta V_{ov})$. So raising $V_{GS}$ adds charge but slows it down.

### Step 2 — Differentiate (quotient rule)

For $I_D = u/w$ with $u = KV_{ov}^2$ and $w = 1 + \theta V_{ov}$:

$$\frac{du}{dV_{ov}} = 2KV_{ov}, \qquad \frac{dw}{dV_{ov}} = \theta .$$

The quotient rule, $(u/w)' = (u'w - uw')/w^2$, gives

$$
\begin{aligned}
g_m = \frac{\partial I_D}{\partial V_{GS}} &= \frac{2KV_{ov}\,(1 + \theta V_{ov}) - KV_{ov}^2\,\theta}{(1 + \theta V_{ov})^2}\\
&= \frac{K\left(2V_{ov} + 2\theta V_{ov}^2 - \theta V_{ov}^2\right)}{(1 + \theta V_{ov})^2}\\
&= \frac{K\left(2V_{ov} + \theta V_{ov}^2\right)}{(1 + \theta V_{ov})^2}\\
&= \frac12\,\mu_0C_{ox}\,\frac{W}{L}\cdot\frac{V_{ov}\,(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2}.
\end{aligned}
$$

### Step 3 — Two equivalent forms

**Form 2.** Note that $(1 + \theta V_{ov})^2 - 1 = 2\theta V_{ov} + \theta^2V_{ov}^2 = \theta V_{ov}(2 + \theta V_{ov})$. Hence

$$\frac{V_{ov}(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2} = \frac{1}{\theta}\cdot\frac{(1 + \theta V_{ov})^2 - 1}{(1 + \theta V_{ov})^2} = \frac{1}{\theta}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right],$$

and

$$g_m = \frac{\mu_0C_{ox}W}{2\theta L}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right].$$

This form shows at once that $g_m$ increases monotonically with $V_{ov}$ and approaches a ceiling.

**Form 3.** Factor out $I_D/V_{ov} = KV_{ov}/(1 + \theta V_{ov})$:

$$g_m = \frac{KV_{ov}}{1 + \theta V_{ov}}\cdot\frac{2 + \theta V_{ov}}{1 + \theta V_{ov}} = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1 + \theta V_{ov}}\right],$$

using $(2 + \theta V_{ov})/(1 + \theta V_{ov}) = 1 + 1/(1 + \theta V_{ov})$. So $g_m/I_D$ lies between $2/V_{ov}$ (no degradation) and $1/V_{ov}$ (strong degradation).

### Step 4 — Very small overdrive ($\theta V_{ov} \ll 1$)

Expand to first order in $\theta V_{ov}$, using $1/(1 + \epsilon)^2 \approx 1 - 2\epsilon$:

$$
\begin{aligned}
g_m &= KV_{ov}\,(2 + \theta V_{ov})\,(1 + \theta V_{ov})^{-2}\\
&\approx KV_{ov}\,(2 + \theta V_{ov})\,(1 - 2\theta V_{ov})\\
&\approx KV_{ov}\,(2 - 4\theta V_{ov} + \theta V_{ov})\\
&= 2KV_{ov}\left(1 - \tfrac32\,\theta V_{ov}\right)\\
&= \mu_0C_{ox}\,\frac{W}{L}\,V_{ov}\left(1 - \tfrac32\,\theta V_{ov}\right).
\end{aligned}
$$

As $\theta V_{ov} \to 0$, $g_m \to \mu_0C_{ox}(W/L)V_{ov} = 2I_D/V_{ov}$: the **ordinary square-law result**, slightly reduced by the first-order correction. The mobility degradation is negligible because the vertical field is weak.

### Step 5 — Very large overdrive ($\theta V_{ov} \gg 1$)

The current first: $1 + \theta V_{ov} \approx \theta V_{ov}$, so

$$I_D \approx K\,\frac{V_{ov}^2}{\theta V_{ov}} = \frac{\mu_0C_{ox}W}{2\theta L}\,V_{ov},$$

which is **linear** in the overdrive instead of quadratic. In Form 2, $1/(1 + \theta V_{ov})^2 \to 0$, so

$$g_m \to \frac{\mu_0C_{ox}W}{2\theta L} = \frac{I_D}{V_{ov}},$$

a **constant**, independent of the overdrive and of the bias current. Increasing $V_{GS}$ (and the current) no longer buys any transconductance: the extra charge is cancelled by the lower mobility. This resembles the effect of velocity saturation.

### Step 6 — Numerical illustration

Take $\mu_0C_{ox}(W/L) = 2\ \mathrm{mA/V^2}$ (so $K = 1\ \mathrm{mA/V^2}$) and $\theta = 1\ \mathrm{V^{-1}}$. The ceiling is $\mu_0C_{ox}W/(2\theta L) = 1$ mS.

| $V_{ov}$ (V) | $I_D$ (mA) | $g_m$ (mS) | square-law $g_m$ (mS) | $g_m/I_D$ (V⁻¹) | $2/V_{ov}$ |
|---|---|---|---|---|---|
| 0.1 | 0.0091 | 0.174 | 0.2 | 19.1 | 20 |
| 0.2 | 0.033 | 0.306 | 0.4 | 9.2 | 10 |
| 0.5 | 0.167 | 0.556 | 1.0 | 3.3 | 4 |
| 1 | 0.50 | 0.750 | 2.0 | 1.5 | 2 |
| 2 | 1.33 | 0.889 | 4.0 | 0.67 | 1 |
| 5 | 4.17 | 0.972 | 10 | 0.23 | 0.4 |

For example, at $V_{ov} = 1$ V: $g_m = K V_{ov}(2 + 1)/(1 + 1)^2 = (1\ \mathrm{mA/V^2})(1\ \mathrm{V})(3/4) = 0.75$ mS. At small $V_{ov}$ the result tracks the square law; at large $V_{ov}$ it saturates at 1 mS while the square law would keep growing.

### Result

$$g_m = \frac12\,\mu_0C_{ox}\,\frac{W}{L}\,\frac{V_{ov}(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2} = \frac{\mu_0C_{ox}W}{2\theta L}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right] = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1 + \theta V_{ov}}\right],\qquad V_{ov} = V_{GS} - V_{TH}.$$

- **Very small overdrive** ($\theta V_{ov} \ll 1$): $g_m \approx \mu_0C_{ox}(W/L)V_{ov}(1 - \frac32\theta V_{ov}) \to \mu_0C_{ox}(W/L)(V_{GS} - V_{TH})$, the square-law value.
- **Very large overdrive** ($\theta V_{ov} \gg 1$): $I_D \approx \mu_0C_{ox}WV_{ov}/(2\theta L)$ becomes linear in $V_{ov}$, and $g_m \to \mu_0C_{ox}W/(2\theta L)$, a constant independent of bias.
- $g_m$ rises monotonically but saturates, and $g_m/I_D$ falls from $2/V_{ov}$ toward $1/V_{ov}$.

**Common mistake.** Treating $1 + \theta V_{ov}$ as a constant when differentiating, which gives $g_m = \mu_0C_{ox}(W/L)V_{ov}/(1 + \theta V_{ov})$ and a large-overdrive limit of $\mu_0C_{ox}W/(\theta L)$, twice the correct value. The mobility depends on $V_{GS}$, so its derivative contributes the $-\theta V_{ov}^2$ term.

**Common mistake.** Concluding that $g_m$ eventually falls to zero or decreases with overdrive because the mobility keeps dropping. The charge still grows linearly with $V_{ov}$; the product with the falling mobility gives a current linear in $V_{ov}$, so $g_m$ tends to a nonzero constant.
