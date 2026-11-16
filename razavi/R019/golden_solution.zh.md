在 $V_{in} \approx 1.98$ V 之前 $V_{out} = 0$；高于该值后，PMOS（源极接 $V_{in}$，栅极接 1 V）在饱和区（saturation region）导通，$V_{out} = \tfrac12\beta_pR_1(V_{in} - 1 - |V_{TH}|)^2$ 按二次函数规律上升；若 $\beta_pR_1$ 足够大，使 $V_{out}$ 超过 $1 + |V_{TH}| \approx 1.8$ V，则 $M_1$ 进入线性区（triode region），$V_{out}$ 趋近 $V_{in}$。
- 源极是 $V_{in}$ 节点（电位较高），$V_{SG} = V_{in} - 1$，$V_{BS} = 3 - V_{in}$，$|V_{TH}| = 0.8 + 0.4(\sqrt{3.8 - V_{in}} - \sqrt{0.8})$。
- 导通点：由 $V_{in} - 1 = |V_{TH}|$ 得 $V_{in} \approx 1.98$ V，此时 $|V_{TH}| \approx 0.98$ V；若没有体效应（body effect），导通点为 1.8 V。
- 当 $V_{out} < 1 + |V_{TH}|$ 时（漏极至多比栅极高 $|V_{TH}|$）处于饱和区：$V_{out} = \tfrac12\beta_pR_1(V_{in} - 1 - |V_{TH}|)^2$。在 $V_{in} = 3$ V 时，过驱动电压（overdrive voltage）为 1.2 V（$|V_{TH}| = 0.8$ V），因此 $V_{out} = 0.72\beta_pR_1$（$\beta_p$ 以 A/V²、$R_1$ 以 Ω 为单位时，结果以 V 为单位），除非受到线性区的限制。
- 始终有 $V_{out} \le V_{in}$。
