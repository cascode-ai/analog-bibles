# 详细步骤 - G081

把每个约束转化为某个设计变量的界限。饱和要求限定过驱动电压 $V_{ov}=V_{GS}-V_t$。输出灵敏度要求限定 $\lambda$，再经 $\lambda=(dX_d/dV_{DS})/L_{\text{eff}}$ 限定沟道长度。电流随后确定 $W/L_{\text{eff}}$。最后把栅面积写成 $V_{ov}$ 和 $L_{\text{eff}}$ 的函数，看它在允许范围的哪一端最小。

### 第 1 步 — 约束 (i)：最大过驱动电压

当 $V_{DS2}\ge V_{GS}-V_t=V_{ov}$ 时 $M_2$ 处于饱和区。它的源极接地，所以 $V_{DS2}=V_{OUT}$。要在 $V_{OUT}=0.2$ V 时仍保持饱和，必须

$$
V_{ov}\le0.2\ \mathrm V .
$$

### 第 2 步 — 约束 (iii)：最小沟道长度

在饱和区、$V_{GS}$ 固定时 $I_{OUT}\propto1+\lambda V_{OUT}$，而二极管连接的 $M_1$ 使栅源电压保持不变。$V_{OUT}$ 变化 1 V 时，

$$
\frac{\Delta I_{OUT}}{I_{OUT}}=\frac{\lambda\,\Delta V_{OUT}}{1+\lambda V_{OUT}}\le\lambda\,(1\ \mathrm V)\le0.01
\quad\Rightarrow\quad\lambda\le0.01\ \mathrm{V^{-1}}.
$$

等价地，在 50 µA 下 $r_o=1/(\lambda I_D)\ge2\ \mathrm{M\Omega}$。由题给的沟道长度调制模型，

$$
\lambda=\frac{dX_d/dV_{DS}}{L_{\text{eff}}}\le0.01\ \mathrm{V^{-1}}
\quad\Rightarrow\quad
L_{\text{eff}}\ge\frac{0.02\ \mu\mathrm{m/V}}{0.01\ \mathrm{V^{-1}}}=2\ \mu\mathrm m .
$$

### 第 3 步 — 面积与设计变量的关系

约束 (ii) 固定了电流。确定尺寸时忽略很小的 $1+\lambda V_{DS}$ 因子，

$$
I_D=\frac{k'}2\frac W{L_{\text{eff}}}V_{ov}^2
\quad\Rightarrow\quad
W=\frac{2I_D}{k'V_{ov}^2}L_{\text{eff}} .
$$

单个器件的栅面积为 $W\times L$，其中绘制长度（drawn length）$L_{\text{drwn}}=L_{\text{eff}}+2L_d$：

$$
A=W\,L_{\text{drwn}}=\frac{2I_D}{k'V_{ov}^2}\,L_{\text{eff}}\,(L_{\text{eff}}+2L_d).
$$

$A$ 随 $L_{\text{eff}}$ 增大而增大，并按 $1/V_{ov}^2$ 减小。沟道越长，同样的电流需要按比例更宽的器件，所以面积大致按 $L^2$ 增长。因此最小值出现在允许的最大过驱动电压和允许的最短沟道长度处：

$$
V_{ov}=0.2\ \mathrm V,\qquad L_{\text{eff}}=2\ \mu\mathrm m .
$$

### 第 4 步 — 尺寸与面积

$$
\frac W{L_{\text{eff}}}=\frac{2(50\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=\frac{100\ \mu\mathrm A}{7.76\ \mu\mathrm A}=12.89,
\qquad W=12.89\,(2\ \mu\mathrm m)=25.8\ \mu\mathrm m,
$$

$$
L_{\text{drwn}}=L_{\text{eff}}+2L_d=2\ \mu\mathrm m+2(0.09\ \mu\mathrm m)=2.18\ \mu\mathrm m .
$$

两个晶体管都取 $W=25.8\ \mu\mathrm m$、$L=2.18\ \mu\mathrm m$（绘制尺寸），$V_{GS}=V_t+V_{ov}=0.8$ V。

| 面积 | 每个器件 | 总计（$M_1+M_2$） |
|---|---|---|
| $W\times L_{\text{drwn}}$ | 56.2 µm² | 112 µm² |
| $W\times L_{\text{eff}}$ | 51.5 µm² | 103 µm² |

### 第 5 步 — 验证各项约束

- (i)：$V_{DS,\text{sat}}=V_{ov}=0.2$ V，因此 $V_{OUT}\ge0.2$ V 时 $M_2$ 处于饱和区。
- (ii)：按设计 $I_{OUT}=50\ \mu\mathrm A$。电流镜给出 $I_{OUT}/I_{IN}=(1+\lambda V_{OUT})/(1+\lambda V_{GS})$，所以 $V_{OUT}=V_{GS}=0.8$ V 时 $I_{OUT}=I_{IN}$。
- (iii)：$\lambda=0.02/2=0.01\ \mathrm{V^{-1}}$，$r_o=1/(0.01\ \mathrm{V^{-1}}\cdot50\ \mu\mathrm A)=2\ \mathrm{M\Omega}$。1 V 的变化使电流改变 0.5 µA；精确比值，例如 $V_{OUT}$ 从 1 V 变到 2 V 时的 $(1+0.02)/(1+0.01)=1.0099$，略小于 1 %。
