# Detailed solution - R680

**Approach.** Differentiate the given drain current with respect to $V_{BS}$; only the bracket with the $3/2$ powers depends on $V_{BS}$. Then derive $g_{mb}$ from the simple model, where the body effect enters through a single threshold $V_{TH}(V_{SB})$, and compare the two, exactly (as an average along the channel) and numerically.

### Step 1 — Which terms depend on $V_{BS}$

With $\beta = \mu C_{ox}(W/L)$ and the shorthand

$$A = 2\phi_F - V_{BS} + V_{DS}, \qquad B = 2\phi_F - V_{BS},$$

the current is

$$I_D = \beta\left\{(V_{GS} - V_{TH0})V_{DS} - \frac{V_{DS}^2}{2} - \frac23\gamma\left[A^{3/2} - B^{3/2}\right]\right\}.$$

At constant $V_{GS}$ and $V_{DS}$ only $A$ and $B$ depend on $V_{BS}$, with $\partial A/\partial V_{BS} = \partial B/\partial V_{BS} = -1$. (The $3/2$-power bracket integrates the depletion charge, which changes along the channel as the channel-to-bulk voltage rises from source to drain.)

### Step 2 — Differentiate

$$\frac{\partial}{\partial V_{BS}}\left[A^{3/2} - B^{3/2}\right] = -\frac32\left(\sqrt A - \sqrt B\right),$$

so

$$
\begin{aligned}
g_{mb} = \frac{\partial I_D}{\partial V_{BS}} &= \beta\left(-\frac23\gamma\right)\left(-\frac32\right)\left(\sqrt A - \sqrt B\right)\\
&= \beta\,\gamma\left(\sqrt A - \sqrt B\right).
\end{aligned}
$$

With $-V_{BS} = V_{SB}$ and $V_{SB} + V_{DS} = V_{DB}$:

$$g_{mb} = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F - V_{BS} + V_{DS}} - \sqrt{2\phi_F - V_{BS}}\right] = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F + V_{DB}} - \sqrt{2\phi_F + V_{SB}}\right].$$

Since $V_{DS} > 0$, $g_{mb} > 0$: raising the bulk lowers the threshold and increases the current.

### Step 3 — The simple model

With one threshold $V_{TH} = V_{TH0} + \gamma\left(\sqrt{2\phi_F + V_{SB}} - \sqrt{2\phi_F}\right)$ for the whole channel,

$$\frac{\partial V_{TH}}{\partial V_{BS}} = -\frac{\gamma}{2\sqrt{2\phi_F + V_{SB}}} \equiv -\eta .$$

**Triode region.** From $I_D = \beta[(V_{GS} - V_{TH})V_{DS} - V_{DS}^2/2]$,

$$g_{mb} = \frac{\partial I_D}{\partial V_{TH}}\cdot\frac{\partial V_{TH}}{\partial V_{BS}} = (-\beta V_{DS})(-\eta) = \mu C_{ox}\frac{W}{L}\,V_{DS}\,\frac{\gamma}{2\sqrt{2\phi_F + V_{SB}}} .$$

**Saturation.** From $I_D = \frac12\beta(V_{GS} - V_{TH})^2$, $g_{mb} = \beta(V_{GS} - V_{TH})\eta = \eta g_m$.

### Step 4 — Comparison: an average along the channel versus the source-end value

Since $\frac{d}{du}\sqrt{2\phi_F + u} = \frac{1}{2\sqrt{2\phi_F + u}}$,

$$\sqrt{2\phi_F + V_{SB} + V_{DS}} - \sqrt{2\phi_F + V_{SB}} = \int_{V_{SB}}^{V_{SB} + V_{DS}}\frac{du}{2\sqrt{2\phi_F + u}} ,$$

so

