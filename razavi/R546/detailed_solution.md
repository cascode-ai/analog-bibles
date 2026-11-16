# Detailed solution - R546

**Approach.** The given expression is not a formula we can just evaluate at each temperature, because it contains $V_{BE}$, which itself changes with $T$. It is really a differential equation for $V_{BE}(T)$. We evaluate it at 300 K, step outward in temperature (updating $V_{BE}$ as we go, with an iteration at each step), confirm the result with the exact solution of the differential equation, and then describe the curve.

### Step 1 — Constants and the value at 300 K

Write the temperature coefficient (TC) as

$$\mathrm{TC}(T) \equiv \frac{\partial V_{BE}}{\partial T} = \frac{V_{BE} - (4+m)V_T - E_g/q}{T}.$$

The constants are:

- $k/q = 8.617\times10^{-5}$ V/K (Boltzmann's constant divided by the electron charge), so the thermal voltage is $V_T = kT/q$;
- $E_g/q = 1.12$ V (the bandgap energy of 1.12 eV expressed as a voltage);
- $4 + m = 4 - 1.5 = 2.5$.

Note that $V_T$ is **not** a constant: it is proportional to $T$.

At $T_0 = 300$ K with $V_{BE0} = 0.750$ V:

$$
\begin{aligned}
V_{T0} &= (8.617\times10^{-5}\ \mathrm{V/K})(300\ \mathrm{K}) = 25.85\ \mathrm{mV},\\
(4+m)V_{T0} &= 2.5\times25.85\ \mathrm{mV} = 64.63\ \mathrm{mV},\\
\text{numerator} &= 0.750 - 0.06463 - 1.120 = -0.43463\ \mathrm{V},\\
\mathrm{TC}(300\ \mathrm{K}) &= \frac{-0.43463\ \mathrm{V}}{300\ \mathrm{K}} = -1.449\ \mathrm{mV/K}.
\end{aligned}
$$

### Step 2 — Why $V_{BE}$ must be updated

At about $-1.45$ mV/K, a 100-K change in temperature moves $V_{BE}$ by roughly 145 mV. That is large compared with the numerator of the TC formula (about 0.43 V), so holding $V_{BE}$ at 750 mV would give badly wrong values. At each new temperature we must use the $V_{BE}$ that the transistor *actually* has there (at the same collector current), and that value is obtained by integrating the TC itself.

### Step 3 — Stepping from 300 K to 350 K (one worked iteration)

Use 50-K steps. Over a step from $T$ to $T + \Delta T$, the change in $V_{BE}$ is the step size times the *average* TC over the step (trapezoidal rule):

$$V_{BE}(T + \Delta T) = V_{BE}(T) + \Delta T\cdot\frac{\mathrm{TC}(T) + \mathrm{TC}(T + \Delta T)}{2}.$$

The unknown $\mathrm{TC}(T + \Delta T)$ depends on $V_{BE}(T + \Delta T)$, so we iterate: guess, evaluate, correct.

At 350 K the $V_T$ term is $(4+m)V_T = 2.5\times(8.617\times10^{-5})(350) = 75.40$ mV.

**Guess** (use the TC at 300 K for the whole step):

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

### Step 4 — The remaining steps

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

### Step 5 — Check with the exact solution

The TC formula is a first-order linear differential equation:

$$\frac{dV_{BE}}{dT} - \frac{V_{BE}}{T} = -(4+m)\frac{k}{q} - \frac{E_g}{qT}.$$

Divide by $T$. The left side becomes an exact derivative, because $\dfrac{d}{dT}\left(\dfrac{V_{BE}}{T}\right) = \dfrac{1}{T}\dfrac{dV_{BE}}{dT} - \dfrac{V_{BE}}{T^2}$:

$$\frac{d}{dT}\left(\frac{V_{BE}}{T}\right) = -(4+m)\frac{k}{q}\cdot\frac{1}{T} - \frac{E_g}{q}\cdot\frac{1}{T^2}.$$

Integrate from $T_0$ to $T$:

$$\frac{V_{BE}}{T} - \frac{V_{BE0}}{T_0} = -(4+m)\frac{k}{q}\ln\frac{T}{T_0} + \frac{E_g}{q}\left(\frac{1}{T} - \frac{1}{T_0}\right).$$

Multiply by $T$:

$$V_{BE}(T) = \frac{E_g}{q} + \frac{T}{T_0}\left(V_{BE0} - \frac{E_g}{q}\right) - (4+m)\frac{kT}{q}\ln\frac{T}{T_0}.$$

Substituting this back into the TC formula, the $E_g/q$ terms cancel and

$$\mathrm{TC}(T) = \underbrace{\frac{V_{BE0} - (4+m)V_{T0} - E_g/q}{T_0}}_{-1.449\ \mathrm{mV/K}} - \underbrace{(4+m)\frac{k}{q}}_{0.2154\ \mathrm{mV/K}}\ln\frac{T}{T_0}.$$

Here $(4+m)k/q = 2.5\times8.617\times10^{-5} = 0.2154$ mV/K. Evaluate:

$$
\begin{aligned}
\mathrm{TC}(200) &= -1.449 - 0.2154\ln(0.667) = -1.449 + 0.087 = -1.361\ \mathrm{mV/K},\\
\mathrm{TC}(250) &= -1.449 - 0.2154\ln(0.833) = -1.449 + 0.039 = -1.410\ \mathrm{mV/K},\\
\mathrm{TC}(350) &= -1.449 - 0.2154\ln(1.167) = -1.449 - 0.033 = -1.482\ \mathrm{mV/K},\\
\mathrm{TC}(400) &= -1.449 - 0.2154\ln(1.333) = -1.449 - 0.062 = -1.511\ \mathrm{mV/K}.
\end{aligned}
$$

These agree with the iteration to within 0.001 mV/K. The exact $V_{BE}$ values are 0.891 V (200 K), 0.821 V (250 K), 0.677 V (350 K) and 0.602 V (400 K), also as in Step 4.

### Step 6 — Slope and curvature of the TC curve

Differentiate the TC formula directly, using $dV_{BE}/dT = \mathrm{TC}$ (quotient rule):

$$
\begin{aligned}
\frac{d\,\mathrm{TC}}{dT} &= \frac{\left[\mathrm{TC} - (4+m)k/q\right]T - \left[V_{BE} - (4+m)V_T - E_g/q\right]}{T^2}\\
&= \frac{T\cdot\mathrm{TC} - (4+m)kT/q - T\cdot\mathrm{TC}}{T^2}\\
&= -\frac{(4+m)k}{qT}.
\end{aligned}
$$

(The bracket in the second term of the first line equals $T\cdot\mathrm{TC}$ by the definition of TC.) Numerically:

$$
\begin{aligned}
T = 200\ \mathrm{K}: &\quad -\frac{2.154\times10^{-4}\ \mathrm{V/K}}{200\ \mathrm{K}} = -1.08\ \mu\mathrm{V/K^2},\\
T = 300\ \mathrm{K}: &\quad -0.72\ \mu\mathrm{V/K^2},\\
T = 400\ \mathrm{K}: &\quad -0.54\ \mu\mathrm{V/K^2}.
\end{aligned}
$$

The slope is negative everywhere (TC becomes more negative as $T$ rises) and its magnitude shrinks as $1/T$. The second derivative is $+(4+m)k/(qT^2) > 0$, so the curve is **concave up**.

### Step 7 — The sketch

| $T$ (K) | $V_{BE}$ (V) | $\partial V_{BE}/\partial T$ (mV/K) | Slope of curve (μV/K²) |
|---|---|---|---|
| 200 | 0.891 | −1.36 | −1.08 |
| 250 | 0.821 | −1.41 | −0.86 |
| 300 | 0.750 | −1.45 | −0.72 |
| 350 | 0.677 | −1.48 | −0.62 |
| 400 | 0.602 | −1.51 | −0.54 |

Plot $T$ on the horizontal axis (200 to 400 K) and the TC on the vertical axis (about −1.35 to −1.52 mV/K). The curve:

- is negative over the whole range;
- falls monotonically, from −1.36 mV/K at 200 K to −1.51 mV/K at 400 K, a change of only about 0.15 mV/K (11 %) over 200 K;
- is nearly a straight line but bends slightly: steeper at low temperature and flatter at high temperature (a $-\ln T$ shape, concave up).

**Physical intuition.** $V_{BE}$ extrapolates roughly to the bandgap voltage (1.12 V) at $T = 0$, so its TC is roughly $(V_{BE} - E_g/q)/T$. As $T$ rises, $V_{BE}$ falls further below $E_g/q$ while the $(4+m)V_T$ term grows, and together they make the numerator grow slightly faster than $T$. This curvature of $V_{BE}(T)$ is what limits the accuracy of first-order bandgap references.

### Result

$\partial V_{BE}/\partial T$ is negative everywhere and its magnitude grows slowly with temperature:

$$\mathrm{TC}(T) \approx -1.449\ \mathrm{mV/K} - 0.215\ \mathrm{mV/K}\cdot\ln\frac{T}{300\ \mathrm{K}},$$

which gives about −1.36 mV/K at 200 K, −1.41 at 250 K, −1.45 at 300 K, −1.48 at 350 K and −1.51 mV/K at 400 K. The curve is almost linear and slightly concave up, with slope $-(4+m)k/(qT)$: −1.08 μV/K² at 200 K, −0.72 at 300 K and −0.54 μV/K² at 400 K. Along the way $V_{BE}$ goes from 0.891 V (200 K) through 0.750 V (300 K) to 0.602 V (400 K).

**Common mistake.** Keeping $V_{BE} = 750$ mV at every temperature. This gives $(0.750 - 0.0431 - 1.12)/200 = -2.07$ mV/K at 200 K and $(0.750 - 0.0862 - 1.12)/400 = -1.14$ mV/K at 400 K. The magnitude then *decreases* with temperature, the opposite trend, and the values are off by up to 0.7 mV/K. A real transistor at constant collector current has a lower $V_{BE}$ when hot and a higher one when cold, and that must be fed back into the formula.

**Common mistake.** Using $V_T = 25.9$ mV at all temperatures. The thermal voltage is $kT/q$ and must be recomputed at each $T$: it ranges from 17.2 mV at 200 K to 34.5 mV at 400 K.

**Common mistake.** Taking one large Euler step (for example $V_{BE}(400) = 0.750 - 100\times1.449$ mV $= 0.605$ V) without correcting it with the TC at the new temperature. The error is small here, but it grows with the step size. Averaging the TCs at both ends of each step, or using the exact solution, removes it.
