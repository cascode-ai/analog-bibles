# Golden Solution - R032

## 参考答案

### 初始条件与工作区

当 $t<0$ 时，$V_X=1\ \mathrm{V}$，$M_1$ 截止。接地电容的电压连续，因此 $V_X(0^+)=1\ \mathrm{V}$，没有跳变。栅极阶跃至 3 V 后，$V_{GS}-V_{TH}=2.3\ \mathrm{V}$，且 $V_{DS}=V_X<2.3\ \mathrm{V}$。因此器件在整个放电过程中都处于线性区，不存在饱和区恒流斜坡。

### 放电波形

令 $\beta=\mu_n C_{ox}W/L$，采用平方律模型，忽略寄生电容：

$$
C_1\frac{dV_X}{dt}
=-\beta\left[(2.3\ \mathrm{V})V_X-\frac{V_X^2}{2}\right],
\qquad
\left.\frac{dV_X}{dt}\right|_{0^+}
=-\frac{1.8\,\beta\,\mathrm{V^2}}{C_1}.
$$

当 $t\ge0$ 时，精确解为

$$
V_X(t)=\frac{4.6\ \mathrm{V}}{1+3.6e^{t/\tau}},
\qquad
\tau=\frac{C_1}{\beta(2.3\ \mathrm{V})}.
$$

$V_X$ 从 1 V 连续减小并趋向 0 V。初始衰减慢于 $(1\ \mathrm{V})e^{-t/\tau}$；在足够长时间后，$V_X\simeq(1.2778\ \mathrm{V})e^{-t/\tau}$。图中示例取 $\beta=1\ \mathrm{mA/V^2}$、$C_1=1\ \mathrm{pF}$，对应 $\tau=0.43478\ \mathrm{ns}$，初始斜率为 $-1.8\ \mathrm{V/ns}$。

![R032：计算得到的线性区放电曲线，从1 V无跳变地衰减至0 V](/q/R032/solution-waveform.zh.svg)

## 评分说明

- +2：阶跃前 $V_X$ 保持 1 V；阶跃后晶体管从一开始处于线性区，$V_X$ 连续衰减至 0 V，并给出约为 $C_1R_{on}$ 的时间常数，其中 $R_{on}=1/[\beta(V_{in}-V_{TH})]$。
- +1：衰减方向正确，但未明确工作区，或错误声称起始为饱和区斜坡而终点正确。
- 0：机制基本正确，但时间常数有算术误差。
- −2：断言 $V_X$ 上升、停在非零值，或随输入发生瞬时跳变。
