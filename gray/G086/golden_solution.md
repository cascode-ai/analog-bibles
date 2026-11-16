# Golden Solution - G086

## Reference answer

$v_o/v_i \approx +109$, $R_o \approx 119$ kΩ.

- $I_D = 50$ µA in each transistor.
- $g_{m1} = \sqrt{2k'_n(W/L)I_D} = \sqrt{2(126.6\ \mu)(50/0.76)(50\ \mu)} = 0.913$ mS ($V_{ov} \approx 0.11$ V).
- $r_{o2} = 1/(\lambda_nI_D) = 190$ kΩ, $r_{o4} = 1/(\lambda_pI_D) = 320$ kΩ.
- $R_o = r_{o2}\|r_{o4} = 119$ kΩ; $G_m = g_{m1}$ (the mirror doubles the single-ended transconductance), so $v_o/v_i = g_{m1}R_o \approx 109$ (non-inverting from the gate of $M_1$). A full small-signal solution gives 108.6 and 119.5 kΩ.

## Grading notes

+2: gain 100–118 and $R_o$ 110–128 kΩ, with $L_{\text{eff}}$ used for $W/L$ and λ. Using $r_o = (1+\lambda V_{DS})/(\lambda I_D)$ with a stated $V_{DS}$ is acceptable within these ranges. +1: one slip that moves a value slightly outside the ranges. 0: lateral diffusion ignored ($L$ = 1 µm, giving $R_o$ ≈ 167 kΩ and gain ≈ 133) with an otherwise correct analysis, or $R_o$ right and gain wrong. -2 (asserted as fact): gain computed as $g_mR_o/2$, $R_o$ taken as $r_{o2}$ alone or as $2r_{o2}\|r_{o4}$, the PMOS $g_m$ used for the input pair, or a wrong process ($k' = 194\ \mu\mathrm{A/V^2}$, λ = 0.02).
