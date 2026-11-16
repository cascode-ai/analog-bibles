# 详细步骤 - R010

**思路。** $V_X$ 只驱动衬底，因此 $V_{GS}$ 和 $V_{DS}$ 固定，$V_X$ 通过阈值电压（threshold voltage）起作用：衬底相当于一个“背栅”（back gate）。计算 $V_{TH}(V_X)$，检查工作区，求出平方律电流和跨导，然后找出衬底与源/漏之间的结在何处变为正向偏置，这决定了该模型能用到多远。

### 第 1 步 — 哪些量固定，哪些量变化

电位较低的端子（1 V）是源极，1.5 V 端是漏极，这与 $V_X$ 无关：

$$
\begin{aligned}
V_{GS} &= 1.9 - 1 = 0.9\ \mathrm{V} \quad(\text{fixed}),\\
V_{DS} &= 1.5 - 1 = 0.5\ \mathrm{V} \quad(\text{fixed}),\\
V_{SB} &= 1 - V_X \quad(\text{varies}).
\end{aligned}
$$

$I_X$ 就是漏极电流（它从 1.5 V 电源流入漏极），因此只要沟道导通，就有 $I_X > 0$。

### 第 2 步 — 阈值电压随 $V_X$ 的变化

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{1.9 - V_X} - 0.9487\right)\ \mathrm{V}.$$

升高 $V_X$ 会减小 $V_{SB}$，从而**降低阈值电压**：

$$
\begin{aligned}
V_X = 0:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{1.9} - 0.9487) = 0.7 + 0.45\times0.4297 = 0.893\ \mathrm{V},\\
V_X = 0.5\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{1.4} - 0.9487) = 0.7 + 0.45\times0.2345 = 0.806\ \mathrm{V},\\
V_X = 1\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{0.9} - 0.9487) = 0.700\ \mathrm{V},\\
V_X = 1.25\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{0.65} - 0.9487) = 0.7 - 0.45\times0.1425 = 0.636\ \mathrm{V},\\
V_X = 1.5\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(\sqrt{0.4} - 0.9487) = 0.7 - 0.45\times0.3162 = 0.558\ \mathrm{V}.
\end{aligned}
$$

当 $V_X > 1$ V 时，衬底电位**高于**源极（$V_{SB} < 0$，正向衬底偏置），阈值电压降到 $V_{TH0}$ 以下。

### 第 3 步 — 工作区

饱和要求

$$0.5\ \mathrm{V} \ge 0.9\ \mathrm{V} - V_{TH} \quad\Longleftrightarrow\quad V_{TH} \ge 0.4\ \mathrm{V}.$$

在 $0 \le V_X \le 1.5$ V 范围内，阈值电压保持在 0.893 V 与 0.558 V 之间，因此 **$M_1$ 处于饱和区**。（形式上，$V_{TH}$ 将在 $V_X \approx 1.82$ V 处达到 0.4 V，但第 6 步表明，在此之前该模型就已失效。）在 $V_X = 0$ 时，器件只是勉强导通：$V_{GS} - V_{TH} = 0.9 - 0.893 = 0.007$ V。

### 第 4 步 — 漏极电流 $I_X$

$$I_X = \tfrac12\beta\,(V_{GS} - V_{TH})^2 = \tfrac12\beta\,\left(0.9 - V_{TH}(V_X)\right)^2 .$$

逐点计算（先求过驱动电压 $V_{ov} = 0.9 - V_{TH}$，再求电流）：

