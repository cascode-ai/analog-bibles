# Golden Solution - R552

## Reference answer

$I_{SS} \propto 1/\mu \propto T^{3/2}$, i.e. a TC of $+1.5/T \approx +0.5\,\%/\mathrm{K}$ at 300 K.
- $g_m = \sqrt{2\mu C_{ox}(W/L)(I_{SS}/2)} = \sqrt{\mu C_{ox}(W/L)I_{SS}}$. A constant $g_mR_D$ requires $\mu I_{SS}$ constant, so $I_{SS} \propto T^{3/2}$.
- Circuit: a constant-$g_m$ (β-multiplier) bias. Two NMOS devices with size ratio $K$, an identical PMOS mirror, and a resistor $R_S$ in the source of the wider NMOS give $I = \dfrac{2}{\mu_nC_{ox}(W/L)R_S^2}\left(1 - \dfrac{1}{\sqrt K}\right)^2 \propto 1/\mu$. Mirror this current into the tail. The pair's $g_m$ then equals (constant)/$R_S$, so $g_mR_D \propto R_D/R_S$: zero TC if $R_S$ has zero TC, and also with resistor TC if $R_S$ is made of the same material as $R_D$.
- Rougher alternatives: a PTAT current ($\propto T$, +0.33 %/K) only partly tracks; a PTAT current plus a superlinear (e.g., PTAT²) component comes closer.

## Grading notes

+2: $I_{SS} \propto T^{3/2}$ (TC ≈ +0.5 %/K at 300 K) and a circuit that produces a current ∝ $1/\mu$, typically the constant-$g_m$ bias with resistor $R_S$ (ideally matched to $R_D$) mirrored into the tail. +1: correct requirement with a PTAT current proposed as the rough approximation (noting $T$ vs $T^{3/2}$), or the constant-$g_m$ circuit proposed without the exponent derived. 0: requirement correct, no circuit or an unsuitable one presented tentatively. -2 (asserted as fact): tail current decreasing with $T$ or ∝ $T^{3/4}$, a zero-TC (bandgap-derived) current presented as the solution, or $g_m \propto \mu I_{SS}$ used.
