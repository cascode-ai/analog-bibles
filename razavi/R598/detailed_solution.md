# Detailed solution - R598

**Approach.** Analyse the settled state, where no current flows through the capacitors. The amplifier's inverting input is a floating node, so charge conservation holds there, and its output voltage equals the injected current times $R_{out}$. Solving these two equations gives the gain of the main amplifier alone and hence its gain error $\varepsilon_0$. Repeating the analysis for the complete circuit shows that its error is $\varepsilon_0^2$.

### Step 1 — Model of the main amplifier alone

With the auxiliary and error amplifiers removed:

- node M, the inverting input, connects to $V_{in}$ through $C_1$ and to the output Y through $C_2$;
- node Y receives the current $G_m(V_+ - V_-) = G_m(0 - V_M)$ and has $R_{out}$ to ground.

<!-- diagram: diagram-01.cir -->

All voltages are changes from the reset state, in which the capacitors were discharged. Define the open-loop gain $A = G_mR_{out}$ ($\gg 1$).

**Output node (settled).** The current in $C_2$ is zero, so the whole amplifier current flows in $R_{out}$:

$$V_Y = R_{out}\,G_m(0 - V_M) = -A\,V_M .$$

**Charge conservation at M.** M touches only capacitor plates, so the charge delivered through $C_1$ equals the charge passed on to $C_2$:

$$C_1(V_{in} - V_M) = C_2(V_M - V_Y).$$

### Step 2 — Gain and gain error of the main amplifier alone

Substitute $V_Y = -AV_M$:

$$
\begin{aligned}
C_1V_{in} - C_1V_M &= C_2V_M + AC_2V_M\\
C_1V_{in} &= (C_1 + C_2 + AC_2)\,V_M\\
V_M &= \frac{C_1V_{in}}{C_1 + C_2 + AC_2}.
\end{aligned}
$$

Then

$$
\begin{aligned}
\frac{V_Y}{V_{in}} = -\frac{AC_1}{C_1 + C_2 + AC_2} &= -\frac{C_1}{C_2}\cdot\frac{AC_2}{C_1 + C_2 + AC_2}\\
&= -\frac{C_1}{C_2}\left(1 - \frac{C_1 + C_2}{C_1 + C_2 + AC_2}\right).
\end{aligned}
$$

The gain error, the relative shortfall from $-C_1/C_2$, is

$$\varepsilon_0 = \frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2} \approx \frac{1 + C_1/C_2}{G_mR_{out}}.$$

**Interpretation.** The feedback factor is $\beta = C_2/(C_1 + C_2)$ (the fraction of $V_Y$ that the capacitive divider returns to M), and the loop gain is $\beta A$. Then $\varepsilon_0 = 1/(1 + \beta A) \approx 1/(\beta A)$. The error exists because the amplifier needs a nonzero input $V_M$ to produce its output current, so M is not a perfect virtual ground.

### Step 3 — The complete circuit, for comparison

Use the shorthand $S = C_1 + C_2$ and $D = C_1 + C_2 + AC_2$, so that $\varepsilon_0 = S/D$.

**Auxiliary amplifier.** It is identical and has the same input, so (Step 2 with X in place of M and its own output Z) its input settles at

$$V_X = \frac{C_1V_{in}}{D} = \varepsilon_0\,\frac{C_1V_{in}}{C_1 + C_2},$$

which is exactly the uncorrected input error $V_M$ of the main amplifier found in Step 2.

**Main amplifier with the error current.** Y now receives two currents, $G_m(0 - V_M)$ from the main amplifier and $G_m(0 - V_X)$ from the error amplifier (whose own output resistance is much larger than $R_{out}$ and is neglected):

$$V_Y = -A\,(V_M + V_X).$$

Charge conservation at M:

$$
\begin{aligned}
C_1(V_{in} - V_M) &= C_2V_M + AC_2(V_M + V_X)\\
C_1V_{in} - AC_2V_X &= D\,V_M\\
V_M &= \frac{C_1V_{in} - AC_2V_X}{D} = \frac{C_1V_{in}}{D}\cdot\frac{D - AC_2}{D} = \frac{C_1V_{in}\,S}{D^2}.
\end{aligned}
$$

The main amplifier's input error is now smaller by the factor $S/D = \varepsilon_0$. Then

$$
\begin{aligned}
V_M + V_X &= \frac{C_1V_{in}(S + D)}{D^2},\\
V_Y &= -A\,\frac{C_1V_{in}(S + D)}{D^2} = -\frac{D - S}{C_2}\cdot\frac{C_1V_{in}(D + S)}{D^2}\qquad(A = (D - S)/C_2)\\
&= -\frac{C_1}{C_2}\,V_{in}\left[1 - \left(\frac{S}{D}\right)^2\right].
\end{aligned}
$$

So the complete circuit has gain error

$$\varepsilon = \left(\frac{S}{D}\right)^2 = \varepsilon_0^2 .$$

### Step 4 — Comparison

$$\frac{\varepsilon_0}{\varepsilon} = \frac{1}{\varepsilon_0} = \frac{C_1 + C_2 + G_mR_{out}C_2}{C_1 + C_2} \approx \frac{G_mR_{out}C_2}{C_1 + C_2} = \beta A .$$

The auxiliary and error amplifiers reduce the gain error by a factor equal to the loop gain. Numerical example with $C_1/C_2 = 4$ and $G_mR_{out} = 1000$:

$$
\begin{aligned}
\varepsilon_0 &= \frac{4 + 1}{4 + 1 + 1000} = \frac{5}{1005} = 0.50\ \%,\\
\varepsilon &= \varepsilon_0^2 = (0.004975)^2 = 2.5\times10^{-5} = 25\ \mathrm{ppm}.
\end{aligned}
$$

**Why it works.** The auxiliary amplifier is a replica, so its input voltage $V_X$ is a measurement of the main amplifier's virtual-ground error. The error amplifier converts it into the current $-G_mV_X$, which is what the main amplifier would otherwise have to generate from its own input error. Relieved of that duty, the main amplifier settles with a much smaller input voltage, and only a second-order residue remains.

### Result

- **Main amplifier alone:**
$$\varepsilon_0 = \frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2} \approx \frac{1 + C_1/C_2}{G_mR_{out}},$$
i.e. $1/(\text{loop gain})$, first order in $1/(G_mR_{out})$.
- **Complete circuit:** $\varepsilon = \varepsilon_0^2$, second order. The correction improves the gain error by a factor $1/\varepsilon_0 \approx G_mR_{out}C_2/(C_1 + C_2)$, the loop gain; e.g. 0.5 % becomes 25 ppm for $C_1/C_2 = 4$ and $G_mR_{out} = 1000$.

**Common mistake.** Writing the single-amplifier error as $1/(G_mR_{out})$. The amplifier sees only the fraction $\beta = C_2/(C_1 + C_2)$ of its output fed back, so the error is $1/(\beta G_mR_{out}) = (1 + C_1/C_2)/(G_mR_{out})$, five times larger for $C_1/C_2 = 4$.

**Common mistake.** Concluding that the auxiliary and error amplifiers make no difference, or that they only halve the error. They remove the first-order term entirely; the remaining error is the square of the original one.
