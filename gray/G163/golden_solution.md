# Golden Solution - G163

## Reference answer

Each term's sign follows from which way the gates must be unbalanced to restore $|I_{D2}| = I_{D4}$ when the tail current is fixed. For the p-channel pair, a more negative gate gives more current, and $V_{ov(1-2)} < 0$.

- $V_{t1}-V_{t2}$ (coefficient +1): if $V_{t1} > V_{t2}$ ($|V_{t1}| < |V_{t2}|$), $M_1$ conducts more at equal $V_{GS}$. A perfect mirror needs $|I_{D1}| = |I_{D2}|$, i.e. equal overdrives, so $V_{GS1} - V_{t1} = V_{GS2} - V_{t2}$ and $V_{G1} - V_{G2} = V_{t1} - V_{t2}$: positive for $V_{t1} > V_{t2}$.
- $V_{t(3-4)}\,g_{m3}/g_{m1}$ (+): if $V_{t3} > V_{t4}$, $M_4$ (same $V_{GS}$ as the diode $M_3$) carries more than $M_3$, $I_{D4} = I_{D3} + g_{m3}(V_{t3}-V_{t4})$. Balance needs $|I_{D2}|$ larger than $|I_{D1}|$ by $g_{m3}V_{t(3-4)}$, so $|V_{GS2}| > |V_{GS1}|$, the gate of $M_2$ must be lower and $V_{G1}-V_{G2} = +(g_{m3}/g_{m1})V_{t(3-4)} > 0$. The current error is referred to the input through $g_{m1}$.
- $\frac{V_{ov}}{2}\frac{\Delta(W/L)_{(3-4)}}{(W/L)}$: if $W_3 > W_4$, the mirror copies only the fraction $(W/L)_4/(W/L)_3 < 1$ of $|I_{D1}|$, so balance needs $|I_{D2}| < |I_{D1}|$, i.e. $|V_{GS2}| < |V_{GS1}|$: the gate of $M_2$ must be higher than that of $M_1$, so $V_{G1} - V_{G2} < 0$. The current imbalance $\Delta I/I = \Delta(W/L)/(W/L)$ needs $\Delta|V_{GS}| = (|V_{ov}|/2)\Delta(W/L)/(W/L)$. In the formula $V_{ov(1-2)} < 0$ multiplies a positive $\Delta(W/L)_{(3-4)}$, giving the negative sign.
- $-\frac{V_{ov}}{2}\frac{\Delta(W/L)_{(1-2)}}{(W/L)}$: if $W_1 > W_2$, $M_1$ conducts more at equal $V_{GS}$. Balance needs equal currents, so $|V_{GS1}| < |V_{GS2}|$, the gate of $M_1$ must be higher, and $V_{G1}-V_{G2} > 0$. In the formula, $-(\text{negative }V_{ov})\times(\text{positive})/2 > 0$.
- The overdrive factor appears because a fractional current error $\delta$ needs a $V_{GS}$ change of $\delta\,V_{ov}/2$ in a square-law device ($g_m = 2I/V_{ov}$).

## Grading notes

+2: all four terms explained with the correct direction of the required gate unbalance, consistent with $V_{OS} = V_{G1}-V_{G2}$ and $V_{ov} < 0$, including the explicit argument that $W_3 > W_4$ makes the mirror output smaller so $M_2$ must conduct less, giving a negative offset. +1: three of four terms correct (e.g. the $W_1 > W_2$ term not discussed) or correct conclusions with one sign argument muddled. 0: only the $W_3 > W_4$ case explained correctly. -2 (asserted as fact): claims that $W_3 > W_4$ makes the mirror output larger, that p-channel current increases with $V_{GS}$ becoming less negative, or that the polarity of the offset is arbitrary/undefined.
