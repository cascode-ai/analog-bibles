# 详细步骤 - R022

**思路：** 识别电位较低的沟道端，列输出节点 KCL，并将仅含 MOS 沟道的解与结电流主导区间分开。

### 模型与端电压

对称 NMOS 的工作源极是电位较低的沟道端，不由图中源极标记固定。仅含沟道电流时，电阻使 $V_{out}<2\,\mathrm V$，故

$$V_G=V_D=2\,\mathrm V,\quad V_S=V_{out},\quad V_B=V_{in}.$$

采用长沟道模型，取 $\lambda=0$，定义 $\beta=\mu_nC_{ox}W/L$，单位为 $\mathrm{A/V^2}$。体效应公式为

$$V_{TH}=V_{TH0}+\gamma(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}),\quad V_{SB}=V_{out}-V_{in}.$$

因 $V_{DS}=V_{GS}=2\,\mathrm V-V_{out}$，阈值和过驱动均为正的导通分支处于饱和区。这不表示后续结电流主导区间也能用同一工作区标签描述。

### KCL、输出电平与斜率

由饱和电流 $I_D=\beta(V_{GS}-V_{TH})^2/2$ 及 $I_D=V_{out}/R_1$，得到

$$V_{out}+V_{TH}(V_{out}-V_{in})+\sqrt{\frac{2V_{out}}{\beta R_1}}=2\,\mathrm V.$$

根号取正。代入 $V_{TH0}=0.7\,\mathrm V$、$\gamma=0.45\,\mathrm{V^{1/2}}$、$2|\phi_F|=0.9\,\mathrm V$，逐点求解。代表性代入：$V_{in}=0$、$\beta R_1=10\,\mathrm{V^{-1}}$ 时，$V_{out}=0.75808\,\mathrm V$、$V_{TH}=0.85254\,\mathrm V$，过驱动为 0.38938 V。轻载极限满足 $V_{out}+V_{TH}=2\,\mathrm V$，初始输出为 1.09181 V。

定义 $g_m=\beta(V_{GS}-V_{TH})$、$\eta=\gamma/[2\sqrt{0.9\,\mathrm V+V_{SB}}]$ 及 $g_{mb}=\eta g_m$。对 KCL 求微分得

$$\frac{dV_{out}}{dV_{in}}=\frac{g_{mb}}{g_m+g_{mb}+1/R_1}.$$

斜率为正且小于 1。在该模型内，输入增加时 $\eta$ 与 $g_m$ 增大；等价地，斜率分母形式 $1+(1+1/(g_mR_1))/\eta$ 减小。因此有效 MOS 区段内 $d^2V_{out}/dV_{in}^2>0$。

### 结偏置限制与作图

当 $V_{in}=V_{out}$ 时，源体结为零偏。图示 $\beta R_1=10,100,\infty\,\mathrm{V^{-1}}$ 三个分支约在 0.881 V、1.148 V、1.300 V 输入处达到该条件，故曲线保守地止于这些端点。更高输入使源体结正偏，是否可忽略其电流取决于负载、结参数和温度；衬底高于 2 V 后，与固定 2 V 端之间的结也正偏。根号仍有定义并不保证模型有效，不能用统一的二极管压降臆造后续曲线。

![答案曲线：transfer](/q/R022/solution-transfer.zh.svg)
