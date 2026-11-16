# Golden Solution - A442

## Reference answer

ΔC/C ≤ 1/2¹¹ ≈ 0.049 %.

- If the capacitors have a tolerance ±ΔC/C, the MSB capacitor alone can produce an output error of up to $2^{N-1}(\Delta C/C)$ LSB (worst-case INL). Keeping it within ±0.5 LSB: $2^{N-1}\Delta C/C \le 1/2$ → $\Delta C/C \le 2^{-N} = 1/2048 = 0.0488$ %.
- If the DNL at the MSB transition, $(2^N - 1)\Delta C/C$, must also stay within ±0.5 LSB, the requirement tightens to ≈ 0.024 %.

## Grading notes

+2: ≈ 0.049 % with the 0.5-LSB INL criterion, or ≈ 0.024 % with an explicitly stated 0.5-LSB DNL criterion (also accepted: ≈ 0.049 % from $(2^N - 1)\Delta C/C \le 1$, i.e. guaranteed monotonicity). +1: a correct value with weak or no justification. 0: correct method with an arithmetic slip. −2 (asserted as fact): 0.1 % or looser, or a requirement from the wrong number of bits (e.g. $2^{-10}$ without a matching criterion).
