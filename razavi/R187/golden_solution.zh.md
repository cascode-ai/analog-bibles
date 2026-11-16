一条反相 S 形曲线，$V_{out} = -R_1(I_{D1} - I_{D2})$，从 $+I_{SS}R_1$ 变化到 $-I_{SS}R_1$（若 $I_{SS}R_1/2 < |V_{THP}|$），中心斜率为 $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}R_1$；输出共模电平（common-mode level）保持不变。
- $M_3$、$M_4$ 的栅极接在 $R_1$–$R_2$ 的中点 N，因此两个 PMOS 的 $V_{SG}$ 相同，电流也相同；基尔霍夫电流定律（KCL）于是迫使每个 PMOS 的电流都为 $I_{SS}/2$，并且在整个扫描过程中都有 $V_N = V_{DD} - |V_{GS3}(I_{SS}/2)|$，即负载是自偏置（self-biased）的。
- 对左输出端列 KCL：$V_X - V_N = R_1(I_{SS}/2 - I_{D1})$，右输出端则相反，因此 $V_{out} = -R_1(I_{D1} - I_{D2})$；在完全电流导引（current steering）时（$|V_{in1} - V_{in2}| > \sqrt{2I_{SS}/\beta_n}$），$V_{out} = \pm I_{SS}R_1$。
- 适用条件：高电位一侧的 PMOS 只有在 $V_X - V_N \le |V_{THP}|$ 时才保持在饱和区（saturation region）。若 $I_{SS}R_1/2 > 0.8$ V，该 PMOS 会在完全导引之前进入线性区（triode region），$V_{out}$ 将在较小的幅度处饱和。
