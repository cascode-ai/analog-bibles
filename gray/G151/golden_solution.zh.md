峰值约为 2 mV（$v_o \approx v_{sup}/PSRR^+ = 20\ \mathrm{mV}/10$）。

- 运放输出：$v_o = A_{dm}v_{id} + A^+v_{dd} = A_{dm}\left(v_{id} + v_{dd}/PSRR^+\right)$。电源波动相当于一个等效差分输入源 $v_{dd}/PSRR^+ = 2$ mV。
- 跟随器：$v_{id} = v_s - v_o = -v_o$，因此 $v_o = \dfrac{A_{dm}}{1 + A_{dm}}\cdot\dfrac{v_{dd}}{PSRR^+} \approx \dfrac{20\ \mathrm{mV}}{10} = 2$ mV。
- 跟随器具有单位闭环增益，因此等效输入源几乎不变地出现在输出端。
