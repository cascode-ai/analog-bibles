# Golden Solution - A049

## Reference answer

Because the p-channel transistor is built in the n-well, whose doping is higher than that of the p-substrate in which the n-channel transistor is built, and γ grows as the square root of the doping under the channel.

- $\gamma = \sqrt{2q\varepsilon_{Si}N_{SUB}}/C_{ox}$. With the same oxide ($C_{ox}$ equal), the only difference is the doping $N_{SUB}$ of the body under each channel.
- The n-channel device sits in the lightly doped starting p-substrate. The n-well is made by implanting/diffusing donors into that substrate; to form an n region at all, its donor concentration must exceed (over-compensate) the substrate acceptor concentration, and in practice the net well doping is made well above the substrate level (punch-through control, low well resistance against latch-up, isolation), typically by a factor of a few.
- $(\gamma_P/\gamma_N)^2 = (0.57/0.4)^2 \approx 2$: the well is about twice as heavily doped as the substrate (e.g. $6\times10^{16}$ vs $3\times10^{16}\ \mathrm{cm^{-3}}$).

## Grading notes

+2: γ ∝ $\sqrt{N}$ of the body region at equal $C_{ox}$, and the n-well (body of the PMOS) identified as more heavily doped than the p-substrate (body of the NMOS). Any sound reason for the heavier well doping is acceptable (the well is formed by counter-doping and over-compensating the substrate, and its net doping is made well above the substrate level for punch-through control, low well resistance against latch-up, or isolation); no reason beyond this identification is required. Quantifying the ratio (≈ 2) is a plus, not required. +1: the doping argument right with a minor inaccuracy (e.g. γ said to scale with $N$ rather than $\sqrt{N}$, or a wrong doping estimate). 0: only the formula for γ, without saying which region is more heavily doped. −2 (asserted as fact): attributing the difference to mobility, to hole versus electron charge, to different oxide thicknesses, to the work function difference, or claiming the p-substrate is the more heavily doped region.
