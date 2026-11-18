$G_m(s) = g_{m1}\,\dfrac{1 + sC_x/(2g_{m3})}{1 + sC_x/g_{m3}}$：极点位于 $-g_{m3}/C_x$，零点位于 $-2g_{m3}/C_x$（两者相距一个倍频程）。

- $i_{d1} = g_{m1}v_{id}/2$，$i_{d2} = -g_{m1}v_{id}/2$。
- 节点 X：$i_{d1}$ 从 $1/g_{m3}$ 与 $C_x$ 的并联组合中抽取，因此 $v_{gs4} = v_X = -i_{d1}/(g_{m3} + sC_x)$。
- $i_{d4} = g_{m4}v_{gs4} = -i_{d1}\dfrac{g_{m3}}{g_{m3} + sC_x}$（取 $g_{m4} = g_{m3}$）。
- $i_o = -i_{d2} - i_{d4} = \dfrac{g_{m1}v_{id}}{2}\left[1 + \dfrac{1}{1 + sC_x/g_{m3}}\right] = g_{m1}v_{id}\,\dfrac{1 + sC_x/(2g_{m3})}{1 + sC_x/g_{m3}}$。
- 幅度：低频时为 $g_{m1}$，高频时降为 $g_{m1}/2$（当 $C_x$ 把节点 X 短路时，电流镜没有贡献），变化发生在 $|p|$ 与 $|z|$ 之间。相位：两端均为 0°，在 $\omega = \sqrt{|p||z|} = \sqrt2\,g_{m3}/C_x$ 处滞后最大，为 $\arctan(1/\sqrt2) - \arctan\sqrt2 = -19.5°$。
- 由于 $C_x \approx C_{gs3} + C_{gs4} = 2C_{gs3}$，$|p| \approx \omega_{T3}/2$：这个零极点对（pole–zero doublet）只在非常高的频率下才有影响。
