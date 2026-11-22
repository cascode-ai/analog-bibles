# Golden Solution - alsim-04-3-05

## Reference answer

Hand analysis: $V_{OUT}(\min) = 2V_{ON} \approx 0.43$ V (≈ 0.39 V at the edge of M2's saturation once its body effect is included); $r_{out} \approx g_{m2}r_{ds1}r_{ds2} \approx 0.59$ GΩ (≈ 0.72 GΩ with $g_{mbs2}$). The simulated $i_{OUT}$ comes out below 10 µA because M1 is at or slightly below the edge of saturation.

- $V_{ON}$ (4/1, 10 µA) = $\sqrt{2\times10/(110\times4)}$ = 0.213 V; M4 (1/1) has overdrive 0.426 V = $2V_{ON}$. Gate of M1: 0.913 V; gate of M2: $V_T + 2V_{ON}$ = 1.126 V.
- Without body effect: $V_{DS1} = V_{G2} - V_{GS2} = V_{ON}$, so M1 sits exactly at the edge of saturation and $V_{OUT}(\min) = 2V_{ON}$ = 0.426 V.
- With body effect on M2 ($V_{SB2} = V_{DS1}$ ≈ 0.17 V raises $V_{T2}$ to ≈ 0.74 V): $V_{DS1}$ ≈ 0.17–0.18 V < $V_{ON}$ = 0.213 V, so M1 is pushed slightly into the triode region. M2 reaches the edge of saturation at $v_{OUT} = V_{G2} - V_{T2}$ ≈ 0.39 V. A self-consistent LEVEL-1 solution gives $i_{OUT}$ ≈ 9.5 µA.
- $g_{m2} = \sqrt{2\times110\ \mu\times4\times10\ \mu} = 93.8\ \mu\mathrm{A/V}$, $r_{ds}$ = 2.5 MΩ: $r_{out} \approx 5\ \mathrm{M} + 586\ \mathrm{M} \approx 0.59$ GΩ (0.72 GΩ with $g_{mbs}$) if M1 were saturated; with M1 in triode its $r_{ds1}$ and hence $r_{out}$ are lower.
- Expected LEVEL-3 simulation: $i_{OUT}$ noticeably below 10 µA (≈ 7.6 µA at $v_{OUT}$ = 2 V for this card, mainly through the ETA term, which makes M1's threshold ≈ 20 mV higher than M3's), because M3 (at $V_{DS} = V_{GS}$ ≈ 0.9 V) and M1 (at $V_{DS}$ ≈ 0.2 V, near triode) do not see the same terminal voltages, and the LEVEL-3 model adds short-channel threshold and saturation-voltage effects. The $i_{OUT}$–$v_{OUT}$ curve flattens above ≈ 0.4–0.5 V.

## Grading notes

A correct answer gives $V_{OUT}(\min)$ ≈ 0.39–0.43 V ($2V_{ON}$), a hand $r_{out}$ of 0.55–0.75 GΩ, and a simulated $i_{OUT}$ below 10 µA (about 7–9.8 µA), explained by the unequal $V_{DS}$ of M3 and M1 (M1 at the edge of or in triode). $V_{OUT}(\min) = V_T + 2V_{ON}$ (1.13 V, the standard cascode value), $r_{out} = r_{ds}$, or a simulated current reported well above 10 µA without explanation are wrong.
