# Detailed solution - R059

Approach: Take the ratio of the subthreshold currents at two gate voltages and require it to be 10. Then differentiate the current with respect to $V_{GS}$ to get $g_m = I_D/(\zeta V_T)$ and substitute the numbers.

### Step 1 — Gate-voltage change for a tenfold change in $I_D$

With $I_D = I_0\exp[V_{GS}/(\zeta V_T)]$, the product that appears everywhere is

$$\zeta V_T = 1.5\times26\ \mathrm{mV} = 39\ \mathrm{mV}.$$

For a gate-voltage change from $V_{GS1}$ to $V_{GS2} = V_{GS1} + \Delta V_{GS}$,

$$\frac{I_{D2}}{I_{D1}} = \frac{I_0\exp\left[V_{GS2}/(\zeta V_T)\right]}{I_0\exp\left[V_{GS1}/(\zeta V_T)\right]} = \exp\frac{V_{GS2} - V_{GS1}}{\zeta V_T} = \exp\frac{\Delta V_{GS}}{\zeta V_T} .$$

$I_0$ cancels, so the answer depends on neither the device size nor the starting current. Setting the ratio to 10:

$$\frac{\Delta V_{GS}}{\zeta V_T} = \ln 10 = 2.303 \quad\Longrightarrow\quad \Delta V_{GS} = \zeta V_T\ln 10 = (1.5)(26\ \mathrm{mV})(2.303) = 39\ \mathrm{mV}\times2.303 = 89.8\ \mathrm{mV} \approx 90\ \mathrm{mV}.$$

This is the subthreshold slope, about 90 mV per decade of current. An ideal device with $\zeta = 1$ would need only $V_T\ln10 \approx 60$ mV per decade; $\zeta = 1.5$ means 50 % more gate voltage per decade, so the device is only 2/3 as steep. (With $V_T = 25$ mV the result would be 86 mV.)

### Step 2 — Transconductance at $I_D = 10\ \mu$A

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = I_0\exp\frac{V_{GS}}{\zeta V_T}\cdot\frac{1}{\zeta V_T} = \frac{I_D}{\zeta V_T} ,$$

proportional to the current and independent of the device dimensions and of $I_0$. At $I_D = 10\ \mu$A:

$$g_m = \frac{I_D}{\zeta V_T} = \frac{10\times10^{-6}\ \mathrm{A}}{1.5\times26\times10^{-3}\ \mathrm{V}} = \frac{10\times10^{-6}}{39\times10^{-3}}\ \mathrm{A/V} = 2.56\times10^{-4}\ \mathrm{S} = 256\ \mu\mathrm{S}.$$

Equivalently $1/g_m = 3.9\ \mathrm{k}\Omega$. (With $V_T = 25$ mV, $g_m = 267\ \mu$S.)

Comparison. The transconductance efficiency is

$$\frac{g_m}{I_D} = \frac{1}{\zeta V_T} = \frac{1}{39\ \mathrm{mV}} = 25.6\ \mathrm{V^{-1}} .$$

A square-law device at the same current with an overdrive of 0.2 V would have $g_m = 2I_D/(V_{GS} - V_{TH}) = 2(10\ \mu\mathrm{A})/(0.2\ \mathrm{V}) = 100\ \mu$S, i.e. $g_m/I_D = 10\ \mathrm{V^{-1}}$. Subthreshold operation gives the most transconductance per unit current, which is why it is used in low-power circuits (at the cost of speed and of a large device).

Consistency check between the two parts. Over a small change, $\Delta I_D \approx g_m\Delta V_{GS}$, so $\Delta I_D/I_D \approx \Delta V_{GS}/(\zeta V_T)$: a 1-mV change gives about $1/39 = 2.6\ \%$ change in current. Compounding this over 90 mV gives $e^{89.8/39} = e^{2.303} = 10$, consistent with Step 1.

### Result

- A tenfold change in $I_D$ requires $\Delta V_{GS} = \zeta V_T\ln10 = 1.5\times26\ \mathrm{mV}\times2.303 \approx 90$ mV.
- At $I_D = 10\ \mu$A: $g_m = I_D/(\zeta V_T) = 10\ \mu\mathrm{A}/39\ \mathrm{mV} \approx 256\ \mu$S (about 0.26 mS, or $1/g_m \approx 3.9\ \mathrm{k}\Omega$).

Common mistake. Leaving out $\zeta$, which gives 60 mV per decade and $g_m = 385\ \mu$S: the ideal ($\zeta = 1$) limit. A real device with $\zeta = 1.5$ needs 50 % more gate voltage per decade and has 1/1.5 of that transconductance.

Common mistake. Forgetting the $\ln10$ and answering $\zeta V_T = 39$ mV, which is the voltage for a change by a factor of $e \approx 2.72$, not 10.

Common mistake. Using a square-law formula such as $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ in subthreshold. Below threshold the exponential law gives $g_m = I_D/(\zeta V_T)$, which needs no device dimensions.
