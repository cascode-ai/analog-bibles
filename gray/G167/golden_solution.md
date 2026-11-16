# Golden Solution - G167

## Reference answer

Configuration (ii), the n-channel input pair with the p-channel mirror, gives about 3 times lower offset: about 5.8 mV versus 17.3 mV.

- The load-mismatch term is referred to the input as $V_{OS} = (g_{m,load}/g_{m,input})\,\Delta V_{t,load}$. A current error in the mirror is divided by the input pair's transconductance.
- With equal $W/L$ and equal currents, $g_m \propto \sqrt{\mu C_{ox}}$. In (i), $g_{m3}/g_{m1} = \sqrt{\mu_n/\mu_p} = \sqrt3 \approx 1.73$, giving 17.3 mV. In (ii), $g_{m3}/g_{m1} = \sqrt{\mu_p/\mu_n} = 1/\sqrt3 \approx 0.58$, giving 5.8 mV.
- The higher-mobility n-channel devices give the input pair the larger $g_m$, and the low-$g_m$ p-channel devices then work well as the load. In general, offset is reduced by making the load's $g_m$ small relative to the input pair's $g_m$, e.g. with longer load channels or lower load $W/L$.

## Grading notes

+2: (ii) chosen, with the $g_{m,load}/g_{m,input}$ argument and the factor √3 each way (≈ 17 mV vs ≈ 6 mV, ratio 3). +1: correct choice and correct argument but numbers missing or one number off by a slip. 0: correct choice with only a vague reason (e.g. "n-channel devices are faster"). -2 (asserted as fact): configuration (i) chosen, or the claim that both give the same offset because the mismatch is the same 10 mV.
