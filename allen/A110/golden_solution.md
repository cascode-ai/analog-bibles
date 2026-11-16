# Golden Solution - A110

## Reference answer

$(W/L)_{24} \approx 70$, $(W/L)_{25} \approx 26.6$, $(W/L)_{23} \approx 18.3$ (copy ratios $a$ = 7.00, $b$ = 2.66, $c$ = 1.83 relative to the bus devices of $W/L$ = 10); the common resistor value $R$ drops out of $V_{REF}$ and can be chosen freely (e.g. 10 kΩ) to set the current level.

- With $R_1 = R_2 = R_4 = R_5 = R$ and copy ratios $a = (W/L)_{24}/10$, $b = (W/L)_{25}/10$, $c = (W/L)_{23}/10$ (M21 = M22): $V_{REF} = aV_{PTAT} + bV_{D3} - cV_{D4}$, independent of $R$.
- Substituting the diode model, the $T\ln(T/T_0)$ terms are $-b(\gamma - 1)V_t\ln(T/T_0)$ and $+c\gamma V_t\ln(T/T_0)$; cancellation requires $b(\gamma - 1) = c\gamma$, i.e. $c/b = 2.2/3.2 = 0.6875$.
- What remains is $V_{REF} = aV_{PTAT}(T) + (b - c)\left[V_{G0} - \frac{T}{T_0}(V_{G0} - V_D(T_0))\right]$. Zero TC: $aV_{PTAT}(T_0) = (b - c)(V_{G0} - V_D(T_0))$; then $V_{REF} = (b - c)V_{G0}$.
- $V_{REF}$ = 1.0 V: $b - c = 1/1.205 = 0.830$, so $b = 0.830/0.3125 = 2.656$ and $c = 1.826$; $a = 0.830\times(1.205 - 0.7)/(0.026\ln10) = 0.830\times0.505/0.0599 = 7.00$.
- Check: $V_{REF}$ = 1.000 V at 0, 27 and 70 °C in this model. These ratios equal the resistor ratios of the 1:1 design: $R_5/R_1$ = 7.0, $R_5/R_2$ = 2.66, $R_5/R_4$ = 1.83 (with $R_4$ = 10 kΩ: $R_1$ = 2.61 kΩ, $R_2$ = 6.88 kΩ, $R_5$ = 18.3 kΩ).
- $R$ itself is set by power and headroom (e.g. 10 kΩ gives $I_{PTAT}'$ ≈ 6 µA and $I_{CTAT}'$ ≈ 70 µA), keeping all devices saturated; $R_3$ is still sized for the ZTC bias of M11.

## Grading notes

Design problem: accept any equivalent ratios. +2: $W/L$ ≈ 70 (M24), ≈ 26.6 (M25), ≈ 18.3 (M23) within ±3%, from the three conditions (curvature cancellation $b(\gamma - 1) = c\gamma$, zero TC, $V_{REF} = (b - c)V_{G0}$ = 1 V), with a common resistor value given (10 kΩ, keeping the original $R_4$, or any value stated to be free because it only sets the current level). +1: correct conditions with a slip in one ratio, or correct ratios with no resistor value given at all. 0: only the curvature condition and one other ratio right. −2 (asserted as fact): ratios ≈ 1.83, ≈ 0.69 and ≈ 0.48 for M24, M25 and M23 (they give $V_{REF}$ ≈ 0.26 V), $V_{REF}$ said to depend on the common resistor value, or copy ratios applied inversely (dividing instead of multiplying the currents).
