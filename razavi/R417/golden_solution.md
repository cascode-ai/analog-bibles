# Golden Solution - R417

## Reference answer

$\overline{V_{n,in}^2} = \dfrac{4kT\gamma(g_{m1}+g_{m2})}{(g_{m1}+g_{m2})^2} = \dfrac{4kT\gamma}{g_{m1}+g_{m2}}$ (= $\dfrac{8kT}{3(g_{m1}+g_{m2})}$ for γ = 2/3).

- Output noise current $4kT\gamma(g_{m1}+g_{m2})$ flows into $r_{O1}\|r_{O2}$; the gain is $(g_{m1}+g_{m2})(r_{O1}\|r_{O2})$, so $r_O$ cancels.
- Example: with $(W/L)_{1,2} = 50/0.5$ self-biased at $V_{DD}$ = 3 V ($g_{m1}+g_{m2} \approx 10.8$ mS), ≈ $1.0\times 10^{-18}\ \mathrm{V^2/Hz}$ (1.0 nV/√Hz) at 300 K.

## Grading notes

+2: $4kT\gamma/(g_{m1}+g_{m2})$ (or the γ = 2/3 form). +1: the right form with a factor slip. 0: the method right (output noise divided by the gain squared) but an error in one device's contribution. -2 (asserted as fact): $4kT\gamma/g_{m1} + 4kT\gamma/g_{m2}$, the PMOS treated as a passive load (noise referred with $g_{m1}$ only), $r_O$ counted as resistor thermal noise, or the output noise current not referred to the input.
