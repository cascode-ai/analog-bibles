# Detailed solution - R676

**Approach.** Lump the two degradation terms into one coefficient $\theta'$, so that $I_D = KV_{ov}^2/(1 + \theta'V_{ov})$. Differentiate with the quotient rule, factor out $I_D/V_{ov}$ and use $(2 + x)/(1 + x) = 1 + 1/(1 + x)$. The logarithmic derivative confirms the result.

### Step 1 — Simplify the notation

With $V_{ov} = V_{GS} - V_{TH}$ ($dV_{ov}/dV_{GS} = 1$), $K = \frac12\mu_0C_{ox}(W/L)$ and the constant effective degradation coefficient

$$\theta' = \frac{\mu_0}{2v_{sat}L} + \theta$$

(lateral-field plus vertical-field term), the drain current reads

$$I_D = K\,\frac{V_{ov}^2}{1 + \theta'V_{ov}} .$$

### Step 2 — Differentiate with the quotient rule

With $u = KV_{ov}^2$ ($u' = 2KV_{ov}$) and $w = 1 + \theta'V_{ov}$ ($w' = \theta'$):

$$
\begin{aligned}
g_m = \frac{\partial I_D}{\partial V_{GS}} &= \frac{2KV_{ov}\,(1 + \theta'V_{ov}) - KV_{ov}^2\,\theta'}{(1 + \theta'V_{ov})^2}\\
&= \frac{K\left(2V_{ov} + 2\theta'V_{ov}^2 - \theta'V_{ov}^2\right)}{(1 + \theta'V_{ov})^2}\\
&= \frac{K\,V_{ov}\,(2 + \theta'V_{ov})}{(1 + \theta'V_{ov})^2}.
\end{aligned}
$$

### Step 3 — Bring it to the required form

Splitting the denominator and multiplying and dividing by $V_{ov}$:

$$g_m = \underbrace{\frac{KV_{ov}^2}{1 + \theta'V_{ov}}}_{=\,I_D}\cdot\frac{1}{V_{ov}}\cdot\frac{2 + \theta'V_{ov}}{1 + \theta'V_{ov}} = \frac{I_D}{V_{ov}}\cdot\frac{2 + \theta'V_{ov}}{1 + \theta'V_{ov}} .$$

With

$$\frac{2 + x}{1 + x} = \frac{(1 + x) + 1}{1 + x} = 1 + \frac{1}{1 + x}, \qquad x = \theta'V_{ov},$$

$$g_m = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1 + \theta'V_{ov}}\right],$$

and restoring the original symbols,

$$\boxed{g_m = \frac{I_D}{V_{GS} - V_{TH}}\left[1 + \frac{1}{1 + \left(\dfrac{\mu_0}{2v_{sat}L} + \theta\right)(V_{GS} - V_{TH})}\right]}$$

which is the expression to be proved. $\blacksquare$

### Step 4 — Check by the logarithmic derivative

Since $g_m/I_D = \partial(\ln I_D)/\partial V_{GS}$ and

$$\ln I_D = \ln K + 2\ln V_{ov} - \ln(1 + \theta'V_{ov}),$$

$$
\begin{aligned}
\frac{g_m}{I_D} &= \frac{2}{V_{ov}} - \frac{\theta'}{1 + \theta'V_{ov}}\\
&= \frac{2(1 + \theta'V_{ov}) - \theta'V_{ov}}{V_{ov}(1 + \theta'V_{ov})}\\
&= \frac{2 + \theta'V_{ov}}{V_{ov}(1 + \theta'V_{ov})} = \frac{1}{V_{ov}}\left[1 + \frac{1}{1 + \theta'V_{ov}}\right],
\end{aligned}
$$

the same result: the square law contributes $2/V_{ov}$, and the mobility degradation subtracts $\theta'/(1 + \theta'V_{ov})$.

### Step 5 — Limiting cases

The bracket lies between 1 and 2, so always

$$\frac{I_D}{V_{ov}} < g_m \le \frac{2I_D}{V_{ov}} .$$

**Weak degradation** ($\theta'V_{ov} \ll 1$): the bracket tends to 2, so $g_m \to 2I_D/V_{ov} = \mu_0C_{ox}(W/L)V_{ov}$, the square-law result.

**Strong degradation** ($\theta'V_{ov} \gg 1$): the bracket tends to 1, so $g_m \to I_D/V_{ov}$; with $I_D \approx KV_{ov}^2/(\theta'V_{ov}) = KV_{ov}/\theta'$,

$$g_m \to \frac{K}{\theta'} = \frac{\mu_0C_{ox}W}{2\theta'L},$$

independent of the bias. If velocity saturation dominates ($\theta \ll \mu_0/(2v_{sat}L)$), $\theta' \approx \mu_0/(2v_{sat}L)$ and

$$g_m \to \frac{\mu_0C_{ox}W}{2L}\cdot\frac{2v_{sat}L}{\mu_0} = WC_{ox}v_{sat},$$

the transconductance of a fully velocity-saturated device ($I_D = WC_{ox}v_{sat}V_{ov}$).

**Numerical illustration.** With $\mu_0 = 400\ \mathrm{cm^2/(V\cdot s)}$, $v_{sat} = 10^7$ cm/s and $\theta = 0.5\ \mathrm{V^{-1}}$:

| $L$ | $\mu_0/(2v_{sat}L)$ | $\theta'$ | $V_{ov}$ | $\theta'V_{ov}$ | $g_mV_{ov}/I_D$ |
|---|---|---|---|---|---|
| 1 µm | 0.2 V⁻¹ | 0.7 V⁻¹ | 0.2 V | 0.14 | 1.88 |
| 0.1 µm | 2 V⁻¹ | 2.5 V⁻¹ | 0.2 V | 0.5 | 1.67 |
| 0.1 µm | 2 V⁻¹ | 2.5 V⁻¹ | 1.0 V | 2.5 | 1.29 |

For example, in the second row $\mu_0/(2v_{sat}L) = 0.04\ \mathrm{m^2/(V\,s)}/(2\times10^5\ \mathrm{m/s}\times10^{-7}\ \mathrm{m}) = 2\ \mathrm{V^{-1}}$, and the bracket is $1 + 1/1.5 = 1.67$. The shorter the channel and the larger the overdrive, the further $g_m$ falls below $2I_D/V_{ov}$.

### Result

With $\theta' = \mu_0/(2v_{sat}L) + \theta$ and $V_{ov} = V_{GS} - V_{TH}$, the quotient rule gives

$$g_m = \frac12\mu_0C_{ox}\frac{W}{L}\,\frac{V_{ov}(2 + \theta'V_{ov})}{(1 + \theta'V_{ov})^2} = \frac{I_D}{V_{ov}}\cdot\frac{2 + \theta'V_{ov}}{1 + \theta'V_{ov}} = \frac{I_D}{V_{GS} - V_{TH}}\left[1 + \frac{1}{1 + \left(\frac{\mu_0}{2v_{sat}L} + \theta\right)(V_{GS} - V_{TH})}\right].$$

$g_m$ lies between $I_D/V_{ov}$ and $2I_D/V_{ov}$: it approaches the square-law value for small $\theta'V_{ov}$ and $\mu_0C_{ox}W/(2\theta'L)$ (equal to $WC_{ox}v_{sat}$ when velocity saturation dominates) for large $\theta'V_{ov}$.

**Common mistake.** Differentiating only the numerator, as if the denominator were constant. That gives the square-law value $2I_D/V_{ov}$, and the bracket never appears.

**Common mistake.** Taking the derivative of the denominator as $\mu_0/(2v_{sat}L)$ alone, or $\theta$ alone. Both mechanisms are in the same denominator, so its derivative is the full $\theta'$.
