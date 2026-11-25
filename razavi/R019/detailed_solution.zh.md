# 详细步骤 - R019

**思路：** 由负载电流平衡求传输曲线，并按输入决定的体偏压计算阈值。

### 端电压与体效应

令 $I_{SD}$ 为由源极流向漏极的正向沟道电流。忽略栅极和结漏电，输出节点 KCL 为

$$I_{SD}=\frac{V_{out}}{R_1}.$$

在 $0\le V_{in}\le V_{DD}$ 内，若输出为负，沟道和电阻都会向输出节点供电。若输出高于 $V_{in}$，二者均无法向该节点供电。因此 $0\le V_{out}\le V_{in}$，电位较高的输入端为 PMOS 源极。图中栅极固定在 $1\,\mathrm{V}$，题干给出 n 阱接 $V_{DD}=3\,\mathrm{V}$。

$$V_{SG}=V_{in}-1\,\mathrm{V},\qquad V_{SD}=V_{in}-V_{out},\qquad V_{BS}=V_{DD}-V_{in}.$$

源极和漏极与 n 阱之间的结均为零偏或反偏。采用 $\lambda=0$ 的长沟道平方律模型，阈值幅度为

$$|V_{TH}|=|V_{TH0}|+\gamma\left(\sqrt{2|\phi_F|+V_{BS}}-\sqrt{2|\phi_F|}\right).$$

其中 $|V_{TH0}|=0.8\,\mathrm{V}$、$\gamma=0.4\,\mathrm{V}^{1/2}$、$2|\phi_F|=0.8\,\mathrm{V}$。随 $V_{in}$ 升高，$V_{BS}$ 减小，$|V_{TH}|$ 也随之降低。

### 截止区与饱和区

定义过驱动 $V_{ov}=V_{SG}-|V_{TH}|$。由于 $V_{SG}$ 随输入升高而增大、$|V_{TH}|$ 随之减小，开启输入 $V_{in,on}$ 是 $V_{ov}=0$ 的唯一根。代入阈值公式得 $V_{in,on}=1.98162\,\mathrm{V}$，固定阈值时为 $1.8\,\mathrm{V}$。当 $V_{in}\le V_{in,on}$ 时，$I_{SD}=0$，由 KCL 得 $V_{out}=0$。

刚开启时有 $V_{SD}\ge V_{ov}>0$，沟道工作在饱和区。由饱和电流公式和 KCL 得

$$V_{out}=\frac{\beta_p R_1}{2}V_{ov}^2,\qquad V_{out}\le 1\,\mathrm{V}+|V_{TH}|.$$

右侧不等式由端电压代入 $V_{SD}\ge V_{ov}$ 得到。饱和段斜率为 $dV_{out}/dV_{in}=\beta_p R_1 V_{ov}\,dV_{ov}/dV_{in}$。开启点斜率为零，此后 $V_{ov}$ 及其正导数均增大，故饱和段斜率上升。平方律针对过驱动，输入与过驱动的关系还受体效应影响。

### 工作区交界与线性区

饱和解随输入上升，边界电平 $1\,\mathrm{V}+|V_{TH}|$ 则随之下降。$V_{in}=3\,\mathrm{V}$ 时，$V_{BS}=0$、$V_{ov}=1.2\,\mathrm{V}$，边界电平为 $1.8\,\mathrm{V}$。因此，在 3 V 之前进入线性区的充要条件为

$$ (0.72\,\mathrm{V}^2)\beta_p R_1>1.8\,\mathrm{V}
\qquad\Longleftrightarrow\qquad
\beta_p R_1>2.5\,\mathrm{V}^{-1}.$$

等号对应边界位于 3 V。$\beta_p R_1$ 更小时，导通段保持饱和，$V_{out}(3\,\mathrm{V})=(0.72\,\mathrm{V}^2)\beta_p R_1$。

线性区满足 $0<V_{SD}<V_{ov}$，由电流公式得到

$$\frac{V_{out}}{R_1}=\beta_p\left(V_{ov}V_{SD}-\frac{V_{SD}^2}{2}\right).$$

在 $V_{SD}=V_{ov}$ 处，电流与饱和区相同，电流对 $V_{SD}$ 的偏导数为零。因此两段曲线的斜率连续。在固定且超过开启点的输入下，增大 $\beta_pR_1$ 会减小线性区压降 $V_{in}-V_{out}$。当 $V_{SD}\ll V_{ov}$ 时，沟道电阻近似为 $1/(\beta_p V_{ov})$，故输出随 $\beta_p R_1$ 增大而从下方接近 $V_{in}$。

### 曲线计算

取 $\beta_p R_1=1\,\mathrm{V}^{-1}$，3 V 输入下的饱和区输出为 $(0.72\,\mathrm{V}^2)(1\,\mathrm{V}^{-1})=0.720\,\mathrm{V}$。取 $\beta_p R_1=10\,\mathrm{V}^{-1}$，由饱和解和 $V_{out}=1\,\mathrm{V}+|V_{TH}|$ 联立求得边界 $V_{in}=2.5120\,\mathrm{V}$、$V_{out}=1.8962\,\mathrm{V}$。线性区方程给出 3 V 输入时 $V_{out}=2.7440\,\mathrm{V}$。图中画出两组示例参数对应的完整扫描曲线。

![两组器件与负载参数下计算得到的 PMOS 传输曲线](/q/R019/solution-r019.zh.svg)
