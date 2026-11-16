小结：
- 偏置电流：∝ $\mu_nC_{ox}$。
- 增益：在各工艺角下的表现与恒定电流偏置时相同，$|A_v| = \sqrt{K_n/K_p}$（FS 下最高，SF 下最低；当 NMOS 与 PMOS 的 $\mu C_{ox}$ 变化倍数相当时，在 FF 和 SS 下 ≈ 不变）。
- 噪声：比恒定电流偏置时变化更剧烈，∝ $1/(\mu_nC_{ox})$，而不是 $1/\sqrt{\mu_nC_{ox}}$。FS 总是最低，SF 总是最高；当 NMOS/PMOS 的变化量相当时，排序为 FS < FF < 标称 < SS < SF，否则 FF 和 SS 的位置取决于相对变化量。
- 下文关于 FF 和 SS 的陈述均假设 NMOS 与 PMOS 的变化量相当。

记号：$K_n = \mu_nC_{ox}(W/L)_1$，$K_p = \mu_pC_{ox}(W/L)_2$，$V_{ov1}$ 固定。

增益：
- 电流：$I = \tfrac12K_nV_{ov1}^2$，正比于 NMOS 的 $\mu C_{ox}$；功耗也以同样的方式变化。
- $g_{m1} = K_nV_{ov1} \propto \mu_nC_{ox}$（线性关系，而不是平方根关系）。
- $g_{m2} = \sqrt{2K_pI} = V_{ov1}\sqrt{K_pK_n}$。
- $|A_v| \approx g_{m1}/g_{m2} = \sqrt{K_n/K_p}$，与电流无关。在 FF 和 SS 下它 ≈ 不变，FS 给出最高增益，SF 给出最低增益。

噪声：
- $\overline{v_{n,in}^2} = \dfrac{4kT\gamma}{g_{m1}}\left(1 + \dfrac{g_{m2}}{g_{m1}}\right) = \dfrac{4kT\gamma}{K_nV_{ov1}}\left(1 + \sqrt{K_p/K_n}\right)$。
- FF：噪声功率按 $1/\mu C_{ox}$ 的比例下降，比恒定电流时的平方根关系改善得更多。SS：按同样的比例上升。
- FS：最低。SF：最高。
- 各工艺角之间的差异比恒定电流偏置时更大。

输出直流电平：
- $V_{out} = V_{DD} - |V_{TH2}| - V_{ov1}\sqrt{K_n/K_p}$。
- FS 使输出降低，减小了 $M_1$ 的 $V_{DS}$ 裕量，甚至可能使其趋向线性区（triode region）；SF 使输出升高。FF 和 SS 下输出不变。
