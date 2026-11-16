# Golden Solution - grsim-04-12

## Reference answer

Small signal: $I_C = 50$ µA each, $g_m = 1.92$ mS, $r_{o2} = 2.6$ MΩ, $r_{o4} = 1$ MΩ. $R_o = r_{o2}\|r_{o4} \approx 0.72$ MΩ; $v_o/v_i = g_{m1}R_o \approx +1.39\times10^3$ (≈ $1.37\times10^3$ including the pnp mirror's base-current error).

Transfer characteristic ($V_{SUP}$ = 2.5 V): a very steep transition (output swinging ≈ 2.5 V over only ≈ 2 mV of input), centred near the systematic offset $V_I \approx V_T\ln(1 + 2/\beta_{F,pnp}) \approx +1$ mV where $V_O \approx V_{SUP} - |V_{BE}| \approx 1.8$ V; for larger positive $V_I$ the output rises until $Q_4$ saturates (≈ $V_{SUP} - V_{CE(\text{sat})}$ ≈ 2.3 V); for negative $V_I$ it falls until $Q_2$ saturates (≈ −0.5 V, a $V_{CE(\text{sat})}$ above the common-emitter node at ≈ −0.7 V).

CMRR with $r_{tail}$ = 1 MΩ: $\mathrm{CMRR} \approx \dfrac{1 + 2g_mr_{tail}}{\dfrac{1}{1 + g_{m(mir)}r_{o(dp)}} + \dfrac{1}{1 + g_{m(mir)}r_{\pi(mir)}/2}} = \dfrac{3847}{0.0002 + 0.0385} \approx 1.0\times10^5$ (≈ 100 dB; a full small-signal solution gives 9.7×10⁴), dominated by the pnp base-current error.

## Grading notes

A correct answer gives $R_o$ ≈ 0.70–0.75 MΩ, gain ≈ (1.33–1.42)×10³, a transfer curve with a mV-wide transition near zero (slightly positive) input and output limits set by saturation of $Q_4$ and $Q_2$, and CMRR ≈ (0.8–1.2)×10⁵ (≈ 98–102 dB). A gain of $g_mR_o/2$ or a CMRR computed with the resistive-load formula ($g_mr_{tail}$ ≈ 1.9×10³) is wrong.
