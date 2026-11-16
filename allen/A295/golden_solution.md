# Golden Solution - A295

## Reference answer

$V_{ic}(\max) = V_{DD} - |V_{T5}|(\max) - \sqrt{\dfrac{I_7}{K'_PS_5}} - \sqrt{\dfrac{I_7}{K'_PS_3}} + V_{T1}(\min)$

$V_{ic}(\min) = V_{SS} + \sqrt{\dfrac{2I_7}{K'_NS_7}} + V_{T1}(\max) + \sqrt{\dfrac{I_7}{K'_NS_1}}$

ICMR $= V_{ic}(\max) - V_{ic}(\min)$.

- Each input device carries $I_7/2$, so its overdrive is $\sqrt{I_7/(K'_NS_1)}$; M7 carries $I_7$ and needs $V_{DS7}(\mathrm{sat}) = \sqrt{2I_7/(K'_NS_7)}$.
- Lower limit: the input must keep M7 saturated: $V_{ic} \ge V_{SS} + V_{DS7}(\mathrm{sat}) + V_{GS1}$, worst case with the largest threshold.
- Upper limit: M1 must stay saturated, $V_{D1} \ge V_{ic} - V_{T1}$. The drain of M1 is at most $V_{DD} - V_{SG5} - V_{SD3}(\mathrm{sat})$ while the diode M5 and the cascode M3 (both carrying $I_7/2$) stay saturated, so $V_{ic} \le V_{DD} - V_{SG5} - V_{SD3}(\mathrm{sat}) + V_{T1}$, worst case with the largest $|V_{T5}|$ and the smallest $V_{T1}$.

## Grading notes

+2: both limits correct: $V_{ic}(\min) = V_{SS} + V_{DS7}(\mathrm{sat}) + V_{GS1}$ with $V_{T1}(\max)$, and $V_{ic}(\max) = V_{DD} - V_{SG5} - V_{SD3}(\mathrm{sat}) + V_{T1}$ (equivalently $V_{G3} + |V_{TP}| + V_{T1}$ with the drawn gate bias $V_{G3} = V_{DD} - V_{SG10} - V_{SG11}$, $I_{BIAS} = 2I_7$, which agrees when the bias is consistent with saturated M3/M5) with the worst-case thresholds ($|V_{T5}|(\max)$, $V_{T1}(\min)$), with the device currents $I_7$ and $I_7/2$ placed correctly. +1: both limit formulas correct but the worst-case threshold selection missing (nominal thresholds) or wrong for one threshold. 0: one limit right and the other wrong (e.g. the upper limit missing the M5/M3 drops, or M3/M4 misread as n-channel). −2 (asserted as fact): both limits wrong, e.g. the upper limit without the M5 and M3 drops (such as $V_{DD} + V_{T1}$) together with a lower limit without $V_{DS7}(\mathrm{sat})$ or with the overdrive of M1 subtracted instead of added.
