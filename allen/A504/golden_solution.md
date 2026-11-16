# Golden Solution - A504

## Reference answer

10110011 (decimal 179, i.e. $179V_{REF}/256 = 0.6992V_{REF}$).

Trial sequence (DAC output in units of $V_{REF}$; keep if $0.7 >$ trial):
1. 1000 0000 = 0.5 → keep (1)
2. 1100 0000 = 0.75 → clear (0)
3. 1010 0000 = 0.625 → keep (1)
4. 1011 0000 = 0.6875 → keep (1)
5. 1011 1000 = 0.71875 → clear (0)
6. 1011 0100 = 0.703125 → clear (0)
7. 1011 0010 = 0.6953125 → keep (1)
8. 1011 0011 = 0.69921875 → keep (1)

Check: $0.7\times256 = 179.2$ → 179 = 10110011.

## Grading notes

+2: 10110011, with a trial sequence or the equivalent truncation of $0.7\times256 = 179.2$. +1: correct word with no justification, or a correct trial sequence with a transcription slip in one displayed intermediate value. 0: correct procedure with one wrong decision leading to a word that differs in the last bit or two. −2 (asserted as fact): 10110100 (rounding up to 180) or another word from a wrong decision rule (e.g., bits kept when the input is below the DAC output).
