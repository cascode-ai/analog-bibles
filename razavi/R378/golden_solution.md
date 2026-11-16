# Golden Solution - R378

## Reference answer

With $D \equiv 1 + Z_S\left(g_m + g_{mb} + \dfrac{1}{r_O}\right) + sC_{GS}\left[Z_1 + Z_S + Z_1Z_S\left(g_{mb} + \dfrac{1}{r_O}\right)\right]$:
$$I_{n,out1} = \frac{I_n\,[1 + sC_{GS}(Z_1 + Z_S)]}{D},\qquad I_{n,out2} = \frac{V_n\left[g_m - sC_{GS}Z_S\left(g_{mb} + \dfrac{1}{r_O}\right)\right]}{D}$$
Equivalence requires $V_n = I_n\dfrac{1 + sC_{GS}(Z_1 + Z_S)}{g_m - sC_{GS}Z_S(g_{mb} + 1/r_O)}$, which depends on $Z_1$, $Z_S$ and frequency. So the lemma does not hold in general: a gate-referred voltage $I_n/g_m$ alone is not an equivalent of the drain noise current once $C_{GS}$ conducts. It is recovered only when $|sC_{GS}(Z_1 + Z_S)| \ll 1$ (low frequencies or small source impedances); for $Z_1 = Z_S = 0$ it holds exactly.

- [Fig. 1]: gate node $V_G = V_S\dfrac{sC_{GS}Z_1}{1 + sC_{GS}Z_1}$; channel current $g_m(V_G - V_S) - g_{mb}V_S - V_S/r_O + I_n$; KCL at the source (channel current + $C_{GS}$ current = $V_S/Z_S$). The drain-short current equals the channel current.
- [Fig. 2]: $(V_n - V_G)/Z_1 = (V_G - V_S)sC_{GS}$, channel current $g_m(V_G - V_S) - g_{mb}V_S - V_S/r_O$, same KCL at the source.
- Physically, $V_n$ in series with the gate also drives current through $C_{GS}$ (and $Z_1$), which a drain–source current $I_n$ does not; an exact gate-referred model would need an additional, correlated noise current at the gate.

## Grading notes

+2: both expressions equivalent to the reference (a version with $g_{mb} = 0$, $r_O \to \infty$, i.e. $I_{n,out1} = I_n[1 + sC(Z_1+Z_S)]/[1 + g_mZ_S + sC(Z_1+Z_S)]$ and $I_{n,out2} = g_mV_n/[\ldots]$, is acceptable if stated), and the conclusion that the lemma fails in general because the required $V_n/I_n$ depends on $Z_1$, $Z_S$ and $s$, holding only for $sC_{GS}(Z_1+Z_S) \to 0$. +1: correct conclusion with one expression slightly off. 0: correct expressions with no or an unclear conclusion. -2 (asserted as fact): the lemma declared to hold unchanged ($V_n = I_n/g_m$ for all $Z_1$, $Z_S$), or $C_{GS}$ said to have no effect on the equivalence.
