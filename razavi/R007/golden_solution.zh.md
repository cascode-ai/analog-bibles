取 $\beta=\mu_nC_{ox}W/L$，忽略 CLM，$g_m$ 表示器件栅跨导的正幅值。阈值与导通区的通用关系为：

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$
$$\begin{aligned}
\text{线性区：}\quad &I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac12V_{DS}^2\right],\qquad g_m=\beta V_{DS},\\
\text{饱和区：}\quad &I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad g_m=\beta(V_{GS}-V_{TH}).
\end{aligned}$$

当 $V_X<1$ V 时，$V_X$ 端为源极，$I_X=-I_D$；当 $V_X>1$ V 时，1 V 端为源极，$I_X=I_D$。代入题给参数，得到（数值式中的电压以 V 计）：

$$V_{TH}(V_X)=0.7+0.45\left(\sqrt{0.9+V_X}-\sqrt{0.9}\right),\qquad 0\le V_X\le1,$$
$$I_X=-\beta[(1.9-V_X-V_{TH})(1-V_X)-\tfrac12(1-V_X)^2],\qquad g_m=\beta(1-V_X),\quad V_X<1.$$

| $V_X$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|
| 0 | −0.70000 | 1.00 |
| 0.25 | −0.38950 | 0.75 |
| 0.5 | −0.17223 | 0.50 |
| 0.75 | −0.04347 | 0.25 |
| 1 | 0 | 0 |

电流在 1 V 处过零，源漏角色互换。其上 $V_{TH}=0.893375$ V，过驱动电压固定为约 0.006625 V。在短线性区：

$$I_X=\beta[0.006625(V_X-1)-\tfrac12(V_X-1)^2],\quad g_m=\beta(V_X-1),\quad1<V_X<1.006625.$$

其后进入饱和平台，$I_X/\beta\approx2.195\times10^{-5}$ V²、$g_m/\beta\approx0.006625$ V。这些微小数值是强反型平方律的形式结果，近阈值处精度有限。无体效应时，平台从 1.2 V 开始，$I_X/\beta=0.020$ V²、$g_m/\beta=0.200$ V。

![R007：归一化电流与栅跨导曲线](/q/R007/review-curves.svg)

## 评分说明

+2：识别源漏互换、1 V 以下反向线性电流（起点约 −0.7β）、1 V 过零，以上体效应使器件仅勉强导通；给出跨导先下降再近零。+1：忽略体效应得到 1.2 V 后 0.02β 平台，或描述正确但无数值。0：漏掉负电流区域而其余正确。−2：1 V 以下正电流、以上大电流，或始终把 1 V 端当源极。近阈值微小平台须注明平方律模型限制。
