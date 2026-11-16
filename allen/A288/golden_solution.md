# Golden Solution - A288

## Reference answer

$R_{s,C1} \approx 1/g_{mC1}$; $R_{s,C2} \approx r_{ds}$ (of the order of one drain resistance).

- Convention: the usual inspection port — each cascode source driven alone with M1/M2 removed, the MC1/MC2 gates ac-grounded, body effect neglected, $g_mr_{ds} \gg 1$.
- Looking into the source of a cascode device with drain load $R_D$: $R_s = (r_{ds} + R_D)/(1 + g_mr_{ds})$.
- MC1: its drain is the input of the p-channel cascode mirror (M3/M4 gates tied to the MC3 drain), which behaves like a diode, $R_D \approx 1/g_{m3}$. So $R_{s,C1} = (r_{dsC1} + 1/g_{m3})/(1+g_{mC1}r_{dsC1}) \approx 1/g_{mC1}$.
- MC2: its drain sees the output resistance of the p-channel cascode MC4/M4, $R_D \approx g_{mC4}r_{dsC4}r_{ds4}$, so $R_{s,C2} \approx \dfrac{g_{mC4}r_{dsC4}r_{ds4}}{g_{mC2}r_{dsC2}} \approx r_{ds}$ (equal to $r_{ds4}$ scaled by the ratio of the intrinsic gains): a high resistance, not $1/g_m$.

## Grading notes

+2: $R_{s,C1} \approx 1/g_{mC1}$ (because the MC1 drain sees the low, diode-like mirror input) and $R_{s,C2}$ of the order of $r_{ds}$ (e.g. $g_{mC4}r_{dsC4}r_{ds4}/(g_{mC2}r_{dsC2})$ or simply ≈ $r_{ds}$) with the reasoning via the drain load. +1: both results right with the reasoning only sketched, or one exact and one approximate with a slip. 0: one of the two right. An answer that explicitly adopts a different, stated port convention (e.g. keeping the tail-node feedback through M2/M5 and the floating $V_{Bias}$) and analyzes it correctly is not a misreading; grade it on its own consistency. Reading M3 as a gate–drain-shorted diode (instead of the MC3-drain connection) is a misreading of the MC1 load; if its numerical result still differs from ≈ $1/g_{mC1}$, the MC1 part is wrong. −2 (asserted as fact): $R_{s,C2} \approx 1/g_{mC2}$ with the output open, $R_{s,C1}$ large (≈ $r_{ds}$ or more), or results given as $g_m$ (a conductance) for a resistance.
