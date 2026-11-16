# Golden Solution - R400

## Reference answer

With $G_m = g_{m1} + g_{m2}$ and $R = r_{O1}\|r_{O2}$ (the inverter's gain is $-G_mR$):
$Z_{in} = \dfrac{1}{sC_1} + \dfrac{R}{1 + G_mR} + \dfrac{1}{sC_2(1 + G_mR)}$ — $C_1$ in series with a resistance $R/(1+G_mR) \approx 1/G_m$ and the Miller capacitance $(1 + G_mR)C_2$.
$Z_{out} = \dfrac{R(C_1+C_2)}{C_1 + C_2 + C_2R(G_m + sC_1)} = R\ \Big\|\ \dfrac{C_1+C_2}{G_mC_2}\ \Big\|\ \dfrac{1}{sC_1C_2/(C_1+C_2)}$; at low frequencies $\dfrac{R}{1 + G_mRC_2/(C_1+C_2)}$.

- Impedance at the gate node G: $v_{out} = v_G(sC_2 - G_m)/(1/R + sC_2)$, current through $C_2$: $sC_2(v_G - v_{out}) = sC_2v_G(1 + G_mR)/(1 + sRC_2)$ → $Z_G = (1 + sRC_2)/[sC_2(1 + G_mR)]$; add $1/(sC_1)$.
- $Z_{out}$ ($V_{in}$ = 0): $v_G = v_XC_2/(C_1+C_2)$, $I_X = G_mv_G + v_X/R + sv_XC_1C_2/(C_1+C_2)$. Feedback view: open-loop $R$, loop gain $G_mR\,C_2/(C_1+C_2)$.

## Grading notes

+2: both impedances equivalent to the reference (both transistors' $g_m$ and $r_O$ used; the output capacitive branch included or explicitly neglected at low frequency). +1: correct structure with one slip (e.g. Miller factor $G_mR$ instead of $1 + G_mR$, or only $g_{m1}$ used in one place). 0: one impedance right, the other wrong. -2 (asserted as fact): $M_2$ treated as a passive load (only $g_{m1}$), feedback ignored ($Z_{out} = R$), or the inverter treated as non-inverting.
