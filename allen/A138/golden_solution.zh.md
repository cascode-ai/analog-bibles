$v_{IC}(\max) = V_{DD} - 0.141$ V = 4.86 V，$v_{IC}(\min) = 0.93$ V，ICMR = 4.86 − 0.93 = 3.93 V（$V_{DD} = 5$ V 时）。

- $v_{IC}(\max) = V_{DD} - V_{SG3} + V_{TN1}$：M1 的漏极比 $V_{DD}$ 低一个 $V_{SG3}$，且只要 $V_{G1} \le V_{D1} + V_{TN}$，M1 就保持饱和。$V_{SG3} = 0.7 + \sqrt{2 \cdot 5\ \mu/(50\ \mu \cdot 10)} = 0.7 + 0.141 = 0.841$ V，故 $v_{IC}(\max) = V_{DD} - 0.141$ V。
- $v_{IC}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1}$：$V_{DS5}(\mathrm{sat}) = \sqrt{2 \cdot 10\ \mu/(110\ \mu \cdot 10)} = 0.135$ V，$V_{GS1} = 0.7 + \sqrt{2 \cdot 5\ \mu/(110\ \mu \cdot 10)} = 0.795$ V，得 0.930 V。
- M2/M4 支路允许的上限略高，因此 $v_{IC}(\max)$ 由 M1/M3 支路决定。
