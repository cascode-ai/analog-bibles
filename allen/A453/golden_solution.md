# Golden Solution - A453

## Reference answer

Yes.

The output is set by binary-weighted capacitors, so at major-carry transitions (worst at the MSB transition 0111…1 → 1000…0) one large capacitor replaces the sum of all the smaller ones. The step there is $[2^{N-1}C_{MSB} - \sum_{\text{others}}]V_{REF}/C_X$; with a relative mismatch ΔC/C (MSB capacitor low, the others high) the DNL is $-(2^N - 1)\Delta C/C$ LSB. If this is more negative than −1 LSB, i.e. $(2^N - 1)\Delta C/C > 1$, the step is negative and the output decreases: the DAC is nonmonotonic. Unlike a resistor-string or thermometer-coded DAC, monotonicity is not guaranteed by the structure.

## Grading notes

+2: yes, with the mechanism (capacitor mismatch at the MSB/major-carry transition making the step negative when the DNL is below −1 LSB). +1: yes with a vaguer reason (mismatch can cause it) and no transition or condition. 0: an uncommitted answer that identifies mismatch as the issue. −2 (asserted as fact): no, it is always monotonic.
