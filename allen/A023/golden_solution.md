# Golden Solution - A023

## Reference answer

$\Delta v_D = (kT/q)\ln 10 \approx 59.6$ mV (≈ 60 mV per decade of current).

With $i_D = I_s[\exp(v_D/V_t) - 1] \approx I_s\exp(v_D/V_t)$ in forward bias, $i_{D2}/i_{D1} = \exp[(v_{D2} - v_{D1})/V_t] = 10$, so $v_{D2} - v_{D1} = V_t\ln 10 = 25.9\ \mathrm{mV}\times2.303 = 59.6$ mV.

## Grading notes

+2: 59–60 mV (an increase of $v_D$) derived from the exponential law ($kT/q$ = 25.9 or 26 mV both fine). +1: the correct value with no derivation. 0: correct expression $V_t\ln 10$ with a numerical slip. −2 (asserted as fact): 25.9 mV (log₁₀ used in place of ln), 0.7 V, 2.3 mV, or a decrease of $v_D$.
