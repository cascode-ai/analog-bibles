# Golden Solution - G056

## Reference answer

$I_{C,\text{opt}} = 520\ \mu$A; dc drop across $R_C$ = 26 V; $v_o/v_i \approx -139$.

- Gain: $v_o/v_i = -\beta_0 (R_C\|r_o)/(R_S + r_\pi)$ with $r_\pi = \beta_0 V_T/I_C$, $r_o = V_A/I_C$. Maximizing over $I_C$ gives $I_{C,\text{opt}} = \sqrt{\beta_0 V_T V_A/(R_S R_C)} = \sqrt{200 \times 0.026 \times 130/(5\times10^4)^2} = 520\ \mu$A.
- Drop across $R_C$: $520\ \mu\mathrm{A} \times 50\ \mathrm{k\Omega} = 26$ V (so $V_{CC}$ would have to exceed about 27 V; the optimum is impractical in a low-voltage circuit).
- At this current: $g_m = 20$ mA/V, $r_\pi = 10\ \mathrm{k\Omega}$, $r_o = 250\ \mathrm{k\Omega}$, $R_C\|r_o = 41.7\ \mathrm{k\Omega}$; $v_o/v_i = -200 \times 41.7\ \mathrm{k\Omega}/(50 + 10)\ \mathrm{k\Omega} = -138.9$.

## Grading notes

+2: $I_C \approx 520\ \mu$A, drop ≈ 26 V, gain ≈ −139 (magnitude 135–143 accepted; the sign may be omitted only if the inverting nature is stated or obvious). +1: correct current and drop with an arithmetic slip in the gain, or $\beta_0+1$ used for $\beta_0$ with consistent results. 0: correct method, two of the three results wrong through slips. −2 (asserted as fact): an optimum current from a wrong formula (e.g. ignoring $r_o$, which leads to no optimum or to a monotonically rising gain), a gain off by more than ~10% from a formula error, or the drop computed with a wrong current.
