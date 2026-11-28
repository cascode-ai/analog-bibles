# 详细步骤 - R079

### 第 1 步 — 确定偏置与工作区

衬底反偏为 $V_{SB}=V_S-V_B=1\ \mathrm V$。由体效应公式可得

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right)
\approx 0.893375\ \mathrm V.$$

因此 $V_{ov}=V_{GS}-V_{TH}\approx 0.306625\ \mathrm V$，线性区与饱和区在 $V_{DS}=V_{ov}$ 处分界。

阈值公式中的两个根式分别是 $\sqrt{1.9\ \mathrm V}$ 和 $\sqrt{0.9\ \mathrm V}$，阈值升高约 0.193375 V。求小信号参数时，源极和衬底电势都固定，因此衬底偏置通过 $V_{TH}$ 影响结果，衬底小信号电压项为零。

栅极、源极和衬底电势固定，因此扫描 $V_{DS}$ 时 $V_{ov}$ 保持不变。低于 $V_{ov}$ 时工作在线性区，达到或超过 $V_{ov}$ 时工作在饱和区。将忽略沟道长度调制的平方律电流记为 $I_{D0}$，其系数和分段式为

$$\beta=\mu_nC_{ox}\frac WL=(134\ \mu\mathrm{A/V^2})\frac{50}{0.5}=13.4\ \mathrm{mA/V^2}.$$

$$I_{D0}=
\begin{cases}
\beta(V_{ov}V_{DS}-V_{DS}^2/2), & 0\le V_{DS}<V_{ov},\\
\tfrac12\beta V_{ov}^2, & V_{DS}\ge V_{ov}.
\end{cases}$$

### 第 2 步 — 求一阶近似增益

在同一个直流偏置点求偏导。线性区的小信号电阻记为 $r_{ds}=1/g_{ds}$，饱和区的同一物理量记为 $r_O$。

$$g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}},\qquad
g_{ds}=\left.\frac{\partial I_D}{\partial V_{DS}}\right|_{V_{GS},V_{SB}},\qquad A=g_mr_{ds}=\frac{g_m}{g_{ds}}.$$

在线性区，对 $I_{D0}$ 求偏导，得到

$$g_m=\beta V_{DS},\qquad g_{ds}=\beta(V_{ov}-V_{DS}).$$

例如，$V_{DS}=0.10\ \mathrm V$ 小于 $V_{ov}$。代入可得

$$g_m=(13.4\ \mathrm{mA/V^2})(0.10\ \mathrm V)=1.34\ \mathrm{mS},\qquad
g_{ds}\simeq(13.4\ \mathrm{mA/V^2})(0.306625\ \mathrm V-0.10\ \mathrm V)\simeq 2.77\ \mathrm{mS}.$$

两者相除得 0.484 V/V。随着 $V_{DS}$ 增大，分子增大、分母减小，所以这一线性区近似式在趋近 $V_{ov}$ 时发散。

在饱和区，跨导取一阶近似，并保留沟道长度调制产生的输出电导：

$$g_m\simeq\beta V_{ov},\qquad g_{ds}\simeq\lambda I_{D0}=\tfrac12\lambda\beta V_{ov}^2.$$

代入 $V_{ov}\simeq 0.306625\ \mathrm V$，得到电流标度 $\tfrac12\beta V_{ov}^2$ 为 0.630 mA，从而 $r_O=1/g_{ds}\simeq 15.9\ \mathrm{k}\Omega$。跨导与输出电导相除后，$\beta$ 约去，得到虚线：

$$A_0(V_{DS})=
\begin{cases}
V_{DS}/(V_{ov}-V_{DS}), & 0\le V_{DS}<V_{ov},\\
2/(\lambda V_{ov})=65.2, & V_{ov}\le V_{DS}\le 3\ \mathrm V.
\end{cases}$$

### 第 3 步 — 两个工作区都保留调制因子

实线在两个工作区均取 $I_D=I_{D0}(1+\lambda V_{DS})$。将这一乘法因子延伸至线性区后，边界附近的模型也随之确定。用乘积求导法则可得

$$g_m=(1+\lambda V_{DS})\frac{\partial I_{D0}}{\partial V_{GS}},\qquad
g_{ds}=(1+\lambda V_{DS})\frac{\partial I_{D0}}{\partial V_{DS}}+\lambda I_{D0}.$$

分别代入 $I_{D0}$ 的两个分支，得到

$$A(V_{DS})=
\begin{cases}
\dfrac{V_{DS}(1+\lambda V_{DS})}
{(V_{ov}-V_{DS})(1+\lambda V_{DS})+\lambda(V_{ov}V_{DS}-V_{DS}^2/2)}, & 0\le V_{DS}<V_{ov},\\[4pt]
\dfrac{2(1+\lambda V_{DS})}{\lambda V_{ov}}, & V_{ov}\le V_{DS}\le 3\ \mathrm V .
\end{cases}$$

当 $V_{DS}=V_{ov}$ 时，线性区分母中的 $(V_{ov}-V_{DS})(1+\lambda V_{DS})$ 消失，剩下 $\lambda V_{ov}^2/2$，因此左极限与饱和区边界值相等，为 67.2 V/V。进入饱和区后斜率为 $2/V_{ov}$，在 3 V 时增益达到 84.8 V/V。在 0.10 V 的线性区代表点，完整表达式给出 0.478 V/V。

### 曲线图

![本征增益 g_m r_ds 随 V_DS 的变化](/q/R079/solution-intrinsic-gain.zh.svg)

趋近渐近线时，线性区虚线超出图中纵轴量程。实线在分界处连续，斜率发生变化。

零衬底偏置时，一阶近似的饱和区增益为 40 V/V。本题中 $V_{ov}$ 减小，$I_D$ 按平方关系减小，$g_m$ 按线性关系减小，因此 $g_m/I_D$ 和 $g_mr_O$ 增大。
