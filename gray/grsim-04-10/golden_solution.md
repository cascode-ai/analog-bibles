# Golden Solution - grsim-04-10

## Reference answer

$A_v = -g_{m1}(r_{o1}\|r_{o2})$ with $r_{o1}\|r_{o2} = 1/[(\lambda_n + \lambda_p)I] = 13.67\ \mathrm{V}/I$.

(a) Strong inversion, $g_{m1} = \sqrt{2k'_n(W/L)I}$ (W/L = 121.95), so $A_v \propto 1/\sqrt{I}$: −94 (1 mA), −297 (100 µA), −941 (10 µA), −2975 (1 µA). Overdrives: 0.29, 0.092, 0.029, 0.0092 V.
(b) $2nV_T = 78$ mV: 1 mA and 100 µA remain strong inversion (−94, −297); 10 µA and 1 µA are in weak inversion with $g_{m1} = I/(nV_T)$, so $A_v = -1/[nV_T(\lambda_n + \lambda_p)] = -350$ for both.
(c) A square-law (level-1) simulation reproduces (a) (gain growing as $1/\sqrt{I}$ without bound); a model with subthreshold conduction (e.g. BSIM) shows the gain levelling off at a few hundred at low currents, close to (b).

## Grading notes

A correct answer gives (a) ≈ −94, −297, −941, −2975 (±5 %) and (b) ≈ −94, −297, −350, −350, identifying 10 µA and 1 µA as weak inversion. A correct simulation agrees with (a) for a square-law model or approaches (b) at low current for a subthreshold-capable model. Gains that increase with current, or (b) values that keep rising as $1/\sqrt{I}$, are wrong.
