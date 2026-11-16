# Detailed solution - R547

**Approach.** Differentiate the TC expression with respect to $T$ using the quotient rule. The essential point is that $V_{BE}$ is itself a function of $T$, so its derivative appears inside the result. That derivative is the original expression again, and it cancels, leaving a very simple formula. We then evaluate it, sketch it, and interpret it as the curvature of $V_{BE}(T)$.

### Step 1 — Set up the differentiation

The first derivative (the temperature coefficient of $V_{BE}$ at constant collector current) is

$$\frac{\partial V_{BE}}{\partial T} = \frac{V_{BE} - (4+m)V_T - E_g/q}{T} = \frac{N(T)}{T},$$

where we have named the numerator

$$N(T) = V_{BE}(T) - (4+m)\frac{kT}{q} - \frac{E_g}{q}.$$

Here $V_T = kT/q$ is the thermal voltage, $k$ is Boltzmann's constant, $q$ the electron charge, $E_g$ the bandgap energy of silicon and $m$ the temperature exponent of the minority-carrier mobility.

Which quantities depend on $T$?

- $V_{BE}$ does: it is the very function whose TC we are describing. So $dV_{BE}/dT = \partial V_{BE}/\partial T$, which is not zero.
- $V_T = kT/q$ does, with $dV_T/dT = k/q$.
- $E_g/q$ is treated as constant (the model already absorbs its weak temperature dependence), and so is $m$.

Differentiating each term of $N$:

$$\frac{dN}{dT} = \frac{\partial V_{BE}}{\partial T} - (4+m)\frac{k}{q}.$$

### Step 2 — Apply the quotient rule

For $f = N/T$, the quotient rule gives

$$\frac{df}{dT} = \frac{1}{T}\,\frac{dN}{dT} - \frac{N}{T^2}.$$

Substitute $dN/dT$ from Step 1:

$$\frac{\partial^2 V_{BE}}{\partial T^2} = \frac{1}{T}\left[\frac{\partial V_{BE}}{\partial T} - (4+m)\frac{k}{q}\right] - \frac{N}{T^2}.$$

### Step 3 — Use the original expression to cancel terms

By the definition in Step 1, $N/T = \partial V_{BE}/\partial T$, so

$$\frac{N}{T^2} = \frac{1}{T}\cdot\frac{N}{T} = \frac{1}{T}\,\frac{\partial V_{BE}}{\partial T}.$$

Substitute this into the last term:

$$
\begin{aligned}
\frac{\partial^2 V_{BE}}{\partial T^2} &= \frac{1}{T}\frac{\partial V_{BE}}{\partial T} - \frac{(4+m)k}{qT} - \frac{1}{T}\frac{\partial V_{BE}}{\partial T}\\
&= -\frac{(4+m)k}{qT}.
\end{aligned}
$$

$V_{BE}$ and $E_g$ have dropped out completely. Since $k/(qT) = (kT/q)/T^2 = V_T/T^2$, an equivalent form is

$$\boxed{\frac{\partial^2 V_{BE}}{\partial T^2} = -\frac{(4+m)k}{qT} = -\frac{(4+m)V_T}{T^2}.}$$

**Sign.** With $m = -3/2$, $4 + m = 2.5 > 0$, so the second derivative is **negative** at every temperature.

### Step 4 — Numerical values

The constant in front is

$$(4+m)\frac{k}{q} = 2.5\times\left(8.617\times10^{-5}\ \mathrm{V/K}\right) = 2.154\times10^{-4}\ \mathrm{V/K} = 0.2154\ \mathrm{mV/K}.$$

So $\partial^2V_{BE}/\partial T^2 = -(0.2154\ \mathrm{mV/K})/T$. Evaluate:

$$
\begin{aligned}
T = 200\ \mathrm{K}:&\quad -\frac{2.154\times10^{-4}\ \mathrm{V/K}}{200\ \mathrm{K}} = -1.08\times10^{-6}\ \mathrm{V/K^2} = -1.08\ \mu\mathrm{V/K^2},\\
T = 300\ \mathrm{K}:&\quad -\frac{2.154\times10^{-4}}{300} = -0.72\ \mu\mathrm{V/K^2},\\
T = 400\ \mathrm{K}:&\quad -\frac{2.154\times10^{-4}}{400} = -0.54\ \mu\mathrm{V/K^2}.
\end{aligned}
$$

Check with the second form at 300 K: $V_T = 25.85$ mV, so $-(2.5)(25.85\ \mathrm{mV})/(300\ \mathrm{K})^2 = -64.6\ \mathrm{mV}/9\times10^4\ \mathrm{K^2} = -0.72\ \mu\mathrm{V/K^2}$. The two forms agree.

### Step 5 — The sketch

