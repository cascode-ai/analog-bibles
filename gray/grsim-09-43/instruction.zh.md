下面介绍一种用 SPICE 仿真回归比（return ratio）而不破坏直流工作点的技术。在反馈环路中选取一点 X，信号在该点从一侧（“返回”侧，朝向放大器输出）流向另一侧（“驱动”侧，朝向放大器输入）。(i) 从地向节点 X 注入交流测试电流 $i_t$；设 $i_d$ 为从 X 流入驱动侧的电流，$i_m$ 为从返回侧流入 X 的电流，计算 $\mathscr{R}'_i = -i_m/i_d$。(ii) 改为在 X 处串联插入交流测试电压源 $v_t$（+ 端接驱动侧）；设 $v_d$ 为驱动侧电压，$v_m$ 为返回侧电压（均对地），计算 $\mathscr{R}'_v = -v_m/v_d$。于是该受控源的回归比由下式给出：$\dfrac{1}{1 + \mathscr{R}} = \dfrac{1}{1 + \mathscr{R}'_i} + \dfrac{1}{1 + \mathscr{R}'_v}$。
将此方法用于 [图 1] 的 CMOS 运算放大器（op amp），该运放接成同相单位增益结构（输出接 $M_1$ 的栅极，输入加在 $M_2$ 的栅极）。电路条件：电源 ±5 V，偏置电流 20 μA，$C_c$ = 5 pF，$M_9$ 的栅极接正电源，且 $M_9$ 的尺寸使其导通电阻等于 $1/g_{m6}$，从而消除右半平面零点。
(a) 用该方法仿真 1 kHz、100 kHz、10 MHz 和 1 GHz 频率下的回归比。
(b) 用该方法画出回归比的幅值和相位曲线。确定回归比的单位增益频率（unity-gain frequency）以及相位裕度（phase margin）和增益裕度（gain margin）。（这需要将 $\mathscr{R}'_i(j\omega)$ 与 $\mathscr{R}'_v(j\omega)$ 的复数值组合起来，求出复数量 $\mathscr{R}(j\omega)$。）

工艺数据：$k'_n = 60.4$ μA/V²，$k'_p = 30.2$ μA/V²（$t_{ox}$ = 40 nm，$C_{ox}$ = 0.863 fF/μm²），$V_{tn} = 0.7$ V，$V_{tp} = -0.7$ V，$L_d = 0.3$ μm，$X_d = 1$ μm（$L_{\text{eff}} = L_{\text{drwn}} - 2L_d - X_d$），$dX_d/dV_{DS}$ = 0.2 μm/V（n），0.1 μm/V（p），$\lambda = (dX_d/dV_{DS})/L_{\text{eff}}$，$N_A = 10^{15}$ cm⁻³（NMOS 衬底），$N_D = 10^{16}$ cm⁻³（n 阱），交叠电容 0.35 fF/μm。
