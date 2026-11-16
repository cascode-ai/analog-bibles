记号：工艺角 FF、SS、FS（快 NMOS、慢 PMOS）和 SF（慢 NMOS、快 PMOS）；偏置电流 I 固定。

小结：
- 增益：只由 NMOS 的工艺角决定。在 FF 和 FS 下较高，在 SS 和 SF 下较低；PMOS 的工艺角几乎没有影响。
- 输入参考噪声：FS 下最低，SF 下最高；介于两者之间的是 FF 和 SS，当 NMOS 与 PMOS 的变化量相当时，FF 低于 SS。

增益：
- $A_v = -g_{m1}(r_{O1}\|r_{O2})$。
- 在恒定电流下，$r_{O1}$ 和 $r_{O2} = 1/(\lambda I)$ 都不变（λ 不受 $\mu C_{ox}$ 影响），而 $g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I} \propto \sqrt{\mu_nC_{ox}}$。因此 $|A_v| \propto \sqrt{\mu_nC_{ox}}$。
- FF 和 FS：增益较高（提高的倍数为 NMOS 的 $\mu C_{ox}$ 之比的平方根）。SS 和 SF：增益较低。

输入参考热噪声：
- $\overline{v_{n,in}^2} = \dfrac{4kT\gamma}{g_{m1}}\left(1 + \dfrac{g_{m2}}{g_{m1}}\right)$，其中 $g_{m2} = \sqrt{2\mu_pC_{ox}(W/L)_2I}$ 是电流源（current source）器件的跨导（transconductance）。
- FF：$g_{m1}$ 和 $g_{m2}$ 按相同因子增大，因此噪声功率下降，∝ $1/\sqrt{\mu C_{ox}}$。SS：噪声上升。
- FS：最低（$g_{m1}$ 增大，$g_{m2}/g_{m1}$ 减小）。SF：最高。
- 排序：FS 总是最低，SF 总是最高。若 NMOS 与 PMOS 的 $\mu C_{ox}$ 变化量相当（相对变化相同），则 FS < FF < 标称 < SS < SF；否则 FF 与 SS 的先后取决于相对变化量以及 $g_{m2}/g_{m1}$。PMOS 的工艺角只通过 $g_{m2}/g_{m1}$ 项影响噪声。

注：为保持电流恒定，$V_b$ 必须随工艺角变化，例如由电流镜（current mirror）产生。
