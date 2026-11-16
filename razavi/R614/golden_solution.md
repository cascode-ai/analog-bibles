# Golden Solution - R614

## Reference answer

$I_{D1} - I_{D2} = I_{SS}\tanh\dfrac{V_{in}}{2\zeta V_T}$. Harmonics (no even ones): fundamental $\dfrac{I_{SS}V_m}{2\zeta V_T}$ (minus a small $I_{SS}V_m^3/(32\zeta^3V_T^3)$ compression), third harmonic $\dfrac{I_{SS}V_m^3}{96\,\zeta^3V_T^3}$, HD3 $= \dfrac{V_m^2}{48\,\zeta^2V_T^2}$.
- Proof: the sources share one node, so $I_{D1}/I_{D2} = \exp[(V_{G1}-V_{G2})/(\zeta V_T)] = e^{V_{in}/\zeta V_T}$ (a common source–bulk voltage cancels), and $I_{D1} + I_{D2} = I_{SS}$. Hence $I_{D1} = I_{SS}/(1 + e^{-V_{in}/\zeta V_T})$, $I_{D2} = I_{SS}/(1 + e^{V_{in}/\zeta V_T})$ and $I_{D1} - I_{D2} = I_{SS}\dfrac{e^{V_{in}/\zeta V_T}-1}{e^{V_{in}/\zeta V_T}+1} = I_{SS}\tanh\dfrac{V_{in}}{2\zeta V_T}$.
- $\tanh z = z - z^3/3 + 2z^5/15 - \dots$ (odd only). With $z = \tfrac u2\cos\omega t$, $u = V_m/(\zeta V_T)$: $z^3/3 = \tfrac{u^3}{24}\cos^3\omega t = \tfrac{u^3}{96}(3\cos\omega t + \cos3\omega t)$.
- So $I_{D1}-I_{D2} \approx I_{SS}\left[\left(\tfrac u2 - \tfrac{u^3}{32}\right)\cos\omega t - \tfrac{u^3}{96}\cos3\omega t\right]$. With $I_{SS} = 2I$ the fundamental equals $IV_m/(\zeta V_T)$, the same as a common-source stage at current $I$, whose HD2 is $V_m/(4\zeta V_T)$.

## Grading notes

+2: correct proof ($I_{D1}/I_{D2} = e^{V_{in}/\zeta V_T}$ with $I_{D1}+I_{D2} = I_{SS}$ leading to $I_{SS}\tanh[V_{in}/(2\zeta V_T)]$), the odd-only expansion, fundamental $I_{SS}V_m/(2\zeta V_T)$, third harmonic $I_{SS}V_m^3/(96\zeta^3V_T^3)$ (HD3 $= V_m^2/48\zeta^2V_T^2$). +1: proof and expansion right with the fundamental's compression term or the explicit absolute amplitude missing. 0: proof correct but a coefficient slip in the harmonic, or harmonics right with the proof missing. -2 (asserted as fact): even harmonics claimed, the argument taken as $V_{in}/(\zeta V_T)$ so that HD3 = $V_m^2/(12\zeta^2V_T^2)$ presented as the result, or square-law expressions used.
