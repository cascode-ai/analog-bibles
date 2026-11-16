# Golden Solution - A257

## Reference answer

KCL at the output node (buffer output at $-AV_i$):

$sC_c(-AV_i - V_{out}) = g_{mII}V_i + V_{out}\left(sC_{II} + \dfrac{1}{R_{II}}\right)$

$\Rightarrow V_{out}\left[s(C_c + C_{II}) + \dfrac1{R_{II}}\right] = -V_i(sAC_c + g_{mII})$

$\Rightarrow \dfrac{V_{out}}{V_i} = -\dfrac{sAC_c + g_{mII}}{s(C_c + C_{II}) + 1/R_{II}} = \dfrac{-AC_c}{C_c + C_{II}}\cdot\dfrac{s + g_{mII}/(AC_c)}{s + 1/[R_{II}(C_c + C_{II})]}$.

- Zero: $s = -g_{mII}/(AC_c)$, in the left half-plane (because the feedforward path is inverted, it adds to rather than opposes the $g_{mII}$ path).
- Pole: $s = -1/[R_{II}(C_c + C_{II})]$.
- dc gain $-g_{mII}R_{II}$; high-frequency gain $-AC_c/(C_c + C_{II})$.

## Grading notes

+2: correct node equation and the stated form, with the LHP zero at $-g_{mII}/(AC_c)$ and the pole at $-1/[R_{II}(C_c + C_{II})]$. +1: correct transfer function, zero/pole not identified, or a sign convention slip that does not change the zero's half-plane. 0: right setup with an algebra error. −2 (asserted as fact): zero placed in the RHP for this inverting-buffer configuration, or pole at $-1/(R_{II}C_{II})$ ignoring $C_c$.
