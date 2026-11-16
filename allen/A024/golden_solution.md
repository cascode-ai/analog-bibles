# Golden Solution - A024

## Reference answer

Because a reverse source–bulk bias widens the depletion region under the channel, so more fixed (ionized-acceptor) charge must be balanced by the gate before any mobile inversion charge can appear.

- At threshold the gate voltage must bend the bands so that the surface is inverted, and it must supply, through $C_{ox}$, the charge that terminates the depletion charge $Q_b$ under the gate: $V_T$ contains the term $-Q_b/C_{ox}$.
- The inversion layer is connected to the source, so its potential is tied to the source. With the bulk $v_{SB}$ below the source, the channel-to-bulk junction carries the extra reverse bias $v_{SB}$: the surface must sit $2|\phi_F| + v_{SB}$ above the bulk for inversion, and the depletion width grows as $x_d \propto \sqrt{2|\phi_F| + v_{SB}}$.
- The depletion charge therefore grows: $|Q_b| = \sqrt{2q\varepsilon_{Si}N_A(2|\phi_F| + v_{SB})}$. Each extra coulomb of bulk charge needs a matching coulomb on the gate, i.e. an extra gate voltage $\Delta|Q_b|/C_{ox} = \gamma\left(\sqrt{2|\phi_F| + v_{SB}} - \sqrt{2|\phi_F|}\right)$ before electrons can collect at the surface. So $V_T$ rises, sub-linearly (square root) because the depletion width grows as the square root of the total band bending.
- In other words the bulk acts as a second ("back") gate: making it more negative relative to the source pulls the channel charge down, and the front gate has to compensate.

## Grading notes

+2: the explanation links the reverse bias to a wider depletion region and a larger fixed depletion (bulk) charge that the gate must image before inversion, giving a larger $|V_T|$; mentioning the square-root dependence is a plus. +1: correct mechanism with one imprecise statement (e.g. "the channel needs more voltage to form" with the depletion charge only implied). 0: restates the formula or says "body effect" without a physical mechanism. −2 (asserted as fact): explanations that are wrong, e.g. that the oxide capacitance or the mobility changes with $v_{SB}$, that the source–bulk diode conducts, or that the threshold decreases with reverse bias.
