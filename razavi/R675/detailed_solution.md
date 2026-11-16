# Detailed solution - R675

**Approach.** Differentiate $I_D$ with respect to $V_{GS}$; because the effective mobility depends on the overdrive, the denominator $1 + \theta(V_{GS} - V_{TH})$ must be differentiated too (quotient rule). Then expand the result for $\theta V_{ov} \ll 1$ and $\theta V_{ov} \gg 1$.

### Step 1 — Set up the expression

With $V_{ov} = V_{GS} - V_{TH}$ ($dV_{ov}/dV_{GS} = 1$) and

$$K = \frac12\,\mu_0C_{ox}\,\frac{W}{L},$$

the drain current is

$$I_D = K\,\frac{V_{ov}^2}{1 + \theta V_{ov}} .$$

Raising $V_{GS}$ adds channel charge but, through the stronger vertical field, also lowers its mobility.

### Step 2 — Differentiate (quotient rule)

With $u = KV_{ov}^2$ ($u' = 2KV_{ov}$) and $w = 1 + \theta V_{ov}$ ($w' = \theta$):

$$
\begin{aligned}
g_m = \frac{\partial I_D}{\partial V_{GS}} &= \frac{2KV_{ov}\,(1 + \theta V_{ov}) - KV_{ov}^2\,\theta}{(1 + \theta V_{ov})^2}\\
&= \frac{K\left(2V_{ov} + 2\theta V_{ov}^2 - \theta V_{ov}^2\right)}{(1 + \theta V_{ov})^2}\\
&= \frac{K\left(2V_{ov} + \theta V_{ov}^2\right)}{(1 + \theta V_{ov})^2}\\
&= \frac12\,\mu_0C_{ox}\,\frac{W}{L}\cdot\frac{V_{ov}\,(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2}.
\end{aligned}
$$

### Step 3 — Two equivalent forms

**Form 2.** Since $(1 + \theta V_{ov})^2 - 1 = 2\theta V_{ov} + \theta^2V_{ov}^2 = \theta V_{ov}(2 + \theta V_{ov})$,

$$\frac{V_{ov}(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2} = \frac{1}{\theta}\cdot\frac{(1 + \theta V_{ov})^2 - 1}{(1 + \theta V_{ov})^2} = \frac{1}{\theta}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right],$$

so

$$g_m = \frac{\mu_0C_{ox}W}{2\theta L}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right]:$$

$g_m$ increases monotonically with $V_{ov}$ and approaches a ceiling.

**Form 3.** Factoring out $I_D/V_{ov} = KV_{ov}/(1 + \theta V_{ov})$ and using $(2 + \theta V_{ov})/(1 + \theta V_{ov}) = 1 + 1/(1 + \theta V_{ov})$:

$$g_m = \frac{KV_{ov}}{1 + \theta V_{ov}}\cdot\frac{2 + \theta V_{ov}}{1 + \theta V_{ov}} = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1 + \theta V_{ov}}\right].$$

So $g_m/I_D$ lies between $2/V_{ov}$ (no degradation) and $1/V_{ov}$ (strong degradation).

### Step 4 — Very small overdrive ($\theta V_{ov} \ll 1$)

To first order, with $1/(1 + \epsilon)^2 \approx 1 - 2\epsilon$:

$$
\begin{aligned}
g_m &= KV_{ov}\,(2 + \theta V_{ov})\,(1 + \theta V_{ov})^{-2}\\
&\approx KV_{ov}\,(2 + \theta V_{ov})\,(1 - 2\theta V_{ov})\\
&\approx KV_{ov}\,(2 - 4\theta V_{ov} + \theta V_{ov})\\
&= 2KV_{ov}\left(1 - \tfrac32\,\theta V_{ov}\right)\\
&= \mu_0C_{ox}\,\frac{W}{L}\,V_{ov}\left(1 - \tfrac32\,\theta V_{ov}\right).
\end{aligned}
$$

