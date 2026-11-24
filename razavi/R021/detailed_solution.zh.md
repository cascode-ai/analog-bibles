# 详细步骤 - R021

**思路：** 把衬底看作输入。先在给定负载下求 MOS-only 工作点，再标出源-衬底结使该模型失效的范围。

### 模型与端电压

栅极和物理源极分别固定在 2 V 和 1 V：
$$V_{GS}=1\,\mathrm V,\qquad V_{SB}=1\,\mathrm V-V_{in},\qquad V_{out}=3\,\mathrm V-R_1I_D.$$
定义 $\beta=\mu_nC_{ox}W/L$，单位为 $\mathrm{A/V^2}$，取 $\lambda=0$。忽略结电流时，
$$V_{TH}=0.7\,\mathrm V+0.45\,\mathrm{V^{1/2}}\left(\sqrt{1.9\,\mathrm V-V_{in}}-\sqrt{0.9\,\mathrm V}\right).$$

### 饱和支路与负载边界

饱和区满足
$$I_D=\frac{\beta}{2}(1\,\mathrm V-V_{TH})^2,\qquad V_{out}=3\,\mathrm V-R_1I_D,$$
以及
$$V_{out}\ge2\,\mathrm V-V_{TH}.$$

在 $V_{in}=0$ 时，$V_{TH}=0.8934\,\mathrm V$，$V_{ov}=1-V_{TH}=0.1066\,\mathrm V$。代入饱和条件得
$$\beta R_1\le\frac{2(1+V_{TH})}{V_{ov}^2}=333.1\,\mathrm{V^{-1}}.$$
在 $V_{in}=1.0\,\mathrm V$ 时，对应上限为 $37.8\,\mathrm{V^{-1}}$。在 $V_{in}=1.5\,\mathrm V$ 时，$V_{TH}=0.5577\,\mathrm V$、$V_{ov}=0.4423\,\mathrm V$，上限为 $15.9\,\mathrm{V^{-1}}$。因此 $\beta R_1=10\,\mathrm{V^{-1}}$ 的负载在 1.5 V 内保持饱和，而 $\beta R_1=30\,\mathrm{V^{-1}}$ 随输入升高可能进入线性区。

取轻载示例 $\beta R_1=10\,\mathrm{V^{-1}}$，有
$$V_{out}(0)=3-\frac{10}{2}(0.1066\,\mathrm V)^2=2.943\,\mathrm V,$$
而在 $V_{in}=1.5\,\mathrm V$ 时，
$$V_{out}=3-\frac{10}{2}(0.4423\,\mathrm V)^2=2.022\,\mathrm V.$$

### 线性区支路

饱和不等式失效后，使用
$$I_D=\beta\left[(1\,\mathrm V-V_{TH})(V_{out}-1\,\mathrm V)-\frac{(V_{out}-1\,\mathrm V)^2}{2}\right],$$
并联立
$$V_{out}=3\,\mathrm V-R_1I_D.$$
该支路使 $V_{out}$ 保持在 1 V 源极之上，重负载时曲线趋于平坦。例如 $\beta R_1=30\,\mathrm{V^{-1}}$ 时，$V_{in}=1\,\mathrm V$ 得 $V_{out}=1.65\,\mathrm V$，在 1.5 V 时约为 1.17 V。很重的负载，例如 $\beta R_1=1000\,\mathrm{V^{-1}}$，起点接近 1 V。

### 斜率、正偏与结论

在饱和 MOS 支路上，
$$\frac{dV_{out}}{dV_{in}}=-R_1g_{mb},\qquad g_{mb}=\eta g_m,$$
其中
$$g_m=\beta(1\,\mathrm V-V_{TH}),\qquad \eta=\frac{0.45\,\mathrm{V^{1/2}}}{2\sqrt{1.9\,\mathrm V-V_{in}}}.$$
随着 $V_{in}$ 升高，$V_{TH}$ 降低，因此 $g_m$ 和 $\eta$ 同时增大，负斜率的绝对值增大，饱和曲线向下凹。在线性区，负载限制电流，曲线向 1 V 源极电位附近变平。

当 $V_{in}>1\,\mathrm V$ 时，源-衬底结正向偏置。在 1–1.5 V 的一部分范围内，弱正偏可能仍只有较小结电流；更强正偏则可能导通寄生横向 npn，使 $V_{out}$ 进一步降低。结电流大小取决于题目未给出的结参数、温度和器件参数，因此图中 1.5–3 V 阴影区不作定量延拓。

![V_out 随 V_in 变化](/q/R021/solution-vout.zh.svg)

图中用密集采样显示 $\beta R_1=10$、30 和 $1000\,\mathrm{V^{-1}}$ 的 MOS-only 示例。曲线显示到 1.5 V，1 V 源极电位以虚线标出。
