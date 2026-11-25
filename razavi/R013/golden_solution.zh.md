采用平方律模型（$\lambda=0$），假设电流源理想、结电流可忽略。令 $\beta=\mu_nC_{ox}W/L$、$V_{ov}=2\,\mathrm V-V_S-V_{TH}(V_S)$，阈值由题给体效应公式决定，$V_{SB}=V_S$。

$$I_X=I_1-\frac{V_{DS}}{R_1},\qquad V_{DS}=V_X-V_S.$$

| 工作区 | 电流与本征跨导 |
|---|---|
| 线性区：$0\le V_{DS}<V_{ov}$ | $I_X=\beta(V_{ov}V_{DS}-V_{DS}^2/2)$ 下降；$g_m=\beta V_{DS}$ 上升。 |
| 饱和区：$V_{DS}\ge V_{ov}>0$ | $I_X=\beta V_{ov}^2/2$ 下降；$g_m=\sqrt{2\beta I_X}$ 下降。 |
| 截止区：$V_{ov}\le0$ | $I_X=g_m=0$。 |

在 $V_X=0$，仅考虑沟道的模型给出线性区工作和 $0<I_X<I_1$，不一定有 $I_X\approx I_1$。$g_m$ 在 $V_X=2\,\mathrm V-V_{TH}(V_S)$ 处达到峰值，峰值由 $R_1,I_1,\beta$ 决定。

$$2\,\mathrm V-V_{S,off}=V_{TH}(V_{S,off}),\quad V_{X,off}=1.0918\,\mathrm V+I_1R_1.$$

只有该值不超过 3 V 时扫描才达到截止，$I_X$ 以零斜率趋于零。低输入时 $V_S<0$，需核实结电流和电流源顺从范围；虚线仅表示有条件的延拓，图中参数仅作示例。

![模型曲线与适用范围](/q/R013/solution-r013.zh.svg)
