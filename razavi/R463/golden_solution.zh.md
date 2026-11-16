$|A_v| = g_{mb1}(r_{O1}\|r_{O3}) = \eta\,g_{m1}(r_{O1}\|r_{O3})$，其中 $\eta = \dfrac{\gamma}{2\sqrt{2|\phi_F| + V_{BS}}}$，$V_{BS} = V_{in,CM} - V_{DD}$（阱与源极之间的电压）。当 $V_{in,CM} = V_{DD}$ 时：η = 0.4/(2√0.8) ≈ 0.22，因此增益只有用相同器件构成的栅极输入差分对（differential pair）的五分之一左右。

- 栅极电压固定时，衬底只能通过阈值电压（threshold voltage）来控制电流：$|V_{TH}| = |V_{TH0}| + \gamma(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|})$，因此体跨导（body transconductance）为 $g_{mb} = \eta g_m$。
- 提高阱电压会使 $|V_{TH}|$ 增大、漏极电流减小，因此每一半电路都相当于一个跨导为 $g_{mb1}$、负载为 $r_{O1}\|r_{O3}$ 的共源级（common-source stage），从每个阱到其自身的漏极是反相的；差模增益为 $g_{mb1}(r_{O1}\|r_{O3})$。
- 电路中没有尾电流源（tail current source）：源极位于交流地（$V_{DD}$），因此上述结果直接适用于每一半电路。
