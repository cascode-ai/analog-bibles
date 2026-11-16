# Golden Solution - R275

## Reference answer

When $V_{out}$ goes low, it is pulled down by $M_2$, which cannot pull it below its own source, node P. P sits about one $V_{GS}$ below the input common-mode level ($V_P \approx V_{in,CM} - V_{GS1,2}$), so $V_{min} \approx V_P + V_{DS2} \approx V_{in,CM} - V_{TH} - (\text{overdrive}) + (\text{small } V_{DS2})$: it rises and falls one-for-one with $V_{in,CM}$. A higher input CM level thus raises $V_{min}$ and reduces the output swing.

- With a moderate $\Delta V$ (comparable to or less than $\sqrt2\,V_{ov}$), $M_1$ is not fully off; its current is mirrored by $M_3$–$M_4$. In the low output state $M_2$ must carry only $|I_{D4}|$ while its $V_{GS}$ asks for more, so the high gain drives $V_{out}$ down until $M_2$ enters the triode region, where its drain current matches $|I_{D4}|$ at a small $V_{DS2}$ (tens of mV).
- Hence $V_{min} = V_P + V_{DS2}$, i.e., one threshold (plus a bit) below $V_{in,CM}$, not near ground. (Even with full current steering, $V_{out}$ cannot go below $V_P$ while $M_5$ conducts.)
- $V_{max}$, by contrast, is set by $M_4$ entering triode near $V_{DD}$ and is nearly independent of $V_{in,CM}$.
- Lowering $V_{in,CM}$ lowers $V_{min}$ only until $M_5$ leaves saturation.

## Grading notes

+2: explains that the low output level is limited by $M_2$ entering triode with its source at P, and that $V_P$ tracks $V_{in,CM}$ (one $V_{GS}$ below), so $V_{min} \approx V_{in,CM} - V_{TH}$ (roughly) follows the CM level. +1: correct idea that $V_{min}$ cannot go below $V_P$ and $V_P$ follows the CM level, without the triode/partial-steering detail. 0: a vague mention of headroom or saturation without linking $V_{min}$ to $V_P$. -2 (asserted as fact): $V_{min}$ limited by $M_4$ or by $M_5$'s gate voltage only, a claim that $V_{min} \approx 0$ independent of CM, or a dependence in the wrong direction (higher CM lowering $V_{min}$).
