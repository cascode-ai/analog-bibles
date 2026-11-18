$G_m[dm] \approx 0.907$ mA/V（计入所有 $r_o$ 的精确小信号解：0.906 mA/V）；无失配时 $G_m[dm] = g_m = 1.0$ mA/V（计入 $r_o$ 时为 0.999 mA/V）。失配使 $G_m[dm]$ 降低约 9 %，几乎全部来自 $g_{m3} \ne g_{m4}$。

推导（$r_o \to \infty$，$r_{tail} \to \infty$）：取 $v_{i1} = v_{id}/2$，$v_{i2} = -v_{id}/2$，尾节点电压稳定在 $v_t = \dfrac{g_{m1}v_{i1} + g_{m2}v_{i2}}{g_{m1}+g_{m2}}$，因此 $i_1 = -i_2 = \dfrac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}v_{id}$。电流镜向输出提供 $(g_{m4}/g_{m3})i_1$，因此 $i_{out} = i_1(1 + g_{m4}/g_{m3})$，且
$G_m[dm] = \dfrac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}\cdot\dfrac{g_{m3}+g_{m4}}{g_{m3}} = g_{m1-2}\dfrac{1 - (\Delta g_{m1-2}/2g_{m1-2})^2}{1 + \Delta g_{m3-4}/(2g_{m3-4})}$（在此极限下是精确的）。
数值：$1.0\times(1 - 0.05^2)/(1 + 0.1) = 0.9068$ mA/V。线性小信号仿真（VCCS 加电阻，或按这些 $g_m$、$r_o$ 确定尺寸的晶体管）给出 0.906 mA/V。
