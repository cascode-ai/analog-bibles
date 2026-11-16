# Detailed solution - R547

**Approach.** Differentiate the TC expression with the quotient rule. Because $V_{BE}$ depends on $T$, its derivative (the original expression) appears in the result and cancels, leaving a very simple formula. Then evaluate it, sketch it, and interpret it as the curvature of $V_{BE}(T)$.

### Step 1 — Differentiate and cancel

Name the numerator:

$$\frac{\partial V_{BE}}{\partial T} = \frac{N(T)}{T}, \qquad N(T) = V_{BE}(T) - (4+m)\frac{kT}{q} - \frac{E_g}{q}.$$

$V_{BE}$ and $V_T = kT/q$ depend on $T$, while $E_g/q$ and $m$ are constants, so

$$\frac{dN}{dT} = \frac{\partial V_{BE}}{\partial T} - (4+m)\frac{k}{q}.$$

The quotient rule gives

$$\frac{\partial^2 V_{BE}}{\partial T^2} = \frac{1}{T}\,\frac{dN}{dT} - \frac{N}{T^2} = \frac{1}{T}\left[\frac{\partial V_{BE}}{\partial T} - (4+m)\frac{k}{q}\right] - \frac{N}{T^2}.$$

By definition $N/T = \partial V_{BE}/\partial T$, so $N/T^2 = (1/T)\,\partial V_{BE}/\partial T$, and

$$
\begin{aligned}
\frac{\partial^2 V_{BE}}{\partial T^2} &= \frac{1}{T}\frac{\partial V_{BE}}{\partial T} - \frac{(4+m)k}{qT} - \frac{1}{T}\frac{\partial V_{BE}}{\partial T}\\
&= -\frac{(4+m)k}{qT}.
\end{aligned}
$$

$V_{BE}$ and $E_g$ drop out completely. Since $k/(qT) = V_T/T^2$,

$$\boxed{\frac{\partial^2 V_{BE}}{\partial T^2} = -\frac{(4+m)k}{qT} = -\frac{(4+m)V_T}{T^2}.}$$

With $m = -3/2$, $4 + m = 2.5 > 0$, so the second derivative is **negative** at every temperature.

### Step 2 — Numerical values

$$(4+m)\frac{k}{q} = 2.5\times\left(8.617\times10^{-5}\ \mathrm{V/K}\right) = 2.154\times10^{-4}\ \mathrm{V/K} = 0.2154\ \mathrm{mV/K},$$

so $\partial^2V_{BE}/\partial T^2 = -(0.2154\ \mathrm{mV/K})/T$:

$$
\begin{aligned}
T = 200\ \mathrm{K}:&\quad -\frac{2.154\times10^{-4}\ \mathrm{V/K}}{200\ \mathrm{K}} = -1.08\times10^{-6}\ \mathrm{V/K^2} = -1.08\ \mu\mathrm{V/K^2},\\
T = 300\ \mathrm{K}:&\quad -\frac{2.154\times10^{-4}}{300} = -0.72\ \mu\mathrm{V/K^2},\\
T = 400\ \mathrm{K}:&\quad -\frac{2.154\times10^{-4}}{400} = -0.54\ \mu\mathrm{V/K^2}.
\end{aligned}
$$

Check with the second form at 300 K: $V_T = 25.85$ mV, so $-(2.5)(25.85\ \mathrm{mV})/(300\ \mathrm{K})^2 = -64.6\ \mathrm{mV}/9\times10^4\ \mathrm{K^2} = -0.72\ \mu\mathrm{V/K^2}$.

### Step 3 — The sketch

| $T$ (K) | 200 | 250 | 300 | 350 | 400 |
|---|---|---|---|---|---|
| $\partial^2V_{BE}/\partial T^2$ (μV/K²) | −1.08 | −0.86 | −0.72 | −0.62 | −0.54 |

With $T$ horizontal, the curve is a branch of the hyperbola $y = -C/T$ with $C = 0.2154$ mV/K:

