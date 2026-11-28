# 参考答案 - R080

## 参考答案

源极接地时 $V_{SB}=-V_B$。$V_B$ 越负，体效应使 $V_{TH}$ 越高。令 $V_{ov}=V_{GS}-V_{TH}$，$\beta=\mu_nC_{ox}W/L$。若起始时满足 $V_{DS}\ge V_{GS}-V_{TH0}>0$，则只要 $V_{ov}>0$ 就保持饱和。

$$
\begin{aligned}
V_{TH}&=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|-V_B}-\sqrt{2|\phi_F|}\right),\\
V_{B,\mathrm{off}}&=2|\phi_F|-\left[\sqrt{2|\phi_F|}+\frac{V_{GS}-V_{TH0}}{\gamma}\right]^2,\\
g_m&=\beta V_{ov},\qquad r_O=\frac{2}{\lambda\beta V_{ov}^2},\qquad
g_mr_O=\frac{2}{\lambda V_{ov}}.
\end{aligned}
$$

截止前，$g_m$ 的下降逐渐放缓并趋于零，$r_O$ 和 $g_mr_O$ 则发散。理想截止区内 $g_m=g_{ds}=0$，所以 $r_O$ 形式上为无穷大，$g_mr_O$ 无定义。图示偏置的截止点为 $V_{B,\mathrm{off}}\approx-3.343\ \mathrm V$。

![栅跨导 g_m](/q/R080/solution-transconductance.zh.svg)

![输出电阻 r_O](/q/R080/solution-output-resistance.zh.svg)

![本征增益 g_m r_O](/q/R080/solution-intrinsic-gain.zh.svg)

## 评分说明

- +2 分。说明截止前 $g_m$ 减小、$r_O$ 和 $g_mr_O$ 增大，并用体效应导致 $V_{TH}$ 升高来解释上述趋势，同时指出在有限负衬底电压处截止，或指出阈值遵循平方根关系且变化率逐渐减小。
- +1 分。三个趋势及体效应解释正确，缺少截止或曲线形状细节。
- 0 分。三个趋势中答对两个。
- −2 分。断言 $g_m$ 增大、$r_O$ 减小、负衬底偏置使 $V_{TH}$ 降低，或 $g_mr_O$ 恒定。

