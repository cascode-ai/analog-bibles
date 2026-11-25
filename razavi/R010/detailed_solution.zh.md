# 详细解答 - R010

**思路：** 由固定端电压推导体效应沟道曲线，再区分有条件延伸与必须补充结及双极模型的区间。

### 端电压与模型

源、漏、栅电位分别固定在 1 V、1.5 V、1.9 V。由于 $V_B=V_X$：

$$V_{GS}=V_G-V_S=0.9\ \mathrm V,\qquad V_{DS}=V_D-V_S=0.5\ \mathrm V,$$
$$V_{SB}=V_S-V_B=1\ \mathrm V-V_X.$$

取 $\beta=\mu_nC_{ox}W/L$，忽略沟道长度调制，并先假设结电流可忽略。体效应关系为：

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

代入后得到（数值表达式中电压以 V 计）：

$$V_{TH}=0.7+0.45\left(\sqrt{1.9-V_X}-\sqrt{0.9}\right).$$

### 饱和条件与所求量

沟道导通条件为 $V_{GS}>V_{TH}$，饱和条件为 $V_{DS}\ge V_{GS}-V_{TH}$。0–1 V 内阈值从 $0.893375$ V 降至 $0.700$ V，因此：

$$0.006625\ \mathrm V\lesssim V_{GS}-V_{TH}\le0.200\ \mathrm V<0.5\ \mathrm V.$$

饱和电流与栅跨导的通用方程为：

$$I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad
 g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta(V_{GS}-V_{TH}).$$

结电流可忽略时，漏电流与 $I_X$ 箭头一致，故：

$$I_X=\frac12\beta(0.9-V_{TH})^2,\qquad g_m=\beta(0.9-V_{TH}).$$

代表性代入：$V_X=1$ V 时，$V_{TH}=0.700$ V，得到 $I_X/\beta=0.02000$ V²、$g_m/\beta=0.2000$ V。起点过驱动仅约 6.6 mV，平方律数值只能视为形式估算；弱反型行为需要更完整的模型。

### 单调性与体跨导

源、漏、栅电压固定时，对阈值公式求导：

$$\frac{dV_{TH}}{dV_X}=-\frac{\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}.$$

体跨导定义为电流对衬底电压的响应，由链式法则：

$$g_{mb}=\left.\frac{\partial I_X}{\partial V_X}\right|_{V_G,V_D,V_S}
=-g_m\frac{dV_{TH}}{dV_X}
=g_m\frac{\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}>0,$$
$$\frac{dg_m}{dV_X}=\frac{\beta\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}>0.$$

因此电流和栅跨导均随扫描升高。衬底扫描的电流斜率为 $g_{mb}$，题目通常所指的器件跨导则为 $g_m$。

### 结正偏与条件性延伸

p 型衬底与 n 型源、漏形成的结，其正偏极性条件为：

$$V_B>V_S\ \Longleftrightarrow\ V_X>1\ \mathrm V,\qquad
V_B>V_D\ \Longleftrightarrow\ V_X>1.5\ \mathrm V.$$

这是电压极性边界，不是通用的强注入阈值；结电流取决于未给定的参数。若结电流仍可忽略，可以将纯沟道公式示例延伸至 1–1.5 V：阈值降至 $0.55770$ V，过驱动为 $0.34230$ V，仍低于 $V_{DS}$。在该假设下，终点为 $I_X/\beta=0.05859$ V²、$g_m/\beta=0.3423$ V。

结注入不可忽略后，总漏端电流可能包含结电流及寄生双极贡献。题给参数不能确定它们的大小、高偏置电流符号、平台或整个器件的跨导曲线。体效应根号式不得超出数学定义域（$V_X\le1.9$ V）；处于该定义域内也不等于模型在物理上有效。

### 所需曲线与结论

电流和栅跨导各有独立坐标轴。实线表示 0–1 V，虚线表示 1–1.5 V 的条件性延伸；灰色上部区间不指定曲线，结正偏也可能使虚线段在其终点之前失效。仅绘图刻度采用 $\beta=1\ \mathrm{mA/V^2}$，两条纵轴数值均随 $\beta$ 成比例缩放。

![R010：电流与栅跨导、条件性延伸及不能确定的区间](/q/R010/solution-curves.zh.svg)
