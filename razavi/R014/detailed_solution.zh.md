# 详细步骤 - R014

**思路：** 联立源极节点电流平衡与体效应阈值公式，再判断工作区并求晶体管的本征跨导。

### 源极节点方程与模型

令 $V_S$ 为源极节点电压。理想电流源从该节点抽取 $I_1>0$，栅极电流忽略。忽略结电流时，由 KCL 得

$$I_X+\frac{V_G-V_S}{R_1}=I_1.$$

原图中 $V_G=V_X$，漏极接 $2\,\mathrm V$，衬底接地。因此 $V_{GS}=V_X-V_S$、$V_{DS}=2\,\mathrm V-V_S$、$V_{SB}=V_S$。采用 $\lambda=0$ 的长沟道平方律。在 $V_{SB}$ 非负时，体效应阈值为

$$V_{TH}(V_S)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_S}-\sqrt{2|\phi_F|}\right),$$

其中 $V_{TH0}=0.7\,\mathrm V$、$\gamma=0.45\,\mathrm{V}^{1/2}$、$2|\phi_F|=0.9\,\mathrm V$。定义过驱动 $V_{ov}=V_{GS}-V_{TH}$。本征跨导 $g_m=\partial I_X/\partial V_{GS}$ 是固定 $V_{DS}$ 与 $V_{SB}$ 时的偏导数。

### 饱和区与线性区

当 $V_{DS}\ge V_{ov}>0$ 时，平方律给出 $I_X=\beta V_{ov}^2/2$、$g_m=\beta V_{ov}$。将饱和电流代入 KCL 得

$$\frac{\beta R_1}{2}V_{ov}^2+V_{ov}=I_1R_1-V_{TH}(V_S).$$

给定一个满足 $I_1R_1>V_{TH}(V_S)$ 的 $V_S$，取过驱动的正根。

$$V_{ov}=\frac{\sqrt{1+2\beta R_1[I_1R_1-V_{TH}(V_S)]}-1}{\beta R_1}.$$

再由 $V_X=V_S+V_{TH}+V_{ov}$ 求对应输入。若阈值固定，方程给出的 $V_{ov}$ 恒定，因此两条曲线在饱和段为水平线。

饱和区边界满足 $V_{DS}=V_{ov}$，即 $V_X=2\,\mathrm V+V_{TH}(V_S)$。当 $0<V_{DS}<V_{ov}$ 时，将线性区电流代入 KCL，并由栅压偏导求跨导。

$$I_X=\beta\left(V_{ov}V_{DS}-\frac{V_{DS}^2}{2}\right),\qquad g_m=\beta V_{DS}.$$

电流与 $g_m$ 在此边界均连续。按题给体效应参数，若源极节点电压高于固定的 $2\,\mathrm V$ 端，沟道也不会反向导通。此时 $2\,\mathrm V$ 端成为电位较低的电学源极，阈值约为 $1.039\,\mathrm V$，即使输入达到 3 V，过驱动仍为负。

### 曲线斜率与截止条件

令 $\eta=dV_{TH}/dV_S>0$，并令 $g_{ds}$ 为固定 $V_{GS},V_{SB}$ 时 $I_X$ 对 $V_{DS}$ 的偏导数。饱和区 $g_{ds}=0$，线性区 $g_{ds}=\beta(V_{ov}-V_{DS})$。用 $dV_{GS}=dV_X-dV_S$ 和 $dV_{DS}=-dV_S$ 对 KCL 微分，得到

$$\frac{dV_S}{dV_X}=\frac{1+R_1g_m}{1+R_1[g_m(1+\eta)+g_{ds}]},\qquad
\frac{dI_X}{dV_X}=-\frac{\eta g_m+g_{ds}}{1+R_1[g_m(1+\eta)+g_{ds}]}.$$

两个导通区均有源极电压上升、电流下降。饱和区的 $g_m=\sqrt{2\beta I_X}$ 随电流下降，线性区的 $g_m=\beta V_{DS}$ 随漏源电压下降。$I_1R_1$ 接近阈值时，电流可能明显下降。

截止时 $I_X=g_m=0$，所以 $V_{GS}=I_1R_1$。若由此得到的 $V_S=V_X-I_1R_1$ 非负，且 $I_1R_1\le V_{TH}(V_S)$，则截止解成立。由于阈值随 $V_S$ 上升，起初导通的沟道在该范围达到等式时截止。若截止发生在扫描范围内且 $V_S>0$，则 $0.7\,\mathrm V<I_1R_1\le 1.0348\,\mathrm V$（上端为舍入值），上端由 $I_1R_1=V_{TH}(3\,\mathrm V-I_1R_1)$ 确定。若 $I_1R_1\le0.7\,\mathrm V$，则在 $V_S\ge0$ 的范围内均截止。

### 计算曲线与模型限制

截止示例取 $I_1=0.1\,\mathrm{mA}$、$R_1=9\,\mathrm{k\Omega}$、$\beta=2\,\mathrm{mA/V^2}$。当 $V_S=0$ 时，由饱和方程求得 $V_{ov}=0.1035\,\mathrm V$，从而 $V_X=0.8035\,\mathrm V$、$I_X=0.01072\,\mathrm{mA}$、$g_m=0.2071\,\mathrm{mS}$。截止时由 $V_{TH}(V_S)=0.9\,\mathrm V$ 得 $V_S=1.0408\,\mathrm V$、$V_X=1.9408\,\mathrm V$。

线性区示例取 $I_1=1\,\mathrm{mA}$、$R_1=2.5\,\mathrm{k\Omega}$、$\beta=0.4\,\mathrm{mA/V^2}$。联立相同的 KCL 与 $V_{DS}=V_{ov}$，得到进入线性区时 $V_X=2.8840\,\mathrm V$。当输入为 3 V 时，线性区解为 $V_S=1.0477\,\mathrm V$、$I_X=0.2191\,\mathrm{mA}$、$g_m=0.3809\,\mathrm{mS}$。

![两组示例的漏极电流随输入电压变化](/q/R014/solution-r014.zh.svg)

![同两组示例的本征跨导随输入电压变化](/q/R014/solution-r014-gm.zh.svg)

阴影对应理想电流平衡要求 $V_S<0$ 的范围。此时源衬底结正偏，结电流取决于二极管参数，实际电流源也有顺从电压要求。绘出的 $V_S\ge0$ 区段采用忽略结电流的理想电流源模型，实际电流源在这一区段也可能需要额外电压裕量。
