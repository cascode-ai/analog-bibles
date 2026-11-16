# Golden Solution - R379

## Reference answer

The Thevenin impedances are equal (with the noise sources off the two circuits are identical), but the Thevenin voltages are $V_{Thev1} = -I_nr_O$ and $V_{Thev2} = V_n\dfrac{-g_mr_O + sC_{GS}Z_S(1 + g_{mb}r_O)}{1 + sC_{GS}(Z_1 + Z_S)}$. Equivalence therefore requires
$$V_n = \frac{I_n\,[1 + sC_{GS}(Z_1 + Z_S)]}{g_m - sC_{GS}Z_S(g_{mb} + 1/r_O)},$$
which depends on $Z_1$, $Z_S$ and frequency: the lemma does not hold in general. It reduces to $V_n = I_n/g_m$ only when $|sC_{GS}(Z_1+Z_S)| \ll 1$ (low frequencies).

- [Fig. 1], drain open: the total drain current is zero, so with no source in the gate loop ($Z_1$–$C_{GS}$–$Z_S$) no current flows there: $V_G = V_S = 0$, and $0 = V_{D}/r_O + I_n$ gives $V_{Thev1} = -I_nr_O$.
- [Fig. 2], drain open: the channel carries no current, so $V_n$ drives the loop $Z_1$, $C_{GS}$, $Z_S$: $V_{GS} = \dfrac{V_n}{1 + sC_{GS}(Z_1+Z_S)}$, $V_S = \dfrac{V_nsC_{GS}Z_S}{1 + sC_{GS}(Z_1+Z_S)}$. Zero channel current: $g_mV_{GS} - g_{mb}V_S + (V_D - V_S)/r_O = 0$ gives $V_D = V_S(1 + g_{mb}r_O) - g_mr_OV_{GS}$.
- The difference arises because the gate voltage source pushes current through $C_{GS}$ into $Z_S$, which the drain–source current source does not.

## Grading notes

+2: equal Thevenin impedances, both Thevenin voltages equivalent to the reference (a version with $g_{mb} = 0$ is acceptable if stated), and the conclusion that the required $V_n$ depends on $Z_1$, $Z_S$, $s$, so the lemma holds only at low frequency. +1: correct conclusion with one Thevenin voltage slightly off, e.g. an error confined to the $g_{mb}$ terms (such as $g_{mb}v_{bs}$ sent to the bulk instead of from drain to source) or an algebra slip between two forms, while $V_{Thev1} = -I_nr_O$, the equal impedances and the low-frequency-only conclusion are right. 0: correct method but the conclusion missing or ambiguous. -2 (asserted as fact): the lemma said to hold exactly with $C_{GS}$ and $Z_1$, Thevenin impedances claimed different, or $V_{Thev1}$ claimed to depend on $C_{GS}$ in a way that restores $V_n = I_n/g_m$.
