# Detailed solution - R677

**Approach.** $r_O = (\partial I_D/\partial V_{DS})^{-1}$, and since the modified coefficient $\lambda/(1 + \kappa V_{DS})$ depends on $V_{DS}$, the whole term $V_{DS}/(1 + \kappa V_{DS})$ must be differentiated. The resulting $r_O$ depends on $V_{DS}$, so the source converts a sinusoidal current into a distorted voltage, quantified with a Taylor expansion.

### Step 1 — Rewrite the current

With the $V_{DS}$-independent current

$$I_{D0} = \frac12\,\mu C_{ox}\,\frac{W}{L}\,(V_{GS} - V_{TH})^2 ,$$

the drain current is

$$I_D = I_{D0}\left[1 + \frac{\lambda V_{DS}}{1 + \kappa V_{DS}}\right].$$

For $\kappa = 0$ this reduces to $I_{D0}(1 + \lambda V_{DS})$ and $r_O = 1/(\lambda I_{D0})$.

### Step 2 — Differentiate with respect to $V_{DS}$

Only the fraction depends on $V_{DS}$; with $V = V_{DS}$,

$$
\begin{aligned}
\frac{d}{dV}\left[\frac{V}{1 + \kappa V}\right] &= \frac{1\cdot(1 + \kappa V) - V\cdot\kappa}{(1 + \kappa V)^2}\\
&= \frac{1 + \kappa V - \kappa V}{(1 + \kappa V)^2} = \frac{1}{(1 + \kappa V)^2},
\end{aligned}
$$

so

$$\frac{\partial I_D}{\partial V_{DS}} = \frac{\lambda I_{D0}}{(1 + \kappa V_{DS})^2}.$$

### Step 3 — The output resistance

$$r_O = \left(\frac{\partial I_D}{\partial V_{DS}}\right)^{-1} = \frac{(1 + \kappa V_{DS})^2}{\lambda I_{D0}} .$$

**In terms of the actual drain current.** Over a common denominator,

$$I_D = I_{D0}\,\frac{1 + \kappa V_{DS} + \lambda V_{DS}}{1 + \kappa V_{DS}} = I_{D0}\,\frac{1 + (\kappa + \lambda)V_{DS}}{1 + \kappa V_{DS}} \;\Rightarrow\; I_{D0} = I_D\,\frac{1 + \kappa V_{DS}}{1 + (\kappa + \lambda)V_{DS}} ,$$

so

$$r_O = \frac{(1 + \kappa V_{DS})\,[1 + (\kappa + \lambda)V_{DS}]}{\lambda I_D} \approx \frac{(1 + \kappa V_{DS})^2}{\lambda I_D}\quad(\lambda V_{DS} \ll 1 + \kappa V_{DS}).$$

For $\kappa > 0$, $r_O$ **increases with $V_{DS}$**, roughly as $V_{DS}^2$ once $\kappa V_{DS} \gg 1$. Example with $\lambda = 0.1\ \mathrm{V^{-1}}$, $\kappa = 0.5\ \mathrm{V^{-1}}$, $I_{D0} = 1$ mA:

| $V_{DS}$ (V) | 0 | 1 | 2 | 5 |
|---|---|---|---|---|
| $r_O = (1 + \kappa V_{DS})^2/(\lambda I_{D0})$ | 10 kΩ | 22.5 kΩ | 40 kΩ | 122.5 kΩ |

(For instance at 1 V: $(1 + 0.5)^2/(0.1\ \mathrm{V^{-1}}\times1\ \mathrm{mA}) = 2.25/10^{-4}\ \mathrm{S} = 22.5\ \mathrm{k}\Omega$.)

Plugging $\lambda/(1 + \kappa V_{DS})$ into $r_O = 1/(\lambda I_D)$ instead gives $(1 + \kappa V_{DS})/(\lambda I_D)$, only 14.1 kΩ at 1 V: it misses the derivative of $\lambda(V_{DS})$, which supplies the second factor of $(1 + \kappa V_{DS})$.

### Step 4 — Why such a current source produces distortion

The I–V characteristic is curved, because its slope $1/r_O$ depends on the voltage across the device. When a signal current flows through this source, for example as the load of a common-source stage or an op-amp output, where the gain is $g_m(r_{O1} \parallel r_{O2})$:

- on the half-cycle that **raises** $V_{DS}$, the incremental resistance is larger, so a given current change produces a larger voltage change;
- on the half-cycle that **lowers** $V_{DS}$, it is smaller, so the voltage change is smaller.

The voltage waveform is asymmetric (expanded on one side, compressed on the other) and contains harmonics, mainly the second; equivalently, the small-signal gain changes with the output level.

