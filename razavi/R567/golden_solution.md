# Golden Solution - R567

## Reference answer

$R_F \ge 2.23$ MΩ (≈ 2.2 MΩ).

- Transfer function with an ideal op amp: $V_{out}/V_{in} = -R_FC_1s/(1 + R_FC_2s)$, a high-pass that approaches $-C_1/C_2 = -4$ only for $\omega \gg 1/(R_FC_2)$.
- Magnitude relative to the nominal gain: $x/\sqrt{1+x^2}$ with $x = \omega R_FC_2$. Requiring $x/\sqrt{1+x^2} \ge 0.99$ gives $x \ge 7.02$, so $R_F \ge 7.02/(2\pi \times 1\ \mathrm{MHz} \times 0.5\ \mathrm{pF}) = 2.23$ MΩ. (The approximation $1 - 1/(2x^2) = 0.99$ gives $x = 7.07$, 2.25 MΩ.) The phase shift at this point is still ≈ 8°.
- If the gain error is defined instead as the magnitude of the complex error $|1 - H/(-C_1/C_2)| = 1/\sqrt{1+x^2} \le 1\%$, then $x \ge 100$ and $R_F \ge 31.8$ MΩ.

## Grading notes

+2: the high-pass transfer function with pole $1/(R_FC_2)$ and $R_F$ ≈ 2.2 MΩ (2.1–2.4 MΩ) from the 1% magnitude error. +1: $R_F$ ≈ 31.8 MΩ with the gain error explicitly defined as the complex (magnitude-and-phase) error $|1 - H/H_\infty|$. 0: right transfer function and criterion with an arithmetic slip in the final value. -2 (asserted as fact): $C_1$ used in place of $C_2$ in the pole (≈ 0.56 MΩ), the magnitude error taken as $1/(\omega R_FC_2)$ (giving 31.8 MΩ as a magnitude criterion), or $R_F$ treated as setting the gain together with $C_1$.
