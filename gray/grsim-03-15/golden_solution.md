# Golden Solution - grsim-03-15

## Reference answer

$R_o = r_{o1} + r_{o2} + g_{m2} r_{o1} r_{o2}(1 + g_{m3} r_{o3}) \approx 7.1\times10^8\ \Omega$ (≈ 0.7 GΩ), about $g_m r_o \approx 108$ times the output resistance of a plain cascode (≈ 6.6 MΩ).

- $\lambda = 0.02/0.12 = 0.167\ \mathrm{V^{-1}}$, $r_o = 1/(\lambda I_D) = 60$ kΩ; $W/L_{\text{eff}} = 83.3$, $g_m = \sqrt{2(194\ \mu)(83.3)(100\ \mu)} = 1.80$ mA/V; $g_m r_o = 108$.
- Test voltage at the output with $v_i = 0$: the source of $M_2$ moves by $v_{s2} = i_x r_{o1}$; $M_3$ (common source, ideal current-source load) drives $M_2$'s gate with $-g_{m3}r_{o3}v_{s2}$, so $v_{gs2} = -(1 + g_{m3}r_{o3})v_{s2}$. Then $i_x = g_{m2}v_{gs2} + (v_x - v_{s2})/r_{o2}$ gives $R_o = r_{o1} + r_{o2} + g_{m2}r_{o1}r_{o2}(1 + g_{m3}r_{o3}) = 0.12\ \mathrm{M} + 1.8\ \mathrm{m}\times(60\ \mathrm{k})^2\times109 = 706$ MΩ.
- In a level-1 simulation, $r_o = (1 + \lambda V_{DS})/(\lambda I_D)$ is larger than $1/(\lambda I_D)$ by 10–25% at typical $V_{DS}$, and $R_o \propto r_o^3$, so the simulated value can be up to about 1.5–2 times the hand value (≈ 0.7–1.4 GΩ).

## Grading notes

Hand part: +2 requires $R_o \approx 0.7$ GΩ (0.65–0.75 GΩ) from $r_o = 60$ kΩ, $g_m = 1.8$ mA/V, with the $(1 + g_{m3}r_{o3})$ boost. A correct simulation (small-signal output resistance or $\Delta V/\Delta I$ at the output) gives a value of the order of 1 GΩ (0.6–1.5 GΩ), about 100 times a plain cascode, with differences from the hand value explained by $r_o$'s $V_{DS}$ dependence in the model. −2 (asserted as fact): $R_o \approx g_m r_o^2$ (≈ 6.6 MΩ, the plain cascode), $R_o$ computed with $L_{\text{drwn}}$ (λ = 0.05) presented as correct, or $M_3$'s gain applied to the wrong node.
