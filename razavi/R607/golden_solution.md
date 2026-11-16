# Golden Solution - R607

## Reference answer

Writing the gain as $|A_v| = g_mR_D = \dfrac{2IR_D}{V_{GS}-V_{TH}}$, it can be raised only by lowering the overdrive or by raising the drop $IR_D$, and each one degrades linearity:
1. Lower overdrive (larger W/L at fixed current): the input-side distortion of the voltage-to-current conversion grows, because it is set by the input swing relative to the overdrive: HD2 $= V_m/[4(V_{GS}-V_{TH})]$ in the common-source stage, HD3 $= V_m^2/[32(V_{GS}-V_{TH})^2]$ in the pair, and the pair's linear input range ($\approx\sqrt2(V_{GS}-V_{TH})$) shrinks.
2. Larger $R_D$ (larger $IR_D$): the dc drain voltage $V_{DD} - IR_D$ falls while the output swing $A_vV_m$ grows, so the drain approaches $V_{GS}-V_{TH}$ (or $V_{in,CM}-V_{TH}$ for the pair) and the transistor is driven into the triode region at the output peaks, causing heavy distortion; for a fixed supply, a higher gain leaves less room for a linear output swing.

## Grading notes

+2: both effects: (1) higher gain via smaller overdrive (larger W/L at fixed current, or less current at a fixed $IR_D$ drop) increases the distortion of the input device (distortion ∝ $V_m/V_{ov}$ or $V_m^2/V_{ov}^2$, or a narrower linear input range), and (2) higher gain via larger $R_D$/$IR_D$ lowers the drain bias and enlarges the output swing so the transistor enters triode (output headroom), limiting the linear output swing. Equivalent wording is fine; an extra correct effect (e.g., output-dependent $r_O$) is acceptable but does not replace a missing one. +1: one effect clearly explained and the other only hinted. 0: only one of the two effects. -2 (asserted as fact): claims that higher gain by itself improves linearity, that a lower overdrive reduces distortion, or that a larger $R_D$ moves the transistor further from triode. With an ideal tail source the single-ended output of the pair also has no even-order harmonics ($i_{D1} - I = \Delta I/2$ is odd in the input); a side remark that a single-drain output restores the second harmonic is a minor false claim.
