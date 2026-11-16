# Golden Solution - A505

## Reference answer

| Clock | $B_0B_1B_2B_3$ | Guessed $D_0D_1D_2D_3$ | $V_{out}$ | Comparator | Actual $D_0D_1D_2D_3$ |
|---|---|---|---|---|---|
| 1 | 1000 | 1000 | 2.5 V | 1 | 1000 |
| 2 | 0100 | 1100 | 3.75 V | 0 | 1000 |
| 3 | 0010 | 1010 | 3.125 V | 0 | 1000 |
| 4 | 0001 | 1001 | 2.8125 V | 1 | 1001 |

Final word 1001 ($V_{out}$ = 2.8125 V). The comparator output is 1 when the held input (3 V, at the + input) exceeds $V_{out}$ (at the − input); a 1 keeps the guessed bit, a 0 clears it. The shift register's single 1 selects which bit is being guessed in each period.

## Grading notes

+2: all four rows right (shift-register pattern, guessed words, $V_{out}$ values 2.5, 3.75, 3.125, 2.8125 V, comparator outputs 1, 0, 0, 1, actual words) and final word 1001. +1: final word and comparator/actual columns right with one slip in a displayed $V_{out}$ or shift-register entry. 0: correct procedure but one wrong comparison that changes the later rows. −2 (asserted as fact): wrong comparator polarity (bit kept when $v_{in} < V_{out}$), a final word other than 1001, or the DAC weights reversed (D0 as LSB).
