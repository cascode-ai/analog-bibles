# Golden Solution - R681

## Reference answer

$\partial E_g/\partial T \approx -2.7\times10^{-4}$ eV/K, i.e. −0.27 mV/K for $E_g/q$, at T = 300 K, where $E_g$ ≈ 1.115 eV.

Derivation:
- $\dfrac{\partial E_g}{\partial T} = -7.02\times10^{-4}\,\dfrac{T(T+2216)}{(T+1108)^2}$ eV/K. At 300 K: $-7.02\times10^{-4}\times0.3807 = -2.67\times10^{-4}$ eV/K.
- The slope is not constant: −0.235 meV/K at 250 K and −0.297 meV/K at 350 K ($\partial^2E_g/\partial T^2 \approx -6.2\times10^{-7}$ eV/K²).

Effect on bandgap references ($V_{REF} = V_{BE} + $ PTAT term):
- $V_{BE} = V_T\ln(I_C/I_S)$ with $I_S = bT^{4+m}\exp[-E_g/(kT)]$ gives $V_{BE} = E_g(T)/q - V_T[(4+m)\ln T + \ln b - \ln I_C]$.
- The usual result $\partial V_{BE}/\partial T = [V_{BE} - (4+m)V_T - E_g/q]/T$ assumes a constant $E_g$. With $E_g(T)$, an extra term $(1/q)\,\partial E_g/\partial T \approx -0.27$ mV/K appears. Equivalently, $E_g$ in that formula is replaced by its linear extrapolation to 0 K, $E_{g0} = E_g - T\,\partial E_g/\partial T \approx 1.115 + 0.080 = 1.195$ eV.
- For $V_{BE}$ = 750 mV and m = −3/2, the TC of $V_{BE}$ becomes ≈ −1.70 mV/K instead of −1.45 mV/K.
- The PTAT term must therefore be about 17% larger (larger $\ln n$ or resistor ratio). The zero-TC output becomes $V_{REF} \approx E_{g0}/q + (4+m)V_T \approx 1.195 + 0.065 \approx 1.26$ V. A design based on a constant $E_g$ = 1.12 eV predicts ≈ 1.18 V; it would be mis-set and keep a residual TC of ≈ −0.27 mV/K. This is why practical bandgap references sit at ≈ 1.2–1.25 V rather than at $E_g(300\,\mathrm{K})/q$ plus a small correction.
- Because $\partial E_g/\partial T$ itself varies with T, $V_{BE}$ acquires extra curvature: ≈ −0.8 mV at ±50 K from 300 K, comparable to the curvature of the $(4+m)V_T\ln T$ term. A linear PTAT term cannot cancel it. The reference has zero TC at only one temperature and a parabolic residual ("bow") across the range, which needs curvature correction where high accuracy is required.

## Grading notes

- +2: a value of about −0.27 mV/K (−2.6 to −2.8 × 10⁻⁴ eV/K), plus a correct explanation of at least one effect. Either: the $V_{BE}$ TC becomes more negative, i.e., the effective bandgap in the zero-TC condition is the extrapolated ≈ 1.2 eV, so $V_{REF}$ ≈ 1.2–1.26 V and the PTAT gain must increase. Or: the temperature dependence of $\partial E_g/\partial T$ adds curvature, so zero TC holds only at one temperature. Both effects together is ideal.
- +1: correct value with only a vague effect ("adds some temperature dependence"), or correct effects with a small numerical slip.
- 0: correct method with a wrong value from an arithmetic slip, or correct effects without a value.
- -2 (asserted as fact): a positive $\partial E_g/\partial T$; a value off by 10× or more; or the claim that the $E_g$ variation does not affect bandgap references.
