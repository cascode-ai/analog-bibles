# Detailed solution - R677

**Approach.** The output resistance is the inverse of the slope of the $I_D$–$V_{DS}$ characteristic, $r_O = (\partial I_D/\partial V_{DS})^{-1}$. Because the modified coefficient $\lambda/(1 + \kappa V_{DS})$ itself depends on $V_{DS}$, the whole term $V_{DS}/(1 + \kappa V_{DS})$ must be differentiated. The result shows that $r_O$ depends on $V_{DS}$; a current source whose incremental resistance changes with the voltage across it converts a sinusoidal current into a distorted voltage, which we quantify with a Taylor expansion.

### Step 1 — Rewrite the current

Let $I_{D0}$ be the current without channel-length modulation:

$$I_{D0} = \frac12\,\mu C_{ox}\,\frac{W}{L}\,(V_{GS} - V_{TH})^2 .$$

It does not depend on $V_{DS}$. The drain current is

$$I_D = I_{D0}\left[1 + \frac{\lambda V_{DS}}{1 + \kappa V_{DS}}\right].$$

For $\kappa = 0$ this reduces to the usual $I_{D0}(1 + \lambda V_{DS})$ and $r_O = 1/(\lambda I_{D0})$.

### Step 2 — Differentiate with respect to $V_{DS}$

Only the fraction depends on $V_{DS}$. With the quotient rule, writing $V = V_{DS}$:

$$
\begin{aligned}
\frac{d}{dV}\left[\frac{V}{1 + \kappa V}\right] &= \frac{1\cdot(1 + \kappa V) - V\cdot\kappa}{(1 + \kappa V)^2}\\
&= \frac{1 + \kappa V - \kappa V}{(1 + \kappa V)^2} = \frac{1}{(1 + \kappa V)^2}.
\end{aligned}
$$

So

$$\frac{\partial I_D}{\partial V_{DS}} = \frac{\lambda I_{D0}}{(1 + \kappa V_{DS})^2}.$$

### Step 3 — The output resistance

$$r_O = \left(\frac{\partial I_D}{\partial V_{DS}}\right)^{-1} = \frac{(1 + \kappa V_{DS})^2}{\lambda I_{D0}} .$$

**In terms of the actual drain current.** Put the bracket over a common denominator:

$$I_D = I_{D0}\,\frac{1 + \kappa V_{DS} + \lambda V_{DS}}{1 + \kappa V_{DS}} = I_{D0}\,\frac{1 + (\kappa + \lambda)V_{DS}}{1 + \kappa V_{DS}} \;\Rightarrow\; I_{D0} = I_D\,\frac{1 + \kappa V_{DS}}{1 + (\kappa + \lambda)V_{DS}} .$$

Substituting,

$$r_O = \frac{(1 + \kappa V_{DS})\,[1 + (\kappa + \lambda)V_{DS}]}{\lambda I_D} \approx \frac{(1 + \kappa V_{DS})^2}{\lambda I_D}\quad(\lambda V_{DS} \ll 1 + \kappa V_{DS}).$$

**Behaviour.** For $\kappa > 0$, $r_O$ **increases with $V_{DS}$**, roughly as $V_{DS}^2$ once $\kappa V_{DS} \gg 1$. Example with $\lambda = 0.1\ \mathrm{V^{-1}}$, $\kappa = 0.5\ \mathrm{V^{-1}}$, $I_{D0} = 1$ mA:

| $V_{DS}$ (V) | 0 | 1 | 2 | 5 |
|---|---|---|---|---|
| $r_O = (1 + \kappa V_{DS})^2/(\lambda I_{D0})$ | 10 kΩ | 22.5 kΩ | 40 kΩ | 122.5 kΩ |

(For instance at 1 V: $(1 + 0.5)^2/(0.1\ \mathrm{V^{-1}}\times1\ \mathrm{mA}) = 2.25/10^{-4}\ \mathrm{S} = 22.5\ \mathrm{k}\Omega$.)

**Why not just substitute the modified $\lambda$?** Plugging $\lambda/(1 + \kappa V_{DS})$ into $r_O = 1/(\lambda I_D)$ gives $(1 + \kappa V_{DS})/(\lambda I_D)$, which is only 14.1 kΩ at 1 V in the example. That shortcut ignores that the coefficient itself changes with $V_{DS}$; the derivative of $\lambda(V_{DS})$ supplies the second factor of $(1 + \kappa V_{DS})$.

### Step 4 — Why such a current source produces distortion

A linear resistor (or an ideal current source with constant $r_O$) has a straight-line I–V characteristic: a sinusoidal current produces a sinusoidal voltage. Here the characteristic is curved, because its slope $1/r_O$ depends on the voltage across the device. Suppose a signal current flows through this current source, for example when it is the load of a common-source stage or of an op amp output, where the gain is $g_m(r_{O1} \parallel r_{O2})$:

- on the half-cycle that **raises** $V_{DS}$, the incremental resistance becomes larger, so a given current change produces a larger voltage change;
- on the half-cycle that **lowers** $V_{DS}$, the incremental resistance becomes smaller, so the voltage change is smaller.

