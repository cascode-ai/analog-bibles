# Detailed solution - R551

**Approach.** Redo the derivation, keeping track of the temperature at which each quantity is evaluated. The zero-TC condition is imposed at one temperature $T_0$, and the fixed constant $n$ is chosen to satisfy it there, so the resulting formula is a *value at $T_0$*, not a function of $T$ for a given circuit. Then compute the true $V_{REF}(T)$ of the circuit and show that its slope is zero at $T_0$.

### Step 1 — Redo the derivation, keeping track of $T_0$

With $n$ a fixed number set by the circuit,

$$V_{REF}(T) = V_{BE}(T) + V_T\ln n, \qquad \frac{\partial V_{REF}}{\partial T} = \frac{\partial V_{BE}}{\partial T} + \frac{k}{q}\ln n .$$

The design makes this vanish at a chosen temperature $T_0$ (for example 300 K):

$$\frac{V_{BE}(T_0) - (4+m)V_{T0} - E_g/q}{T_0} + \frac{k}{q}\ln n = 0, \qquad V_{T0} = \frac{kT_0}{q}.$$

Multiplying by $T_0$:

$$V_{T0}\ln n = \frac{E_g}{q} + (4+m)V_{T0} - V_{BE}(T_0).$$

**This equation determines $n$.** For example, with $V_{BE}(T_0) = 0.75$ V at 300 K, $V_{T0}\ln n = 1.12 + 0.0646 - 0.75 = 0.4346$ V. (In practice such a large factor comes from a resistor ratio multiplying $\ln n$, but the logic is the same.) Substituting back into $V_{REF}$ at $T_0$:

$$
\begin{aligned}
V_{REF}(T_0) &= V_{BE}(T_0) + V_{T0}\ln n\\
&= V_{BE}(T_0) + \frac{E_g}{q} + (4+m)V_{T0} - V_{BE}(T_0)\\
&= \frac{E_g}{q} + (4+m)\frac{kT_0}{q}.
\end{aligned}
$$

The "$T$" in the textbook formula is the design temperature $T_0$.

### Step 2 — The flaw

The step "$\partial V_{REF}/\partial T \propto (4+m)k/q$" treats $E_g/q + (4+m)kT/q$ as the function $V_{REF}(T)$ of one circuit. It is not:

1. **The zero-TC condition holds at only one temperature.** It was imposed at $T_0$ to fix $n$; at any other temperature the same circuit (same $n$) does not satisfy it, so the substitution of Step 1 is not allowed there.
2. **$n$ is a constant, but the formula hides it.** "Varying $T$" in the formula implicitly changes $n$ so that the zero-TC condition is re-imposed at each new temperature: a *different circuit* at every temperature.

So $E_g/q + (4+m)kT_0/q$ is the output, *at* $T_0$, of a bandgap designed for zero TC at $T_0$. Its derivative,

$$\frac{dV_{REF}(T_0)}{dT_0} = (4+m)\frac{k}{q} = 2.5\times0.08617\ \mathrm{mV/K} = 0.215\ \mathrm{mV/K},$$

says how that design value shifts when the circuit is *redesigned* for a different $T_0$. Formally, $dV_{REF}(T_0)/dT_0 = \partial V_{REF}/\partial T + (\partial V_{REF}/\partial n)(dn/dT_0)$: the first term is zero by design, and the whole slope comes from the change in $n$. The formula traces the line of zero-slope points of a family of circuits, not the curve of any one of them.

### Step 3 — The true $V_{REF}(T)$ of a fixed circuit

At constant collector current the TC model is a differential equation:

$$\frac{dV_{BE}}{dT} - \frac{V_{BE}}{T} = -(4+m)\frac{k}{q} - \frac{E_g}{qT}.$$

Dividing by $T$ makes the left side $\dfrac{d}{dT}\left(\dfrac{V_{BE}}{T}\right)$:

$$\frac{d}{dT}\left(\frac{V_{BE}}{T}\right) = -(4+m)\frac{k}{q}\cdot\frac1T - \frac{E_g}{q}\cdot\frac{1}{T^2}.$$

Integrating from $T_0$ to $T$ and multiplying by $T$:

$$V_{BE}(T) = \frac{E_g}{q} + \frac{T}{T_0}\left[V_{BE}(T_0) - \frac{E_g}{q}\right] - (4+m)\frac{kT}{q}\ln\frac{T}{T_0}.$$

The PTAT term with the fixed $n$ of Step 1 is

$$V_T\ln n = \frac{T}{T_0}\,V_{T0}\ln n = \frac{T}{T_0}\left[\frac{E_g}{q} + (4+m)V_{T0} - V_{BE}(T_0)\right].$$

