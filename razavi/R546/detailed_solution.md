# Detailed solution - R546

**Approach.** The expression contains $V_{BE}$, which itself changes with $T$, so it is really a differential equation for $V_{BE}(T)$. Evaluate it at 300 K, step outward in temperature (updating $V_{BE}$, with an iteration at each step), confirm the result with the exact solution of the differential equation, and describe the curve.

### Step 1 — Constants and the value at 300 K

Write the temperature coefficient (TC) as

$$\mathrm{TC}(T) \equiv \frac{\partial V_{BE}}{\partial T} = \frac{V_{BE} - (4+m)V_T - E_g/q}{T},$$

with $k/q = 8.617\times10^{-5}$ V/K, $E_g/q = 1.12$ V and $4 + m = 4 - 1.5 = 2.5$. $V_T = kT/q$ is proportional to $T$ and must be recomputed at each temperature. At $T_0 = 300$ K with $V_{BE0} = 0.750$ V:

$$
\begin{aligned}
V_{T0} &= (8.617\times10^{-5}\ \mathrm{V/K})(300\ \mathrm{K}) = 25.85\ \mathrm{mV},\\
(4+m)V_{T0} &= 2.5\times25.85\ \mathrm{mV} = 64.63\ \mathrm{mV},\\
\text{numerator} &= 0.750 - 0.06463 - 1.120 = -0.43463\ \mathrm{V},\\
\mathrm{TC}(300\ \mathrm{K}) &= \frac{-0.43463\ \mathrm{V}}{300\ \mathrm{K}} = -1.449\ \mathrm{mV/K}.
\end{aligned}
$$

### Step 2 — Stepping from 300 K to 350 K (one worked iteration)

At about $-1.45$ mV/K, a 100-K change moves $V_{BE}$ by roughly 145 mV, large compared with the numerator (about 0.43 V). So each temperature needs the $V_{BE}$ the transistor actually has there (at the same collector current), obtained by integrating the TC itself. Use 50-K steps and the trapezoidal rule:

$$V_{BE}(T + \Delta T) = V_{BE}(T) + \Delta T\cdot\frac{\mathrm{TC}(T) + \mathrm{TC}(T + \Delta T)}{2}.$$

$\mathrm{TC}(T + \Delta T)$ depends on $V_{BE}(T + \Delta T)$, so iterate. At 350 K, $(4+m)V_T = 2.5\times(8.617\times10^{-5})(350) = 75.40$ mV.

**Guess** (the TC at 300 K for the whole step):

$$
\begin{aligned}
V_{BE}(350) &\approx 0.750 + (50\ \mathrm{K})(-1.449\ \mathrm{mV/K}) = 0.750 - 0.0724 = 0.6776\ \mathrm{V},\\
\mathrm{TC}(350) &= \frac{0.6776 - 0.0754 - 1.120}{350} = \frac{-0.5178\ \mathrm{V}}{350\ \mathrm{K}} = -1.4795\ \mathrm{mV/K}.
\end{aligned}
$$

**First correction** (average of the two TCs):

$$
\begin{aligned}
V_{BE}(350) &= 0.750 + 50\times\frac{-1.4488 - 1.4795}{2}\ \mathrm{mV} = 0.750 - 0.0732 = 0.6768\ \mathrm{V},\\
\mathrm{TC}(350) &= \frac{0.6768 - 0.0754 - 1.120}{350} = -1.4817\ \mathrm{mV/K}.
\end{aligned}
$$

**Second correction:**

$$
\begin{aligned}
V_{BE}(350) &= 0.750 + 50\times\frac{-1.4488 - 1.4817}{2}\ \mathrm{mV} = 0.6767\ \mathrm{V},\\
\mathrm{TC}(350) &= -1.482\ \mathrm{mV/K}.
\end{aligned}
$$

The value no longer changes, so $V_{BE}(350\ \mathrm{K}) = 0.677$ V and $\mathrm{TC}(350\ \mathrm{K}) = -1.48$ mV/K.

### Step 3 — The remaining steps

The same procedure, starting each time from the converged point, gives:

