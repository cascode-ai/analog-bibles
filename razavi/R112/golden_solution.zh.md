$A_v = -(g_{m1} - g_{m2})\left(\dfrac{1}{g_{m2}} \,\Big\|\, r_{O1} \,\Big\|\, r_{O2}\right) = -\dfrac{(g_{m1} - g_{m2})r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}$。

- 两个栅极都由 $v_{in}$ 驱动；$M_2$（漏极接 $V_{DD}$）的源极接在输出端，因此它流入输出端的电流为 $g_{m2}(v_{in} - v_{out}) - v_{out}/r_{O2}$。
- 基尔霍夫电流定律（KCL）：$g_{m2}(v_{in} - v_{out}) - v_{out}/r_{O2} = g_{m1}v_{in} + v_{out}/r_{O1}$ → 即得上述结果。当 $r_O$ 很大时：$A_v \approx -(g_{m1} - g_{m2})/g_{m2} = 1 - g_{m1}/g_{m2}$。
