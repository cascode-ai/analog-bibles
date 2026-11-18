设 $I$ 为两条支路的共同电流，则

$I = \dfrac{2}{K'R^2}\left(\dfrac{1}{\sqrt{(W/L)_1}} - \dfrac{1}{\sqrt{(W/L)_2}}\right)^2$，且 $I_{out} = \dfrac{(W/L)_5}{(W/L)_2}\,I$（若 M5 与 M2 尺寸相同，则 $= I$）。

- M3–M4 电流镜迫使两条支路的电流都等于 $I$；M1 和 M2 各流过 $I$。
- M1 的栅极接 $R$ 的上端，漏极接下端，而下端也是 M2 的栅极：$V_{GS1} = V_{GS2} + IR$。
- 由 $V_{GS} = V_T + \sqrt{2I/(K'W/L)}$：$IR = \sqrt{2I/K'}\left(1/\sqrt{(W/L)_1} - 1/\sqrt{(W/L)_2}\right)$，即 $\sqrt{I} = \dfrac{1}{R}\sqrt{\dfrac{2}{K'}}\left(\dfrac{1}{\sqrt{(W/L)_1}} - \dfrac{1}{\sqrt{(W/L)_2}}\right)$，由此得到上述结果。要有正解，需要 $(W/L)_1 < (W/L)_2$。
- M5 与 M2 的栅源电压相同，因此按 $(W/L)_5/(W/L)_2$ 的比例复制 $I$。
- 一阶近似下 $I_{out}$ 与 $V_{DD}$ 和 $V_T$ 无关。与其他自偏置（self-biased）基准一样，该电路还存在一个零电流状态，需要启动电路（start-up circuit）。
