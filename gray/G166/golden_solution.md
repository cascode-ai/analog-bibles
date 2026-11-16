# Golden Solution - G166

## Reference answer

$V_{OS} = \dfrac{g_{m3}}{g_{m1}}(V_{t3}-V_{t4}) = \sqrt{\dfrac{\mu_pC_{ox}}{\mu_nC_{ox}}}\times10\ \mathrm{mV} = \dfrac{10\ \mathrm{mV}}{\sqrt3} \approx +5.8\ \mathrm{mV}$.

- The input-referred effect of the mirror mismatch is the mirror current error $g_{m3}V_{t(3-4)}$ divided by the input transconductance $g_{m1}$.
- Equal $W/L$ and equal currents ($I_{TAIL}/2$) in $M_1$ and $M_3$ give $g_{m3}/g_{m1} = \sqrt{\mu_p/\mu_n} = \sqrt{64.7/194} = 0.577$.
- $V_{OS} = 0.577\times10$ mV $= 5.8$ mV. The sign is positive: with $V_{t3} > V_{t4}$ (p-channel, less negative), $M_4$ carries less than $M_3$, so $M_2$ must conduct less and the gate of $M_1$ must be higher. (If $V_{t3}$ and $V_{t4}$ are read as threshold magnitudes, $V_{t3} - V_{t4} = 10$ mV makes $M_4$ the stronger device and the offset is −5.8 mV.)

## Grading notes

+2: 5.8 mV (±3 %) from $\sqrt{\mu_p/\mu_n}$. The question does not fix the sign convention for p-channel thresholds: +5.8 mV with signed (negative) thresholds and −5.8 mV with the thresholds read as positive magnitudes (e.g. $V_{ov} = V_{SG} - V_t$) are both correct when the sign follows consistently from the convention used. +1: correct magnitude with a sign that contradicts the answer's own convention, or a muddled sign argument. 0: correct formula with a slip in the current ratio. -2 (asserted as fact): 17.3 mV (ratio inverted), 10 mV, or 3.3 mV (mobility ratio not square-rooted).
