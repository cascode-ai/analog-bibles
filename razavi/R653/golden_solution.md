# Golden Solution - R653

## Reference answer

$\dfrac{\Phi_{out}}{V_{ex}}(s) = \dfrac{K_{VCO}(1 + s/\omega_{LPF})}{s^2/\omega_{LPF} + s + K_{PD}K_{VCO}} = \dfrac{K_{VCO}(s + \omega_{LPF})}{s^2 + \omega_{LPF}s + \omega_{LPF}K_{PD}K_{VCO}}$.

Derivation (linear model, Φin = 0, PD output $K_{PD}(\Phi_{in} - \Phi_{out})$):
- $V_{cont} = V_{ex} - \dfrac{K_{PD}}{1 + s/\omega_{LPF}}\Phi_{out}$ and $\Phi_{out} = \dfrac{K_{VCO}}{s}V_{cont}$.
- So $\Phi_{out}\left[1 + \dfrac{K_{PD}K_{VCO}}{s(1 + s/\omega_{LPF})}\right] = \dfrac{K_{VCO}}{s}V_{ex}$, which gives the result.

Properties:
- The poles are those of the closed-loop type I PLL ($\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}$, $2\zeta\omega_n = \omega_{LPF}$), and there is a zero at $-\omega_{LPF}$.
- Low-frequency limit $1/K_{PD}$: a step ΔV in $V_{ex}$ permanently shifts the output phase by $\Delta V/K_{PD}$. The LPF output changes by −ΔV to restore $\omega_{out} = \omega_{in}$, which requires a phase-error change of $\Delta V/K_{PD}$.
- High-frequency limit $K_{VCO}/s$: fast changes of $V_{ex}$ modulate the VCO as if the loop were open.
- In terms of frequency, $\Omega_{out}/V_{ex} = s\Phi_{out}/V_{ex}$ is high-pass (zero at dc), so slow $V_{ex}$ changes cannot change the locked output frequency.

## Grading notes

+2: the expression above or an algebraically equivalent form, e.g., $K_{VCO}(s + 2\zeta\omega_n)/(s^2 + 2\zeta\omega_ns + \omega_n^2)$ with $2\zeta\omega_n = \omega_{LPF}$ and $\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}$. Remarks on the limits are a plus. +1: correct except for an overall sign flip arising from a stated sign convention (the high-frequency limit must physically be $+K_{VCO}/s$). 0: correct method ($V_{ex}$ injected after the LPF, the VCO as $K_{VCO}/s$) with an algebra slip in the result. -2 (asserted as fact): $V_{ex}$ treated as injected before the LPF (which loses the zero), positive feedback giving $s^2 + \omega_{LPF}s - \omega_{LPF}K_{PD}K_{VCO}$, the VCO modelled without its integrator, or the closed-loop $\Phi_{out}/\Phi_{in}$ given instead.
