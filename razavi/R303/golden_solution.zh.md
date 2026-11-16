$Z_{in} = 0$，$\dfrac{V_{out}}{V_{in}} = -\dfrac{1}{g_{m2}R_S}$。
- $M_1$ 是共栅（common-gate）NMOS 管（源极接 X，栅极接 $V_{b2}$，漏极接输出端）；$M_2$ 是 NMOS 源极跟随器（source follower），漏极接 $V_{DD}$，栅极接 $V_{out}$，源极接 X。
- 输出端的基尔霍夫电流定律（KCL）：$I_1$ 理想且 $M_2$ 的栅极开路，迫使 $M_1$ 的电流 $-g_{m1}v_X$ 为零：$v_X = 0$，$Z_{in} = 0$。
- X 点的 KCL：$i_{in} + g_{m2}(v_{out} - v_X) - g_{m1}v_X = 0 \Rightarrow v_{out} = -i_{in}/g_{m2} = -V_{in}/(g_{m2}R_S)$。
- 注：这里的环路（X 升高 → $M_1$ 电流减小 → 输出升高 → 跟随器把 X 拉高）是正反馈（positive feedback）；若 $r_O$ 有限，$Z_{in} = -r_{O2}/(g_{m1}g_{m2}r_{O1}r_{O2} - 1) < 0$，当 λ → 0 时趋于 $0^-$。理想的小信号结果是 $Z_{in} = 0$，但这样的偏置点在实际中是不稳定的。
