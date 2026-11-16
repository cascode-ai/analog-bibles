# Golden Solution - R310

## Reference answer

Because the Miller factor must be evaluated at the frequencies where $C_{GD1}$ matters, and there the large $C_L$ has already shorted the output: the impedance seen at the source of $M_2$ (node X) is
$$Z_X \approx \frac{Z_L}{(g_{m2} + g_{mb2})r_{O2}} + \frac{1}{g_{m2} + g_{mb2}},\qquad Z_L = R_L\left\|\frac{1}{C_Ls}\right.$$
($R_L$: the high output resistance of $I_1$).
- At dc, $Z_L = R_L$ is large and $Z_X$ can be large, so the low-frequency gain from the gate of $M_1$ to X, $-g_{m1}Z_X$, is large.
- But $C_L$ with the large $R_L$ (and the cascode's high output resistance) forms a very low-frequency output pole. Above about $1/(r_{O2}C_L)$, $|Z_L| = 1/(\omega C_L)$ falls below $r_{O2}$, the first term becomes negligible, and $Z_X \to 1/(g_{m2} + g_{mb2})$.
- The input pole (where the Miller capacitance of $C_{GD1}$ acts, ~$1/\{R_S[C_{GS1} + \ldots]\}$) lies far above that frequency. There the gain from the gate of $M_1$ to X is only ≈ $-g_{m1}/(g_{m2} + g_{mb2})$, so the effective Miller capacitance is ≈ $[1 + g_{m1}/(g_{m2}+g_{mb2})]C_{GD1}$.
- Put differently, using the low-frequency gain in Miller's theorem is not valid here: the gain from the gate of $M_1$ to X drops with frequency long before the input pole. The large dc Miller factor only affects frequencies already well below the dominant output pole, so it barely changes the overall transfer function. (Same reason that the input impedance of a CG stage tends to $1/(g_m + g_{mb})$ as its load capacitance increases.)

## Grading notes

+2: explains that the impedance at the source of $M_2$ depends on the load impedance, that $C_L$ makes the load impedance small at the relevant (input-pole) frequencies so that $Z_X \approx 1/(g_{m2} + g_{mb2})$, and that the Miller factor must be evaluated at those frequencies (the large low-frequency factor applies only below the low output pole). +1: correct key idea ($C_L$ shorts the output at high frequencies, so $R_X \to 1/(g_{m2}+g_{mb2})$) without the frequency-scale argument or without the $Z_X$ expression. 0: vague statement that "$C_L$ reduces the gain" without linking it to the impedance at node X. -2 (asserted as fact): claims $C_L$ has no effect and the Miller factor is truly large, claims $C_{GD1}$ is multiplied by the overall stage gain, or argues that $Z_X$ is always $1/g_{m2}$ regardless of the load.
