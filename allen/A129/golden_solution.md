# Golden Solution - A129

## Reference answer

Circuit 4 (p-channel input M2 with the diode-connected n-channel load M1), $|A_v| \approx g_{mP}/(g_{mN}+2\lambda I) \approx 1/\sqrt{2} \approx 0.71$, for normal body-effect factors ($\eta = g_{mbs}/g_m$ of the source-follower loads below about 0.41).

- With equal W/L and current, $g_{mN} = \sqrt{2}\,g_{mP}$ and $g_{dsN} = g_{dsP} = \lambda I \ll g_m$.
- Circuit 1: n-channel input, n-channel load M2 with gate and drain at $V_{DD}$ and source at the output (bulk at ground): $|A_v| \approx g_{mN}/(g_{mN} + g_{mbsN}) = 1/(1+\eta_N)$.
- Circuit 2: p-channel input, p-channel load M1 with gate and drain at ground and source at the output (bulk at $V_{DD}$): $|A_v| \approx 1/(1+\eta_P)$.
- Circuit 3: n-channel input, diode-connected p-channel load (no body effect): $|A_v| \approx g_{mN}/g_{mP} = \sqrt{2} \approx 1.41$.
- Circuit 4: $g_{mP}/g_{mN} = 0.71$ (diode load source at its bulk, no body effect). Circuits 5 and 6 have current-source loads and gains $\gg 1$.
- Circuit 1 or 2 would fall below circuit 4 only if its η exceeded $\sqrt{2}-1 \approx 0.41$. With $\eta = \gamma/(2\sqrt{2|\phi_F|+V_{SB}})$ this needs $\gamma \gtrsim 0.65$–$0.75\ \mathrm{V^{1/2}}$ even at $V_{SB}=0$, which is not a normal value (typical η is 0.1–0.3). The question gives no γ, so the uniqueness of circuit 4 rests on this normal-value assumption (the book's answer states it). The order between circuits 1 and 2 depends on $\eta_N$ versus $\eta_P$ and is not fixed by the givens.

## Grading notes

+2: circuit 4 with the ratio argument ($g_{mP}/g_{mN} = 1/\sqrt{2}$) and recognition that circuits 1 and 2 have gain ≈ 1 (≈ $1/(1+\eta)$ with body effect). Also +2: a conditional answer that gives circuit 4 for normal η and states that circuit 1 or 2 would be lowest only if its η exceeded about 0.41 (or shows by a valid example that the givens alone do not force uniqueness), with the same formulas. An ordering between circuits 1 and 2 is not required; one given with a stated or implied assumption (e.g. comparable η) is not penalized. +1: circuit 4 with partial reasoning (e.g. circuits 1/2 not compared, or the √2 ratio missing). 0: circuit 1 or 2 chosen on an explicitly assumed η above 0.41 with correct formulas, without saying that circuit 4 is lowest for normal values; or circuit 4 selected but circuits 1/2 misread (e.g. their load taken as off or as a current source) — a critical misread that leaves the selection unchanged. −2 (asserted as fact): circuit 3, 5 or 6 chosen; circuit 1 or 2 chosen without a large-η assumption; circuits 1/2 claimed to have a gain far below 0.7 without justification; or a misread topology that changes the selection.
