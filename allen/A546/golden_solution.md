# Golden Solution - A546

## Reference answer

$OSR_{min} \approx 48$ (in practice the next power of two, 64).

- $B = 1$: $\Delta = V_{REF}$; $L = 3$: $\pi^3/\sqrt7 = 11.72$.
- Condition: $\dfrac{V_{REF}}{\sqrt{12}}(11.72)\,OSR^{-3.5} \le \dfrac{V_{REF}}{2^{16}\sqrt{12}}$, so $OSR^{3.5} \ge 2^{16}\times 11.72 = 7.68\times10^5$.
- $OSR \ge (7.68\times10^5)^{1/3.5} = 48.0$.

## Grading notes

+2: OSR ≈ 48 (±3 %), from the given formula with Δ = V_REF and the stated criterion; mentioning 64 as the practical power-of-two choice is fine. +1: correct method with a small numerical slip (within ±10 %). 0: correct formula use but a different criterion than stated (e.g., $n_o \le V_{REF}/2^{16}$, giving ≈ 34), with the reasoning shown. −2 (asserted as fact): wrong exponent (e.g., using $L$ instead of $L + 0.5$ in a way that changes the result substantially), Δ taken as $V_{REF}/2$ without justification, or OSR = fs/fB confusion leading to a factor-of-2 error.
