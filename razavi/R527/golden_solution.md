# Golden Solution - R527

## Reference answer

The input common-mode level can rise to about 0.5 V: $V_{CM,in,max} \approx V_{GS12} + V_{TH13} \approx 300 + 200 = 500$ mV, about 100 mV above nominal. Beyond this point $I_{D11}/I_{D12}$ increases.

- The drains of $M_{13}$–$M_{14}$ sit at $V_{G12} = V_{GS12} \approx 300$ mV. $M_{12}$ carries the 25 μA at the same density as $M_{11}$. The sources of $M_{13}$–$M_{14}$ are at $V_{CM} - V_{GS13} = V_{CM} - 0.3$ V, so $V_{DS13} = 0.6\ \mathrm{V} - V_{CM}$. Saturation requires $V_{DS13} \ge 100$ mV (equivalently $V_{D} \ge V_{G} - V_{TH}$), so $V_{CM} \le 0.5$ V. The body effect on $M_{13}$, whose source is about 0.2 V above ground there, raises this limit slightly.
- Above about 0.5 V, $M_{13}$–$M_{14}$ enter the triode region. To carry the same 25 μA they need a larger $V_{GS}$, so their sources (the drain of $M_{12}$) rise more slowly than $V_{CM}$: $dV_{DS12}/dV_{CM} = g_m/(g_m + g_{ds}) < 1$, and $V_{DS12}$ approaches $V_{GS12}$. Meanwhile $V_{DS11} = V_{CM} - V_{GS1,2}$ keeps rising one-for-one.
- So $V_{DS11} > V_{DS12}$. With the strong channel-length modulation of 40-nm devices, $I_{D11}$ rises while $I_{D12}$ stays at 25 μA, and $I_{D11}/I_{D12}$ climbs above its nominal ≈ 76 (= 1.9 mA/25 μA).

## Grading notes

+2: limit ≈ 0.5 V (accept 0.45–0.55 V, or $V_{GS12} + V_{TH13}$ evaluated), and "increases", with the reason that $V_{DS12}$ stops tracking $V_{DS11}$ ($V_{DS11} > V_{DS12}$) combined with channel-length modulation. +1: correct limit and "increases" with weak or missing reasoning, or correct reasoning with the limit off by up to about 50 mV through a slip. 0: only one of the two parts correct. -2 (asserted as fact): the drains of $M_{13}$–$M_{14}$ taken to be at $V_{DD}$ or at the drain of $M_{11}$ (misread topology), a limit set by $M_{12}$ or $M_{11}$ instead of $M_{13}$–$M_{14}$, or "decreases" together with a wrong limit.
