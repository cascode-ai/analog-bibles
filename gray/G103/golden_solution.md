# Golden Solution - G103

## Reference answer

$W/L \approx 3.3$ (3.26), with $V_{ov} \approx 0.795$ V and $V_{GS} \approx 1.4$ V.

- $V_{GS} = V_t + V_{ov}$, $V_{ov} = \sqrt{2I/(k'W/L)} \propto (k')^{-1/2} \propto T^{n/2} = T^{0.75}$.
- $\dfrac{dV_{GS}}{dT} = \dfrac{dV_t}{dT} + \dfrac{n}{2}\dfrac{V_{ov}}{T} = -2\ \mathrm{mV/K} + 0.75\,\dfrac{V_{ov}}{298\ \mathrm{K}} = 0$ → $V_{ov} = 2\ \mathrm{mV/K}\times298\ \mathrm{K}/0.75 = 0.795$ V.
- $W/L = 2I/(k'V_{ov}^2) = 400\ \mu/(194\ \mu\times0.632) = 3.26$ (3.22 if T = 300 K is used).

## Grading notes

+2: $W/L$ in 3.1–3.4 (overdrive ≈ 0.79–0.80 V) from balancing the threshold's −2 mV/°C against the overdrive's $+0.75V_{ov}/T$. +1: correct method with a small slip. 0: correct condition written but not solved. -2 (asserted as fact): mobility exponent applied directly to $V_{ov}$ ($V_{ov} \propto T^{1.5}$, giving $W/L \approx 13$), the sign of the overdrive's temperature coefficient reversed (no solution or negative W/L), or the threshold's TC ignored.
