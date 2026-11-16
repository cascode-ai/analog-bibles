# Detailed solution - R598

**Approach.** Analyse the settled state, where no current flows through the capacitors: charge conservation holds at the floating inverting input, and the output voltage equals the injected current times $R_{out}$. These two equations give the gain error $\varepsilon_0$ of the main amplifier alone; repeating the analysis for the complete circuit gives $\varepsilon_0^2$.

### Step 1 — Equations of the main amplifier alone

Call the inverting input M. All voltages are changes from the reset state (capacitors discharged), and $A = G_mR_{out} \gg 1$.

<!-- diagram: diagram-01.cir -->

Settled, no current flows in $C_2$, so the whole amplifier current flows in $R_{out}$:

$$V_Y = R_{out}\,G_m(0 - V_M) = -A\,V_M .$$

M touches only capacitor plates, so the charge delivered through $C_1$ equals the charge passed on to $C_2$:

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
&= -\frac{C_1}{C_2}\left(1 - \frac{C_1 + C_2}{C_1 + C_2 + AC_2}\right),
\end{aligned}
$$

so the gain error, the relative shortfall from $-C_1/C_2$, is

$$\varepsilon_0 = \frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2} \approx \frac{1 + C_1/C_2}{G_mR_{out}}.$$

With the feedback factor $\beta = C_2/(C_1 + C_2)$, $\varepsilon_0 = 1/(1 + \beta A) \approx 1/(\beta A)$: the amplifier needs a nonzero input $V_M$ to produce its output current, so M is not a perfect virtual ground.

### Step 3 — The complete circuit, for comparison

Write $S = C_1 + C_2$ and $D = C_1 + C_2 + AC_2$, so that $\varepsilon_0 = S/D$.

**Auxiliary amplifier.** It is identical with the same input, so by Step 2 (X in place of M, with its own output) its input settles at

$$V_X = \frac{C_1V_{in}}{D} = \varepsilon_0\,\frac{C_1V_{in}}{C_1 + C_2},$$

exactly the uncorrected input error $V_M$ of the main amplifier.

**Main amplifier with the error current.** Y now receives $G_m(0 - V_M)$ and $G_m(0 - V_X)$ (the error amplifier's own output resistance is neglected):

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
&= -\frac{C_1}{C_2}\,V_{in}\left[1 - \left(\frac{S}{D}\right)^2\right],
\end{aligned}
$$

so the complete circuit has gain error

$$\varepsilon = \left(\frac{S}{D}\right)^2 = \varepsilon_0^2 .$$

### Step 4 — Comparison

$$\frac{\varepsilon_0}{\varepsilon} = \frac{1}{\varepsilon_0} = \frac{C_1 + C_2 + G_mR_{out}C_2}{C_1 + C_2} \approx \frac{G_mR_{out}C_2}{C_1 + C_2} = \beta A .$$

The auxiliary and error amplifiers reduce the gain error by a factor equal to the loop gain. With $C_1/C_2 = 4$ and $G_mR_{out} = 1000$:

$$
\begin{aligned}
\varepsilon_0 &= \frac{4 + 1}{4 + 1 + 1000} = \frac{5}{1005} = 0.50\ \%,\\
\varepsilon &= \varepsilon_0^2 = (0.004975)^2 = 2.5\times10^{-5} = 25\ \mathrm{ppm}.
\end{aligned}
$$

The replica's input voltage $V_X$ measures the main amplifier's virtual-ground error, and the error amplifier turns it into the current $-G_mV_X$ that the main amplifier would otherwise have to generate from its own input error; only a second-order residue remains.

### Result

- **Main amplifier alone:**
$$\varepsilon_0 = \frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2} \approx \frac{1 + C_1/C_2}{G_mR_{out}},$$
i.e. $1/(\text{loop gain})$, first order in $1/(G_mR_{out})$.
- **Complete circuit:** $\varepsilon = \varepsilon_0^2$, second order. The correction improves the gain error by a factor $1/\varepsilon_0 \approx G_mR_{out}C_2/(C_1 + C_2)$, the loop gain; e.g. 0.5 % becomes 25 ppm for $C_1/C_2 = 4$ and $G_mR_{out} = 1000$.

**Common mistake.** Writing the single-amplifier error as $1/(G_mR_{out})$. Only the fraction $\beta = C_2/(C_1 + C_2)$ of the output is fed back, so the error is $(1 + C_1/C_2)/(G_mR_{out})$, five times larger for $C_1/C_2 = 4$.

**Common mistake.** Concluding that the auxiliary and error amplifiers make no difference, or only halve the error. They remove the first-order term entirely; the remaining error is the square of the original one.
