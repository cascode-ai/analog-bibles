# Golden Solution - grsim-06-19

## Reference answer

$A^+ = v_o/v_{dd} \approx +1$ and $A^- = v_o/v_{ss} \approx 0$, to first order: the output follows the positive supply. So $PSRR^+ = A_{dm}/A^+ \approx A_{dm}$ (≈ $g_{m1}R_o$, modest), and $PSRR^-$ is very large.

How the bias voltages move:
- $V_{BIAS1}$ is one diode drop ($M_{102}$, carrying the constant $I_{BIAS}$) below $V_{DD}$, so it follows $v_{dd}$. The tail source $M_5$ keeps $v_{sg5} = 0$ and couples to the supply only through $r_{o5}$.
- $V_{BIAS2}$ (diode $M_{105}$ plus triode $M_{106}$) and $V_{BIAS3}$ (diode $M_{107}$) are produced by currents from cascoded p-channel copies ($M_{103}/M_{104}$, $M_{109}/M_{108}$) of high output resistance. They therefore sit at fixed voltages above $-V_{SS}$ and follow $v_{ss}$.

Effect of $v_{ss}$:
- $M_{11}$, $M_{12}$ and the cascode gates all move with $v_{ss}$, so the folding nodes follow $v_{ss}$.
- The only coupling is through $r_{o1}$, $r_{o2}$ (from the folding nodes to the fixed common-source node). It changes the currents of $M_{1A}$ and $M_{2A}$ equally. The mirror copies the $M_{1A}$ change to $M_4$, so the two cancel at the output: $A^- \approx 0$.

Effect of $v_{dd}$:
- The tail-current change from $r_{o5}$ splits equally between $M_1$ and $M_2$ and cancels through the mirror (common-mode rejection).
- The mirror is self-biased from $V_{DD}$, so its input node (drain of $M_{3A}$/$M_{1A}$) moves with $v_{dd}$. $M_{1A}$ then sees the same drain-voltage change as $M_{2A}$ would if the output followed $v_{dd}$, and the mirror copies the resulting current.
- KCL at the output: $v_{dd}/R_{down} + (v_{dd} - v_o)/R_{up} = v_o/R_{down}$, so $v_o = v_{dd}$ (with $R_{down} \approx g_{m2A}r_{o2A}(r_{o2}\parallel r_{o12})$, $R_{up} \approx g_{m4A}r_{o4A}r_{o4}$).

Numerical check (nodal small-signal analysis): with $\mu C_{ox}$ of 194/64.7 μA/V², $L_{eff} = 0.82\ \mu$m, $\lambda_n = 0.024$, $\lambda_p = 0.049\ \mathrm{V^{-1}}$, $|V_{ov}| = 0.2$ V, $|I_{D5}| = I_{D11} = I_{D12} = 200\ \mu$A, the analysis gives $A_{dm} \approx 2.1\times10^4$, $A^+ \approx 1.01$ and $|A^-| \approx 2\times10^{-5}$.

## Grading notes

A correct simulation shows the output following $V_{DD}$ almost one-for-one ($A^+$ ≈ 0.9–1.1 at low frequency) and nearly ignoring $-V_{SS}$ ($|A^-| \ll 1$, typically $< 10^{-2}$). This holds as long as all op-amp transistors are saturated and the bias circuit references $V_{BIAS2}$/$V_{BIAS3}$ to $-V_{SS}$. +2: $A^+ \approx 1$, $A^- \approx 0$ with a correct mechanism (bias referencing, mirror tracking $V_{DD}$, cancellation of the $r_o$ paths) and simulation agreeing. +1: correct values with an incomplete explanation. 0: one supply right, the other wrong (e.g. a resistive-divider estimate $A^\pm \approx 0.5$ for both). -2: supplies swapped ($A^+ \approx 0$, $A^- \approx 1$), or both gains claimed ≈ $A_{dm}$.
