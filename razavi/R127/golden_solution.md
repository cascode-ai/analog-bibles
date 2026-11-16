# Golden Solution - R127

## Reference answer

$A_v \approx -3.57$ (≈ $-g_{m1}R_D = -3.66$, since $R_D$ is tiny compared with the cascode output resistance).

- $g_{m1} = 3.66$ mS, $g_{m2} = 1.64$ mS, $r_{O1} = r_{O2} = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ, $\eta_2 = 0.45/(2\sqrt{0.9 + 0.323}) = 0.203$, $g_{mb2} = 0.333$ mS.
- $A_v = -\dfrac{g_{m1}r_{O1}[(g_{m2}+g_{mb2})r_{O2} + 1]R_D}{R_D + r_{O1} + r_{O2} + (g_{m2}+g_{mb2})r_{O1}r_{O2}} = -3.66\ \mathrm{mS} \times 1\ \mathrm{k\Omega} \times \dfrac{808}{829} \approx -3.57$.

## Grading notes

+2: gain between −3.5 and −3.7 (either the exact cascode expression or $-g_{m1}R_D$ with the remark that the cascode output resistance is much larger than $R_D$). +1: one slip. 0: right approach but $g_{m1}$ computed wrongly by a slip. -2 (asserted as fact): gain of order $g_{m1}g_{m2}r_{O1}r_{O2}$ (load $R_D$ ignored), gain $-g_{m2}R_D$, or positive gain.
