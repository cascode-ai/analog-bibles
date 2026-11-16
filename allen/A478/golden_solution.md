# Golden Solution - A478

## Reference answer

$INL = INL(R) + INL(C) = \left(2^{N-1}\frac{\Delta R}{R} + 2^{K-1}\frac{\Delta C}{C}\right)$ LSBs
$DNL = DNL(R) + DNL(C) = \left(2^{K}\frac{\Delta R}{R} + (2^{K} - 1)\frac{\Delta C}{C}\right) \approx 2^K\left(\frac{\Delta R}{R} + \frac{\Delta C}{C}\right)$ LSBs

Derivation:
- Resistor string, bits $0 \ldots M-1$: its largest weighting factor is that of the MSB, $2^{N-1}$ → $INL(R) = 2^{N-1}\Delta R/R$ (equivalently $2^{M-1}\Delta R/R$ in $M$-bit LSBs times $2^N/2^M = 2^K$). Each resistor sets one step of the $M$-bit DAC, whose weight is that of bit $M-1$: $2^{N-M} = 2^K$ → $DNL(R) = 2^K\Delta R/R$.
- Capacitor array, bits $M \ldots N-1$: largest weighting factor $2^{N-M-1} = 2^{K-1}$ → $INL(C) = 2^{K-1}\Delta C/C$. The largest capacitor (weight $2^{K-1}$) gives the worst step at its major transition; with that capacitor high and all the others low the step error is $(2^{K-1} + 2^{K-1} - 1)\Delta C/C = (2^K - 1)\Delta C/C$ (counting only the largest capacitor's own error would give $2^{K-1}\Delta C/C$).

## Grading notes

+2: INL $= 2^{N-1}\Delta R/R + 2^{K-1}\Delta C/C$ and DNL $= 2^K\Delta R/R + (2^K - 1)\Delta C/C$ (or ≈ $2^K\Delta C/C$); a capacitor DNL term of $2^{K-1}\Delta C/C$ is also accepted when the answer explicitly applies the stated rule to the largest capacitor alone. +1: one of the four terms wrong by a factor of 2 or with $M$ and $K$ interchanged, others correct. 0: two terms wrong, or terms given in subDAC LSBs without converting to $N$-bit LSBs. −2 (asserted as fact): resistor INL given as $2^{M-1}\Delta R/R$ in $N$-bit LSBs, or the INL dominated by the capacitors (e.g. $2^{N-1}\Delta C/C$) for this MSB-voltage/LSB-charge arrangement.
