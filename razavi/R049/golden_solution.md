# Golden Solution - R049

## Reference answer

The bulk acts as a second (back) gate coupled to the channel through the depletion-region capacitance, while the real gate couples through $C_{ox}$; the threshold shift is roughly the ratio of the two couplings, $\Delta V_{TH}/\Delta V_{SB} \approx C_{dep}/C_{ox}$, and $\gamma = \sqrt{2q\epsilon_{si}N_{sub}}/C_{ox}$.
- Raising $V_{SB}$ widens the depletion layer under the channel and uncovers more depletion charge, $Q_d = \sqrt{2q\epsilon_{si}N_{sub}(2|\phi_F| + V_{SB})}$. The gate must supply the matching extra charge before inversion occurs, which costs an extra gate voltage $\Delta V_{TH} = \Delta Q_d/C_{ox}$.
- $\sqrt{N_{sub}}$: a more heavily doped substrate uncovers more charge per volt of back-gate voltage ($C_{dep} \propto \sqrt{N_{sub}}$; the depletion layer is thinner). The back gate is "closer" and stronger, so $V_{TH}$ shifts more.
- $1/C_{ox}$: a larger oxide capacitance (thinner oxide) means the front gate supplies that extra charge with a smaller voltage change. The front gate dominates the back gate, so $V_{TH}$ shifts less.

## Grading notes

+2: back-gate picture with both dependences explained: extra depletion charge per volt grows as $\sqrt{N_{sub}}$ (stronger back-gate coupling), and the gate needs $\Delta Q/C_{ox}$ of extra voltage (stronger front gate for larger $C_{ox}$); a capacitive-divider form $C_{dep}/C_{ox}$ or the formula for γ is a plus. +1: one dependence well explained, the other only asserted. 0: only the formula quoted without intuition. -2 (asserted as fact): inverted dependences or an explanation that contradicts the stated proportionalities.
