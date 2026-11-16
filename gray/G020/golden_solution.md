# Golden Solution - G020

## Reference answer

The body effect is weak here: $\gamma \approx 0.095\ \mathrm{V^{1/2}}$, so $V_t$ = 0.600, 0.626 and 0.646 V for $V_{SB}$ = 0, 0.5 and 1 V. The three curves are nearly identical square-law parabolas, zero below $V_t$ and shifted right by only 26 mV and 46 mV.

- $C_{ox} = \epsilon_{ox}/t_{ox} = 3.45\times10^{-13}/8\times10^{-7} = 4.31\times10^{-7}$ F/cm² (4.31 fF/µm²); $\gamma = \sqrt{2q\epsilon_{Si}N_A}/C_{ox} = 4.08\times10^{-8}/4.31\times10^{-7} = 0.0946\ \mathrm{V^{1/2}}$.
- $V_t = V_{t0} + \gamma(\sqrt{2\phi_f + V_{SB}} - \sqrt{2\phi_f})$: $0.6 + 0.0946(1.049 - 0.775) = 0.626$ V; $0.6 + 0.0946(1.265 - 0.775) = 0.646$ V.
- With $V_{DS} = 2$ V and $V_{ov} \le 1.4$ V the device is in the active region over the whole sweep: $I_D = \tfrac12k'(W/L)(V_{GS}-V_t)^2(1+2\lambda) = 1.017\ \mathrm{mA/V^2}\,(V_{GS}-V_t)^2$.
- Values ($V_{SB}$ = 0 / 0.5 / 1 V): at $V_{GS}$ = 1 V: 0.163 / 0.142 / 0.127 mA; 1.5 V: 0.823 / 0.777 / 0.741 mA; 2 V: 1.99 / 1.92 / 1.86 mA (without the $1+\lambda V_{DS}$ factor: 1.90 / 1.83 / 1.78 mA).

## Grading notes

+2: γ computed from $N_A$ and $t_{ox}$ (0.09–0.10 V^½), threshold shifts ≈ 26 mV and ≈ 46 mV (±5 mV), active region throughout, and $I_D(2\ \mathrm{V})$ ≈ 1.86–1.99 mA for $V_{SB} = 0$…1 V within ±5% (with or without the $1+\lambda V_{DS}$ factor). +1: right curves with one slip, or values given only at a few points with the small spacing correctly described. 0: body effect computed with a slip that changes the shifts noticeably (e.g. by a factor ≈ 2), rest sound. -2 (asserted as fact): a typical γ (e.g. 0.4–0.5 V^½) assumed instead of computing it, giving shifts of 0.1–0.25 V; threshold decreasing with $V_{SB}$; or the device treated as in triode.
