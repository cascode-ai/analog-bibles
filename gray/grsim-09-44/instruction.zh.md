下面介绍一种用 SPICE 仿真回归比（return ratio）而不破坏直流工作点的技术。在反馈环路中选取一点 X，信号在该点从一侧（“返回”侧，朝向放大器输出）流向另一侧（“驱动”侧，朝向放大器输入）。(i) 从地向节点 X 注入交流测试电流 $i_t$；设 $i_d$ 为从 X 流入驱动侧的电流，$i_m$ 为从返回侧流入 X 的电流，计算 $\mathscr{R}'_i = -i_m/i_d$。(ii) 改为在 X 处串联插入交流测试电压源 $v_t$（+ 端接驱动侧）；设 $v_d$ 为驱动侧电压，$v_m$ 为返回侧电压，计算 $\mathscr{R}'_v = -v_m/v_d$。于是回归比由下式给出：$\dfrac{1}{1 + \mathscr{R}} = \dfrac{1}{1 + \mathscr{R}'_i} + \dfrac{1}{1 + \mathscr{R}'_v}$。
将此方法用于 [图 1] 的反相放大器（inverting amplifier），取 $C_{\text{in}} = 4$ pF，其中受控源与 $C_{\text{in}}$ 构成一个简单的运放模型，$a_v(s) = 1000/[(1 + s/100)(1 + s/10^6)]$（$s$ 的单位为 rad/s）。在反馈电阻的左侧（反相输入节点处）注入测试源。
(a) 仿真 1 kHz、100 kHz、10 MHz 和 1 GHz 频率下的回归比。
(b) 画出回归比的幅值和相位曲线，并确定其单位增益频率（unity-gain frequency）以及相位裕度（phase margin）和增益裕度（gain margin）（需将 $\mathscr{R}'_i(j\omega)$ 与 $\mathscr{R}'_v(j\omega)$ 的复数值组合起来）。
将仿真结果与在受控源处断开环路直接算出的回归比进行比较。