| Step | Guess $V_{BE}$ | Converged $V_{BE}$ | Converged TC |
|---|---|---|---|
| 350 → 400 K | $0.6767 - 50(1.482\ \mathrm{mV}) = 0.6026$ V | 0.602 V | −1.511 mV/K |
| 300 → 250 K | $0.750 + 50(1.449\ \mathrm{mV}) = 0.8224$ V | 0.821 V | −1.410 mV/K |
| 250 → 200 K | $0.8215 + 50(1.410\ \mathrm{mV}) = 0.892$ V | 0.891 V | −1.362 mV/K |

For example, at 400 K, $(4+m)V_T = 2.5\times(8.617\times10^{-5})(400) = 86.17$ mV, and

$$\mathrm{TC}(400) = \frac{0.6019 - 0.0862 - 1.120}{400} = \frac{-0.6043\ \mathrm{V}}{400\ \mathrm{K}} = -1.511\ \mathrm{mV/K}.$$

At 200 K, $(4+m)V_T = 43.09$ mV, and

$$\mathrm{TC}(200) = \frac{0.8908 - 0.0431 - 1.120}{200} = \frac{-0.2723\ \mathrm{V}}{200\ \mathrm{K}} = -1.361\ \mathrm{mV/K}.$$

Going *down* in temperature, $\Delta T = -50$ K, so $V_{BE}$ *increases*.

### Step 4 — Check with the exact solution

The TC formula is a first-order linear differential equation:

$$\frac{dV_{BE}}{dT} - \frac{V_{BE}}{T} = -(4+m)\frac{k}{q} - \frac{E_g}{qT}.$$

Dividing by $T$ turns the left side into $\dfrac{d}{dT}\left(\dfrac{V_{BE}}{T}\right)$:

$$\frac{d}{dT}\left(\frac{V_{BE}}{T}\right) = -(4+m)\frac{k}{q}\cdot\frac{1}{T} - \frac{E_g}{q}\cdot\frac{1}{T^2}.$$

Integrating from $T_0$ to $T$ and multiplying by $T$:

$$\frac{V_{BE}}{T} - \frac{V_{BE0}}{T_0} = -(4+m)\frac{k}{q}\ln\frac{T}{T_0} + \frac{E_g}{q}\left(\frac{1}{T} - \frac{1}{T_0}\right),$$

$$V_{BE}(T) = \frac{E_g}{q} + \frac{T}{T_0}\left(V_{BE0} - \frac{E_g}{q}\right) - (4+m)\frac{kT}{q}\ln\frac{T}{T_0}.$$

Substituting this back into the TC formula, the $E_g/q$ terms cancel:

$$\mathrm{TC}(T) = \underbrace{\frac{V_{BE0} - (4+m)V_{T0} - E_g/q}{T_0}}_{-1.449\ \mathrm{mV/K}} - \underbrace{(4+m)\frac{k}{q}}_{0.2154\ \mathrm{mV/K}}\ln\frac{T}{T_0},$$

with $(4+m)k/q = 2.5\times8.617\times10^{-5} = 0.2154$ mV/K. Then

$$
\begin{aligned}
\mathrm{TC}(200) &= -1.449 - 0.2154\ln(0.667) = -1.449 + 0.087 = -1.361\ \mathrm{mV/K},\\
\mathrm{TC}(250) &= -1.449 - 0.2154\ln(0.833) = -1.449 + 0.039 = -1.410\ \mathrm{mV/K},\\
\mathrm{TC}(350) &= -1.449 - 0.2154\ln(1.167) = -1.449 - 0.033 = -1.482\ \mathrm{mV/K},\\
\mathrm{TC}(400) &= -1.449 - 0.2154\ln(1.333) = -1.449 - 0.062 = -1.511\ \mathrm{mV/K}.
\end{aligned}
$$

These agree with the iteration to within 0.001 mV/K, and the exact $V_{BE}$ values, 0.891 V (200 K), 0.821 V (250 K), 0.677 V (350 K) and 0.602 V (400 K), match Step 3.

### Step 5 — Slope and curvature of the TC curve

