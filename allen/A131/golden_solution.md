# Golden Solution - A131

## Reference answer

Circuit 1: $R_{out} \approx 1/(g_{mN} + g_{mbsN} + 2\lambda I)$, the largest conductance looking into the output, for normal body-effect factors.

With $v_{IN}$ and the bias voltages at ac ground, $g_{mN} = \sqrt{2}\,g_{mP}$, $g_{ds} = \lambda I$, $\eta = g_{mbs}/g_m$:
- Circuit 1: n-channel load M2 with gate and drain at $V_{DD}$, source at the output, bulk at ground: $G_1 = g_{mN}(1+\eta_N) + 2g_{ds}$.
- Circuit 4: diode-connected n-channel load (source at its bulk): $G_4 = g_{mN} + 2g_{ds}$, slightly below $G_1$. Without body effect circuits 1 and 4 would tie.
- Circuit 2: p-channel load M1 with gate and drain at ground, source at the output, bulk at $V_{DD}$: $G_2 = g_{mP}(1+\eta_P) + 2g_{ds}$.
- Circuit 3: diode-connected p-channel load: $G_3 = g_{mP} + 2g_{ds}$. Circuits 5 and 6: $G = 2g_{ds}$, high resistance.
- Circuit 2 would beat circuit 1 only if $1+\eta_P > \sqrt{2}(1+\eta_N)$, i.e. $\eta_P > 0.41 + 1.41\,\eta_N$, which needs an abnormally large p-channel γ (typical η is 0.1–0.3). The question gives no γ, so circuit 1 is the answer under normal values (as in the book).

## Grading notes

+2: circuit 1, with the reason (n-channel load, $g_m + g_{mbs}$ seen at its source, larger than the $g_{mN}$ of circuit 4's diode). Also +2: circuit 1 for normal or comparable body-effect factors, with the condition under which circuit 2 would win ($\eta_P > \sqrt{2}(1+\eta_N) - 1$) or a valid example showing the givens alone do not force uniqueness. +1: circuits 1 and 4 named as a tie because the body effect is neglected, with correct reasoning otherwise. 0: circuit 4 alone with correct $1/g_{mN}$ reasoning but missing the body-effect advantage of circuit 1; circuit 2 chosen on an explicitly assumed, quantified large $\eta_P$ without saying that circuit 1 wins for normal values; or circuit 1 selected but another circuit's load misread (e.g. circuit 2's source-connected load treated as a current source with only $g_{ds}$) — a critical misread that leaves the selection unchanged. −2 (asserted as fact): circuits 3, 5 or 6 named, circuit 2 named without a large-$\eta_P$ condition, the n-channel load of circuit 1 treated as a current source, or a misread that changes the selection.
