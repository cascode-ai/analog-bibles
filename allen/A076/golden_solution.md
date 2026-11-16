# Golden Solution - A076

## Reference answer

Both changes require a wider (longer) $\phi_1$ pulse.

- While $\phi_1$ is high, $C_1$ charges with time constant $\tau = r_{ON}C_1$, $r_{ON} = L/[K'W(V_{GS} - V_T)]$; settling to a given accuracy (e.g. 99%) needs a fixed number of time constants (≈ 4.6τ).
- A smaller M1 (smaller $W$, or larger $L$) raises $r_{ON}$; a larger $C_1$ raises τ directly. The required pulse width scales as $C_1L/W$: halving $W$ or doubling $C_1$ doubles it.
- The feedthrough error scales roughly as $(W\cdot CGDO + WLC_{ox}/2)/C_1$, so the gain in accuracy is paid for in speed (lower maximum clock rate).

## Grading notes

+2: both changes lengthen the required $\phi_1$ high time because $\tau = r_{ON}C_1$ increases ($r_{ON} \propto L/W$), with that reasoning. +1: correct conclusion with the reasoning given for only one of the two changes. 0: reasoning about τ correct but no clear statement of the effect on the pulse width. −2 (asserted as fact): the pulse can be shortened, or the pulse width is unaffected.
