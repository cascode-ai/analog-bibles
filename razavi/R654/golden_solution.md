# Golden Solution - R654

## Reference answer

$K_{VCO}$ may vary by at most a factor of $(1.5/1)^2 = 2.25$: $K_{VCO,max}/K_{VCO,min} \le 2.25$, i.e., between $\omega_{LPF}/(9K_{PD})$ (ζ = 1.5) and $\omega_{LPF}/(4K_{PD})$ (ζ = 1).
- About the mean of the range this is ±38% ($1.625K_{min} \pm 0.625K_{min}$).
- Relative to the ζ = 1 value, $K_{VCO}$ may drop by 56% (to 0.44×). Relative to the ζ = 1.5 value, it may rise by 125%.

Derivation:
- The closed loop is $H(s) = \dfrac{K_{PD}K_{VCO}}{s^2/\omega_{LPF} + s + K_{PD}K_{VCO}}$.
- So $\omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}}$ and $\zeta = \tfrac12\sqrt{\omega_{LPF}/(K_{PD}K_{VCO})} \propto K_{VCO}^{-1/2}$.
- ζ = 1 gives $K_{PD}K_{VCO} = \omega_{LPF}/4$; ζ = 1.5 gives $K_{PD}K_{VCO} = \omega_{LPF}/9$. The ratio is 9/4 = 2.25.

## Grading notes

+2: ζ ∝ $1/\sqrt{K_{VCO}}$ and the allowed ratio $K_{max}/K_{min} = 2.25$, or the equivalent range $\omega_{LPF}/(9K_{PD}) \le K_{VCO} \le \omega_{LPF}/(4K_{PD})$, or ±38% about the centre (any clearly referenced percentage is fine). +1: correct dependence and range with a slip in converting it to a percentage. 0: correct ζ formula with the range not derived. -2 (asserted as fact): ζ taken proportional to $K_{VCO}$ or to $\sqrt{K_{VCO}}$, giving a ratio of 1.5 or the wrong direction; or ζ claimed independent of $K_{VCO}$.
