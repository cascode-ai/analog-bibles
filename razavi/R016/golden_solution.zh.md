当 $V_{in}\le0.7\,\mathrm{V}$ 时，输出为零。此后输出以小于 1 的斜率上升。对有限正 $\beta R_1$，输出低于 $1\,\mathrm{V}$。输出端是电学源极，$1\,\mathrm{V}$ 端为负载供电。

$$V_{GS}=V_{in}-V_{out},\quad V_{DS}=1\,\mathrm{V}-V_{out},\quad V_{SB}=V_{out}.$$

按题给体效应参数计算阈值。令过驱动 $V_{ov}=V_{GS}-V_{TH}(V_{out})$。忽略沟道长度调制，由 KCL 得

| 工作区 | 条件 | 输出方程 |
|---|---|---|
| 截止区 | $V_{ov}\le0$ | $V_{out}=0$ |
| 饱和区 | $0<V_{ov}\le V_{DS}$ | $V_{out}=\beta R_1 V_{ov}^2/2$ |
| 线性区 | $V_{ov}>V_{DS}$ | $V_{out}=\beta R_1(V_{ov}V_{DS}-V_{DS}^2/2)$ |

在工作区交界处，$V_{ov}=V_{DS}$。记该点的输入和输出为 $V_{in,k}$ 和 $V_{out,k}$。

$$V_{out,k}=V_D\left(1-\frac{2}{1+\sqrt{1+2\beta R_1 V_D}}\right),\qquad
V_{in,k}=V_D+V_{TH}(V_{out,k}),\quad V_D=1\,\mathrm{V}.$$

转折输入的两个极限为 $1.700$ 和 $1.893\,\mathrm{V}$。曲线以零斜率离开零输出，在进入线性区后继续向 $1\,\mathrm{V}$ 上限上升。$V_{in}=3\,\mathrm{V}$ 时接近上限的程度取决于 $\beta R_1$。

![三组器件与负载参数下的输出电压随输入电压变化曲线](/q/R016/solution-r016.zh.svg)
