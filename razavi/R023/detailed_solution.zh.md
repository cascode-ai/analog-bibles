# 详细步骤 - R023

**思路：** 由恒定栅极过驱动判断初始工作区，再分段积分电容方程。

### 模型与初始工作区

源极和衬底均接地，因此 $V_{GS}=V_b$、$V_{DS}=V_X$、$V_{TH}=V_{TH0}=0.7\,\mathrm V$。定义 $\beta=\mu_nC_{ox}W/L$，单位为 $\mathrm{A/V^2}$，并令 $U=V_b-V_{TH}$。取 $\lambda=0$ 且忽略漏电，长沟道模型为

$$I_X=\begin{cases}0,&U\le0,\\ \beta U^2/2,&U>0,\ V_X\ge U,\\ \beta(UV_X-V_X^2/2),&U>0,\ 0\le V_X<U.\end{cases}$$

电流箭头离开电容，故 $C_1 dV_X/dt=-I_X$。当 $U\le0$ 时，理想电容电压保持 3 V；当 $U\ge3\,\mathrm V$ 时，初始点已在线性区，等号对应边界。

### $0<U<3\,\mathrm V$ 时的初始饱和阶段

饱和电流恒定，因此

$$V_X=3\,\mathrm V-\frac{\beta U^2}{2C_1}t,\qquad t_1=\frac{2C_1(3\,\mathrm V-U)}{\beta U^2}.$$

在 $t_1$ 时 $V_X=U$，两种电流公式均给出 $\beta U^2/2$，所以电压斜率没有突变。若 $U\ge3\,\mathrm V$，取 $t_1=0$，跳过该阶段。

### 线性区精确解与晚期拖尾

令 $V_a$ 为进入线性区时的电压：经历饱和阶段后 $V_a=U$，初始即在线性区时 $V_a=3\,\mathrm V$。分离 $C_1\dot V_X=-\beta V_X(U-V_X/2)$ 得

$$\ln\!\left[\frac{V_X/(2U-V_X)}{V_a/(2U-V_a)}\right]=-\frac{t-t_1}{\tau},\qquad\tau=\frac{C_1}{\beta U}.$$

令 $A=V_a/(2U-V_a)$、$E=e^{-(t-t_1)/\tau}$，得到

$$V_X=\frac{2UAE}{1+AE},\qquad I_X=\frac{2\beta U^2AE}{(1+AE)^2}.$$

当 $AE\ll1$ 时，$V_X$ 才呈现时间常数为 $R_{on}C_1$ 的指数拖尾，其中 $R_{on}=1/(\beta U)$。终值为零而非 $U$，因为栅极始终高于阈值。经历饱和阶段时 $A=1$，故 $I_X(t_1)=\beta U^2/2$，电流也平滑连接。

### 曲线与代表性数值

图示取 $\beta=1\,\mathrm{mA/V^2}$、$C_1=1\,\mathrm{pF}$。当 $V_b=1.7\,\mathrm V$ 时，$U=1\,\mathrm V$、$I_{sat}=0.5\,\mathrm{mA}$、$t_1=4\,\mathrm{ns}$、$\tau=1\,\mathrm{ns}$；在 5 ns 时精确解给出 $V_X=0.53788\,\mathrm V$、$I_X=0.39322\,\mathrm{mA}$。其余曲线分别示例截止、$t_1=0$ 边界及初始线性区；这些栅压均不是题给值。亚阈值漏电不在该理想模型内。

![答案曲线：voltage](/q/R023/solution-voltage.zh.svg)

![答案曲线：current](/q/R023/solution-current.zh.svg)
