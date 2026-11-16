# Golden Solution - R615

## Reference answer

Third-harmonic amplitude of the drain current: $\dfrac{\mu_0C_{ox}(W/L)\,\theta V_m^3}{8}$; of the output voltage: $R_D$ times this. Relative to the fundamental: $\mathrm{HD3} \approx \dfrac{\theta V_m^2}{8(V_{GS0}-V_{TH})}$.
- With $V = V_{GS}-V_{TH} = V_0 + V_m\cos\omega t$ ($V_0 = V_{GS0}-V_{TH}$) and $k_0 = \mu_0C_{ox}W/L$: $I_D = \dfrac{k_0V^2}{2(1+\theta V)} \approx \dfrac{k_0}{2}(V^2 - \theta V^3)$.
- Only the cubic term gives a third harmonic: $-\tfrac{k_0\theta}{2}V_m^3\cos^3\omega t$ contains $-\tfrac{k_0\theta V_m^3}{8}\cos3\omega t$.
- Fundamental: $k_0V_0V_m - \tfrac{k_0\theta}{2}\left(3V_0^2V_m + \tfrac34V_m^3\right) \approx k_0V_0V_m(1 - \tfrac32\theta V_0)$, so HD3 $= \dfrac{\theta V_m^2}{8V_0(1-1.5\theta V_0)} \approx \dfrac{\theta V_m^2}{8V_0}$.
- So the mobility degradation adds odd-order distortion to the otherwise purely quadratic stage.

## Grading notes

+2: third-harmonic drain-current amplitude $\mu_0C_{ox}(W/L)\theta V_m^3/8$ (output $R_D$ times this) and/or HD3 ≈ $\theta V_m^2/[8(V_{GS0}-V_{TH})]$, from the cubic term $-\tfrac{k_0\theta}{2}V^3$. +1: correct amplitude with the normalization missing or with a sign ambiguity. 0: correct expansion with a slip in the 1/4 from $\cos^3$ (e.g., $k_0\theta V_m^3/2$). -2 (asserted as fact): no third harmonic claimed, a third harmonic proportional to $V_m^2$ or independent of θ, or the $\theta V^3$ term dropped.
