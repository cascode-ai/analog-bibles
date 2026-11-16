# Golden Solution - A223

## Reference answer

Circuit 1 (n-channel follower with an n-channel diode-connected load): $R_{out} = 1/(g_{m1}+g_{m2}) = 1/(2g_{mN})$.

Output resistances (units of $1/g_{mN}$): C1 0.5; C3 and C4 0.59 ($1/(g_{mN}+g_{mP})$); C2 0.71 ($1/(2g_{mP})$); C5 1.0; C6 1.41. Both transistors of C1 present their (larger, n-channel) transconductance to the output.

## Grading notes

+2: Circuit 1 with the $1/(2g_{mN})$ argument. +1: Circuit 1 named with incomplete reasoning, or C1 and C2 named as a tie without using $K'_N = 2K'_P$. 0: no choice. −2 (asserted as fact): a current-source-loaded circuit (5, 6) named as lowest, or C3/C4 claimed lower than C1. Misreading other circuits (e.g. a diode-connected load treated as a current source, or a follower's own $g_m$ dropped) is a critical misread circuit even when Circuit 1 is still chosen: 0, not +1.
