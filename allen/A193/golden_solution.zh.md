$R_{in} = \dfrac{1}{g_{ds1} + \dfrac{(g_{m1}+g_{ds4})(g_{m3}+g_{ds3})}{g_{ds3}+g_{ds4}}} \approx \dfrac{g_{ds3}+g_{ds4}}{g_{m1}g_{m3}} = \dfrac{1}{g_{m1}g_{m3}(r_{ds3}\|r_{ds4})}$。

- 设 $v_{in}$ 为输入节点电压，$v_g$ 为 M1/M2 的栅极电压。M3（栅极为交流地，源极处于 $v_{in}$）从源极到漏极流过 $i_3 = g_{m3}v_{in} + g_{ds3}(v_{in}-v_g)$。
- 栅极节点：$i_3$ 只能经 $r_{ds4}$ 流出：$i_3 = g_{ds4}v_g$ → $v_g = v_{in}\dfrac{g_{m3}+g_{ds3}}{g_{ds3}+g_{ds4}}$（电压增益很大，≈ $g_{m3}(r_{ds3}\|r_{ds4})$）。
- 输入节点：$i_{in} = g_{m1}v_g + g_{ds1}v_{in} + i_3 = g_{ds1}v_{in} + (g_{m1}+g_{ds4})v_g$，由此得到上面的表达式。
- 并联反馈（shunt feedback）环路（M3 检测输入电压并驱动 M1 的栅极）使输入电阻比简单电流镜的 $1/g_{m1}$ 降低约 $g_{m3}(r_{ds3}\|r_{ds4})$ 倍。对理想电流沉（$r_{ds4} \to \infty$）：$R_{in} = 1/(g_{m1}+g_{ds1}+g_{m1}g_{m3}r_{ds3}) \approx 1/(g_{m1}g_{m3}r_{ds3})$。
