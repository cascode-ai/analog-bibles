# Golden Solution - R081

## Reference answer

$V_{in} \approx 1.41$ V ($V_{out} \approx 0.711$ V, $I_D \approx 3.38$ mA); $A_v = -\sqrt{5} \approx -2.24$.

- Equal currents with both devices saturated: $\sqrt{(W/L)_1}(V_{in} - V_{TH}) = \sqrt{(W/L)_2}(V_{DD} - V_{out} - V_{TH})$ → $\sqrt5(V_{in} - 0.7) = 2.3 - V_{out}$.
- Edge of triode: $V_{out} = V_{in} - 0.7$ → $V_{ov1} = 2.3/(1+\sqrt5) = 0.711$ V, $V_{in} = 1.411$ V.
- Gain (still saturated at the edge): $A_v = -g_{m1}/g_{m2} = -\sqrt{(W/L)_1/(W/L)_2} = -\sqrt5 \approx -2.24$.

## Grading notes

+2: $V_{in}$ ≈ 1.41 V (±0.01 V) and gain ≈ −2.24. +1: both quantities are addressed with one minor numerical error. 0: only one requested quantity is correct, or the other has a substantive numerical error. -2 (asserted as fact): gain −5 (W/L ratio without square root), body effect introduced contrary to γ = 0 so as to change the result substantially, or an edge condition other than $V_{out} = V_{in} - V_{TH}$.
