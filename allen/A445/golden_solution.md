# Golden Solution - A445

## Reference answer

$C_L/C \lesssim 2^{-N}$ (exactly $2/(2^{N+1} - 3)$), i.e. $C_L$ no larger than about half the LSB capacitor $C/2^{N-1}$.

- With $C_L$: $v_{OUT} = D V_{REF}/(1 + x)$, $x = C_L/2C$; the error $D V_{REF}\,x/(1 + x)$ is largest at full scale, $D = 1 - 2^{-N}$.
- Requiring it ≤ 0.5 LSB = $V_{REF}/2^{N+1}$: $x \le 1/(2^{N+1} - 3)$, so $C_L/C \le 2/(2^{N+1} - 3) \approx 1/2^N$ (e.g. N = 10: $C_L \le 0.00098C$).

## Grading notes

+2: $C_L/C \approx 2^{-N}$ (or the exact form) from a 0.5-LSB full-scale criterion. +1: $2^{-(N-1)}$ or $2^{-(N+1)}$ from a clearly stated slightly different criterion (e.g. 1 LSB, or $D$ taken as 1/2). 0: right approach with an algebra slip. −2 (asserted as fact): a limit independent of N, a value much larger than $2^{-N}$ (e.g. $C_L \le C$), or the claim that $C_L$ causes no error.
