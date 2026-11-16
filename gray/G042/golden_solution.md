# Golden Solution - G042

## Reference answer

Unimplanted: $V_t \approx -1.54$ V. Implanted: $V_t \approx -1.2$ V (−1.16 V if the depletion layer is assumed to lie within the counter-doped layer; −1.25 V when, more accurately, it extends into the $10^{16}$ well beneath).

- $C_{ox} = 3.9\times8.86\times10^{-14}/(400\times10^{-8}) = 8.64\times10^{-8}$ F/cm².
- $|\phi_f| = (kT/q)\ln(N_D/n_i) = 0.026\ln(6.67\times10^5) = 0.349$ V → $2|\phi_f| = 0.70$ V.
- $|Q_b| = \sqrt{2q\epsilon_{Si}N_D(2|\phi_f|)} = \sqrt{2(1.6\times10^{-19})(1.03\times10^{-12})(10^{16})(0.70)} = 4.79\times10^{-8}$ C/cm² → $|Q_b|/C_{ox} = 0.55$ V.
- $Q_{ss}/C_{ox} = 1.6\times10^{-19}\times10^{11}/8.64\times10^{-8} = 0.19$ V.
- PMOS: $V_t = \phi_{ms} - 2|\phi_f| - |Q_b|/C_{ox} - Q_{ss}/C_{ox} = -0.1 - 0.70 - 0.55 - 0.19 = -1.54$ V.
- Implanted: net surface doping $10^{16} - 0.9\times10^{16} = 10^{15}$ cm⁻³ ($n$-type) to 0.3 μm; the inversion condition is taken from the well, $2|\phi_f|$ = 0.70 V (taking the counter-doped layer's $2|\phi_f|$ = 0.58 V instead is an equally acceptable convention; it gives −1.02 V for the uniform $10^{15}$ box and −1.09 V for the two-layer solution). Box model with the depletion layer inside the layer: $|Q_b|/C_{ox} = 0.18$ V → $V_t = -1.16$ V. Check: a $10^{15}$ depletion layer at 0.7 V would be ≈ 0.95 μm deep, beyond the 0.3-μm layer, so solving the two-layer case ($\psi = \tfrac{q}{\epsilon}[N_1x_i^2/2 + N_2(W^2-x_i^2)/2] = 0.70$ V) gives $W \approx 0.41\ \mu$m, $|Q_b| = q(10^{15}\times0.3\ \mu\mathrm{m} + 10^{16}\times0.11\ \mu\mathrm{m}) = 2.29\times10^{-8}$ C/cm² → 0.26 V → $V_t \approx -1.25$ V. (Treating the implant as a thin charge sheet, dose $2.7\times10^{11}$ cm⁻², gives $\Delta V_t = +0.50$ V, $V_t \approx -1.04$ V.)

## Grading notes

Two results, half the credit each. +2: unimplanted $-1.5$ to $-1.6$ V with all four terms of correct sign, and implanted in $-1.0$ to $-1.3$ V with the implant making $V_t$ less negative via the reduced net surface doping (any of the box, two-layer or charge-sheet treatments, stated). +1: both right in method with an arithmetic slip that moves one result just outside its range (e.g. $C_{ox}$ or $|\phi_f|$ slightly off). 0: one of the two right (e.g. the unimplanted value right and the implanted one wrong). −2 (asserted as fact): positive threshold for the unimplanted PMOS, the implant claimed to make $V_t$ more negative, the depletion-charge or surface-state term with the wrong sign, or implant concentration added to the well doping (giving ≈ −1.9 V) as fact. The choice of $2|\phi_f|$ for the inversion condition (the well's 0.70 V or the implanted layer's 0.58 V) is a convention; do not count either as a false claim.
