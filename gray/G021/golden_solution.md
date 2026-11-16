# Golden Solution - G021

## Reference answer

Operating point: $\gamma = 0.0946\ \mathrm{V^{1/2}}$, $V_t = 0.646$ V, $V_{ov} = 0.354$ V, active region ($V_{DS} > V_{ov}$), $I_D \approx 121$ µA (127 µA with $1+\lambda V_{DS}$).

Elements: $g_m \approx 0.72$ mA/V (0.686 mA/V without the $1+\lambda V_{DS}$ factor), $g_{mb} \approx 27$ µA/V (≈ 26), $r_o \approx 343$ kΩ (≈ 328 kΩ if $I_D$ includes the CLM factor), $C_{gs} \approx 30.8$ fF, $C_{gd} = 2$ fF, $C_{gb} = 5$ fF, $C_{sb} \approx 12.8$ fF, $C_{db} \approx 8.7$ fF.

Circuit: $C_{gs}$ G–S, $C_{gd}$ G–D, $C_{gb}$ G–B; current sources $g_mv_{gs}$ and $g_{mb}v_{bs}$ from D to S; $r_o$ D–S; $C_{sb}$ S–B; $C_{db}$ D–B.

- $C_{ox} = 4.31$ fF/µm²; $\gamma = \sqrt{2q\epsilon_{Si}N_A}/C_{ox} = 0.0946$; $V_t = 0.6 + 0.0946(\sqrt{1.6} - \sqrt{0.6}) = 0.646$ V.
- $I_D = \tfrac12(194\ \mu)(10)(0.354)^2 = 121.3$ µA; $g_m = k'(W/L)V_{ov}(1+\lambda V_{DS}) = 1.94\ \mathrm{mA/V^2}\times0.354\times1.048 = 0.719$ mA/V.
- $\chi = \gamma/(2\sqrt{2\phi_f+V_{SB}}) = 0.0946/(2\times1.265) = 0.0374$; $g_{mb} = \chi g_m = 26.9$ µA/V.
- $r_o = 1/(\lambda I_D) = 1/(0.024\times121.3\ \mu\mathrm{A}) = 343$ kΩ.
- $C_{gs} = \tfrac23WLC_{ox} + C_{ol} = \tfrac23(10)(1)(4.31) + 2 = 28.8 + 2 = 30.8$ fF; $C_{gd}$ = overlap only (active region) = 2 fF.
- $C_{sb} = 20/\sqrt{1 + 1/0.7} = 12.8$ fF; $V_{DB} = V_{DS} + V_{SB} = 3$ V → $C_{db} = 20/\sqrt{1+3/0.7} = 8.7$ fF.

## Grading notes

+2: correct topology; $V_t$ ≈ 0.646 V; $g_m$ 0.68–0.73 mA/V, $g_{mb}$ 24–28 µA/V, $r_o$ 320–350 kΩ, $C_{gs}$ 30–32 fF, $C_{gd}$ = 2 fF, $C_{gb}$ = 5 fF, $C_{sb}$ 12.3–13.4 fF, $C_{db}$ 8.3–9.1 fF. +1: one element wrong by a slip or $C_{db}$ computed with $V_{DS}$ instead of $V_{DB}$ (≈ 10.1 fF). 0: two or three elements wrong (e.g. overlap omitted and body effect neglected in $V_t$), topology right. -2 (asserted as fact): a typical γ assumed instead of computing it (giving $g_{mb}$ several times too large), triode capacitances ($C_{gd} = WLC_{ox}/2$) used in the active region, $C_{gs} = WLC_{ox}$ without the 2/3, wrong topology, or the device taken as in triode. These −2 cases are for wrong formulas, models or readings. A unit or arithmetic slip in an otherwise correct method (e.g. 80 Å converted to $8\times10^{-6}$ cm, so that γ ≈ 0.95 V^½ and $V_t$ ≈ 1.06 V) that leads the answer to call the device cut off and to drop $g_m$, $g_{mb}$ and $r_o$ is a computational slip: 0 (the junction, overlap and $C_{gb}$ elements right, the slip-affected elements wrong), not −2.