The voltage waveform is therefore asymmetric (expanded on one side, compressed on the other), which means it contains harmonics, mainly the second. Equivalently, the small-signal gain changes with the output level.

### Step 5 — Quantifying the distortion

**Invert the I–V law.** Let $x = (I_D - I_{D0})/I_{D0}$ be the fractional excess current. From Step 1, $x = \lambda V/(1 + \kappa V)$, so

$$
\begin{aligned}
x(1 + \kappa V) &= \lambda V\\
x &= V(\lambda - \kappa x)\\
V &= \frac{x}{\lambda - \kappa x},
\end{aligned}
$$

a nonlinear function of the current.

**Taylor expansion about the bias point** $V_{DS0}$ (current $I_{D0}(1 + x_0)$). The derivatives are

$$\frac{dV}{dx} = \frac{\lambda}{(\lambda - \kappa x)^2}, \qquad \frac{d^2V}{dx^2} = \frac{2\kappa\lambda}{(\lambda - \kappa x)^3}.$$

At the bias point, $\lambda - \kappa x_0 = \lambda - \kappa\lambda V_{DS0}/(1 + \kappa V_{DS0}) = \lambda/(1 + \kappa V_{DS0})$, so

$$\frac{dV}{dx}\bigg|_0 = \frac{(1 + \kappa V_{DS0})^2}{\lambda}, \qquad \frac{d^2V}{dx^2}\bigg|_0 = \frac{2\kappa(1 + \kappa V_{DS0})^3}{\lambda^2}.$$

A small signal current $i$ changes $x$ by $i/I_{D0}$, so the voltage change $v$ is

$$
\begin{aligned}
v &= \frac{(1 + \kappa V_{DS0})^2}{\lambda I_{D0}}\,i + \frac12\cdot\frac{2\kappa(1 + \kappa V_{DS0})^3}{\lambda^2I_{D0}^2}\,i^2 + \dots\\
&= r_O\,i + \frac{\kappa\,r_O^2}{1 + \kappa V_{DS0}}\,i^2 + \dots,
\end{aligned}
$$

using $r_O = (1 + \kappa V_{DS0})^2/(\lambda I_{D0})$. The $i^2$ term vanishes only for $\kappa = 0$.

**Second harmonic.** For $i = I_p\cos\omega t$, use $\cos^2\omega t = \frac12(1 + \cos2\omega t)$:

$$v = r_OI_p\cos\omega t + \frac{\kappa r_O^2I_p^2}{2(1 + \kappa V_{DS0})}\,(1 + \cos2\omega t) + \dots$$

The fundamental amplitude is $V_p = r_OI_p$, and the second-harmonic distortion is

$$HD_2 = \frac{\kappa r_O^2I_p^2/[2(1 + \kappa V_{DS0})]}{r_OI_p} = \frac{\kappa V_p}{2(1 + \kappa V_{DS0})}.$$

There is also a dc shift (the constant term), another sign of the asymmetry. With the example values ($\kappa = 0.5\ \mathrm{V^{-1}}$, $V_{DS0} = 1$ V) and $V_p = 0.2$ V: $HD_2 = (0.5)(0.2)/(2\times1.5) = 3.3\ \%$, which a direct numerical evaluation of $V = x/(\lambda - \kappa x)$ confirms.

### Result

$$r_O = \left(\frac{\partial I_D}{\partial V_{DS}}\right)^{-1} = \frac{(1 + \kappa V_{DS})^2}{\lambda I_{D0}} = \frac{(1 + \kappa V_{DS})\,[1 + (\kappa + \lambda)V_{DS}]}{\lambda I_D} \approx \frac{(1 + \kappa V_{DS})^2}{\lambda I_D},$$

with $I_{D0} = \frac12\mu C_{ox}(W/L)(V_{GS} - V_{TH})^2$. The output resistance grows with $V_{DS}$ (about as $V_{DS}^2$ for $\kappa V_{DS} \gg 1$).

Because the incremental resistance depends on the instantaneous voltage, a signal current through such a current source produces a voltage that swings more on the half-cycle that raises $V_{DS}$ than on the one that lowers it: an asymmetric waveform with harmonics, mainly second order, $HD_2 \approx \kappa V_p/[2(1 + \kappa V_{DS0})]$. Equivalently, the gain of a stage loaded by this source varies with the output level.

**Common mistake.** Substituting $\lambda/(1 + \kappa V_{DS})$ into $r_O = 1/(\lambda I_D)$, which gives $(1 + \kappa V_{DS})/(\lambda I_D)$. The formula $1/(\lambda I_D)$ assumes a constant $\lambda$; when $\lambda$ depends on $V_{DS}$, the derivative must be taken of the complete expression.

**Common mistake.** Claiming that a current source cannot cause distortion because it "carries a constant current". A real current source has a finite, voltage-dependent output resistance; any signal current through it, or any voltage swing across it, sees a curved I–V characteristic and generates harmonics.
