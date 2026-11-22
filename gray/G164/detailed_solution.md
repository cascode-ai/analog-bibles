# Detailed solution - G164

The first stage is balanced when $I_{D2}$ equals the current $|I_{D4}|$ that the p-channel mirror copies from $I_{D1}$. For each mismatch, assume everything else matches, find which input transistor must carry more current, and translate this into the sign of $V_{G1}-V_{G2}$. For the n-channel pair a higher gate voltage gives more current and $V_{ov(1-2)}>0$; for a p-channel device a less negative threshold gives more current at a given $V_{SG}$. In a square-law device a fractional current change $\delta$ needs $\Delta V_{GS}=\delta\,V_{ov}/2$, since $g_m=2I_D/V_{ov}$.

### Step 1 — Term $V_{t1}-V_{t2}$ (coefficient $+1$)

If $V_{t1}>V_{t2}$, $M_1$ conducts less at equal $V_{GS}$. A perfect mirror needs equal currents, i.e. equal overdrives, so

$$
V_{G1}-V_{G2}=V_{GS1}-V_{GS2}=V_{t1}-V_{t2}>0 :
$$

the gate of $M_1$ must be raised to restore its current.

### Step 2 — Term $V_{t(3-4)}\,g_{m3}/g_{m1}$ (positive for $V_{t3}>V_{t4}$)

The diode $M_3$ sets the common $V_{SG}$. If $V_{t3}>V_{t4}$ (the threshold of $M_4$ more negative), $M_4$ has less overdrive and copies too little: $|I_{D4}|=|I_{D3}|-g_{m3}(V_{t3}-V_{t4})$. Balance needs $I_{D2}$ smaller than $I_{D1}$ by $g_{m3}V_{t(3-4)}$, so $V_{GS2}<V_{GS1}$ and the gate of $M_1$ is higher. A gate difference $\Delta V$ shifts $g_{m1}\Delta V$ between the sides, so

$$
V_{G1}-V_{G2}=+\frac{g_{m3}}{g_{m1}}V_{t(3-4)}>0 .
$$

### Step 3 — Term with $\Delta(W/L)_{(3-4)}$: sign for $W_3>W_4$

If $W_3>W_4$, the mirror copies only the fraction $(W/L)_4/(W/L)_3<1$ of $I_{D1}$, so $I_{D2}$ must be smaller than $I_{D1}$ by the fraction $\Delta(W/L)_{(3-4)}/(W/L)_{(3-4)}$. Then $V_{GS2}<V_{GS1}$, the gate of $M_1$ is higher, and

$$
V_{G1}-V_{G2}=+\frac{V_{ov(1-2)}}{2}\,\frac{\Delta(W/L)_{(3-4)}}{(W/L)_{(3-4)}}>0,
$$

since $V_{ov(1-2)}>0$ for the n-channel pair. The expression therefore predicts a **positive** offset for $W_3>W_4$, opposite to the p-input op amp with an n-channel mirror, where the same term is negative because $V_{ov}<0$.

### Step 4 — Term with $\Delta(W/L)_{(1-2)}$ (negative for $W_1>W_2$)

If $W_1>W_2$, $M_1$ conducts more at equal $V_{GS}$. Equal currents need $V_{GS1}<V_{GS2}$, so the gate of $M_1$ must be lower:

$$
V_{G1}-V_{G2}=-\frac{V_{ov(1-2)}}{2}\,\frac{\Delta(W/L)_{(1-2)}}{(W/L)_{(1-2)}}<0 .
$$

### Step 5 — Summary

| Mismatch (others perfect) | Required unbalance | Sign of $V_{G1}-V_{G2}$ |
|---|---|---|
| $V_{t1}>V_{t2}$ | raise the weaker $M_1$ | + |
| $V_{t3}>V_{t4}$ | $M_2$ must conduct less | + |
| $W_3>W_4$ | $M_2$ must conduct less | + |
| $W_1>W_2$ | lower the stronger $M_1$ | − |

The threshold terms keep the signs they have in the p-input case; the two $W/L$ terms reverse because the input overdrive is now positive.
