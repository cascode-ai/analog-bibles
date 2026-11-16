# Golden Solution - G161

## Reference answer

$-V_{SS} + V_{t1} + V_{ov1} + V_{ov5} \;\le\; V_{IC} \;\le\; V_{DD} - |V_{t3}| - |V_{ov3}| + V_{t1}$

- Lower end (tail source $M_5$): the common source is at $V_{IC} - V_{t1} - V_{ov1}$, and $M_5$ needs $V_{DS5} \ge V_{ov5}$, i.e. $V_{IC} - V_{t1} - V_{ov1} - (-V_{SS}) \ge V_{ov5}$.
- Upper end (input pair): with a pure common-mode input and an op amp designed for zero systematic offset ($(W/L)_6/(W/L)_4 = 2(W/L)_7/(W/L)_5$, so $|V_{GS6}| = |V_{GS3}|$), the drains of $M_1$ and $M_2$ both sit at $V_{DD} - |V_{GS3}| = V_{DD} - |V_{t3}| - |V_{ov3}|$. $M_1$ and $M_2$ stay in saturation while their gate-drain voltage is below $V_{t1}$: $V_{IC} - (V_{DD} - |V_{t3}| - |V_{ov3}|) \le V_{t1}$.
- In general the drain of $M_2$ is the gate of $M_6$, at $V_{DD} - |V_{GS6}|$, so the upper limit is $\min\{V_{DD} - |V_{GS3}| + V_{t1},\ V_{DD} - |V_{GS6}| + V_{t2}\}$. This reduces to the result above when there is no systematic offset.
- Body effect: the bodies of the n-channel inputs are at $-V_{SS}$, so as $V_{IC}$ rises their source-body voltage and $V_{t1}$ increase. This pushes the upper limit up (it can even include $V_{DD}$) while at the lower limit the source-body voltage is small, so the threshold there is close to its zero-bias value.
- Compared with the original p-input op amp, the range is shifted toward the positive supply.

## Grading notes

+2: both limits as above (equivalent rearrangements accepted), each tied to the right device ($M_5$ for the low end, $M_1$/$M_2$ against the mirror's diode voltage for the high end). Mentioning the body effect is a plus. Also +2: an upper limit written as $\min\{V_{DD} - |V_{GS3}| + V_{t1},\ V_{DD} - |V_{GS6}| + V_{t2}\}$ ($M_2$'s drain set by $M_6$'s gate-source voltage), with the remark that the two terms coincide when the op amp has no systematic offset. +1: both limits right with one sign/threshold slip, or one limit with an extra overdrive margin that is explained; or the $\min$ form without that remark, or with a claim (general, or under a stated design assumption such as unit mirror ratios) that the $V_{GS6}$ term dominates. 0: only one limit correct. -2 (asserted as fact): the original p-input circuit's range ($V_{t3} - |V_{t1}| + V_{ov3} - V_{SS} < V_{IC} < V_{DD} - |V_{t1}| - |V_{ov1}| - |V_{ov5}|$) given for this circuit, limits taken from the output swing or from the saturation of the second-stage devices $M_6$/$M_7$ (not $M_2$'s own saturation against $V_{D2} = V_{DD} - |V_{GS6}|$), or the claim that the range is unlimited.
