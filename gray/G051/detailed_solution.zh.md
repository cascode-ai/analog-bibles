# 详细步骤 - G051

把每个合格成品成本中的各因子都表示为管芯面积的函数：每片晶圆的总管芯数由 [图 1] 中的直线给出，晶圆分选成品率由指数模型给出。用单位成本除以管芯面积，就得到成品中单位面积硅的成本，其中管芯成本项随面积增大，封装项随面积减小。

### 第 1 步 — 每片晶圆的总管芯数

[图 1] 中的总管芯数曲线在双对数坐标上是斜率为 −1 的直线，因此 $N$ 与管芯面积成反比：

$$
N=\frac KA ,
$$

其中 $K$ 为晶圆的可用面积。由 4 英寸直线在 $10^3$ mil² 处为 12,000 个管芯，得 $K\approx1.2\times10^7$ mil²；同理 8 英寸为 $K\approx4.7\times10^7$ mil²，12 英寸为 $\approx1.1\times10^8$ mil²。

### 第 2 步 — 每个合格成品的成本

晶圆成本由通过晶圆分选、管芯制造和最终测试的管芯分摊，而封装测试费用对每个封装的管芯都要支付：

$$
C=\frac{C_w}{NY_{ws}Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}},\qquad Y_{ws}=e^{-A/A_0}.
$$

代入 $N=K/A$ 并除以 $A$：

$$
\frac CA=\frac{C_w\,e^{A/A_0}}{K\,Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}\,A}.
$$

### 第 3 步 — 三种工艺

$A$ 和 $K$ 以 mil² 为单位，结果为每 mil² 的成本：

$$
\begin{aligned}
\text{A:}\quad \frac CA&=\frac{C_w\,e^{A/37{,}000}}{K\,Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}A},\\
\text{B:}\quad \frac CA&=\frac{C_w\,e^{A/20{,}000}}{K\,Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}A},\\
\text{C:}\quad \frac CA&=\frac{C_w\,e^{A/12{,}000}}{K\,Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}A},
\end{aligned}
$$

4 英寸晶圆取 $K=1.2\times10^7$ mil²。

### 第 4 步 — 解释

第一项（受管芯成本限制）随面积指数增大；第二项（受封装限制）按 $1/A$ 减小。令 $d(C/A)/dA=0$，得单位面积成本最低的管芯面积：

$$
\frac{C_w\,e^{A/A_0}}{KY_{df}Y_{ft}A_0}=\frac{C_p}{Y_{ft}A^2}\quad\Rightarrow\quad A^2e^{A/A_0}=\frac{C_pKY_{df}A_0}{C_w} .
$$

成品率越高（$A_0$ 越大）或封装费用越高，最优管芯面积越大。例如取 $C_w=\mathrm{USD}\ 100$、$C_p=\mathrm{USD}\ 1$、$Y_{df}=0.9$、$Y_{ft}=0.8$ 和 4 英寸晶圆，工艺 A、B、C 的最小值分别在约 38,000、25,000 和 17,000 mil² 处。
