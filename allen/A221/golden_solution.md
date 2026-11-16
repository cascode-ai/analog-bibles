# Golden Solution - A221

## Reference answer

Circuit 4 (p-channel follower M1 with an n-channel diode-type load M2 from $V_{DD}$): $A_v = g_{mP}/(g_{mP}+g_{mN}) = 1/(1+\sqrt2)$ ≈ 0.41.

Gains: C1 ≈ 0.5 and C2 ≈ 0.5 (follower and diode load of the same type, equal $g_m$); C3 = $g_{mN}/(g_{mN}+g_{mP})$ ≈ 0.59; C4 = $g_{mP}/(g_{mP}+g_{mN})$ ≈ 0.41; C5 and C6 ≈ 1 (current-source loads). The load transistor in C4 is the higher-$g_m$ n-channel device, which loads the weaker p-channel follower most.

## Grading notes

+2: Circuit 4 with the $g_{mP}/(g_{mP}+g_{mN})$ argument. +1: Circuit 4 named with incomplete reasoning, or C1/C2/C4 named as the low group with C4 lowest not singled out. 0: reasoning sound but no choice. −2 (asserted as fact): Circuit 3, 5 or 6 named as lowest, or C1 claimed lower than C4.
