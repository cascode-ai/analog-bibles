# Golden Solution - A520

## Reference answer

$0.296875V_{REF}$ (word 01001100 = 76, $76V_{REF}/256$).

- The loop computes $V_k = 2V_{k-1} - b_{k-1}V_{REF}$ ($b = +1$ if $V_{k-1} > 0$): residues 0.3 → −0.4, 0.2, −0.6, −0.2, 0.6, 0.2, −0.6, −0.2 ($V_{REF}$ units). The bits read at the eight $\phi_2$ phases (signs of the residues after the input) are 01001100.
- For a positive input these bits are the straight binary code: $V_{analog} = V_{REF}\sum_{k=1}^{8} d_k2^{-k} = V_{REF}(\frac14 + \frac1{32} + \frac1{64}) = 0.296875V_{REF}$, within one LSB ($V_{REF}/256$) below the input 0.3$V_{REF}$.
- The bit timing can also be read so that the first bit is the comparison of $v_{in}^*$ itself (decisions on $V_0 \ldots V_7$), giving the word 10100110; reconstructed with the signed formula $V_{analog} = V_{REF}\sum_{k=1}^{8}(2d_k-1)2^{-k}$ it is $0.30078V_{REF}$, within one LSB above the input. Both readings are consistent with the circuit.

## Grading notes

+2: 0.296875$V_{REF}$ from the word 01001100. Quoting the code-centre value $76.5V_{REF}/256 = 0.2988V_{REF}$ with that convention stated is also +2. Also +2: 0.30078$V_{REF}$ from the word 10100110 reconstructed with the signed formula, when the residues are consistent (the reading in which the first bit is the decision on $v_{in}^*$). +1: right word and method with a slip in the final sum. 0: a word inconsistent with the residue sequence, or a word reconstructed with the formula that does not match its own bit timing. −2 (asserted as fact): a value from a wrong word caused by a misread circuit, or a value off by more than one LSB from the input presented as correct.
