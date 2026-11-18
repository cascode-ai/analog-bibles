$e_{eq} \approx 1.57\ \mathrm{nV}/\sqrt{\mathrm{Hz}}$，$i_{to} \approx 0.164\ \mathrm{pA}/\sqrt{\mathrm{Hz}}$（164 fA/√Hz）。

- 输出短路时，每个器件的栅极参考噪声产生输出电流 $g_{mi}e_{ni}$：$i_{to}^2 = g_{m1}^2e_{n1}^2 + g_{m2}^2e_{n2}^2 + g_{m3}^2e_{n3}^2 + g_{m4}^2e_{n4}^2$。M3 的贡献经电流镜以单位增益到达输出。尾电流管 M5 只产生共模电流，被抑制掉。
- $g_{m1} = g_{m2} = \sqrt{2 \cdot 110\ \mu \cdot 2 \cdot 25\ \mu} = 104.9\ \mu$S，$g_{m3} = g_{m4} = \sqrt{2 \cdot 50\ \mu \cdot 1 \cdot 25\ \mu} = 50\ \mu$S，因此 $(g_{m3}/g_{m1})^2 = 0.227$。
- $e_{eq}^2 = i_{to}^2/g_{m1}^2 = 2e_{n1}^2 + 2(g_{m3}/g_{m1})^2e_{n3}^2 = (2 + 0.455)\times10^{-18} = 2.455\times10^{-18}$ V²/Hz，因此 $e_{eq} = 1.567$ nV/√Hz。
- $i_{to} = g_{m1}e_{eq} = 104.9\ \mu\mathrm{S} \cdot 1.567\ \mathrm{nV}/\sqrt{\mathrm{Hz}} = 1.64\times10^{-13}$ A/√Hz。
