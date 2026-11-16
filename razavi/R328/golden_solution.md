# Golden Solution - R328

## Reference answer

About 15.6 μV rms: the input-referred PSD is ≈ 2.44×10⁻¹⁸ V²/Hz (≈ 1.56 nV/√Hz), flat over the band.

- $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D} = \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18$ mS.
- $\overline{V_{n,in}^2} = 4kT\left(\dfrac{\gamma}{g_m} + \dfrac{1}{g_m^2R_D}\right) = 1.656\times10^{-20}\,(128.8 + 18.7) = 2.44\times10^{-18}\ \mathrm{V^2/Hz}$ (M1 contributes ≈ 87%, $R_D$ ≈ 13%).
- Over 0–100 MHz: $2.44\times10^{-18}\times10^{8} = 2.44\times10^{-10}\ \mathrm{V^2}$, i.e. $\sqrt{\cdot} \approx 15.6\ \mu\mathrm{V_{rms}}$.
- $r_O$ (if included) is noiseless and scales the gain and the output noise equally, so it does not change the input-referred value. (With γ = 1 the result would be ≈ 18.7 μV rms.)

## Grading notes

+2: about 15.6 μV rms (±5%), or the PSD 2.44×10⁻¹⁸ V²/Hz integrated correctly over 100 MHz, with both the transistor term $4kT\gamma/g_m$ and the load term $4kT/(g_m^2R_D)$. +1: correct PSD but a slip in the integration (e.g., forgetting the square root or using a 2π factor), or a small numerical slip. 0: only the transistor term (≈ 14.6 μV) with the method otherwise right, or a correct expression with no final number. -2 (asserted as fact): the load noise added without dividing by the gain ($4kTR_D$ directly), $g_m$ off by a formula error, γ changed from the given 2/3 without saying so so that the value is off, or a result off by more than ~20%.