$$
\begin{aligned}
V_X = 0:&\quad V_{ov} = 0.0066\ \mathrm{V}, & I_X &= \tfrac12\beta(0.0066)^2 \approx 2\times10^{-5}\beta\ \mathrm{V^2},\\
V_X = 0.5\ \mathrm{V}:&\quad V_{ov} = 0.094\ \mathrm{V}, & I_X &= \tfrac12\beta(0.094)^2 = 0.0045\beta\ \mathrm{V^2},\\
V_X = 1\ \mathrm{V}:&\quad V_{ov} = 0.200\ \mathrm{V}, & I_X &= \tfrac12\beta(0.200)^2 = 0.020\beta\ \mathrm{V^2},\\
V_X = 1.25\ \mathrm{V}:&\quad V_{ov} = 0.264\ \mathrm{V}, & I_X &= \tfrac12\beta(0.264)^2 = 0.035\beta\ \mathrm{V^2},\\
V_X = 1.5\ \mathrm{V}:&\quad V_{ov} = 0.342\ \mathrm{V}, & I_X &= \tfrac12\beta(0.342)^2 = 0.059\beta\ \mathrm{V^2}.
\end{aligned}
$$

在 $V_X = 0$ 时，电流基本为零；实际器件中是一个很小的亚阈值（subthreshold）电流。

**形状。** 记 $\partial V_{TH}/\partial V_X = -\eta$，$\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}}) = 0.45/(2\sqrt{1.9 - V_X})$：

$$\frac{dI_X}{dV_X} = \beta\,(0.9 - V_{TH})\cdot\left(-\frac{\partial V_{TH}}{\partial V_X}\right) = \beta\,V_{ov}\,\eta .$$

两个因子都随 $V_X$ 增大：$V_{ov}$ 增大是因为阈值电压下降，$\eta$ 增大是因为 $\sqrt{1.9 - V_X}$ 减小（$V_X = 0$ 时 $\eta$ = 0.163，1 V 时为 0.237，1.5 V 时为 0.356）。所以 $I_X$ 是一条**上升且向上凹**（concave up）的曲线，随 $V_X$ 的增长快于抛物线。

### 第 5 步 — 跨导

**栅跨导**（gate transconductance），即通常意义下的跨导：

$$g_m = \beta\,(V_{GS} - V_{TH}) = \beta\,(0.9 - V_{TH}),$$

$$
\begin{aligned}
V_X = 0:&\quad g_m = \beta\,(0.0066\ \mathrm{V}) \approx 0.007\beta,\\
V_X = 0.5\ \mathrm{V}:&\quad g_m = \beta\,(0.094\ \mathrm{V}) = 0.094\beta,\\
V_X = 1\ \mathrm{V}:&\quad g_m = \beta\,(0.200\ \mathrm{V}) = 0.20\beta,\\
V_X = 1.5\ \mathrm{V}:&\quad g_m = \beta\,(0.342\ \mathrm{V}) = 0.34\beta ,
\end{aligned}
$$

它随过驱动电压从基本为零开始上升，曲线略微向上凹。

**体跨导**：若把“跨导”理解为对扫描电压 $V_X$ 本身的灵敏度，则

$$g_{mb} = \frac{\partial I_X}{\partial V_X} = g_m\,\eta = g_m\,\frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} ,$$

$$
\begin{aligned}
V_X = 0:&\quad g_{mb} = 0.0066\beta\times0.163 \approx 0.001\beta,\\
V_X = 1\ \mathrm{V}:&\quad g_{mb} = 0.200\beta\times0.237 = 0.047\beta,\\
V_X = 1.5\ \mathrm{V}:&\quad g_{mb} = 0.342\beta\times0.356 = 0.12\beta .
\end{aligned}
$$

$g_m$ 约为它的 3–6 倍（背栅是较弱的控制电极），它同样随 $V_X$ 增大。

| $V_X$ (V) | $V_{TH}$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) | $g_{mb}/\beta$ (V) |
|---|---|---|---|---|
| 0 | 0.893 | 2×10⁻⁵ | 0.007 | 0.001 |
| 0.5 | 0.806 | 0.0045 | 0.094 | 0.018 |
| 1.0 | 0.700 | 0.020 | 0.20 | 0.047 |
| 1.25 | 0.636 | 0.035 | 0.26 | 0.074 |
| 1.5 | 0.558 | 0.059 | 0.34 | 0.12 |

### 第 6 步 — 范围的上段：正向偏置的结

p 型衬底与 n+ 源区、漏区形成 PN 结：

