# Detailed solution - R676

**Approach.** Lump the two degradation terms into one effective coefficient $\theta'$, so the current has the form $KV_{ov}^2/(1 + \theta'V_{ov})$. Differentiate with the quotient rule (both numerator and denominator depend on $V_{GS}$), then factor out $I_D/V_{ov}$ and use the identity $(2 + x)/(1 + x) = 1 + 1/(1 + x)$. A second, shorter route via the logarithmic derivative confirms the result.

### Step 1 — Simplify the notation

Define:

- the overdrive $V_{ov} = V_{GS} - V_{TH}$, with $dV_{ov}/dV_{GS} = 1$ (the threshold does not depend on $V_{GS}$);
- the constant $K = \frac12\mu_0C_{ox}(W/L)$, where $\mu_0$ is the low-field mobility and $C_{ox}$ the oxide capacitance per unit area;
- the effective degradation coefficient
$$\theta' = \frac{\mu_0}{2v_{sat}L} + \theta ,$$
which combines the lateral-field term (velocity saturation, $v_{sat}$: saturated carrier velocity) and the vertical-field term $\theta$. It is a constant for a given device.

The drain current then reads

$$I_D = K\,\frac{V_{ov}^2}{1 + \theta'V_{ov}} .$$

**Physical meaning.** Both effects reduce the effective mobility as the overdrive grows: a larger $V_{GS}$ adds channel charge, but that charge moves more slowly, because it is pressed against the surface (vertical field) and because the lateral field pushes the carriers toward their velocity limit.

### Step 2 — Differentiate with the quotient rule

Write $I_D = u/w$ with

$$u = KV_{ov}^2,\quad \frac{du}{dV_{ov}} = 2KV_{ov}; \qquad w = 1 + \theta'V_{ov},\quad \frac{dw}{dV_{ov}} = \theta' .$$

The quotient rule, $(u/w)' = (u'w - uw')/w^2$, gives the transconductance:

$$
\begin{aligned}
g_m = \frac{\partial I_D}{\partial V_{GS}} &= \frac{2KV_{ov}\,(1 + \theta'V_{ov}) - KV_{ov}^2\,\theta'}{(1 + \theta'V_{ov})^2}\\
&= \frac{K\left(2V_{ov} + 2\theta'V_{ov}^2 - \theta'V_{ov}^2\right)}{(1 + \theta'V_{ov})^2}\\
&= \frac{K\,V_{ov}\,(2 + \theta'V_{ov})}{(1 + \theta'V_{ov})^2}.
\end{aligned}
$$

### Step 3 — Bring it to the required form

Split the denominator as $(1 + \theta'V_{ov})\cdot(1 + \theta'V_{ov})$ and multiply and divide by $V_{ov}$:

$$g_m = \underbrace{\frac{KV_{ov}^2}{1 + \theta'V_{ov}}}_{=\,I_D}\cdot\frac{1}{V_{ov}}\cdot\frac{2 + \theta'V_{ov}}{1 + \theta'V_{ov}} = \frac{I_D}{V_{ov}}\cdot\frac{2 + \theta'V_{ov}}{1 + \theta'V_{ov}} .$$

Now use the identity, valid for any $x \ne -1$,

$$\frac{2 + x}{1 + x} = \frac{(1 + x) + 1}{1 + x} = 1 + \frac{1}{1 + x},$$

with $x = \theta'V_{ov}$:

$$g_m = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1 + \theta'V_{ov}}\right].$$

Restoring the original symbols:

$$\boxed{g_m = \frac{I_D}{V_{GS} - V_{TH}}\left[1 + \frac{1}{1 + \left(\dfrac{\mu_0}{2v_{sat}L} + \theta\right)(V_{GS} - V_{TH})}\right]}$$

which is the expression to be proved. $\blacksquare$

### Step 4 — Check by the logarithmic derivative

Since $g_m/I_D = \partial(\ln I_D)/\partial V_{GS}$, take the logarithm of the current:

$$\ln I_D = \ln K + 2\ln V_{ov} - \ln(1 + \theta'V_{ov}).$$

Differentiate term by term:

$$
\begin{aligned}
\frac{g_m}{I_D} &= \frac{2}{V_{ov}} - \frac{\theta'}{1 + \theta'V_{ov}}\\
&= \frac{2(1 + \theta'V_{ov}) - \theta'V_{ov}}{V_{ov}(1 + \theta'V_{ov})}\\
&= \frac{2 + \theta'V_{ov}}{V_{ov}(1 + \theta'V_{ov})} = \frac{1}{V_{ov}}\left[1 + \frac{1}{1 + \theta'V_{ov}}\right].
\end{aligned}
$$

The same result. This route also shows the physics: the square law contributes $2/V_{ov}$, and the mobility degradation subtracts $\theta'/(1 + \theta'V_{ov})$.

### Step 5 — Limiting cases

The bracket lies between 1 and 2, so always

$$\frac{I_D}{V_{ov}} < g_m \le \frac{2I_D}{V_{ov}} .$$

**Weak degradation** ($\theta'V_{ov} \ll 1$): the bracket tends to $1 + 1 = 2$, so $g_m \to 2I_D/V_{ov} = \mu_0C_{ox}(W/L)V_{ov}$, the square-law result.

**Strong degradation** ($\theta'V_{ov} \gg 1$): the bracket tends to 1, so $g_m \to I_D/V_{ov}$. In this limit $I_D \approx KV_{ov}^2/(\theta'V_{ov}) = KV_{ov}/\theta'$, so

$$g_m \to \frac{K}{\theta'} = \frac{\mu_0C_{ox}W}{2\theta'L},$$

independent of the bias. If velocity saturation dominates ($\theta \ll \mu_0/(2v_{sat}L)$), then $\theta' \approx \mu_0/(2v_{sat}L)$ and

$$g_m \to \frac{\mu_0C_{ox}W}{2L}\cdot\frac{2v_{sat}L}{\mu_0} = WC_{ox}v_{sat},$$

the transconductance of a fully velocity-saturated device (the current becomes $I_D = WC_{ox}v_{sat}V_{ov}$).

**Numerical illustration.** With $\mu_0 = 400\ \mathrm{cm^2/(V\cdot s)}$, $v_{sat} = 10^7$ cm/s and $\theta = 0.5\ \mathrm{V^{-1}}$:

| $L$ | $\mu_0/(2v_{sat}L)$ | $\theta'$ | $V_{ov}$ | $\theta'V_{ov}$ | $g_mV_{ov}/I_D$ |
|---|---|---|---|---|---|
| 1 µm | 0.2 V⁻¹ | 0.7 V⁻¹ | 0.2 V | 0.14 | 1.88 |
| 0.1 µm | 2 V⁻¹ | 2.5 V⁻¹ | 0.2 V | 0.5 | 1.67 |
| 0.1 µm | 2 V⁻¹ | 2.5 V⁻¹ | 1.0 V | 2.5 | 1.29 |

For example, in the second row: $\mu_0/(2v_{sat}L) = 0.04\ \mathrm{m^2/(V\,s)}/(2\times10^5\ \mathrm{m/s}\times10^{-7}\ \mathrm{m}) = 2\ \mathrm{V^{-1}}$, and the bracket is $1 + 1/1.5 = 1.67$. The shorter the channel and the larger the overdrive, the further $g_m$ falls below the square-law value $2I_D/V_{ov}$.

### Result

With $\theta' = \mu_0/(2v_{sat}L) + \theta$ and $V_{ov} = V_{GS} - V_{TH}$, the quotient rule gives

$$g_m = \frac12\mu_0C_{ox}\frac{W}{L}\,\frac{V_{ov}(2 + \theta'V_{ov})}{(1 + \theta'V_{ov})^2} = \frac{I_D}{V_{ov}}\cdot\frac{2 + \theta'V_{ov}}{1 + \theta'V_{ov}} = \frac{I_D}{V_{GS} - V_{TH}}\left[1 + \frac{1}{1 + \left(\frac{\mu_0}{2v_{sat}L} + \theta\right)(V_{GS} - V_{TH})}\right].$$

$g_m$ lies between $I_D/V_{ov}$ and $2I_D/V_{ov}$: it approaches the square-law value for small $\theta'V_{ov}$ and $\mu_0C_{ox}W/(2\theta'L)$ (equal to $WC_{ox}v_{sat}$ when velocity saturation dominates) for large $\theta'V_{ov}$.

**Common mistake.** Differentiating only the numerator, as if the denominator were constant. That gives $g_m = 2I_D/V_{ov}$, the square-law value, and the bracket never appears. The degradation term depends on $V_{GS}$ and must be differentiated.

**Common mistake.** Writing the derivative of the denominator as $\mu_0/(2v_{sat}L)$ alone, or as $\theta$ alone. Both mechanisms appear in the same denominator, so its derivative with respect to $V_{GS}$ is the full $\theta' = \mu_0/(2v_{sat}L) + \theta$.
