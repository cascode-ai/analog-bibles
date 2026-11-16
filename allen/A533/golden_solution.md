# Golden Solution - A533

## Reference answer

+INL = +3 LSB, −INL = 0 LSB; +DNL = +2 LSB, −DNL = 0 LSB; codes 0111, 1010 and 1011 are missing; the converter is monotonic. ($V_{REF4}$ affects only the analog $v_{out}(2)$, not the digital word.)

Characteristic (input in LSB = $V_{REF}/16$, code in decimal):
- Stage 1 switches at $0.75V_{REF}/4$ = 3 LSB, 6 LSB and 9 LSB, but its DAC subtracts $mV_{REF}/4$ = 4m LSB.
- The residue $4[v_{in}(1) - 4m\ \mathrm{LSB}]$ is compared with $0.75V_{REF}\cdot k/4$, so stage 2 switches at $v_{in}(1) = 4m + 0.75k$ LSB. Where the residue is negative the stage-2 code is 00.
- Resulting staircase:

| input (LSB) | 0–0.75 | 0.75–1.5 | 1.5–2.25 | 2.25–3 | 3–4.75 | 4.75–5.5 | 5.5–6 | 6–8.75 | 8.75–9 | 9–12.75 | 12.75–13.5 | 13.5–14.25 | 14.25–16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| code | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 12 | 13 | 14 | 15 |

INL and DNL:
- All transitions occur at or before their ideal positions, so the actual code is never below the ideal one: −INL = 0. The largest excess is on 9–10 LSB (actual 12, ideal 9): +INL = +3 LSB (also +2 LSB on 6–7 and 10–11 LSB).
- Vertical steps: 6 → 8 (2 LSB, DNL = +1) and 9 → 12 (3 LSB, DNL = +2); all other steps are 1 LSB (DNL = 0).
- Every step is upward, so the converter is monotonic despite the missing codes 7, 10 and 11.

## Grading notes

+2: correct staircase (transitions at 0.75, 1.5, 2.25, 3, 4.75, 5.5, 6, 8.75, 9, 12.75, 13.5, 14.25 LSB, or an equivalent plot/table), +INL = +3 LSB, −INL = 0, +DNL = +2 LSB, −DNL = 0, missing codes 0111/1010/1011, monotonic, with the effect of the low stage-1 thresholds against the full-scale DAC explained. Stating that $V_{REF4}$ is irrelevant to the digital output is a plus. +1: all conclusions right but the plot only partly specified, or −INL given as −1 LSB because a half-LSB-offset ideal characteristic was used instead of the stated one. 0: correct method with one stage modelled wrongly in a way that changes some values but not the monotonicity conclusion. −2 (asserted as fact): claims the converter is nonmonotonic, claims there are no missing codes, or treats $V_{REF4}$ as changing the digital codes.
