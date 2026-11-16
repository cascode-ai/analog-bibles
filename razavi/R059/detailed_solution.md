# Detailed solution - R059

**Approach.** Use the exponential subthreshold law. For the first part, take the ratio of the currents at two gate voltages and require it to be 10. For the second part, differentiate the current with respect to $V_{GS}$ to get $g_m = I_D/(\zeta V_T)$ and substitute the numbers.

### Step 1 — The subthreshold law

In the subthreshold (weak-inversion) region the drain current is exponential in the gate–source voltage:

$$I_D = I_0\exp\frac{V_{GS}}{\zeta V_T},$$

where:

- $I_0$ is a constant that depends on the process and the device size (it cancels in everything below);
- $\zeta > 1$ is the subthreshold slope factor (here $\zeta = 1.5$). It accounts for the fact that only a fraction $1/\zeta$ of a gate-voltage change reaches the channel surface, because of the capacitive divider between the oxide capacitance and the depletion capacitance;
- $V_T = kT/q$ is the thermal voltage ($k$ = Boltzmann's constant, $T$ = absolute temperature, $q$ = electron charge), about 26 mV at room temperature.

The product that appears everywhere is

$$\zeta V_T = 1.5\times26\ \mathrm{mV} = 39\ \mathrm{mV}.$$

### Step 2 — Gate-voltage change for a tenfold change in $I_D$

Let the gate voltage change from $V_{GS1}$ to $V_{GS2} = V_{GS1} + \Delta V_{GS}$. The ratio of the two currents is

$$\frac{I_{D2}}{I_{D1}} = \frac{I_0\exp\left[V_{GS2}/(\zeta V_T)\right]}{I_0\exp\left[V_{GS1}/(\zeta V_T)\right]} = \exp\frac{V_{GS2} - V_{GS1}}{\zeta V_T} = \exp\frac{\Delta V_{GS}}{\zeta V_T} .$$

$I_0$ cancels, so the answer does not depend on the device size or on the starting current. Set the ratio equal to 10:

$$\exp\frac{\Delta V_{GS}}{\zeta V_T} = 10 .$$

Take the natural logarithm of both sides:

$$\frac{\Delta V_{GS}}{\zeta V_T} = \ln 10 = 2.303 .$$

Solve for $\Delta V_{GS}$:

$$\Delta V_{GS} = \zeta V_T\ln 10 = (1.5)(26\ \mathrm{mV})(2.303) = 39\ \mathrm{mV}\times2.303 = 89.8\ \mathrm{mV} \approx 90\ \mathrm{mV}.$$

This quantity is called the **subthreshold slope** (here about 90 mV per decade of current). An ideal device with $\zeta = 1$ would need only $V_T\ln10 \approx 60$ mV per decade; the factor $\zeta = 1.5$ makes the device 50 % less steep. (With $V_T = 25$ mV the result would be 86 mV.)

### Step 3 — Transconductance in subthreshold

The **transconductance** is the derivative of the drain current with respect to $V_{GS}$:

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac{\partial}{\partial V_{GS}}\left[I_0\exp\frac{V_{GS}}{\zeta V_T}\right] = I_0\exp\frac{V_{GS}}{\zeta V_T}\cdot\frac{1}{\zeta V_T} .$$

The first factor is just $I_D$, so

$$g_m = \frac{I_D}{\zeta V_T} .$$

For an exponential law, $g_m$ is proportional to the current and does not depend on the device dimensions or on $I_0$.

### Step 4 — Numerical value at $I_D = 10\ \mu$A

$$g_m = \frac{I_D}{\zeta V_T} = \frac{10\times10^{-6}\ \mathrm{A}}{1.5\times26\times10^{-3}\ \mathrm{V}} = \frac{10\times10^{-6}}{39\times10^{-3}}\ \mathrm{A/V} = 2.56\times10^{-4}\ \mathrm{S} = 256\ \mu\mathrm{S}.$$

Equivalently $1/g_m = 3.9\ \mathrm{k}\Omega$. (With $V_T = 25$ mV, $g_m = 267\ \mu$S.)

**Comparison.** The transconductance efficiency is

$$\frac{g_m}{I_D} = \frac{1}{\zeta V_T} = \frac{1}{39\ \mathrm{mV}} = 25.6\ \mathrm{V^{-1}} .$$

A square-law device at the same current with an overdrive of 0.2 V would have $g_m = 2I_D/(V_{GS} - V_{TH}) = 2(10\ \mu\mathrm{A})/(0.2\ \mathrm{V}) = 100\ \mu$S, i.e. $g_m/I_D = 10\ \mathrm{V^{-1}}$. Subthreshold operation gives the most transconductance per unit current, which is why it is used in low-power circuits (at the cost of speed and of a large device).

**Consistency check between the two parts.** Over a small change, $\Delta I_D \approx g_m\Delta V_{GS}$, so $\Delta I_D/I_D \approx \Delta V_{GS}/(\zeta V_T)$: a 1-mV change gives about $1/39 = 2.6\ \%$ change in current. Compounding this over 90 mV gives $e^{89.8/39} = e^{2.303} = 10$, consistent with Step 2.

### Result

- A tenfold change in $I_D$ requires $\Delta V_{GS} = \zeta V_T\ln10 = 1.5\times26\ \mathrm{mV}\times2.303 \approx 90$ mV.
- At $I_D = 10\ \mu$A: $g_m = I_D/(\zeta V_T) = 10\ \mu\mathrm{A}/39\ \mathrm{mV} \approx 256\ \mu$S (about 0.26 mS, or $1/g_m \approx 3.9\ \mathrm{k}\Omega$).

**Common mistake.** Leaving out $\zeta$, which gives 60 mV per decade and $g_m = 385\ \mu$S. That is the ideal ($\zeta = 1$) limit; a real device with $\zeta = 1.5$ needs 50 % more gate voltage per decade and has 1/1.5 of that transconductance.

**Common mistake.** Forgetting the $\ln10$ and answering $\zeta V_T = 39$ mV. That is the voltage for a change by a factor of $e \approx 2.72$, not 10.

**Common mistake.** Using a square-law formula such as $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ in subthreshold. The square law does not apply below threshold; the exponential law gives $g_m = I_D/(\zeta V_T)$, which needs no device dimensions.
