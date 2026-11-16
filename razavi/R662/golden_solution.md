# Golden Solution - R662

## Reference answer

$\dfrac{\Phi_{out}}{V_{ex}}(s) = \dfrac{K_{VCO}\,s}{s^2 + \dfrac{I_PK_{VCO}R_P}{2\pi}s + \dfrac{I_PK_{VCO}}{2\pi C_P}} = \dfrac{2\pi C_PK_{VCO}\,s}{2\pi C_Ps^2 + I_PK_{VCO}R_PC_Ps + I_PK_{VCO}}$,
i.e., $\dfrac{K_{VCO}\,s}{s^2 + 2\zeta\omega_ns + \omega_n^2}$ with $\omega_n^2 = I_PK_{VCO}/(2\pi C_P)$ and $\zeta = \frac{R_P}{2}\sqrt{I_PC_PK_{VCO}/2\pi}$.

Derivation:
- The PFD/charge-pump/filter acts on $\Phi_{in} - \Phi_{out}$ (with $\Phi_{in} = 0$) with transfer function $(I_P/2\pi)(R_P + 1/C_Ps)$.
- So $\Phi_{out} = \dfrac{K_{VCO}}{s}\left[V_{ex} - \dfrac{I_P}{2\pi}\left(R_P + \dfrac{1}{C_Ps}\right)\Phi_{out}\right]$.
- Multiplying through by $s^2$ and solving gives the result.

Properties:
- The phase response is band-pass. The zero at s = 0 means a constant (step) $V_{ex}$ produces no permanent output phase change: the charge pump's integrator moves the filter voltage by $-\Delta V_{ex}$ while the phase error returns to zero. In the type I loop, by contrast, a step in $V_{ex}$ permanently shifts the phase by $\Delta V_{ex}/K_{PD}$.
- The peak is at ω = $\omega_n$, with magnitude $K_{VCO}/(2\zeta\omega_n) = 2\pi/(I_PR_P)$. Above $\omega_n$ the response tends to $K_{VCO}/s$ (open-loop modulation).
- In frequency terms, $\Omega_{out}/V_{ex} = K_{VCO}s^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$, a second-order high-pass.

## Grading notes

+2: the expression above or an equivalent form; it must include the zero at the origin. Remarks on the dc behaviour are a plus. +1: correct except for an overall sign flip arising from a stated sign convention (the high-frequency limit must physically be $+K_{VCO}/s$). 0: correct method (charge-pump/filter model $(I_P/2\pi)(R_P + 1/C_Ps)$, $V_{ex}$ added after the filter, the VCO as $K_{VCO}/s$) with an algebra slip in the result. -2 (asserted as fact): a result with a nonzero dc value (e.g., carrying over the type I behaviour), the filter modelled as $R_P \parallel C_P$, the VCO without its 1/s, or $V_{ex}$ injected before the filter.
