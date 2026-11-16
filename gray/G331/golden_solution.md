# Golden Solution - G331

## Reference answer

$\mathscr{R}(s) = a_v(s)/2 = \dfrac{500}{(1 + s/100)(1 + s/10^6)}$; $|\mathscr{R}| = 1$ at ≈ $5.0 \times 10^4$ rad/s (7.95 kHz), about half of the frequency where $|a_v| = 1$ (≈ $9.95 \times 10^4$ rad/s, 15.8 kHz).

- With $C_{\text{in}} = 0$ the divider from the output to the inverting node is $100\text{ k}/(100\text{ k} + 100\text{ k}) = 1/2$, so $\mathscr{R} = a_v/2$.
- Above 100 rad/s and well below $10^6$ rad/s, $|\mathscr{R}| ≈ 500 \times 100/\omega$, which is 1 at $\omega ≈ 5 \times 10^4$ rad/s (the second pole changes this by only 0.1%).
- $|a_v| = 1$ at $≈ 1000 \times 100 = 10^5$ rad/s (exactly $9.95 \times 10^4$ rad/s including the $10^6$ pole). The ratio is the feedback factor 1/2.

## Grading notes

+2: $\mathscr{R} = a_v/2$ and $|\mathscr{R}| = 1$ at ≈ 5 × 10⁴ rad/s (≈ 8 kHz), with the comparison "half of the ≈ 10⁵ rad/s unity-gain frequency of $a_v$". +1: correct values with the units confused once (e.g. 5 × 10⁴ called Hz) or the comparison missing. 0: correct $\mathscr{R}$ with an arithmetic slip in the frequency. −2 (asserted as fact): $\mathscr{R} = a_v$ (feedback factor 1) or $\mathscr{R} = a_v \times 2$, or the poles treated as Hz in a way that changes the stated numbers without notice.
