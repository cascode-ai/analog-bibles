# Golden Solution - R574

## Reference answer

$g_{m1}(t) = \beta(V_{DD} - V_{out} - V_{TH}) = \dfrac{g_{m0}}{1 + t/\tau_0}$, with $g_{m0} = \beta(V_{DD} - V_{TH}) = 12.3$ mS ($1/g_{m0}$ = 81 Ω) and $\tau_0 = 2C_H/g_{m0} = 162$ ps.

- $g_m = 0$ before CK rises. It jumps to 12.3 mS at $t = 0$ (ideal clock edge), then decays hyperbolically, not exponentially: 6.2 mS at 0.16 ns, 3.0 mS at 0.5 ns, 1.7 mS at 1 ns, 1.07 mS at 1.7 ns ($V_{out}$ = 2.1 V), 0.39 mS at 5 ns.
- For $t \gg \tau_0$, $g_m \approx 2C_H/t \to 0$ as $V_{out} \to V_{DD} - V_{TH}$.
- Equivalently, $1/g_m = 81\ \Omega + t/(2\ \mathrm{pF})$ grows linearly with time, which is why no single time constant describes the charging.
- Derivation: the saturated-charging solution gives the overdrive $V_{ov}(t) = 1/[\beta t/(2C_H) + 1/(V_{DD} - V_{TH})]$, and $g_m = \beta V_{ov}$.

## Grading notes

+2: initial value ≈ 12.3 mS, monotonic decay to zero of the form $1/(1 + t/\tau_0)$ (or ∝ 1/t at long times) with $\tau_0$ ≈ 0.16 ns, or equivalently $1/g_m$ rising linearly with slope $1/(2C_H)$. +1: correct hyperbolic decay to zero starting from $\beta(V_{DD} - V_{TH})$, with the time scale missing or wrong. This includes answers whose main result treats $1/g_m$ as a large-signal charging resistance ($C_H\,dV_{out}/dt = g_m(V_{DD}-V_{TH}-V_{out})$, giving $\tau = C_H/g_{m0} \approx 81$ ps), even if the exact 162 ps is added as a note. 0: the right initial value with the decay drawn as an exponential without justification. -2 (asserted as fact): $g_m$ increasing with time, constant, or settling to a nonzero final value.
