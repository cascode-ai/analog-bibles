# Golden Solution - R088

## 参考答案

在示例参数下，将 $V_{in}=0$ 代入线性区节点方程，得 $V_{out}(0)\approx 0.186\ \mathrm{V}$。计入体效应后，截止条件为 $V_b-V_{in,off}=V_{TH}(V_{in,off})$，当 $V_b=1.5\ \mathrm{V}$ 时得 $V_{in,off}\approx 0.664\ \mathrm{V}$。

共栅传输曲线单调上升至 $(3\ \mathrm{V},3\ \mathrm{V})$。令 $u=V_b-V_{in}-V_{TH}(V_{in})$，其中 $V_{TH}(V_{in})=V_{TH0}+\gamma(\sqrt{2|\phi_F|+V_{in}}-\sqrt{2|\phi_F|})$。

- 当 $u>0$ 时，求解 $(V_{DD}-V_{out})/R_D=(V_{out}-V_{in})/R_F+I_{D1}$。令 $V_{DS}=V_{out}-V_{in}$。当 $0\le V_{DS}<u$ 时取 $I_{D1}=\beta(uV_{DS}-V_{DS}^2/2)$，当 $V_{DS}\ge u$ 时取 $I_{D1}=\beta u^2/2$。
- 若存在线性区与饱和区边界，则满足 $V_{out}=V_b-V_{TH}(V_{in})$。将此电压及 $I_{D1}=\beta u^2/2$ 代入节点方程即可求得边界。
- 若扫描到达 $u=0$，器件进入截止区。此时 $I_{D1}=0$，$V_{out}=(R_FV_{DD}+R_DV_{in})/(R_D+R_F)$。饱和曲线与分压线以相同斜率 $R_D/(R_D+R_F)$ 相接。

![传输特性示例](/q/R088/solution-01.zh.svg)

## 评分说明

+2：曲线从较低的 $V_{out}(0)$ 单调上升至 $V_{DD}$，截止点约为 $V_{in}=V_b-V_{TH}$（提及或计入 $V_{SB}=V_{in}$ 引起的体效应），截止后的分压线斜率为 $R_D/(R_D+R_F)$，并给出线性区与饱和区边界 $V_{out}=V_b-V_{TH}$。+1：形状与截止点正确，但漏画分压线或线性区，或忽略体效应。0：曲线上升，但将截止后的 $V_{out}$ 取为 $V_{DD}$（忽略 $R_F$），或趋势正确但工作区标错。−2（明确断言错误结论）：画成反相特性，把 $V_{in}$ 当作栅极输入，或误认为 $R_F$ 接地或接栅极。

