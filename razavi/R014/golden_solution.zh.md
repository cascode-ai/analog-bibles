在仅考虑沟道的模型中，$M_1$ 导通时，$I_X$ 与本征跨导 $g_m$ 随 $V_X$ 升高而下降。$R_1$ 跨接栅源，源极节点方程与端电压为

$$I_X=I_1-\frac{V_{GS}}{R_1},\quad V_{GS}=V_X-V_S,\quad V_{DS}=2\,\mathrm V-V_S,\quad V_{SB}=V_S.$$

阈值 $V_{TH}(V_S)$ 随源极电压变化。定义过驱动 $V_{ov}=V_{GS}-V_{TH}$。在 $V_{ov}>0$、$V_{DS}>0$ 且 $\lambda=0$ 的平方律模型下，有

| 工作区 | $I_X$ | $g_m$ |
|---|---|---|
| 饱和区，$V_X\le2\,\mathrm V+V_{TH}$ | $\beta V_{ov}^2/2$ | $\beta V_{ov}$ |
| 线性区，$V_X>2\,\mathrm V+V_{TH}$ | $\beta(V_{ov}V_{DS}-V_{DS}^2/2)$ | $\beta V_{DS}$ |

阈值固定时，饱和段为水平线。过驱动的相对变化很小时，饱和段近似水平。只有在工作区边界仍导通时，沟道才会进入线性区。

若 $I_1R_1\le V_{TH0}$，则在 $V_S\ge0$ 的区段内均截止。否则，当扫到下式给出的边界时，沟道在该区段内截止。

$$V_{TH}(V_{S,\mathrm{off}})=I_1R_1,\qquad V_{X,\mathrm{off}}=V_{S,\mathrm{off}}+I_1R_1.$$

截止后，两条曲线均保持为零。低输入灰区需要源衬底结特性和电流源顺从电压数据。

![两组示例的漏极电流随输入电压变化](/q/R014/solution-r014.zh.svg)

![同两组示例的本征跨导随输入电压变化](/q/R014/solution-r014-gm.zh.svg)
