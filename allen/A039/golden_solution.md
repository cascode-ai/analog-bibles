# Golden Solution - A039

## Reference answer

$\dfrac{1}{I_s}\dfrac{dI_s}{dT} \approx 0.165\ \mathrm{K^{-1}}$ (16.5 %/°C), and $\dfrac{1}{v_D}\dfrac{dv_D}{dT} \approx -2.78\times10^{-3}\ \mathrm{K^{-1}}$ (≈ −2775 ppm/°C), corresponding to $dv_D/dT \approx -1.94$ mV/°C.

- $\ln I_s = \ln K + 3\ln T - V_{G0}q/(kT)$ ⇒ $\dfrac{1}{I_s}\dfrac{dI_s}{dT} = \dfrac{3}{T} + \dfrac{V_{G0}}{TV_t} = 0.0100 + \dfrac{1.205}{300\times0.0259} = 0.0100 + 0.1551 = 0.165\ \mathrm{K^{-1}}$.
- $v_D = V_t\ln(I_D/I_s)$ at constant $I_D$: $\dfrac{dv_D}{dT} = \dfrac{v_D}{T} - V_t\dfrac{1}{I_s}\dfrac{dI_s}{dT} = -\dfrac{V_{G0} - v_D}{T} - \dfrac{3V_t}{T} = -\dfrac{0.505 + 0.0777}{300} = -1.94\ \mathrm{mV/K}$.
- $\dfrac{1}{v_D}\dfrac{dv_D}{dT} = -1.94\times10^{-3}/0.7 = -2.77\times10^{-3}\ \mathrm{K^{-1}}$.

## Grading notes

+2: TCF of $I_s$ ≈ 0.165 /K (0.16–0.17) and TCF of $v_D$ ≈ −2.8×10⁻³ /K (±5%, negative sign), with $dv_D/dT$ ≈ −1.9 mV/K shown or implied. +1: both magnitudes right but the sign of the $v_D$ coefficient missing or the $3V_t/T$ term omitted (giving −2.40×10⁻³ /K). 0: one of the two coefficients right, the other wrong or missing. −2 (asserted as fact): a positive temperature coefficient for the forward voltage at constant current, the TCF of $I_s$ given as 3/T only (0.01 /K), or $dv_D/dT$ quoted as the fractional coefficient (−1.94×10⁻³ without dividing by $v_D$) while claiming it is the fractional value.
