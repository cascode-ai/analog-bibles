# Golden Solution - A431

## Reference answer

$R_1 = 2R_0$, $R_2 = 4R_0$, $R_3 = 8R_0$, $R_4 = 16R_0$; an offset $|V_{OS}| \ge V_{REF}/62 \approx 0.0161V_{REF}$ causes an error.

- With $V_{OS}$ the inverting input sits at $V_{OS}$ and $v_{out} = V_{OS}(1 + D) - D\,V_{REF}$, $D = \sum b_i/2^{i+1}$: the offset is multiplied by the code-dependent noise gain $1 + R_0\sum b_i/R_{i+1} = 1 + D$.
- The error is largest at 1111 ($D = 15/16$): $31V_{OS}/16 \le V_{REF}/32$ → $V_{OS} \le V_{REF}/62 = 0.0161V_{REF}$.

## Grading notes

+2: the binary design and $V_{OS}/V_{REF}$ ≈ 0.016 (±3 %) from the worst-case noise gain 31/16. +1: correct design and value with a sloppy justification (e.g. a constant noise gain of 31/16 assumed, which gives the same limit). 0: correct design but $V_{OS}$ = $V_{REF}$/32 ≈ 0.031 (noise gain ignored). −2 (asserted as fact): a wrong design (e.g. $R_1 = R_0$, or weights reversed), or a limit larger than $V_{REF}/32$.
