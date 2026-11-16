# Golden Solution - R547

## Reference answer

$\dfrac{\partial^2V_{BE}}{\partial T^2} = -\dfrac{(4 + m)k}{qT} = -\dfrac{(4+m)V_T}{T^2}$: the $V_{BE}$ and $E_g$ terms cancel. For $m = -3/2$: $-2.5(k/q)/T = -(0.215\ \mathrm{mV/K})/T$, i.e. −1.08 μV/K² at 200 K, −0.72 μV/K² at 300 K, −0.54 μV/K² at 400 K.
Sketch: always negative, a hyperbola $\propto -1/T$. Its magnitude is large at low temperature and falls toward zero as $T$ increases.

Derivation: $\dfrac{d}{dT}\left[\dfrac{V_{BE} - (4+m)V_T - E_g/q}{T}\right] = \dfrac{\partial V_{BE}/\partial T - (4+m)k/q}{T} - \dfrac{V_{BE} - (4+m)V_T - E_g/q}{T^2}$. The last term equals $(\partial V_{BE}/\partial T)/T$, so only $-(4+m)k/(qT)$ remains.
- Meaning: $V_{BE}(T)$ is concave down. Adding a linear PTAT term cancels only the slope, so a bandgap voltage keeps a residual curvature with a maximum at the zero-TC temperature $T_0$, ≈ $-(4+m)(k/q)(T - T_0)^2/(2T_0)$ (a few mV over ±100 K).

## Grading notes

+2: $-(4+m)k/(qT)$ (or $-(4+m)V_T/T^2$), negative for $m = -3/2$, ≈ −0.7 μV/K² at room temperature (±10%), sketched as a negative $1/T$ curve. +1: correct expression with a numerical slip or no sketch. 0: right approach (including $\partial V_{BE}/\partial T$ inside the derivative) with an algebra slip in the final form. -2 (asserted as fact): $V_{BE}$ treated as constant in the differentiation, giving $(E_g/q - V_{BE})/T^2 > 0$ (positive curvature), or a curvature that grows with $T$.
