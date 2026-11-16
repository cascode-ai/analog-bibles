# Golden Solution - G265

## Reference answer

The current gain changes by only about +0.16% (magnitude rises slightly, −10.718 → −10.734); the input impedance drops by about 7.5% (9.9 Ω → 9.2 Ω).

- The forward gain is proportional to the load of $Q_1$, $R_{L1}\|r_{o1}\|R_{in2}$: 3305 Ω → 3573 Ω, i.e. $a$ and $T$ rise by ≈ 8.1% ($T$: 47.1 → 50.9).
- Gain: $\dfrac{\Delta A}{A} \approx \dfrac{1}{1+T}\dfrac{\Delta a}{a} = \dfrac{8.1\%}{48.1} \approx 0.17\%$.
- Input impedance $Z_{in} = z_{ia}/(1+T)$ with $z_{ia}$ (476 Ω) unchanged, so $Z_{in}$ scales by $48.1/51.9$: −7.4% (≈ 9.17 Ω).

## Grading notes

+2: gain change ≈ +0.15–0.17% (an increase in magnitude) and input impedance change ≈ −7 to −8%, with the reasoning ($a \propto R_{L1}\|\ldots$, gain desensitized by $1+T$, $Z_{in} \propto 1/(1+T)$). Using the full +10% for Δa/a (giving ≈ +0.2% and −9%) is a minor imprecision (+1). +1: one of the two right and the other with a slip. 0: only one quantity right. −2 (asserted as fact): gain changes by ~10%, or input impedance increases.