Differentiate the TC formula with the quotient rule, using $dV_{BE}/dT = \mathrm{TC}$ and noting that the bracket in the second term equals $T\cdot\mathrm{TC}$:

$$
\begin{aligned}
\frac{d\,\mathrm{TC}}{dT} &= \frac{\left[\mathrm{TC} - (4+m)k/q\right]T - \left[V_{BE} - (4+m)V_T - E_g/q\right]}{T^2}\\
&= \frac{T\cdot\mathrm{TC} - (4+m)kT/q - T\cdot\mathrm{TC}}{T^2}\\
&= -\frac{(4+m)k}{qT}.
\end{aligned}
$$

Numerically:

$$
\begin{aligned}
T = 200\ \mathrm{K}: &\quad -\frac{2.154\times10^{-4}\ \mathrm{V/K}}{200\ \mathrm{K}} = -1.08\ \mu\mathrm{V/K^2},\\
T = 300\ \mathrm{K}: &\quad -0.72\ \mu\mathrm{V/K^2},\\
T = 400\ \mathrm{K}: &\quad -0.54\ \mu\mathrm{V/K^2}.
\end{aligned}
$$

The slope is negative everywhere and its magnitude shrinks as $1/T$. The second derivative is $+(4+m)k/(qT^2) > 0$, so the curve is **concave up**.

### Step 6 — The sketch

| $T$ (K) | $V_{BE}$ (V) | $\partial V_{BE}/\partial T$ (mV/K) | Slope of curve (μV/K²) |
|---|---|---|---|
| 200 | 0.891 | −1.36 | −1.08 |
| 250 | 0.821 | −1.41 | −0.86 |
| 300 | 0.750 | −1.45 | −0.72 |
| 350 | 0.677 | −1.48 | −0.62 |
| 400 | 0.602 | −1.51 | −0.54 |

With $T$ from 200 to 400 K on the horizontal axis and the TC (about −1.35 to −1.52 mV/K) on the vertical axis, the curve:

- is negative over the whole range;
- falls monotonically, from −1.36 mV/K at 200 K to −1.51 mV/K at 400 K, a change of only about 0.15 mV/K (11 %) over 200 K;
- is nearly a straight line but bends slightly: steeper at low temperature and flatter at high temperature (a $-\ln T$ shape, concave up).

As $T$ rises, $V_{BE}$ falls further below $E_g/q$ while the $(4+m)V_T$ term grows, so the numerator grows slightly faster than $T$. This curvature of $V_{BE}(T)$ is what limits first-order bandgap references.

### Result

$\partial V_{BE}/\partial T$ is negative everywhere and its magnitude grows slowly with temperature:

$$\mathrm{TC}(T) \approx -1.449\ \mathrm{mV/K} - 0.215\ \mathrm{mV/K}\cdot\ln\frac{T}{300\ \mathrm{K}},$$

which gives about −1.36 mV/K at 200 K, −1.41 at 250 K, −1.45 at 300 K, −1.48 at 350 K and −1.51 mV/K at 400 K. The curve is almost linear and slightly concave up, with slope $-(4+m)k/(qT)$: −1.08 μV/K² at 200 K, −0.72 at 300 K and −0.54 μV/K² at 400 K. Along the way $V_{BE}$ goes from 0.891 V (200 K) through 0.750 V (300 K) to 0.602 V (400 K).

**Common mistake.** Keeping $V_{BE} = 750$ mV at every temperature. This gives $(0.750 - 0.0431 - 1.12)/200 = -2.07$ mV/K at 200 K and $(0.750 - 0.0862 - 1.12)/400 = -1.14$ mV/K at 400 K: the magnitude then *decreases* with temperature, the opposite trend, with errors of up to 0.7 mV/K.

**Common mistake.** Using $V_T = 25.9$ mV at all temperatures. $V_T = kT/q$ ranges from 17.2 mV at 200 K to 34.5 mV at 400 K.

**Common mistake.** Taking one large Euler step (for example $V_{BE}(400) = 0.750 - 100\times1.449$ mV $= 0.605$ V) without correcting it with the TC at the new temperature. The error is small here but grows with the step size; averaging the TCs at both ends of each step, or using the exact solution, removes it.
