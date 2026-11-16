# Golden Solution - R025

## Reference answer

Nothing happens: $V_X$ stays at 3 V and $I_X = 0$ for all $t$. The source of $M_1$ starts at $V_X = 3\ \mathrm{V} = V_{DD}$, so $V_{DS} = 0$ and no drain current can flow, whatever $V_b$ is (for $V_b \le V_{DD}$ the device is also off, since $V_{GS} = V_b - 3 \le 0$).

## Grading notes

+2: $V_X$ constant at 3 V and $I_X = 0$, justified by $V_{DS} = 0$ (and/or $V_{GS} \le 0$). +1: correct result with incomplete reasoning (e.g., only "M1 is off" without noting $V_{DS} = 0$). -2 (asserted as fact): $C_1$ charging or discharging through $M_1$, or $V_X$ settling at $V_b - V_{TH}$.
