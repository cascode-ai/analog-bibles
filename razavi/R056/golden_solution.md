# Golden Solution - R056

## Reference answer

$L = 0.5\ \mu$m, $W \approx 23\ \mu$m ($W/L \approx 46.6$); $C_{GS} \approx 39$ fF, $C_{GD} \approx 9.3$ fF, $C_{DB} \approx 19.7$ fF.
- Output impedance: $r_O = 1/(\lambda I_D) \ge 20$ kΩ, so $\lambda \le 0.1\ \mathrm{V^{-1}}$, so $L \ge 0.5\ \mu$m. Take $L = 0.5\ \mu$m (smallest area and capacitance).
- Saturation down to $V_{DS} = 0.4$ V: $V_{GS} - V_{TH} \le 0.4$ V. Take 0.4 V (smallest W): $W/L = 2I_D/[\mu_nC_{ox}(0.4)^2] = 1\ \mathrm{mA}/(134\ \mu \times 0.16) = 46.6$, so $W = 23.3\ \mu$m (22.4 µm if the factor $1 + \lambda V_{DS} = 1.04$ is included).
- $C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = \tfrac23(23.3)(0.5)(3.84) + 23.3(0.4) = 29.8 + 9.3 = 39.1$ fF.
- $C_{GD} = WC_{ov} = 9.3$ fF.
- $C_{DB} = \tfrac{W}{2}EC_j + 2(\tfrac{W}{2} + E)C_{jsw} = 11.6 \times 3 \times 0.56 + 2(14.6)(0.0035) = 19.6 + 0.1 = 19.7$ fF.

## Grading notes

+2: L = 0.5 µm from the $r_O$ requirement with $\lambda \propto 1/L$, overdrive = 0.4 V from the minimum $V_{DS}$, W ≈ 22–23.5 µm, and $C_{GS}$ ≈ 37–40 fF, $C_{GD}$ ≈ 9 fF, $C_{DB}$ ≈ 19–20 fF consistent with that W (±5%). +1: a design with explicitly stated extra margin (e.g., longer L or smaller overdrive) that meets both constraints, with capacitances computed consistently; or one capacitance wrong by a slip. 0: correct W and L with the capacitances mostly wrong, or the reverse. -2 (asserted as fact): L or W determined from a wrong constraint (e.g., overdrive set to $V_{DS} - V_{TH}$, $r_O = \lambda/I_D$), or the unfolded drain area used for $C_{DB}$ along with other errors.
