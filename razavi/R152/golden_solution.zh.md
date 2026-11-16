PMOS 差分对的曲线就是把 NMOS 的曲线关于 $V_{in,CM} = V_{DD}/2$ 作镜像（高共模与低共模的作用互换），输出以地为参考。
- $I_{D1} = I_{D2}$：当 $V_{in,CM} > V_{DD} - |V_{TH1}|$ ≈ 2.2 V 时为零，此时 $M_1$、$M_2$ 截止，$M_3$ 处于深线性区（triode region），$V_P \approx V_{DD}$；当 $V_{in,CM}$ 降到该值以下时上升（$M_3$ 处于线性区，相当于一个电阻）；一旦 $M_3$ 进入饱和区（saturation region），即 $V_{in,CM} \le V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$ 时，保持在 $I_{SS}/2$ 不变。
- $V_P$：输入对截止时等于 $V_{DD}$；$V_{in,CM}$ 较低时，输入对相当于源极跟随器（source follower），$V_P = V_{in,CM} + |V_{GS1}|$，是一条斜率 ≈ 1 的直线，当 $V_{in,CM}$ 接近 $V_{DD} - |V_{TH1}|$ 时向上弯向 $V_{DD}$（这是 NMOS 的 $V_P$ 曲线的镜像，只是向上而不是向下偏移 $|V_{GS1}|$）。
- $V_{out1} = V_{out2} = R_DI_{D}$：当 $V_{in,CM} > V_{DD} - |V_{TH1}|$ 时为 0，随 $V_{in,CM}$ 降低而上升，当 $V_{in,CM} \le V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$ 时恒为 $R_DI_{SS}/2$。
- 有效共模范围的下限：只有当 $V_{in,CM} \ge R_DI_{SS}/2 - |V_{THP}|$ 时（若该值为正），$M_1$、$M_2$ 才保持饱和；低于此值时共模曲线不变，但差分增益下降。因此允许范围为 $R_DI_{SS}/2 - |V_{TH1}| \le V_{in,CM} \le V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$。
- 另外，若 PMOS 的衬底（bulk）接 $V_{DD}$，则当 $V_P$ 降到 $V_{DD}$ 以下时，体效应（body effect）会使 $|V_{TH1}|$ 增大，从而使转折点略有移动。
