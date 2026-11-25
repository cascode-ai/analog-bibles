# Golden Solution - R023

## Reference answer

Let $U=V_b-V_{TH}$, with $V_{TH}=0.7\,\mathrm V$, $\beta=\mu_nC_{ox}W/L$ and $\lambda=0$. KCL is $I_X=-C_1\,dV_X/dt$.

| Bias | Voltage and current |
|---|---|
| $U\le0$ | $V_X=3\,\mathrm V$, $I_X=0$. |
| $0<U<3\,\mathrm V$ | Initially saturated: $I_X=\beta U^2/2$, $V_X=3\,\mathrm V-I_Xt/C_1$. At $t_1=2C_1(3\,\mathrm V-U)/(\beta U^2)$, $V_X=U$ and triode decay begins. |
| $U\ge3\,\mathrm V$ | Triode from $t=0$; no finite constant-current interval. |

In triode,

$$I_X=\beta(UV_X-V_X^2/2),\qquad V_X\to0,\quad I_X\to0.$$

For $U>0$, the late-time constant is $C_1/(\beta U)$; the full triode decay is not a pure exponential. Both quantities and the voltage slope are continuous at the saturation/triode boundary. The graphs use explicitly chosen parameters because $V_b$, $C_1$ and $\beta$ are unspecified.

![Answer plot: voltage](/q/R023/solution-voltage.svg)

![Answer plot: current](/q/R023/solution-current.svg)

## Grading notes

+2: correct KCL and voltage/current sketches for clearly stated gate-bias conditions, including the applicable initial region and final values. A parameterized answer covers cutoff, initial saturation followed by triode, and initial triode; a correctly stated particular bias case is acceptable as a conditional sketch. At V_b=3.7 V the saturation interval has zero duration. +1: correct discharge mechanism but one requested quantity or the region condition is missing. 0: an unconditional waveform despite unspecified V_b, or an incorrect tail with otherwise sound KCL. −2: asserts a nonzero stopping voltage for an on channel, rising discharge voltage, or increasing current in this fixed-gate discharge. Do not require a constant-current stage when V_b≥3.7 V or any discharge when V_b≤0.7 V.
