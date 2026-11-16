# Detailed solution - R680

**Approach.** Differentiate the given drain-current expression with respect to $V_{BS}$; only the bracket with the $3/2$ powers depends on $V_{BS}$. Then derive $g_{mb}$ from the simple square-law model, where the body effect enters only through a single threshold $V_{TH}(V_{SB})$, and compare the two, first exactly (as an average over the channel) and then numerically.

### Step 1 — Which terms depend on $V_{BS}$

Write $\beta = \mu C_{ox}(W/L)$ and define the shorthand

$$A = 2\phi_F - V_{BS} + V_{DS}, \qquad B = 2\phi_F - V_{BS},$$

so that

$$I_D = \beta\left\{(V_{GS} - V_{TH0})V_{DS} - \frac{V_{DS}^2}{2} - \frac23\gamma\left[A^{3/2} - B^{3/2}\right]\right\}.$$

Here $\gamma$ is the body-effect coefficient, $\phi_F$ the bulk Fermi potential and $V_{TH0}$ the zero-bias threshold. With $V_{GS}$ and $V_{DS}$ held constant, the first two terms do not depend on $V_{BS}$; only $A$ and $B$ do, with $\partial A/\partial V_{BS} = \partial B/\partial V_{BS} = -1$.

**Physical meaning of the model.** The channel potential rises from $V_S$ at the source to $V_D$ at the drain, so the channel-to-bulk voltage, and hence the local threshold, changes along the channel. The $3/2$-power bracket is the integral of this position-dependent depletion charge.

### Step 2 — Differentiate

By the chain rule, $\dfrac{\partial}{\partial V_{BS}}A^{3/2} = \tfrac32A^{1/2}\cdot(-1)$ and likewise for $B$:

$$\frac{\partial}{\partial V_{BS}}\left[A^{3/2} - B^{3/2}\right] = -\frac32\left(\sqrt A - \sqrt B\right).$$

Multiply by $-\tfrac23\gamma\beta$:

$$
\begin{aligned}
g_{mb} = \frac{\partial I_D}{\partial V_{BS}} &= \beta\left(-\frac23\gamma\right)\left(-\frac32\right)\left(\sqrt A - \sqrt B\right)\\
&= \beta\,\gamma\left(\sqrt A - \sqrt B\right).
\end{aligned}
$$

Substituting back, and using $-V_{BS} = V_{SB}$ and $V_{SB} + V_{DS} = V_{DB}$:

$$g_{mb} = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F - V_{BS} + V_{DS}} - \sqrt{2\phi_F - V_{BS}}\right] = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F + V_{DB}} - \sqrt{2\phi_F + V_{SB}}\right].$$

Since $V_{DS} > 0$, the first square root is larger, so $g_{mb} > 0$: raising the bulk voltage lowers the threshold and increases the current, as expected.

### Step 3 — The simple model

In the simple square-law model the whole channel has one threshold,

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2\phi_F + V_{SB}} - \sqrt{2\phi_F}\right).$$

Its sensitivity to the bulk voltage, with $V_{SB} = -V_{BS}$:

$$\frac{\partial V_{TH}}{\partial V_{BS}} = \gamma\cdot\frac{1}{2\sqrt{2\phi_F + V_{SB}}}\cdot\frac{\partial V_{SB}}{\partial V_{BS}} = -\frac{\gamma}{2\sqrt{2\phi_F + V_{SB}}} \equiv -\eta,$$

where $\eta = \gamma/(2\sqrt{2\phi_F + V_{SB}})$ is the usual body-effect factor.

**Triode region.** $I_D = \beta[(V_{GS} - V_{TH})V_{DS} - V_{DS}^2/2]$, so

$$g_{mb} = \frac{\partial I_D}{\partial V_{TH}}\cdot\frac{\partial V_{TH}}{\partial V_{BS}} = (-\beta V_{DS})(-\eta) = \mu C_{ox}\frac{W}{L}\,V_{DS}\,\frac{\gamma}{2\sqrt{2\phi_F + V_{SB}}} .$$

**Saturation.** $I_D = \frac12\beta(V_{GS} - V_{TH})^2$, so $g_{mb} = \beta(V_{GS} - V_{TH})\eta = \eta g_m$.

### Step 4 — Comparison: an average along the channel versus the source-end value

Write the square-root difference as an integral, using $\frac{d}{du}\sqrt{2\phi_F + u} = \frac{1}{2\sqrt{2\phi_F + u}}$:

$$\sqrt{2\phi_F + V_{SB} + V_{DS}} - \sqrt{2\phi_F + V_{SB}} = \int_{V_{SB}}^{V_{SB} + V_{DS}}\frac{du}{2\sqrt{2\phi_F + u}} .$$

So the new result is

$$g_{mb} = \mu C_{ox}\frac{W}{L}\int_{V_{SB}}^{V_{SB} + V_{DS}}\frac{\gamma\,du}{2\sqrt{2\phi_F + u}} = \mu C_{ox}\frac{W}{L}\,V_{DS}\cdot\overline{\eta},$$

where $u$ is the local channel-to-bulk voltage, which runs from $V_{SB}$ at the source to $V_{DB}$ at the drain, and $\overline\eta$ is the **average** of the local body-effect factor along the channel. The simple model instead uses the **source-end value** $\eta = \gamma/(2\sqrt{2\phi_F + V_{SB}})$ everywhere. Because $1/\sqrt{2\phi_F + u}$ decreases with $u$, the average is smaller than the source-end value:

