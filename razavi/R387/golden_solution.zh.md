$I_{D1} = I_{D2} \approx 0.44$ mA（0.437 mA），由此 $g_{m1} \approx 3.42$ mS，$g_{m2} \approx 4.84$ mS，环路增益（loop gain）$g_{m2}R_D/2 \approx 4.84$。

- $M_1$ 与 $M_2$ 串联，流过相同的电流 $I$。
- 无反馈时，输入电阻（在 $M_1$ 的源极）为 $1/g_{m1}$。分压器把 $V_P = V_{out}C_1/(C_1+C_2) = V_{out}/2$ 反馈到 $M_2$ 的栅极，该管的电流叠加到输入电流上：$R_{in} = \dfrac{1}{g_{m1}}\cdot\dfrac{1}{1 + g_{m2}R_DC_1/(C_1+C_2)} = \dfrac{1}{g_{m1}(1 + g_{m2}\cdot 1\ \mathrm{k\Omega})}$。
- $g_{m1} = \sqrt{2(134\ \mu)(100)I} = 0.1637\sqrt{I}$，$g_{m2} = \sqrt{2(134\ \mu)(200)I} = 0.2315\sqrt{I}$（国际单位制）。令 $x = \sqrt{I}$：$0.1637x(1 + 231.5x) = 0.02$ → $x = 0.0209$，$I = 0.437$ mA。
- 验证：$1/g_{m1} = 292\ \Omega$，除以 $1 + 4.84 = 5.84$ → 50 Ω。过驱动电压（overdrive voltage）分别为 0.26 V（$M_1$）和 0.18 V（$M_2$）。
