# Golden Solution - G077

## Reference answer

$|V_{OS}| \approx \dfrac{V_{ov}}{2}\dfrac{\Delta(W/L)}{W/L} = \dfrac{0.145\ \mathrm{V}}{2}(0.02) \approx 1.45$ mV.

- $L_{\text{eff}} = 1 - 0.18 = 0.82\ \mu$m, $W/L = 12.2$; each device carries $I_D = 25\ \mu$A.
- $V_{ov} = \sqrt{2I_D/(k'W/L)} = \sqrt{50\ \mu/(194\ \mu \times 12.2)} = 0.145$ V.
- With equal loads, zero differential output needs equal drain currents, so $V_{OS} = V_{GS1} - V_{GS2}$ at equal $I_D$: $V_{OS} = \Delta V_t + \frac{V_{ov}}{2}\left(-\frac{\Delta (W/L)}{W/L}\right)$ to first order; $\Delta V_t = 0$, $|\Delta(W/L)/(W/L)| = 0.02$ → 1.45 mV.

## Grading notes

+2: 1.4–1.5 mV from $(V_{ov}/2)\,\Delta(W/L)/(W/L)$ (or exact $V_{GS}$ difference) with $L_{\text{eff}} = 0.82\ \mu$m. +1: 1.6 mV from using $L = 1\ \mu$m as effective (otherwise correct), or a small slip. 0: correct relation, value wrong by a computational slip of more than 10%. −2 (asserted as fact): $V_{OS} = V_{ov} \times 0.02$ (missing the 1/2, ≈ 2.9 mV), $V_{OS} = V_T \times 0.02$ (bipolar formula), or an offset claimed to depend on $R_{\text{TAIL}}$.
