# Golden Solution - A068

## Reference answer

$I_D = 2K'\dfrac{W}{L}\left(n\dfrac{kT}{q}\right)^2$.

- Weak inversion: $g_m = I_D/(nkT/q)$. Strong inversion (saturation): $g_m = \sqrt{2K'(W/L)I_D}$.
- Equating: $I_D/(nkT/q) = \sqrt{2K'(W/L)I_D}$ → $I_D = 2K'(W/L)(nkT/q)^2$.
- At this current the strong-inversion overdrive is $V_{GS} - V_T = \sqrt{2I_D/(K'W/L)} = 2nkT/q$ (≈ 78 mV for n = 1.5). Below this current the square law would predict a $g_m$ above the weak-inversion value, which is the physical upper limit, so the exponential model applies there.
- Example: $K'$ = 110 µA/V², W/L = 1, n = 1.5, T = 300 K → $I_D$ = 2 × 110 µA/V² × (38.8 mV)² ≈ 0.33 µA.

## Grading notes

+2: $I_D = 2K'(W/L)(nkT/q)^2$ obtained by equating $I_D/(nkT/q)$ with $\sqrt{2K'(W/L)I_D}$. +1: right method with a factor-of-2 slip. 0: both transconductances set up correctly but not solved for $I_D$. −2 (asserted as fact): a transition current independent of W/L or $K'$, the nonsaturation $g_m$ used for strong inversion, or a result proportional to $nkT/q$ to the first power.
