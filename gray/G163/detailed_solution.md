# Detailed solution - G163

The first stage is balanced when $|I_{D2}|$ equals the current $I_{D4}$ that the mirror copies from $|I_{D1}|$. For each mismatch, assume everything else matches, find which input transistor must carry more current, and translate this into the sign of $V_{G1}-V_{G2}$. Two facts about the p-channel pair fix the signs: a lower (more negative) gate voltage gives more current, and $V_{ov(1-2)}<0$. In a square-law device a fractional current change $\delta$ requires $\Delta|V_{GS}|=\delta\,|V_{ov}|/2$, since $g_m=2|I_D|/|V_{ov}|$.

### Step 1 — Term $V_{t1}-V_{t2}$ (coefficient $+1$)

Take $V_{t1}>V_{t2}$, i.e. $|V_{t1}|<|V_{t2}|$: at equal $V_{GS}$, $M_1$ conducts more. A perfect mirror requires $|I_{D1}|=|I_{D2}|$, i.e. equal overdrives, $V_{GS1}-V_{t1}=V_{GS2}-V_{t2}$. With the sources common,

$$
V_{G1}-V_{G2}=V_{GS1}-V_{GS2}=V_{t1}-V_{t2}>0 .
$$

The gate of $M_1$ must be raised to cut back its extra current.

### Step 2 — Term $V_{t(3-4)}\,g_{m3}/g_{m1}$ (positive for $V_{t3}>V_{t4}$)

$M_4$ has the same $V_{GS}$ as the diode $M_3$. If $V_{t3}>V_{t4}$, $M_4$ has more overdrive and copies too much current, $I_{D4}=I_{D3}+g_{m3}(V_{t3}-V_{t4})$. Balance needs $|I_{D2}|$ larger than $|I_{D1}|$ by $g_{m3}V_{t(3-4)}$, so $|V_{GS2}|>|V_{GS1}|$: the gate of $M_2$ must be lower than that of $M_1$. A difference $\Delta V$ at the input steers $g_{m1}\Delta V$ between the two sides, hence

$$
V_{G1}-V_{G2}=+\frac{g_{m3}}{g_{m1}}V_{t(3-4)}>0 .
$$

The current error of the mirror is referred to the input through $g_{m1}$.

### Step 3 — Term with $\Delta(W/L)_{(3-4)}$: why $W_3>W_4$ gives a negative offset

If $W_3>W_4$, the mirror copies only the fraction $(W/L)_4/(W/L)_3<1$ of $|I_{D1}|$, so $I_{D4}$ is too small. Balance needs $|I_{D2}|$ smaller than $|I_{D1}|$ by the fraction $\Delta(W/L)_{(3-4)}/(W/L)_{(3-4)}$, so $M_2$ must conduct less: $|V_{GS2}|<|V_{GS1}|$, the gate of $M_2$ higher than the gate of $M_1$, and $V_{G1}-V_{G2}<0$. The required difference in $|V_{GS}|$ is $(|V_{ov}|/2)\,\Delta(W/L)_{(3-4)}/(W/L)_{(3-4)}$. In the formula this appears as

$$
\frac{V_{ov(1-2)}}{2}\,\frac{\Delta(W/L)_{(3-4)}}{(W/L)_{(3-4)}}<0,
$$

because the negative p-channel overdrive multiplies a positive $\Delta(W/L)_{(3-4)}$. The sign is a consequence of $V_{ov}<0$, not of a sign error in the formula.

### Step 4 — Term with $\Delta(W/L)_{(1-2)}$ (positive for $W_1>W_2$)

If $W_1>W_2$, $M_1$ conducts more at equal $V_{GS}$. A perfect mirror needs equal currents, so $|V_{GS1}|<|V_{GS2}|$: the gate of $M_1$ must be higher, and $V_{G1}-V_{G2}>0$. In the formula, $-\tfrac12V_{ov(1-2)}\,\Delta(W/L)_{(1-2)}/(W/L)_{(1-2)}$ is minus a negative overdrive times a positive ratio, which is positive.

### Step 5 — Summary

| Mismatch (others perfect) | Which side must conduct more | Sign of $V_{G1}-V_{G2}$ |
|---|---|---|
| $V_{t1}>V_{t2}$ | neither; $M_1$ must be throttled to equal currents | + |
| $V_{t3}>V_{t4}$ | $M_2$ (mirror output too large) | + |
| $W_3>W_4$ | $M_1$ (mirror output too small) | − |
| $W_1>W_2$ | neither; $M_1$ must be throttled to equal currents | + |

In every case the sign follows from raising the gate of the p-channel device that must conduct less; the formula reproduces it once $V_{ov(1-2)}<0$ is taken into account.
