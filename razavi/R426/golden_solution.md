# Golden Solution - R426

## Reference answer

$A_v \approx g_{m1}\{[g_{m4}r_{O4}r_{O2}]\,\|\,[g_{m6}r_{O6}r_{O8}]\} \approx 1300$ (≈ 1380 if the "+1" and additive $r_O$ terms of the cascode resistances are kept).

- Each branch 0.5 mA. NMOS: $g_{m1-4} = \sqrt{2(134\ \mu)(200)(0.5\ \mathrm{m})} = 5.18$ mS, $r_{O1-4} = 20$ kΩ. PMOS: $|V_{OD}| = 0.35$ V, $g_{m5-8} = 2(0.5\ \mathrm{mA})/0.35\ \mathrm{V} = 2.86$ mS, $r_{O5-8} = 10$ kΩ.
- Looking down: $g_{m4}r_{O4}r_{O2} = 2.07$ MΩ. Looking up: $g_{m6}r_{O6}r_{O8} = 0.286$ MΩ. $R_{out} = 2.07\ \mathrm{M}\|0.286\ \mathrm{M} = 251$ kΩ.
- With the current mirror the short-circuit transconductance is ≈ $g_{m1}$: $A_v \approx 5.18\ \mathrm{mS} \times 251\ \mathrm{k\Omega} \approx 1300$.

## Grading notes

+2: gain in the range 1250–1450 from the cascode output resistance $(g_m r_O r_O)_{N}\|(g_m r_O r_O)_{P}$ times $g_{m1}$. +1: correct expression with a numerical slip of up to ~15%, or the PMOS overdrive from a different width stated explicitly. 0: correct method but one resistance badly wrong through a slip, or the answer gives only the expression. -2 (asserted as fact): output resistance taken as $r_{O2}\|r_{O6}$ (gain ≈ 30–40), the gain halved by treating the output as one side of a differential output without the mirror (≈ 650) asserted, or $g_m$ values off by a formula error.
