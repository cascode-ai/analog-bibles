# Golden Solution - A479

## Reference answer

$INL = INL(R) + INL(C) = \left(2^{M-1}\frac{\Delta R}{R} + 2^{N-1}\frac{\Delta C}{C}\right)$ LSBs
$DNL = DNL(R) + DNL(C) = \left(\frac{\Delta R}{R} + (2^{N} - 1)\frac{\Delta C}{C}\right) \approx \frac{\Delta R}{R} + 2^N\frac{\Delta C}{C}$ LSBs

Derivation:
- Capacitor array, bits $0 \ldots K-1$: largest weighting factor $2^{N-1}$ → $INL(C) = 2^{N-1}\Delta C/C$. Worst step at the MSB transition (largest capacitor high, all others low): $(2^N - 1)\Delta C/C$ (or $2^{N-1}\Delta C/C$ counting only the largest capacitor).
- Resistor string, bits $K \ldots N-1$: largest weighting factor $2^{N-K-1} = 2^{M-1}$ → $INL(R) = 2^{M-1}\Delta R/R$. Each resistor is one LSB of the whole DAC (weight $2^0$) → $DNL(R) = \Delta R/R$.
- Both INL and DNL are now dominated by the capacitors: this arrangement needs very accurate capacitors but tolerates loose resistors.

## Grading notes

+2: INL $= 2^{M-1}\Delta R/R + 2^{N-1}\Delta C/C$ and DNL $= \Delta R/R + (2^N - 1)\Delta C/C$ (or ≈ $2^N\Delta C/C$); a capacitor DNL term of $2^{N-1}\Delta C/C$ is accepted when the answer explicitly applies the stated rule to the largest capacitor alone. +1: one term wrong by a factor of 2 or with $M$/$K$ interchanged. 0: two terms wrong, or results left in subDAC LSBs. −2 (asserted as fact): INL $= 2^{N-1}(\Delta R/R + \Delta C/C)$ (resistor term overstated by $2^K$), resistor DNL given as $2^K\Delta R/R$ or $2^M\Delta R/R$, or capacitor terms in $K$-bit LSBs only (e.g. $2^{K-1}\Delta C/C$ for the INL).