- **源-衬底结**，正向偏压为 $V_X - 1$。在几百 mV 以内（$1 < V_X \lesssim 1.4$ V），其电流可以忽略，上面的正向衬底偏置计算就是通常的估算。大约从 $V_X \approx 1.5$–$1.7$ V（正向偏压 0.5–0.7 V）起，它大量导通。其二极管电流从 $V_X$ 电源流入 1 V 电池，不经过 $I_X$；但它注入的电子会使**寄生横向 npn 管**导通（源极 = 发射极，衬底 = 基极，漏极 = 集电极），其集电极电流**流入**漏极，与 $I_X$ 方向相同。
- **衬底-漏极结**，正向偏压为 $V_X - 1.5$。它大约从 $V_X \approx 2.1$–$2.2$ V 起导通，其电流从衬底流入漏极，再流向 1.5 V 电源，与 $I_X$ 方向**相反**。

因此，高于约 1.5 V 后，$I_X$ 由结电流和双极晶体管电流决定，这些电流随 $V_X$ 按指数规律增长，并取决于题中未给出的参数（结饱和电流、寄生双极晶体管的增益、衬底电阻）。平方律/体效应（body effect）模型不再适用，所给数据无法确定曲线；在设计合理的电路中，衬底绝不会被驱动到这种程度。

### 结果

$V_{GS} = 0.9$ V 和 $V_{DS} = 0.5$ V 固定；$V_X$ 只改变 $V_{SB} = 1 - V_X$，从而改变

$$V_{TH} = 0.7 + 0.45\left(\sqrt{1.9 - V_X} - \sqrt{0.9}\right)\ \mathrm{V}:\quad 0.893,\ 0.806,\ 0.700,\ 0.636,\ 0.558\ \mathrm{V} \text{ at } V_X = 0,\ 0.5,\ 1,\ 1.25,\ 1.5\ \mathrm{V}.$$

- $M_1$ 处于**饱和区**（过驱动电压低于 0.5 V），$I_X = \tfrac12\beta(0.9 - V_{TH})^2$ 从 $V_X = 0$ 时的基本为零（$\approx 2\times10^{-5}\beta$，勉强导通）上升到 0.5 V 时的 $0.0045\beta$、**1 V 时的 $0.020\beta$**、1.25 V 时的 $0.035\beta$ 和 1.5 V 时的 $0.059\beta$。它的上升快于二次函数，因为 $V_{SB}$ 越小，阈值电压对 $V_{SB}$ 越敏感。
- 栅跨导 $g_m = \beta(0.9 - V_{TH})$ 从 ≈ 0 上升到 **1 V 时的 $0.2\beta$** 和 1.5 V 时的 $0.34\beta$。体跨导 $g_{mb} = \partial I_X/\partial V_X = g_m\gamma/(2\sqrt{1.9 - V_X})$ 从 ≈ $0.001\beta$ 上升到 1 V 时的 $0.047\beta$ 和 1.5 V 时的 $0.12\beta$。
- 当 $V_X > 1$ V 时，源-衬底结正向偏置。在约 1.5 V 以内，上述公式仍是合理的估算。从约 1.5–1.7 V 起，源-衬底结大量导通（并伴有横向 npn 管的作用）；从约 2.1 V 起，衬底-漏极结也开始导通。此时的行为由所给数据无法确定的结电流决定，器件不得工作在这一范围内。

**常见错误。** 把 $V_X$ 当作加在栅极或漏极上的电压，或者认为 $V_X$ 越大越会“使器件截止”。$V_X$ 是衬底电压；升高它会**降低** $V_{SB}$ 和 $V_{TH}$，因此 $I_X$ 随 $V_X$ **增大**。

**常见错误。** 在 $V_X = 0$ 时使用 $V_{TH} = 0.7$ V。衬底比源极低 1 V，因此 $V_{TH} = 0.893$ V，只剩下 7 mV 的过驱动电压。

**常见错误。** 把体效应公式一直用到 $V_X = 3$ V。一旦衬底比源极高出约 0.5–0.6 V 以上，源-衬底结就会导通（随后衬底-漏极结也会导通），平方律曲线便失去意义。