### Step 5 — Quantifying the distortion

**Invert the I–V law.** With the fractional excess current $x = (I_D - I_{D0})/I_{D0} = \lambda V/(1 + \kappa V)$,

$$
\begin{aligned}
x(1 + \kappa V) &= \lambda V\\
x &= V(\lambda - \kappa x)\\
V &= \frac{x}{\lambda - \kappa x},
\end{aligned}
$$

a nonlinear function of the current.

**Taylor expansion about the bias point** $V_{DS0}$ (current $I_{D0}(1 + x_0)$):

$$\frac{dV}{dx} = \frac{\lambda}{(\lambda - \kappa x)^2}, \qquad \frac{d^2V}{dx^2} = \frac{2\kappa\lambda}{(\lambda - \kappa x)^3}.$$

At the bias point $\lambda - \kappa x_0 = \lambda - \kappa\lambda V_{DS0}/(1 + \kappa V_{DS0}) = \lambda/(1 + \kappa V_{DS0})$, so

$$\frac{dV}{dx}\bigg|_0 = \frac{(1 + \kappa V_{DS0})^2}{\lambda}, \qquad \frac{d^2V}{dx^2}\bigg|_0 = \frac{2\kappa(1 + \kappa V_{DS0})^3}{\lambda^2}.$$

A signal current $i$ changes $x$ by $i/I_{D0}$, so

$$
\begin{aligned}
v &= \frac{(1 + \kappa V_{DS0})^2}{\lambda I_{D0}}\,i + \frac12\cdot\frac{2\kappa(1 + \kappa V_{DS0})^3}{\lambda^2I_{D0}^2}\,i^2 + \dots\\
&= r_O\,i + \frac{\kappa\,r_O^2}{1 + \kappa V_{DS0}}\,i^2 + \dots,
\end{aligned}
$$

with $r_O = (1 + \kappa V_{DS0})^2/(\lambda I_{D0})$. The $i^2$ term vanishes only for $\kappa = 0$.

**Second harmonic.** For $i = I_p\cos\omega t$, with $\cos^2\omega t = \frac12(1 + \cos2\omega t)$:

$$v = r_OI_p\cos\omega t + \frac{\kappa r_O^2I_p^2}{2(1 + \kappa V_{DS0})}\,(1 + \cos2\omega t) + \dots$$

With the fundamental amplitude $V_p = r_OI_p$,

$$HD_2 = \frac{\kappa r_O^2I_p^2/[2(1 + \kappa V_{DS0})]}{r_OI_p} = \frac{\kappa V_p}{2(1 + \kappa V_{DS0})}.$$

The constant term is a dc shift, another sign of the asymmetry. With $\kappa = 0.5\ \mathrm{V^{-1}}$, $V_{DS0} = 1$ V and $V_p = 0.2$ V: $HD_2 = (0.5)(0.2)/(2\times1.5) = 3.3\ \%$, which a direct numerical evaluation of $V = x/(\lambda - \kappa x)$ confirms.

### Result

$$r_O = \left(\frac{\partial I_D}{\partial V_{DS}}\right)^{-1} = \frac{(1 + \kappa V_{DS})^2}{\lambda I_{D0}} = \frac{(1 + \kappa V_{DS})\,[1 + (\kappa + \lambda)V_{DS}]}{\lambda I_D} \approx \frac{(1 + \kappa V_{DS})^2}{\lambda I_D},$$

with $I_{D0} = \frac12\mu C_{ox}(W/L)(V_{GS} - V_{TH})^2$. The output resistance grows with $V_{DS}$ (about as $V_{DS}^2$ for $\kappa V_{DS} \gg 1$).

Because the incremental resistance depends on the instantaneous voltage, a signal current through such a current source produces a voltage that swings more on the half-cycle that raises $V_{DS}$ than on the one that lowers it: an asymmetric waveform with harmonics, mainly second order, $HD_2 \approx \kappa V_p/[2(1 + \kappa V_{DS0})]$. Equivalently, the gain of a stage loaded by this source varies with the output level.

**Common mistake.** Substituting $\lambda/(1 + \kappa V_{DS})$ into $r_O = 1/(\lambda I_D)$, which gives $(1 + \kappa V_{DS})/(\lambda I_D)$. That formula assumes a constant $\lambda$; here the derivative of the complete expression is needed.

**Common mistake.** Claiming that a current source cannot cause distortion because it "carries a constant current". Its output resistance is finite and voltage-dependent, so any signal current through it sees a curved I–V characteristic and generates harmonics.
