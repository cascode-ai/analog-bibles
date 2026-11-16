# Golden Solution - R658

## Reference answer

Proof (continuous-time, averaged model):
1. PFD and charge pump: for a constant phase difference Δφ between inputs of period $T_{in}$, one PFD output produces a pulse of width $\Delta\phi\,T_{in}/2\pi$ per cycle, and the pump delivers ±$I_P$ during it. Averaged over a cycle, $\bar I_{CP} = I_P\Delta\phi/2\pi$, so $I_{CP}(s)/\Delta\phi(s) = I_P/2\pi$, with no dynamics. (Equivalently, for a phase step $\phi_0u(t)$ the charge per cycle is $I_P\phi_0T_{in}/2\pi$, i.e., an average current $I_P\phi_0/2\pi$.)
2. Loop filter: the pump current flows through the series $R_P$–$C_P$ branch, whose impedance is $Z(s) = R_P + 1/(C_Ps)$, so $V_{cont} = I_{CP}Z$.
3. Hence $V_{cont}/\Delta\phi = (I_P/2\pi)(R_P + 1/(C_Ps))$.

Time-domain check:
- For $\Delta\phi = \phi_0u(t)$, the averaged response is $V_{cont}(t) = \dfrac{I_P\phi_0}{2\pi}\left(R_P + \dfrac{t}{C_P}\right)$: a step of $I_P\phi_0R_P/2\pi$ plus a ramp.
- Differentiating gives the impulse response $h(t) = \dfrac{I_P}{2\pi}\left[R_P\delta(t) + \dfrac{u(t)}{C_P}\right]$, whose Laplace transform is the stated result.
- The $I_PR_P/2\pi$ term is the proportional path that creates the loop zero at $-1/(R_PC_P)$.
- The approximation holds when the loop bandwidth is well below the input frequency, and it ignores the narrow reset pulses.

## Grading notes

+2: the average charge-pump current $I_P\Delta\phi/2\pi$, derived from the pulse width $\Delta\phi\,T_{in}/2\pi$ per period, multiplied by the impedance $R_P + 1/(C_Ps)$; or the equivalent step- or impulse-response derivation. +1: correct result with the averaging step asserted rather than derived. 0: only the capacitor term $I_P/(2\pi C_Ps)$ derived, with the resistor term added without justification; or the right structure with an error in the 2π factor. -2 (asserted as fact): $R_P$ and $C_P$ modelled in parallel, $V_{cont}$ claimed proportional to Δφ with no integration, or a result of the wrong structure presented as proven.
