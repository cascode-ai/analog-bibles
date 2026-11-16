对于长沟道 MOSFET，亚阈值（subthreshold）漏极电流可表示为
$$I_D = \mu C_d \frac{W}{L} V_T^2 \exp\left(\frac{V_{GS} - V_{TH}}{\zeta V_T}\right)\left[1 - \exp\left(\frac{-V_{DS}}{V_T}\right)\right],$$
其中 $C_d = \sqrt{\epsilon_{si} q N_{sub}/(4\phi_B)}$ 是栅下耗尽区的单位面积电容，$\phi_B = (kT/q)\ln(N_{sub}/n_i)$，$V_T = kT/q$，$\zeta = 1 + C_d/C_{ox}$。解释在按因子 $\alpha > 1$ 进行的理想恒定电场按比例缩小（constant-field scaling）中，该式中的每个参数如何缩放：所有横向和纵向尺寸都除以 $\alpha$，电源电压和阈值电压（threshold voltage）都除以 $\alpha$，所有掺杂浓度都乘以 $\alpha$。亚阈值斜率（subthreshold slope），即 $I_D$ 每变化十倍所需的 $V_{GS}$ 变化量，会发生什么变化？
