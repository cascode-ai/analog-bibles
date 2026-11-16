# Golden Solution - R659

## Reference answer

$\Delta\phi = 2\pi\dfrac{\Delta I}{I_{D3}}\dfrac{T_P}{T_{in}} \approx 2\pi\dfrac{\Delta I}{I_P}\dfrac{T_P}{T_{in}}$, equivalent to a time offset $\Delta t = T_P\,\Delta I/I_{D3}$.

- With aligned pulses (waveform (a)), a net current ΔI flows for $T_P$ every cycle, so $V_{cont}$ creeps up by $\Delta I\,T_P/C$ per cycle. That is not a steady state.
- In lock the average $V_{cont}$ must stay constant, so the net charge per cycle must be zero. The loop shifts the phase so that the pulse of the weaker (DOWN) branch starts earlier by Δt.
- The DOWN current then flows for $T_P + \Delta t$ and the UP current only during the overlap $T_P$. In waveform (b), the net current is $-I_{D3}$ for Δt, then $+\Delta I$ for $T_P$.
- Charge balance: $|I_{D4}|T_P = I_{D3}(T_P + \Delta t)$, so $I_{D3}\Delta t = \Delta I\,T_P$ and $\Delta t = T_P\,\Delta I/I_{D3}$. The phase offset is $\Delta\phi = 2\pi\Delta t/T_{in}$.
- The DOWN pulse is started by the feedback (VCO) edge, so that edge leads the reference edge by Δt.
- The offset is proportional to the reset-pulse width $T_P$. Shortening $T_P$ reduces it, but $T_P$ must stay long enough to avoid a dead zone.
- $V_{cont}$ still has a periodic ripple each cycle (a dip, then a ramp back).

## Grading notes

+2: zero net charge per cycle in lock and the resulting $\Delta\phi = 2\pi(\Delta I/I_P)(T_P/T_{in})$, with either $I_{D3}$ or the nominal $I_P$ in the denominator; a time offset $T_P\Delta I/I_P$ with the $2\pi/T_{in}$ conversion is equivalent. Which input leads is not required. In waveform (b) the $\overline{Q_A}$ and $Q_{B\Delta}$ edges are drawn in the opposite order to the current traces (as in the book); following the currents (DOWN on first) or pointing out this inconsistency is correct. +1: correct charge-balance reasoning with the result left as a time offset only. 0: charge balance set up correctly but a slip in converting time to phase (e.g., a missing 2π), or a correct result with no reasoning. -2 (asserted as fact): an offset independent of $T_P$ (e.g., $2\pi\Delta I/I_P$), an offset proportional to $\Delta I\cdot T_{in}$, or a claim that the offset is zero because the PFD aligns the edges.
