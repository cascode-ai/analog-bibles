最大的电荷注入误差出现在 $V_{in} = 0$ 时。最坏情况（全部沟道电荷都注入 $C_H$）：ΔV = 88 mV，为负向台阶（pedestal）；若一半电荷注入 $C_H$，则为 44 mV。时钟馈通引起的误差 ≈ 24 mV，与 $V_{in}$ 无关。电荷注入误差是时钟馈通误差的 ≈ 3.7×（按一半分配的假设则为 ≈ 1.9×）。

- $WLC_{ox} = 20 \times 0.5 \times 3.84$ fF = 38.4 fF。$Q_{ch} = WLC_{ox}(V_{DD} - V_{in} - V_{TH})$ 在 $V_{in} = 0$ 时最大（$V_{SB} = 0$，$V_{TH} = 0.7$ V）：38.4 fF × 2.3 V = 88.3 fC，因此 ΔV = 88 mV（全部）或 44 mV（一半）。
- 时钟馈通：$\Delta V = V_{DD}\,WC_{ov}/(WC_{ov} + C_H) = 3\ \mathrm{V} \times 8\ \mathrm{fF}/1008\ \mathrm{fF} = 23.8$ mV。
- 电荷注入还与 $V_{in}$ 有关：它随 $V_{in}$ 升高而减小，考虑体效应（body effect）时减小得更快。这会产生增益误差（gain error）和非线性（nonlinearity），而时钟馈通只是一个恒定的失调。
