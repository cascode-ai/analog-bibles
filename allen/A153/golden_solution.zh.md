$R_{out} \approx \dfrac{1}{g_{ds2}g_{ds4}/g_{m4} + g_{ds6}g_{ds8}/g_{m6}} = \dfrac{g_{m4}g_{m6}}{g_{m6}g_{ds2}g_{ds4} + g_{m4}g_{ds6}g_{ds8}}$，$\dfrac{v_{out}}{v_{in}} \approx \dfrac{(g_{m1}+g_{m2})\,g_{m4}g_{m6}}{2(g_{m6}g_{ds2}g_{ds4} + g_{m4}g_{ds6}g_{ds8})}$（同相；输入对匹配且电流镜为 1:1，因此 $(g_{m1}+g_{m2})/2 = g_{m1}$）。

- M3 和 M4 是位于输入对上方的 n 沟道共源共栅（cascode）管（栅极接 $V_{BN}$），M5–M8 构成 p 沟道共源共栅电流镜（cascode current mirror）：这是套筒式共源共栅（telescopic cascode）放大器。
- 向下看：$g_{m4}r_{ds4}r_{ds2}$。向上看：$g_{m6}r_{ds6}r_{ds8}$。$R_{out}$ 为二者的并联。
- 共源共栅管将信号电流原样传递，因此完整的 $g_{m1}v_{in}$ 流入 $R_{out}$，$A_v = g_{m1}R_{out}$，量级为 $(g_mr_{ds})^2/2$。
