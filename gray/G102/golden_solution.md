# Golden Solution - G102

## Reference answer

Positive (≈ +0.1 mV/°C).

- With the polarity shown, the collector of $Q_2$ sits $V_{OS}$ below the collector of $Q_1$, which gives $V_{OUT} = V_{BE1} + (R_2/R_3)\Delta V_{BE} - V_{OS}$: a positive offset subtracts a temperature-independent 30 mV from the output.
- To bring $V_{OUT}$ back to the target, the trim increases $R_2$, i.e. increases the gain applied to the PTAT term $\Delta V_{BE}$ by enough to supply about 30 mV more PTAT voltage.
- The zero-slope combination $V_{BE1}$ + PTAT would equal the target minus $V_{OS}$; with the extra PTAT voltage the output is "over-compensated": the PTAT term's positive slope exceeds the $V_{BE}$'s negative slope by ≈ $V_{OS}/T$ ≈ +0.1 mV/°C (the zero-TC point moves well above 25 °C). (The current-ratio change caused by the offset makes $\Delta V_{BE}$ slightly super-PTAT and adds to the positive slope.)

## Grading notes

+2: "positive" with the mechanism: the positive offset lowers the output by a temperature-independent amount, and the trim raises the PTAT gain, so the PTAT slope dominates. +1: positive with a mostly right but incomplete explanation (e.g. "gain too large" without relating it to the offset polarity). 0: positive with no valid reasoning, or a correct mechanism that ends without a clear sign. -2 (asserted as fact): negative, or "zero because the output was trimmed to the target".
