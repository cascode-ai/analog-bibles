$\dfrac{i_{bias}}{v_{dd}} \approx \dfrac{g_{m1}/r_{o2} + g_{m2}/r_{o3}}{g_{m1}(1 + g_{m2}R) - g_{m2}}$（取 $g_{m3} = g_{m4}$ 且 $g_mr_o \gg 1$）。利用偏置条件 $V_{ov1} - V_{ov2} = I_{BIAS}R$，分母等于 $g_{m2}\left(1 - \sqrt{(W/L)_1/(W/L)_2}\right)$。当 $r_{o2}, r_{o3} \to \infty$ 时该比值趋于零：对电源的灵敏度仅来自 $M_2$ 和 $M_3$ 的输出电阻（二极管连接的 $M_1$、$M_4$ 只贡献高阶项）。

推导（小信号，$v_{dd}$ 加在电源上）：
- $M_4$（二极管）：$v_{dd} - v_g \approx i_{bias}/g_{m4}$。
- $M_3$：$i_3 = g_{m3}(v_{dd} - v_g) + (v_{dd} - v_a)/r_{o3} \approx i_{bias} + v_{dd}/r_{o3}$（因为 $g_{m3} = g_{m4}$ 且 $v_a \ll v_{dd}$）。
- $M_1$（二极管）：$v_a \approx i_3/g_{m1}$。
- $M_2$：$i_{bias} = g_{m2}(v_a - v_s) + (v_g - v_s)/r_{o2}$，其中 $v_s = i_{bias}R$，$v_g \approx v_{dd}$：$i_{bias} \approx \dfrac{g_{m2}}{g_{m1}}\left(i_{bias} + \dfrac{v_{dd}}{r_{o3}}\right) - g_{m2}Ri_{bias} + \dfrac{v_{dd}}{r_{o2}}$。
- 求解：$i_{bias}\left(1 + g_{m2}R - \dfrac{g_{m2}}{g_{m1}}\right) = v_{dd}\left(\dfrac{1}{r_{o2}} + \dfrac{g_{m2}}{g_{m1}r_{o3}}\right)$，即上述结果。（精确的节点分析在 $g_mr_o \gg 1$ 时化简为此式。）
- 示例：$I$ = 100 µA，$V_{ov1}$ = 0.2 V，$(W/L)_2 = 4(W/L)_1$（$g_{m1}$ = 1 mS，$g_{m2}$ = 2 mS，R = 1 kΩ），$r_o$ = 200 kΩ，得 ≈ 15 µA/V。
