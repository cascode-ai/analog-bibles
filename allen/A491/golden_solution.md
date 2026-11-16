# Golden Solution - A491

## Reference answer

$-0.349 \le \Delta A \le +0.163$ (gain $A$ from about 0.151 to 0.663); for a symmetric tolerance $|\Delta A| \le 0.16$.

Derivation:
- Bits LSB first: +1, −1, −1, +1, +1. With gain $A$: $v_1 = 1$, $v_2 = -1 + A$, $v_3 = -1 + Av_2$, $v_4 = 1 + Av_3$, $v_5 = 1 + Av_4$, so $v_{OUT}/V_{REF} = f(A) = 1 + A - A^2 - A^3 + A^4$ ($f(0.5) = 19/16$).
- Output levels of the 5-bit converter are $\sum \pm 2^{-i}V_{REF}$, spaced $2\cdot2^{-4}V_{REF} = V_{REF}/8$; ±½ LSB = ±$V_{REF}/16$, so $1.125 \le f(A) \le 1.25$.
- $f$ has a maximum of 1.202 at $A \approx 0.39$, so the upper limit is never reached; $f(A) = 1.125$ at $A = 0.151$ and $A = 0.663$. Hence $0.151 \le A \le 0.663$, i.e. $\Delta A$ from −0.349 to +0.163.

## Grading notes

+2: the correct $f(A)$ (or equivalent iteration), the ±$V_{REF}/16$ tolerance from the $V_{REF}/8$ level spacing, and the limits 0.15–0.66 for $A$ (±0.01), i.e. $\Delta A$ ≈ −0.35/+0.16. +1: correct method with a numerical slip, or only the positive limit (+0.16) found. 0: correct iteration but tolerance taken as ±$V_{REF}/32$ (giving A ≈ 0.205–0.594), or a linearized estimate far from the true bounds, with sound reasoning otherwise. −2 (asserted as fact): bits processed MSB first, ±1 mapping wrong, or a limit derived from a single-bit argument (e.g. ±½ LSB applied to the gain directly, giving $\Delta A = \pm1/64$).
