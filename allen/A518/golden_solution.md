# Golden Solution - A518

## Reference answer

Word 11011 (equivalent $27/32\,V_{REF} = 0.84375V_{REF}$); with an ideal gain the word is 11001 ($0.78125V_{REF}$), so the error is in the 4th bit.

Iterations (units of $V_{REF}$), gain 2.1:
1. $V_a = 2.1(0.8) = 1.680$ → 1, $V_b = 0.680$
2. $V_a = 1.428$ → 1, $V_b = 0.428$
3. $V_a = 0.899$ → 0, $V_b = 0.899$
4. $V_a = 1.887$ → 1, $V_b = 0.887$ (ideal: $V_a = 0.8$ → 0)
5. $V_a = 1.864$ → 1, $V_b = 0.864$

Ideal gain 2: $V_a$ = 1.6, 1.2, 0.4, 0.8, 1.6 and $V_b$ = 0.6, 0.2, 0.4, 0.8, 0.6. The sketch shows $V_a$ and $V_b$ as staircases, one level per period $T$, with the values above. The 5 % gain error makes the third-iteration $V_b$ (0.899 instead of 0.4) large enough for the 4th $V_a$ to exceed $V_{REF}$.

## Grading notes

+2: word 11011, the 4th bit identified as the error, $V_a$/$V_b$ values within ±0.005$V_{REF}$ for all five iterations, and the analog equivalent 0.84375$V_{REF}$. +1: word and error bit right with one or two displayed values slightly off, or the analog equivalent missing. 0: correct method with an arithmetic slip that changes the 5th bit, or the values right but the error bit misidentified. −2 (asserted as fact): the ideal word 11001 presented as the result, a different comparison rule (e.g., comparing $V_b$ with $V_{REF}/2$ in a way that changes bits), or the gain error applied only to the first iteration.
