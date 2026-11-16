# Detailed solution - R553

**Approach.** Express the gain $g_mR_D$ through the square-law $g_m$, take the logarithmic derivative with respect to temperature (which turns products into sums of fractional TCs), and require the total to vanish at 300 K with a constant tail current. The resistor TC then has to cancel the TC of $g_m$.

### Step 1 — Gain in terms of the temperature-dependent quantities

At balance each pair transistor carries $I_D = I_{SS}/2$. The **square-law transconductance** in saturation is

$$g_m = \sqrt{2\mu C_{ox}\frac WL I_D} = \sqrt{2\mu C_{ox}\frac WL\cdot\frac{I_{SS}}{2}} = \sqrt{\mu C_{ox}\frac WL I_{SS}},$$

where $\mu$ is the carrier mobility, $C_{ox}$ the gate-oxide capacitance per unit area and $W/L$ the aspect ratio. The differential gain is

$$A_v = g_mR_D = R_D\sqrt{\mu C_{ox}\frac WL I_{SS}} .$$

Which quantities vary with temperature?

- $\mu \propto T^{-3/2}$ (given);
- $I_{SS}$ is constant (given);
- $C_{ox}$ and $W/L$ are constant (geometry and oxide);
- $R_D$ has a temperature coefficient $\alpha_R \equiv \dfrac{1}{R_D}\dfrac{dR_D}{dT}$, which we must find.

### Step 2 — Fractional temperature coefficient of the gain

Take the natural logarithm:

$$\ln A_v = \ln R_D + \frac12\ln\mu + \frac12\ln I_{SS} + \frac12\ln\left(C_{ox}\frac WL\right).$$

Differentiate with respect to $T$. Since $d(\ln x)/dT = (1/x)(dx/dT)$ is the fractional TC of $x$:

$$\frac{1}{A_v}\frac{dA_v}{dT} = \frac{1}{R_D}\frac{dR_D}{dT} + \frac12\cdot\frac1\mu\frac{d\mu}{dT} + \frac12\cdot\frac{1}{I_{SS}}\frac{dI_{SS}}{dT}.$$

The constant term $C_{ox}W/L$ contributes nothing.

### Step 3 — The TC of the mobility and of $g_m$

Write $\mu = \mu_0\,(T/T_0)^{-3/2}$. Then $\ln\mu = \ln\mu_0 - \tfrac32\ln T + \tfrac32\ln T_0$, and

$$\frac{1}\mu\frac{d\mu}{dT} = -\frac{3}{2T}.$$

The tail current is constant, so its fractional TC is zero. Therefore the TC of $g_m$ alone is

$$\frac{1}{g_m}\frac{dg_m}{dT} = \frac12\left(-\frac{3}{2T}\right) + 0 = -\frac{3}{4T},$$

i.e. $g_m \propto \mu^{1/2} \propto T^{-3/4}$ at constant current. The square root halves the mobility exponent.

### Step 4 — Zero-TC condition and the resistor TC

Set the gain TC to zero:

$$
\begin{aligned}
0 &= \alpha_R + \frac12\left(-\frac{3}{2T}\right) + 0\\
\alpha_R &= \frac{3}{4T}.
\end{aligned}
$$

At $T = 300$ K:

$$\alpha_R = \frac{3}{4\times300\ \mathrm{K}} = \frac{3}{1200}\ \mathrm{K^{-1}} = 2.5\times10^{-3}\ \mathrm{K^{-1}} = +2500\ \mathrm{ppm/K} = +0.25\ \%/\mathrm{K}.$$

The TC is **positive**: as the devices lose transconductance with rising temperature, the load resistance must grow at the same fractional rate, so the product stays constant. Lightly doped resistors (for example n-well resistors) have positive TCs of this order of magnitude, a few thousand ppm/K.

### Step 5 — "At room temperature" versus at all temperatures

Exact cancellation at every temperature would need $R_D \propto T^{3/4}$, so that $A_v \propto T^{3/4}\cdot T^{-3/4}$ = constant. A real resistor is usually described by a linear TC, $R_D(T) = R_0[1 + \alpha_R(T - T_0)]$, so the cancellation is exact only at $T_0 = 300$ K. To see how good it is, compare the gain (normalized to its value at 300 K) with $\alpha_R = 2500$ ppm/K against a temperature-independent resistor:

$$\frac{A_v(T)}{A_v(T_0)} = \left[1 + \alpha_R(T - T_0)\right]\left(\frac{T}{T_0}\right)^{-3/4}.$$

For example, at 400 K: $(1 + 0.0025\times100)(400/300)^{-0.75} = 1.25\times0.806 = 1.007$.

| $T$ (K) | Gain with $\alpha_R = +2500$ ppm/K | Gain with $\alpha_R = 0$ |
|---|---|---|
| 200 | 1.017 | 1.355 |
| 250 | 1.003 | 1.147 |
| 300 | 1.000 | 1.000 |
| 350 | 1.002 | 0.891 |
| 400 | 1.007 | 0.806 |

The gain is flat at 300 K (zero slope) and varies by less than 2 % over 200–400 K, compared with −19 % to +36 % for a fixed resistor.

### Result

$$\frac{1}{R_D}\frac{dR_D}{dT} = +\frac{3}{4T} \approx +2.5\times10^{-3}\ \mathrm{K^{-1}}\ (+2500\ \mathrm{ppm/K},\ +0.25\ \%/\mathrm{K})\ \text{at 300 K},$$

i.e. $R_D \propto T^{3/4}$ locally. At constant $I_{SS}$, $g_m = \sqrt{\mu C_{ox}(W/L)I_{SS}} \propto \mu^{1/2} \propto T^{-3/4}$, so $(1/g_m)(dg_m/dT) = -3/(4T) = -0.25$ %/K, and $R_D$ must rise at the same fractional rate.

**Common mistake.** Taking $g_m \propto \mu$ (forgetting the square root) and answering $1.5/T \approx 5000$ ppm/K. With a fixed current, the square-law $g_m$ depends on $\sqrt\mu$, so only half the mobility exponent has to be cancelled.

**Common mistake.** Getting the sign wrong. The mobility falls with temperature, so $g_m$ falls. The resistor must *increase* with temperature (positive TC) to compensate, not decrease.

**Common mistake.** Leaving the answer as an exponent without converting it at 300 K, or evaluating $3/(4T)$ at the wrong temperature. In Kelvin, $3/(4\times300) = 2.5\times10^{-3}$ per kelvin. A degree Celsius is the same size as a kelvin, so this is also 2500 ppm/°C.
