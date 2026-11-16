# Golden Solution - G164

## Reference answer

The same expression holds with the signs explained below. Now $V_{ov(1-2)} > 0$, so the offset from $W_3 > W_4$ is positive (opposite to the p-input/n-mirror case).

- $V_{t1}-V_{t2}$ (+): if $V_{t1} > V_{t2}$, $M_1$ conducts less at equal $V_{GS}$. Equal currents need $V_{GS1} - V_{GS2} = V_{t1} - V_{t2}$, so the gate of $M_1$ must be higher: $V_{OS} > 0$.
- $V_{t(3-4)}\,g_{m3}/g_{m1}$ (+): a p-channel device conducts more when its threshold is less negative. If $V_{t3} > V_{t4}$, the diode $M_3$ sets a $V_{SG}$ at which $M_4$ (more negative threshold) carries less: $|I_{D4}| = |I_{D3}| - g_{m3}(V_{t3}-V_{t4})$. Balance needs $I_{D2} < I_{D1}$, so $V_{GS2} < V_{GS1}$ and $V_{G1} > V_{G2}$: $V_{OS} = +(g_{m3}/g_{m1})V_{t(3-4)} > 0$.
- $W_3 > W_4$: the mirror copies only $(W/L)_4/(W/L)_3 < 1$ of $I_{D1}$, so $I_{D2}$ must be smaller than $I_{D1}$: $V_{GS2} < V_{GS1}$ and $V_{G1}-V_{G2} = +\frac{V_{ov}}{2}\frac{\Delta(W/L)_{(3-4)}}{(W/L)} > 0$, since $V_{ov} > 0$.
- $W_1 > W_2$: $M_1$ conducts more at equal $V_{GS}$, so for equal currents $V_{GS1} < V_{GS2}$ and $V_{G1}-V_{G2} = -\frac{V_{ov}}{2}\frac{\Delta(W/L)_{(1-2)}}{(W/L)} < 0$.
- The threshold terms keep the same signs as in the p-input case. The two $W/L$ terms flip sign because the input overdrive is now positive.

## Grading notes

+2: all four terms explained with correct directions and the conclusion that $W_3 > W_4$ now gives a positive offset (because $V_{ov} > 0$ for the n-channel pair). +1: correct conclusion for $W_3 > W_4$ and most terms, one term's argument muddled. 0: only the $W_3 > W_4$ sign stated with a partial argument. -2 (asserted as fact): offset from $W_3 > W_4$ claimed negative for the n-input pair, or the threshold-term signs claimed to reverse because the mirror is p-channel without a correct argument.
