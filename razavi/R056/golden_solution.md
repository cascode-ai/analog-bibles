# Golden Solution - R056

## Reference answer

### Device dimensions

$r_O=1/(\lambda I_D)\ge20\ \mathrm{k}\Omega$ requires $\lambda\le0.1\ \mathrm{V^{-1}}$. Since $\lambda\propto1/L$, the minimum length is $L=0.5\ \mu\mathrm{m}$.

At the minimum $V_{DS}$, choose the largest allowed overdrive, $V_{ov}=0.4\ \mathrm{V}$. The square law gives $W/L=2I_D/(\mu_n C_{ox}V_{ov}^2)\approx46.64$, so $W\approx23.3\ \mu\mathrm{m}$. Including $1+\lambda V_{DS}=1.04$ at $V_{DS}=0.4\ \mathrm{V}$ gives $W\approx22.4\ \mu\mathrm{m}$.

### Capacitances

Using the first-order width and the shared drain of size $W/2$ by $E$:

- $C_{GS}=\tfrac23 WLC_{ox}+WC_{ov}\approx39.2\ \mathrm{fF}$.
- $C_{GD}=WC_{ov}\approx9.3\ \mathrm{fF}$.
- $C_{DB}=\tfrac W2 EC_j+2(\tfrac W2+E)C_{jsw}\approx19.7\ \mathrm{fF}$.

## Grading notes

+2: L = 0.5 µm from the $r_O$ requirement with $\lambda \propto 1/L$, overdrive = 0.4 V from the minimum $V_{DS}$, W ≈ 22–23.5 µm, and $C_{GS}$ ≈ 37–40 fF, $C_{GD}$ ≈ 9 fF, $C_{DB}$ ≈ 19–20 fF consistent with that W (±5%). +1: a design with explicitly stated extra margin (e.g., longer L or smaller overdrive) that meets both constraints, with capacitances computed consistently; or one capacitance wrong by a slip. 0: correct W and L with the capacitances mostly wrong, or the reverse. -2 (asserted as fact): L or W determined from a wrong constraint (e.g., overdrive set to $V_{DS} - V_{TH}$, $r_O = \lambda/I_D$), or the unfolded drain area used for $C_{DB}$ along with other errors.