| $T$ (K) | 200 | 250 | 300 | 350 | 400 |
|---|---|---|---|---|---|
| $\partial^2V_{BE}/\partial T^2$ (μV/K²) | −1.08 | −0.86 | −0.72 | −0.62 | −0.54 |

Plot $T$ horizontally and $\partial^2V_{BE}/\partial T^2$ vertically. The curve is a branch of the hyperbola $y = -C/T$ with $C = 0.2154$ mV/K:

- it lies entirely **below zero**;
- its magnitude is largest at low temperature and **falls toward zero as $T$ increases** (halving from 200 K to 400 K), approaching the $T$ axis asymptotically;
- it rises with $T$, with slope $+C/T^2$ (2.4 nV/K³ at 300 K), and bends over (concave down), because the second derivative of $-C/T$ is $-2C/T^3 < 0$;
- toward $T \to 0$ it would diverge to $-\infty$, but the model applies only over the normal operating range.

### Step 6 — What the result means: curvature of $V_{BE}(T)$

A negative second derivative means that $V_{BE}(T)$ is **concave down**: its slope, already negative (about −1.5 mV/K), becomes slightly more negative as temperature rises. Over 100 K near room temperature the slope changes by roughly $0.72\ \mu\mathrm{V/K^2}\times100\ \mathrm{K} \approx 0.07$ mV/K, i.e. about 5 %.

This matters for bandgap references. A bandgap adds a term proportional to absolute temperature (PTAT, $\propto V_T$) to $V_{BE}$, with its size chosen so that the total TC is zero at some temperature $T_0$. A PTAT term is linear in $T$, so its second derivative is zero. It cancels the *slope* of $V_{BE}$ at $T_0$ but cannot cancel the curvature. Expanding the reference voltage in a Taylor series about $T_0$ (value, zero slope, then curvature):

$$
\begin{aligned}
V_{REF}(T) &\approx V_{REF}(T_0) + 0\cdot(T - T_0) + \frac12\,\frac{\partial^2V_{BE}}{\partial T^2}\Big|_{T_0}(T - T_0)^2\\
&= V_{REF}(T_0) - \frac{(4+m)k}{2qT_0}(T - T_0)^2 .
\end{aligned}
$$

So the reference voltage has a maximum at $T_0$ and falls off parabolically on both sides. For $T_0 = 300$ K and $|T - T_0| = 100$ K:

$$\Delta V_{REF} \approx -\frac{2.154\times10^{-4}\ \mathrm{V/K}}{2\times300\ \mathrm{K}}\,(100\ \mathrm{K})^2 = -\frac{2.154}{600}\ \mathrm{V} = -3.6\ \mathrm{mV}.$$

This residual "bow" of a few millivolts limits a simple bandgap's accuracy to roughly 10–20 ppm/°C and is the motivation for curvature-correction techniques.

### Result

$$\frac{\partial^2V_{BE}}{\partial T^2} = \frac{d}{dT}\left[\frac{V_{BE} - (4+m)V_T - E_g/q}{T}\right] = -\frac{(4+m)k}{qT} = -\frac{(4+m)V_T}{T^2}.$$

The $V_{BE}$ and $E_g$ terms cancel. For $m = -3/2$ this is $-(0.215\ \mathrm{mV/K})/T$: −1.08 μV/K² at 200 K, −0.72 μV/K² at 300 K and −0.54 μV/K² at 400 K.

**Sketch:** a negative hyperbola $\propto -1/T$, largest in magnitude at low temperature and rising toward zero as $T$ increases. $V_{BE}(T)$ is therefore concave down, which leaves a bandgap reference with a residual parabolic curvature (about −3.6 mV at ±100 K from its zero-TC temperature).

**Common mistake.** Treating $V_{BE}$ as a constant while differentiating. Then

$$\frac{d}{dT}\left[\frac{V_{BE} - (4+m)kT/q - E_g/q}{T}\right]_{V_{BE}\,\text{fixed}} = \frac{E_g/q - V_{BE}}{T^2},$$

which is positive (about $+0.37\ \mathrm{V}/(300\ \mathrm{K})^2 = +4.1\ \mu\mathrm{V/K^2}$ at room temperature). It has the wrong sign and is about six times too large. $V_{BE}$ changes by about −1.5 mV/K, and leaving out that change removes exactly the term that cancels $N/T^2$.

**Common mistake.** Treating $V_T$ as a constant. Then the $-(4+m)k/q$ term from differentiating $V_T$ disappears and the result is zero. The entire curvature comes from the $T$ dependence of the $(4+m)V_T$ term.

**Common mistake.** Drawing a curvature that grows in magnitude with temperature. The result is proportional to $1/T$, so its magnitude *decreases* as $T$ rises.
