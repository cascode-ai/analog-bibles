差模输入 $v_{in}$ 下输入级的小信号模型（每个输入管电流为 $\pm g_{m1}v_{in}/2$），镜像节点处的总电容为 $C_3$：

- 镜像节点：来自 M1 的电流 $g_{m1}v_{in}/2$ 流入 $g_{m3} + g_{ds1} + g_{ds3} + sC_3$；镜像电流 $i_3 = g_{m4}v_{g3}$ 在输出节点与 M2 的电流相加，输出节点看到的电导为 $g_{ds2} + g_{ds4}$：

$\dfrac{V_{o1}(s)}{V_{in}(s)} = \dfrac{-g_{m1}}{2(g_{ds2} + g_{ds4})}\left[\dfrac{g_{m3} + g_{ds1} + g_{ds3}}{g_{m3} + g_{ds1} + g_{ds3} + sC_3} + 1\right] \approx \dfrac{-g_{m1}}{2(g_{ds2} + g_{ds4})}\cdot\dfrac{sC_3 + 2g_{m3}}{sC_3 + g_{m3}}$

（利用 $g_{m3} \gg g_{ds1} + g_{ds3}$）。因此存在极点 $p_3 = -g_{m3}/C_3$ 和零点 $z_3 = -2g_{m3}/C_3 = 2p_3$；零点部分抵消了极点的影响。
- $C_3$ 主要由两个镜像管的栅电容构成：$C_3 \approx C_{gs3} + C_{gs4} = 2C_{gs3}$（M3 = M4），饱和区中 $C_{gs} = \frac23W L C_{ox} \approx 0.67W_3L_3C_{ox}$（忽略 M1、M3 的交叠电容和结电容）。
- 为使这一零极点对（pole–zero doublet）不影响相位裕度，应将其置于远高于 GB 处：$|p_3| = \dfrac{g_{m3}}{2C_{gs3}} > 10\,GB$，即 $\dfrac{\sqrt{2K'_PS_3I_3}}{1.33W_3L_3C_{ox}} > 10\dfrac{g_{m1}}{C_c}$。
