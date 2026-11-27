# Golden Solution - R065

## Reference answer

The small-signal gain is
$$A_v=-g_{m1}(r_{O1}\parallel r_{O2})\approx-48.8.$$

- $g_{m1}=\sqrt{2\mu_nC_{ox}(W/L)_1 I_D}\approx3.66\ \mathrm{mS}$.
- Because $\lambda\propto1/L$, $\lambda_1=0.1\ \mathrm{V^{-1}}$ and $\lambda_2=0.05\ \mathrm{V^{-1}}$ for the 2-$\mu\mathrm{m}$ PMOS.
- $r_{O1}\approx1/(\lambda_1 I_D)=20\ \mathrm{k\Omega}$, $r_{O2}=40\ \mathrm{k\Omega}$, and $r_{O1}\parallel r_{O2}\approx13.33\ \mathrm{k\Omega}$.
- Therefore $A_v=-(3.66\ \mathrm{mS})(13.33\ \mathrm{k\Omega})\approx-48.8$.

## Grading notes

- +2 for a gain of $-48.8$ within ±3%, with $\lambda_2$ scaled to $0.05\ \mathrm{V^{-1}}$ for the 2 μm length.
- +1 for the correct method with one arithmetic slip.
- 0 for the correct expression $-g_{m1}(r_{O1}\parallel r_{O2})$ with several arithmetic slips.
- −2 when asserted as fact for leaving $\lambda_2$ unscaled for the 2 μm length (giving about −24.4), using the PMOS transconductance, including only one output resistance, or reporting a positive gain.
