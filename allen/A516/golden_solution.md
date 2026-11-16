# Golden Solution - A516

## Reference answer

$|\varepsilon| = 0.0417$ (for $\varepsilon = +0.0417$, a first-stage gain of 2.083, the 4th bit $b_3$ becomes wrong). For negative $\varepsilon$ an error needs $\varepsilon = -0.0625$.

- Ideal node voltages (units of $V_{REF}$): $v(0) = 0.6$, $v(1) = 0.2$, $v(2) = -0.6$, $v(3) = -0.2$, $v(4) = 0.6$ → bits 1 1 0 0 1.
- With the gain error: $v(1) = 1.2(1 + \varepsilon) - 1 = 0.2 + 1.2\varepsilon$, $v(2) = -0.6 + 2.4\varepsilon$, $v(3) = -0.2 + 4.8\varepsilon$, $v(4) = 0.6 + 9.6\varepsilon$.
- Sign changes: $v(3)$ at $\varepsilon = 0.2/4.8 = +0.0417$; $v(4)$ at $-0.0625$; $v(1)$ at $-0.167$; $v(2)$ at $+0.25$. The smallest magnitude is 0.0417.

## Grading notes

+2: $|\varepsilon| \approx 0.042$ (±0.001), from the error growing by 2 per stage and $v(3) = -0.2V_{REF}$ being the critical node. Giving the sign (+) is a plus, not required. +1: right value with incomplete reasoning. 0: right method with one slip (e.g., the critical node right but the gain factor 4.8 miscounted), or a value for the wrong sign only (0.0625) with the rest sound. −2 (asserted as fact): a value from an error model that ignores the doubling in later stages, or from a misread figure (e.g., the gain error placed in the last stage).
