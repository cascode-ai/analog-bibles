# Golden Solution - A501

## Reference answer

N = 9 bits.

- Worst-case error: $\Delta V = \left|\dfrac{dv_{in}}{dt}\right|_{max}\Delta t = \omega V_p \Delta t = 2\pi(10^6)(0.5V_{REF})(200\times10^{-12}) = 6.28\times10^{-4}V_{REF}$.
- Requirement: $6.28\times10^{-4}V_{REF} \le V_{REF}/2^{N+1}$ → $2^{N+1} \le 1592$ → $N + 1 \le 10.6$ → $N = 9$ (½ LSB = $9.8\times10^{-4}V_{REF}$ at 9 bits; at 10 bits it would be $4.9\times10^{-4}V_{REF}$, smaller than the error).

## Grading notes

+2: N = 9 with $\Delta V = \omega V_p\Delta t \approx 6.3\times10^{-4}V_{REF}$ ($V_p = V_{REF}/2$) compared with ½ LSB. +1: N = 9 with a minor slip in an intermediate value. 0: correct method with $V_p$ taken as $V_{REF}$ (giving 8 bits) or another single slip. −2 (asserted as fact): a result from a wrong formula (e.g., Δt compared with the signal period, ω replaced by f giving 11–12 bits) or from an rms or 1-LSB criterion contrary to the stated one, presented as the answer.
