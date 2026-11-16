# Detailed solution - R597

**Approach.** Work with the settled values, when no current flows in the capacitors. Each amplifier input is a floating node connected only to capacitors, so charge conservation applies there; each output node obeys "output voltage = (sum of injected currents) × $R_{out}$". We first find the error of the main amplifier alone, then the virtual-ground voltage $V_X$ of the identical auxiliary amplifier, and finally solve the main amplifier with the extra current injected by the error amplifier.

### Step 1 — Model, notation and settled-state equations

Every amplifier is a Norton equivalent: an output current $G_m(V_+ - V_-)$ and, for the main and auxiliary amplifiers, an output resistance $R_{out}$ to ground. All + inputs are grounded. The nodes are:

- **M:** inverting input of the main amplifier ($C_1$ from $V_{in}$, $C_2$ to Y);
- **Y:** output; it receives the main amplifier's current $G_m(0 - V_M)$ and the error amplifier's current $G_m(0 - V_X)$, and has $R_{out}$ to ground (the error amplifier's own output impedance is much larger and is neglected);
- **X:** inverting input of the auxiliary amplifier ($C_1$ from $V_{in}$, $C_2$ to Z);
- **Z:** auxiliary output, receiving $G_m(0 - V_X)$, with $R_{out}$ to ground.

<!-- diagram: diagram-01.cir -->

All voltages are changes from the reset state, in which every capacitor was discharged. Write $A = G_mR_{out}$ (the open-loop gain, $A \gg 1$) and introduce the shorthand

$$S = C_1 + C_2, \qquad D = C_1 + C_2 + AC_2 = S + AC_2 .$$

**Charge conservation at an amplifier input** (e.g. X): the charge entering through $C_1$ equals the charge leaving through $C_2$:

$$C_1(V_{in} - V_X) = C_2(V_X - V_Z).$$

**Output node in steady state:** no current flows in $C_2$, so all the injected current flows through $R_{out}$.

### Step 2 — Reference: the main amplifier alone

Without the error amplifier, $V_Y = -AV_M$. Charge conservation at M:

$$
\begin{aligned}
C_1(V_{in} - V_M) &= C_2(V_M + AV_M)\\
C_1V_{in} &= (C_1 + C_2 + AC_2)\,V_M = D\,V_M\\
V_M &= \frac{C_1V_{in}}{D},\\
V_Y = -AV_M &= -\frac{AC_1}{D}V_{in} = -\frac{C_1}{C_2}\cdot\frac{AC_2}{D}\,V_{in} = -\frac{C_1}{C_2}\left(1 - \frac{S}{D}\right)V_{in}.
\end{aligned}
$$

So a single amplifier has gain error $S/D = (C_1 + C_2)/(C_1 + C_2 + AC_2) \approx (1 + C_1/C_2)/A$, the familiar $1/(\text{loop gain})$. Its origin is the nonzero voltage $V_M$: the amplifier needs an input voltage to produce its output current, so M is not an exact virtual ground.

### Step 3 — Auxiliary amplifier: the replica of that error voltage

The auxiliary amplifier is identical and driven by the same $V_{in}$, so it settles exactly like the main amplifier alone. With $V_Z = R_{out}\,G_m(0 - V_X) = -AV_X$ and charge conservation at X:

$$
\begin{aligned}
C_1(V_{in} - V_X) &= C_2(V_X + AV_X)\\
V_X &= \frac{C_1V_{in}}{C_1 + C_2 + AC_2} = \frac{C_1V_{in}}{D}.
\end{aligned}
$$

$V_X$ is a copy of the error voltage that the main amplifier would have at its input.

### Step 4 — Main amplifier with the error-amplifier current

**Output node Y.** Two currents flow into Y, from the main amplifier and from the error amplifier:

$$V_Y = R_{out}\left[G_m(0 - V_M) + G_m(0 - V_X)\right] = -A\,(V_M + V_X).$$

**Charge conservation at M:**

$$C_1(V_{in} - V_M) = C_2(V_M - V_Y) = C_2V_M + AC_2(V_M + V_X).$$

Collect the $V_M$ terms:

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

The main amplifier's input error is now smaller by the factor $S/D \approx 1/(\text{loop gain})$: the error amplifier supplies (almost) the current the main amplifier would otherwise need, so M sits much closer to virtual ground. Next:

$$V_M + V_X = \frac{C_1V_{in}S}{D^2} + \frac{C_1V_{in}D}{D^2} = \frac{C_1V_{in}\,(S + D)}{D^2}.$$

Finally, with $A = (D - S)/C_2$:

$$
\begin{aligned}
V_Y &= -A\,(V_M + V_X) = -\frac{D - S}{C_2}\cdot\frac{C_1V_{in}\,(D + S)}{D^2}\\
&= -\frac{C_1}{C_2}\,V_{in}\,\frac{D^2 - S^2}{D^2}\\
&= -\frac{C_1}{C_2}\,V_{in}\left[1 - \left(\frac{S}{D}\right)^2\right].
\end{aligned}
$$

### Step 6 — Gain error

The gain is $V_{out}/V_{in} = -(C_1/C_2)(1 - \varepsilon)$ with

$$\varepsilon = \left(\frac{S}{D}\right)^2 = \left(\frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2}\right)^2 \approx \left(\frac{1 + C_1/C_2}{G_mR_{out}}\right)^2 \quad(G_mR_{out} \gg 1 + C_1/C_2).$$

This is exactly the **square** of the main amplifier's own error (Step 2). For example:

- $G_mR_{out} = 100$, $C_1 = C_2$: single amplifier $2/102 = 1.96\ \%$; with the correction $(1.96\ \%)^2 = 0.038\ \%$;
- $G_mR_{out} = 1000$, $C_1/C_2 = 4$: single amplifier $5/1005 = 0.50\ \%$; with the correction $2.5\times10^{-5}$.

**Why not zero?** The error amplifier injects $-G_mV_X$, where $V_X$ is the input error of an amplifier that has to deliver the *whole* output current by itself. The main amplifier now needs only a small residual current, so its actual input voltage $V_M$ is not equal to zero but to $S/D$ times the replica's value; that residual is the first-order error multiplied by itself, so the cancellation is complete only to first order.

### Result

$$\frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}\,(1 - \varepsilon), \qquad \varepsilon = \left(\frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2}\right)^2 \approx \left(\frac{1 + C_1/C_2}{G_mR_{out}}\right)^2 .$$

The gain error is second order in $1/(G_mR_{out})$: the square of the error of the main amplifier alone. The auxiliary amplifier reproduces the main amplifier's virtual-ground error, and the error amplifier cancels it to first order.

**Common mistake.** Claiming perfect cancellation (zero error). The replica's voltage $V_X$ describes an amplifier that delivers all of its output current from its own input voltage; once the error amplifier helps, the main amplifier's operating point changes, and a residual error $(S/D)^2$ remains.

**Common mistake.** Adding the error-amplifier current with the wrong sign. The error amplifier's + input is grounded and its − input is X, so it injects $G_m(0 - V_X)$, the same polarity as the main amplifier's own current $G_m(0 - V_M)$. With the opposite sign the two currents fight, $V_M$ grows instead of shrinking, and the error roughly doubles instead of being squared. Quoting the single-amplifier error $(C_1 + C_2)/(G_mR_{out}C_2)$ for the complete circuit misses the purpose of the auxiliary path.
