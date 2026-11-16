# Golden Solution - A497

## Reference answer

Not monotonic. At $v_{in} = 9V_{REF}/16$ (4.5/8 of full scale) the output code drops from 101 to 100 (a −1 LSB vertical step, DNL = −2 LSB), so inputs between $9V_{REF}/16$ and $12V_{REF}/16$ give a smaller code than inputs just below $9V_{REF}/16$. (Code 010 is also missing, at the +2 LSB step at $3V_{REF}/16$; a missing code alone does not make an ADC nonmonotonic.)

## Grading notes

+2: "not monotonic" with the downward step identified (code 101 → 100 at about 4.5/8 of $V_{REF}$). +1: correct verdict with only a vague reason ("the code decreases somewhere") or the location slightly misplaced. 0: correct verdict justified only by the missing code 010 (wrong reason). −2 (asserted as fact): "monotonic".
