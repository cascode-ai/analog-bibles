$\dfrac{v_{out}}{v_{in}} = \dfrac{-g_{m1}(g_{m2}+g_{mbs2}+g_{ds2})(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})}{g_{ds1}g_{ds2}(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4}) + g_{ds3}g_{ds4}(g_{m2}+g_{mbs2}+g_{ds1}+g_{ds2})}$

当 $g_m \gg g_{ds}$ 且忽略体效应时，$\approx \dfrac{-g_{m1}}{\dfrac{g_{ds1}g_{ds2}}{g_{m2}+g_{mbs2}} + \dfrac{g_{ds3}g_{ds4}}{g_{m3}+g_{mbs3}}} \approx -g_{m1}\{[g_{m2}r_{ds1}r_{ds2}]\|[g_{m3}r_{ds3}r_{ds4}]\}$。

节点方程（节点 $v_1$ 为 M1 的漏极/M2 的源极，节点 $v_4$ 为 M4 的漏极/M3 的源极；电流以流出节点为正）：
- $v_1$：$(g_{ds1}+g_{ds2}+g_{m2}+g_{mbs2})v_1 - g_{ds2}v_{out} = -g_{m1}v_{in}$
- $v_{out}$：$-(g_{m2}+g_{mbs2}+g_{ds2})v_1 + (g_{ds2}+g_{ds3})v_{out} - (g_{m3}+g_{mbs3}+g_{ds3})v_4 = 0$
- $v_4$：$-g_{ds3}v_{out} + (g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})v_4 = 0$

消去 $v_1$ 和 $v_4$，即得上面的精确比值。将分子和分母同除以 $(g_{m2}+g_{mbs2}+g_{ds2})(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})$，并相对 $g_m$ 略去 $g_{ds}$，得到 $A_v \approx -g_{m1}/(1/R_A + 1/R_B)$，其中 $R_A = (g_{m2}+g_{mbs2})r_{ds1}r_{ds2}$，$R_B = (g_{m3}+g_{mbs3})r_{ds3}r_{ds4}$，即 $-g_{m1}R_{out}$，其中输出电阻为两个共源共栅输出电阻的并联，这就是所给的表达式（忽略 $g_{mbs}$ 时）。体效应使两个共源共栅电阻都略有增大。
