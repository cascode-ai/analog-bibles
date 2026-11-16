# Golden Solution - A480

## Reference answer

Charge-scaling MSBs with voltage-scaling LSBs, $N = 9$; e.g. $M = 7$ (charge) and $K = 2$ (voltage), which gives INL ≈ 0.28 LSB and DNL ≈ 0.52 LSB. Any split with $K \le 7$ (i.e. $2 \le M \le 8$) also meets the specs; the voltage-MSB/charge-LSB combination reaches only $N = 7$.

Derivation:
- Charge MSB / voltage LSB: DNL $= 0.01 + (2^N - 1)(0.001) \le 1$ → $2^N \le 991$ → $N \le 9$ (N = 9: 0.521 LSB; N = 10: 1.033 LSB fails). INL $= 2^{K-1}(0.01) + 2^{8}(0.001) = 0.256 + 0.01\cdot2^{K-1} \le 1$ → $2^{K-1} \le 74$ → $K \le 7$. With $M = 7$, $K = 2$: INL $= 0.02 + 0.256 = 0.276$ LSB, DNL $= 0.521$ LSB (4 resistors, capacitor spread 64).
- Voltage MSB / charge LSB: INL $\ge 2^{N-1}(0.01)$ → $2^{N-1} \le 100$ → $N \le 7$ (N = 7: 0.64 LSB + $2^{K-1}(0.001)$); DNL $= 2^K(0.011) - 0.001 \le 1$ → $K \le 6$. So at most 7 bits, e.g. $M = 1$…6 with $K = 7 - M$.
- The charge-MSB / voltage-LSB DAC is therefore the better choice: 9 bits.

## Grading notes

+2: charge MSB / voltage LSB, $N = 9$, with a valid split ($K \le 7$, e.g. $M = 7$, $K = 2$) and a check that the voltage-MSB option is limited to about 7 bits. +1: correct type and $N = 9$ with the split not justified or the comparison with the other type missing. 0: correct type but $N$ off by one through a slip (e.g. N = 8 from a loose bound) with otherwise correct reasoning. −2 (asserted as fact): voltage MSB / charge LSB chosen as best, $N \ge 10$, or a split violating the INL bound presented as valid.
