# 参考答案 - R031

## 参考答案

### 初值与充电过程

当 $t<0$ 时，$V_X=1\ \mathrm{V}$，$M_1$ 截止。电容的另一端接地，因此 $V_X(0^+)=1\ \mathrm{V}$，没有跳变。栅极阶跃至 3 V 后，源极跟随器对 $C_1$ 充电。导通时始终有 $V_{DS}=V_{GS}$，所以 $M_1$ 保持在饱和区。

令 $\beta=\mu_n C_{ox}W/L$，采用平方律模型，忽略沟道长度调制、亚阈值电流及寄生电容：

$$
V_{TH}(V_X)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right),
\qquad
C_1\frac{dV_X}{dt}=\frac{\beta}{2}[3\ \mathrm{V}-V_X-V_{TH}(V_X)]^2 .
$$

初始阈值为 $V_{TH}=0.8934\ \mathrm{V}$，因此

$$
I_D(0^+)=0.6123\,\beta\,\mathrm{V^2},
\qquad
\left.\frac{dV_X}{dt}\right|_{0^+}
=\frac{0.6123\,\beta\,\mathrm{V^2}}{C_1}.
$$

### 终值与波形

$V_X$ 连续上升，斜率逐渐减小，渐近地趋向下式的根：

$$
3\ \mathrm{V}-V_{X,\infty}=V_{TH}(V_{X,\infty}),
\qquad V_{X,\infty}\approx1.9652\ \mathrm{V}.
$$

剩余电压差在足够长时间后正比于 $1/t$，并非 RC 指数过程。不计体效应时，终值为 2.3 V。图中示例取 $\beta=1\ \mathrm{mA/V^2}$、$C_1=1\ \mathrm{pF}$，对应初始斜率为 $0.6123\ \mathrm{V/ns}$。

![R031：计入体效应后，从1 V连续上升并趋向1.9652 V](/q/R031/solution-waveform.zh.svg)

## 评分说明

+2：阶跃前 $V_X=1$ V，阶跃后连续上升，斜率逐渐减小，并在计入体效应时渐近趋向约 1.97 V（±0.05 V），即 $V_{DD}-V_{TH}(V_X)$，且不会在有限时间内达到该值。+1：终值取 2.3 V（忽略体效应）或将趋近过程称为指数，但其余结论正确。0：机制正确但终值计算错误。−2（断言为事实）：$V_X$ 跳到 3 V 或 4 V、下降，或稳定在 3 V。
