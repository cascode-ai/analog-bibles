# 详细步骤 - R031

### 模型与初始条件

**思路：** 先用电容电压连续性确定初值，再列出含体效应的饱和区充电方程，并求其零电流极限。题目要求绘制的量为 $V_X(t)$。

原图中 $C_1$ 接在源极与地之间，漏极接 $V_{DD}=3\ \mathrm{V}$，衬底接地。当 $t<0$ 时，$V_{GS}=-1\ \mathrm{V}$，所以 $M_1$ 截止且 $V_X=1\ \mathrm{V}$。忽略寄生电容耦合时，有限的沟道电流不能使电容电压瞬时跳变，因此 $V_X(0^+)=1\ \mathrm{V}$。

采用长沟道平方律模型，令 $\beta=\mu_n C_{ox}W/L$，忽略沟道长度调制与亚阈值电流。当 $t>0$ 时，

$$
V_{GS}=V_{DS}=3\ \mathrm{V}-V_X,\qquad V_{SB}=V_X,
$$

所以导通期间始终满足饱和条件 $V_{DS}\ge V_{GS}-V_{TH}$。

### 充电方程与关键数值

含体效应的阈值公式及电容节点方程为

$$
V_{TH}(V_X)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right),
$$

$$
C_1\frac{dV_X}{dt}=I_D
=\frac{\beta}{2}\left[3\ \mathrm{V}-V_X-V_{TH}(V_X)\right]^2 .
$$

在 $V_X=1\ \mathrm{V}$ 处代入 $V_{TH0}=0.7\ \mathrm{V}$、$\gamma=0.45\ \mathrm{V^{1/2}}$、$2|\phi_F|=0.9\ \mathrm{V}$，得到

$$
V_{TH}(1\ \mathrm{V})=0.8934\ \mathrm{V},\quad
I_D(0^+)=0.6123\,\beta\,\mathrm{V^2},\quad
\left.\frac{dV_X}{dt}\right|_{0^+}
=\frac{0.6123\,\beta\,\mathrm{V^2}}{C_1}.
$$

平衡时过驱动电压为零。解方程 $3\ \mathrm{V}-V_X=V_{TH}(V_X)$，得 $V_{X,\infty}=1.96520\ \mathrm{V}$、$V_{TH}=1.03480\ \mathrm{V}$。体效应使终值低于不计体效应时的 2.3 V。

### 波形形状与计算图

随着 $V_X$ 上升，$V_{GS}$ 和过驱动电压均减小，因此充电斜率逐渐减小。平衡点附近，定义 $\Delta V=V_{X,\infty}-V_X$、$\eta_\infty=\gamma/[2\sqrt{2|\phi_F|+V_{X,\infty}}]$。将过驱动电压线性化，可得

$$
\frac{d\Delta V}{dt}\simeq-\frac{\beta(1+\eta_\infty)^2}{2C_1}(\Delta V)^2 .
$$

因此 $\Delta V$ 在足够长时间后正比于 $1/t$。这是长时间极限的描述；完整曲线由前述非线性方程决定。

图中取示例参数 $\beta=1\ \mathrm{mA/V^2}$、$C_1=1\ \mathrm{pF}$，对该方程积分，得到 $V_X(1\ \mathrm{ns})=1.37323\ \mathrm{V}$、$V_X(10\ \mathrm{ns})=1.83181\ \mathrm{V}$，初始斜率为 $0.6123\ \mathrm{V/ns}$。其他正值 $\beta,C_1$ 按 $C_1/\beta$ 缩放时间轴。

![R031：计算得到的源极跟随器充电波形与渐近线](/q/R031/solution-waveform.zh.svg)

**常见错误：** 栅极阶跃不会直接给这个接地电容的电压加上 3 V。输出没有跳变，充电时保持饱和，并趋近体效应决定的极限而非 3 V。实际器件的亚阈值电流可能使电压继续超过平方律模型的截止极限。
