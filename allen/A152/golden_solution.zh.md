$R_{out} \approx \dfrac{1}{g_{ds2} + g_{ds6}g_{ds8}/g_{m6}} = \dfrac{g_{m6}}{g_{m6}g_{ds2} + g_{ds6}g_{ds8}}$，$\dfrac{v_{out}}{v_{in}} \approx \dfrac{(g_{m1}+g_{m2})\,g_{m6}}{2(g_{m6}g_{ds2} + g_{ds6}g_{ds8})}$（同相；输入对匹配且电流镜为 1:1，因此 $(g_{m1}+g_{m2})/2 = g_{m1}$）。由于共源共栅项很小，$R_{out} \approx r_{ds2}$，$A_v \approx g_{m1}/g_{ds2}$。

- M7/M5（二极管堆叠）与 M8/M6 构成共源共栅电流镜（cascode current mirror）。向上看进 M6 的电阻 $\approx g_{m6}r_{ds6}r_{ds8}$，与向下看的 $r_{ds2}$ 并联。
- 与简单电流镜一样，完整的 $g_{m1}v_{in}$（一半来自经电流镜的 M1，一半来自 M2）流入 $R_{out}$。
- 向下看的电导之所以只是 $g_{ds2}$，是因为 M2 带源极负反馈的漏极所吸收的电流（$g_{ds2}/2$）经 M1 和电流镜返回（又是 $g_{ds2}/2$）。对于不匹配的差分对和 1:1 电流镜，$G_m = 2g_{m1}g_{m2}/(g_{m1}+g_{m2})$，M2 项变为 $2g_{m1}g_{ds2}/(g_{m1}+g_{m2})$。
