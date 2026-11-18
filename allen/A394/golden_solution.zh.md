$R_2 = R_1 = 100$ kΩ，$V_{REF} = 0$ V。
- 同相输入端：$v_+ = \dfrac{R_1v_{OUT}+R_2V_{REF}}{R_1+R_2}$；当 $v_{IN} = v_+$ 时输出翻转。
- $V_{TRP}^+ = \dfrac{R_1}{R_1+R_2}V_{OH}+\dfrac{R_2}{R_1+R_2}V_{REF}$（输出为高电平、输入上升），$V_{TRP}^- = \dfrac{R_1}{R_1+R_2}V_{OL}+\dfrac{R_2}{R_1+R_2}V_{REF}$。
- 迟滞宽度：$\dfrac{R_1}{R_1+R_2}(V_{OH}-V_{OL}) = 1$ V → $R_1 = R_2$，因此 $R_2 = 100$ kΩ。
- $V_{TRP}^- = 0 + 0.5V_{REF} = 0$ → $V_{REF} = 0$；验证 $V_{TRP}^+ = 0.5\times2 = 1$ V。
