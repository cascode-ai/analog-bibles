记号：工艺角 FF、SS、FS（快 NMOS、慢 PMOS）和 SF（慢 NMOS、快 PMOS）；$K_n = \mu_nC_{ox}(W/L)_1$，$K_p = \mu_pC_{ox}(W/L)_2$，偏置电流 I 固定。

小结：
- 增益：在 FF 和 SS 下基本不变，在 FS 下最高，在 SF 下最低。
- 输入参考噪声：FS 下最低，其次是 FF（低于标称值），然后是 SS（高于标称值），SF 下最高。

增益：
- $A_v \approx -g_{m1}/g_{m2}$（计入 $r_O$ 时为 $-g_{m1}(g_{m2}^{-1}\|r_{O1}\|r_{O2})$，基本相同）。
- 在恒定电流下，$g_m = \sqrt{2KI}$，因此 $|A_v| = \sqrt{K_n/K_p}$。
- FF 和 SS：两个 $\mu C_{ox}$ 朝同一方向变化，因此增益基本保持标称值（若相对变化量相等，则完全不变）。
- FS：增益最高（$K_n$ 较大，$K_p$ 较小）。SF：增益最低。

输入参考热噪声（单位带宽内，两个器件的沟道噪声系数 γ 相同）：
- $\overline{v_{n,in}^2} = \dfrac{4kT\gamma}{g_{m1}} + \dfrac{4kT\gamma\,g_{m2}}{g_{m1}^2} = \dfrac{4kT\gamma}{g_{m1}}\left(1 + \dfrac{g_{m2}}{g_{m1}}\right) = \dfrac{4kT\gamma}{g_{m1}}\left(1 + \dfrac{1}{|A_v|}\right)$，其中 $g_{m1} \propto \sqrt{\mu_nC_{ox}}$，$g_{m2}/g_{m1} \propto \sqrt{\mu_pC_{ox}/\mu_nC_{ox}}$。
- FF：两个 $g_m$ 按相同的平方根因子增大，比值不变，因此噪声功率下降（∝ $1/\sqrt{\mu C_{ox}}$）。
- SS：噪声上升。
- FS：噪声最低（$g_{m1}$ 增大，负载的贡献减小）。
- SF：噪声最高（$g_{m1}$ 减小，负载的贡献增大）。
- 排序：FS < FF < 标称 < SS < SF。

副作用：在恒定电流下，快工艺角的过驱动电压（overdrive voltage）变小，因此输出直流电平 $V_{DD} - |V_{GS2}|$ 在快 PMOS 工艺角下升高，在慢 PMOS 工艺角下降低。
