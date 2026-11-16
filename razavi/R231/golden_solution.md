# Golden Solution - R231

## Reference answer

$V_P \approx 0.14$ V (0.137 V with body effect; 0.168 V without). Drains of $M_3$ and $M_4$ ≈ 1.84 V; drain of the PMOS reference diode ≈ 1.48 V.

- Currents: $I_T = 5I_{REF} = 500\ \mu$A, so $M_1$, $M_2$ carry 250 μA each. The $2(W/L)_N$ device draws $2I_{REF} = 200\ \mu$A through the PMOS reference diode; $M_5$, $M_6$ copy it (200 μA = 0.4$I_T$). $M_3$, $M_4$ carry $250 - 200 = 50\ \mu$A each.
- $V_P$: overdrive of $M_1$ = $\sqrt{2(250\ \mu)/(134\ \mu\times 20)} = 0.432$ V; $V_P = 1.3 - V_{TH}(V_P) - 0.432$ with $V_{TH} = 0.7 + 0.45(\sqrt{0.9+V_P}-\sqrt{0.9})$ → $V_{TH} = 0.731$ V, $V_P = 0.137$ V.
- PMOS reference diode at 200 μA: $|V_{GS}| = 0.8 + \sqrt{2(200\ \mu)/(38.4\ \mu\times20)} = 0.8 + 0.722 = 1.522$ V → drain at 1.478 V.
- $M_3$, $M_4$ at 50 μA: $|V_{GS}| = 0.8 + \sqrt{2(50\ \mu)/(768\ \mu)} = 0.8 + 0.361 = 1.161$ V → drains at 1.839 V. ($M_1$, $M_2$ are then saturated: drain 1.84 V, gate 1.3 V.)
- Remark: $V_P \approx 0.14$ V is below the overdrive of the $5(W/L)_N$ tail device (0.273 V), so with these sizes the tail would actually sit in the triode region; solving self-consistently gives $V_P \approx 0.165$ V, $I_T \approx 0.42$ mA and only ≈ 11 μA in $M_3$/$M_4$ (drains ≈ 2.03 V). The question's saturation assumption sets this aside.

## Grading notes

+2: $V_P$ between 0.13 and 0.145 V with the body effect included (a value from a wrong body-effect formula, e.g. $\sqrt{|\phi_F| + V_{SB}}$ in place of $\sqrt{2|\phi_F| + V_{SB}}$, counts like neglecting the body effect, +1 at most, even if it falls in this range), $M_3$/$M_4$ drain voltage 1.82–1.86 V (based on 50 μA), and the reference-diode drain 1.46–1.50 V if given; the current split ($I_T$ = 500 μA, 200 μA in $M_5$/$M_6$, 50 μA in $M_3$/$M_4$) must be right. An answer that instead notices the tail is not saturated and gives a consistent triode solution (≈ 0.165 V, ≈ 2.0 V) also earns +2. +1: body effect neglected ($V_P \approx 0.17$ V) with the rest right, or one of the requested voltages missing. 0: current split right but a slip in one voltage beyond tolerance. -2 (asserted as fact): $M_3$/$M_4$ assumed to carry 250 μA or 0.4$I_T$ (drain ≈ 1.1–1.5 V), $I_T$ taken as $I_{REF}$ or $2I_{REF}$, or $V_P$ computed with the wrong sign of $V_{GS}$.