As $\theta V_{ov} \to 0$, $g_m \to \mu_0C_{ox}(W/L)V_{ov} = 2I_D/V_{ov}$: the **square-law result**, slightly reduced by the first-order correction, since the vertical field is weak.

### Step 5 — Very large overdrive ($\theta V_{ov} \gg 1$)

With $1 + \theta V_{ov} \approx \theta V_{ov}$,

$$I_D \approx K\,\frac{V_{ov}^2}{\theta V_{ov}} = \frac{\mu_0C_{ox}W}{2\theta L}\,V_{ov},$$

**linear** in the overdrive. In Form 2, $1/(1 + \theta V_{ov})^2 \to 0$, so

$$g_m \to \frac{\mu_0C_{ox}W}{2\theta L} = \frac{I_D}{V_{ov}},$$

a **constant**, independent of the overdrive and the bias current: more $V_{GS}$ (and current) no longer buys transconductance, because the extra charge is cancelled by the lower mobility, much as with velocity saturation.

### Step 6 — Numerical illustration

Take $\mu_0C_{ox}(W/L) = 2\ \mathrm{mA/V^2}$ ($K = 1\ \mathrm{mA/V^2}$) and $\theta = 1\ \mathrm{V^{-1}}$; the ceiling is $\mu_0C_{ox}W/(2\theta L) = 1$ mS.

| $V_{ov}$ (V) | $I_D$ (mA) | $g_m$ (mS) | square-law $g_m$ (mS) | $g_m/I_D$ (V⁻¹) | $2/V_{ov}$ |
|---|---|---|---|---|---|
| 0.1 | 0.0091 | 0.174 | 0.2 | 19.1 | 20 |
| 0.2 | 0.033 | 0.306 | 0.4 | 9.2 | 10 |
| 0.5 | 0.167 | 0.556 | 1.0 | 3.3 | 4 |
| 1 | 0.50 | 0.750 | 2.0 | 1.5 | 2 |
| 2 | 1.33 | 0.889 | 4.0 | 0.67 | 1 |
| 5 | 4.17 | 0.972 | 10 | 0.23 | 0.4 |

For example, at $V_{ov} = 1$ V: $g_m = K V_{ov}(2 + 1)/(1 + 1)^2 = (1\ \mathrm{mA/V^2})(1\ \mathrm{V})(3/4) = 0.75$ mS. At small $V_{ov}$ the result tracks the square law; at large $V_{ov}$ it saturates at 1 mS while the square law keeps growing.

### Result

$$g_m = \frac12\,\mu_0C_{ox}\,\frac{W}{L}\,\frac{V_{ov}(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2} = \frac{\mu_0C_{ox}W}{2\theta L}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right] = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1 + \theta V_{ov}}\right],\qquad V_{ov} = V_{GS} - V_{TH}.$$

- **Very small overdrive** ($\theta V_{ov} \ll 1$): $g_m \approx \mu_0C_{ox}(W/L)V_{ov}(1 - \frac32\theta V_{ov}) \to \mu_0C_{ox}(W/L)(V_{GS} - V_{TH})$, the square-law value.
- **Very large overdrive** ($\theta V_{ov} \gg 1$): $I_D \approx \mu_0C_{ox}WV_{ov}/(2\theta L)$ becomes linear in $V_{ov}$, and $g_m \to \mu_0C_{ox}W/(2\theta L)$, a constant independent of bias.
- $g_m$ rises monotonically but saturates, and $g_m/I_D$ falls from $2/V_{ov}$ toward $1/V_{ov}$.

**Common mistake.** Treating $1 + \theta V_{ov}$ as a constant when differentiating, which gives $g_m = \mu_0C_{ox}(W/L)V_{ov}/(1 + \theta V_{ov})$ and a large-overdrive limit of $\mu_0C_{ox}W/(\theta L)$, twice the correct value.

**Common mistake.** Concluding that $g_m$ eventually falls with overdrive because the mobility keeps dropping. The charge still grows linearly with $V_{ov}$, so the current becomes linear in $V_{ov}$ and $g_m$ tends to a nonzero constant.
