# Detailed solution - R597

**Approach.** Work with the settled values, when no current flows in the capacitors: charge conservation holds at each floating amplifier input, and each output voltage is the sum of the injected currents times $R_{out}$. Find the error of the main amplifier alone, then the input voltage $V_X$ of the identical auxiliary amplifier, and finally solve the main amplifier with the extra current from the error amplifier.

### Step 1 — Notation and settled-state equations

Call the main amplifier's inverting input M and the auxiliary amplifier's output Z. Y receives $G_m(0 - V_M)$ and $G_m(0 - V_X)$ and has $R_{out}$ to ground (the error amplifier's own output impedance is neglected); Z receives $G_m(0 - V_X)$ and has $R_{out}$ to ground.

<!-- diagram: diagram-01.cir -->

All voltages are changes from the reset state, in which every capacitor was discharged. With $A = G_mR_{out} \gg 1$, define

$$S = C_1 + C_2, \qquad D = C_1 + C_2 + AC_2 = S + AC_2 .$$

At an amplifier input (e.g. X), the charge entering through $C_1$ equals the charge leaving through $C_2$:

$$C_1(V_{in} - V_X) = C_2(V_X - V_Z),$$

and at an output node all the injected current flows through $R_{out}$.

### Step 2 — Baseline: the main amplifier alone

Without the error amplifier, $V_Y = -AV_M$, and charge conservation at M gives

$$
\begin{aligned}
C_1(V_{in} - V_M) &= C_2(V_M + AV_M)\\
C_1V_{in} &= (C_1 + C_2 + AC_2)\,V_M = D\,V_M\\
V_M &= \frac{C_1V_{in}}{D},\\
V_Y = -AV_M &= -\frac{AC_1}{D}V_{in} = -\frac{C_1}{C_2}\cdot\frac{AC_2}{D}\,V_{in} = -\frac{C_1}{C_2}\left(1 - \frac{S}{D}\right)V_{in}.
\end{aligned}
$$

A single amplifier has gain error $S/D = (C_1 + C_2)/(C_1 + C_2 + AC_2) \approx (1 + C_1/C_2)/A$, caused by the nonzero $V_M$ it needs to produce its output current.

### Step 3 — Auxiliary amplifier: the replica of that error voltage

The auxiliary amplifier is identical and driven by the same $V_{in}$, so it settles exactly like the main amplifier alone. With $V_Z = R_{out}\,G_m(0 - V_X) = -AV_X$:

$$
\begin{aligned}
C_1(V_{in} - V_X) &= C_2(V_X + AV_X)\\
V_X &= \frac{C_1V_{in}}{C_1 + C_2 + AC_2} = \frac{C_1V_{in}}{D},
\end{aligned}
$$

a copy of the error voltage the main amplifier would have at its input.

### Step 4 — Main amplifier with the error-amplifier current

Two currents flow into Y:

$$V_Y = R_{out}\left[G_m(0 - V_M) + G_m(0 - V_X)\right] = -A\,(V_M + V_X).$$

Charge conservation at M:

$$C_1(V_{in} - V_M) = C_2(V_M - V_Y) = C_2V_M + AC_2(V_M + V_X).$$

Collecting the $V_M$ terms:

$$
\begin{aligned}
C_1V_{in} - AC_2V_X &= (C_1 + C_2 + AC_2)\,V_M = D\,V_M\\
V_M &= \frac{C_1V_{in} - AC_2V_X}{D}.
\end{aligned}
$$

### Step 5 — Solve for the output

Substitute $V_X = C_1V_{in}/D$ and use $D - AC_2 = S$:

$$
\begin{aligned}
V_M &= \frac{C_1V_{in}}{D}\left(1 - \frac{AC_2}{D}\right) = \frac{C_1V_{in}}{D}\cdot\frac{D - AC_2}{D} = \frac{C_1V_{in}\,S}{D^2}.
\end{aligned}
$$

The main amplifier's input error is now smaller by the factor $S/D$: the error amplifier supplies almost all the current, so M sits much closer to virtual ground. Next,

$$V_M + V_X = \frac{C_1V_{in}S}{D^2} + \frac{C_1V_{in}D}{D^2} = \frac{C_1V_{in}\,(S + D)}{D^2},$$

and with $A = (D - S)/C_2$:

$$
\begin{aligned}
V_Y &= -A\,(V_M + V_X) = -\frac{D - S}{C_2}\cdot\frac{C_1V_{in}\,(D + S)}{D^2}\\
&= -\frac{C_1}{C_2}\,V_{in}\,\frac{D^2 - S^2}{D^2}\\
&= -\frac{C_1}{C_2}\,V_{in}\left[1 - \left(\frac{S}{D}\right)^2\right].
\end{aligned}
$$

### Step 6 — Gain error

The gain is $V_{out}/V_{in} = -(C_1/C_2)(1 - \varepsilon)$ with

$$\varepsilon = \left(\frac{S}{D}\right)^2 = \left(\frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2}\right)^2 \approx \left(\frac{1 + C_1/C_2}{G_mR_{out}}\right)^2 \quad(G_mR_{out} \gg 1 + C_1/C_2),$$

exactly the **square** of the main amplifier's own error (Step 2). For example:

- $G_mR_{out} = 100$, $C_1 = C_2$: single amplifier $2/102 = 1.96\ \%$; with the correction $(1.96\ \%)^2 = 0.038\ \%$;
- $G_mR_{out} = 1000$, $C_1/C_2 = 4$: single amplifier $5/1005 = 0.50\ \%$; with the correction $2.5\times10^{-5}$.

The error is not zero because $V_X$ is the input error of an amplifier that delivers its *whole* output current by itself; with the error amplifier's help the main amplifier still needs a residual $V_M$, $S/D$ times the replica's value, so the cancellation is complete only to first order.

### Result

$$\frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}\,(1 - \varepsilon), \qquad \varepsilon = \left(\frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2}\right)^2 \approx \left(\frac{1 + C_1/C_2}{G_mR_{out}}\right)^2 .$$

The gain error is second order in $1/(G_mR_{out})$: the square of the error of the main amplifier alone. The auxiliary amplifier reproduces the main amplifier's virtual-ground error, and the error amplifier cancels it to first order.

**Common mistake.** Claiming perfect cancellation (zero error). Once the error amplifier helps, the main amplifier's operating point differs from the replica's, and a residual error $(S/D)^2$ remains.

**Common mistake.** Adding the error-amplifier current with the wrong sign: it injects $G_m(0 - V_X)$, the same polarity as the main amplifier's own $G_m(0 - V_M)$, and with the opposite sign the currents fight and the error roughly doubles instead of being squared. Quoting the single-amplifier error $(C_1 + C_2)/(G_mR_{out}C_2)$ for the complete circuit misses the purpose of the auxiliary path.
