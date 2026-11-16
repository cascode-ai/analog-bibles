# Golden Solution - A222

## Reference answer

Circuit 6 (p-channel follower with a p-channel current-source load): $R_{out} \approx 1/g_{mP} = \sqrt2/g_{mN}$.

Output resistances (in units of $1/g_{mN}$): C1 $1/(2g_{mN})$ = 0.5; C2 $1/(2g_{mP})$ = 0.71; C3 and C4 $1/(g_{mN}+g_{mP})$ = 0.59; C5 ≈ $1/g_{mN}$ = 1.0; C6 ≈ $1/g_{mP}$ = 1.41. Only the follower's $g_m$ (plus the $g_{ds}$ terms) loads the output when the other device is a current source, and the p-channel follower has the smaller $g_m$.

## Grading notes

+2: Circuit 6 with $R_{out} \approx 1/g_{mP}$. +1: Circuits 5 and 6 named together. 0: no choice; or Circuit 6 named but its output resistance derived from a misread model (e.g. the p-channel follower treated as a fixed-gate current source, giving $R_{out,6} = 1/(g_{dsP}+g_{dsN})$). −2 (asserted as fact): a diode-loaded circuit named as highest, or Circuit 5 claimed higher than 6.
