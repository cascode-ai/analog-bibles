# Golden Solution - G101

## Reference answer

$dV_{OUT}/dT \approx +0.13$ mV/°C (+0.134 mV/°C from an exact solution of the circuit equations; the first-order estimate $+V_{OS}/T = +0.10$ mV/°C ignores the change of the current ratio).

- Circuit equations ($V_{OS}$ in series with the inverting input): the non-inverting input is at the collector of $Q_1$, $V_{BE1}$; the collector of $Q_2$ is at $V_{BE1} - V_{OS}$. So $I_1R_1 = V_{OUT} - V_{BE1}$, $I_2R_2 = V_{OUT} - V_{BE1} + V_{OS}$, and $I_2R_3 = V_{BE1} - V_{BE2} = V_T\ln(8I_1/I_2)$. Hence $V_{OUT} = V_{BE1} + (R_2/R_3)\Delta V_{BE} - V_{OS}$.
- $V_{OS} = 0$: the currents are PTAT, so the target is $V_{G0} + (\gamma-1)V_T = 1.2615$ V (reached with $R_2 \approx 5.75$ kΩ; $I_1 \approx 0.57$ mA, $I_2 \approx 0.098$ mA).
- $V_{OS} = 30$ mV: the output contains $-V_{OS}$, a temperature-independent term. Trimming $R_2$ up (to ≈ 6.06 kΩ) restores $V_{OUT}$ by adding about 30 mV more of the PTAT term $(R_2/R_3)\Delta V_{BE}$. Since the $V_{BE}$ + PTAT combination with zero slope sits 30 mV lower, the extra PTAT voltage gives $dV_{OUT}/dT \approx +V_{OS}/T = +30\ \mathrm{mV}/298\ \mathrm{K} \approx +0.10$ mV/°C.
- Second-order effect: $I_1/I_2 = R_2/R_1 - V_{OS}/(I_2R_1)$, and $V_{OS}/(I_2R_1) \approx 0.3$ falls with T (since $I_2 \propto T$), so $\Delta V_{BE}$ rises faster than PTAT; this adds ≈ $(R_2/R_3)V_T\,(0.3/5.75)/T \approx +0.03$ mV/°C. A full numerical solution gives +0.134 mV/°C.

## Grading notes

+2: positive slope between +0.09 and +0.14 mV/°C, with the reasoning that the trim compensates a temperature-independent output offset of $-V_{OS}$ with extra PTAT voltage (the first-order value ≈ +0.10 mV/°C is fully acceptable). +1: correct sign and mechanism with a magnitude off by a slip (roughly 0.06–0.2 mV/°C). 0: correct sign with no valid magnitude, or correct equations not carried to a result. -2 (asserted as fact): negative slope, a claim that the slope is zero because the output was trimmed to the target, or the offset assumed to be amplified by a large gain (e.g. $(1+R_2/R_3)V_{OS}$) with a correspondingly wrong value.