- it lies entirely **below zero**;
- its magnitude is largest at low temperature and **falls toward zero as $T$ increases** (halving from 200 K to 400 K), approaching the $T$ axis asymptotically;
- it rises with slope $+C/T^2$ (2.4 nV/K³ at 300 K) and is concave down, since the second derivative of $-C/T$ is $-2C/T^3 < 0$;
- toward $T \to 0$ it would diverge to $-\infty$, but the model applies only over the normal operating range.

### Step 4 — What the result means: curvature of $V_{BE}(T)$

$V_{BE}(T)$ is **concave down**: its slope, already about −1.5 mV/K, becomes slightly more negative as temperature rises. Over 100 K near room temperature the slope changes by roughly $0.72\ \mu\mathrm{V/K^2}\times100\ \mathrm{K} \approx 0.07$ mV/K, about 5 %.

A bandgap reference adds a PTAT term ($\propto V_T$) sized to make the total TC zero at some temperature $T_0$. That term is linear in $T$, so it cancels the *slope* of $V_{BE}$ at $T_0$ but not the curvature. A Taylor expansion about $T_0$ gives

$$
\begin{aligned}
V_{REF}(T) &\approx V_{REF}(T_0) + 0\cdot(T - T_0) + \frac12\,\frac{\partial^2V_{BE}}{\partial T^2}\Big|_{T_0}(T - T_0)^2\\
&= V_{REF}(T_0) - \frac{(4+m)k}{2qT_0}(T - T_0)^2 .
\end{aligned}
$$

So the reference voltage has a maximum at $T_0$ and falls off parabolically on both sides. For $T_0 = 300$ K and $|T - T_0| = 100$ K:

$$\Delta V_{REF} \approx -\frac{2.154\times10^{-4}\ \mathrm{V/K}}{2\times300\ \mathrm{K}}\,(100\ \mathrm{K})^2 = -\frac{2.154}{600}\ \mathrm{V} = -3.6\ \mathrm{mV}.$$

This residual "bow" of a few millivolts limits a simple bandgap to roughly 10–20 ppm/°C and motivates curvature correction.

### Result

$$\frac{\partial^2V_{BE}}{\partial T^2} = \frac{d}{dT}\left[\frac{V_{BE} - (4+m)V_T - E_g/q}{T}\right] = -\frac{(4+m)k}{qT} = -\frac{(4+m)V_T}{T^2}.$$

The $V_{BE}$ and $E_g$ terms cancel. For $m = -3/2$ this is $-(0.215\ \mathrm{mV/K})/T$: −1.08 μV/K² at 200 K, −0.72 μV/K² at 300 K and −0.54 μV/K² at 400 K.

**Sketch:** a negative hyperbola $\propto -1/T$, largest in magnitude at low temperature and rising toward zero as $T$ increases. $V_{BE}(T)$ is therefore concave down, which leaves a bandgap reference with a residual parabolic curvature (about −3.6 mV at ±100 K from its zero-TC temperature).

**Common mistake.** Treating $V_{BE}$ as a constant while differentiating. Then

$$\frac{d}{dT}\left[\frac{V_{BE} - (4+m)kT/q - E_g/q}{T}\right]_{V_{BE}\,\text{fixed}} = \frac{E_g/q - V_{BE}}{T^2},$$

which is positive (about $+0.37\ \mathrm{V}/(300\ \mathrm{K})^2 = +4.1\ \mu\mathrm{V/K^2}$ at room temperature): the wrong sign and about six times too large, because the dropped term is exactly the one that cancels $N/T^2$.

**Common mistake.** Treating $V_T$ as a constant. The $-(4+m)k/q$ term then disappears and the result is zero, yet the entire curvature comes from the $T$ dependence of $(4+m)V_T$.

**Common mistake.** Drawing a curvature that grows in magnitude with temperature. The result is proportional to $1/T$, so its magnitude *decreases* as $T$ rises.