$$g_{mb}^{\text{(new)}} \le g_{mb}^{\text{(simple)}} .$$

**Physical reason.** Toward the drain the channel sits at a higher potential above the bulk, the depletion region there is wider, and the local threshold is less sensitive to the bulk voltage.

**Exact ratio.** Let $a = 2\phi_F + V_{SB}$. Rationalizing, $\sqrt{a + V_{DS}} - \sqrt a = V_{DS}/(\sqrt{a + V_{DS}} + \sqrt a)$, so

$$\frac{g_{mb}^{\text{(new)}}}{g_{mb}^{\text{(simple)}}} = \frac{\gamma V_{DS}/(\sqrt{a + V_{DS}} + \sqrt a)}{\gamma V_{DS}/(2\sqrt a)} = \frac{2}{1 + \sqrt{1 + V_{DS}/a}} .$$

**Small $V_{DS}$** ($V_{DS} \ll a$): $\sqrt{1 + V_{DS}/a} \approx 1 + V_{DS}/(2a)$, so the ratio is $\approx 1 - V_{DS}/(4a) \to 1$: the two models agree, because the channel potential barely changes along the channel.

**Numbers** with $2\phi_F = 0.9$ V:

| $V_{SB}$ | $V_{DS} = 0.2$ V | $V_{DS} = 0.5$ V | $V_{DS} = 1$ V |
|---|---|---|---|
| 0 ($a = 0.9$ V) | 0.95 | 0.89 | 0.82 |
| 1 V ($a = 1.9$ V) | 0.975 | 0.94 | 0.89 |

For example, with $\mu C_{ox}(W/L) = 1\ \mathrm{mA/V^2}$, $\gamma = 0.45\ \mathrm{V^{1/2}}$, $V_{SB} = 0$, $V_{DS} = 0.5$ V:

$$
\begin{aligned}
g_{mb}^{\text{(new)}} &= (1\ \mathrm{mA/V^2})(0.45)\left(\sqrt{1.4} - \sqrt{0.9}\right) = 0.45\times(1.1832 - 0.9487)\ \mathrm{mS} = 0.106\ \mathrm{mS},\\
g_{mb}^{\text{(simple)}} &= (1\ \mathrm{mA/V^2})(0.5\ \mathrm{V})\frac{0.45}{2\times0.9487} = 0.119\ \mathrm{mS},
\end{aligned}
$$

a ratio of 0.89. The difference grows with $V_{DS}$ and shrinks with $V_{SB}$ (larger $a$).

**Saturation.** The given expression holds up to $V_{DS} = V_{D,sat}$, where $\partial I_D/\partial V_{DS} = 0$. In saturation, $I_D$ is the expression evaluated at $V_{DS} = V_{D,sat}(V_{GS}, V_{BS})$, so

$$\frac{dI_D}{dV_{BS}} = \frac{\partial I_D}{\partial V_{BS}}\bigg|_{V_{DS} = V_{D,sat}} + \underbrace{\frac{\partial I_D}{\partial V_{DS}}\bigg|_{V_{D,sat}}}_{=\,0}\cdot\frac{\partial V_{D,sat}}{\partial V_{BS}} .$$

The dependence of $V_{D,sat}$ on $V_{BS}$ drops out, and $g_{mb}$ in saturation is the formula of Step 2 with $V_{DS} = V_{D,sat}$. It is again somewhat below the simple $\eta g_m$, approaching it when $V_{D,sat} \ll 2\phi_F + V_{SB}$.

### Result

$$g_{mb} = \frac{\partial I_D}{\partial V_{BS}} = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F - V_{BS} + V_{DS}} - \sqrt{2\phi_F - V_{BS}}\right] = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F + V_{DB}} - \sqrt{2\phi_F + V_{SB}}\right].$$

The simple model gives $g_{mb} = \mu C_{ox}(W/L)V_{DS}\,\gamma/(2\sqrt{2\phi_F + V_{SB}})$ in triode (and $\eta g_m$ in saturation). The new result averages the body-effect factor along the channel, from the source end to the drain end, whereas the simple model uses the source-end value for the whole channel. The two agree for small $V_{DS}$; for larger $V_{DS}$ the new $g_{mb}$ is smaller, by the factor $2/(1 + \sqrt{1 + V_{DS}/(2\phi_F + V_{SB})})$ (e.g. 0.89 for $V_{DS} = 0.5$ V, $V_{SB} = 0$, $2\phi_F = 0.9$ V). In saturation, use $V_{DS} = V_{D,sat}$.

**Common mistake.** Getting the sign wrong in the chain rule ($\partial A/\partial V_{BS} = -1$), which yields a negative $g_{mb}$. Raising the bulk lowers the threshold everywhere along the channel, so $\partial I_D/\partial V_{BS}$ must be positive.

**Common mistake.** Claiming that the new model gives a *larger* $g_{mb}$, or the same value at any $V_{DS}$. The local sensitivity $\gamma/(2\sqrt{2\phi_F + u})$ is largest at the source and decreases toward the drain, so its average is smaller than its source-end value, except in the limit $V_{DS} \to 0$.