Adding the two, the terms $\pm(T/T_0)[V_{BE}(T_0) - E_g/q]$ cancel and $(T/T_0)(4+m)V_{T0} = (4+m)kT/q$:

$$
\begin{aligned}
V_{REF}(T) &= \frac{E_g}{q} + (4+m)\frac{kT}{q} - (4+m)\frac{kT}{q}\ln\frac{T}{T_0}\\
&= \frac{E_g}{q} + (4+m)\frac{kT}{q}\left[1 - \ln\frac{T}{T_0}\right].
\end{aligned}
$$

At $T = T_0$ this is $E_g/q + (4+m)kT_0/q$; everywhere else it is *not* $E_g/q + (4+m)kT/q$. The true slope is

$$
\begin{aligned}
\frac{\partial V_{REF}}{\partial T} &= (4+m)\frac{k}{q}\left[1 - \ln\frac{T}{T_0}\right] + (4+m)\frac{kT}{q}\left(-\frac1T\right)\\
&= -(4+m)\frac{k}{q}\ln\frac{T}{T_0},
\end{aligned}
$$

exactly zero at $T = T_0$, as designed. Away from $T_0$ it is small and changes sign (positive below $T_0$, negative above), so $V_{REF}(T)$ has a maximum at $T_0$: the familiar residual curvature of a bandgap.

### Step 4 — Numbers

Take $T_0 = 300$ K, $E_g/q = 1.12$ V and $(4+m)k/q = 2.5\times8.617\times10^{-5} = 2.154\times10^{-4}$ V/K:

$$
\begin{aligned}
V_{REF}(T_0) &= 1.12 + (2.154\times10^{-4})(300) = 1.12 + 0.0646 = 1.1846\ \mathrm{V},\\
V_{REF}(200) &= 1.12 + (2.154\times10^{-4})(200)\left[1 - \ln\tfrac{200}{300}\right] = 1.12 + (0.04309)(1.4055) = 1.1806\ \mathrm{V},\\
V_{REF}(400) &= 1.12 + (0.08617)\left[1 - \ln\tfrac{400}{300}\right] = 1.12 + (0.08617)(0.7123) = 1.1814\ \mathrm{V}.
\end{aligned}
$$

| $T$ (K) | Actual $V_{REF}(T)$ (V) | Actual slope (mV/K) | "Formula" $E_g/q + (4+m)kT/q$ (V) |
|---|---|---|---|
| 200 | 1.1806 | +0.087 | 1.1631 |
| 250 | 1.1837 | +0.039 | 1.1739 |
| 300 | 1.1846 | 0 | 1.1846 |
| 350 | 1.1838 | −0.033 | 1.1954 |
| 400 | 1.1814 | −0.062 | 1.2062 |

The real circuit varies by only about 4 mV over 200 K and is flat at 300 K, while the misread "formula" column rises steadily at 0.215 mV/K, 43 mV over the same range. The two agree only at $T_0$.

### Result

$V_{REF} = E_g/q + (4+m)V_T$ is the value of the reference **at the single temperature $T_0$** at which the zero-TC condition was imposed. It was obtained by choosing the fixed constant $n$ so that $V_{T0}\ln n = E_g/q + (4+m)V_{T0} - V_{BE}(T_0)$, an equality valid only at $T_0$. It is therefore not the function $V_{REF}(T)$ of a given circuit and may not be differentiated with respect to $T$. Its slope $(4+m)k/q \approx 0.215$ mV/K describes how the zero-TC value would move if the circuit were redesigned (different $n$) for another $T_0$, i.e. $dV_{REF}(T_0)/dT_0$, not $\partial V_{REF}/\partial T$.

The actual behaviour of the fixed circuit is $V_{REF}(T) = E_g/q + (4+m)(kT/q)[1 - \ln(T/T_0)]$, whose derivative $-(4+m)(k/q)\ln(T/T_0)$ vanishes at $T_0$. With $T_0 = 300$ K this gives 1.1846 V at 300 K and about 1.181 V at 200 K and 400 K: zero TC at $T_0$, with only a small residual curvature.

**Common mistake.** Accepting the argument and concluding that the bandgap "really" has a TC of about 0.2 mV/K. A circuit with fixed $n$ has zero slope at $T_0$ by construction; the 0.215 mV/K is the slope of a curve that joins *different* designs.

**Common mistake.** Blaming the paradox on the temperature dependence of $E_g$, or on the value of $m$. Even with $E_g$ exactly constant and $m$ exactly $-3/2$, the formula cannot be differentiated, because it holds at only one temperature.

**Common mistake.** Saying vaguely that "the result is approximate". The derivation is exact within the model; the error is logical: a relation imposed at one point was used to eliminate the constant $n$ and then treated as valid at every temperature.
