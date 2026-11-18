$\dfrac{\Delta V_{out}(s)}{\Delta V_i(s)} = \dfrac{g_{m1}R}{1-g_{m3}R+sRC} = \dfrac{g_{m1}R/(1-g_{m3}R)}{1+s\,\dfrac{RC}{1-g_{m3}R}}$，极点位于 $s = -(1-g_{m3}R)/(RC) = (g_{m3}-G)/C$。

推导（差模半边电路，$v_{o1} = -\Delta v_{out}/2$，$v_{o2} = +\Delta v_{out}/2$，$v_{i1} = -v_{i2} = \Delta V_i/2$，尾节点为交流地）：
$v_{o1}$ 处的 KCL：$(sC+G)v_{o1} = -g_{m3}v_{o2} - g_{m1}\Delta V_i/2$（M3 向该节点注入 $-g_{m3}v_{o2}$，M1 从该节点吸收 $g_{m1}\Delta V_i/2$）。代入后得到 $(sC+G-g_{m3})\Delta v_{out} = g_{m1}\Delta V_i$。

- $g_{m3}R < 1$：电路是一个稳定的放大器，直流增益为 $g_{m1}R/(1-g_{m3}R)$（被正反馈提高），在 $-(1-g_{m3}R)/RC$ 处有一个左半平面极点。
- $g_{m3}R > 1$：极点移入右半平面，位于 $+(g_{m3}R-1)/RC \approx g_{m3}/C$：电路发生再生（regeneration），即锁存。对阶跃输入 $\Delta V_i$，$\Delta v_{out}(t) = \dfrac{g_{m1}R}{g_{m3}R-1}\Delta V_i\left(e^{t/\tau_L}-1\right)$，其中 $\tau_L = \dfrac{RC}{g_{m3}R-1} \approx \dfrac{C}{g_{m3}}$（若存在初始输出差 $\Delta V_0$，则还会多出一项 $\Delta V_0e^{t/\tau_L}$）。