$$g_{mb} = \mu C_{ox}\frac{W}{L}\int_{V_{SB}}^{V_{SB} + V_{DS}}\frac{\gamma\,du}{2\sqrt{2\phi_F + u}} = \mu C_{ox}\frac{W}{L}\,V_{DS}\cdot\overline{\eta},$$

where $u$ is the local channel-to-bulk voltage (from $V_{SB}$ at the source to $V_{DB}$ at the drain) and $\overline\eta$ the **average** of the local body-effect factor along the channel. The simple model uses the **source-end value** $\eta$ everywhere. Since $1/\sqrt{2\phi_F + u}$ decreases with $u$,

$$g_{mb}^{\text{(new)}} \le g_{mb}^{\text{(simple)}} :$$

toward the drain the channel sits higher above the bulk, the depletion region is wider, and the local threshold is less sensitive to the bulk voltage.

**Exact ratio.** With $a = 2\phi_F + V_{SB}$ and $\sqrt{a + V_{DS}} - \sqrt a = V_{DS}/(\sqrt{a + V_{DS}} + \sqrt a)$,

$$\frac{g_{mb}^{\text{(new)}}}{g_{mb}^{\text{(simple)}}} = \frac{\gamma V_{DS}/(\sqrt{a + V_{DS}} + \sqrt a)}{\gamma V_{DS}/(2\sqrt a)} = \frac{2}{1 + \sqrt{1 + V_{DS}/a}} .$$

For $V_{DS} \ll a$, $\sqrt{1 + V_{DS}/a} \approx 1 + V_{DS}/(2a)$ and the ratio is $\approx 1 - V_{DS}/(4a) \to 1$: the models agree when the channel potential barely changes along the channel.

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

**Saturation.** The expression holds up to $V_{DS} = V_{D,sat}$, where $\partial I_D/\partial V_{DS} = 0$, so

$$\frac{dI_D}{dV_{BS}} = \frac{\partial I_D}{\partial V_{BS}}\bigg|_{V_{DS} = V_{D,sat}} + \underbrace{\frac{\partial I_D}{\partial V_{DS}}\bigg|_{V_{D,sat}}}_{=\,0}\cdot\frac{\partial V_{D,sat}}{\partial V_{BS}} :$$

$g_{mb}$ in saturation is the formula of Step 2 with $V_{DS} = V_{D,sat}$, again somewhat below $\eta g_m$ and approaching it when $V_{D,sat} \ll 2\phi_F + V_{SB}$.

### Result

$$g_{mb} = \frac{\partial I_D}{\partial V_{BS}} = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F - V_{BS} + V_{DS}} - \sqrt{2\phi_F - V_{BS}}\right] = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F + V_{DB}} - \sqrt{2\phi_F + V_{SB}}\right].$$

The simple model gives $g_{mb} = \mu C_{ox}(W/L)V_{DS}\,\gamma/(2\sqrt{2\phi_F + V_{SB}})$ in triode (and $\eta g_m$ in saturation). The new result averages the body-effect factor along the channel, from the source end to the drain end, whereas the simple model uses the source-end value for the whole channel. The two agree for small $V_{DS}$; for larger $V_{DS}$ the new $g_{mb}$ is smaller, by the factor $2/(1 + \sqrt{1 + V_{DS}/(2\phi_F + V_{SB})})$ (e.g. 0.89 for $V_{DS} = 0.5$ V, $V_{SB} = 0$, $2\phi_F = 0.9$ V). In saturation, use $V_{DS} = V_{D,sat}$.

**Common mistake.** Missing the sign in the chain rule ($\partial A/\partial V_{BS} = -1$), which yields a negative $g_{mb}$. Raising the bulk lowers the threshold everywhere, so $\partial I_D/\partial V_{BS} > 0$.

**Common mistake.** Claiming that the new model gives a *larger* $g_{mb}$, or the same value at any $V_{DS}$. The local sensitivity $\gamma/(2\sqrt{2\phi_F + u})$ is largest at the source, so its average is smaller, except as $V_{DS} \to 0$.
