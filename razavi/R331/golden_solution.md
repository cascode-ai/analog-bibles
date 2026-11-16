# Golden Solution - R331

## Reference answer

Let $V_S$ be the source voltage (drain and gate at ac ground, bulk at ac ground).

- Current flowing from drain to source inside the device (channel, $r_O$ and noise source): $I_{DS} = g_m(0 - V_S) + g_{mb}(0 - V_S) + \dfrac{0 - V_S}{r_O} + I_n = I_n - V_S\left(g_m + g_{mb} + \dfrac{1}{r_O}\right)$.
- This whole current flows through $Z_S$: $I_{DS} = V_S/Z_S$. Hence $V_S\left(\dfrac{1}{Z_S} + g_m + g_{mb} + \dfrac{1}{r_O}\right) = I_n$, i.e. $V_S = \dfrac{I_nZ_S}{1 + Z_S(g_m + g_{mb} + 1/r_O)}$.
- The current through the drain short equals $I_{DS} = V_S/Z_S$, so $I_{n,out1} = \dfrac{I_n}{Z_S(g_m + g_{mb} + 1/r_O) + 1}$. ∎
- Limits: $Z_S = 0$ gives $I_{n,out1} = I_n$; large $Z_S$ suppresses the noise current (the degeneration returns most of $I_n$ through the device itself).

## Grading notes

+2: correct KCL with all three source-voltage-dependent terms ($g_mV_{GS}$ with $V_{GS} = -V_S$, $g_{mb}V_{BS}$ with $V_{BS} = -V_S$, and $V_{DS}/r_O$ with $V_{DS} = -V_S$), identification of the output current with the current through $Z_S$, and the stated expression. +1: correct proof with a sign convention left implicit or one sign slip that is corrected at the end. 0: proof only for $g_{mb} = 0$, $r_O = \infty$ (giving $I_n/(1+g_mZ_S)$) with the extension asserted. -2 (asserted as fact): a derivation that reaches the formula through compensating errors, wrong terminal voltages (e.g., $V_{DS} = V_S$), or the claim that the output current equals $I_n$ regardless of $Z_S$.
