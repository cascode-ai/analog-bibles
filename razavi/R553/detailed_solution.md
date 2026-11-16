# Detailed solution - R553

**Approach.** Take the logarithmic derivative of $g_mR_D$ with respect to temperature, which turns the product into a sum of fractional TCs, and require the total to vanish at 300 K with a constant tail current. The resistor TC then has to cancel the TC of $g_m$.

### Step 1 — Fractional TC of the gain and of $g_m$

Each pair transistor carries $I_{SS}/2$, so

$$A_v = g_mR_D = R_D\sqrt{2\mu C_{ox}\frac WL\cdot\frac{I_{SS}}{2}} = R_D\sqrt{\mu C_{ox}\frac WL I_{SS}} .$$

$C_{ox}$ and $W/L$ are constant, and the resistor TC to be found is $\alpha_R \equiv \dfrac{1}{R_D}\dfrac{dR_D}{dT}$. Differentiating $\ln A_v$:

$$\frac{1}{A_v}\frac{dA_v}{dT} = \frac{1}{R_D}\frac{dR_D}{dT} + \frac12\cdot\frac1\mu\frac{d\mu}{dT} + \frac12\cdot\frac{1}{I_{SS}}\frac{dI_{SS}}{dT}.$$

With $\mu = \mu_0\,(T/T_0)^{-3/2}$,

$$\frac{1}\mu\frac{d\mu}{dT} = -\frac{3}{2T},$$

and $I_{SS}$ is constant, so the TC of $g_m$ alone is

$$\frac{1}{g_m}\frac{dg_m}{dT} = \frac12\left(-\frac{3}{2T}\right) + 0 = -\frac{3}{4T},$$

i.e. $g_m \propto \mu^{1/2} \propto T^{-3/4}$ at constant current: the square root halves the mobility exponent.

### Step 2 — Zero-TC condition and the resistor TC

Setting the gain TC to zero:

$$
\begin{aligned}
0 &= \alpha_R + \frac12\left(-\frac{3}{2T}\right) + 0\\
\alpha_R &= \frac{3}{4T}.
\end{aligned}
$$

At $T = 300$ K:

$$\alpha_R = \frac{3}{4\times300\ \mathrm{K}} = \frac{3}{1200}\ \mathrm{K^{-1}} = 2.5\times10^{-3}\ \mathrm{K^{-1}} = +2500\ \mathrm{ppm/K} = +0.25\ \%/\mathrm{K}.$$

The TC is **positive**: as the devices lose transconductance, the load resistance must grow at the same fractional rate. Lightly doped resistors (for example n-well resistors) have positive TCs of this order, a few thousand ppm/K.

### Step 3 — "At room temperature" versus at all temperatures

Exact cancellation at every temperature would need $R_D \propto T^{3/4}$. A real resistor usually has a linear TC, $R_D(T) = R_0[1 + \alpha_R(T - T_0)]$, so the cancellation is exact only at $T_0 = 300$ K. The normalized gain is

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

**Common mistake.** Taking $g_m \propto \mu$ (forgetting the square root) and answering $1.5/T \approx 5000$ ppm/K. With a fixed current only half the mobility exponent has to be cancelled.

**Common mistake.** Getting the sign wrong. The mobility falls with temperature, so $g_m$ falls, and the resistor must *increase* with temperature (positive TC) to compensate.

**Common mistake.** Evaluating $3/(4T)$ at the wrong temperature or leaving it unconverted. In kelvin, $3/(4\times300) = 2.5\times10^{-3}$ per kelvin, which is also 2500 ppm/°C.
