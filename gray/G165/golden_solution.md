# Golden Solution - G165

## Reference answer

$V_{OS} = \dfrac{g_{m3}}{g_{m1}}(V_{t3}-V_{t4}) = \sqrt{\dfrac{\mu_nC_{ox}}{\mu_pC_{ox}}}\times10\ \mathrm{mV} = \sqrt{3}\times10\ \mathrm{mV} \approx +17.3\ \mathrm{mV}$.

- Only the mirror threshold mismatch is present, so $V_{OS} = V_{t(3-4)}g_{m3}/g_{m1}$. With $V_{t3} > V_{t4}$, $M_4$ carries an extra current $g_{m3}\cdot10$ mV, which must be matched by an extra current in $M_2$ produced by the input voltage, $g_{m1}V_{OS}$.
- $M_1$ and $M_3$ carry the same current $I = I_{TAIL}/2$ and have equal $W/L$, so with $g_m = \sqrt{2\mu C_{ox}(W/L)I}$, $g_{m3}/g_{m1} = \sqrt{\mu_n/\mu_p} = \sqrt{194/64.7} = 1.73$.
- $V_{OS} = 1.73\times10\ \mathrm{mV} = 17.3$ mV (gate of $M_1$ above gate of $M_2$). The low-mobility p-channel input pair has the smaller $g_m$, so it amplifies the mirror's threshold error when referred to the input.

## Grading notes

+2: 17.3 mV (±3 %) from $g_{m3}/g_{m1} = \sqrt{\mu_n/\mu_p}$; the sign (positive as $V_{G1}-V_{G2}$) is a plus but magnitude alone is accepted. Omitting $|V_{tp}|$ in intermediate p-channel current expressions where it cancels in $V_{SG2} - V_{SG1}$ is trivial and does not lower +2. +1: correct method with a small arithmetic slip (result within ±10 %). 0: correct formula but wrong gm ratio from a slip in currents (e.g. assuming the mirror devices carry twice the input-device current, giving 24.5 mV) with otherwise sound reasoning. -2 (asserted as fact): 10 mV (mirror term not scaled), 30 mV (ratio of mobilities instead of its square root), 5.8 mV (ratio inverted), or the offset claimed zero because the input pair is matched.
