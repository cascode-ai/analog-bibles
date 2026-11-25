# 详细步骤 - R013

**思路：** 用源极节点 KCL 求浮动源极电压，并区分本征跨导与扫描电流曲线的斜率。

### 模型与节点方程

采用长沟道平方律模型，令 $\lambda=0$，假设电流源理想且结电流可忽略。定义 $\beta=\mu_n C_{ox}W/L$、源极电压 $V_S$ 和过驱动电压 $V_{ov}=V_{GS}-V_{TH}$。体效应公式为

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

本题 $V_{GS}=2\,\mathrm V-V_S$、$V_{DS}=V_X-V_S$、$V_{SB}=V_S$；$V_{TH0}=0.7\,\mathrm V$、$\gamma=0.45\,\mathrm{V^{1/2}}$、$2|\phi_F|=0.9\,\mathrm V$。$R_1$ 跨接漏源，因此

$$I_X+\frac{V_X-V_S}{R_1}=I_1,\qquad
I_X=\begin{cases}
\beta(V_{ov}V_{DS}-V_{DS}^2/2),&0\le V_{DS}<V_{ov},\\
\beta V_{ov}^2/2,&V_{DS}\ge V_{ov}>0,\\
0,&V_{ov}\le0.
\end{cases}$$

给定 $R_1,I_1,\beta$ 后，在模型适用范围内联立即可求得曲线。

### 工作区边界

在 $V_X=0$ 时，KCL 要求 $V_S<0$。仅考虑沟道的模型给出线性区工作和 $0<I_X<I_1$，不能断言沟道必定承担大部分 $I_1$。若 $V_{DS}\ll V_{ov}$，由 $R_{on}\simeq1/(\beta V_{ov})$ 得 $I_X\simeq I_1R_1/(R_1+R_{on})$。

进入饱和区的边界为 $V_{DS}=V_{ov}$，即 $V_X=2\,\mathrm V-V_{TH}(V_S)$。由 KCL 得

$$\frac{\beta}{2}V_{ov}^2+\frac{V_{ov}}{R_1}=I_1,\qquad
V_{ov}=\frac{\sqrt{1+2\beta I_1R_1^2}-1}{\beta R_1}.$$

再解 $2\,\mathrm V-V_S-V_{TH}(V_S)=V_{ov}$ 得边界源极电压。饱和要求漏极电压不低于栅极电压减阈值电压。

截止时，代入题给体效应参数求解 $2\,\mathrm V-V_{S,off}=V_{TH}(V_{S,off})$：

$$V_{S,off}=1.0918\,\mathrm V,\qquad V_{X,off}=1.0918\,\mathrm V+I_1R_1.$$

此后 $I_X=g_m=0$，$V_S=V_X-I_1R_1$。只有 $I_1R_1\le1.9082\,\mathrm V$ 时，0–3 V 扫描才能达到截止。

### 电流斜率与本征跨导

定义 $G_1=1/R_1$，$g_m=\partial I_X/\partial V_{GS}$（固定 $V_{DS},V_{BS}$），$g_{mb}=\partial I_X/\partial V_{BS}$，$g_{ds}=\partial I_X/\partial V_{DS}$。栅极和衬底电压固定，对 KCL 微分得

$$[g_{ds}+G_1](dV_X-dV_S)-(g_m+g_{mb})dV_S=0,$$

$$\frac{dI_X}{dV_X}=-\frac{G_1(g_m+g_{mb})}{g_m+g_{mb}+g_{ds}+G_1}<0.$$

因此导通时 $I_X$ 单调下降，并在截止处以零斜率趋于零。所求 $g_m$ 并非 $dI_X/dV_X$：

$$g_m=\begin{cases}\beta V_{DS},&\text{线性区},\\\beta V_{ov}=\sqrt{2\beta I_X},&\text{饱和区},\\0,&\text{截止区}.\end{cases}$$

线性区中 $V_{DS}=(I_1-I_X)R_1$ 增大，故 $g_m$ 上升；在饱和边界达到峰值，此后下降。

### 计算示例与适用限制

仅为作图示例，取 $I_1=1\,\mathrm{mA}$、$R_1=1\,\mathrm{k\Omega}$、$\beta=1\,\mathrm{mA/V^2}$。在工作区边界，二次方程给出 $V_{ov}=0.73205\,\mathrm V$，从而 $V_X=1.20050\,\mathrm V$、$I_X=0.26795\,\mathrm{mA}$、$g_m=0.73205\,\mathrm{mS}$。截止点为 $V_X=2.09181\,\mathrm V$。

仅考虑沟道的延拓在 $V_X=0$ 给出 $V_S=-0.38512\,\mathrm V$、$I_X=0.61488\,\mathrm{mA}$、$g_m=0.38512\,\mathrm{mS}$。此时源-衬底结正偏，缺少结参数，不能确认其电流可忽略。虚线区间止于 $V_X=0.48616\,\mathrm V$，此处 $V_S=0$。实际接地电流源还需要顺从电压，未必能在负 $V_S$ 下工作。因此低输入段仅是有条件的模型延拓，不是已验证的实物预测。

![模型曲线与适用范围](/q/R013/solution-r013.zh.svg)
