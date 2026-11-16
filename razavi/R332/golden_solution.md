# Golden Solution - R332

## Reference answer

$$\overline{V_{n,in}^2} = \frac{1}{(g_{m1}+g_{m2})^2}\left[\frac{g_{m1}^2K_N}{C_{ox}(WL)_1} + \frac{g_{m2}^2K_P}{C_{ox}(WL)_2}\right]\frac{1}{f}$$

- The gate-referred sources $V_{n1}$, $V_{n2}$ produce output short-circuit currents $g_{m1}V_{n1}$ and $g_{m2}V_{n2}$ (uncorrelated, so powers add).
- The input drives both gates, so the signal short-circuit current is $(g_{m1}+g_{m2})V_{in}$. Both noise and signal see the same output resistance $r_{O1}\|r_{O2}$, which cancels when referring to the input.
- Dividing gives the result; with $g_{m1} = g_{m2}$ it becomes $\tfrac14\left[\dfrac{K_N}{C_{ox}(WL)_1} + \dfrac{K_P}{C_{ox}(WL)_2}\right]\dfrac1f$.

## Grading notes

+2: expression equivalent to the reference, with the total transconductance $g_{m1}+g_{m2}$ as the gain. +1: correct structure with a minor slip (e.g., a missing $C_{ox}$ or $1/f$ in one term). 0: correct output noise but referred with an unclear or partly wrong gain. -2 (asserted as fact): $M_2$ treated as a current-source load (gain $g_{m1}$ only, giving $V_{n1}^2 + (g_{m2}/g_{m1})^2V_{n2}^2$), the PMOS term using $K_N$ without comment, or flicker noise said to be independent of device area.
