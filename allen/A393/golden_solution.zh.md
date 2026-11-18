$R_2 = 2R_1 = 200$ kΩ，$V_{REF} = 2/3$ V。
- 同相输入端电压：$v_+ = \dfrac{R_2v_{IN}+R_1v_{OUT}}{R_1+R_2}$；当 $v_+ = V_{REF}$ 时发生翻转。
- 输出为低电平（$V_{OL}$）时，$V_{TRP}^+ = \dfrac{R_1+R_2}{R_2}V_{REF}-\dfrac{R_1}{R_2}V_{OL}$；输出为高电平时，$V_{TRP}^- = \dfrac{R_1+R_2}{R_2}V_{REF}-\dfrac{R_1}{R_2}V_{OH}$。
- 迟滞宽度：$V_{TRP}^+-V_{TRP}^- = \dfrac{R_1}{R_2}(V_{OH}-V_{OL}) = 1$ V → $R_1/R_2 = 1/2$，$R_2 = 200$ kΩ。
- $V_{TRP}^+ = 1.5V_{REF}-0 = 1$ V → $V_{REF} = 0.667$ V；验证 $V_{TRP}^- = 1.5(0.667)-0.5(2) = 0$ V。
