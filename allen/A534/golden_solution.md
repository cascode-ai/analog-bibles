# Golden Solution - A534

## Reference answer

+INL = +3 LSB, −INL = 0 LSB; +DNL = +1 LSB, −DNL = 0 LSB; codes 0011, 0111 and 1011 are missing; the converter is monotonic.

Characteristic (input in LSB = $V_{REF}/16$):
- Stage 1 switches at 3, 6 and 9 LSB and its DAC subtracts exactly $3m$ LSB (both use $0.75V_{REF}$), so the residue $4[v_{in}(1) - 3m]$ LSB is correct within each shortened 3-LSB subrange.
- Stage 2 (ideal) switches at $v_{in}(1) = 3m + k$ LSB, so each subrange yields only codes $4m, 4m+1, 4m+2$ (1 LSB each); code $4m + 3$ never occurs except in the last subrange, which extends to full scale.
- Staircase: codes 0, 1, 2 on 0–1, 1–2, 2–3 LSB; 4, 5, 6 on 3–4, 4–5, 5–6; 8, 9, 10 on 6–7, 7–8, 8–9; 12, 13, 14 on 9–10, 10–11, 11–12; 15 from 12 to 16 LSB (4 LSB wide).

INL and DNL:
- The actual code exceeds the ideal by +1 on 3–6 LSB, +2 on 6–9 LSB, +3 on 9–13 LSB, then +2, +1, 0 on 13–14, 14–15, 15–16 LSB. It is never below the ideal: +INL = +3 LSB, −INL = 0.
- Steps 2 → 4, 6 → 8 and 10 → 12 are 2 LSB (DNL = +1); all others are 1 LSB (DNL = 0).
- All steps are upward: monotonic.

## Grading notes

+2: the staircase above (three 1-LSB codes per 3-LSB subrange, code 15 stretching from 12 LSB to full scale), +INL = +3, −INL = 0, +DNL = +1, −DNL = 0, missing codes 0011/0111/1011, monotonic. +1: conclusions right with an incomplete plot, or −INL given as −1 LSB because a half-LSB-offset ideal was used instead of the stated one, or −DNL given both as −1 LSB (absent transitions at 13, 14 and 15 LSB counted as zero-height steps) and as 0 LSB (only steps of the actual characteristic), each with its condition, without committing to 0. 0: correct method with a slip that changes one of the INL/DNL values; or −DNL = −1 LSB asserted as the answer, from treating the absent transitions at 13, 14 and 15 LSB as zero-height steps, with everything else right (this contradicts the stated definition, which counts only steps of the actual characteristic). −2 (asserted as fact): nonmonotonic, no missing codes, or the stage-1 DAC treated as using $V_{REF}$ (that is the companion case with a different answer).
