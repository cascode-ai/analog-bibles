# Golden Solution - R278

## Reference answer

$V_X$ is constant at $V_{DD} - 0.8 - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$ from $t = 0^+$, and so is $V_P = 1.5 - V_{GS1}(I_{SS}/2)$. $V_Y$ starts at $V_P$ and rises: at first linearly at $I_{SS}/(2C_1)$, then more slowly as $M_2$ (in triode) takes more of the current, approaching the edge of saturation $1.5 - V_{TH2}$ hyperbolically; with λ > 0 it then continues slowly toward $V_X$, its final value.

- KCL: $|I_{D3}| = I_{D1}$, $|I_{D4}| = I_{D2} + I_C$, $I_{D1} + I_{D2} + I_C = I_{SS}$, $|I_{D4}| = |I_{D3}|$ → $I_{D1} = I_{SS}/2$ always: $V_X$ and $V_P$ are fixed.
- At $t = 0^+$, $V_{DS2} = 0$, so $I_{D2} = 0$ and $I_C = I_{SS}/2$.
- With $v = V_Y - V_P$ and $M_2$ in triode: $I_C = \tfrac{\beta}{2}(V_{ov} - v)^2$, so $v(t) = V_{ov}[1 - 1/(1+t/\tau)]$, $\tau = 2C_1/g_m$ ($g_m$ of $M_2$ at $I_{SS}/2$).
- Above $1.5 - V_{TH2}$, only the λ-imbalance charges the node, with a time constant of order $C_1(r_{O2}\|r_{O4})$.

## Grading notes

+2: $V_X$ (and $V_P$) constant; $V_Y$ starting at $V_P$, rising at ≈ $I_{SS}/(2C_1)$ initially and slowing as $M_2$ conducts, reaching ≈ $1.5 - V_{TH}$, and finally drifting toward $V_X$ (λ). +1: correct start, initial slope and slowing, but the final value given only as $1.5 - V_{TH}$ (λ = 0 view) without comment. 0: right trend but wrong initial value (e.g., $V_Y$ starting at $V_X$). -2 (asserted as fact): $V_Y$ falling, $V_X$ changing substantially, or $C_1$ read as connected to X or ground.
